# modulr-public

Public source reference for the [Modulr](https://x.com/Modulr402) x402 AI component marketplace. Contains non-sensitive frontend components, data structures and type definitions for transparency and developer reference.

This repository does not include payment logic, API routes, wallet adapters or access control systems. For the live platform visit [modulr402.com](https://modulr402.com).

---

## What is included

### `/types`
Full TypeScript type definitions for all marketplace data structures — products, categories, roadmap, tokenomics, litepaper, legal, export formats and the creator marketplace (tools, categories, endpoint status).

### `/data`
Static data files powering the marketplace — product listings, roadmap quarters, tokenomics allocations, litepaper sections, legal content and the official creator marketplace tool listings.

### `/components`
Frontend UI components for the public-facing marketplace surface:
- Layout (header, footer)
- Classic marketplace browser, product cards and access panel
- Creator marketplace browser, tool cards and tool detail client
- Litepaper, roadmap, tokenomics and legal section renderers
- UI primitives (button, format picker)

### `/app`
Next.js 15 App Router page files for public routes — homepage, marketplace, creator marketplace listing, creator marketplace submit, litepaper, roadmap, tokenomics and legal.

### `/lib`
Utility functions and site configuration.

---

## Creator Marketplace

The creator marketplace at `/marketplace` is an open listing of x402-payable tools built by external developers. The types and components in this repo cover the full creator marketplace surface:

- `types/marketplace.ts` — `CreatorTool`, `CreatorToolCategory`, `EndpointStatus` types
- `data/marketplace.ts` — static official tool listings
- `components/marketplace/tool-card.tsx` — tool card with Official/New badges, clickable tag chips
- `components/marketplace/creator-marketplace-browser.tsx` — full browser with search, category filter, source filter (Official/Community), sort and empty states
- `components/marketplace/tool-detail-client.tsx` — detail page client with share button, code snippets and More from @creator section

---

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v3
- TypeScript (strict)
- Framer Motion
- Lucide React
- Geist Sans / Geist Mono

---

## Links

- Platform: [modulr402.com](https://modulr402.com/)
- Marketplace: [modulr402.com/marketplace](https://modulr402.com/marketplace)
- X: [@Modulr402](https://x.com/Modulr402)
