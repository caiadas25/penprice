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
];

export default function BlogIndexPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-500 mb-8">
        <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-400">Blog</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Fountain Pen Guides & Comparisons
        </h1>
        <p className="text-lg text-slate-400">
          Expert buying guides, price comparisons, and tips for fountain pen enthusiasts.
          All articles include live price comparisons from major retailers.
        </p>
      </header>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block p-6 rounded-xl border border-slate-700 bg-slate-800/30 hover:border-amber-600/50 hover:bg-slate-800/50 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-900/30 text-amber-400">
                {post.category}
              </span>
              <span className="text-xs text-slate-500">{post.date}</span>
            </div>
            <h2 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
              {post.title}
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">{post.excerpt}</p>
            <span className="inline-block mt-3 text-sm font-medium text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
