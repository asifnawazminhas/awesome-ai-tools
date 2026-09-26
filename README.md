# Awesome AI Tools

A practical directory of AI assistants, coding tools, research tools, local AI, image generation platforms and Security AI tools.

Live site: https://ai.asifnawazminhas.com/

## Features

- Searchable AI tools directory
- Category filters
- Favorites stored locally in the browser
- Compare mode
- Featured, Recently Added and Popular sections
- Pricing, platform, API and open-source metadata
- Security AI subfilters
- Dedicated tool detail pages
- Category landing pages
- Dedicated Security AI page
- Tool status and verification metadata
- Shareable tool links
- Responsive dark/light UI
- SEO metadata and structured data
- Sitemap and manifest
- GitHub-based tool submission workflow

## Categories

- AI Assistants
- Coding Assistants
- Research & Analysis
- Local AI
- AI Platforms & APIs
- Image Generation
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

This keeps content separate from the frontend JavaScript and makes future maintenance easier.

## Submit a Tool

New tools and corrections can be submitted through GitHub Issues:

https://github.com/asifnawazminhas/awesome-ai-tools/issues/new

## Deployment

The site is deployed through Cloudflare Workers static assets.

The current deployment command is:

```bash
npx wrangler deploy --assets ./public/
```

Pushing changes to the connected `main` branch triggers deployment through Cloudflare.

## Changelog

Release and maintenance history is kept on the site:

```text
/changelog/
```

The README intentionally does not duplicate the full release history.

## Licence

MIT License.

Copyright © 2026 Asif Nawaz Minhas.
