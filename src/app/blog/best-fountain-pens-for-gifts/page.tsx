import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Fountain Pens for Gifts in 2026 — Top Picks at Every Budget | PenPrice",
  description:
    "The best fountain pens to give as gifts. From $6 to $300, find the perfect fountain pen for birthdays, holidays, graduations, and special occasions. Price comparisons included.",
  openGraph: {
    title: "Best Fountain Pens for Gifts 2026 — Top Picks at Every Budget",
    description: "Perfect gifts for pen lovers. Pilot, Kaweco, Lamy, TWSBI, Sailor, and Montblanc — with prices.",
    type: "article",
  },
};

interface GiftPen {
  name: string;
  slug: string;
  brandSlug: string;
  priceFrom: number;
  category: string;
  why: string;
  occasion: string;
}

const giftPens: GiftPen[] = [
  {
    name: "Pilot Metropolitan",
    slug: "metropolitan",
    brandSlug: "pilot",
    priceFrom: 18.95,
    category: "Best Under $25",
    why: "The most popular fountain pen in the world. Brass body, smooth nib, and a premium feel for under $20. The perfect gift for anyone curious about fountain pens.",
    occasion: "Birthday, Christmas, Graduation",
  },
  {
    name: "Kaweco Sport",
    slug: "sport",
    brandSlug: "kaweco",
    priceFrom: 24.99,
    category: "Best Under $30",
    why: "The iconic octagonal pocket pen. Available in dozens of colors and materials. Compact enough to carry everywhere. A stylish, thoughtful gift.",
    occasion: "Birthday, Stocking Stuffer, Anniversary",
  },
  {
    name: "Lamy Safari",
    slug: "safari",
    brandSlug: "lamy",
    priceFrom: 29.99,
    category: "Best Design Gift",
    why: "The most recognizable fountain pen design in the world. Interchangeable nibs and dozens of colors. Perfect for someone who wants a pen that looks great on a desk.",
    occasion: "Birthday, Graduation, Back to School",
  },
  {
    name: "TWSBI Eco",
    slug: "eco",
    brandSlug: "twsbi",
    priceFrom: 31.99,
    category: "Best Gift for Ink Enthusiasts",
    why: "A piston filler with massive ink capacity and a demonstrator body that shows off your ink. The best way to get someone hooked on fountain pens.",
    occasion: "Birthday, Holiday, Teacher Appreciation",
  },
  {
    name: "Lamy AL-Star",
    slug: "al-star",
    brandSlug: "lamy",
    priceFrom: 38.99,
    category: "Best Under $45",
    why: "The Safari's aluminum sibling. Same great nib but with a brushed metal body that feels more premium. A step up from the Safari for someone who appreciates design.",
    occasion: "Birthday, Graduation, Promotion",
  },
  {
    name: "Kaweco Dia 2",
    slug: "dia2",
    brandSlug: "kaweco",
    priceFrom: 169.00,
    category: "Best Premium Gift",
    why: "A classic Art Deco design in chrome or gold. A real statement piece. The kind of pen you give to someone who deserves something special.",
    occasion: "Wedding, Anniversary, Retirement, Promotion",
  },
  {
    name: "Pilot E95S",
    slug: "e95s",
    brandSlug: "pilot",
    priceFrom: 72.00,
    category: "Best Gold Nib Gift",
    why: "A 14k gold inlaid nib pen at a reasonable price. Compact and pocket-friendly. The kind of pen that makes a statement without breaking the bank.",
    occasion: "Birthday, Graduation, Promotion",
  },
  {
    name: "Pelikan M200",
    slug: "m200",
    brandSlug: "pelikan",
    priceFrom: 119.99,
    category: "Best Luxury Gift Under $150",
    why: "The entry-level Pelikan Souverän. Piston filler, steel nib with spring, and the classic striped barrel. A luxury pen that's accessible.",
    occasion: "Wedding, Anniversary, Retirement",
  },
];

