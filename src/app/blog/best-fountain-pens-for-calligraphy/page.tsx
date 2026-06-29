import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Fountain Pens for Calligraphy in 2026 — Flex Nibs & Italic Tips | PenPrice",
  description:
    "Find the best fountain pens for calligraphy. Compare flex nibs, italic nibs, and stub nibs from Pilot, Noodler's, Lamy, and more. Price comparisons included.",
  openGraph: {
    title: "Best Fountain Pens for Calligraphy 2026 — Flex & Italic Nibs",
    description:
      "Top fountain pens for calligraphy and hand lettering. Flex nibs, stub nibs, and italic nibs compared with prices from Amazon, JetPens, and Goulet Pens.",
    type: "article",
  },
};

interface CalligraphyPen {
  name: string;
  slug: string;
  brandSlug: string;
  priceFrom: number;
  category: string;
  nibType: string;
  why: string;
}

const calligraphyPens: CalligraphyPen[] = [
  {
    name: "Pilot Falcon (Elabo)",
    slug: "falcon",
    brandSlug: "pilot",
    priceFrom: 156.0,
    category: "Best Soft Nib",
    nibType: "Soft Fine / Soft Fine Medium",
    why: "The Falcon has a uniquely shaped 14k gold nib that produces beautiful line variation with moderate pressure. It's the most expressive Japanese soft nib at a reasonable price. Not a true flex nib, but close enough for expressive calligraphy.",
  },
  {
    name: "Noodler's Ahab",
    slug: "ahab",
    brandSlug: "noodlers",
    priceFrom: 23.99,
    category: "Best Budget Flex",
    nibType: "Flex",
    why: "The most affordable true flex nib fountain pen. The Ahab's steel flex nib produces dramatic line variation from hairline to broad. It requires some practice to control, but at under $25 it's the best entry point into flex calligraphy.",
  },
  {
    name: "Noodler's Triple Tail",
    slug: "triple-tail",
    brandSlug: "noodlers",
    priceFrom: 49.99,
    category: "Best Flex Capacity",
    nibType: "Flex",
    why: "A larger pen with a massive ebonite feed that keeps up with aggressive flex writing. The Triple Tail is designed for calligraphers who need consistent ink flow during rapid, wide strokes. Piston filler with huge ink capacity.",
  },
  {
    name: "Lamy Safari",
    slug: "safari",
    brandSlug: "lamy",
    priceFrom: 29.99,
    category: "Best Italic Nib",
    nibType: "1.1mm / 1.5mm / 1.9mm Stub",
    why: "Lamy offers interchangeable 1.1mm, 1.5mm, and 1.9mm italic nibs for the Safari. These stub nibs create natural thick-thin strokes without any pressure. Perfect for calligraphers who want consistent, controlled results.",
  },
  {
    name: "Noodler's Konrad",
    slug: "konrad",
    brandSlug: "noodlers",
    priceFrom: 36.0,
    category: "Best Upgrade Flex",
    nibType: "Flex",
    why: "An upgrade over the Ahab with better build quality and a more responsive flex nib. The Konrad features a piston filler and an ebonite feed that handles flex writing better. Available in demonstrator and solid colors.",
  },
  {
    name: "Noodler's Creaper",
    slug: "creaper",
    brandSlug: "noodlers",
    priceFrom: 14.99,
    category: "Cheapest Flex",
    nibType: "Flex",
    why: "At $15, this is the absolute cheapest way to try flex nib calligraphy. The nib is softer than the Ahab but requires lighter pressure. Piston filler. Great for practicing flex techniques without worrying about cost.",
  },
  {
    name: "TWSBI Diamond 580",
    slug: "diamond-580",
    brandSlug: "twsbi",
    priceFrom: 59.99,
    category: "Best Stub Option",
    nibType: "1.1mm Stub",
    why: "TWSBI's 1.1mm stub nib is one of the smoothest italic nibs available. Paired with the Diamond 580's massive piston-fill ink capacity, you can practice calligraphy for hours without refilling. The demonstrator body shows your ink level.",
  },
  {
    name: "Kaweco Sport",
    slug: "sport",
    brandSlug: "kaweco",
    priceFrom: 24.99,
    category: "Best Pocket Calligraphy",
    nibType: "1.1mm / 1.5mm / 2.3mm Stub",
    why: "The Kaweco Sport accepts small stub nibs (1.1mm, 1.5mm, and even 2.3mm) making it a portable calligraphy tool. The 2.3mm nib is one of the widest stub nibs you can buy for a fountain pen, perfect for large calligraphic letters.",
  },
];

