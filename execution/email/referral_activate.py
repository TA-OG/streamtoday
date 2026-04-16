#!/usr/bin/env python3
"""
REFERRAL PROGRAMME ACTIVATION
Email past contacts about £150 per referral
"""

import csv
import requests
import time

BREVO_API_KEY = "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"
BASE_URL = "https://api.brevo.com/v3"

HEADERS = {
    "accept": "application/json",
    "api-key": BREVO_API_KEY,
    "content-type": "application/json"
}

# Past contacts who might refer others
REFERRAL_TARGETS = [
    {"email": "karl_dukes@mediahut.co.uk", "first_name": "Karl"},
    {"email": "patrick@lacemarketing.com", "first_name": "Patrick"},
    {"email": "chris@thedairyagency.co.uk", "first_name": "Chris"},
    {"email": "emma@victressdigital.co.uk", "first_name": "Emma"},
    {"email": "emily@edenpr.co.uk", "first_name": "Emily"},
    {"email": "mark@thebrandstrategy.co.uk", "first_name": "Mark"},
    {"email": "jennie@jenniehollandpr.com", "first_name": "Jennie"},
    {"email": "dan@motivepr.co.uk", "first_name": "Dan"},
]

REFERRAL_EMAIL = {
    "subject": "£150 cash for referrals | StreamToday Studios",
    "htmlContent": """<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
<p>Hi {{first_name}},</p>

<p>I wanted to let you know about our new referral programme.</p>

<p>If you know a business that would benefit from podcast or video content, send them our way.</p>

<h3>What you get:</h3>
<ul>
<li><strong>£150 cash</strong> for every referral that books a session</li>
<li><strong>£400 cash</strong> for every referral that signs a monthly retainer</li>
<li>Paid within 7 days of their first payment</li>
</ul>

<h3>What they get:</h3>
<ul>
<li><strong>15% off</strong> their first booking</li>
<li>Priority studio access</li>
<li>Free studio tour</li>
</ul>

<p><strong>No limit.</strong> Stack as many referrals as you can.</p>

<p>Your unique referral code: <strong>REF{{first_name[:2].upper()}}001</strong></p>

<p>Track referrals: <a href="https://streamtoday.co.uk/referrals">https://streamtoday.co.uk/referrals</a></p>

<p>Studio details: <a href="https://streamtoday.co.uk">https://streamtoday.co.uk</a></p>

<p>Who should be podcasting? Tag them or send them my way.</p>

<p>Best regards,<br>
Allan Okello<br>
StreamToday Studios<br>
WhatsApp: +44 7763 741309</p>
</body>
</html>"""
}

def send_referral_emails():
    """Send referral programme emails"""
    success = 0
    
    for target in REFERRAL_TARGETS:
        email = target.get('email', '')
        first_name = target.get('first_name', 'There')
        
        url = f"{BASE_URL}/smtp/email"
        payload = {
            "sender": {"name": "Allan Okello - StreamToday Studios", "email": "hello@streamtoday.co.uk"},
            "to": [{"email": email, "name": first_name}],
            "subject": REFERRAL_EMAIL["subject"],
            "htmlContent": REFERRAL_EMAIL["htmlContent"].replace("{{first_name}}", first_name),
            "tags": ["streamtoday", "referral"]
        }
        
        try:
            response = requests.post(url, headers=HEADERS, json=payload)
            if response.status_code == 201:
                print(f"✓ Referral email sent to: {email}")
                success += 1
            else:
                print(f"✗ Failed: {email}")
            time.sleep(0.1)
        except Exception as e:
            print(f"✗ Error: {email} - {e}")
    
    print(f"\n=== REFERRAL EMAILS COMPLETE ===")
    print(f"Sent: {success}/{len(REFERRAL_TARGETS)}")

if __name__ == "__main__":
    print("Sending referral programme emails...")
    send_referral_emails()
