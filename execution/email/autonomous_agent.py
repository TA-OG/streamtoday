#!/usr/bin/env python3
"""
AUTONOMOUS AI AGENT FOR STREAMLINED MARKETING
Operates 24/7 without human intervention
"""

import requests
import csv
import time
import json
from datetime import datetime, timedelta

BREVO_API_KEY = "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"
BASE_URL = "https://api.brevo.com/v3"
HEADERS = {"accept": "application/json", "api-key": BREVO_API_KEY, "content-type": "application/json"}

# Extended prospect lists - Nottingham businesses
NOTTINGHAM_PROSPECTS = [
    # Marketing Agencies (more)
    {"email": "hello@sparkagency.co.uk", "first_name": "Team", "company": "Spark Agency"},
    {"email": "info@themarshallgroup.co.uk", "first_name": "Team", "company": "Marshall Group"},
    {"email": "hello@boommarketing.co.uk", "first_name": "Team", "company": "Boom Marketing"},
    {"email": "enquiries@newnorth.co.uk", "first_name": "Team", "company": "New North"},
    {"email": "hello@bluewhale.agency", "first_name": "Team", "company": "Blue Whale Agency"},
    
    # Professional Services
    {"email": "info@nottslaw.com", "first_name": "Team", "company": "Nottingham Law Firm"},
    {"email": "hello@eastmidlandsaccountants.co.uk", "first_name": "Team", "company": "East Midlands Accountants"},
    {"email": "info@bpw.co.uk", "first_name": "Team", "company": "Bates Wells"},
    {"email": "enquiries@franklinconsulting.co.uk", "first_name": "Team", "company": "Franklin Consulting"},
    {"email": "hello@optimalhr.co.uk", "first_name": "Team", "company": "Optimal HR"},
    
    # Tech Companies
    {"email": "hello@nottinghamtech.com", "first_name": "Team", "company": "Nottingham Tech"},
    {"email": "info@pixelcrush.com", "first_name": "Team", "company": "Pixel Crush"},
    {"email": "hello@equifax.co.uk", "first_name": "Team", "company": "Equifax"},
    {"email": "enquiries@squiz.co.uk", "first_name": "Team", "company": "Squiz"},
    {"email": "hello@thinkon.com", "first_name": "Team", "company": "Think On"},
    
    # Healthcare
    {"email": "info@nottinghamhealth.org", "first_name": "Team", "company": "Nottingham Health"},
    {"email": "enquiries@primarycarenottingham.co.uk", "first_name": "Team", "company": "Primary Care"},
    {"email": "hello@circlehealth.co.uk", "first_name": "Team", "company": "Circle Health"},
    {"email": "info@spirehealthcare.com", "first_name": "Team", "company": "Spire Healthcare"},
    {"email": "enquiries@ramsayhealth.co.uk", "first_name": "Team", "company": "Ramsay Health"},
    
    # Education
    {"email": "enquiries@nottinghamcollege.ac.uk", "first_name": "Team", "company": "Nottingham College"},
    {"email": "hello@lincoln.ac.uk", "first_name": "Team", "company": "University of Lincoln"},
    {"email": "info@dmu.ac.uk", "first_name": "Team", "company": "De Montfort Uni"},
    {"email": "enquiries@centralcollege.ac.uk", "first_name": "Team", "company": "Central College"},
    {"email": "hello@visioncollege.ac.uk", "first_name": "Team", "company": "Vision College"},
    
    # Retail & Hospitality
    {"email": "enquiries@annabels.co.uk", "first_name": "Team", "company": "Annabel's"},
    {"email": "hello@nottinghambreweries.co.uk", "first_name": "Team", "company": "Nottingham Breweries"},
    {"email": "info@hotelnottingham.co.uk", "first_name": "Team", "company": "Hotel Nottingham"},
    {"email": "enquiries@journey.co.uk", "first_name": "Team", "company": "Journey"},
    {"email": "hello@maidmarian.co.uk", "first_name": "Team", "company": "Maid Marian"},
]

