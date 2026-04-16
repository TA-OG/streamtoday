#!/usr/bin/env python3
"""
COMPETITOR POACHING CAMPAIGN
Find clients using competitor studios, offer 3 free sessions to switch
"""

import csv
import requests
import time
from datetime import datetime

BREVO_API_KEY = "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"
BASE_URL = "https://api.brevo.com/v3"

HEADERS = {
    "accept": "application/json",
    "api-key": BREVO_API_KEY,
    "content-type": "application/json"
}

# Manually researched Nottingham podcasters/businesses using various studios
POACH_TARGETS = [
    {"name": "Nottingham Business Podcast", "contact": "info@nottinghambusiness.co.uk", "first_name": "Team"},
    {"name": "East Midlands Chamber", "contact": "comms@emccltd.co.uk", "first_name": "Comms"},
    {"name": "Nottingham Trent University", "contact": "marketing@ntu.ac.uk", "first_name": "Marketing"},
    {"name": "University of Nottingham", "contact": "business@nottingham.ac.uk", "first_name": "Business"},
    {"name": "Confetti Media Students", "contact": "info@confetti.ac.uk", "first_name": "Team"},
    {"name": "Nottingham City Council", "contact": "communications@nottinghamcity.gov.uk", "first_name": "Communications"},
    {"name": "Derby Theatre", "contact": "info@derbytheatre.co.uk", "first_name": "Team"},
    {"name": "Nottingham Playhouse", "contact": "info@nottinghamplayhouse.co.uk", "first_name": "Team"},
    {"name": "Royal Concert Hall", "contact": "info@royalconcerthall.co.uk", "first_name": "Team"},
    {"name": "Nottingham Contemporary", "contact": "info@nottinghamcontemporary.org", "first_name": "Team"},
]

POACH_EMAIL = {
    "subject": "You're paying too much for podcast production",
    "htmlContent": """<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
<p>Hi {{first_name}},</p>

<p>I noticed {{company}} is producing content. I wanted to reach out because we are offering something different at StreamToday Studios.</p>

<p><strong>Here's what most studios don't tell you:</strong></p>
<ul>
<li>They charge per hour with editing as an extra</li>
<li>48-72 hour turnaround on files</li>
<li>No social clip extraction</li>
<li>You wait weeks for finished content</li>
</ul>

<p><strong>What we do differently:</strong></p>
<ul>
<li><strong>LIVE EDITING</strong> while you record (zero post-production delay)</li>
<li>Same-day file delivery</li>
<li>10 social clips included with every session</li>
<li>£299/session or £549/month unlimited</li>
</ul>

<p><strong>I'm offering 3 free sessions to switch.</strong> No contract. Just prove we are better.</p>

<p>Book: <a href="https://streamtoday.co.uk/switch">https://streamtoday.co.uk/switch</a></p>

<p>Best regards,<br>
Allan Okello<br>
StreamToday Studios<br>
WhatsApp: +44 7763 741309<br>
hello@streamtoday.co.uk</p>
</body>
</html>"""
}

def send_poach_emails():
    """Send competitor poaching emails"""
    success = 0
    
    for target in POACH_TARGETS:
        email = target.get('contact', '')
        first_name = target.get('first_name', 'There')
        company = target.get('name', 'Your company')
        
        url = f"{BASE_URL}/smtp/email"
        payload = {
            "sender": {"name": "Allan Okello - StreamToday Studios", "email": "hello@streamtoday.co.uk"},
            "to": [{"email": email, "name": first_name}],
            "subject": POACH_EMAIL["subject"],
            "htmlContent": POACH_EMAIL["htmlContent"].replace("{{first_name}}", first_name).replace("{{company}}", company),
            "tags": ["streamtoday", "competitor_poach"]
        }
        
        try:
            response = requests.post(url, headers=HEADERS, json=payload)
            if response.status_code == 201:
                print(f"✓ Poach email sent to: {email} ({company})")
                success += 1
            else:
                print(f"✗ Failed: {email} - {response.text}")
            time.sleep(0.1)
        except Exception as e:
            print(f"✗ Error: {email} - {e}")
    
    print(f"\n=== COMPETITOR POACH COMPLETE ===")
    print(f"Sent: {success}/{len(POACH_TARGETS)}")

if __name__ == "__main__":
    print("Sending competitor poaching emails...")
    send_poach_emails()
