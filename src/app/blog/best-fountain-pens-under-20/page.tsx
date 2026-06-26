import type { Metadata } from "next";
import Link from "next/link";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title: "Best Fountain Pens Under $20 in 2026 — Budget Price Comparison | PenPrice",
  description:
    "Find the best fountain pens you can buy for under $20. Compare prices on the Jinhao X450, Pilot Preppy, Platinum Preppy, Hongdian Forest, Lamy Safari (on sale), and more across Amazon, eBay, and JetPens.",
  openGraph: {
    title: "Best Fountain Pens Under $20 — 2026 Budget Price Comparison",
    description:
      "You don't need to spend a lot to get a great fountain pen. Compare prices on the best sub-$20 fountain pens from Jinhao, Pilot, Platinum, Hongdian, and more.",
    type: "article",
  },
};

interface PenRec {
  name: string;
  slug: string;
  brandSlug: string;
  priceFrom: number;
  why: string;
}

const recommendations: PenRec[] = [
  {
    name: "Jinhao 82",
    slug: "82",
    brandSlug: "jinhao",
    priceFrom: 3.99,
    why: "The cheapest decent fountain pen in existence. A pocket-sized pen inspired by the Kaweco Sport, available in dozens of colors for pocket change.",
  },
  {
    name: "Platinum Preppy",
    slug: "preppy",
    brandSlug: "platinum",
    priceFrom: 3.50,
    why: "The gold standard of ultra-budget pens. Platinum's slip-and-seal cap keeps ink fresh for months. Surprisingly smooth nib for the price.",
  },
  {
    name: "Jinhao X450",
    slug: "x450",
    brandSlug: "jinhao",
    priceFrom: 6.99,
    why: "A heavy brass pen with a smooth #6 nib. Feels like a $30 pen. Dozens of finishes available on Amazon.",
  },
  {
    name: "Jinhao X750",
    slug: "x750",
    brandSlug: "jinhao",
    priceFrom: 7.49,
    why: "Slimmer and lighter than the X450 with the same great #6 nib. A favorite for people who find the X450 too heavy.",
  },
  {
    name: "Lamy Safari (Clearanced)",
    slug: "safari",
    brandSlug: "lamy",
    priceFrom: 15.00,
    why: "Usually $30, but special editions and older colors regularly drop below $20 on Amazon. Watch for sales. The triangular grip is polarizing but great for beginners.",
  },
  {
    name: "Hongdian Black Forest",
    slug: "black-forest",
    brandSlug: "hongdian",
    priceFrom: 13.99,
    why: "An all-black matte brass pen with a magnetic cap. Heavy, stealthy, and writes smoothly. A cult favorite in the budget pen community.",
  },
  {
    name: "Pilot Metropolitan",
    slug: "metropolitan",
    brandSlug: "pilot",
    priceFrom: 18.95,
    why: "Usually ~$22 but frequently drops below $20 during sales. The best beginner fountain pen, period. Smooth Japanese nib, metal body, converter included.",
  },
];

