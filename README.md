# David Taiwo Executive Legacy Platform

Production Next.js 15 executive platform for David Taiwo.

## Platform areas

- Executive Digital Headquarters: `/dashboard`
- Innovation Lab: `/portfolio`
- Global opportunities: `/opportunities`
- Speaking platform: `/speaking`
- Publications library: `/publications`
- Executive media kit: `/media-kit`

The CV and media-kit actions use the browser print dialogue, allowing hosts and recruiters to save the current, responsive executive profile as a PDF.

## Run locally

1. Install Node 20.9 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and add `OPENAI_API_KEY` to enable the assistant.
4. Run `npm run dev`.

## Deploy

Import the repository into Vercel. The framework is detected automatically. Add `OPENAI_API_KEY` and optionally `OPENAI_MODEL` in Vercel Environment Variables before deploying. Set the production domain to `davidtaiwo.com` once it is available; canonical URLs, sitemap, robots, schema markup and generated social previews are already configured for that domain.
