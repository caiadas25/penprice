import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Fountain Pens Under $300 in 2026 | PenPrice",
  description:
    "Compare prices on the best fountain pens under $300. Gold nibs, piston fillers, and flagship models from Pilot, Sailor, Pelikan, Lamy, and Montegrappa — with live price links.",
  openGraph: {
    title: "Best Fountain Pens Under $300 in 2026",
    description:
      "The $300 tier delivers gold nibs, premium materials, and flagship build quality. Compare prices across Amazon, JetPens, and Goulet Pens.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fountain Pens Under $300 in 2026",
    description:
      "Flagship fountain pens under $300 — gold nibs, piston fillers, and premium builds.",
  },
};

const pens = [
  {
    name: "Sailor Pro Gear",
    brand: "Sailor",
    price: 220,
    msrp: 275,
    retailer: "Amazon",
    url: "https://www.amazon.com/s?k=Sailor+Pro+Gear+fountain+pen",
    nib: "21k Gold",
    filling: "Cartridge / Converter",
    highlight: "Iconic 21k gold nib with unmatched feedback",
    slug: "sailor-pro-gear",
  },
  {
    name: "Lamy 2000",
    brand: "Lamy",
    price: 180,
    msrp: 240,
    retailer: "Amazon",
    url: "https://www.amazon.com/s?k=Lamy+2000+fountain+pen",
    nib: "14k Gold",
    filling: "Piston",
    highlight: "Bauhaus design icon, 50+ years of production",
    slug: "lamy-2000",
  },
  {
    name: "Pilot Custom 823",
    brand: "Pilot",
    price: 276,
    msrp: 328,
    retailer: "Amazon",
    url: "https://www.amazon.com/s?k=Pilot+Custom+823+fountain+pen",
    nib: "14k Gold",
    filling: "Vacuum",
    highlight: "Enormous ink capacity, flagship Pilot nib",
    slug: "pilot-custom-823",
  },
  {
    name: "Pelikan M400",
    brand: "Pelikan",
    price: 225,
    msrp: 295,
    retailer: "Amazon",
    url: "https://www.amazon.com/s?k=Pelikan+M400+fountain+pen",
    nib: "14k Gold",
    filling: "Piston",
    highlight: "Classic striped barrel, smooth Pelikan nib",
    slug: "pelikan-m400",
  },
  {
    name: "Pilot Custom 74",
    brand: "Pilot",
    price: 88,
    msrp: 120,
    retailer: "Amazon",
    url: "https://www.amazon.com/s?k=Pilot+Custom+74+fountain+pen",
    nib: "14k Gold",
    filling: "Cartridge / Converter",
    highlight: "Best value gold nib — exceptional writing experience",
    slug: "pilot-custom-74",
  },
  {
    name: "Montegrappa Elmo",
    brand: "Montegrappa",
    price: 165,
    msrp: 195,
    retailer: "Amazon",
    url: "https://www.amazon.com/s?k=Montegrappa+Elmo+fountain+pen",
    nib: "Steel (Schmidt)",
    filling: "Cartridge / Converter",
    highlight: "Italian design at an accessible price",
    slug: "montegrappa-elmo",
  },
  {
    name: "Sailor 1911 Standard",
    brand: "Sailor",
    price: 160,
    msrp: 200,
    retailer: "Amazon",
    url: "https://www.amazon.com/s?k=Sailor+1911+fountain+pen",
    nib: "14k Gold",
    filling: "Cartridge / Converter",
    highlight: "Sailor's signature nib feedback in a classic cigar shape",
    slug: "sailor-1911",
  },
];

