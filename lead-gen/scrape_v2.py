#!/usr/bin/env python3
"""
StreamToday Lead Generation v2
Search Companies House by location keywords, filter for marketing/media/professional services
"""

import requests
import json
import time
import os
from base64 import b64encode

CH_API_KEY = "8af799ee-29fb-419d-ad44-387600f17e3d"
CH_AUTH = b64encode(f"{CH_API_KEY}:".encode()).decode()
CH_BASE = "https://api.company-information.service.gov.uk"

HUNTER_API_KEY = ""  # Set if available

# Search queries combining industry + location
SEARCH_QUERIES = [
    "marketing nottingham",
    "marketing derby",
    "marketing leicester",
    "media nottingham",
    "media derby",
    "media leicester",
    "advertising nottingham",
    "advertising derby",
    "advertising leicester",
    "digital nottingham",
    "digital derby",
    "digital leicester",
    "creative nottingham",
    "creative derby",
    "creative leicester",
]

# Target SIC codes
TARGET_SIC = {"73110", "73120", "62020", "70229", "58190", "59111", "59112", "59113"}

def search_companies(query, page=0):
    """Search Companies House by query string"""
    url = f"{CH_BASE}/search/companies"
    params = {
        "q": query,
        "items_per_page": 20,
        "start_index": page * 20
    }
    headers = {"Authorization": f"Basic {CH_AUTH}"}
    
    try:
        resp = requests.get(url, params=params, headers=headers, timeout=30)
        if resp.status_code == 200:
            return resp.json()
        return {"items": []}
    except Exception as e:
        print(f"Error searching '{query}': {e}")
        return {"items": []}

def get_company_profile(company_number):
    """Get full company profile including SIC codes"""
    url = f"{CH_BASE}/company/{company_number}"
    headers = {"Authorization": f"Basic {CH_AUTH}"}
    
    try:
        resp = requests.get(url, headers=headers, timeout=30)
        if resp.status_code == 200:
            return resp.json()
        return None
    except:
        return None

def get_officers(company_number):
    """Get active directors"""
    url = f"{CH_BASE}/company/{company_number}/officers"
    headers = {"Authorization": f"Basic {CH_AUTH}"}
    
    try:
        resp = requests.get(url, headers=headers, timeout=30)
        if resp.status_code == 200:
            data = resp.json()
            return [
                o for o in data.get("items", [])
                if o.get("officer_role") == "director" and not o.get("resigned_on")
            ]
        return []
    except:
        return []

def is_east_midlands(address_str):
    """Check if address contains East Midlands indicators"""
    if not address_str:
        return False
    lower = address_str.lower()
    # Check for East Midlands postcodes or city names
    em_indicators = [
        "nottingham", "derby", "leicester", "lincoln", "sheffield",
        "ng1", "ng2", "ng3", "ng4", "ng5", "ng6", "ng7", "ng8", "ng9", "ng10",
        "de1", "de2", "de3", "de4", "de5", "de6", "de7", "de21", "de22", "de23", "de24",
        "le1", "le2", "le3", "le4", "le5", "le6", "le7", "le8", "le9", "le10",
        "ln1", "ln2", "ln3", "ln4", "ln5", "ln6",
    ]
    return any(ind in lower for ind in em_indicators)

def main():
    print("StreamToday Lead Generation - East Midlands")
    print("=" * 50)
    
    seen_companies = set()
    leads = []
    
    for query in SEARCH_QUERIES:
        print(f"\nSearching: {query}")
        
        for page in range(2):  # 2 pages per query = 40 results
            data = search_companies(query, page)
            items = data.get("items", [])
            
            if not items:
                break
            
            for company in items:
                company_number = company.get("company_number", "")
                
                # Skip duplicates
                if company_number in seen_companies:
                    continue
                seen_companies.add(company_number)
                
                # Check status
                if company.get("company_status") != "active":
                    continue
                
                # Check location
                addr_snippet = company.get("address_snippet", "")
                if not is_east_midlands(addr_snippet):
                    continue
                
                # Get full profile to check SIC codes
                profile = get_company_profile(company_number)
                if not profile:
                    continue
                
                sic_codes = profile.get("sic_codes", [])
                # Accept if matches target SIC or if we can't determine
                if sic_codes and not any(s in TARGET_SIC for s in sic_codes):
                    continue
                
                company_name = company.get("title", "")
                print(f"  Target: {company_name} ({company_number})")
                
                # Get officers
                officers = get_officers(company_number)
                
                for officer in officers:
                    name = officer.get("name", "")
                    
                    # Parse name
                    if ", " in name:
                        parts = name.split(", ", 1)
                        last_name = parts[0].strip()
                        first_name = parts[1].strip()
                    else:
                        parts = name.split()
                        if len(parts) >= 2:
                            first_name = parts[0]
                            last_name = " ".join(parts[1:])
                        else:
                            first_name = name
                            last_name = ""
                    
                    lead = {
                        "company_name": company_name,
                        "company_number": company_number,
                        "address": addr_snippet,
                        "sic_codes": sic_codes,
                        "officer_name": name,
                        "first_name": first_name,
                        "last_name": last_name,
                        "email": None,
                    }
                    leads.append(lead)
                    
                    print(f"    -> {name}")
                
                # Rate limit
                time.sleep(0.5)
            
            time.sleep(0.5)
    
    # Save results
    output = "projects/streamtoday/lead-gen/leads.json"
    with open(output, "w") as f:
        json.dump(leads, f, indent=2)
    
    print(f"\n\nTotal leads: {len(leads)}")
    print(f"Saved to {output}")

if __name__ == "__main__":
    main()
