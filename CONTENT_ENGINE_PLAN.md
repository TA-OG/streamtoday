# STREAMTODAY CONTENT ENGINE
## OpenClaw Operating Plan

**Mission:** Build a revenue-generating content engine that drives organic traffic, converts visitors into paid studio bookings, and positions StreamTODAY as the UK's go-to podcast authority.

---

## 1. SUCCESS METRICS (Non-Negotiable)

### Targets:
- 10+ inbound enquiries per week from organic
- 3–5 bookings per week attributable to content
- #1 ranking for "podcast studio nottingham" within 6 months
- Top 3 rankings for all Midlands city + "podcast studio" combinations

### Tracking:
- Weekly traffic per post
- Time on page
- Conversion rate (content → booking)
- Top performing topics

---

## 2. TARGET CUSTOMER (ICP)

### Primary:
- First-time podcasters (UK based)
- Coaches, founders, creators, churches
- Pain points: Don't know how to start, fear of tech, want professional look fast

### Secondary:
- Existing podcasters upgrading quality
- Agencies launching shows for clients

### Content Angle:
- Anti-equipment, pro-orchestration
- Efficiency over effort
- Professional results without the learning curve

---

## 3. CONTENT PILLARS (Integrated with Existing Work)

### Pillar 1: "Start a Podcast" (Beginner Traffic)
**Status:** 1 post complete, 4 more needed
**Existing:** "How to Start a Podcast in Nottingham: The Complete 2024 Guide"
**Needed:**
- "How to start a podcast in the UK (2026 guide)" (national version)
- "What equipment do you actually need?" (myth-busting)
- "How much does it cost to start a podcast?" (honest breakdown)
- "Podcast format guide: solo vs interview vs co-hosted"

### Pillar 2: "Studio vs DIY" (Conversion-Focused)
**Status:** 2 posts complete, 3 more needed
**Existing:**
- "Why I Spent £47,000 on Podcast Equipment So You Don't Have To"
- "Stop Creating Content. Start Orchestrating It."
**Needed:**
- "Home setup vs professional studio: real comparison"
- "Why most podcasts fail due to bad audio"
- "The £5,000 home studio mistake everyone makes"

### Pillar 3: "Growth + Monetisation" (Serious Creators)
**Status:** 1 post complete, 4 more needed
**Existing:** "The Content Multiplier: How One Studio Recording Becomes 47 Pieces of Content"
**Needed:**
- "How to get your first 1000 podcast listeners"
- "How to get sponsors for your podcast"
- "How to turn your podcast into a business"
- "Podcast monetisation: 5 revenue streams that actually work"

### Pillar 4: "Local SEO" (Money Pages)
**Status:** 5 posts complete, 7 more needed
**Existing:**
- "The Nottingham Podcast Studio That Edits While You Record"
- "Best Podcast Studios in Derby"
- "Leicester's Hidden Gem: Professional Podcast Recording"
- "Why Lincoln Podcasters Are Driving to Nottingham"
- "Leeds Has Podcast Studios. But Do They Have Live Editing?"
- "Podcast Studio Birmingham: The Complete Guide"
**Needed:**
- "Best podcast studio in Nottingham" (direct money page)
- "Podcast studio prices UK explained"
- "Where to record a podcast near me" (location-agnostic)
- Sheffield, Manchester, Coventry, Peterborough versions
- "Video podcast studio [city]" variants for all cities

### Pillar 5: "Behind the Scenes / Authority" (Trust Building)
**Status:** 0 posts, 5 needed
**Needed:**
- "What a £10k podcast setup actually looks like"
- "How we produce a podcast at StreamTODAY"
- "Common mistakes we see every week"
- "The live editing workflow explained"
- "A day in the life: recording at StreamTODAY"

---

## 4. CONTENT PRODUCTION SYSTEM

### Weekly Output Target:
- 3 blog posts per week
- 1 high-value long-form (2,500+ words) per week
- 1 email newsletter repurposing best content

### OpenClaw Workflow:

