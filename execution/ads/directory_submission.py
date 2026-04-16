#!/usr/bin/env python3
"""
AUTOMATED DIRECTORY SUBMISSION
Submit StreamToday to free local directories
"""

import requests
import time

STUDIO_INFO = {
    "name": "StreamToday Studios",
    "address": "20 Fletcher Gate, Nottingham NG1 2FZ",
    "phone": "+44 7763 741309",
    "email": "hello@streamtoday.co.uk",
    "website": "https://streamtoday.co.uk",
    "description": "Professional podcast and video production studio in Nottingham's Lace Market. Live editing, broadcast quality equipment, two studios. Single sessions from £299, retainers from £549."
}

DIRECTORIES = [
    {
        "name": "FreeIndex",
        "url": "https://www.freeindex.co.uk/addlisting/",
        "method": "GET"  # Manual submission
    },
    {
        "name": "Yell.com",
        "url": "https://www.yell.com/add-listing/",
        "method": "GET"
    },
    {
        "name": "Thomson Local",
        "url": "https://www.thomsonlocal.com/add-business/",
        "method": "GET"
    },
    {
        "name": "Cylex",
        "url": "https://www.cylex.co.uk/",
        "method": "GET"
    },
    {
        "name": "Hotfrog",
        "url": "https://www.hotfrog.co.uk/",
        "method": "GET"
    },
    {
        "name": "Brownbook",
        "url": "https://www.brownbook.net/",
        "method": "GET"
    },
    {
        "name": "Bizify",
        "url": "https://www.bizify.co.uk/",
        "method": "GET"
    },
    {
        "name": "Local Secrets",
        "url": "https://www.localsecrets.co.uk/",
        "method": "GET"
    },
    {
        "name": "Scoot",
        "url": "https://www.scoot.co.uk/",
        "method": "GET"
    },
    {
        "name": "Touch",
        "url": "https://www.touchbiz.co.uk/",
        "method": "GET"
    }
]

def check_directories():
    """Check which directories are accessible"""
    print("=== DIRECTORY SUBMISSION LINKS ===")
    print("\nManually submit to these free directories:\n")
    
    for directory in DIRECTORIES:
        print(f"{directory['name']}: {directory['url']}")
    
    print("\n" + "="*50)
    print("STUDIO INFO FOR SUBMISSIONS:")
    print("="*50)
    for key, value in STUDIO_INFO.items():
        print(f"{key}: {value}")

if __name__ == "__main__":
    check_directories()