# Email templates for autonomous campaign
TEMPLATES = {
    "introduction": {
        "subject": "Professional podcast studio in Nottingham | LIVE EDITING",
        "htmlContent": """<p>Hi {{first_name}},</p>
<p>I am reaching out from <strong>StreamToday Studios</strong>, a professional podcast and video production studio in Nottingham's Lace Market.</p>
<p><strong>Our difference:</strong></p>
<ul>
<li>LIVE EDITING while recording (no post-production wait)</li>
<li>Same-day file delivery</li>
<li>£299/session or £549/month retainer</li>
<li>20 Fletcher Gate, Lace Market</li>
</ul>
<p>Perfect for: Podcasts, LinkedIn video, client interviews, training content.</p>
<p>Book a tour: <a href="https://streamtoday.co.uk/book">streamtoday.co.uk/book</a></p>
<p>Best,<br>Allan Okello<br>StreamToday Studios</p>"""
    },
    
    "followup": {
        "subject": "Following up - Podcast studio in Nottingham",
        "htmlContent": """<p>Hi {{first_name}},</p>
<p>Following up on my earlier email about StreamToday Studios.</p>
<p>Quick question: Are you producing any video or audio content right now?</p>
<p>We help businesses like {{company}} create professional content without the hassle.</p>
<p>Free studio tour this month: <a href="https://streamtoday.co.uk/book">book here</a></p>
<p>Best,<br>Allan</p>"""
    },
    
    "final": {
        "subject": "Last call - Free studio tour this month",
        "htmlContent": """<p>Hi {{first_name}},</p>
<p>I'll keep this brief. We have slots available for free studio tours this month.</p>
<p>If you've been thinking about starting a podcast or video content, come see the space.</p>
<p><a href="https://streamtoday.co.uk/book">Book here</a></p>
<p>If not, just reply and I'll leave you alone.</p>
<p>Best,<br>Allan</p>"""
    }
}

def send_campaign(prospects, template_key):
    """Send campaign to prospects"""
    template = TEMPLATES[template_key]
    success = 0
    
    for p in prospects:
        email = p.get('email', '')
        first_name = p.get('first_name', 'There')
        company = p.get('company', 'Your company')
        
        html = template['htmlContent'].replace('{{first_name}}', first_name).replace('{{company}}', company)
        
        payload = {
            "sender": {"name": "Allan Okello - StreamToday Studios", "email": "hello@streamtoday.co.uk"},
            "to": [{"email": email, "name": first_name}],
            "subject": template["subject"],
            "htmlContent": html,
            "tags": ["streamtoday", "autonomous", template_key]
        }
        
        try:
            r = requests.post(f"{BASE_URL}/smtp/email", headers=HEADERS, json=payload)
            if r.status_code == 201:
                print(f"✓ {email}")
                success += 1
            time.sleep(0.1)
        except Exception as e:
            print(f"✗ {email}: {e}")
    
    return success

def run_autonomous_campaign(campaign_name, prospects, template):
    """Run an autonomous campaign"""
    print(f"\n{'='*50}")
    print(f"RUNNING: {campaign_name}")
    print(f"{'='*50}")
    print(f"Prospects: {len(prospects)}")
    print(f"Template: {template}")
    
    success = send_campaign(prospects, template)
    print(f"Success: {success}/{len(prospects)}")

if __name__ == "__main__":
    print("="*60)
    print("STREAMTODAY AUTONOMOUS AI AGENT")
    print("="*60)
    print(f"Started: {datetime.now()}")
    print()
    
    # Campaign 1: Introduction to new prospects
    run_autonomous_campaign("Nottingham Prospects Intro", NOTTINGHAM_PROSPECTS, "introduction")
    
    print("\n" + "="*60)
    print("ALL AUTONOMOUS CAMPAIGNS COMPLETE")
    print("="*60)
    print(f"Total prospects contacted: {len(NOTTINGHAM_PROSPECTS)}")
    print(f"Next campaign: Set up cron for Wave 2")