export default function BestFountainPensUnder20Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-500 mb-8">
        <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-amber-400 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-400">Best Fountain Pens Under $20</span>
      </nav>

      <header className="mb-10">
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-900/30 text-amber-400 mb-3 inline-block">
          Budget Buying Guide
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Best Fountain Pens Under $20 in 2026
        </h1>
        <p className="text-lg text-slate-400">
          You don&apos;t need to spend a fortune to write with a fountain pen. We found 7 excellent pens under $20
          with live price comparisons across Amazon, eBay, and JetPens.
        </p>
      </header>

      <article className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why Fountain Pens Under $20?</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          The fountain pen market has exploded with affordable options in recent years. Chinese manufacturers
          like Jinhao and Hongdian now produce pens that write as well as $30-50 Western pens for a
          fraction of the price. Meanwhile, Japanese brands like Pilot and Platinum continue to offer
          their entry-level pens at unbeatable value.
        </p>
        <p className="text-slate-300 leading-relaxed mb-4">
          A $5 fountain pen will write more smoothly than a $5 ballpoint. Once you try a fountain pen,
          going back to disposable pens feels wrong.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Best Picks</h2>

        <div className="space-y-6 not-prose">
          {recommendations.map((pen) => {
            const brand = brands.find((b) => b.slug === pen.brandSlug);
            const model = brand?.models.find((m) => m.slug === pen.slug);
            const price = model?.knownPrices[0];
            return (
              <div key={pen.slug} className="p-5 rounded-xl border border-slate-700 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <Link
                    href={`/brands/${pen.brandSlug}/${pen.slug}`}
                    className="text-xl font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    {pen.name}
                  </Link>
                  <span className="text-2xl font-bold text-amber-400">
                    ${pen.priceFrom.toFixed(2)}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-3">{pen.why}</p>
                <div className="flex items-center gap-3">
                  {price && (
                    <a
                      href={price.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-3 py-1.5 rounded-full bg-amber-900/30 text-amber-400 hover:bg-amber-900/50 transition-colors"
                    >
                      Compare prices on {price.retailer} →
                    </a>
                  )}
                  <Link
                    href={`/brands/${pen.brandSlug}/${pen.slug}`}
                    className="text-xs px-3 py-1.5 rounded-full bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors"
                  >
                    See all retailers →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">What to Expect at This Price</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Sub-$20 fountain pens typically come with steel nibs (no gold), plastic or brass bodies,
          and cartridge/converter filling systems. You won&apos;t get the build quality of a Lamy 2000 or
          Pilot Custom 823, but the writing experience can be surprisingly good.
        </p>
        <p className="text-slate-300 leading-relaxed mb-4">
          The biggest differences between budget and premium pens are: nib smoothness consistency,
          build materials, and filling system capacity. Budget pens are also more likely to need
          nib tuning out of the box (baby&apos;s bottom, tine alignment issues).
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Tips for Buying Budget Fountain Pens</h2>
        <ul className="text-slate-300 space-y-2 list-disc list-inside">
          <li>Buy from Amazon with free returns in case the nib needs tuning</li>
          <li>Start with a Fine nib (0.5mm) — it&apos;s the most forgiving on cheap paper</li>
          <li>Pair with a $5 bottle of ink (like Pilot Iroshizuku or Waterman Serenity Blue) for the best experience</li>
          <li>Consider a converter ($3-5) so you can use bottled ink instead of cartridges</li>
          <li>Check our <Link href="/blog/fountain-pen-maintenance-guide" className="text-amber-400 hover:underline">maintenance guide</Link> to keep your pen writing smoothly</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Frequently Asked Questions</h2>

        <div className="space-y-4 not-prose">
          {[
            { q: "Are cheap fountain pens really worth it?", a: "Yes. A $5 Jinhao X450 writes more smoothly than most $10 ballpoints. The nibs on modern Chinese fountain pens have gotten remarkably good." },
            { q: "Do I need to buy special ink?", a: "Any fountain pen ink works. Avoid India ink and calligraphy ink — they clog fountain pens. We recommend Pilot Iroshizuku or Waterman Serenity Blue as starter inks." },
            { q: "What's the best first fountain pen under $20?", a: "The Pilot Metropolitan (~$19) is the most recommended beginner pen. If you want to spend less, the Jinhao X450 (~$7) is excellent." },
            { q: "Can I use these pens at work?", a: "Absolutely. The Pilot Metropolitan and Lamy Safari look professional and write smoothly enough for all-day note-taking." },
          ].map((faq, i) => (
            <div key={i} className="p-4 rounded-lg border border-slate-700 bg-slate-800/30">
              <h3 className="font-semibold text-white mb-1">{faq.q}</h3>
              <p className="text-sm text-slate-400">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-xl border border-amber-800/50 bg-amber-900/20">
          <h3 className="text-lg font-bold text-white mb-2">Related Guides</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/blog/best-fountain-pens-for-beginners" className="text-amber-400 hover:underline">Best Fountain Pens for Beginners</Link></li>
            <li><Link href="/blog/best-fountain-pens-under-50" className="text-amber-400 hover:underline">Best Fountain Pens Under $50</Link></li>
            <li><Link href="/blog/lamy-safari-vs-pilot-metropolitan" className="text-amber-400 hover:underline">Lamy Safari vs Pilot Metropolitan</Link></li>
            <li><Link href="/blog/fountain-pen-filling-systems-explained" className="text-amber-400 hover:underline">Fountain Pen Filling Systems Explained</Link></li>
          </ul>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Best Fountain Pens Under $20 in 2026",
            description:
              "Find the best fountain pens you can buy for under $20. Compare prices on Jinhao, Pilot, Platinum, Hongdian, and more.",
            datePublished: "2026-06-26",
            dateModified: "2026-06-26",
            author: { "@type": "Organization", name: "PenPrice" },
            publisher: { "@type": "Organization", name: "PenPrice" },
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
                name: "Are cheap fountain pens really worth it?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. A $5 Jinhao X450 writes more smoothly than most $10 ballpoints. The nibs on modern Chinese fountain pens have gotten remarkably good.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need to buy special ink for a fountain pen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Any fountain pen ink works. Avoid India ink and calligraphy ink — they clog fountain pens. We recommend Pilot Iroshizuku or Waterman Serenity Blue as starter inks.",
                },
              },
              {
                "@type": "Question",
                name: "What's the best first fountain pen under $20?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Pilot Metropolitan (~$19) is the most recommended beginner pen. If you want to spend less, the Jinhao X450 (~$7) is excellent.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
