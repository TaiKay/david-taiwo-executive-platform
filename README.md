# David Taiwo Executive Legacy Platform

Production Next.js 15 executive platform for David Taiwo.

## Platform areas

- Executive Digital Headquarters: `/dashboard`
- Innovation Lab: `/portfolio`
- Flagship case studies: `/case-studies`
- Global opportunities: `/opportunities`
- Speaking platform: `/speaking`
- Publications library: `/publications`
- Executive media kit: `/media-kit`

The CV and media-kit actions use the browser print dialogue, allowing hosts and recruiters to save the current, responsive executive profile as a PDF.

## Release candidate readiness

- Local editorial imagery is rendered with `next/image`; Vercel automatically serves responsive AVIF or WebP derivatives.
- Generated social previews are served by the `opengraph-image` route and carry no client-side image payload.
- Motion respects the user’s reduced-motion preference. Image loading is limited to the flagship case-studies hero; all other visual storytelling is CSS-led.
- Vercel Analytics is enabled globally. `EngagementLink` is the reusable hook for measuring high-intent navigation events.

## RC-2 visual system

The shared CSS layer defines the responsive section rhythm, glass navigation, high-contrast focus treatment, premium hover surfaces and action states. Shared `Reveal`, `PageHero`, navigation and Ask David components preserve reduced-motion preferences while keeping client-side animation work limited to interactive surfaces.

## MDX insights

The Insights pages use `@next/mdx` with MDX 3 and React 19. App Router requires the `src/mdx-components.tsx` convention; it provides server-compatible element mappings for every MDX route. Keep this file in place when adding articles under `src/app/insights`.

## Run locally

1. Install Node 20.9 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and add `OPENAI_API_KEY` to enable the assistant.
4. Run `npm run dev`.

## Deploy

Import the repository into Vercel. The framework is detected automatically. Add `OPENAI_API_KEY` and optionally `OPENAI_MODEL` in Vercel Environment Variables before deploying. Set the production domain to `davidtaiwo.com` once it is available; canonical URLs, sitemap, robots, schema markup and generated social previews are already configured for that domain.

## RC-3 launch checklist

1. Add `OPENAI_API_KEY` before enabling Ask David.
2. Optionally add `NEXT_PUBLIC_GA_MEASUREMENT_ID` and `NEXT_PUBLIC_CLARITY_PROJECT_ID`; scripts load only when their IDs are present.
3. Run `npm ci`, `npm run lint` and `npm run build` in the Vercel build environment.
4. Run Lighthouse on the deployed production URL for mobile and desktop, then verify keyboard navigation, mail-client contact flow, Open Graph preview, sitemap and robots.
5. Confirm the supplied security headers in the deployed response. The assistant accepts JSON only, validates same-origin browser requests and sends no-store responses.
