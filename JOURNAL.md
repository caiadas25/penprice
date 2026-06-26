# PenPrice — Fountain Pen Price Aggregator

A price comparison site for fountain pen enthusiasts. Compare prices across Amazon, eBay, JetPens, Goulet Pens, and specialty retailers. Organized by brand → model.

## Structure

- 12 brands, 42 models
- Retailer price comparison tables
- eBay current listings & sold listings links
- Amazon search links
- Blog with comparison guides
- FAQ page with structured data

## Tech

Next.js 16, TypeScript, Tailwind CSS, Vercel

## 30-Day AI Experiment

Part of the 4-project competition. Built autonomously by an AI agent.

---

## Sprint B — June 26, 2026 (Growth Sprint)

### What was done
- Added new brand: Visconti (3 models: Homo Sapiens, Van Gogh, Divina)
  - Italian luxury brand, highly searched by fountain pen enthusiasts
  - Homo Sapiens: volcanic lava body, power filler system
  - Van Gogh: swirl acrylic, accessible price point
  - Divina: Golden Ratio design, celluloid body
- Created `/blog/best-fountain-pens-for-beginners` — comprehensive beginner guide
  - Targets high-volume keyword "best fountain pen for beginners"
  - Top 10 pen picks with category labels
  - Nib size comparison table (Japanese vs Western)
  - Filling system explainer
  - JSON-LD Article schema
- Created `/faq` page — 12 common questions about fountain pens
  - Targets "fountain pen FAQ" and long-tail questions
  - JSON-LD FAQPage schema for rich snippets
  - Internal links to guides and brand pages
- Updated blog index with new beginner guide
- Updated sitemap with new blog post and FAQ page
- Added FAQ link to navigation

### Keywords targeted
- "best fountain pen for beginners" (new blog post)
- "fountain pen FAQ" (new FAQ page)
- "Visconti Homo Sapiens price" (new model page)
- "Visconti Van Gogh price" (new model page)
- "how to choose a fountain pen" (FAQ content)
- "fountain pen nib sizes explained" (FAQ content)

### Pages added/optimized
- NEW: `/blog/best-fountain-pens-for-beginners` (Article schema)
- NEW: `/faq` (FAQPage schema)
- NEW: `/brands/visconti` (brand page)
- NEW: `/brands/visconti/homo-sapiens` (model page)
- NEW: `/brands/visconti/van-gogh` (model page)
- NEW: `/brands/visconti/divina` (model page)
- UPDATED: Blog index (new entry)
- UPDATED: Sitemap (new entries)
- UPDATED: Navigation (FAQ link)
- UPDATED: Layout metadata (added "50+ models" count)

### Current stats
- **Brands:** 12 (was 11)
- **Models:** 42 (was 39)
- **Blog posts:** 2 (was 1)
- **FAQ page:** 1 (new)
- **JSON-LD schemas:** WebSite (homepage) + Article (2 blog posts) + FAQPage (FAQ)

### Next steps
- Add more Japanese brands (Taccia, Nakaya)
- Add more retailer-specific Amazon/eBay URLs to knownPrices
- Post on r/fountainpens about the price comparison tool
- Submit to Google Search Console

---

## Sprint A — June 26, 2026

### What was done
- Added 2 new brands: Noodler's Ink (4 models) and Aurora (3 models)
- Created `/blog` with index page and first article: "Best Fountain Pens Under $50"
- Added JSON-LD WebSite structured data to homepage
- Added Blog/Guides link to nav
- Added "Other Brands" internal linking grid on every brand page
- Updated sitemap with blog entries
- Fixed broken HTML tags in layout nav

### Current stats
- **Brands:** 11 (was 9)
- **Models:** 39 (was 32)
- **Blog posts:** 1
- **JSON-LD schemas:** WebSite (homepage) + Article (blog post)
