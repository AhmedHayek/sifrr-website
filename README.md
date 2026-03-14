# صفر — Sifrr Website

Coming Soon page for [Sifrr](https://sifrr.com). Static site ready for **Cloudflare Pages**.

## Deploy on Cloudflare Pages

1. In [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select **AhmedHayek/sifrr-website**.
3. Build settings:
   - **Build command:** *(leave empty)*
   - **Build output directory:** *(leave empty)*
   - **Root directory:** *(leave empty)*
4. Save and deploy. The repo contains a single `index.html` (no build step).

## Local preview

Open `index.html` in a browser, or:

```bash
npx serve .
```
