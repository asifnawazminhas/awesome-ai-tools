# Awesome AI Tools

A focused AI security directory covering security-native AI and carefully selected general-purpose AI with practical value in legitimate security workflows.

Live site: https://ai.asifnawazminhas.com/

## Directory focus

The directory distinguishes between:

- **Security Native** — tools built specifically for cybersecurity or AI security.
- **General AI for Security** — general-purpose AI that can support legitimate security research, code analysis, scripting, documentation and learning.
- **General AI** — useful tools retained in the broader catalogue without being presented as security products.


## AI Security Training & Certifications

The directory now includes a dedicated training and certifications section.

Initial listing:

- OffSec AI-300: Advanced AI Red Teaming
- Certification: OffSec AI Red Teamer (OSAI / OSAI+)
- Official source: https://www.offsec.com/courses/ai-300/

Training and certification listings are kept separate from tool listings.

## Features

- Searchable AI tools directory
- Category and quick filters
- Favorites stored locally in the browser
- Compare mode
- Featured, Recently Added and Popular sections
- Pricing, platform, API and open-source metadata
- Security AI subfilters
- Dedicated tool detail pages
- Category landing pages
- Dedicated Security AI page
- Tool verification metadata
- Shareable tool links
- Social sharing menu for LinkedIn, X, WhatsApp, Facebook, email and copy link
- Native device sharing when supported
- Dedicated scroll-to-top and scroll-to-bottom controls
- Custom Awesome AI Tools brand mark and favicon
- Responsive dark/light UI
- SEO metadata and structured data
- Sitemap and manifest
- GitHub-based tool submission workflow
- Rich tool profiles with overview, use cases and verification details
- Similar-tool recommendations generated from category and metadata
- Goal-based discovery for coding, research, security and local AI
- Community submission page with duplicate checking
- Pre-filled GitHub submission workflow
- Per-tool outdated-information reporting workflow

## Categories

- AI Assistants
- Coding Assistants
- Research & Analysis
- Local AI
- AI Platforms & APIs
- Security AI

## Project structure

```text
awesome-ai-tools/
├── .github/
│   └── ISSUE_TEMPLATE/
├── public/
│   ├── about/
│   ├── changelog/
│   ├── data/
│   │   ├── categories.json
│   │   └── tools.json
│   ├── security-ai/
│   ├── tools/
│   ├── assets/
│   │   ├── css/
│   │   ├── img/
│   │   └── js/
│   ├── index.html
│   ├── manifest.webmanifest
│   ├── robots.txt
│   └── sitemap.xml
├── LICENSE
├── README.md
└── wrangler.toml
```

## Tool data

Tool metadata is maintained in:

```text
public/data/tools.json
```

Category metadata is maintained in:

```text
public/data/categories.json
```

## Submit a Tool

New tools and corrections can be submitted through GitHub Issues:

https://github.com/asifnawazminhas/awesome-ai-tools/issues/new

## Deployment

The site is deployed through Cloudflare Workers static assets.

```bash
npx wrangler deploy --assets ./public/
```

Pushing changes to the connected `main` branch triggers deployment through Cloudflare.

## Changelog

Release and maintenance history is kept on the site at:

```text
/changelog/
```

## Licence

MIT License.

Copyright © 2026 Asif Nawaz Minhas.

## v16.1

- Added the official OffSec AI-300 artwork to the homepage certification promo and Training & Certifications page.

## v16.2

Added Hack The Box Academy:

- HTB Certified Offensive AI Expert (HTB COAE)
- AI Red Teamer job-role path
- 12-module curriculum co-developed with Google
- 7-day hands-on assessment with technical report
- adversarial ML, prompt injection, jailbreaking, LLM output exploitation, AI application/system security, AI privacy and AI defense

Official certification page:
https://academy.hackthebox.com/preview/certifications/htb-certified-offensive-ai-expert

## v16.3

- Moved Training & Certifications to the bottom of the homepage.
- Kept the AI security tool directory as the primary focus.
- Aligned OffSec AI-300 and HTB COAE cards to equal widths.
- Fixed HTB certification layout so it no longer overflows the site width.

## v16.4

- Replaced the text-based HTB badge with the official Hack The Box icon from Simple Icons.
- Logo source: https://cdn.simpleicons.org/hackthebox/9FEF00
- Applied on the homepage certification card and the dedicated Training & Certifications page.
