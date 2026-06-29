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
