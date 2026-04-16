#!/usr/bin/env python3
"""
Content Warfare System
3 LinkedIn posts/day, 4 Instagram posts/day, 20 YouTube videos/30 days
"""

from datetime import datetime, timedelta

CONTENT_CALENDAR = {
    "linkedin": {
        "frequency": 3,  # posts per day
        "times": ["08:00", "12:30", "18:00"],
        "content_types": [
            "client_case_study",
            "behind_the_scenes",
            "educational_tip",
            "direct_ask",
            "testimonial",
            "equipment_showcase",
            "industry_commentary"
        ]
    },
    "instagram": {
        "frequency": 4,  # posts per day
        "stories_frequency": 12,  # stories per day (every 2 hours)
        "content_types": [
            "studio_photo",
            "client_reel",
            "equipment_closeup",
            "before_after",
            "tips_carousel",
            "testimonial_quote"
        ]
    },
    "youtube": {
        "frequency": 20,  # videos in 30 days
        "topics": [
            "Complete studio tour (4K cinematic)",
            "Best podcast studios in Nottingham comparison",
            "How much does podcast production cost in Nottingham",
            "Equipment breakdown: Every mic we use",
            "Client case study: 6 episodes in one day",
            "Day in the life at StreamToday",
            "How to prepare for your first podcast",
            "Podcast studio vs home recording",
            "What to wear for video podcasts",
            "Editing tutorial: From raw to published",
            "10 ways to repurpose podcast content",
            "How to promote your podcast on LinkedIn",
            "Recording setup for 4+ person panels",
            "Green screen vs natural backdrop",
            "Audio quality: What makes pro sound",
            "Lighting setup for video podcasts",
            "Remote guest recording techniques",
            "Podcast SEO: Get found on Spotify",
            "Monetizing your B2B podcast",
            "StreamToday origin story"
        ]
    }
}

# LinkedIn Post Templates
LINKEDIN_TEMPLATES = {
    "client_case_study": """
{{client_name}} recorded 6 podcast episodes in 4 hours yesterday.

Here's what that looks like:
• 6 months of content sorted
• 30+ social clips extracted
• Same-day delivery
• One day of their time

Most businesses spend weeks producing what we do in an afternoon.

The difference? Professional studio + live editing.

Want to see how it works? Tour is free.

#NottinghamBusiness #PodcastProduction #ContentStrategy
""",

    "behind_the_scenes": """
Behind the scenes at StreamToday Studios.

[Photo of studio in action]

This is Studio One at 9am. Client is recording episode 4 of their series.

By 1pm they'll have:
✓ 4 recorded episodes
✓ All editing complete
✓ 20 social clips ready
✓ Files delivered

Live editing means zero post-production delay.

Questions about how it works? Drop them below.

#BehindTheScenes #PodcastStudio #Nottingham
""",

    "educational_tip": """
Stop posting your podcast once.

One 30-minute episode = 20+ pieces of content:

1. Full episode (obviously)
2. 5x 60-second clips for LinkedIn
3. 5x Quote graphics for Instagram
4. 3x Twitter threads
5. 1x Blog post (transcript)
6. 1x Email newsletter
7. 2x YouTube Shorts
8. 1x TikTok compilation

Most businesses record and post once. That's 5% utilisation.

We help clients extract 100% of the value.

Want the full repurposing playbook? Comment "PLAYBOOK" and I'll send it.

#ContentStrategy #PodcastMarketing #B2BMarketing
""",

    "direct_ask": """
I have studio time available and I want to fill it with interesting conversations.

If you're a Nottingham business owner and you've been thinking about:
• Starting a podcast
• Recording video content
• Building authority in your industry

Let's talk.

I'm offering complimentary 30-minute studio tours this week. No pitch, just show you the space and answer questions.

DM me or book directly: https://streamtoday.co.uk/book

#NottinghamBusiness #Podcast #ContentCreation
""",

    "testimonial": """
"We recorded a quarter's worth of content in one morning."

- {{client_name}}, {{client_title}}

This is why we built StreamToday.

Professional studio. Live editing. Same-day delivery.

Stop waiting weeks for content. Start publishing same day.

Book a tour: https://streamtoday.co.uk/book

#ClientTestimonial #PodcastStudio #Nottingham
""",

    "equipment_showcase": """
The gear matters less than you think.

Yes, we have:
• Panasonic broadcast cameras
• Rode PodMic + Shure SM7B
• Sennheiser wireless lavs
• Professional lighting grid

But what makes content work is:
✓ Good conversation
✓ Proper preparation
✓ Consistent publishing
✓ Smart distribution

The equipment just removes excuses.

Want to see it in action? Tour is free.

#PodcastEquipment #VideoProduction #Nottingham
""",

    "industry_commentary": """
Every B2B company in Nottingham should have a podcast.

Here's why:
• Builds authority faster than blogging
• Creates genuine connections with prospects
• Repurposes into 20+ content pieces
• Works while you sleep (evergreen)
• Your competitors aren't doing it yet

The barrier isn't equipment. It's studio access and production time.

We solved both.

Who's going to be the first in your industry?

#B2BMarketing #ThoughtLeadership #NottinghamBusiness
"""
}

