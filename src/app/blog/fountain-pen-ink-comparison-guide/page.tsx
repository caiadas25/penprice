import type { Metadata } from "next";
import Link from "next/link";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title: "Fountain Pen Ink Comparison Guide — Best Inks by Color, Brand, & Use Case | PenPrice",
  description:
    "Compare fountain pen inks from Pilot Iroshizuku, Diamine, Noodler's, Waterman, Pelikan, and more. Best inks by color, drying time, water resistance, and price. Complete ink comparison guide for 2026.",
  openGraph: {
    title: "Fountain Pen Ink Comparison Guide — 2026",
    description:
      "Compare fountain pen inks by color, drying time, water resistance, and price. Pilot Iroshizuku, Diamine, Noodler's, and more.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fountain Pen Ink Comparison Guide — 2026",
    description:
      "Best fountain pen inks compared by color, drying time, and water resistance.",
  },
};

interface InkRec {
  name: string;
  brand: string;
  color: string;
  priceFrom: number;
  why: string;
  dryingTime: string;
  waterResistance: string;
}

const inks: InkRec[] = [
  {
    name: "Iroshizuku Take-sumi",
    brand: "Pilot",
    color: "Black",
    priceFrom: 22.00,
    why: "Pilot's Iroshizuku line is the gold standard for fountain pen inks. Take-sumi is a deep, rich black with excellent flow and lubrication. The 50ml bottle is elegant and the ink performs flawlessly in every Pilot pen.",
    dryingTime: "5-8 seconds",
    waterResistance: "Low — washes away completely",
  },
  {
    name: "Iroshizuku Kon-peki",
    brand: "Pilot",
    color: "Blue",
    priceFrom: 22.00,
    why: "A vivid, saturated blue inspired by the deep blue sky. Excellent flow, consistent color, and beautiful shading on fountain-pen-friendly paper. One of the most popular blue inks in the world.",
    dryingTime: "5-8 seconds",
    waterResistance: "Low",
  },
  {
    name: "Noodler's Baystate Blue",
    brand: "Noodler's",
    color: "Blue",
    priceFrom: 12.50,
    why: "The most famous ink in the fountain pen community. An intensely saturated blue with moderate water resistance. Stains pens and hands — that's part of the charm. The sheen on Tomoe River paper is legendary.",
    dryingTime: "8-12 seconds",
    waterResistance: "Moderate",
  },
  {
    name: "Diamine Oxford Blue",
    brand: "Diamine",
    color: "Blue",
    priceFrom: 7.99,
    why: "A workhorse blue-black with good water resistance. At under $8 for 80ml, it's the best value everyday ink available. The large bottle fits most fountain pen converters for easy filling.",
    dryingTime: "6-10 seconds",
    waterResistance: "Moderate to High",
  },
  {
    name: "Pelikan 4001 Royal Blue",
    brand: "Pelikan",
    color: "Blue",
    priceFrom: 8.99,
    why: "A classic German blue that's been in production for over a century. Reliable flow, moderate saturation, and easy to clean. The go-to ink for students and anyone who needs a dependable everyday blue.",
    dryingTime: "5-7 seconds",
    waterResistance: "Low to Moderate",
  },
  {
    name: "Waterman Serenity Blue",
    brand: "Waterman",
    color: "Blue",
    priceFrom: 8.99,
    why: "Known for being the safest fountain pen ink — it works in every pen without issue. Moderate color, easy cleanup, and reliable performance. The first ink most people try and many never stop using.",
    dryingTime: "5-7 seconds",
    waterResistance: "Low",
  },
  {
    name: "Noodler's Heart of Darkness",
    brand: "Noodler's",
    color: "Black",
    priceFrom: 12.50,
    why: "Ultra-waterproof black ink. Once dry, it's permanent on paper — ideal for legal documents, field notes, and archival writing. The matte black finish is distinctive and professional.",
    dryingTime: "10-15 seconds",
    waterResistance: "Very High — waterproof",
  },
  {
    name: "Diamine Aurora Borealis",
    brand: "Diamine",
    color: "Teal",
    priceFrom: 7.99,
    why: "A stunning teal-green inspired by the northern lights. Beautiful shading on Rhodia paper and excellent flow. A community collaboration ink that became one of Diamine's best sellers.",
    dryingTime: "8-12 seconds",
    waterResistance: "Low",
  },
  {
    name: "Pilot Iroshizuku Yama-budo",
    brand: "Pilot",
    color: "Purple",
    priceFrom: 22.00,
    why: "A rich, burgundy-purple with excellent shading properties. The name means 'wild grapes' and the color lives up to it. Performs beautifully in Japanese Fine and Medium nibs.",
    dryingTime: "5-8 seconds",
    waterResistance: "Low",
  },
  {
    name: "Rohrer & Klingner SketchINK",
    brand: "Rohrer & Klingner",
    color: "Black",
    priceFrom: 11.99,
    why: "A waterproof black ink designed for sketching that also works beautifully for writing. Carbon-based pigmented ink that's safe for fountain pens. Perfect for artists and note-takers.",
    dryingTime: "5-8 seconds",
    waterResistance: "Very High — waterproof",
  },
];

