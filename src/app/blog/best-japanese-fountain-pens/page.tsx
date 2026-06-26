import type { Metadata } from "next";
import Link from "next/link";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title: "Best Japanese Fountain Pens in 2026 — Price Comparison Guide | PenPrice",
  description:
    "Compare prices on the best Japanese fountain pens from Pilot, Sailor, Platinum, Taccia, and Nakaya. Find the best deal on Pilot Custom 823, Sailor Pro Gear, Platinum 3776, and more.",
  openGraph: {
    title: "Best Japanese Fountain Pens in 2026 — Complete Price Guide",
    description:
      "Japanese fountain pens are renowned for their nib quality and precision. Compare prices across Amazon, JetPens, and Goulet Pens.",
    type: "article",
  },
};

interface JapanesePen {
  name: string;
  slug: string;
  brandSlug: string;
  priceFrom: number;
  why: string;
}

const japanesePens: JapanesePen[] = [
  {
    name: "Pilot Metropolitan",
    slug: "metropolitan",
    brandSlug: "pilot",
    priceFrom: 18.95,
    why: "The best entry-level fountain pen, period. Pilot's Japanese fine nib writes finer than Western fine, perfect for small handwriting. Metal body, converter included, smooth writer.",
  },
  {
    name: "Platinum 3776 Century",
    slug: "3776-century",
    brandSlug: "platinum",
    priceFrom: 76.00,
    why: "Platinum's gold-nib workhorse with their patented slip-and-seal cap that prevents ink from drying out for over a year. The 14k gold nib is smooth and consistent. Outstanding value for a gold nib.",
  },
  {
    name: "Pilot Custom 74",
    slug: "custom-74",
    brandSlug: "pilot",
    priceFrom: 160.00,
    why: "Pilot's gateway to gold nibs. The 14k nib is available in Soft Fine, Soft Medium, and more. Demonstrator body shows off your ink. A favorite among Japanese pen enthusiasts for decades.",
  },
  {
    name: "Sailor Pro Gear",
    slug: "pro-gear",
    brandSlug: "sailor",
    priceFrom: 176.00,
    why: "Sailor's signature flat-top design with a 21k gold nib. Known for their pencil-like feedback that many writers prefer over the glass-smooth Pilot experience. Distinctive bicolor nib.",
  },
  {
    name: "Pilot Vanishing Point",
    slug: "vanishing-point",
    brandSlug: "pilot",
    priceFrom: 148.00,
    why: "The only retractable fountain pen in production. Click mechanism retracts the nib into the barrel like a ballpoint. 18k gold nib writes beautifully. Perfect for quick notes on the go.",
  },
  {
    name: "Pilot Custom 823",
    slug: "custom-823",
    brandSlug: "pilot",
    priceFrom: 273.00,
    why: "Pilot's flagship. Vacuum filling system holds massive ink reserves. The 14k gold nib is Pilot's best — wet, smooth, and with a hint of spring. Available in Amber, Clear, and Smoke.",
  },
  {
    name: "Sailor 1911 Large",
    slug: "1911",
    brandSlug: "sailor",
    priceFrom: 216.00,
    why: "Sailor's cigar-shaped classic with the same excellent 21k gold nib as the Pro Gear. Longer barrel for those who prefer a larger pen. The nib feedback is uniquely satisfying.",
  },
  {
    name: "Sailor King of Pens",
    slug: "king-of-pens",
    brandSlug: "sailor",
    priceFrom: 560.00,
    why: "Sailor's flagship. Oversized body, massive 21k gold nib, and impeccable build quality. The King of Pens is Sailor's statement piece — a pen that writes as beautifully as it looks.",
  },
  {
    name: "Taccia Aurora",
    slug: "aurora",
    brandSlug: "taccia",
    priceFrom: 295.00,
    why: "Taccia's mid-range offering with a hand-turned resin body and a Sailor-sourced 14k gold nib. The Aurora blends Japanese nib craftsmanship with American design sensibility.",
  },
  {
    name: "Nakaya Portable Cigar",
    slug: "portable-cigar",
    brandSlug: "nakaya",
    priceFrom: 396.00,
    why: "Handcrafted urushi lacquer fountain pens made by former Pilot artisans. Each Nakaya is a unique work of art. The 14k gold nibs are hand-tuned to perfection.",
  },
];

export default function BestJapaneseFountainPensPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-500 mb-8">
        <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-amber-400 transition-colors">Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-400">Best Japanese Fountain Pens</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-amber-400 text-sm font-medium mb-2">Buying Guide — Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Best Japanese Fountain Pens in 2026
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Japanese fountain pens are widely regarded as having the best nibs in the world.
            From the $19 Pilot Metropolitan to the $560 Sailor King of Pens, here are the
            10 best Japanese fountain pens with live price comparisons.
          </p>
        </header>

        {/* Why Japanese section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Why Japanese Fountain Pens?</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            Japanese pen manufacturers (Pilot, Sailor, Platinum) have been making fountain pens
            for over a century. Their nibs are manufactured with tighter tolerances than Western
            brands, resulting in smoother writing experiences at every price point.
          </p>
          <div className="bg-slate-800/50 rounded-lg p-6 mb-4">
            <h3 className="text-lg font-semibold text-amber-400 mb-3">Key advantages:</h3>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-1">•</span>
                <span><strong className="text-slate-200">Nib sizing:</strong> Japanese fine nibs write finer than Western fine. A Pilot Fine ≈ Western Extra Fine.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-1">•</span>
                <span><strong className="text-slate-200">Gold nibs at lower prices:</strong> Pilot offers 14k gold nibs starting at ~$160 (Custom 74), compared to $200+ for Western equivalents.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-1">•</span>
                <span><strong className="text-slate-200">Innovation:</strong> Retractable nibs (Vanishing Point), vacuum fillers (Custom 823), slip-and-seal caps (Platinum 3776).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-1">•</span>
                <span><strong className="text-slate-200">Urushi and maki-e:</strong> Japanese artisans produce hand-lacquered pens (Nakaya, Pilot Namiki) that are true works of art.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="mb-12 overflow-x-auto">
          <h2 className="text-2xl font-bold text-white mb-4">Quick Comparison</h2>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-700">
                <th className="text-left py-3 px-4 font-semibold text-slate-300">Pen</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-300">Nib</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-300">Filling</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-300">From</th>
              </tr>
            </thead>
            <tbody>
              {japanesePens.map((pen) => (
                <tr key={pen.slug} className="border-b border-slate-700/50 hover:bg-slate-800/30">
                  <td className="py-3 px-4">
                    <Link href={`/brands/${pen.brandSlug}/${pen.slug}`} className="text-amber-400 hover:text-amber-300 font-medium">
                      {pen.name}
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-slate-400">Steel / Gold</td>
                  <td className="py-3 px-4 text-slate-400">Cartridge / Piston</td>
                  <td className="py-3 px-4 text-green-400 font-medium">${pen.priceFrom.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Detailed Reviews */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Detailed Reviews</h2>
          <div className="space-y-8">
            {japanesePens.map((pen, index) => (
              <div key={pen.slug} className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-amber-400/30">{index + 1}</span>
                  <div className="flex-1">
                    <Link href={`/brands/${pen.brandSlug}/${pen.slug}`} className="text-xl font-bold text-white hover:text-amber-400 transition-colors">
                      {pen.name}
                    </Link>
                    <p className="text-amber-400 text-sm mt-1">From ${pen.priceFrom.toFixed(2)}</p>
                    <p className="text-slate-400 mt-3 leading-relaxed">{pen.why}</p>
                    <div className="mt-3 flex gap-2">
                      <Link
                        href={`/brands/${pen.brandSlug}/${pen.slug}`}
                        className="inline-block bg-amber-400/10 text-amber-400 px-3 py-1 rounded text-sm hover:bg-amber-400/20 transition-colors"
                      >
                        View Prices →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Japanese Nib Sizes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Understanding Japanese Nib Sizes</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            Japanese nibs run finer than their Western equivalents. If you&apos;re used to a Western Fine,
            start with a Japanese Fine for a similar line width. Here&apos;s the conversion:
          </p>
          <div className="bg-slate-800/50 rounded-lg p-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-700">
                  <th className="text-left py-3 px-4 font-semibold text-slate-300">Japanese Size</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-300">≈ Western Equivalent</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-300">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 text-slate-200">Extra Fine (UEF)</td>
                  <td className="py-3 px-4 text-slate-400">N/A (finer than anything Western)</td>
                  <td className="py-3 px-4 text-slate-400">Micro writing, fine details</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 text-slate-200">Fine</td>
                  <td className="py-3 px-4 text-slate-400">≈ Western Extra Fine</td>
                  <td className="py-3 px-4 text-slate-400">Daily writing, small handwriting</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 text-slate-200">Medium</td>
                  <td className="py-3 px-4 text-slate-400">≈ Western Fine to Medium</td>
                  <td className="py-3 px-4 text-slate-400">General purpose, most popular</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-200">Broad</td>
                  <td className="py-3 px-4 text-slate-400">≈ Western Medium</td>
                  <td className="py-3 px-4 text-slate-400">Bold writing, signatures</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "What is the best Japanese fountain pen for beginners?",
                a: "The Pilot Metropolitan ($18.95) is the best beginner Japanese fountain pen. It has a smooth steel nib, a professional metal body, and comes with a converter. The Japanese fine nib is perfect for those who write small.",
              },
              {
                q: "Are Japanese nibs really finer than Western nibs?",
                a: "Yes. Japanese manufacturers use tighter tolerances. A Pilot Fine nib writes roughly equivalent to a Western Extra Fine. This is because Japanese handwriting tends to be smaller and more precise.",
              },
              {
                q: "Is the Pilot Custom 823 worth the price?",
                a: "The Pilot Custom 823 ($273) is widely considered one of the best fountain pens under $300. The vacuum filling system holds a massive amount of ink, and the 14k gold nib is Pilot's best. Many reviewers call it the best value luxury fountain pen.",
              },
              {
                q: "What's the difference between Pilot and Sailor nibs?",
                a: "Pilot nibs are known for being glass-smooth, while Sailor nibs have a distinctive pencil-like feedback. Neither is better — it's a matter of personal preference. Try both if you can.",
              },
              {
                q: "Where should I buy Japanese fountain pens?",
                a: "JetPens is the best US-based retailer for Japanese fountain pens. Amazon also carries many models at competitive prices. Goulet Pens and Goldspot Pens are good for mainstream models.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Guides */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/best-fountain-pens-for-beginners" className="bg-slate-800/30 rounded-lg p-5 border border-slate-700/50 hover:border-amber-400/50 transition-colors">
              <h3 className="font-semibold text-white hover:text-amber-400 transition-colors">Best Fountain Pens for Beginners</h3>
              <p className="text-sm text-slate-500 mt-1">New to fountain pens? Start here.</p>
            </Link>
            <Link href="/blog/fountain-pen-nib-sizes-explained" className="bg-slate-800/30 rounded-lg p-5 border border-slate-700/50 hover:border-amber-400/50 transition-colors">
              <h3 className="font-semibold text-white hover:text-amber-400 transition-colors">Fountain Pen Nib Sizes Explained</h3>
              <p className="text-sm text-slate-500 mt-1">Japanese vs European sizing, steel vs gold.</p>
            </Link>
            <Link href="/blog/fountain-pen-filling-systems-explained" className="bg-slate-800/30 rounded-lg p-5 border border-slate-700/50 hover:border-amber-400/50 transition-colors">
              <h3 className="font-semibold text-white hover:text-amber-400 transition-colors">Filling Systems Explained</h3>
              <p className="text-sm text-slate-500 mt-1">Cartridge, piston, vacuum, and more.</p>
            </Link>
            <Link href="/blog/best-fountain-pen-inks" className="bg-slate-800/30 rounded-lg p-5 border border-slate-700/50 hover:border-amber-400/50 transition-colors">
              <h3 className="font-semibold text-white hover:text-amber-400 transition-colors">Best Fountain Pen Inks</h3>
              <p className="text-sm text-slate-500 mt-1">Top 10 inks across 5 brands.</p>
            </Link>
          </div>
        </section>
      </article>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Best Japanese Fountain Pens in 2026",
            description: "Compare prices on the best Japanese fountain pens from Pilot, Sailor, Platinum, Taccia, and Nakaya.",
            datePublished: "2026-06-27",
            dateModified: "2026-06-27",
            author: {
              "@type": "Organization",
              name: "PenPrice",
            },
            publisher: {
              "@type": "Organization",
              name: "PenPrice",
            },
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
                name: "What is the best Japanese fountain pen for beginners?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Pilot Metropolitan ($18.95) is the best beginner Japanese fountain pen. It has a smooth steel nib, a professional metal body, and comes with a converter.",
                },
              },
              {
                "@type": "Question",
                name: "Are Japanese nibs really finer than Western nibs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Japanese manufacturers use tighter tolerances. A Pilot Fine nib writes roughly equivalent to a Western Extra Fine.",
                },
              },
              {
                "@type": "Question",
                name: "Is the Pilot Custom 823 worth the price?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Pilot Custom 823 ($273) is widely considered one of the best fountain pens under $300. The vacuum filling system holds a massive amount of ink, and the 14k gold nib is Pilot's best.",
                },
              },
              {
                "@type": "Question",
                name: "What's the difference between Pilot and Sailor nibs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pilot nibs are known for being glass-smooth, while Sailor nibs have a distinctive pencil-like feedback. Neither is better — it's a matter of personal preference.",
                },
              },
              {
                "@type": "Question",
                name: "Where should I buy Japanese fountain pens?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "JetPens is the best US-based retailer for Japanese fountain pens. Amazon also carries many models at competitive prices. Goulet Pens and Goldspot Pens are good for mainstream models.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