# Instagram Templates
INSTAGRAM_TEMPLATES = {
    "studio_photo": {
        "caption": "Studio One is ready. Is your content? 🎙️\n\n📍 20 Fletcher Gate, Nottingham\n🔗 Book: link in bio\n\n#PodcastStudio #Nottingham #ContentCreation",
        "hashtags": ["#PodcastStudio", "#Nottingham", "#ContentCreation", "#VideoProduction", "#LaceMarket"]
    },
    
    "client_reel": {
        "caption": "6 episodes. 4 hours. Same-day delivery. ⚡\n\nThis is how we do it at StreamToday.\n\n#PodcastProduction #NottinghamBusiness #ContentStrategy",
        "hashtags": ["#PodcastProduction", "#NottinghamBusiness", "#ContentStrategy"]
    }
}

def generate_monthly_content_calendar():
    """Generate full month content calendar"""
    
    calendar = []
    start_date = datetime.now()
    
    for day in range(30):
        date = start_date + timedelta(days=day)
        
        daily_content = {
            "date": date.strftime("%Y-%m-%d"),
            "linkedin_posts": 3,
            "instagram_posts": 4,
            "instagram_stories": 12,
            "youtube_video": day < 20  # 20 videos in 30 days
        }
        
        calendar.append(daily_content)
    
    return calendar

def generate_linkedin_posts_for_week():
    """Generate 21 LinkedIn posts (3/day for 7 days)"""
    
    posts = []
    content_types = list(LINKEDIN_TEMPLATES.keys())
    
    for i in range(21):
        content_type = content_types[i % len(content_types)]
        template = LINKEDIN_TEMPLATES[content_type]
        
        posts.append({
            "day": (i // 3) + 1,
            "post_number": (i % 3) + 1,
            "type": content_type,
            "content": template.strip(),
            "scheduled_time": ["08:00", "12:30", "18:00"][i % 3]
        })
    
    return posts

def export_content_calendar():
    """Export content calendar to CSV"""
    import csv
    
    posts = generate_linkedin_posts_for_week()
    
    with open("linkedin_content_week1.csv", "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=["day", "post_number", "type", "scheduled_time", "content"])
        writer.writeheader()
        writer.writerows(posts)
    
    print(f"✓ Exported {len(posts)} LinkedIn posts to linkedin_content_week1.csv")

if __name__ == "__main__":
    print("=" * 60)
    print("CONTENT WARFARE SYSTEM")
    print("=" * 60)
    print()
    
    calendar = generate_monthly_content_calendar()
    
    print("CONTENT TARGETS (30 DAYS):")
    print(f"  - LinkedIn posts: {sum(d['linkedin_posts'] for d in calendar)}")
    print(f"  - Instagram posts: {sum(d['instagram_posts'] for d in calendar)}")
    print(f"  - Instagram stories: {sum(d['instagram_stories'] for d in calendar)}")
    print(f"  - YouTube videos: {sum(1 for d in calendar if d['youtube_video'])}")
    print()
    
    print("LINKEDIN TEMPLATES READY:")
    for template_type in LINKEDIN_TEMPLATES:
        print(f"  ✓ {template_type}")
    print()
    
    export_content_calendar()
    
    print()
    print("Next steps:")
    print("1. Schedule posts using Buffer/Hootsuite")
    print("2. Create visual assets in Canva")
    print("3. Film YouTube videos in batches")
    print("4. Set up posting automation")