export default function BestFountainPensForGiftsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Fountain Pens for Gifts in 2026",
    description:
      "The best fountain pens to give as gifts. From $6 to $300, find the perfect fountain pen for birthdays, holidays, graduations, and special occasions.",
    datePublished: "2026-06-30",
    author: { "@type": "Organization", name: "PenPrice", url: "https://penprice.vercel.app" },
    publisher: { "@type": "Organization", name: "PenPrice", url: "https://penprice.vercel.app" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a good fountain pen gift under $30?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Pilot Metropolitan ($18.95) and Kaweco Sport ($24.99) are the best fountain pen gifts under $30. The Metropolitan is the most popular beginner pen; the Kaweco is a stylish pocket pen in dozens of colors.",
        },
      },
      {
        "@type": "Question",
        name: "What is a good luxury fountain pen gift?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For luxury gifts, consider the Pelikan M200 ($119), Kaweco Dia 2 ($169), or Pilot E95S ($72). For a truly premium gift, the Pilot Custom 823 ($289) or Sailor Pro Gear ($246) are excellent choices.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to buy ink with a fountain pen gift?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, most fountain pens come with a cartridge or two, but you should include an ink bottle or converter if the recipient doesn't already have one. A good starter ink is Pilot Iroshizuku ($25) or Diamine ($8).",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-500">Best Fountain Pens for Gifts</span>
        </nav>

        <article>
          <header className="mb-10">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 mb-3 inline-block">Gift Guide</span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Best Fountain Pens for Gifts in 2026
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Looking for the perfect gift for a pen lover? From $6 to $300, these are the best fountain pens to give as gifts. Each one is a thoughtful, practical, and beautiful choice.
            </p>
          </header>

          {/* Gift Recommendation Table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Quick Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-left">
                    <th className="p-3 font-semibold text-slate-700">Pen</th>
                    <th className="p-3 font-semibold text-slate-700">Category</th>
                    <th className="p-3 font-semibold text-slate-700">From</th>
                    <th className="p-3 font-semibold text-slate-700">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {giftPens.map((pen, i) => (
                    <tr key={pen.slug} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3">
                        <Link href={`/brands/${pen.brandSlug}/${pen.slug}`} className="text-indigo-600 hover:underline font-medium">
                          {pen.name}
                        </Link>
                      </td>
                      <td className="p-3 text-slate-600">{pen.category}</td>
                      <td className="p-3 font-mono text-slate-800">${pen.priceFrom.toFixed(2)}</td>
                      <td className="p-3 text-slate-600">{pen.occasion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Detailed Recommendations */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Detailed Recommendations</h2>
            {giftPens.map((pen) => (
              <div key={pen.slug} className="mb-8 p-6 bg-white border border-slate-200 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">
                      <Link href={`/brands/${pen.brandSlug}/${pen.slug}`} className="hover:text-indigo-600 transition-colors">
                        {pen.name}
                      </Link>
                    </h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700">{pen.category}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 ml-2">{pen.occasion}</span>
                  </div>
                  <span className="text-lg font-mono font-bold text-slate-800">from ${pen.priceFrom.toFixed(2)}</span>
                </div>
                <p className="text-slate-600 leading-relaxed">{pen.why}</p>
                <Link href={`/brands/${pen.brandSlug}/${pen.slug}`} className="inline-block mt-3 text-indigo-600 hover:underline text-sm font-medium">
                  View prices and details →
                </Link>
              </div>
            ))}
          </section>

          {/* Gift Wrapping Tips */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Gift Wrapping Tips for Fountain Pens</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-2">Include Ink</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Most fountain pens come with a cartridge or two, but a bottle of ink makes the gift complete. Pilot Iroshizuku ($25) is a premium option; Diamine ($8) is budget-friendly.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-2">Add a Notebook</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  A fountain-pen-friendly notebook (Rhodia, Clairefontaine, Leuchtturm1917) elevates any gift. The pen and notebook together make a complete writing kit.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-2">Use a Pen Case</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  A leather pen case or roll adds a premium touch. Consider a single-pen case ($15-30) or a multi-pen roll ($20-50) depending on the recipient.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-2">Include a Converter</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  If the pen uses cartridges, include a converter so the recipient can use bottled ink. It's a small add-on that makes the gift much more versatile.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqJsonLd.mainEntity.map((faq) => (
                <div key={faq.name} className="bg-white border border-slate-200 rounded-lg p-4">
                  <h3 className="font-bold text-slate-800 mb-2">{faq.name}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/blog/best-fountain-pens-for-beginners" className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors">
                <span className="font-medium text-indigo-600">Best Fountain Pens for Beginners</span>
                <p className="text-sm text-slate-500 mt-1">New to fountain pens? Start here.</p>
              </Link>
              <Link href="/blog/best-fountain-pens-under-50" className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors">
                <span className="font-medium text-indigo-600">Best Fountain Pens Under $50</span>
                <p className="text-sm text-slate-500 mt-1">Budget-friendly picks for every writer.</p>
              </Link>
              <Link href="/blog/best-fountain-pens-under-100" className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors">
                <span className="font-medium text-indigo-600">Best Fountain Pens Under $100</span>
                <p className="text-sm text-slate-500 mt-1">Mid-range pens with premium features.</p>
              </Link>
              <Link href="/blog/best-fountain-pens-under-200" className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors">
                <span className="font-medium text-indigo-600">Best Fountain Pens Under $200</span>
                <p className="text-sm text-slate-500 mt-1">Premium pens for the serious writer.</p>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
