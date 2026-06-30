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
    slug: "fountain-pen-ink-comparison-guide",
    title: "Fountain Pen Ink Comparison Guide — Best Inks by Color, Brand, & Use Case",
    excerpt: "Compare fountain pen inks from Pilot Iroshizuku, Diamine, Noodler's, Waterman, Pelikan, and more. Best inks by color, drying time, and water resistance.",
    date: "2026-06-29",
    category: "Ink Guide",
  },
  {
    slug: "best-fountain-pens-for-note-taking",
    title: "Best Fountain Pens for Note-Taking in 2026",
    excerpt: "Fast-drying nibs, comfortable grips, and ink capacity compared. The best fountain pens for note-taking from Pilot, Lamy, TWSBI, Sailor, and Platinum with prices.",
    date: "2026-06-29",
    category: "Buying Guide",
  },
  {
    slug: "best-fountain-pens-for-calligraphy",
    title: "Best Fountain Pens for Calligraphy in 2026",
    excerpt: "Flex nibs, stub nibs, and italic nibs compared. The best fountain pens for calligraphy from Pilot, Noodler's, Lamy, TWSBI, and Kaweco with price comparisons.",
    date: "2026-06-27",
    category: "Calligraphy Guide",
  },
  {
    slug: "best-fountain-pens-for-students",
    title: "Best Fountain Pens for Students in 2026",
    excerpt: "Budget-friendly fountain pens for students compared by durability, ink capacity, and price. Pilot Metropolitan, Lamy Safari, TWSBI Eco, and more.",
    date: "2026-06-27",
    category: "Buying Guide",
  },
  {
    slug: "pilot-custom-823-vs-sailor-pro-gear",
    title: "Pilot Custom 823 vs Sailor Pro Gear — Gold Nib Showdown",
    excerpt: "Two Japanese gold nib icons compared. Vacuum filler vs cartridge, 14k vs 21k gold, smooth writer vs pencil-like feedback. Full comparison with prices.",
    date: "2026-06-27",
    category: "Comparison",
  },
  {
    slug: "rotring-600-vs-lamy-safari",
    title: "Rotring 600 vs Lamy Safari — Technical Pen Showdown",
    excerpt: "Two iconic precision fountain pens compared. Brass vs plastic, knurled metal vs triangular grip. Full feature and price comparison.",
    date: "2026-06-27",
    category: "Comparison",
  },
  {
    slug: "best-fountain-pens-for-journaling",
    title: "Best Fountain Pens for Journaling in 2026",
    excerpt:
      "The best fountain pens for journaling, compared by comfort, ink capacity, and price. Pilot Custom 823, Lamy 2000, TWSBI Eco, and more.",
    date: "2026-06-27",
    category: "Buying Guide",
  },
  {
    slug: "best-fountain-pens-under-300",
    title: "Best Fountain Pens Under $300 in 2026",
    excerpt:
      "Gold nibs, piston fillers, and flagship build quality. Compare prices on the Sailor Pro Gear, Lamy 2000, Pilot Custom 823, Pelikan M400, and more.",
    date: "2026-06-27",
    category: "Buying Guide",
  },
  {
    slug: "best-everyday-fountain-pens",
    title: "Best Everyday Fountain Pens for Writing in 2026",
    excerpt:
      "Reliable daily driver fountain pens compared. Comfort, ink capacity, durability, and price across Pilot, Lamy, TWSBI, Sailor, and Pelikan.",
    date: "2026-06-27",
    category: "Daily Driver Guide",
  },
  {
    slug: "best-fountain-pens-left-handed",
    title: "Best Fountain Pens for Left-Handed Writers in 2026",
    excerpt:
      "Left-handed? These fountain pens won't smudge, skip, or cause hand fatigue. Compare prices on the best left-handed pens.",
    date: "2026-06-27",
    category: "Buying Guide",
  },
  {
    slug: "best-fountain-pens-under-200",
    title: "Best Fountain Pens Under $200 in 2026",
    excerpt:
      "The $200 sweet spot delivers gold nibs, piston fillers, and flagship build quality. Compare prices on the Lamy 2000, Pilot Custom 823, Sailor Pro Gear, and more.",
    date: "2026-06-27",
    category: "Buying Guide",
  },
  {
    slug: "fountain-pen-vs-gel-pen",
    title: "Fountain Pen vs Gel Pen: Which Should You Choose?",
    excerpt:
      "Fountain pen vs gel pen: detailed comparison of writing feel, ink cost, refillability, and maintenance. Find out which writing instrument is right for you.",
    date: "2026-06-26",
    category: "Comparison Guide",
  },
  {
    slug: "fountain-pen-vs-ballpoint",
    title: "Fountain Pen vs Ballpoint Pen: Which Should You Choose?",
    excerpt:
      "Comprehensive comparison of fountain pens and ballpoint pens. Writing feel, ink cost, maintenance, and style — find out which is right for you.",
    date: "2026-06-26",
    category: "Comparison Guide",
  },
  {
    slug: "best-fountain-pens-under-100",
    title: "Best Fountain Pens Under $100 in 2026",
    excerpt:
      "The sweet spot for fountain pens. Compare prices on the Pilot Custom 74, TWSBI Diamond 580, Sailor Pro Gear Slim, Kaweco Dia2, and more.",
    date: "2026-06-26",
    category: "Buying Guide",
  },
  {
    slug: "best-fountain-pens-under-20",
    title: "Best Fountain Pens Under $20 in 2026",
    excerpt:
      "You don't need to spend a fortune. Compare prices on the Jinhao X450, Pilot Preppy, Platinum Preppy, Hongdian Forest, and more — all under $20.",
    date: "2026-06-26",
    category: "Budget Guide",
  },
  {
    slug: "best-fountain-pens-under-10",
    title: "Best Fountain Pens Under $10 in 2026 — Budget Picks That Actually Write Well",
    excerpt:
      "Incredible fountain pens for under $10. The Platinum Preppy, Jinhao 599, and more — tested and compared with live price links from Amazon, eBay, and JetPens.",
    date: "2026-06-30",
    category: "Budget Guide",
  },
  {
    slug: "fountain-pen-maintenance-guide",
    title: "Fountain Pen Maintenance Guide",
    excerpt:
      "Complete cleaning and care guide for fountain pens. Step-by-step instructions for every filling system, troubleshooting, and ink-specific tips.",
    date: "2026-06-27",
    category: "Technical Guide",
  },
  {
    slug: "best-japanese-fountain-pens",
    title: "Best Japanese Fountain Pens in 2026",
    excerpt:
      "Compare prices on the best Japanese fountain pens from Pilot, Sailor, Platinum, Taccia, and Nakaya. The definitive price comparison guide.",
    date: "2026-06-27",
    category: "Buying Guide",
  },
  {
    slug: "fountain-pen-nib-sizes-explained",
    title: "Fountain Pen Nib Sizes Explained",
    excerpt:
      "From Extra Fine to Broad, learn what each nib size writes like. Japanese vs European sizing, steel vs gold, and the best pens for every nib size.",
    date: "2026-06-27",
    category: "Technical Guide",
  },
  {
    slug: "twsbi-eco-vs-pilot-metropolitan",
    title: "TWSBI Eco vs Pilot Metropolitan",
    excerpt:
      "Two of the best budget fountain pens compared. Piston filler vs cartridge, ink capacity, nib quality, and price across Amazon, JetPens, and Goulet Pens.",
    date: "2026-06-26",
    category: "Comparison",
  },
  {
    slug: "lamy-safari-vs-pilot-metropolitan",
    title: "Lamy Safari vs Pilot Metropolitan",
    excerpt:
      "The two most recommended beginner fountain pens, head-to-head. Price, nib quality, ink system, build quality, and value compared.",
    date: "2026-06-26",
    category: "Comparison",
  },
  {
    slug: "best-fountain-pen-inks",
    title: "Best Fountain Pen Inks in 2026",
    excerpt:
      "We tested 50+ fountain pen inks across 10 brands to find the 10 best for everyday writing, artistic expression, and permanent documents.",
    date: "2026-06-26",
    category: "Ink Guide",
  },
  {
    slug: "fountain-pen-filling-systems-explained",
    title: "Fountain Pen Filling Systems Explained",
    excerpt:
      "Confused by cartridge vs piston vs vacuum? This guide breaks down every major filling system with pros, cons, ink capacities, and price comparisons.",
    date: "2026-06-26",
    category: "Technical Guide",
  },
  {
    slug: "best-fountain-pens-for-beginners",
    title: "Best Fountain Pens for Beginners in 2026",
    excerpt:
      "New to fountain pens? Our complete starter guide covers the top 10 beginner pens, nib sizes, filling systems, and everything you need to know.",
    date: "2026-06-26",
    category: "Beginner Guide",
  },
  {
    slug: "best-fountain-pens-under-50",
    title: "Best Fountain Pens Under $50 in 2026",
    excerpt:
      "Compare prices on the top-rated affordable fountain pens. Pilot Metropolitan, Lamy Safari, TWSBI Eco, Kaweco Sport, and more — with live price links.",
    date: "2026-06-26",
    category: "Buying Guide",
  },
  {
    slug: "best-fountain-pens-under-30",
    title: "Best Fountain Pens Under $30 in 2026",
    excerpt:
      "Compare prices on the best budget fountain pens under $30. Moonman M2, Lamy Safari, Jinhao 82, Kaweco Sport, Pilot Metropolitan, and more across Amazon, eBay, JetPens, and Goulet Pens.",
    date: "2026-06-29",
    category: "Budget Guide",
  },
  {
    slug: "best-fountain-pens-for-drawing",
    title: "Best Fountain Pens for Drawing and Sketching in 2026",
    excerpt:
      "The definitive guide to fountain pens for artists. Line art, cross-hatching, shading, and calligraphy with fountain pens. Nib recommendations and waterproof ink guide.",
    date: "2026-06-29",
    category: "Artist Guide",
  },
  {
    slug: "best-fountain-pens-for-travel",
    title: "Best Fountain Pens for Travel in 2026 — Portable & Reliable",
    excerpt:
      "Top portable fountain pens for travel. Compact, leak-proof, and airline-friendly fountain pens from Kaweco, Pilot, Lamy, TWSBI, and more. Price comparisons included.",
    date: "2026-06-30",
    category: "Travel Guide",
  },
  {
    slug: "best-fountain-pens-for-gifts",
    title: "Best Fountain Pens for Gifts in 2026 — Top Picks at Every Budget",
    excerpt:
      "The best fountain pens to give as gifts. From $6 to $300, find the perfect fountain pen for birthdays, holidays, graduations, and special occasions. Price comparisons included.",
    date: "2026-06-30",
    category: "Gift Guide",
  },
  {
    slug: "best-gold-nib-fountain-pens-under-200",
    title: "Best Gold Nib Fountain Pens Under $200 in 2026 — Affordable Luxury",
    excerpt:
      "Compare prices on the best gold nib fountain pens under $200. Pilot Custom 74, Sailor 1911, Platinum 3776 Century, Aurora Ipsilon, and more — with live price links from Amazon, JetPens, and Goulet Pens.",
    date: "2026-06-30",
    category: "Buying Guide",
  },
  {
    slug: "best-waterproof-fountain-pen-ink",
    title: "Best Waterproof Fountain Pen Inks in 2026 — Permanent & Document-Grade",
    excerpt:
      "The best waterproof and permanent fountain pen inks compared. Noodler's, Sailor, Platinum, De Atramentis, and more. Price comparisons and buying guide for archival ink.",
    date: "2026-06-30",
    category: "Ink Guide",
  },
  {
    slug: "fountain-pen-nib-grind-types",
    title: "Fountain Pen Nib Grind Types Explained — Cursive, Architect, Stub & More",
    excerpt:
      "Every fountain pen nib grind type explained: stub, cursive italic, architect, needlepoint, fude, flex, and more. What each writes like and which is right for you.",
    date: "2026-06-30",
    category: "Technical Guide",
  },
  {
    slug: "best-fountain-pens-for-signing-documents",
    title: "Best Fountain Pens for Signing Documents in 2026 — Professional Picks",
    excerpt:
      "The best fountain pens for signing legal documents, contracts, and official paperwork. Waterproof ink recommendations, professional nibs, and price comparisons.",
    date: "2026-06-30",
    category: "Professional Guide",
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
        <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
          Fountain Pen Guides & Comparisons
        </h1>
        <p className="text-lg text-stone-500">
          Expert buying guides, price comparisons, and tips for fountain pen enthusiasts.
          All articles include live price comparisons from major retailers.
        </p>
      </header>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block p-6 rounded border border-stone-200 bg-white hover:border-blue-300 hover:bg-stone-100 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs px-2.5 py-0.5 rounded bg-blue-50 text-blue-800">
                {post.category}
              </span>
              <span className="text-xs text-stone-400">{post.date}</span>
            </div>
            <h2 className="text-xl font-bold text-stone-900 group-hover:text-blue-800 transition-colors mb-2">
              {post.title}
            </h2>
            <p className="text-stone-500 text-sm leading-relaxed">{post.excerpt}</p>
            <span className="inline-block mt-3 text-sm font-medium text-blue-800 opacity-0 group-hover:opacity-100 transition-opacity">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
