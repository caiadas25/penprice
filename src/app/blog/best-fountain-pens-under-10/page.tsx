import type { Metadata } from "next";
import Link from "next/link";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title: "Best Fountain Pens Under $10 in 2026 — Budget Picks That Actually Write Well | PenPrice",
  description:
    "Find the best fountain pen under $10 in 2026. Compare the Platinum Preppy, Pilot Varsity, Jinhao 599, and more. Budget fountain pens with actual price comparisons across Amazon, eBay, and specialty retailers.",
  openGraph: {
    title: "Best Fountain Pens Under $10 in 2026",
    description:
      "Budget fountain pens under $10 compared. Platinum Preppy, Pilot Varsity, Jinhao 599, and more.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fountain Pens Under $10 in 2026",
    description:
      "Budget fountain pens under $10 that actually write well. Full comparison with prices.",
  },
};

interface PenRec {
  name: string;
  slug: string;
  brandSlug: string;
  priceFrom: number;
  why: string;
  bestFor: string;
}

const recommendations: PenRec[] = [
  {
    name: "Platinum Preppy",
    slug: "preppy",
    brandSlug: "platinum",
    priceFrom: 5.75,
    why: "The Slip & Seal cap keeps the nib wet for up to 24 months. The Fine and Extra Fine nibs produce thin, fast-drying lines. At under $6, this is the best entry point into fountain pens. Converts to an eyedropper fill for massive ink capacity.",
    bestFor: "Absolute beginners testing the waters",
  },
  {
    name: "Pilot Varsity",
    slug: "varsity",
    brandSlug: "pilot",
    priceFrom: 3.75,
    why: "Pre-filled disposable fountain pen with Pilot's smooth steel Fine nib. No converter needed, no refilling — just write until it's empty and toss it. The liquid ink system writes like a much more expensive pen. Perfect for gifting to curious friends.",
    bestFor: "No-commitment tryout of fountain pen writing",
  },
  {
    name: "Jinhao 599",
    slug: "599",
    brandSlug: "jinhao",
    priceFrom: 3.00,
    why: "A Chinese-made Safari clone that costs under $4. The triangular grip, steel nib, and converter are all included. Quality control is hit-or-miss, but when you get a good one, it punches far above its price. Comes with a squeeze converter.",
    bestFor: "Budget buyers who want the Safari experience",
  },
  {
    name: "Jinhao 992",
    slug: "992",
    brandSlug: "jinhao",
    priceFrom: 3.50,
    why: "A demonstrator (clear) pen that shows off your ink color. Comes with a standard international converter. The Medium nib is smooth for the price. The clear body makes it an excellent ink testing pen.",
    bestFor: "Trying different ink colors cheaply",
  },
  {
    name: "Wing Sung 6359",
    slug: "6359",
    brandSlug: "wing-sung",
    priceFrom: 5.00,
    why: "A Lamy 2000-inspired design with a piston filler at a fraction of the cost. The hooded nib writes smoothly and the piston mechanism is surprisingly good. One of the best values in sub-$10 fountain pens.",
    bestFor: "Piston-filler fans on a tight budget",
  },
  {
    name: "Pilot Kakuno",
    slug: "kakuno",
    brandSlug: "pilot",
    priceFrom: 9.99,
    why: "Technically at the top of the budget, but often found on sale under $10. Pilot's Fine nib, hexagonal body, and smiley-face nib marking make it a joy to use. The lightweight design is perfect for extended writing sessions.",
    bestFor: "The best pen you can get near $10",
  },
  {
    name: "Hero 616",
    slug: "616",
    brandSlug: "hero",
    priceFrom: 2.00,
    why: "The classic Chinese aerometric filler. A Parker 51-inspired design that's been in production for decades. The hooded nib prevents drying and the aerometric filler is reliable. At $2, it's nearly free.",
    bestFor: "The cheapest functional fountain pen in existence",
  },
  {
    name: "Dollar 717i",
    slug: "717i",
    brandSlug: "dollar",
    priceFrom: 2.50,
    why: "Pakistan-made piston-filling fountain pen. The piston mechanism is surprisingly smooth for the price. The Fine nib writes well on most papers. One of the few sub-$3 pens with a piston filler.",
    bestFor: "Budget piston-filler seekers",
  },
];