**STEP 1: Keyword Research (Mondays)**
- Find 10 keywords per week
- Criteria: Search volume >100/month, low competition, buyer intent
- Tools: Web search, competitor analysis, SEO scraping
- Output: Keyword brief with search intent analysis

**STEP 2: Content Creation (Tuesdays-Thursdays)**
- Generate for each keyword:
  - Title (CTR optimised, 60 characters max)
  - Meta description (155 characters, includes CTA)
  - Full blog (1,500–2,500 words)
- Structure:
  - Hook (first 100 words must grab attention)
  - Problem (agitate the pain)
  - Solution (present the answer)
  - Breakdown (detailed how-to or analysis)
  - Call to action (BOOK STUDIO)
- Tone: Clear, confident, no fluff, authority edge, Rory Sutherland style

**STEP 3: Conversion Layer (Fridays)**
Every post MUST include:
- Primary CTA block: "Book your session at StreamTODAY Studios"
- Link to: https://streamtoday.as.me/schedule/b2a579b5
- Soft sell mentions: starter package, professional equipment, live editing
- Email capture for lead magnets

**STEP 4: Internal Linking (Fridays)**
Each post must link to:
- Booking page (2+ times)
- 2–3 other relevant blog posts
- Pricing/service pages when built
- Lead magnet downloads

**STEP 5: Publishing (Ready for Review)**
- Format: Markdown → HTML for Next.js
- Images: Unsplash/Adobe Stock (royalty-free)
- Layout: Clean, scannable, mobile-optimised
- SEO: Title tag, meta description, header hierarchy, alt text

**STEP 6: Distribution (Weekly)**
For EACH post, create:
- Instagram carousel (5-7 slides)
- LinkedIn post (long-form)
- Twitter/X thread (5-7 tweets)
- Email newsletter feature

---

## 5. AUTOMATION STACK

### Content Generation:
- Primary: Claude (complex, nuanced content)
- Fallback: Kimi (speed, volume)
- Local: Qwen 2.5 14B (simple tasks, cost control)

### Keyword Research:
- Web search with grounding
- Competitor content analysis
- Google Trends monitoring

### Publishing:
- Manual review required (Allan approval)
- Next.js static site generation
- Vercel deployment

### Image Sourcing:
- Unsplash API (free, high quality)
- Adobe Stock (if premium needed)
- Custom studio photography (existing assets)

### Scheduling:
- Cron jobs for content calendar
- Weekly batch creation
- Staged deployment (draft → review → publish)

---

## 6. QUALITY CONTROL RULES

### Reject Content If:
- Generic or AI-sounding (no "in today's digital landscape")
- No clear CTA (every post must drive to booking)
- No UK context (British spelling, UK examples, GBP pricing)
- No actionable value (must solve a real problem)
- Too short (<1,500 words for standard, <2,500 for pillar)
- No internal linking (orphaned content)

### Approval Checklist:
- [ ] Title is CTR-optimised
- [ ] Meta description includes CTA
- [ ] Hook grabs attention in first 100 words
- [ ] Problem is clearly stated
- [ ] Solution is actionable
- [ ] CTA appears 2+ times
- [ ] Internal links to 2+ other posts
- [ ] UK spelling throughout
- [ ] No emojis
- [ ] No hyphens (commas or reword)
- [ ] Rory Sutherland tone (witty, contrarian, authoritative)

---

## 7. TRACKING + FEEDBACK LOOP

### Weekly Report (Sundays):
- Traffic per post (Google Analytics)
- Time on page (engagement metric)
- Conversion rate (content → booking)
- Top performing topics
- Keyword ranking changes

