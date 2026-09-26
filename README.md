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