export default function BestFountainPensUnder10Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Fountain Pens Under $10 in 2026",
    description:
      "Budget fountain pens under $10 compared. Platinum Preppy, Pilot Varsity, Jinhao 599, and more.",
    datePublished: "2026-06-29",
    author: {
      "@type": "Organization",
      name: "PenPrice",
      url: "https://penprice.vercel.app",
    },
    publisher: {
      "@type": "Organization",
      name: "PenPrice",
      url: "https://penprice.vercel.app",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best fountain pen under $10?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Platinum Preppy is the best fountain pen under $10. It has a Slip & Seal cap that prevents drying, a smooth Fine nib, and costs under $6. The Pilot Varsity at under $4 is the best disposable option.",
        },
      },
      {
        "@type": "Question",
        name: "Are cheap fountain pens worth it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Pens like the Platinum Preppy and Pilot Kakuno offer writing experiences that rival pens costing 5-10x more. The main trade-offs are build materials (plastic vs metal), nib options, and ink filling systems.",
        },
      },
      {
        "@type": "Question",
        name: "Can I refill a Pilot Varsity?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Pilot Varsity is designed as a disposable pen, but it can be refilled by removing the end cap with pliers and using a syringe to inject ink. However, this voids any warranty and the pen may leak.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-stone-400 mb-8">
          <Link href="/" className="hover:text-blue-800 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-800 transition-colors">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-stone-500">
            Best Fountain Pens Under $10
          </span>
        </nav>

        <article>
          <header className="mb-10">
            <span className="text-xs px-2.5 py-0.5 rounded bg-blue-50 text-blue-800 mb-3 inline-block">
              Buying Guide
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Best Fountain Pens Under $10 in 2026
            </h1>
            <p className="text-lg text-stone-500">
              You do not need to spend a lot to experience the joy of fountain
              pen writing. The sub-$10 market has some genuinely excellent pens
              that write better than many $30+ options. We compared the best
              budget fountain pens by writing quality, ink system, and value.
            </p>
          </header>

          {/* Quick Picks */}
          <div className="bg-amber-950/30 border border-amber-900/50 rounded p-6 mb-10">
            <h2 className="text-lg font-bold text-blue-800 mb-2">
              Quick Picks
            </h2>
            <ul className="space-y-2 text-stone-700">
              <li>
                <strong className="text-stone-900">Best Overall:</strong> Platinum Preppy ($5.75) — Slip &amp; Seal cap, smooth Fine nib, eyedropper convertable
              </li>
              <li>
                <strong className="text-stone-900">Best Disposable:</strong> Pilot Varsity ($3.75) — pre-filled, writes like a $20 pen
              </li>
              <li>
                <strong className="text-stone-900">Best Chinese Pen:</strong> Jinhao 599 ($3) — Safari clone with converter included
              </li>
              <li>
                <strong className="text-stone-900">Best Near $10:</strong> Pilot Kakuno ($10) — Pilot quality, hexagonal grip, smiley nib
              </li>
            </ul>
          </div>

          {/* Recommendations */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">
              Top Budget Fountain Pens
            </h2>
            <div className="space-y-6">
              {recommendations.map((pen, index) => {
                const brand = brands.find((b) => b.slug === pen.brandSlug);
                return (
                  <div
                    key={pen.slug}
                    className="border border-stone-200 rounded-lg p-6"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-xs text-stone-400 mr-2">
                          #{index + 1}
                        </span>
                        <Link
                          href={`/brands/${pen.brandSlug}/${pen.slug}`}
                          className="text-xl font-bold text-blue-800 hover:text-blue-600 transition-colors"
                        >
                          {pen.name}
                        </Link>
                        {brand && (
                          <span className="text-sm text-stone-400 ml-2">
                            by {brand.name}
                          </span>
                        )}
                      </div>
                      <span className="text-lg font-bold text-stone-900">
                        From ${pen.priceFrom.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-stone-600 mb-3">{pen.why}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs">
                        {pen.bestFor}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-stone-900 mb-2">
                  What is the best fountain pen under $10?
                </h3>
                <p className="text-stone-600">
                  The Platinum Preppy is the best fountain pen under $10. It has a Slip &amp; Seal cap that prevents drying, a smooth Fine nib, and costs under $6.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-2">
                  Are cheap fountain pens worth it?
                </h3>
                <p className="text-stone-600">
                  Yes. Pens like the Platinum Preppy and Pilot Kakuno offer writing experiences that rival pens costing 5-10x more.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-2">
                  Can I refill a Pilot Varsity?
                </h3>
                <p className="text-stone-600">
                  The Pilot Varsity is designed as a disposable pen, but it can be refilled by removing the end cap with pliers and using a syringe to inject ink.
                </p>
              </div>
            </div>
          </section>

          {/* Related */}
          <section className="border-t border-stone-200 pt-8">
            <h2 className="text-lg font-bold text-stone-900 mb-4">
              Related Guides
            </h2>
            <ul className="space-y-2 text-blue-800">
              <li>
                <Link href="/blog/best-fountain-pens-for-beginners" className="hover:text-blue-600 transition-colors">
                  Best Fountain Pens for Beginners
                </Link>
              </li>
              <li>
                <Link href="/blog/best-fountain-pens-under-20" className="hover:text-blue-600 transition-colors">
                  Best Fountain Pens Under $20
                </Link>
              </li>
              <li>
                <Link href="/blog/best-fountain-pens-under-50" className="hover:text-blue-600 transition-colors">
                  Best Fountain Pens Under $50
                </Link>
              </li>
              <li>
                <Link href="/blog/fountain-pen-nib-sizes-explained" className="hover:text-blue-600 transition-colors">
                  Fountain Pen Nib Sizes Explained
                </Link>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </>
  );
}
