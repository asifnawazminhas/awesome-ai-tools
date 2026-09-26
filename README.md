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

## v7.1 fix

- Fixed an issue where the tool detail modal overlay could appear on page load even though it was marked as hidden.
- Added explicit CSS handling for the HTML `hidden` attribute.

## v8

Adds real favicon-based tool logos with fallback, favorites, compare, Featured and Recently Added spotlights, pricing/platform/API badges, last-verified dates, GitHub links, share/copy links, Security AI subfilters, sorting, detailed modals, JSON-LD, Open Graph/Twitter metadata, canonical URLs, a dedicated `/security-ai/` page, favicon set, manifest, accessibility improvements, and a privacy-friendly analytics hook.

Analytics is disabled by default in `public/index.html` until you provide your own endpoint.

## v9

- Fixed long tool names being covered by Favorite / Compare / Share controls.
- Action controls now have their own row below the tool title.
- Added 18 additional tools.
- Total directory size: 56 tools.
- Expanded AI Assistants, Coding Assistants, Research & Analysis, Image Generation, Local AI and Security AI.
- Added garak and PyRIT to LLM Security.

## v10 mature directory upgrade

- Removed Continue, Tabnine and Windsurf due to product/acquisition/redirect changes.
- Moved tool data to `public/data/tools.json`.
- Added 53 dedicated tool pages.
- Added category landing pages.
- Added local logo assets.
- Added browser-local Popular / Trending section.
- Added maintenance status (`Active`, `Experimental`, `Archived`).
- Added source verification field.
- Added changelog and editorial policy pages.
- Added stronger accessibility and keyboard support.
- Total tools: 53.

## v10.1 logo fix

- Restored real favicon-based tool logos as the primary card icon.
- Kept local generated icons only as a fallback if the external favicon fails.
- Applied the same fallback behaviour to tool detail and category pages.

## v10.2 status correction

- Marked Pentest Copilot as `Archived`.
- Added note that the repository was archived by its owner on 2026-07-22 and is read-only.

## v10.3 status correction

- Marked CAI as `Archived`.
- Added note that the repository was archived by its owner on 2026-08-28 and is read-only.

## v11

- Removed archived tools: CAI and Pentest Copilot.
- Cleaner card hierarchy and consistent heights.
- Quieter Favorite / Compare / Share controls.
- Improved logo containers and fallback handling.
- Active status hidden from normal cards; only Experimental is surfaced.
- Refined Featured, Recently Added and Popular sections.
- Sticky/horizontal category navigation.
- Search clear button, `/` keyboard shortcut, result count and reset filters.
- Improved mobile layout and compare/modal spacing.
- Better tool detail pages with breadcrumbs and cleaner actions.
- Better empty states.
- Automatic hero counts: 51 tools across 7 categories.
- Expanded footer navigation.
- Per-tool JSON-LD.
- CSS preload and lazy-loaded images.
- Total live tools: 51.
