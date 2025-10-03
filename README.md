

This is a minimal React + Vite app implementing the common requirements: product listing, product details, add-to-cart (in-memory), cart sidebar, routing and basic styling.

## What we implemented

- Product listing (Home page)
- Product details page with an Add to Cart action
- Global cart state using a `CartProvider` (React context)
- Cart sidebar component (`CartSidebar`) that shows current items, quantities and totals
- Routing using `react-router-dom` (`Home` and `Product` pages)
- Basic styles in `src/styles.css`

Files of interest
- `src/App.tsx` — routes and app structure
- `src/main.tsx` — app entry
- `src/pages/Home.tsx` — product listing
- `src/pages/Product.tsx` — product details
- `src/components/CartSidebar.tsx` — cart UI
- `src/store/CartProvider.tsx` — cart state and actions

## Quick start (local)

Prerequisites:
- Node.js (v16+ recommended)
- npm (or use pnpm/yarn)

From the project root (PowerShell):

```powershell
npm install
npm run dev
# open the URL shown in the terminal (usually http://localhost:5173)
```

The dev server starts with Vite. Open the URL shown in the terminal to view the app.

## How to manually test the implemented features

1. Open the app root (Home page): verify products are visible.
2. Click a product to open the Product page.
3. Click `Add to Cart` on the Product page — the item should appear in the cart state.
4. Open the cart sidebar (use the cart icon/button in the UI) and verify:
	 - The product is listed with the correct name, price and quantity
	 - You can increase/decrease quantity
	 - You can remove an item and totals update accordingly
5. Repeat with multiple products to confirm totals and quantity behavior.

These steps validate routing, cart state management, and UI updates.


## Troubleshooting
- If `git pull` or other git operations fail because of unmerged files, resolve conflicts and continue the rebase/merge. Use `git status` to see conflicted files.
- If styles don't load, confirm `src/styles.css` is imported in `src/main.tsx` or `src/App.tsx`.

## Next steps / suggestions
- Add unit tests for components (React Testing Library + Vitest).
- Add product data fetching or local JSON to demonstrate dynamic content.