function CalligraphyPenCard({ pen }: { pen: CalligraphyPen }) {
  return (
    <div className="p-5 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-medium text-blue-800 bg-amber-400/10 px-2 py-0.5 rounded">
              {pen.category}
            </span>
            <span className="text-xs text-stone-400">{pen.nibType}</span>
          </div>
          <Link href={`/brands/${pen.brandSlug}/${pen.slug}`} className="block">
            <h3 className="text-lg font-bold text-stone-900 hover:text-blue-800 transition-colors">
              {pen.name}
            </h3>
          </Link>
          <p className="text-sm text-stone-500 mt-2 leading-relaxed">{pen.why}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-lg font-bold text-blue-800">${pen.priceFrom.toFixed(2)}</p>
          <p className="text-xs text-stone-400">from</p>
        </div>
      </div>
    </div>
  );
}

export default function BestFountainPensForCalligraphy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-800 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-500">Best Fountain Pens for Calligraphy</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-blue-800 text-sm font-medium mb-2">Calligraphy Guide — Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Best Fountain Pens for Calligraphy in 2026
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            Fountain pens are one of the best tools for calligraphy, but not all nibs are created equal.
            This guide covers flex nibs, italic nibs, and stub nibs — the three types that produce
            the line variation calligraphers need — with price comparisons across major retailers.
          </p>
        </header>

        {/* Nib Types */}
        <div className="bg-white border border-stone-200 rounded p-6 mb-10">
          <h2 className="text-lg font-bold text-stone-900 mb-3">3 Types of Calligraphy Nibs</h2>
          <div className="grid gap-4 text-sm">
            <div>
              <h3 className="font-bold text-blue-800 mb-1">Flex Nibs</h3>
              <p className="text-stone-500">
                Soft, springy nibs that spread under pressure, creating thick downstrokes and thin
                upstrokes. True flex nibs (Noodler&apos;s Ahab, Konrad) use steel. Soft gold nibs
                (Pilot Falcon) produce subtler variation. Best for Copperplate and Spencerian scripts.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-800 mb-1">Stub/Italic Nibs</h3>
              <p className="text-stone-500">
                Flat, chisel-shaped nibs that naturally produce thick vertical strokes and thin
                horizontal strokes without any pressure change. Available in widths from 1.1mm to
                2.3mm. Best for italic calligraphy and everyday cursive with flair.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-800 mb-1">Soft Nibs</h3>
              <p className="text-stone-500">
                Gold nibs designed to be slightly springy. Not true flex nibs, but they produce
                expressive line variation with a lighter touch. A good middle ground between
                stub nibs and full flex.
              </p>
            </div>
          </div>
        </div>

        {/* Top Picks */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Top Fountain Pens for Calligraphy</h2>
          <div className="grid gap-4">
            {calligraphyPens.map((pen) => (
              <CalligraphyPenCard key={pen.slug} pen={pen} />
            ))}
          </div>
        </section>

        {/* Inks for Calligraphy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Best Inks for Calligraphy</h2>
          <div className="grid gap-3 text-sm">
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-1">Noodler&apos;s Baystate Blue</h3>
              <p className="text-stone-500">
                Vibrant blue with excellent flow for flex nibs. Water-resistant once dry. The go-to
                ink for calligraphers who want bold, saturated color with great feathering resistance.
              </p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-1">Iroshizuku Take-sumi (Bamboo Charcoal)</h3>
              <p className="text-stone-500">
                A smooth, well-lubricated black ink that flows beautifully in flex nibs. Low
                feathering and great shading on quality paper. Premium ink for serious calligraphy.
              </p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-1">Diamine Oxblood</h3>
              <p className="text-stone-500">
                A deep, dark red that looks like real blood on paper. Excellent shading properties
                that highlight line variation in flex and stub nibs. A calligraphy favorite.
              </p>
            </div>
          </div>
        </section>

        {/* Paper */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Best Paper for Calligraphy</h2>
          <p className="text-sm text-stone-500 leading-relaxed mb-4">
            Paper matters enormously for calligraphy. Cheap copy paper causes feathering, bleeding,
            and bleed-through that ruins your work. Here are the best papers:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-1">Rhodia Dot Pad</h3>
              <p className="text-stone-500">
                80gsm Clairefontaine paper. Ultra-smooth, no feathering. The dot grid is perfect for
                calligraphy practice. Available in A4, A5, and pocket sizes.
              </p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-1">Clairefontaine Triomphe</h3>
              <p className="text-stone-500">
                90gsm premium writing paper. The smoothest paper you can buy. Ink sits on the surface
                with zero feathering. Best for final pieces, not practice.
              </p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-1">Tomoe River 68gsm</h3>
              <p className="text-stone-500">
                Thin but bleed-proof. Famous for showing ink sheen and shading. The best paper for
                showing off flex nib line variation. Sold in loose sheets and notebooks.
              </p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-1">HP Premium Laser Paper (32lb)</h3>
              <p className="text-stone-500">
                The budget calligraphy paper. At under $10 for 250 sheets, it&apos;s the best
                value for practice. Smooth enough for flex nibs without the premium price tag.
              </p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="border-t border-stone-200 pt-8">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Explore More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/fountain-pen-nib-sizes-explained" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Nib Sizes Explained →</span>
              <span className="block text-stone-400 mt-1">Every nib size from EF to Broad, compared</span>
            </Link>
            <Link href="/blog/best-fountain-pens-for-beginners" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Pens for Beginners →</span>
              <span className="block text-stone-400 mt-1">Start with the right pen and nib</span>
            </Link>
            <Link href="/blog/best-fountain-pen-inks" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Fountain Pen Inks →</span>
              <span className="block text-stone-400 mt-1">Top inks for every writing style</span>
            </Link>
            <Link href="/blog/best-fountain-pens-under-50" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Pens Under $50 →</span>
              <span className="block text-stone-400 mt-1">Budget-friendly options with price comparisons</span>
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
            headline: "Best Fountain Pens for Calligraphy in 2026",
            description:
              "Top fountain pens for calligraphy and hand lettering. Flex nibs, stub nibs, and italic nibs compared with prices.",
            author: { "@type": "Organization", name: "PenPrice" },
            publisher: { "@type": "Organization", name: "PenPrice" },
            datePublished: "2026-06-27",
            dateModified: "2026-06-27",
            mainEntityOfPage:
              "https://penprice.vercel.app/blog/best-fountain-pens-for-calligraphy",
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
                name: "What type of fountain pen nib is best for calligraphy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For calligraphy, you want either a flex nib (for line variation with pressure) or a stub/italic nib (for natural thick-thin strokes). Flex nibs are best for Copperplate and Spencerian scripts. Stub nibs (1.1mm to 2.3mm) are best for italic calligraphy and everyday cursive.",
                },
              },
              {
                "@type": "Question",
                name: "Can you do calligraphy with a regular fountain pen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A standard fine or medium nib won't produce calligraphic line variation. You need either a flex nib, soft nib, or stub/italic nib. However, a 1.1mm stub nib is an affordable upgrade that produces beautiful thick-thin strokes on any fountain pen that accepts Lamy-style nibs.",
                },
              },
              {
                "@type": "Question",
                name: "What is the best budget fountain pen for calligraphy practice?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Noodler's Creaper ($15) is the cheapest flex nib fountain pen. For stub nibs, the Lamy Safari with a 1.1mm italic nib ($30 total) offers smoother, more consistent results. Both are excellent for learning calligraphy techniques.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
