# plugzzy_website

Landing page for **Plugzzy** — India's neighborhood-first peer-to-peer EV charging network.

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- Framer Motion

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy on Netlify

This project includes a `netlify.toml` — Netlify will auto-detect it.

**Required Netlify settings:**
- **Build command:** `npm run build`
- **Publish directory:** `dist`

Do **not** publish the repo root (`.`) — that causes MIME type errors because the browser tries to load `/src/main.tsx` instead of the compiled JS bundle.

After pushing to GitHub, connect the repo in Netlify or trigger a new deploy.

## Features

- Responsive landing page with app mockups
- Host registration form (sends to email via FormSubmit)
- Smooth scroll animations and modern UI