export default function BestUnder300Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Fountain Pens Under $300 in 2026",
    description:
      "Compare prices on the best fountain pens under $300. Gold nibs, piston fillers, and flagship models from Pilot, Sailor, Pelikan, Lamy, and Montegrappa.",
    author: { "@type": "Organization", name: "PenPrice" },
    publisher: { "@type": "Organization", name: "PenPrice" },
    datePublished: "2026-06-27",
    dateModified: "2026-06-27",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best fountain pen under $300?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Pilot Custom 823 is widely considered the best fountain pen under $300, offering a 14k gold nib, vacuum filling system with massive ink capacity, and flagship build quality. For gold nib lovers on a budget, the Pilot Custom 74 at around $88 delivers exceptional value.",
        },
      },
      {
        "@type": "Question",
        name: "Are gold nibs worth the price?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gold nibs offer smoother writing, subtle flex, and durability over steel nibs. At the $200-300 range, you get 14k or 21k gold nibs that write noticeably better than steel. The investment is worthwhile if you write daily.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Lamy 2000 a good fountain pen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Lamy 2000 is one of the most celebrated fountain pens ever made. Designed in 1966, it features a 14k gold nib, piston filler, and seamless Makrolon body. It typically sells for $180-200, well under its $240 MSRP.",
        },
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <nav className="text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-800 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-500">Best Fountain Pens Under $300</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2.5 py-0.5 rounded bg-blue-50 text-blue-800">
              Buying Guide
            </span>
            <span className="text-xs text-stone-400">June 27, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Best Fountain Pens Under $300 in 2026
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            The $300 tier is where fountain pens become truly exceptional. Gold nibs, piston fillers, premium materials, and flagship build quality are all within reach. Here are the best options with live price comparisons.
          </p>
        </header>

        <div className="space-y-6 mb-12">
          {pens.map((pen, i) => (
            <div
              key={i}
              className="group block p-6 rounded border border-stone-200 bg-white hover:border-blue-300 hover:bg-stone-100 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <Link
                    href={`/brands/${pen.brand.toLowerCase()}/${pen.slug}`}
                    className="text-xl font-bold text-stone-900 hover:text-blue-800 transition-colors"
                  >
                    {pen.name}
                  </Link>
                  <p className="text-sm text-stone-500 mt-1">{pen.highlight}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs px-2.5 py-1 bg-stone-100 rounded text-stone-500">
                      {pen.nib}
                    </span>
                    <span className="text-xs px-2.5 py-1 bg-stone-100 rounded text-stone-500">
                      {pen.filling}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="text-2xl font-bold text-blue-800">
                    ${pen.price}
                  </div>
                  {pen.msrp > pen.price && (
                    <div className="text-xs text-stone-400">
                      MSRP <span className="line-through">${pen.msrp}</span>
                      {" "}
                      <span className="text-green-400">
                        Save {Math.round((1 - pen.price / pen.msrp) * 100)}%
                      </span>
                    </div>
                  )}
                  <a
                    href={pen.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-800/70 hover:text-blue-800 transition-colors mt-1"
                  >
                    Compare at {pen.retailer} ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">
            What to Look for Under $300
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-5 rounded bg-white border border-stone-200/50">
              <h3 className="font-bold text-stone-900 mb-2">Gold Nibs</h3>
              <p className="text-sm text-stone-500">
                At this price, expect 14k or 21k gold nibs. Gold is softer than steel, providing a smoother writing experience with subtle flex that adapts to your writing pressure.
              </p>
            </div>
            <div className="p-5 rounded bg-white border border-stone-200/50">
              <h3 className="font-bold text-stone-900 mb-2">Filling Systems</h3>
              <p className="text-sm text-stone-500">
                Piston and vacuum fillers dominate this tier. They hold more ink than cartridges and give you access to the entire world of bottled fountain pen inks.
              </p>
            </div>
            <div className="p-5 rounded bg-white border border-stone-200/50">
              <h3 className="font-bold text-stone-900 mb-2">Build Quality</h3>
              <p className="text-sm text-stone-500">
                Premium resins, celluloid, Makrolon, and aluminum bodies. These pens are built to last decades and often appreciate in value.
              </p>
            </div>
            <div className="p-5 rounded bg-white border border-stone-200/50">
              <h3 className="font-bold text-stone-900 mb-2">Brand Heritage</h3>
              <p className="text-sm text-stone-500">
                Pilot, Sailor, Pelikan, and Lamy have decades of nib-making expertise. At $300, you are buying into a lineage of craftsmanship.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqJsonLd.mainEntity.map((item, i) => (
              <div key={i} className="p-5 rounded bg-white border border-stone-200/50">
                <h3 className="font-bold text-stone-900 mb-2">{item.name}</h3>
                <p className="text-sm text-stone-500">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/blog/best-fountain-pens-under-200" className="text-blue-800 hover:text-blue-700">
            ← Under $200
          </Link>
          <Link href="/blog/best-japanese-fountain-pens" className="text-blue-800 hover:text-blue-700">
            Japanese Pens Guide →
          </Link>
          <Link href="/blog/best-everyday-fountain-pens" className="text-blue-800 hover:text-blue-700">
            Everyday Pens Guide →
          </Link>
          <Link href="/blog/best-fountain-pens-for-beginners" className="text-blue-800 hover:text-blue-700">
            Beginner Guide →
          </Link>
        </div>
      </article>
    </div>
  );
}
