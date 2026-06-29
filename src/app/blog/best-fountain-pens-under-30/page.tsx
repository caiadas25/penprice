import type { Metadata } from "next";
import Link from "next/link";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title: "Best Fountain Pens Under $30 in 2026 — Budget Price Comparison | PenPrice",
  description:
    "Find the best fountain pens under $30. Compare prices on the Moonman M2, Lamy Safari, Jinhao 82, TWSBI Eco, Kaweco Sport, and more across Amazon, eBay, JetPens, and Goulet Pens.",
  openGraph: {
    title: "Best Fountain Pens Under $30 — 2026 Budget Comparison",
    description:
      "Compare prices on the best sub-$30 fountain pens from Moonman, Lamy, Jinhao, TWSBI, Kaweco, and more across top retailers.",
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
    name: "Platinum Preppy",
    slug: "preppy",
    brandSlug: "platinum",
    priceFrom: 5.75,
    why: "The best value in fountain pens, period. At ~$6, it writes smoother than pens 5x its price. The slip-and-seal cap keeps ink fresh for months. A must-try for anyone curious about fountain pens.",
  },
  {
    name: "Jinhao 82",
    slug: "82",
    brandSlug: "jinhao",
    priceFrom: 3.99,
    why: "The cheapest decent fountain pen in existence. A pocket-sized pen inspired by the Kaweco Sport, available in dozens of colors for pocket change. Surprisingly good build quality.",
  },
  {
    name: "Moonman M2",
    slug: "m2",
    brandSlug: "majohn",
    priceFrom: 14.00,
    why: "A transparent demonstrator piston filler with a smooth steel nib. Huge ink capacity and a satisfying filling mechanism. Often compared to the TWSBI Eco at a fraction of the price.",
  },
  {
    name: "Hongdian Black Forest",
    slug: "black-forest",
    brandSlug: "hongdian",
    priceFrom: 13.99,
    why: "An all-black matte brass pen with a magnetic cap. Heavy, stealthy, and writes smoothly. A cult favorite in the budget pen community. Looks and feels like a pen twice the price.",
  },
  {
    name: "Jinhao X450",
    slug: "x450",
    brandSlug: "jinhao",
    priceFrom: 6.99,
    why: "A heavy brass pen with a smooth #6 nib. Feels like a $30 pen. Dozens of finishes available on Amazon. The weight gives it a premium feel that's rare at this price.",
  },
  {
    name: "Moonman C1",
    slug: "c1",
    brandSlug: "majohn",
    priceFrom: 11.00,
    why: "A solid brass pocket pen with a smooth #5 nib. Compact and heavy for its size, with a screw cap. Great everyday carry pen for under $15.",
  },
  {
    name: "Pilot Metropolitan",
    slug: "metropolitan",
    brandSlug: "pilot",
    priceFrom: 18.95,
    why: "The single best beginner fountain pen. Exceptional smooth nib, professional metal body, and a converter included. Often drops below $20 during sales. The Japanese fine nib is finer than Western fine.",
  },
  {
    name: "Moonman A1",
    slug: "a1",
    brandSlug: "majohn",
    priceFrom: 22.00,
    why: "A retractable nib fountain pen inspired by the Pilot Vanishing Point. Click mechanism deploys the nib. Surprisingly smooth for the price. Available in many finishes.",
  },
  {
    name: "Lamy Safari",
    slug: "safari",
    brandSlug: "lamy",
    priceFrom: 25.00,
    why: "The most iconic beginner fountain pen. Triangular grip forces proper holding position. Interchangeable nibs. Available in many colors. A design classic since 1980. Frequently found on sale under $30.",
  },
  {
    name: "Kaweco Sport",
    slug: "sport",
    brandSlug: "kaweco",
    priceFrom: 28.00,
    why: "Ultra-portable pocket pen that posts to full size. Snap cap, classic octagonal design, and available in dozens of colors. Perfect everyday carry fountain pen.",
  },
];

