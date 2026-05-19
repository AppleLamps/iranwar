# Iran War Briefing Site

This repository contains a static, single-page briefing website covering developments in the 2026 Iran conflict.  
The site combines curated events, timeline views, and source-linked context for public reference.

## Overview

- **Frontend:** static HTML, CSS, and vanilla JavaScript
- **Data model:** browser-loaded datasets from `/data`
- **Content:** supporting markdown source material in `/pages`
- **Deployment target:** Vercel static hosting

## Repository Structure

- `/index.html` — application shell and page layout
- `/app.js` — client-side rendering and interaction logic
- `/styles.css` — styling and visual design
- `/data/` — structured site data (events, coverage, sections, config)
- `/pages/` — source markdown reports used for reference

## Local Preview

From the repository root:

```bash
python -m http.server 4173
```

Then open `http://localhost:4173`.

## Deployment

Deploy to Vercel from the repository root:

```bash
vercel --prod
```

## Notes

- This project is static and does not require a build step.
- Keep data and content updates scoped to `/data` and `/pages` where possible.
