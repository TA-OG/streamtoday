#!/usr/bin/env python3
"""
LinkedIn Guerrilla Warfare System
100 connections/day, 50 voice messages, 20 video messages, 30 comments
"""

import json
import time
from datetime import datetime

# Target personas for StreamToday
TARGET_PERSONAS = [
    {
        "title_keywords": ["Marketing Director", "Head of Marketing", "CMO", "Marketing Manager"],
        "company_size": "11-500",
        "location": "Nottingham, Derby, Leicester, Lincoln",
        "industries": ["Professional Services", "SaaS", "B2B Services", "Technology"]
    },
    {
        "title_keywords": ["Founder", "CEO", "Owner", "Managing Director"],
        "company_size": "1-50",
        "location": "Nottingham, Derby, Leicester, Lincoln",
        "industries": ["Any"]
    },
    {
        "title_keywords": ["Content Manager", "Social Media Manager", "Brand Manager"],
        "company_size": "11-200",
        "location": "Nottingham",
        "industries": ["Any"]
    }
]

# Connection request templates
CONNECTION_TEMPLATES = [
    """Hi {{first_name}},

I run StreamToday Studios - a professional podcast and video studio in Nottingham's Lace Market. We do LIVE EDITING while recording, which saves clients hours in post-production.

Would love to connect with fellow Nottingham business owners.

Allan""",

    """Hi {{first_name}},

Saw you're {{title}} at {{company}}. I'm building StreamToday Studios in the Lace Market - professional podcast/video production with same-day editing.

Always looking to connect with Nottingham marketers.

Allan""",

    """Hi {{first_name}},

Quick connection request - I run a podcast studio in Nottingham and I'm looking to build relationships with local business leaders like yourself.

Allan Okello
StreamToday Studios"""
]

# Follow-up message (Day 3)
FOLLOWUP_TEMPLATE = """Hi {{first_name}},

Thanks for connecting.

Quick question - are you currently doing any podcast or video content for {{company}}? I'm always curious what is working for marketing teams right now.

If you're ever thinking about starting a podcast, we offer complimentary studio tours at our Lace Market studio. No obligation, just a chance to see the space.

Allan"""

# Value-add message (Day 7)
VALUE_ADD_TEMPLATE = """Hi {{first_name}},

I put together a quick guide: "5 Ways to Repurpose One Podcast Episode Into 20+ Pieces of Content"

Most businesses record a podcast and post it once. That's leaving 95% of the value on the table.

Want me to send it over?

Allan
StreamToday Studios"""

# Direct ask (Day 14)
DIRECT_ASK_TEMPLATE = """Hi {{first_name}},

I've been sharing content about podcasting and studio work, but I realize I haven't actually invited you to see the space.

If you're curious about what we do at StreamToday, I'd love to show you around. 20 minutes, no pitch, just a tour of the studio and a conversation about content.

Any interest?

Allan
https://streamtoday.co.uk/book"""

# Comment templates for engagement
COMMENT_TEMPLATES = [
    "Great insights here. Have you considered turning this into a podcast episode? We see 10x engagement when content is in audio format.",
    "This resonates. We've had similar conversations with clients at StreamToday Studios about content strategy.",
    "Solid point. Content consistency beats perfection every time.",
    "Have you thought about video content to accompany this? We see huge ROI when clients add video to their mix.",
    "This is exactly why we built StreamToday - to make professional content creation accessible to Nottingham businesses."
]

def generate_daily_targets():
    """Generate daily LinkedIn targets"""
    
    daily_plan = {
        "connections": 100,
        "voice_messages": 50,
        "video_messages": 20,
        "comments": 30,
        "estimated_time": "4.5 hours"
    }
    
    return daily_plan

def generate_connection_batch():
    """Generate batch of connection requests for today"""
    
    # This would integrate with LinkedIn Sales Navigator export
    # For now, return structure
    
    batch = {
        "date": datetime.now().strftime("%Y-%m-%d"),
        "connections_sent": 0,
        "connections_accepted": 0,
        "messages_sent": 0,
        "replies_received": 0
    }
    
    return batch

def log_activity(activity_type, target, message=None):
    """Log all LinkedIn activity"""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    log_entry = f"[{timestamp}] {activity_type}: {target}"
    if message:
        log_entry += f" | Message: {message[:50]}..."
    
    with open("linkedin_activity.log", "a") as f:
        f.write(log_entry + "\n")
    
    print(log_entry)

if __name__ == "__main__":
    print("=" * 60)
    print("LINKEDIN GUERRILLA WARFARE SYSTEM")
    print("=" * 60)
    print()
    
    plan = generate_daily_targets()
    print("DAILY TARGETS:")
    print(f"  - Connection requests: {plan['connections']}")
    print(f"  - Voice messages: {plan['voice_messages']}")
    print(f"  - Video messages: {plan['video_messages']}")
    print(f"  - Comments: {plan['comments']}")
    print(f"  - Estimated time: {plan['estimated_time']}")
    print()
    
    print("TEMPLATES READY:")
    print(f"  - Connection templates: {len(CONNECTION_TEMPLATES)}")
    print(f"  - Follow-up sequence: 4 messages")
    print(f"  - Comment templates: {len(COMMENT_TEMPLATES)}")
    print()
    
    print("NOTE: LinkedIn automation requires:")
    print("  1. Sales Navigator for export")
    print("  2. Manual sending (LinkedIn bans automation)")
    print("  3. Loom for video messages")
    print("  4. Mobile app for voice messages")
    print()
    
    print("Ready to execute. Generate prospect list first.")
