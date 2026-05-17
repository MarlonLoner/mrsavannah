# Mr Savannah AI Day Landing Page

A premium futuristic landing page for the Mr Savannah flagship `$1000 AI Day` offer. Built with Vite, React, and Tailwind CSS for simple deployment to Vercel.

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Build

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deploy To Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Use the default Vite settings:
   - Framework preset: `Vite`
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.

No environment variables are required for the current version.

## Update Copy, Links, Video, And Posts

Most editable content lives in:

```text
src/content/siteContent.js
```

Update these fields there:

- `brand.socials` for social links.
- `hero.videoUrl` for the hero video background.
- `hero.posterUrl` for the hero fallback image. The current fallback is a local deployment-safe asset at `public/hero-poster.svg`.
- `experiments` for latest post placeholders.
- `visibilitySlots` for future sponsor, affiliate, partner, or client placements.

The hero video URL is an external placeholder. If it ever loads slowly or fails, the local poster still renders behind the overlay. For a production-owned media setup, place your video in `public/` and update `hero.videoUrl` to a path like `/hero-video.mp4`.

The placeholder social post cards are in `src/App.jsx` inside `ExperimentsSection`. Replace the marked placeholder block with real Facebook, Instagram, TikTok, or X embed code when ready. Until real links are added, placeholder post and social links are rendered as inactive labels instead of broken clickable links.

## Notes

- The secondary CTA and footer marketing-service link point to `https://crystalbrandingstudio.com`.
- The booking section uses `mailto:marlonleslie9@gmail.com`.
- The WhatsApp CTA opens `+263776617821` with the prefilled booking message.
- The project does not require server functions, API routes, or secrets for Vercel deployment.
