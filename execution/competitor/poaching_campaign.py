#!/usr/bin/env python3
"""
Competitor Client Poaching System
Finds clients of competitor studios and targets them directly
"""

import json
import csv

# Competitor Studios in Nottingham Region
COMPETITORS = {
    "confetti_institute": {
        "name": "Confetti Institute",
        "website": "confetti.ac.uk",
        "type": "Educational/Studio Hire"
    },
    "metronome": {
        "name": "Metronome",
        "website": "metronome.uk.com",
        "type": "Music/Recording Studio"
    },
    "nottingham_trent": {
        "name": "Nottingham Trent University Media",
        "website": "ntu.ac.uk",
        "type": "Educational"
    }
}

# Search queries to find competitor clients
SEARCH_QUERIES = [
    "site:linkedin.com/in " + " OR ".join(['"podcast" "Nottingham"', '"video production" "Nottingham"', '"content creator" "Nottingham"']),
    "site:apple.com/podcasts " + "Nottingham business",
    "site:spotify.com " + "Nottingham podcast",
    "site:youtube.com " + "Nottingham" + " podcast OR interview",
]

POACH_EMAIL_TEMPLATE = """Subject: You're paying too much for podcast production

{{first_name}},

I came across your podcast {{podcast_name}}. Good content.

But I noticed you're recording at {{competitor_studio}}.

Here's what they're not telling you:
- They charge per hour with editing as extra
- 48-72 hour turnaround on files
- No social clip extraction

StreamToday Studios:
- LIVE EDITING while you record (zero post-production delay)
- Same-day file delivery
- 10 social clips included with every session
- £299/session or £549/month unlimited

I'm offering 3 free sessions to switch. No contract. Just prove we're better.

Book: https://streamtoday.co.uk/switch

Allan Okello
StreamToday Studios
WhatsApp: +44 7763 741309
"""

def generate_poach_list():
    """Generate list of prospects to poach from competitors"""
    
    # Manual research targets - podcasts/shows we know exist
    known_podcasts = [
        {"name": "Nottingham Business", "host": "Unknown", "studio": "Various"},
        {"name": "East Midlands Business", "host": "Unknown", "studio": "Various"},
    ]
    
    poach_targets = []
    
    for podcast in known_podcasts:
        poach_targets.append({
            "podcast_name": podcast["name"],
            "target_studio": podcast["studio"],
            "research_status": "needs_lookup"
        })
    
    return poach_targets

def export_poach_csv(targets, filename="poach_targets.csv"):
    """Export poaching targets to CSV"""
    with open(filename, 'w', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=["podcast_name", "host_name", "email", "target_studio", "research_status", "priority"])
        writer.writeheader()
        for target in targets:
            writer.writerow(target)
    print(f"Exported {len(targets)} poaching targets to {filename}")

if __name__ == "__main__":
    print("Competitor Poaching System")
    print("=" * 50)
    
    targets = generate_poach_list()
    print(f"Generated {len(targets)} initial targets")
    
    # In real execution, this would:
    # 1. Scrape podcast directories for Nottingham shows
    # 2. Find LinkedIn profiles of hosts
    # 3. Hunter.io to find emails
    # 4. Send personalized poach emails
    
    print("\nNext steps:")
    print("1. Research Nottingham podcasts on Apple/Spotify")
    print("2. Find host LinkedIn profiles")
    print("3. Verify emails via Hunter.io")
    print("4. Send poach emails via Brevo")
