import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Fountain Pens for Beginners in 2026 — Complete Starter Guide | PenPrice",
  description:
    "New to fountain pens? Our expert guide covers the 10 best beginner fountain pens, what nib size to choose, and how to get started. Includes price comparisons from Amazon, JetPens, and Goulet Pens.",
  openGraph: {
    title: "Best Fountain Pens for Beginners 2026 — Starter Guide",
    description: "The definitive guide to choosing your first fountain pen. Nib sizes, filling systems, and the top 10 pens under $30.",
    type: "article",
  },
};

interface BeginnerPen {
  name: string;
  slug: string;
  brandSlug: string;
  priceFrom: number;
  category: string;
  why: string;
}

const beginnerPens: BeginnerPen[] = [
  {
    name: "Pilot Metropolitan",
    slug: "metropolitan",
    brandSlug: "pilot",
    priceFrom: 18.95,
    category: "Best Overall",
    why: "The gold standard for beginner fountain pens. Brass body, smooth steel nib, and a converter included in the box. The Japanese Fine nib is perfect for everyday writing.",
  },
  {
    name: "Platinum Preppy",
    slug: "preppy",
    brandSlug: "platinum",
    priceFrom: 5.75,
    category: "Best Under $10",
    why: "At around $6, the Preppy is the cheapest good fountain pen in existence. The Slip & Seal cap prevents ink from drying out for months. A must-try even if you buy something else.",
  },
  {
    name: "Lamy Safari",
    slug: "safari",
    brandSlug: "lamy",
    priceFrom: 29.99,
    category: "Best Design",
    why: "The most recognizable fountain pen in the world. The triangular grip section helps you hold it correctly. Interchangeable nibs let you experiment with different sizes.",
  },
  {
    name: "TWSBI Eco",
    slug: "eco",
    brandSlug: "twsbi",
    priceFrom: 31.99,
    category: "Best Ink Capacity",
    why: "A piston filler with massive ink capacity and a demonstrator body that shows your ink sloshing around. The best value piston-filler on the market.",
  },
  {
    name: "Kaweco Sport",
    slug: "sport",
    brandSlug: "kaweco",
    priceFrom: 24.99,
    category: "Best Pocket Pen",
    why: "Compact enough for your pocket, but posts to a full-size pen when you need it. The octagonal cap is iconic. Available in dozens of colors.",
  },
  {
    name: "Lamy AL-Star",
    slug: "al-star",
    brandSlug: "lamy",
    priceFrom: 38.99,
    category: "Best Metal Body",
    why: "The Safari's aluminum sibling. Same nib and grip, but the brushed metal body feels substantially more premium. A great step up.",
  },
  {
    name: "Noodler's Creaper",
    slug: "creaper",
    brandSlug: "noodlers",
    priceFrom: 14.99,
    category: "Best Flex Nib",
    why: "The most affordable way to try a flex nib. Produces line variation for calligraphy-style writing. Piston filler with decent ink capacity.",
  },
  {
    name: "Faber-Castell Loom",
    slug: "loom",
    brandSlug: "faber-castell",
    priceFrom: 44.99,
    category: "Best Steel Nib",
    why: "Many reviewers call this the best steel nib on the market. Smooth, wet, and consistent. An under-the-radar gem for beginners who want quality.",
  },
  {
    name: "Lamy 2000",
    slug: "2000",
    brandSlug: "lamy",
    priceFrom: 179.99,
    category: "Best Investment Pen",
    why: "If you're willing to spend more upfront, the Lamy 2000 will last a lifetime. Piston filler, 14k gold nib, and a design that hasn't changed since 1966.",
  },
  {
    name: "Pilot Custom 74",
    slug: "custom-74",
    brandSlug: "pilot",
    priceFrom: 136.99,
    category: "Best Gold Nib Under $200",
    why: "The entry point to Pilot's gold nib lineup. The 14k gold nib is noticeably softer and more characterful than steel. A great reward after you've mastered your first pen.",
  },
];

function BeginnerPenCard({ pen }: { pen: BeginnerPen }) {
  return (
    <div className="border border-stone-200 rounded p-6 bg-white hover:border-blue-300 transition-all">
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-800 mb-2 inline-block">
            {pen.category}
          </span>
          <h3 className="text-lg font-bold text-stone-900 mt-1">
            <Link href={`/brands/${pen.brandSlug}/${pen.slug}`} className="hover:text-blue-800 transition-colors">
              {pen.name}
            </Link>
          </h3>
        </div>
        <span className="text-blue-800 font-mono text-lg font-bold">from ${pen.priceFrom}</span>
      </div>
      <p className="text-stone-500 text-sm leading-relaxed">{pen.why}</p>
      <div className="mt-4">
        <Link
          href={`/brands/${pen.brandSlug}/${pen.slug}`}
          className="text-xs px-3 py-1.5 rounded bg-blue-50 text-blue-800 hover:bg-amber-900/50 transition-colors inline-block"
        >
          Compare Prices →
        </Link>
      </div>
    </div>
  );
}

