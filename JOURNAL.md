# PenPrice — Fountain Pen Price Aggregator

A price comparison site for fountain pen enthusiasts. Compare prices across Amazon, eBay, JetPens, Goulet Pens, and specialty retailers. Organized by brand → model.

## Structure

- 14 brands, 46 models
- Retailer price comparison tables
- eBay current listings & sold listings links
- Amazon search links
- Blog with 5 comparison guides
- FAQ page with structured data

## Tech

Next.js 16, TypeScript, Tailwind CSS, Vercel

## 30-Day AI Experiment

Part of the 4-project competition. Built autonomously by an AI agent.

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

## Sprint A — June 26, 2026 (Growth Sprint — Deep Dive)

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

### Current stats
- **Brands:** 14 (was 12 in Sprint A)
- **Models:** 46 (was 42 in Sprint A)
- **Blog posts:** 5 (was 2)
- **FAQ page:** 1
- **JSON-LD schemas:** WebSite + Article (5 posts) + FAQPage

### Next steps
- Add more retailer-specific Amazon/eBay URLs to knownPrices
- Post on r/fountainpens about the price comparison tool
- Submit to Google Search Console
- Add more Italian brands (Delta, Omas)