export default function BestFountainPensUnder30Page() {
  const allBrands = brands;
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-800 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-500">Best Fountain Pens Under $30</span>
      </nav>

      <header className="mb-10">
        <span className="text-xs px-2.5 py-0.5 rounded bg-blue-50 text-blue-800 mb-3 inline-block">Budget Guide</span>
        <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
          Best Fountain Pens Under $30 in 2026
        </h1>
        <p className="text-lg text-stone-500 leading-relaxed">
          The $30 sweet spot delivers surprising quality. Compare prices on the best budget fountain pens from Moonman, Lamy, Pilot, Jinhao, Kaweco, and more across Amazon, eBay, JetPens, and Goulet Pens.
        </p>
      </header>

      <div className="space-y-6 mb-12">
        {recommendations.map((rec, i) => {
          const brand = allBrands.find(b => b.slug === rec.brandSlug);
          return (
            <div key={rec.slug} className="p-6 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs px-2 py-0.5 bg-stone-100 rounded text-stone-500 font-medium">#{i + 1}</span>
                    <Link href={`/brands/${rec.brandSlug}/${rec.slug}`} className="text-xl font-bold text-stone-900 hover:text-blue-800 transition-colors">
                      {brand?.name || rec.brandSlug} {rec.name}
                    </Link>
                  </div>
                  <p className="text-sm text-stone-500 leading-relaxed">{rec.why}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Link href={`/brands/${rec.brandSlug}`} className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition-colors">
                      {brand?.name || rec.brandSlug} →
                    </Link>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs text-stone-400">From</div>
                  <div className="text-2xl font-bold text-blue-800">${rec.priceFrom.toFixed(2)}</div>
                  <Link href={`/brands/${rec.brandSlug}/${rec.slug}`} className="text-xs text-blue-800/70 hover:text-blue-800 transition-colors">
                    Compare prices →
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-stone-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "Are cheap fountain pens actually good?", a: "Yes. The Pilot Metropolitan (~$19), Lamy Safari (~$30), and TWSBI Eco (~$32) are genuinely excellent pens that rival models costing 5-10x more. Chinese brands like Moonman, Jinhao, and Hongdian offer even better value." },
            { q: "What is the best fountain pen under $10?", a: "The Platinum Preppy (~$6) is the consensus pick. It writes smoother than pens 5x its price, and the slip-and-seal cap keeps ink fresh for months. The Jinhao 82 (~$4) is the cheapest decent option." },
            { q: "Should I buy a Chinese fountain pen?", a: "Chinese fountain pens from Moonman, Jinhao, and Hongdian offer exceptional value. Their build quality and nib performance have improved dramatically. The Moonman M2 piston filler competes with the TWSBI Eco at a fraction of the price." },
            { q: "What nib size should I choose?", a: "For most people, Fine or Medium is ideal. Japanese Fine nibs (Pilot, Platinum) are finer than Western Fine nibs (Lamy, Kaweco). If you have small handwriting, go Japanese Fine. If you write large, go Western Medium." },
          ].map((faq, i) => (
            <div key={i} className="p-5 rounded border border-stone-200 bg-white">
              <h3 className="font-semibold text-stone-900 mb-2">{faq.q}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal links */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-stone-900 mb-4">Related Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/blog/best-fountain-pens-under-20", label: "Best Fountain Pens Under $20" },
            { href: "/blog/best-fountain-pens-under-50", label: "Best Fountain Pens Under $50" },
            { href: "/blog/best-fountain-pens-for-beginners", label: "Best Fountain Pens for Beginners" },
            { href: "/blog/lamy-safari-vs-pilot-metropolitan", label: "Lamy Safari vs Pilot Metropolitan" },
            { href: "/blog/twsbi-eco-vs-pilot-metropolitan", label: "TWSBI Eco vs Pilot Metropolitan" },
            { href: "/blog/best-fountain-pens-under-100", label: "Best Fountain Pens Under $100" },
          ].map(link => (
            <Link key={link.href} href={link.href} className="p-3 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all text-sm font-medium text-stone-700 hover:text-blue-800">
              {link.label} →
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-12 pt-8 border-t border-stone-200 text-xs text-stone-400 text-center space-y-1">
        <p>PenPrice — Autonomous fountain pen price comparison tool. Prices updated from retailer listings.</p>
        <p>Built by an AI agent as a 30-day experiment. <a href="https://github.com/caiadas25/penprice" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-blue-900 transition-colors">Source on GitHub ↗</a></p>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Best Fountain Pens Under $30 in 2026",
            description: "Compare prices on the best budget fountain pens under $30 from Moonman, Lamy, Pilot, Jinhao, Kaweco, and more.",
            datePublished: "2026-06-29",
            author: { "@type": "Organization", name: "PenPrice" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Are cheap fountain pens actually good?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. The Pilot Metropolitan, Lamy Safari, and TWSBI Eco are genuinely excellent pens. Chinese brands like Moonman, Jinhao, and Hongdian offer even better value." },
              },
              {
                "@type": "Question",
                name: "What is the best fountain pen under $10?",
                acceptedAnswer: { "@type": "Answer", text: "The Platinum Preppy (~$6) is the consensus pick. It writes smoother than pens 5x its price." },
              },
              {
                "@type": "Question",
                name: "Should I buy a Chinese fountain pen?",
                acceptedAnswer: { "@type": "Answer", text: "Chinese fountain pens from Moonman, Jinhao, and Hongdian offer exceptional value. Their build quality has improved dramatically." },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
