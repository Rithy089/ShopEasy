# ShopEasy — 2026 collection

Static, responsive smartphone catalog. No build step or runtime dependencies.

## Preview

Run `python -m http.server 8080` in this directory and open `http://localhost:8080/hh.html`.
Vercel maps `/` to `hh.html` through `vercel.json`.

## Editing

- `hh.html`: page sections and existing business contact details.
- `styles.css`: responsive layout and colors.
- `app.js`: six products, reference prices, English/Khmer copy, filtering, sorting, comparison, and details.
- `assets/`: local manufacturer product images.

Prices are U.S. starting launch reference prices, not verified ShopEasy selling prices. Stock and local prices require confirmation through the existing shop contact. Samsung chip details describe U.S. models; regional configurations can differ. The Telegram inquiry opens a prefilled conversation; it does not send a message automatically. There is no checkout or payment backend.

## Product sources

Checked September 6, 2026:

- iPhone 17: https://www.apple.com/newsroom/2025/09/apple-debuts-iphone-17/
- iPhone 17 Pro: https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/
- iPhone Air: https://www.apple.com/newsroom/2025/09/introducing-iphone-air-a-powerful-new-iphone-with-a-breakthrough-design/
- Galaxy S26 family: https://news.samsung.com/us/samsung-unveils-galaxy-s26-series-most-intuitive-galaxy-ai-phone-yet
- Samsung launch price list: https://image-us.samsung.com/SamsungUS/business/solutions/industries/government/msrp-price-sheets/04072026/Samsung_HHP_MSRP_Price_File_%28March_2026%29.pdf

Apple imagery comes from the corresponding Apple Store product pages; Samsung imagery comes from the linked Samsung Newsroom announcement. Images show model/color collections. Product dialogs link to manufacturer information.

## Validation

Headless Chrome checks passed: six-product rendering; combined search and brand filters; empty-state reset; ascending price sorting; comparison selection, maximum limit and table; detail dialogs and Escape; product-specific inquiry URL; language persistence; image loading; no horizontal overflow at 375, 390, 768 and 1440 pixels; no JavaScript runtime errors. Desktop and mobile screenshots were visually reviewed.
