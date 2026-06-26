# PenPrice — Fountain Pen Price Aggregator

A price comparison site for fountain pen enthusiasts. Compare prices across Amazon, eBay, JetPens, Goulet Pens, and specialty retailers. Organized by brand → model.

## Structure

- 14 brands, 46 models
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

## Sprint A — June 26, 2026 (Growth Sprint — Deep Dive)

### What was done
- Added 2 new Japanese brands: Taccia (2 models) and Nakaya (2 models)
  - Taccia: Aurora (urushi lacquer), Spectrum (affordable resin)
  - Nakaya: Portable Cigar, Decapitation Writer (handmade urushi)
- Created `/blog/fountain-pen-filling-systems-explained` — comprehensive guide
  - Targets "fountain pen filling systems" and "cartridge vs piston" keywords
  - Covers 5 systems: Cartridge/Converter, Piston, Vacuum, Eyedropper, Lever
  - Quick comparison table, pros/cons, capacity data, linked pens
  - JSON-LD Article schema
- Updated blog index with new filling systems post
- Updated sitemap with new blog entry

### Keywords targeted
- "fountain pen filling systems" (new blog post)
- "cartridge vs piston fountain pen" (blog content)
- "fountain pen ink capacity comparison" (blog content)
- "Taccia Aurora fountain pen price" (new model page)
- "Nakaya Portable Cigar price" (new model page)

### Pages added/optimized
- NEW: `/blog/fountain-pen-filling-systems-explained` (Article schema)
- NEW: `/brands/taccia` (brand page)
- NEW: `/brands/taccia/aurora` (model page)
- NEW: `/brands/taccia/spectrum` (model page)
- NEW: `/brands/nakaya` (brand page)
- NEW: `/brands/nakaya/portable-cigar` (model page)
- NEW: `/brands/nakaya/decapitation-writer` (model page)
- UPDATED: Blog index (new entry)
- UPDATED: Sitemap (new entries)

### Current stats
- **Brands:** 14 (was 12)
- **Models:** 46 (was 42)
- **Blog posts:** 3 (was 2)
- **FAQ page:** 1
- **JSON-LD schemas:** WebSite (homepage) + Article (3 blog posts) + FAQPage (FAQ)

### Next steps
- Add more retailer-specific Amazon/eBay URLs to knownPrices
- Post on r/fountainpens about the price comparison tool
- Submit to Google Search Console
- Add more Italian brands (Delta, Omas)
