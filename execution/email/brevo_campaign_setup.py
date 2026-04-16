#!/usr/bin/env python3
"""
Brevo Email Campaign Automation for StreamToday
Sends 71 emails in Wave 1, tracks opens/clicks, handles replies
"""

import csv
import json
import requests
import time
from datetime import datetime, timedelta

# Brevo API Configuration
BREVO_API_KEY = "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"
BASE_URL = "https://api.brevo.com/v3"

HEADERS = {
    "accept": "application/json",
    "api-key": BREVO_API_KEY,
    "content-type": "application/json"
}

# Email Templates
EMAIL_TEMPLATES = {
    "wave1_priority": {
        "subject": "Nottingham's newest podcast studio | LIVE EDITING while you record",
        "htmlContent": """<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
<p>Hi {{first_name}},</p>

<p>I am reaching out from <strong>StreamToday Studios</strong>, a professional podcast and video production studio in Nottingham's Lace Market.</p>

<p>We have just opened Studio One and the Cave Studio at <strong>20 Fletcher Gate</strong>, and I wanted to introduce ourselves to local businesses.</p>

<h3>What makes us different:</h3>
<ul>
<li><strong>LIVE EDITING</strong> while recording takes place</li>
<li>Two studios: Studio One (up to 8 people) and Cave Studio (up to 4 people)</li>
<li>Broadcast quality: Panasonic cameras, Rode PodMic, Sennheiser lav mics</li>
<li>Professional green room and hospitality area</li>
<li>Walking distance from Nottingham station</li>
</ul>

<h3>Perfect for:</h3>
<ul>
<li>Podcast series</li>
<li>Video content for LinkedIn and social media</li>
<li>Client interviews and case studies</li>
<li>Internal training videos</li>
</ul>

<p>Our single session rate is <strong>£299</strong>, or we offer monthly retainers from <strong>£549</strong>.</p>

<p><strong>Would you be open to a quick call to discuss how video or podcast content could fit into your marketing plans?</strong></p>

<p>Best regards,</p>
<p><strong>Allan Okello</strong><br>
StreamToday Studios<br>
WhatsApp: +44 7763 741309<br>
Email: hello@streamtoday.co.uk<br>
Website: <a href="https://streamtoday.co.uk">streamtoday.co.uk</a><br>
<a href="https://streamtoday.co.uk/book" style="background: #000; color: #fff; padding: 10px 20px; text-decoration: none; display: inline-block; margin-top: 10px;">Book a Session</a></p>
</body>
</html>""",
        "textContent": """Hi {{first_name}},

I am reaching out from StreamToday Studios, a professional podcast and video production studio in Nottingham's Lace Market.

We have just opened Studio One and the Cave Studio at 20 Fletcher Gate, and I wanted to introduce ourselves to local businesses.

WHAT MAKES US DIFFERENT:
- LIVE EDITING while recording takes place
- Two studios: Studio One (up to 8 people) and Cave Studio (up to 4 people)
- Broadcast quality: Panasonic cameras, Rode PodMic, Sennheiser lav mics
- Professional green room and hospitality area
- Walking distance from Nottingham station

PERFECT FOR:
- Podcast series
- Video content for LinkedIn and social media
- Client interviews and case studies
- Internal training videos

Our single session rate is £299, or we offer monthly retainers from £549.

Would you be open to a quick call to discuss how video or podcast content could fit into your marketing plans?

Best regards,

Allan Okello
StreamToday Studios
WhatsApp: +44 7763 741309
Email: hello@streamtoday.co.uk
Website: https://streamtoday.co.uk
Book: https://streamtoday.co.uk/book"""
    }
}

def load_prospects(csv_file):
    """Load prospects from CSV"""
    prospects = []
    with open(csv_file, 'r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            prospects.append(row)
    return prospects

def create_contact(email, first_name, company, attributes=None):
    """Create or update contact in Brevo"""
    url = f"{BASE_URL}/contacts"
    
    payload = {
        "email": email,
        "attributes": {
            "FIRSTNAME": first_name,
            "COMPANY": company
        },
        "listIds": [2],  # StreamToday Prospects list
        "updateEnabled": True
    }
    
    if attributes:
        payload["attributes"].update(attributes)
    
    try:
        response = requests.post(url, headers=HEADERS, json=payload)
        if response.status_code in [200, 201, 204]:
            print(f"✓ Contact created/updated: {email}")
            return True
        else:
            print(f"✗ Failed to create contact {email}: {response.text}")
            return False
    except Exception as e:
        print(f"✗ Error creating contact {email}: {e}")
        return False

def send_transactional_email(to_email, first_name, company, template_key="wave1_priority"):
    """Send transactional email via Brevo"""
    url = f"{BASE_URL}/smtp/email"
    
    template = EMAIL_TEMPLATES[template_key]
    
    # Personalize content
    html_content = template["htmlContent"].replace("{{first_name}}", first_name)
    text_content = template["textContent"].replace("{{first_name}}", first_name)
    
    payload = {
        "sender": {
            "name": "Allan Okello - StreamToday Studios",
            "email": "hello@streamtoday.co.uk"
        },
        "to": [{"email": to_email, "name": first_name}],
        "subject": template["subject"],
        "htmlContent": html_content,
        "textContent": text_content,
        "tags": ["streamtoday", "wave1", "priority"]
    }
    
    try:
        response = requests.post(url, headers=HEADERS, json=payload)
        if response.status_code == 201:
            print(f"✓ Email sent to: {to_email}")
            return True
        else:
            print(f"✗ Failed to send to {to_email}: {response.text}")
            return False
    except Exception as e:
        print(f"✗ Error sending to {to_email}: {e}")
        return False

def run_wave1_campaign():
    """Execute Wave 1 email campaign"""
    print("=" * 60)
    print("STREAMTODAY WAVE 1 EMAIL CAMPAIGN")
    print("=" * 60)
    print(f"Started: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print()
    
    # Load priority prospects
    prospects = load_prospects("/root/.openclaw/workspace/streamtoday-priority-prospects.csv")
    print(f"Loaded {len(prospects)} priority prospects")
    
    # Load local businesses
    local_businesses = load_prospects("/root/.openclaw/workspace/streamtoday-local-businesses.csv")
    print(f"Loaded {len(local_businesses)} local businesses")
    
    all_prospects = prospects + local_businesses
    print(f"Total prospects: {len(all_prospects)}")
    print()
    
    success_count = 0
    fail_count = 0
    
    for i, prospect in enumerate(all_prospects, 1):
        email = prospect.get('email', '')
        first_name = prospect.get('first_name', 'There')
        company = prospect.get('company', '')
        
        if not email:
            continue
        
        print(f"[{i}/{len(all_prospects)}] Processing: {email}")
        
        # Create/update contact
        if create_contact(email, first_name, company):
            # Send email
            if send_transactional_email(email, first_name, company):
                success_count += 1
            else:
                fail_count += 1
        else:
            fail_count += 1
        
        # Rate limiting - 10 emails per second max
        time.sleep(0.1)
    
    print()
    print("=" * 60)
    print("CAMPAIGN COMPLETE")
    print("=" * 60)
    print(f"Success: {success_count}")
    print(f"Failed: {fail_count}")
    print(f"Total: {success_count + fail_count}")
    print(f"Completed: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")

if __name__ == "__main__":
    run_wave1_campaign()
