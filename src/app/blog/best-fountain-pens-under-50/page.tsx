import type { Metadata } from "next";
import Link from "next/link";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title: "Best Fountain Pens Under $50 in 2026 — Price Comparison Guide | PenPrice",
  description:
    "Discover the best fountain pens you can buy for under $50. Compare prices on the Lamy Safari, Pilot Metropolitan, TWSBI Eco, Kaweco Sport, and more across Amazon, JetPens, and Goulet Pens.",
  openGraph: {
    title: "Best Fountain Pens Under $50 — 2026 Price Comparison",
    description:
      "Compare prices on the top-rated affordable fountain pens. Lamy Safari vs Pilot Metropolitan vs TWSBI Eco — who has the best deal?",
    type: "article",
  },
};

interface PenRecommendation {
  name: string;
  slug: string;
  brandSlug: string;
  priceFrom: number;
  why: string;
}

const recommendations: PenRecommendation[] = [
  {
    name: "Pilot Metropolitan",
    slug: "metropolitan",
    brandSlug: "pilot",
    priceFrom: 18.95,
    why: "The single best beginner fountain pen. Exceptional smooth nib, professional metal body, and a converter included. The Japanese fine nib is finer than Western fine, perfect for small handwriting.",
  },
  {
    name: "Lamy Safari",
    slug: "safari",
    brandSlug: "lamy",
    priceFrom: 29.99,
    why: "The most iconic beginner fountain pen. Triangular grip forces proper holding position. Interchangeable nibs. Available in many colors. A design classic since 1980.",
  },
  {
    name: "TWSBI Eco",
    slug: "eco",
    brandSlug: "twsbi",
    priceFrom: 31.99,
    why: "Piston filler with massive ink capacity. Demonstrator body lets you see the ink level. Writes smoothly and feels premium. Best value piston filler on the market.",
  },
  {
    name: "Kaweco Sport",
    slug: "sport",
    brandSlug: "kaweco",
    priceFrom: 28.00,
    why: "Ultra-portable pocket pen that posts to full size. Snap cap, classic octagonal design, and available in dozens of colors. Perfect EDC fountain pen.",
  },
  {
    name: "Lamy AL-Star",
    slug: "al-star",
    brandSlug: "lamy",
    priceFrom: 38.99,
    why: "The Safari's premium aluminum sibling. Same great nib and grip, but with a metal body that feels substantially more upscale. Worth the extra $10.",
  },
  {
    name: "Noodler's Ahab",
    slug: "ahab",
    brandSlug: "noodlers",
    priceFrom: 14.99,
    why: "The cheapest flex nib fountain pen that actually works. Piston filler with huge ink capacity. The flex nib produces line variation for calligraphy practice. Quirky but rewarding.",
  },
  {
    name: "Platinum Preppy",
    slug: "preppy",
    brandSlug: "platinum",
    priceFrom: 5.75,
    why: "The cheapest good fountain pen in existence. At ~$6, it writes smoother than pens 5x its price. The slip-and-seal cap prevents ink from drying out for months. A must-try.",
  },
  {
    name: "Faber-Castell Loom",
    slug: "loom",
    brandSlug: "faber-castell",
    priceFrom: 44.99,
    why: "Many reviewers call this the best steel nib on the market. Smooth, wet, and consistent. A metal body with a comfortable grip. An under-the-radar gem.",
  },
];

function PenCard({ pen }: { pen: PenRecommendation }) {
  const brand = brands.find((b) => b.slug === pen.brandSlug);
  return (
    <div className="border border-stone-200 rounded p-6 bg-white hover:border-blue-300 transition-all">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-xs text-stone-400 uppercase tracking-wide">{brand?.name}</p>
          <h3 className="text-lg font-bold text-stone-900">
            <Link href={`/brands/${pen.brandSlug}/${pen.slug}`} className="hover:text-blue-800 transition-colors">
              {pen.name}
            </Link>
          </h3>
        </div>
        <span className="text-blue-800 font-mono text-lg font-bold">from ${pen.priceFrom}</span>
      </div>
      <p className="text-stone-500 text-sm leading-relaxed">{pen.why}</p>
      <div className="mt-4 flex gap-2">
        <Link
          href={`/brands/${pen.brandSlug}/${pen.slug}`}
          className="text-xs px-3 py-1.5 rounded bg-blue-50 text-blue-800 hover:bg-amber-900/50 transition-colors"
        >
          Compare Prices →
        </Link>
        {brand && (
          <Link
            href={`/brands/${pen.brandSlug}`}
            className="text-xs px-3 py-1.5 rounded bg-stone-100 text-stone-500 hover:bg-stone-200 transition-colors"
          >
            {brand.name} All Models
          </Link>
        )}
      </div>
    </div>
  );
}

