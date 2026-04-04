# 2026 Blog UX/SEO Gold Standard
## StreamToday Implementation Guide

### 1. TYPOGRAPHY & READABILITY

**Font Stack:**
- Headings: Inter (weight 700-900)
- Body: Inter (weight 400-600)
- Code/Mono: JetBrains Mono

**Type Scale:**
- H1: 48px/56px line-height (mobile: 36px/44px)
- H2: 36px/44px line-height (mobile: 28px/36px)
- H3: 28px/36px line-height (mobile: 24px/32px)
- Body: 18px/32px line-height (mobile: 16px/28px)
- Lead: 20px/32px line-height

**Spacing:**
- Paragraph margin: 24px bottom
- Heading margin: 48px top, 24px bottom
- Section padding: 80px vertical
- Content max-width: 720px (optimal reading width)

### 2. STRUCTURE & HEADINGS

**H1 (One per page):**
- Primary keyword front-loaded
- 50-60 characters max
- Compelling + descriptive

**H2 (Every 300-400 words):**
- Clear section breaks
- Keyword variations
- Scannable (user can skim)

**H3 (Subsections):**
- Specific points
- Action-oriented
- Support H2 topics

**Content Flow:**
1. Hook (first 100 words)
2. Table of Contents (jump links)
3. Problem/Context
4. Solution/Breakdown
5. Evidence/Examples
6. Action Steps
7. CTA

### 3. IMAGES & MEDIA

**Required Images Per Post:**
- Hero image (1200x630px, OG share)
- 3-5 content images (break up text)
- 1 infographic/data viz (if applicable)
- Author avatar

**Image Specs:**
- Format: WebP with JPEG fallback
- Lazy loading: native + intersection observer
- Alt text: Descriptive, keyword-rich
- Captions: Contextual, engaging

**Video Embeds:**
- Lazy load thumbnails
- Click to play (no autoplay)
- Schema markup for videos

### 4. SCHEMA MARKUP (2026 Standard)

**Article Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "description": "...",
  "image": "...",
  "datePublished": "...",
  "dateModified": "...",
  "author": {
    "@type": "Organization",
    "name": "StreamToday Studios"
  },
  "publisher": {
    "@type": "Organization",
    "name": "StreamToday Studios",
    "logo": "..."
  }
}
```

**BreadcrumbList Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [...]
}
```

**FAQPage Schema (if applicable):**
- For posts with Q&A sections
- Boosts voice search visibility

### 5. AI SEARCH OPTIMISATION (2026)

**For LLM/RAG Systems:**
- Clear entity definitions (what/who/where)
- Structured data for facts
- Direct answers in first paragraph
- Bullet points for lists
- Tables for comparisons

**Voice Search:**
- Conversational H2s ("How do I...", "What is...")
- 40-50 word answers for featured snippets
- Question-based subheadings
- Local intent signals ("near me", "in Nottingham")

**AI-Readable Formatting:**
- Semantic HTML (article, section, aside)
- Definition lists for terms
- Time elements with datetime attrs
- Address elements for locations

### 6. TECHNICAL SEO

**Core Web Vitals:**
- LCP < 2.5s (hero image priority)
- FID < 100ms (minimal JS blocking)
- CLS < 0.1 (image dimensions specified)

**Meta Tags:**
- Title: 50-60 chars, keyword + brand
- Description: 150-160 chars, CTA included
- OG tags: Full Open Graph protocol
- Twitter Cards: Summary large image

**URL Structure:**
- Short, descriptive, hyphenated
- No dates (unless news)
- Keyword-rich but natural

### 7. INTERNAL LINKING

**Navigation:**
- Breadcrumbs (schema + visual)
- Related posts (3-5 at end)
- Contextual links (2-3 per 500 words)
- Category/tag links

**Link Strategy:**
- Anchor text: Descriptive, varied
- Priority pages: Booking, pricing, services
- Orphan prevention: Every post linked from another

### 8. CONVERSION ELEMENTS

**Above Fold:**
- Clear value proposition
- Trust signals (social proof)
- Primary CTA visible

**Mid-Content:**
- Soft CTAs ("Learn more", "See pricing")
- Lead magnet offers
- Social proof quotes

**End of Post:**
- Strong CTA block
- Related content
- Newsletter signup
- Social sharing

**Sticky Elements:**
- Progress bar (reading position)
- Share buttons (mobile)
- Back to top

### 9. ACCESSIBILITY (WCAG 2.1 AA)

**Requirements:**
- Color contrast: 4.5:1 minimum
- Focus indicators: Visible
- Alt text: All images
- ARIA labels: Interactive elements
- Skip links: Keyboard navigation
- Reduced motion: Respect preference

### 10. MOBILE-FIRST

**Breakpoints:**
- Mobile: < 640px
- Tablet: 640-1024px
- Desktop: > 1024px

**Mobile Optimisations:**
- Touch targets: 44x44px minimum
- Font size: 16px minimum (no zoom)
- Line length: 45-75 characters
- Images: Responsive srcset
- Navigation: Hamburger + sticky

---

## Implementation Checklist

### Per Post:
- [ ] Semantic HTML structure
- [ ] Schema markup (Article + Breadcrumb)
- [ ] OG + Twitter meta tags
- [ ] Hero image (1200x630)
- [ ] 3-5 content images
- [ ] Table of Contents
- [ ] Breadcrumb navigation
- [ ] Author bio
- [ ] Related posts
- [ ] Social sharing
- [ ] Newsletter CTA
- [ ] Booking CTA (primary)
- [ ] Internal links (5-8)
- [ ] External links (2-3, authoritative)
- [ ] FAQ schema (if applicable)
- [ ] Video schema (if applicable)
- [ ] Reading time estimate
- [ ] Last updated date
- [ ] Print styles
- [ ] Dark mode support

### Site-Wide:
- [ ] XML sitemap (auto-generated)
- [ ] RSS feed
- [ ] Search functionality
- [ ] Category pages
- [ ] Tag pages
- [ ] Author pages
- [ ] Archive pages
- [ ] 404 page (helpful)
- [ ] Loading states
- [ ] Error boundaries

---

This is the 2026 standard. Implementing now.
