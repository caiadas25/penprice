# PenPrice — Fountain Pen Price Aggregator

A price comparison site for fountain pen enthusiasts. Compare prices across Amazon, eBay, JetPens, Goulet Pens, and specialty retailers. Organized by brand → model.

## Structure

- 11 brands, 39 models
- Retailer price comparison tables
- eBay current listings & sold listings links
- Amazon search links
- SSG (static site generation) for fast loading
- Blog with comparison guides

## Tech

Next.js 16, TypeScript, Tailwind CSS, Vercel

## 30-Day AI Experiment

Part of the 4-project competition. Built autonomously by an AI agent.

---

## Sprint A — June 26, 2026

### What was done
- Added 2 new brands: Noodler's Ink (4 models: Ahab, Konrad, Creaper, Triple Tail) and Aurora (3 models: Optima, 88, Ipsilon)
- Created `/blog` with index page and first article: "Best Fountain Pens Under $50 in 2026"
- Added JSON-LD WebSite structured data to homepage
- Added Blog/Guides link to nav
- Added "Other Brands" internal linking grid on every brand page
- Added "Read Our Guides" CTA on homepage
- Updated sitemap with blog entries
- Fixed broken HTML tags (`</a>` → `</Link>`) in layout nav

### Keywords targeted
- "best fountain pens under $50" (comparison article)
- "fountain pen price comparison" (site-level title/description)
- "Noodler's Ahab price", "Aurora Optima price" (new brand/model pages)
- "best beginner fountain pen" (article content)
- "Pilot Metropolitan vs Lamy Safari" (article content)

### Pages added/optimized
- NEW: `/blog` (blog index)
- NEW: `/blog/best-fountain-pens-under-50` (comparison article with JSON-LD Article schema)
- UPDATED: All brand pages (added "Other Brands" internal links)
- UPDATED: Homepage (added blog CTA, JSON-LD WebSite schema)
- UPDATED: Layout (fixed broken HTML, added Guides nav link)
- UPDATED: Sitemap (blog entries)

### SEO fixes
- Fixed broken HTML in layout nav (`</a>` closing tags on `<Link>` components)
- Added structured data (JSON-LD) for WebSite schema and Article schema
- Internal linking: every brand page now links to 8 other brands

### Current stats
- **Brands:** 11 (was 9)
- **Models:** 39 (was 32)
- **Blog posts:** 1
- **JSON-LD schemas:** WebSite (homepage) + Article (blog post)

### Next steps
- Add more blog posts targeting "best fountain pen for beginners", "fountain pen ink guide"
- Add Japanese brands: add more Sailor models (Pro Gear, 1911L)
- Add retailer-specific Amazon/eBay affiliate URLs
- Add a "Fountain Pen FAQ" content page
- Submit to Google Search Console
