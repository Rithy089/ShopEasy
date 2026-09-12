# BobbyShop — 2026 collection

Static, responsive smartphone catalog. No build step or runtime dependencies.

## Preview

Run `python -m http.server 8080` in this directory and open `http://localhost:8080/hh.html`.
Vercel maps `/` to `hh.html` through `vercel.json`.

## Editing

- `hh.html`: page sections and existing business contact details.
- `styles.css`: responsive layout and colors.
- `app.js`: six products, reference prices, English/Khmer copy, filtering, sorting, comparison, and details.
- `assets/`: local manufacturer product images.

Prices are U.S. starting launch reference prices, not verified BobbyShop selling prices. Stock and local prices require confirmation through the existing shop contact. Samsung chip details describe U.S. models; regional configurations can differ. The Telegram inquiry opens a prefilled conversation; it does not send a message automatically. There is no checkout or payment backend.

## Product sources

Checked September 6, 2026:

- iPhone 17: https://www.apple.com/newsroom/2025/09/apple-debuts-iphone-17/
- iPhone 17 Pro: https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/
- iPhone Air: https://www.apple.com/newsroom/2025/09/introducing-iphone-air-a-powerful-new-iphone-with-a-breakthrough-design/
- Galaxy S26 family: https://news.samsung.com/us/samsung-unveils-galaxy-s26-series-most-intuitive-galaxy-ai-phone-yet
- Samsung launch price list: https://image-us.samsung.com/SamsungUS/business/solutions/industries/government/msrp-price-sheets/04072026/Samsung_HHP_MSRP_Price_File_%28March_2026%29.pdf

Apple imagery comes from the corresponding Apple Store product pages; Samsung imagery comes from the linked Samsung Newsroom announcement. Images show model/color collections. Product dialogs link to manufacturer information.

## Visual system

BobbyShop retains its electric-blue accent, navy branding, local product photography, existing contact details and English/Khmer language persistence. English uses the system sans-serif stack; Khmer uses locally hosted Battambang Regular and Bold. The original font assets remain in `assets/fonts/`, with their SIL Open Font License (source: https://github.com/google/fonts/tree/main/ofl/battambang).

Shared colors, page width and corner radii are defined in `styles.css` under `:root`. The responsive catalog uses three columns on desktop, two on tablet and one on mobile. Photography uses reserved image areas and `object-fit: contain`. Decorative reveals, tilt, gradients and image zoom have been removed; controls retain subtle feedback and respect reduced motion.

The header offers a search shortcut that focuses the catalog input. Active search/brand context and a reset action appear with results. Cards and dialogs clearly distinguish U.S. launch reference prices from local stock/quotes. Comparison stays available with larger checkbox targets, a keyboard-scrollable table and bottom-page space for its floating controls. Mobile navigation is non-sticky; dialog close controls remain accessible while scrolling.

## Validation (September 12, 2026)

Local Chrome/Playwright checks passed at 375, 768 and 1440px in English and Khmer: six products, loaded images, no document horizontal overflow, search focus, combined search/brand filters, no-results reset, all sorting modes, comparison minimum/maximum and table, all six product dialogs, Escape and focus restoration, product-specific Telegram URL contents, language persistence, reduced motion and the legacy redirect. No inquiries, orders or payments were submitted.

Before/after screenshots were captured locally and reviewed. Axe WCAG 2 A/AA and 2.1 AA automated scans found no violations on the catalog or product dialog at those sizes in either language. Automated checks do not replace a full assistive-technology audit.

The project has no package manifest, configured lint/type-check/test runner, compilation step or production build command. Basic source checks: `node --check app.js` and `git diff --check`. Serve the existing static files with the preview command above; no deployment is required.