### Monthly Review:
- Double down on winners (expand, update, interlink)
- Kill weak topics (don't waste time on losers)
- Identify content gaps
- Plan next month's pillar focus

### Quarterly Strategy:
- Update and expand high-ranking posts
- Build backlinks (outreach to podcast directories, industry sites)
- Refresh outdated content
- Launch new pillar if data supports

---

## 8. CONTENT CALENDAR (Next 12 Weeks)

### Week 1 (Current):
- [x] Why I Spent £47,000 on Podcast Equipment
- [x] The Nottingham Podcast Studio That Edits While You Record
- [x] How to Start a Podcast in Nottingham

### Week 2:
- [ ] Home setup vs professional studio: real comparison
- [ ] How to get your first 1000 podcast listeners
- [ ] Best podcast studio in Nottingham (money page)

### Week 3:
- [ ] What equipment do you actually need?
- [ ] How to turn your podcast into a business
- [ ] Podcast studio Sheffield complete guide

### Week 4:
- [ ] Why most podcasts fail due to bad audio
- [ ] How to get sponsors for your podcast
- [ ] Video podcast studio Nottingham

### Week 5:
- [ ] The £5,000 home studio mistake everyone makes
- [ ] Podcast monetisation: 5 revenue streams
- [ ] Podcast studio Manchester comparison

### Week 6:
- [ ] How much does it cost to start a podcast?
- [ ] How we produce a podcast at StreamTODAY
- [ ] Podcast studio Coventry guide

### Week 7:
- [ ] Podcast format guide: solo vs interview vs co-hosted
- [ ] Common mistakes we see every week
- [ ] Podcast studio prices UK explained

### Week 8:
- [ ] What a £10k podcast setup actually looks like
- [ ] The live editing workflow explained
- [ ] Where to record a podcast near me

### Week 9:
- [ ] How to start a podcast in the UK (2026 guide)
- [ ] A day in the life: recording at StreamTODAY
- [ ] Podcast studio Peterborough guide

### Week 10:
- [ ] The complete podcast equipment guide (honest version)
- [ ] How to build a podcast audience from zero
- [ ] Video podcast vs audio: which makes more money?

### Week 11:
- [ ] Podcast hosting comparison UK
- [ ] The 47-piece content system explained
- [ ] Podcast studio Derby vs Nottingham

### Week 12:
- [ ] How to interview like a pro
- [ ] Podcast SEO: how to rank on Apple and Spotify
- [ ] The ultimate podcast studio comparison (Midlands)

---

## 9. EXISTING ASSETS TO LEVERAGE

### Blog Posts (11 complete, 150k+ words):
1. Why I Spent £47,000 on Podcast Equipment (Pillar 2)
2. The Nottingham Podcast Studio That Edits While You Record (Pillar 4)
3. How to Start a Podcast in Nottingham (Pillar 1)
4. Video Podcast vs Audio Podcast (Pillar 3)
5. The Content Multiplier (Pillar 3)
6. Stop Creating Content, Start Orchestrating It (Pillar 2)
7. Best Podcast Studios in Derby (Pillar 4)
8. Leicester's Hidden Gem (Pillar 4)
9. Why Lincoln Podcasters Are Driving to Nottingham (Pillar 4)
10. Leeds Has Podcast Studios. But Do They Have Live Editing? (Pillar 4)
11. Podcast Studio Birmingham: The Complete Guide (Pillar 4)

### Lead Magnets (Referenced, Need Creation):
- 12-Episode Topic Chart
- Episode Bible Template
- Pre-Show Checklist
- Podcast Sponsorship Agreement Template
- Content Multiplier Template
- Orchestrator's Toolkit

### Social Media Assets:
- social-graphic-01.png
- social-graphic-02.png
- social-graphic-03.png
- Studio photography (green room, studios, equipment)

---

## 10. IMMEDIATE NEXT ACTIONS

### This Week:
1. Allan reviews first 3 posts
2. Approve/reject with feedback
3. Set up blog infrastructure on Vercel (if not done)
4. Deploy approved posts

### Next Week:
1. Write 3 new posts (Week 2 calendar)
2. Create first lead magnet (12-Episode Topic Chart)
3. Set up Google Analytics tracking
4. Begin Instagram repurposing of blog content

### This Month:
1. Complete 12 blog posts total
2. Achieve 6 posts live on site
3. Set up email capture on all posts
4. Begin weekly distribution to social

---

**This is a system, not a project. It compounds. It scales. It generates revenue while you sleep.**

Execute. Measure. Iterate. Dominate.
