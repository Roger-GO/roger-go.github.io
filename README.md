# roger-go.github.io

Personal site for Rogelio Gracia Otalvaro — researcher, professor, and engineer at Embry-Riddle Aeronautical University.

Live at [roger-go.github.io](https://roger-go.github.io).

## Stack

- [Astro 4](https://astro.build) (static output)
- React islands for the interactive [Leaflet](https://leafletjs.com) world map
- Geist + Instrument Serif + JetBrains Mono via Google Fonts
- Deployed to GitHub Pages via GitHub Actions
- Cloudflare Web Analytics (privacy-friendly, no cookies)

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:4321`. The `dev` script binds to `0.0.0.0`, so you can also hit it from a phone on the same WiFi at `http://<your-lan-ip>:4321` (check Astro's startup log for the exact address). If the phone can't connect, your firewall is blocking the port — on Linux: `sudo ufw allow 4321/tcp`.

## Building

```bash
npm run build     # outputs to dist/
npm run preview   # serves the built dist/ locally
```

## Deployment

Any push to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci`, builds with Astro, and publishes the `dist/` artifact to GitHub Pages.

Requirement: in the repo **Settings → Pages**, source must be set to **"GitHub Actions"**, not "Deploy from a branch."

## Project structure

```
src/
  components/     BaseHead, WorldMap (React island)
  data/           countries.json (map data)
  layouts/        BaseLayout (nav, footer, scripts)
  pages/          index.astro + about/research/teaching/experience
  styles/         global.css (design tokens, components)
public/           favicons, profile photo, CV, robots.txt
.github/workflows deploy.yml (Pages)
```

## Content updates

- **Homepage sections** (hero, about, research, grants, teaching, map, experience, skills, contact) live in `src/pages/index.astro`.
- **Long-form subpages** live one file each in `src/pages/`.
- **Map locations and categories** are in `src/data/countries.json`; colors are defined in `src/components/WorldMap.tsx`.
- **CV PDF** is served from `public/CV_Rogelio_Gracia_Otalvaro.pdf` (replace this file when the CV changes).

## SEO

Structured data (JSON-LD Person schema), Open Graph, Twitter Card, canonical URL, and sitemap are all wired up in `src/components/BaseHead.astro`. The biggest single factor for name-search ranking is the `sameAs` array — keep LinkedIn, GitHub, ORCID, and Google Scholar URLs accurate there.

## Analytics

Cloudflare Web Analytics beacon is loaded from `BaseHead.astro`. Dashboard at [dash.cloudflare.com](https://dash.cloudflare.com) → Analytics & Logs → Web Analytics.

## License

[MIT](LICENSE)
