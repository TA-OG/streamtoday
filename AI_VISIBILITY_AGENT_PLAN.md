# StreamToday AI Search Visibility Agent — Implementation Plan
**Status:** Pending Approval  
**Proposed By:** Hermes  
**Date:** 2026-09-23

---

## 1. OBJECTIVE

Deploy a durable, autonomous AI Search Visibility, GEO, SEO and Local Search agent for StreamToday Studios. The agent will maintain persistent state, work against the GitHub repository, and iterate continuously rather than executing as a one-shot prompt.

---

## 2. WHY A NEW AGENT (vs Existing OpenSEO)

The existing OpenSEO container at `streamtoday.pantherestate.uk:3010` provides rank tracking and keyword research APIs. It does NOT:
- Audit or modify the website directly
- Maintain longitudinal state across sessions
- Execute structured data changes
- Manage entity consistency across directories
- Run continuous ChatGPT/AI visibility benchmarks
- Maintain competitor intelligence over time

The new agent is complementary. It uses OpenSEO data where useful, but its job is **implementation and iteration**, not just monitoring.

---

## 3. PERMISSION MODEL

| Layer | Day 1 Permission | Escalation Condition |
|-------|-----------------|---------------------|
| GitHub repo (`TA-OG/streamtoday`) | Read + write + PR + merge | Proven for 14 days |
| Deployment (Caddy/Cloudflare) | Read + deploy via established workflow | Proven for 14 days |
| Website content / pages / schema | Full implementation | — |
| Google Business Profile | Read-only audit | Explicit approval after baseline |
| Google Search Console | Read-only | Explicit approval after baseline |
| Bing Webmaster Tools | Read-only | Explicit approval after baseline |
| Analytics (Plausible/GA) | Read-only | Explicit approval after baseline |
| External directory edits (Yell, Yelp, etc.) | Approval-gated | Explicit approval per directory |
| Spending money (ads, tools, services) | Approval-gated always | Explicit approval per purchase |
| Contacting external people | Approval-gated always | Explicit approval per outreach |

---

## 4. AGENT ARCHITECTURE

### 4.1 Agent Name
`streamtoday-visibility` (systemd service, port 8015)

### 4.2 Core Capabilities
- Git repository operations (clone, branch, commit, push, PR)
- Website crawling and auditing (Playwright + Python)
- Structured data validation (schema.org, Google Rich Results Test API)
- Content generation constrained by factual accuracy rules
- Competitor intelligence tracking
- Local entity consistency auditing
- AI visibility benchmark execution
- Reporting and dashboard generation

### 4.3 Execution Harness
The agent runs as a Python FastAPI service with scheduled tasks:
- **Daily:** Indexation check, broken link scan, AI benchmark run (sample)
- **Weekly:** Full technical audit, competitor check, review monitoring
- **Monthly:** Comprehensive baseline update, strategy review
- **On-demand:** Implementation tasks from prioritised backlog

### 4.4 Integration Points
- Reads from: `streamtoday` repo, OpenSEO API, Search Console API (read-only), GBP API (read-only)
- Writes to: `streamtoday` repo (PRs initially, direct commits after proven), state files
- Does NOT touch: DNS, payment infrastructure, legal policies, core branding

---

## 5. STATE MANAGEMENT

The agent maintains five persistent files in `/root/streamtoday/.visibility-agent/`:

| File | Purpose | Updated |
|------|---------|---------|
| `SEO_STATE.md` | Current technical condition, indexation status, recent changes, backlog | Every audit cycle |
| `ENTITY_FACTS.md` | Canonical entity information, verified facts, sameAs references, NAP consistency | When facts change |
| `COMPETITORS.md` | Competitor intelligence, verified facts only, sources dated | Weekly |
| `CHANGELOG.md` | Every change made by the agent: what, when, why, verification result | Per change |
| `benchmarks/ai_visibility.jsonl` | Machine-readable benchmark dataset: prompts, dates, results, sources cited | Per benchmark run |

