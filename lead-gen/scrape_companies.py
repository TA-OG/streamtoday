#!/usr/bin/env python3
"""
StreamToday Lead Generation - East Midlands Companies
Scrapes Companies House for marketing/media companies in Nottingham, Derby, Leicester
Then uses Hunter.io to find director email addresses
"""

import requests
import json
import time
import os
from base64 import b64encode

# Companies House API
CH_API_KEY = "8af799ee-29fb-419d-ad44-387600f17e3d"
CH_AUTH = b64encode(f"{CH_API_KEY}:".encode()).decode()
CH_BASE = "https://api.company-information.service.gov.uk"

# Hunter.io API
HUNTER_API_KEY = os.environ.get("HUNTER_API_KEY", "")

# East Midlands postcode prefixes
EM_POSTCODES = ["NG", "DE", "LE", "LN", "S"]

# SIC codes for target industries
# 73110 - Advertising agencies
# 73120 - Media representation services  
# 62020 - IT consultancy (tech companies that need content)
# 69201 - Accounting activities (professional services)
# 69109 - Other legal activities
# 70229 - Management consultancy
SIC_CODES = ["73110", "73120", "62020", "69201", "69109", "70229"]

def is_east_midlands(address):
    """Check if address is in East Midlands by postcode prefix"""
    if not address:
        return False
    postcode = address.get("postal_code", "").upper()
    for prefix in EM_POSTCODES:
        if postcode.startswith(prefix):
            return True
    return False

def get_companies_by_sic(sic_code, start_index=0, items_per_page=20):
    """Get companies with given SIC code"""
    url = f"{CH_BASE}/advanced-search/companies"
    params = {
        "sic_codes": sic_code,
        "start_index": start_index,
        "items_per_page": items_per_page
    }
    headers = {"Authorization": f"Basic {CH_AUTH}"}
    
    try:
        resp = requests.get(url, params=params, headers=headers, timeout=30)
        if resp.status_code == 200:
            return resp.json()
        else:
            print(f"Error fetching SIC {sic_code}: {resp.status_code}")
            return {"items": []}
    except Exception as e:
        print(f"Exception fetching SIC {sic_code}: {e}")
        return {"items": []}

def get_company_officers(company_number):
    """Get officers (directors) for a company"""
    url = f"{CH_BASE}/company/{company_number}/officers"
    headers = {"Authorization": f"Basic {CH_AUTH}"}
    
    try:
        resp = requests.get(url, headers=headers, timeout=30)
        if resp.status_code == 200:
            data = resp.json()
            # Filter for active directors
            officers = []
            for item in data.get("items", []):
                if item.get("officer_role") == "director":
                    # Check if resigned
                    resigned = item.get("resigned_on")
                    if not resigned:
                        officers.append({
                            "name": item.get("name", ""),
                            "appointed_on": item.get("appointed_on", ""),
                        })
            return officers
        else:
            return []
    except Exception as e:
        print(f"Error fetching officers for {company_number}: {e}")
        return []

def find_email_with_hunter(domain, first_name=None, last_name=None):
    """Find email address using Hunter.io"""
    if not HUNTER_API_KEY:
        return None
    
    url = "https://api.hunter.io/v2/email-finder"
    params = {
        "domain": domain,
        "api_key": HUNTER_API_KEY
    }
    if first_name:
        params["first_name"] = first_name
    if last_name:
        params["last_name"] = last_name
    
    try:
        resp = requests.get(url, params=params, timeout=15)
        if resp.status_code == 200:
            data = resp.json()
            email = data.get("data", {}).get("email")
            if email:
                return email
        # Rate limit - wait
        if resp.status_code == 429:
            print("Hunter.io rate limited, waiting 60s")
            time.sleep(60)
            return find_email_with_hunter(domain, first_name, last_name)
    except Exception as e:
        print(f"Error with Hunter.io: {e}")
    
    return None

def extract_domain_from_address(address):
    """Try to extract a company name from address to form a domain"""
    # This is a heuristic - not reliable
    address_line = address.get("address_line_1", "") if address else ""
    # Remove common suffixes
    name = address_line.replace("Limited", "").replace("Ltd", "").replace("The", "").strip()
    # Simple domain guess
    if name:
        return name.lower().replace(" ", "").replace("&", "and") + ".com"
    return None

def main():
    print("Starting StreamToday lead generation...")
    print(f"Hunter.io API key configured: {'Yes' if HUNTER_API_KEY else 'No'}")
    
    all_leads = []
    
    for sic_code in SIC_CODES:
        print(f"\nSearching SIC code {sic_code}...")
        start_index = 0
        page = 0
        
        while page < 5:  # Limit to 100 companies per SIC code
            data = get_companies_by_sic(sic_code, start_index, 20)
            items = data.get("items", [])
            
            if not items:
                break
            
            for company in items:
                address = company.get("registered_office_address", {})
                
                # Filter by East Midlands location
                if not is_east_midlands(address):
                    continue
                
                # Skip dissolved companies
                if company.get("company_status") != "active":
                    continue
                
                company_name = company.get("company_name", "")
                company_number = company.get("company_number", "")
                
                print(f"  Found: {company_name} ({company_number})")
                
                # Get officers
                officers = get_company_officers(company_number)
                
                for officer in officers:
                    officer_name = officer.get("name", "")
                    
                    # Split name into first/last
                    name_parts = officer_name.split(", ") if ", " in officer_name else officer_name.split()
                    if len(name_parts) >= 2 and "," in officer_name:
                        last_name = name_parts[0].strip()
                        first_name = " ".join(name_parts[1:]).strip()
                    elif len(name_parts) >= 2:
                        first_name = name_parts[0].strip()
                        last_name = " ".join(name_parts[1:]).strip()
                    else:
                        first_name = officer_name
                        last_name = ""
                    
                    # Try to find email
                    # First attempt: guess domain from company name
                    domain_guess = company_name.lower().replace(" ", "").replace("ltd", "").replace("limited", "").replace("&", "and") + ".com"
                    
                    email = None
                    if HUNTER_API_KEY:
                        email = find_email_with_hunter(domain_guess, first_name, last_name)
                    
                    lead = {
                        "company_name": company_name,
                        "company_number": company_number,
                        "address": address,
                        "officer_name": officer_name,
                        "first_name": first_name,
                        "last_name": last_name,
                        "email": email,
                        "sic_code": sic_code,
                    }
                    all_leads.append(lead)
                    
                    print(f"    Officer: {officer_name} -> Email: {email or 'Not found'}")
                    
                    # Rate limit protection for Hunter.io (50 searches/month)
                    if HUNTER_API_KEY:
                        time.sleep(2)  # Slow down to preserve quota
            
            start_index += 20
            page += 1
            time.sleep(1)  # Be nice to Companies House API
    
    # Save results
    output_file = "projects/streamtoday/lead-gen/leads.json"
    with open(output_file, "w") as f:
        json.dump(all_leads, f, indent=2)
    
    print(f"\n\nTotal leads found: {len(all_leads)}")
    print(f"Leads with emails: {sum(1 for l in all_leads if l['email'])}")
    print(f"Results saved to {output_file}")

if __name__ == "__main__":
    main()
