import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fountain Pen Guides & Price Comparison Articles | PenPrice Blog",
  description:
    "Expert guides, price comparisons, and buying advice for fountain pen enthusiasts. Find the best deals on Lamy, Pilot, Sailor, TWSBI, and more.",
  openGraph: {
    title: "PenPrice Blog — Fountain Pen Guides & Comparisons",
    description: "Expert guides and price comparisons for fountain pen buyers.",
    type: "website",
  },
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const posts: BlogPost[] = [
  {
    slug: "pilot-metropolitan-review",
    title: "Pilot Metropolitan Review 2026 — Best Beginner Fountain Pen?",
    excerpt: "Pilot Metropolitan review with price comparison. The $18 fountain pen that started millions of writers. Compare prices across Amazon, JetPens, Goulet Pens, and Goldspot Pens.",
    date: "2026-07-01",
    category: "Review",
  },
  {
    slug: "sailor-pro-gear-slim-review",
    title: "Sailor Pro Gear Slim Review 2026 — The Perfect Entry to Sailor Gold Nibs?",
    excerpt: "Sailor Pro Gear Slim review with price comparison. 14K gold nib, 21 colorways, under $200. Compare prices across Amazon, JetPens, Goulet Pens, and Goldspot Pens.",
    date: "2026-07-01",
    category: "Review",
  },
  {
    slug: "platinum-3776-century-review",
    title: "Platinum 3776 Century Review 2026 — Best Gold Nib Under $200?",
    excerpt: "In-depth Platinum 3776 Century review: 14k gold nib, Slip & Seal cap, writing experience, and live price comparison across Amazon, JetPens, and Goulet Pens.",
    date: "2026-07-01",
    category: "Review",
  },
  {
    slug: "lamy-safari-review",
    title: "Lamy Safari Review 2026 — The World's Most Popular Fountain Pen?",
    excerpt: "In-depth Lamy Safari review: design, triangular grip, swappable nibs, ink system, and price comparison across 4 retailers.",
    date: "2026-07-01",
    category: "Review",
  },
  {
    slug: "pilot-custom-823-review",
    title: "Pilot Custom 823 Review 2026 — The Best Vacuum-Fill Fountain Pen?",
    excerpt: "In-depth Pilot Custom 823 review: vacuum filling system, 14k gold nib, ink capacity, writing experience, and price comparison across 6 retailers.",
    date: "2026-07-01",
    category: "Review",
  },
  {
    slug: "best-fountain-pens-for-writers",
    title: "Best Fountain Pens for Writers in 2026 — Long Writing Sessions",
    excerpt: "The 10 best fountain pens for writers. Ergonomic grips, large ink capacity, and smooth nibs for long writing sessions. Prices compared across Amazon, Goulet, and JetPens.",
    date: "2026-07-01",
    category: "Buying Guide",
  },
  {
    slug: "pilot-kakuno-review",
    title: "Pilot Kakuno Review 2026 — Best Fountain Pen Under $15?",
    excerpt: "In-depth Pilot Kakuno review: nib quality, ink capacity, writing experience, and price comparison. Is the smiley-face pen the best beginner fountain pen?",
    date: "2026-07-01",
    category: "Review",
  },
  {
    slug: "twsbi-eco-vs-kaweco-sport",
    title: "TWSBI Eco vs Kaweco Sport — Budget Fountain Pen Battle 2026",
    excerpt: "TWSBI Eco vs Kaweco Sport: piston filler vs pocket pen, ink capacity, nib quality, portability, and live prices under $40.",
    date: "2026-07-01",
    category: "Comparison",
  },
  {
    slug: "lamy-2000-vs-pilot-custom-823",
    title: "Lamy 2000 vs Pilot Custom 823 — Endgame Fountain Pen Showdown 2026",
    excerpt: "Lamy 2000 vs Pilot Custom 823: two of the most recommended endgame fountain pens compared. Piston vs vacuum filler, Bauhaus vs Japanese craftsmanship, and live prices.",
    date: "2026-06-30",
    category: "Comparison",
  },
  {
    slug: "sailor-pro-gear-vs-pilot-custom-74",
    title: "Sailor Pro Gear vs Pilot Custom 74 — Gold Nib Showdown 2026",
    excerpt: "Sailor Pro Gear vs Pilot Custom 74: two legendary Japanese gold nib pens compared. Nib feel, price, filling system, build quality, and which one you should buy.",
    date: "2026-06-30",
    category: "Comparison",
  },
  {
    slug: "montblanc-149-price-comparison",
    title: "Montblanc 149 Price Comparison 2026 — Best Deals Across Retailers",
    excerpt: "Compare Montblanc Meisterstuck 149 prices across Amazon, eBay, Goulet Pens, Goldspot, and Appelboom. Find the best deal on the world's most iconic luxury fountain pen.",
    date: "2026-06-30",
    category: "Price Guide",
  },
  {
    slug: "fountain-pen-price-comparison-guide",
    title: "Fountain Pen Price Comparison Guide — Best Deals Across Retailers 2026",
    excerpt: "Compare fountain pen prices across Amazon, JetPens, Goulet Pens, eBay, and specialty retailers. Find the best deals on 130+ models from Pilot, Lamy, Sailor, Pelikan, and Montblanc.",
    date: "2026-06-30",
    category: "Price Guide",
  },
  {
    slug: "best-fountain-pen-ink-colors",
    title: "Best Fountain Pen Ink Colors in 2026 — Color Guide & Price Comparison",
    excerpt: "Compare the best fountain pen ink colors by brand, shade, and price. Pilot Iroshizuku, Diamine, Noodler's, Waterman, Pelikan, and Sailor inks organized by color with water resistance ratings.",
    date: "2026-06-30",
    category: "Ink Guide",
  },
  {
    slug: "best-italian-fountain-pens",
    title: "Best Italian Fountain Pens in 2026 — Price Comparison Guide",
    excerpt: "Compare prices on the best Italian fountain pens from Aurora, Visconti, Leonardo, Montegrappa, Delta, and Pineider. From the $89 Leonardo Furore to the $599 Visconti Homo Sapiens.",
    date: "2026-06-30",
    category: "Brand Guide",
  },
  {
    slug: "fountain-pen-converters-explained",
    title: "Fountain Pen Converters Explained — Complete Guide",
    excerpt: "What is a fountain pen converter? How do they work, which ones fit your pen, and which brand makes the best converter? Pilot CON-40, Lamy Z28, and international standard compared.",
    date: "2026-06-30",
    category: "Technical Guide",
  },
  {
    slug: "best-fountain-pen-paper",
    title: "Best Fountain Pen Paper in 2026 — No Feathering, No Bleed",
    excerpt: "Top paper picks for fountain pen writing compared by weight, smoothness, and ink handling. Rhodia, Clairefontaine, Tomoe River, Leuchtturm1917, Midori, and more.",
    date: "2026-06-29",
    category: "Paper Guide",
  },
  {
    slug: "best-fountain-pens-for-signing-documents",
    title: "Best Fountain Pens for Signing Documents in 2026",
    excerpt: "Professional fountain pens for signing contracts, legal documents, and checks. Montblanc, Pelikan, Lamy, and Pilot pens that make a statement.",
    date: "2026-06-29",
    category: "Use Case",
  },
  {
    slug: "fountain-pen-nib-grind-types",
    title: "Fountain Pen Nib Grind Types Explained",
    excerpt: "From architect to stub, italic to cursive italic — every fountain pen nib grind type explained with writing samples and recommendations.",
    date: "2026-06-29",
    category: "Technical Guide",
  },
  {
    slug: "best-waterproof-fountain-pen-ink",
    title: "Best Waterproof Fountain Pen Ink in 2026",
    excerpt: "Permanent, waterproof, and archival fountain pen inks compared. Noodler's, Platinum Carbon, De Atramentis, and Sailor Sei-boku for documents and art.",
    date: "2026-06-29",
    category: "Ink Guide",
  },
  {
    slug: "best-fountain-pens-for-gifts",
    title: "Best Fountain Pens for Gifts in 2026 — Every Budget",
    excerpt: "Fountain pen gift ideas from $10 to $500. Beginner pens, luxury gifts, and collector's items for every budget and writing style.",
    date: "2026-06-28",
    category: "Gift Guide",
  },
  {
    slug: "best-fountain-pens-for-travel",
    title: "Best Fountain Pens for Travel in 2026",
    excerpt: "Compact, durable fountain pens for travel. Pocket pens, eyedroppers, and leak-proof designs for flying and adventure.",
    date: "2026-06-28",
    category: "Use Case",
  },
  {
    slug: "best-gold-nib-fountain-pens-under-200",
    title: "Best Gold Nib Fountain Pens Under $200 in 2026",
    excerpt: "Affordable gold nib fountain pens from Pilot, Sailor, Platinum, Lamy, and Pelikan. The best value gold nibs for under $200.",
    date: "2026-06-28",
    category: "Price Guide",
  },
  {
    slug: "best-fountain-pens-for-note-taking",
    title: "Best Fountain Pens for Note Taking in 2026",
    excerpt: "Fast-drying, comfortable fountain pens for students and professionals taking notes. Lamy, Pilot, TWSBI, and Kaweco pens compared.",
    date: "2026-06-27",
    category: "Use Case",
  },
  {
    slug: "best-fountain-pens-for-journaling",
    title: "Best Fountain Pens for Journaling in 2026",
    excerpt: "Smooth, comfortable fountain pens for daily journaling. Pilot, Lamy, TWSBI, and Kaweco pens that make writing a joy.",
    date: "2026-06-27",
    category: "Use Case",
  },
  {
    slug: "best-fountain-pens-for-calligraphy",
    title: "Best Fountain Pens for Calligraphy in 2026",
    excerpt: "Fountain pens with stub, italic, and flex nibs for calligraphy and hand lettering. Pilot, Lamy, Kaweco, and Noodler's compared.",
    date: "2026-06-27",
    category: "Use Case",
  },
  {
    slug: "best-fountain-pens-for-beginners",
    title: "Best Fountain Pens for Beginners in 2026",
    excerpt: "The best starter fountain pens under $50. Pilot Metropolitan, Lamy Safari, TWSBI Eco, Kaweco Sport, and Platinum Preppy compared.",
    date: "2026-06-26",
    category: "Beginner Guide",
  },
  {
    slug: "best-fountain-pens-for-students",
    title: "Best Fountain Pens for Students in 2026",
    excerpt: "Affordable, durable fountain pens for school and university. Lamy Safari, Pilot Metropolitan, TWSBI Eco, and more.",
    date: "2026-06-26",
    category: "Use Case",
  },
  {
    slug: "best-fountain-pens-for-drawing",
    title: "Best Fountain Pens for Drawing in 2026",
    excerpt: "Fountain pens for sketching and illustration. Nib sizes, ink compatibility, and pens used by artists.",
    date: "2026-06-26",
    category: "Use Case",
  },
  {
    slug: "best-everyday-fountain-pens",
    title: "Best Everyday Fountain Pens in 2026",
    excerpt: "Reliable, comfortable fountain pens for daily use. The pens you'll reach for every day, from $17 to $200.",
    date: "2026-06-25",
    category: "Roundup",
  },
  {
    slug: "best-fountain-pens-left-handed",
    title: "Best Fountain Pens for Left-Handed Writers in 2026",
    excerpt: "Fountain pens that work well for left-handed writers. Quick-drying inks, smooth nibs, and grip designs that reduce smearing.",
    date: "2026-06-25",
    category: "Use Case",
  },
  {
    slug: "fountain-pen-ink-comparison-guide",
    title: "Fountain Pen Ink Comparison Guide — Best Inks by Brand 2026",
    excerpt: "Compare fountain pen inks across Pilot Iroshizuku, Diamine, Noodler's, Waterman, Pelikan, Sailor, and Robert Oster. Properties, prices, and recommendations.",
    date: "2026-06-24",
    category: "Ink Guide",
  },
  {
    slug: "best-fountain-pen-inks",
    title: "Best Fountain Pen Inks in 2026 — Top Picks by Category",
    excerpt: "The best fountain pen inks for every use case: everyday writing, shading, sheening, waterproof, and color variety.",
    date: "2026-06-24",
    category: "Ink Guide",
  },
  {
    slug: "fountain-pen-filling-systems-explained",
    title: "Fountain Pen Filling Systems Explained — Piston, Vacuum, Cartridge & More",
    excerpt: "Every fountain pen filling system explained: cartridge, converter, piston, vacuum, eyedropper, lever, and spring-loaded. Pros, cons, and which pens use each.",
    date: "2026-06-23",
    category: "Technical Guide",
  },
  {
    slug: "best-japanese-fountain-pens",
    title: "Best Japanese Fountain Pens in 2026 — Price Comparison Guide",
    excerpt: "Compare prices on the best Japanese fountain pens from Pilot, Sailor, Platinum, Nakaya, and Namiki. From the $17 Preppy to the $500+ Emperor.",
    date: "2026-06-23",
    category: "Brand Guide",
  },
  {
    slug: "fountain-pen-nib-sizes-explained",
    title: "Fountain Pen Nib Sizes Explained — EF to BB",
    excerpt: "Fountain pen nib sizes explained with writing samples. Extra fine, fine, medium, broad, and beyond. How Japanese, European, and German nib sizes compare.",
    date: "2026-06-22",
    category: "Technical Guide",
  },
  {
    slug: "fountain-pen-maintenance-guide",
    title: "Fountain Pen Maintenance Guide — Clean, Flush & Store",
    excerpt: "How to clean, flush, and store your fountain pens. Step-by-step maintenance for cartridge, converter, piston, and vacuum filling systems.",
    date: "2026-06-22",
    category: "Technical Guide",
  },
  {
    slug: "fountain-pen-vs-ballpoint",
    title: "Fountain Pen vs Ballpoint — Which Should You Use?",
    excerpt: "Fountain pen vs ballpoint pen: writing comfort, ink cost, maintenance, and which is better for everyday writing, signatures, and note-taking.",
    date: "2026-06-21",
    category: "Comparison",
  },
  {
    slug: "fountain-pen-vs-gel-pen",
    title: "Fountain Pen vs Gel Pen — Writing Experience Compared",
    excerpt: "Fountain pen vs gel pen: ink flow, smoothness, cost, and which is better for journaling, note-taking, and everyday use.",
    date: "2026-06-21",
    category: "Comparison",
  },
  {
    slug: "best-fountain-pens-under-300",
    title: "Best Fountain Pens Under $300 in 2026",
    excerpt: "Premium fountain pens under $300. Lamy 2000, Pilot Custom 823, Pelikan M600, Sailor Pro Gear, and Montblanc StarWalker compared.",
    date: "2026-06-20",
    category: "Price Guide",
  },
  {
    slug: "best-fountain-pens-under-200",
    title: "Best Fountain Pens Under $200 in 2026",
    excerpt: "The best fountain pens under $200. Pilot Custom 74, Sailor Pro Gear Slim, Lamy 2000, Pelikan M200, and TWSBI Diamond 580 compared.",
    date: "2026-06-20",
    category: "Price Guide",
  },
  {
    slug: "best-fountain-pens-under-100",
    title: "Best Fountain Pens Under $100 in 2026",
    excerpt: "The best fountain pens under $100. Pilot Custom Heritage 92, Lamy Studio, TWSBI Diamond 580, Kaweco AL Sport, and Platinum 3776 compared.",
    date: "2026-06-19",
    category: "Price Guide",
  },
  {
    slug: "best-fountain-pens-under-50",
    title: "Best Fountain Pens Under $50 in 2026",
    excerpt: "The best fountain pens under $50. Pilot Metropolitan, Lamy Safari, TWSBI Eco, Kaweco Sport, Platinum Preppy, and Diplomat Magnum compared.",
    date: "2026-06-19",
    category: "Price Guide",
  },
  {
    slug: "best-fountain-pens-under-30",
    title: "Best Fountain Pens Under $30 in 2026",
    excerpt: "The best fountain pens under $30. Pilot Metropolitan, Lamy Safari, Kaweco Sport, Platinum Preppy, and Jinhao pens compared.",
    date: "2026-06-18",
    category: "Price Guide",
  },
  {
    slug: "best-fountain-pens-under-20",
    title: "Best Fountain Pens Under $20 in 2026",
    excerpt: "The best fountain pens under $20. Platinum Preppy, Pilot Varsity, Kaweco Sport, and Jinhao 599 compared.",
    date: "2026-06-18",
    category: "Price Guide",
  },
  {
    slug: "best-fountain-pens-under-10",
    title: "Best Fountain Pens Under $10 in 2026",
    excerpt: "The best fountain pens under $10. Platinum Preppy, Pilot Varsity, and the cheapest ways to start writing with a fountain pen.",
    date: "2026-06-17",
    category: "Price Guide",
  },
  {
    slug: "lamy-safari-vs-pilot-metropolitan",
    title: "Lamy Safari vs Pilot Metropolitan — Best Beginner Fountain Pen?",
    excerpt: "Lamy Safari vs Pilot Metropolitan: the two most recommended beginner fountain pens compared. Design, nib quality, comfort, and value.",
    date: "2026-06-16",
    category: "Comparison",
  },
  {
    slug: "rotring-600-vs-lamy-safari",
    title: "Rotring 600 vs Lamy Safari — Mechanical Pencil Meets Fountain Pen",
    excerpt: "Rotring 600 vs Lamy Safari: two Bauhaus-inspired writing instruments compared. Precision engineering vs mass-market design.",
    date: "2026-06-15",
    category: "Comparison",
  },
  {
    slug: "pilot-custom-823-vs-sailor-pro-gear",
    title: "Pilot Custom 823 vs Sailor Pro Gear — Japanese Gold Nib Showdown",
    excerpt: "Pilot Custom 823 vs Sailor Pro Gear: two of the best Japanese gold nib fountain pens compared. Vacuum vs cartridge, nib feel, and value.",
    date: "2026-06-15",
    category: "Comparison",
  },
  {
    slug: "twsbi-eco-vs-pilot-metropolitan",
    title: "TWSBI Eco vs Pilot Metropolitan — Best Fountain Pen Under $35",
    excerpt: "TWSBI Eco vs Pilot Metropolitan: piston filler vs cartridge, ink capacity, nib quality, build, and price compared.",
    date: "2026-06-14",
    category: "Comparison",
  },
  {
    slug: "kaweco-sport-vs-lamy-safari",
    title: "Kaweco Sport vs Lamy Safari — Best Portable Fountain Pen 2026",
    excerpt: "Kaweco Sport vs Lamy Safari: pocket-size vs full-size, design, nibs, filling systems, and live prices.",
    date: "2026-06-14",
    category: "Comparison",
  },
  {
    slug: "pelikan-m800-vs-montblanc-149",
    title: "Pelikan M800 vs Montblanc 149 — Luxury Fountain Pen Showdown",
    excerpt: "Pelikan M800 vs Montblanc 149: two German luxury fountain pens compared. Piston filler, 18k gold nib, build quality, and value.",
    date: "2026-06-13",
    category: "Comparison",
  },
  {
    slug: "montblanc-149-price-comparison",
    title: "Montblanc 149 Price Comparison 2026 — Best Deals Across Retailers",
    excerpt: "Compare Montblanc Meisterstuck 149 prices across Amazon, eBay, Goulet Pens, Goldspot, and Appelboom.",
    date: "2026-06-12",
    category: "Price Guide",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-500">Blog</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl font-bold text-stone-900 mb-3">Fountain Pen Guides & Price Comparisons</h1>
        <p className="text-lg text-stone-500">
          Expert guides, price comparisons, and buying advice for fountain pen enthusiasts. Updated regularly with live prices.
        </p>
      </header>

      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-5 rounded border border-stone-200 bg-white hover:border-stone-300 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-0.5 bg-stone-100 rounded text-stone-500 font-medium">
                {post.category}
              </span>
              <span className="text-xs text-stone-400">{post.date}</span>
            </div>
            <h2 className="text-lg font-semibold text-stone-900 mb-1 hover:text-blue-800 transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-stone-500 leading-relaxed">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
