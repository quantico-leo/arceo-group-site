# Avertum Group AB

**Risk intelligence for owner-led businesses.**

This repository contains the public corporate website for **Avertum Group AB**, a Swedish risk intelligence company focused on cyber risk, fraud exposure, governance, accountability and verifiable evidence.

## Live website

**Production:** https://avertum.se

The site is deployed through **GitHub Pages** from the `main` branch and served through the custom domain `avertum.se`.

## Positioning

Avertum turns signals of cyber threats, fraud and governance risk into:

- clearer decisions
- assigned ownership
- prioritised action
- traceable documentation
- stronger readiness before an incident
- better defensibility after an incident

## Website features

- Swedish and English language versions
- responsive single-page corporate website
- Avertum Intelligence Platform presentation
- service and mandate descriptions
- readiness dashboard concept
- anonymised proof-of-value examples
- founder and company positioning
- contact form via Formspree
- privacy and cookie policy
- cookie consent management
- Google Consent Mode v2
- sitemap, robots directives and canonical metadata
- redirects from legacy pages

## Core files

```text
index.html                         Main website, styles and language content
cookie-consent.js                  Cookie consent and Google consent logic
integritet/index.html              Privacy and cookie policy
robots.txt                         Search-engine crawling directives
sitemap.xml                        Production sitemap
CNAME                              Custom domain configuration
avertum-logo-refined-master.png    Current Avertum brand mark
```

Legacy folders such as `/avsikt/`, `/processen/`, `/klienter/` and `/kontakt/` redirect visitors to the current website structure and are marked for removal from search indexes.

## Deployment

Changes pushed to `main` are deployed automatically through GitHub Pages.

After a content or design update:

1. confirm that **pages build and deployment** completes successfully in GitHub Actions
2. open `https://avertum.se`
3. perform a hard refresh
4. test both Swedish and English versions
5. verify desktop and mobile layouts
6. test the contact form, privacy page and cookie settings

## Privacy and consent

Google advertising and analytics-related storage is denied by default. Optional Google tags are activated only after user consent through the cookie banner.

The privacy policy is available at:

https://avertum.se/integritet/

## Brand

Primary positioning:

> Continuous Risk Intelligence for SMEs

Core themes:

> Cyber · Fraud · Governance

Visual identity:

- black and deep navy backgrounds
- metallic gold accents
- white editorial typography
- orbital intelligence-network motif

## Contact

**Avertum Group AB**  
Gothenburg, Sweden  
info@avertum.se

---

© 2026 Avertum Group AB. All rights reserved.