export default function FountainPenInkGuidePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Fountain Pen Ink Comparison Guide",
    description:
      "Compare fountain pen inks by color, drying time, water resistance, and price.",
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
        name: "What is the best fountain pen ink for everyday use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Waterman Serenity Blue and Pelikan 4001 Royal Blue are the best everyday inks. They are affordable, easy to clean, safe for all pens, and have moderate drying times. For water resistance, Noodler's Heart of Darkness or Diamine Oxford Blue are better choices.",
        },
      },
      {
        "@type": "Question",
        name: "Are fountain pen inks waterproof?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most fountain pen inks are NOT waterproof. For waterproof ink, look for Noodler's Bulletproof series, Rohrer & Klingner SketchINK, or Platinum Carbon Black. These are designed to be permanent once dry.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use any ink in any fountain pen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Only use inks specifically designed for fountain pens. India ink and calligraphy ink will clog your pen permanently. Stick to reputable brands like Pilot, Diamine, Noodler's, Pelikan, Waterman, and Iroshizuku.",
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
            Fountain Pen Ink Comparison Guide
          </span>
        </nav>

        <article>
          <header className="mb-10">
            <span className="text-xs px-2.5 py-0.5 rounded bg-blue-50 text-blue-800 mb-3 inline-block">
              Ink Guide
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Fountain Pen Ink Comparison Guide
            </h1>
            <p className="text-lg text-stone-500">
              Choosing the right ink is just as important as choosing the right
              pen. We compared the most popular fountain pen inks by color
              depth, drying time, water resistance, and value to help you find
              your perfect ink.
            </p>
          </header>

          {/* Quick Picks */}
          <div className="bg-amber-950/30 border border-amber-900/50 rounded p-6 mb-10">
            <h2 className="text-lg font-bold text-blue-800 mb-2">
              Quick Picks
            </h2>
            <ul className="space-y-2 text-stone-700">
              <li>
                <strong className="text-stone-900">Best Blue:</strong> Pilot Iroshizuku Kon-peki ($22) — vivid, smooth, iconic
              </li>
              <li>
                <strong className="text-stone-900">Best Value:</strong> Diamine Oxford Blue ($8 for 80ml) — workhorse blue-black
              </li>
              <li>
                <strong className="text-stone-900">Best Waterproof:</strong> Noodler&apos;s Heart of Darkness ($12.50) — permanent black
              </li>
              <li>
                <strong className="text-stone-900">Safest for Any Pen:</strong> Waterman Serenity Blue ($9) — never clogs
              </li>
            </ul>
          </div>

          {/* Ink Comparison */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">
              Top Fountain Pen Inks
            </h2>
            <div className="space-y-6">
              {inks.map((ink, index) => (
                <div
                  key={`${ink.brand}-${ink.name}`}
                  className="border border-stone-200 rounded-lg p-6"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-xs text-stone-400 mr-2">
                        #{index + 1}
                      </span>
                      <span className="text-xl font-bold text-blue-800">
                        {ink.name}
                      </span>
                      <span className="text-sm text-stone-400 ml-2">
                        by {ink.brand}
                      </span>
                    </div>
                    <span className="text-lg font-bold text-stone-900">
                      From ${ink.priceFrom.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-stone-600 mb-3">{ink.why}</p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs">
                      Color: {ink.color}
                    </span>
                    <span className="px-2 py-0.5 bg-amber-50 text-amber-700 rounded text-xs">
                      Drying: {ink.dryingTime}
                    </span>
                    <span className="px-2 py-0.5 bg-green-50 text-green-700 rounded text-xs">
                      Water Resistance: {ink.waterResistance}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Ink Types */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">
              Types of Fountain Pen Ink
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="border border-stone-200 rounded-lg p-4">
                <h3 className="font-bold text-stone-900 mb-2">Dye-Based Inks</h3>
                <p className="text-sm text-stone-600">
                  Most fountain pen inks are dye-based. They flow smoothly, come in every color, and are easy to clean. The downside: they are not waterproof and can fade over time with UV exposure.
                </p>
              </div>
              <div className="border border-stone-200 rounded-lg p-4">
                <h3 className="font-bold text-stone-900 mb-2">Pigmented Inks</h3>
                <p className="text-sm text-stone-600">
                  Pigmented inks (like Platinum Carbon Black, SketchINK) use solid particles suspended in liquid. They are waterproof and archival but require more frequent pen cleaning to prevent clogging.
                </p>
              </div>
              <div className="border border-stone-200 rounded-lg p-4">
                <h3 className="font-bold text-stone-900 mb-2">Iron Gall Inks</h3>
                <p className="text-sm text-stone-600">
                  Traditional ink that darkens as it oxidizes on paper. Water-resistant and archival. Brands like KWZ make modern versions that are safe for fountain pens. Can be corrosive — don&apos;t let them dry in the pen.
                </p>
              </div>
              <div className="border border-stone-200 rounded-lg p-4">
                <h3 className="font-bold text-stone-900 mb-2">Shimmer Inks</h3>
                <p className="text-sm text-stone-600">
                  Inks with metallic particles that create a sparkle effect on paper. J. Herbin and Diamine make popular shimmer inks. Beautiful but can clog feeds — clean your pen more frequently.
                </p>
              </div>
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
                  What is the best fountain pen ink for everyday use?
                </h3>
                <p className="text-stone-600">
                  Waterman Serenity Blue and Pelikan 4001 Royal Blue are the best everyday inks. They are affordable, easy to clean, safe for all pens, and have moderate drying times.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-2">
                  Are fountain pen inks waterproof?
                </h3>
                <p className="text-stone-600">
                  Most fountain pen inks are NOT waterproof. For waterproof ink, look for Noodler&apos;s Bulletproof series, Rohrer &amp; Klingner SketchINK, or Platinum Carbon Black.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-2">
                  Can I use any ink in any fountain pen?
                </h3>
                <p className="text-stone-600">
                  No. Only use inks specifically designed for fountain pens. India ink and calligraphy ink will clog your pen permanently. Stick to reputable brands like Pilot, Diamine, Noodler&apos;s, Pelikan, and Waterman.
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
                <Link href="/blog/best-fountain-pen-inks" className="hover:text-blue-600 transition-colors">
                  Best Fountain Pen Inks
                </Link>
              </li>
              <li>
                <Link href="/blog/fountain-pen-maintenance-guide" className="hover:text-blue-600 transition-colors">
                  Fountain Pen Maintenance Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/fountain-pen-nib-sizes-explained" className="hover:text-blue-600 transition-colors">
                  Fountain Pen Nib Sizes Explained
                </Link>
              </li>
              <li>
                <Link href="/blog/best-fountain-pens-for-beginners" className="hover:text-blue-600 transition-colors">
                  Best Fountain Pens for Beginners
                </Link>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </>
  );
}
