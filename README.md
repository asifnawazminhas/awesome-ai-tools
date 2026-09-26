# Awesome AI Tools

A practical directory of AI assistants, coding tools, research tools, local LLMs, image generators and AI platforms.

## Cloudflare deployment

This repository is configured for Cloudflare Workers static assets.

Deploy command:

```bash
npx wrangler deploy
```

Cloudflare serves only the contents of `./public/`.

## Repository structure

```text
awesome-ai-tools/
├── LICENSE
├── README.md
├── wrangler.toml
└── public/
    ├── index.html
    ├── 404.html
    ├── robots.txt
    ├── sitemap.xml
    └── assets/
        ├── css/
        ├── js/
        └── img/
```

Intended custom domain: `ai.asifnawazminhas.com`

## Footer

The site footer displays: `© 2026 Asif Nawaz Minhas. All rights reserved.`

## Included assistants

The directory includes ChatGPT, Claude, Gemini, DeepSeek, Grok, Perplexity, Microsoft Copilot, Loes and more.

## Security AI

Includes PentestGPT, PentAGI, CAI, Strix and hackingBuddyGPT.

## v6 additions

- Expanded Security AI category
- HexStrike AI
- DarkMoon
- Shannon
- Nebula
- BugTraceAI
- Pentest Copilot
- Featured, Open Source, Local AI, Autonomous and Security quick filters
- Status badges on tool cards
- Copyright footer


## v7 UX additions

- Favorites stored locally in the browser
- Compare up to 4 tools
- Tool detail modal
- Sort by Featured, A-Z, Category or Recently verified
- Last verified date on every tool
- Pricing and platform badges
- Security AI subfilters
- Submit a Tool GitHub issue link
- Open Graph and Twitter/X metadata
- Canonical URL
- Web app manifest
- Responsive comparison table
- Keyboard-friendly modal close with Escape