These files are committed to the repo so any future agent (Hermes, OpenCode, Claude, etc.) can resume without rediscovering StreamToday from scratch.

---

## 6. FIRST DELIVERABLE: STREAMTODAY AI SEARCH BASELINE AUDIT

Before ANY website changes, the agent will produce the baseline document covering all 20 sections from your master prompt:

1. Executive summary
2. Current technical condition
3. Current search visibility
4. Current ChatGPT/AI visibility
5. Current Google visibility
6. Current Bing visibility
7. Local search condition
8. Google Business Profile findings
9. Entity consistency findings
10. Structured data findings
11. Website architecture
12. Content inventory
13. Competitor landscape
14. Backlink/citation landscape
15. Review landscape
16. Conversion issues
17. Specific errors discovered
18. Opportunities
19. Risk assessment
20. Prioritised implementation backlog (Impact / Confidence / Effort / Risk / Dependency / Action / Verification)

**ETA:** 3–5 days from agent deployment.

---

## 7. CONTENT ARCHITECTURE PRINCIPLE

The agent will NOT generate the 15 pages immediately. Instead:

1. Map actual search intents from research
2. Evaluate whether each intent warrants a dedicated page vs consolidation
3. Only create pages where there is sufficiently distinct intent AND sufficiently distinct useful content
4. Produce a content architecture recommendation for approval
5. Build only approved pages

This prevents the thin SEO footprint you correctly want to avoid.

---

## 8. TECHNICAL IMPLEMENTATION

### 8.1 Build Path
- T'Chala (OpenClaw) builds the agent at `/opt/streamtoday-visibility/`
- Port: 8015
- Systemd service: `streamtoday-visibility.service`
- Language: Python 3.11 + FastAPI
- Key dependencies: Playwright, httpx, beautifulsoup4, pydantic

### 8.2 Repository Workflow
1. Agent works in a dedicated branch: `visibility-agent/YYYY-MM-DD-{task}`
2. Changes are pushed as PRs initially
3. After 14 days of proven safe operation: direct commits to main allowed
4. Every change is documented in CHANGELOG.md
5. Build and test must pass before any deploy

### 8.3 Safety Gates
- Pre-commit validation: structured data, links, build
- Post-deploy validation: live site checks, mobile rendering, schema validation
- Rollback capability: previous commit tagged before deploy

---

## 9. RISKS AND MITIGATIONS

| Risk | Mitigation |
|------|-----------|
| Agent breaks the website | PR workflow initially; build tests mandatory; rollback tags |
| Agent generates thin content | Content architecture approval gate; 13-question quality gate |
| Agent invents facts | Fact verification against repo + website + ENTITY_FACTS.md; no unverified claims |
| Agent over-optimises for one system | Multi-system benchmark (Google, Bing, ChatGPT, Perplexity) |
| Agent repeats work monthly | State files prevent rediscovery; incremental audits only |
| External account damage | Read-only for 14 days; approval-gated for writes |

---

## 10. SUCCESS METRICS

| Metric | Baseline | 30-Day Target | 90-Day Target |
|--------|----------|--------------|---------------|
| Indexed pages (Google) | TBD | Maintain + fix errors | +20% high-intent pages |
| ChatGPT visibility (benchmark) | TBD | 10% improvement | 30% improvement |
| Google Business Profile views | TBD | +15% | +40% |
| Organic enquiries | TBD | +10% | +30% |
| Technical errors (broken links, schema) | TBD | Zero critical | Zero high |
| Entity consistency score | TBD | 90%+ | 95%+ |

---

## 11. APPROVAL REQUIRED

Before building, I need your explicit approval on:

1. **This plan** — any objections or additions?
2. **Permission model** — comfortable with repo + deploy access day one, external accounts read-only?
3. **Agent name and port** — `streamtoday-visibility` on port 8015?
4. **First deliverable priority** — baseline audit before any changes?

If approved, I will:
1. Create the agent spec and register it
2. Dispatch T'Chala to build the agent
3. Initialise the state files
4. Begin the baseline audit