export default function BeginnerGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-800 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-500">Best Fountain Pens for Beginners</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-blue-800 text-sm font-medium mb-2">Beginner Guide — Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Best Fountain Pens for Beginners in 2026
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            Fountain pens are experiencing a massive resurgence. Whether you&apos;re drawn to the ritual of
            handwriting, want a better writing experience, or just think they look cool, this guide
            covers everything you need to pick your first fountain pen.
          </p>
        </header>

        {/* Quick Start */}
        <div className="bg-white border border-stone-200 rounded p-6 mb-10">
          <h2 className="text-lg font-bold text-stone-900 mb-3">Quick Start: 3 Things to Know</h2>
          <ul className="space-y-3 text-sm text-stone-700">
            <li>
              <span className="text-blue-800 font-semibold">1. Nib size matters more than brand.</span>{" "}
              Japanese nibs (Pilot, Sailor, Platinum) run finer than Western nibs (Lamy, Pelikan). A Pilot
              Fine is roughly equivalent to a Lamy Extra Fine.
            </li>
            <li>
              <span className="text-blue-800 font-semibold">2. Start with cartridges.</span>{" "}
              They&apos;re the easiest way to begin. Snap in a cartridge and write. You can always
              switch to bottled ink later with a converter.
            </li>
            <li>
              <span className="text-blue-800 font-semibold">3. Paper matters as much as the pen.</span>{" "}
              Even a $5 pen will feel amazing on Rhodia or Clairefontaine paper. Cheap copy paper
              causes feathering and bleeding with any fountain pen.
            </li>
          </ul>
        </div>

        {/* Top 10 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Top 10 Beginner Fountain Pens</h2>
          <div className="grid gap-4">
            {beginnerPens.map((pen) => (
              <BeginnerPenCard key={pen.slug} pen={pen} />
            ))}
          </div>
        </section>

        {/* Nib Guide */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Understanding Nib Sizes</h2>
          <div className="prose prose-invert max-w-none space-y-4 text-stone-700 text-sm leading-relaxed">
            <p>
              Nib sizes are not standardized across brands. Here&apos;s a rough comparison:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-stone-200 rounded overflow-hidden">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-stone-700 font-semibold">Size</th>
                    <th className="px-4 py-2 text-left text-stone-700 font-semibold">Japanese (Pilot)</th>
                    <th className="px-4 py-2 text-left text-stone-700 font-semibold">Western (Lamy)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  <tr><td className="px-4 py-2 text-stone-500">Extra Fine</td><td className="px-4 py-2 text-stone-700">~0.28mm</td><td className="px-4 py-2 text-stone-700">~0.4mm</td></tr>
                  <tr><td className="px-4 py-2 text-stone-500">Fine</td><td className="px-4 py-2 text-stone-700">~0.38mm</td><td className="px-4 py-2 text-stone-700">~0.5mm</td></tr>
                  <tr><td className="px-4 py-2 text-stone-500">Medium</td><td className="px-4 py-2 text-stone-700">~0.5mm</td><td className="px-4 py-2 text-stone-700">~0.6mm</td></tr>
                  <tr><td className="px-4 py-2 text-stone-500">Broad</td><td className="px-4 py-2 text-stone-700">~0.6mm</td><td className="px-4 py-2 text-stone-700">~0.8mm</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              <strong className="text-stone-900">Recommendation:</strong> If you have small handwriting or write
              on standard paper, start with a Japanese Fine or Western Extra Fine. If you write large
              and use good paper, go Medium.
            </p>
          </div>
        </section>

        {/* Filling Systems */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Filling Systems Explained</h2>
          <div className="grid gap-4 text-sm">
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Cartridge</h3>
              <p className="text-stone-500">Snap in a pre-filled ink cartridge. Easiest option for beginners. Pilot, Lamy, and Platinum each use proprietary cartridge sizes.</p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Converter</h3>
              <p className="text-stone-500">A reusable cartridge that lets you use bottled ink. Most cartridge pens can accept a converter. More ink choices, lower cost per fill.</p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Piston Filler</h3>
              <p className="text-stone-500">Built-in mechanism that draws ink directly from a bottle. Maximum ink capacity. Examples: TWSBI Eco, Lamy 2000, Pelikan M800.</p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Vacuum Filler</h3>
              <p className="text-stone-500">Uses a plunger to create a vacuum and draw ink. Massive ink capacity. Examples: Pilot Custom 823, TWSBI Vac 700R.</p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="border-t border-stone-200 pt-8">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Compare Prices</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/best-fountain-pens-under-50" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Pens Under $50 →</span>
              <span className="block text-stone-400 mt-1">Budget-friendly picks with live price comparisons</span>
            </Link>
            <Link href="/brands/pilot" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">All Pilot Pens →</span>
              <span className="block text-stone-400 mt-1">Metropolitan, Custom 823, Vanishing Point, and more</span>
            </Link>
            <Link href="/brands/lamy" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">All Lamy Pens →</span>
              <span className="block text-stone-400 mt-1">Safari, AL-Star, 2000, Studio, and more</span>
            </Link>
            <Link href="/brands" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Browse All Brands →</span>
              <span className="block text-stone-400 mt-1">11 brands, 39+ models tracked</span>
            </Link>
          </div>
        </section>
      </article>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Best Fountain Pens for Beginners in 2026",
            description: "Complete beginner's guide to choosing your first fountain pen. Top 10 pens, nib sizes, filling systems, and price comparisons.",
            author: { "@type": "Organization", name: "PenPrice" },
            publisher: { "@type": "Organization", name: "PenPrice" },
            datePublished: "2026-06-26",
            dateModified: "2026-06-26",
            mainEntityOfPage: "https://penprice.vercel.app/blog/best-fountain-pens-for-beginners",
          }),
        }}
      />
    </div>
  );
}