export default function BestUnder50Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-800 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-500">Best Fountain Pens Under $50</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-blue-800 text-sm font-medium mb-2">Price Comparison Guide — Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Best Fountain Pens Under $50 in 2026
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            You don&apos;t need to spend hundreds of dollars to get a great fountain pen. Here are 8 pens
            under $50 that write beautifully, with live price comparisons from Amazon, JetPens,
            Goulet Pens, and more.
          </p>
        </header>

        {/* TL;DR */}
        <div className="bg-white border border-stone-200 rounded p-6 mb-10">
          <h2 className="text-lg font-bold text-stone-900 mb-3">TL;DR — Quick Picks</h2>
          <ul className="space-y-2 text-sm text-stone-700">
            <li><span className="text-blue-800 font-semibold">Best overall under $30:</span> Pilot Metropolitan — smooth, metal body, converter included</li>
            <li><span className="text-blue-800 font-semibold">Best piston filler under $35:</span> TWSBI Eco — massive ink capacity, demonstrator body</li>
            <li><span className="text-blue-800 font-semibold">Best pocket pen:</span> Kaweco Sport — compact, posts to full size, classic design</li>
            <li><span className="text-blue-800 font-semibold">Cheapest good pen:</span> Platinum Preppy — under $6, writes smoother than pens 5x its price</li>
            <li><span className="text-blue-800 font-semibold">Best flex nib under $25:</span> Noodler&apos;s Ahab — line variation for calligraphy on a budget</li>
          </ul>
        </div>

        {/* Pens */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">The Full List</h2>
          <div className="grid gap-4">
            {recommendations.map((pen) => (
              <PenCard key={pen.slug} pen={pen} />
            ))}
          </div>
        </section>

        {/* Buyer's Guide */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Buying Guide: What to Look For</h2>
          <div className="prose prose-invert max-w-none space-y-4 text-stone-700 text-sm leading-relaxed">
            <p>
              <strong className="text-stone-900">Nib size matters more than you think.</strong> Japanese nibs
              (Pilot, Sailor, Platinum) run finer than Western nibs (Lamy, Pelikan, Kaweco). A Pilot
              Fine is roughly equivalent to a Lamy Extra Fine. If you have small handwriting or write on
              cheap paper, go Japanese Fine.
            </p>
            <p>
              <strong className="text-stone-900">Filling system determines your workflow.</strong> Cartridge pens
              are easiest for beginners (snap in a cartridge and go). Piston fillers hold more ink but
              require bottled ink. Converters give you the flexibility of bottled ink with a cartridge pen.
            </p>
            <p>
              <strong className="text-stone-900">Paper matters as much as the pen.</strong> Even a $500 pen will
              feather and bleed on cheap copy paper. Use fountain-pen-friendly paper like Rhodia,
              Clairefontaine, or Midori MD for the best experience.
            </p>
            <p>
              <strong className="text-stone-900">Always check prices across retailers.</strong> The same pen can
              have a $10+ price difference between Amazon, JetPens, and Goulet Pens. Our price comparison
              pages show you live prices so you never overpay.
            </p>
          </div>
        </section>

        {/* Internal links */}
        <section className="border-t border-stone-200 pt-8">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Explore More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/brands/pilot" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">All Pilot Pens →</span>
              <span className="block text-stone-400 mt-1">Metropolitan, Custom 823, Vanishing Point, and more</span>
            </Link>
            <Link href="/brands/lamy" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">All Lamy Pens →</span>
              <span className="block text-stone-400 mt-1">Safari, AL-Star, 2000, Studio, and more</span>
            </Link>
            <Link href="/brands/twsbi" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">All TWSBI Pens →</span>
              <span className="block text-stone-400 mt-1">Eco, Diamond 580, Classic, and more</span>
            </Link>
            <Link href="/brands/noodlers" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">All Noodler&apos;s Pens →</span>
              <span className="block text-stone-400 mt-1">Ahab, Konrad, Creaper, and more</span>
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
            headline: "Best Fountain Pens Under $50 in 2026",
            description: "Compare prices on the best-rated affordable fountain pens including Lamy Safari, Pilot Metropolitan, TWSBI Eco, and more.",
            author: { "@type": "Organization", name: "PenPrice" },
            publisher: { "@type": "Organization", name: "PenPrice" },
            datePublished: "2026-06-26",
            dateModified: "2026-06-26",
            mainEntityOfPage: "https://penprice.vercel.app/blog/best-fountain-pens-under-50",
          }),
        }}
      />
    </div>
  );
}
