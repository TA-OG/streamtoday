#!/usr/bin/env python3
"""
WAVE 2: Follow-up to non-responders (Day 5)
Value-add email with 12-Episode Topic Chart
"""

import csv
import requests
import time
from datetime import datetime, timedelta

BREVO_API_KEY = "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"
BASE_URL = "https://api.brevo.com/v3"

HEADERS = {
    "accept": "application/json",
    "api-key": BREVO_API_KEY,
    "content-type": "application/json"
}

WAVE2_TEMPLATE = {
    "subject": "Free resource: The 12-Episode Topic Chart",
    "htmlContent": """<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
<p>Hi {{first_name}},</p>

<p>Following up on my previous email about StreamToday Studios.</p>

<p>I have put together a free resource that might be useful: <strong>The 12-Episode Topic Chart</strong>. It is a template we use with clients to plan a full podcast series without running out of ideas.</p>

<p>You can download it here: <a href="https://streamtoday.co.uk/resources">https://streamtoday.co.uk/resources</a></p>

<p><strong>Quick question:</strong> Are you currently producing any video or audio content in-house, or working with an agency? I am curious about what is working and what is not.</p>

<p>If you would like to see the studio, we are offering complimentary 30-minute studio tours this month. No obligation, just a chance to see the space and discuss your content plans.</p>

<p><a href="https://streamtoday.co.uk/book" style="background: #000; color: #fff; padding: 10px 20px; text-decoration: none; display: inline-block;">Book a tour</a></p>

<p>Best regards,<br>
Allan Okello<br>
StreamToday Studios<br>
WhatsApp: +44 7763 741309<br>
hello@streamtoday.co.uk</p>
</body>
</html>"""
}

def load_contacts():
    """Load contacts from Brevo who didn't open Wave 1"""
    # This would query Brevo API for contacts with tag "wave1" who didn't open
    # For now, return the same list (manual filter needed)
    contacts = []
    with open("/root/.openclaw/workspace/streamtoday-priority-prospects.csv", 'r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            contacts.append(row)
    return contacts

def send_wave2():
    """Send Wave 2 follow-up emails"""
    contacts = load_contacts()
    
    success = 0
    for contact in contacts:
        email = contact.get('email', '')
        first_name = contact.get('first_name', 'There')
        
        url = f"{BASE_URL}/smtp/email"
        payload = {
            "sender": {"name": "Allan Okello - StreamToday Studios", "email": "hello@streamtoday.co.uk"},
            "to": [{"email": email, "name": first_name}],
            "subject": WAVE2_TEMPLATE["subject"],
            "htmlContent": WAVE2_TEMPLATE["htmlContent"].replace("{{first_name}}", first_name),
            "tags": ["streamtoday", "wave2", "followup"]
        }
        
        try:
            response = requests.post(url, headers=HEADERS, json=payload)
            if response.status_code == 201:
                print(f"✓ Wave 2 sent to: {email}")
                success += 1
            time.sleep(0.1)
        except Exception as e:
            print(f"✗ Failed: {email} - {e}")
    
    print(f"\n=== WAVE 2 COMPLETE ===")
    print(f"Sent: {success}")

if __name__ == "__main__":
    print("Wave 2 will send in 5 days from Wave 1")
    print("Run this script on:", (datetime.now() + timedelta(days=5)).strftime("%Y-%m-%d"))
