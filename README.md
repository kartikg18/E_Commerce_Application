# Sembark Frontend Assignment — Sample Implementation

This is a minimal React + Vite app implementing the common requirements from the Sembark frontend assignment: fetch a product list from Fake Store API, show product details, add to cart (in-memory), responsive UI.

Quick start (Windows PowerShell):

```powershell
cd "c:\Users\Kartik\OneDrive\Documents\sembark-assignment"
npm install
npm run dev
```

What I implemented
- Product listing page (`/`) - fetches `https://fakestoreapi.com/products` and shows cards
- Product detail page (`/product/:id`) - fetches single product and allows adding to cart
- Simple in-memory cart provider (`src/store/CartProvider.jsx`)
- Responsive styles and basic error/loading states

Notes and next steps
- No persistent backend cart; it's in-memory for the demo.
- Could add cart UI, filtering, pagination, tests, and E2E tests with Playwright/Cypress as the assignment suggests.

Files created
- `src/pages/Home.jsx` — product list
- `src/pages/Product.jsx` — product details
- `src/store/CartProvider.jsx` — small cart context
- `src/App.jsx`, `src/main.jsx`, `src/styles.css`, `index.html`, `package.json`

If you want, I can:
- Add a visible cart panel with quantities and checkout stub
- Add unit tests and a CI config
- Implement filtering, search, and sorting

Tell me which extra feature you'd like and I'll add it next.
