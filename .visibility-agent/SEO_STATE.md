# StreamToday SEO State

**Last Updated:** 2026-09-23
**Agent:** streamtoday-visibility v1.0.0

---

## Technical Condition

### Pages Discovered: 24
Source: https://www.streamtoday.co.uk/sitemap.xml

| URL | Status | Word Count | Schema | Notes |
|-----|--------|-----------|--------|-------|
| / | 200 | 1,070 | PodcastStudio | Homepage |
| /about | 200 | 348 | PodcastStudio | Thin content |
| /services | 200 | 317 | PodcastStudio | Thin content |
| /pricing | 200 | 571 | PodcastStudio | Pricing page |
| /book | 200 | 158 | PodcastStudio | Booking page |
| /contact | 200 | 220 | PodcastStudio | Contact page |
| /blog | 200 | 885 | PodcastStudio | Blog index |
| /resources | 200 | TBD | TBD | Resources page |
| /privacy | 200 | TBD | TBD | Legal |
| /terms | 200 | TBD | TBD | Legal |
| /healthcare | 200 | 516 | PodcastStudio | Sector page |
| /law-firms | 200 | 547 | PodcastStudio | Sector page |
| /life-sciences | 200 | 521 | PodcastStudio | Sector page |
| /professional-services | 200 | 531 | PodcastStudio | Sector page |
| /recruitment-agencies | 200 | 507 | PodcastStudio | Sector page |
| /tech-saas | 200 | 518 | PodcastStudio | Sector page |
| /blog/best-podcast-studios-derby | 200 | 1,919 | Article + PodcastStudio | Regional content |
| /blog/content-multiplier-one-recording-47-pieces | 200 | 1,900 | Article + PodcastStudio | Content piece |
| /blog/how-to-start-podcast-nottingham-guide | 200 | 2,442 | Article + PodcastStudio | Regional content |
| /blog/leeds-podcast-studio-live-editing | 200 | 1,537 | Article + PodcastStudio | Regional content |
| /blog/leicester-podcast-studio-recording | 200 | 1,586 | Article + PodcastStudio | Regional content |
| /blog/lincoln-podcast-studio-nottingham | 200 | 1,640 | Article + PodcastStudio | Regional content |
| /blog/nottingham-podcast-studio-live-editing | 200 | 2,628 | Article + PodcastStudio | Strong content |
| /blog/podcast-studio-birmingham-complete-guide | 200 | 1,430 | Article + PodcastStudio | Regional content |
| /blog/stop-creating-start-orchestrating | 200 | 1,671 | Article + PodcastStudio | Content piece |
| /blog/video-podcast-vs-audio-which-to-choose | 200 | 1,801 | Article + PodcastStudio | Content piece |
| /blog/why-i-spent-47000-on-podcast-equipment | 200 | 1,506 | Article + PodcastStudio | Content piece |

### Critical Issues Found

1. **Missing Canonical Tags** — ALL 24 pages have `canonical: null`. Every page is missing a canonical tag. This is a critical technical SEO issue.

2. **Duplicate Meta Titles** — `/about`, `/services`, `/pricing`, `/book`, `/contact` all share the EXACT same title: "StreamToday Studios | Premier Podcast & Video Content in Nottingham". Only `/blog` and sector pages have unique titles. This creates keyword cannibalisation signals.

3. **Duplicate Meta Descriptions** — `/about`, `/services`, `/pricing`, `/book`, `/contact` all share the same description. Only `/blog` and sector pages have unique descriptions.

4. **No robots.txt issues** — robots.txt allows all, sitemap declared correctly.

5. **Schema present but basic** — Every page has `PodcastStudio` schema. Blog posts additionally have `Article` schema. The schema references `https://streamtoday.co.uk/logo.png` which may not exist (404 risk).

6. **No canonical URL consistency** — The site serves on both `streamtoday.co.uk` and `www.streamtoday.co.uk` without canonicalisation.

7. **Twitter link in footer** — Footer links to `https://twitter.com/streamtoday` but the live platform is X. This is a minor issue.

### Entity Information from Schema
- Name: StreamToday Studios
- Address: 20 Fletcher Gate, Nottingham, NG1 2FZ, UK
- Geo: 52.9536, -1.1442
- sameAs: Instagram, LinkedIn
- Opening hours: Mon-Fri 09:00-18:00
- Telephone partially masked in schema: +447****1309

---

## Indexation Status
- Pending verification via Search Console / site: queries

---

## Recent Changes
- 2026-09-23: Favicon changed to `/images/logo-sq-transparent.png` (pending Vercel deploy)

---

## Backlog (Prioritised)

| Priority | Task | Impact | Effort | Risk |
|----------|------|--------|--------|------|
| P0 | Add canonical tags to all pages | Critical | Low | Low |
| P0 | Fix duplicate meta titles on commercial pages | Critical | Low | Low |
| P0 | Fix duplicate meta descriptions on commercial pages | Critical | Low | Low |
| P1 | Verify logo.png exists or fix schema image reference | High | Low | Low |
| P1 | Audit www vs non-www consistency | High | Low | Low |
| P1 | Check Google Business Profile consistency | High | Medium | Low |
| P2 | Expand about/services page content (thin: 348/317 words) | Medium | Medium | Low |
| P2 | Add BreadcrumbList schema | Medium | Low | Low |
| P2 | Add FAQPage schema to homepage FAQs | Medium | Low | Low |
| P3 | Competitor intelligence research | Medium | High | Low |
| P3 | AI visibility benchmark (30 prompts) | Medium | High | Low |
