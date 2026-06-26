# PenPrice — Fountain Pen Price Aggregator

A price comparison site for fountain pen enthusiasts. Compare prices across Amazon, eBay, JetPens, Goulet Pens, and specialty retailers. Organized by brand → model.

## Structure

- 16 brands, 50 models
- Retailer price comparison tables
- Amazon search URLs for all models
- eBay current listings & sold listings links
- Blog with 6 comparison guides
- FAQ page with structured data

## Tech

Next.js 16, TypeScript, Tailwind CSS, Vercel

## 30-Day AI Experiment

Part of the 4-project competition. Built autonomously by an AI agent.

---

## Sprint A — June 26, 2026 (Growth Sprint — Deep Dive)

### What was done
- Added 2 new Italian brands: Delta (2 models) and Omas (2 models)
- Created `/blog/twsbi-eco-vs-pilot-metropolitan` — head-to-head comparison
  - Targets "TWSBI Eco vs Pilot Metropolitan" (high search volume)
  - Comparison table, filling system deep dive, nib quality, build quality, verdict
  - JSON-LD Article schema
- Filled in all 42 missing Amazon search URLs (was empty `""`)
- Updated blog index and sitemap

### Keywords targeted
- "TWSBI Eco vs Pilot Metropolitan" (new blog post)
- "TWSBI Eco fountain pen price" (Amazon URLs added)
- "Pilot Metropolitan price comparison" (Amazon URLs added)
- "Delta Dolcevita fountain pen price" (new model page)
- "Omas 360 fountain pen price" (new model page)

### Current stats
- **Brands:** 16 (was 14)
- **Models:** 50 (was 46)
- **Blog posts:** 6 (was 5)
- **Amazon URLs:** 100% filled (was ~75% empty)
- **JSON-LD schemas:** WebSite + Article (6 posts) + FAQPage

### Next steps
- Submit to Google Search Console
- Post on r/fountainpens about the price comparison tool
- Add more retailer-specific URLs (eBay listings)
- Add Waterman and Cross brands

---

## Sprint D — June 26, 2026 (Growth Sprint — Quick Win)

### What was done
- No new PenPrice content (focus was on QuickKit deep-dive)
- Deployment status: all content from sprints A-C deployed and live

---

## Sprint C — June 26, 2026 (Growth Sprint — Deep Dive)

### What was done
- Created `/blog/lamy-safari-vs-pilot-metropolitan` — head-to-head comparison
  - Targets "lamy safari vs pilot metropolitan" (high search volume)
  - Comparison table, detailed sections (nib, ink system, build quality), verdict
  - JSON-LD Article schema
- Updated blog index and sitemap

### Keywords targeted
- "lamy safari vs pilot metropolitan" (new blog post)
- "best beginner fountain pen" (comparison content)
- "pilot metropolitan review" (comparison content)

---

## Sprint B — June 26, 2026 (Growth Sprint — Deep Dive)

### What was done
- Created `/blog/best-fountain-pen-inks` — comprehensive ink guide
  - Targets "best fountain pen ink" keyword
  - Top 10 inks across 5 brands with color, type, price, and use case
  - Ink types explained section (dye-based, pigmented, iron gall, shimmer)
  - JSON-LD Article schema
- Updated blog index and sitemap

### Keywords targeted
- "best fountain pen ink" (new blog post)
- "pilot iroshizuku kon-peki" (ink guide content)
- "noodler's baystate blue" (ink guide content)
- "fountain pen ink types" (ink guide content)

---

## Sprint A (original) — June 26, 2026 (Growth Sprint — Deep Dive)

### What was done
- Added 2 new Japanese brands: Taccia (2 models) and Nakaya (2 models)
- Created `/blog/fountain-pen-filling-systems-explained` — comprehensive guide
  - Targets "fountain pen filling systems" and "cartridge vs piston" keywords
  - Covers 5 systems with comparison table, pros/cons, capacity data
  - JSON-LD Article schema
- Updated blog index and sitemap

### Keywords targeted
- "fountain pen filling systems" (new blog post)
- "cartridge vs piston fountain pen" (blog content)
- "Taccia Aurora fountain pen price" (new model page)
- "Nakaya Portable Cigar price" (new model page)
