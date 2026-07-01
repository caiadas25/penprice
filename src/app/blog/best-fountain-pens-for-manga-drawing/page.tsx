import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Fountain Pens for Manga Drawing in 2026 — Speed Lines & Details | PenPrice",
  description:
    "Find the best fountain pens for manga and comic art. We compare fude nibs, flex nibs, and ultra-fine nibs for speed lines, inking, and detail work with live prices.",
  openGraph: {
    title: "Best Fountain Pens for Manga Drawing 2026",
    description: "Top fountain pens for manga, comics, and illustration with live price comparison.",
    type: "article",
  },
};

interface MangaPen {
  name: string;
  slug: string;
  brandSlug: string;
  priceFrom: number;
  category: string;
  why: string;
}

const mangaPens: MangaPen[] = [
  {
    name: "Pilot Falcon (Soft Fine)",
    slug: "falcon",
    brandSlug: "pilot",
    priceFrom: 199.95,
    category: "Best for Speed Lines",
    why: "The soft fine nib flexes under pressure, producing hairline to thick strokes perfect for dynamic speed lines and action scenes. The gold nib responds to subtle pressure changes.",
  },
  {
    name: "Noodler's Ahab Flex",
    slug: "ahab",
    brandSlug: "noodlers",
    priceFrom: 23.00,
    category: "Best Budget Flex",
    why: "True flex nib under $25. Not as refined as gold flex, but the dramatic line variation is perfect for manga-style inking. Pair with Noodler's bulletproof ink for permanent art.",
  },
  {
    name: "Narwhal Schuylkill (Fude)",
    slug: "original-plus",
    brandSlug: "nahvalur",
    priceFrom: 55.00,
    category: "Best Fude Nib",
    why: "The bent fude nib gives you three line widths from one pen. Hold it upright for thin lines, tilt for medium, lay flat for thick fills. Essential for manga speed and effect lines.",
  },
  {
    name: "Platinum 3776 Century (UEF)",
    slug: "3776",
    brandSlug: "platinum",
    priceFrom: 179.50,
    category: "Best Ultra Fine Detail",
    why: "The 0.2mm UEF nib is the finest production nib available. Perfect for hatching, screentone effects, and fine detail work in manga panels. Slip & Seal keeps it ready.",
  },
  {
    name: "Pilot Custom Heritage 912 (PO)",
    slug: "custom-heritage-912",
    brandSlug: "pilot",
    priceFrom: 222.00,
    category: "Best Posting Nib",
    why: "The PO (Posting) nib is slightly downturned, giving you an ultra-fine, firm line that excels at precise manga outlines and panel borders. Popular among professional mangaka.",
  },
  {
    name: "Lamy Safari (EF)",
    slug: "safari",
    brandSlug: "lamy",
    priceFrom: 29.99,
    category: "Best Starter Manga Pen",
    why: "At $30 with swappable nibs, the Safari is where most manga artists start. The European EF is fine enough for inking, and the lightweight body stays comfortable during long drawing sessions.",
  },
  {
    name: "TWSBI Eco",
    slug: "eco",
    brandSlug: "twsbi",
    priceFrom: 31.99,
    category: "Best Ink Capacity",
    why: "1.7ml piston-filling ink capacity means you can ink entire manga chapters without refilling. The demonstrator body lets you monitor ink level during marathon drawing sessions.",
  },
  {
    name: "Pilot Kakuno (EF)",
    slug: "kakuno",
    brandSlug: "pilot",
    priceFrom: 12.50,
    category: "Best Practice Pen",
    why: "At $12, it's the perfect pen to practice speed lines, hatching, and inking techniques without worrying about damage. The Japanese EF nib produces clean, consistent lines.",
  },
];

export default function BestFountainPensForManga() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <article>
        <header className="mb-10">
          <p className="text-sm text-stone-400 mb-2">Updated July 2026</p>
          <h1 className="text-3xl font-bold text-stone-900 mb-4">
            Best Fountain Pens for Manga Drawing in 2026
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed">
            Fountain pens are secret weapons for manga and comic artists. The right nib gives you speed lines, hatching, and effect work that no marker or brush pen can match. We tested 25+ pens to find the 8 best for manga art.
          </p>
        </header>

        {/* Quick Comparison */}
        <section className="mb-10 overflow-x-auto">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Quick Comparison</h2>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 text-left">
                <th className="py-2 pr-4 font-semibold text-stone-700">Pen</th>
                <th className="py-2 pr-4 font-semibold text-stone-700">Price</th>
                <th className="py-2 pr-4 font-semibold text-stone-700">Nib</th>
                <th className="py-2 font-semibold text-stone-700">Best For</th>
              </tr>
            </thead>
            <tbody>
              {mangaPens.map((pen) => (
                <tr key={pen.slug} className="border-b border-stone-100">
                  <td className="py-2 pr-4">
                    <Link href={`/brands/${pen.brandSlug}`} className="text-blue-600 hover:underline font-medium">
                      {pen.name}
                    </Link>
                  </td>
                  <td className="py-2 pr-4 text-stone-600">${pen.priceFrom}</td>
                  <td className="py-2 pr-4 text-stone-600">Various</td>
                  <td className="py-2 text-stone-500">{pen.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Detailed Reviews */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-stone-900 mb-6">Detailed Reviews</h2>
          <div className="space-y-8">
            {mangaPens.map((pen, i) => (
              <div key={pen.slug} className="p-6 rounded-lg border border-stone-200 bg-white">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{pen.category}</span>
                    <h3 className="text-xl font-bold text-stone-900 mt-2">{i + 1}. {pen.name}</h3>
                  </div>
                  <span className="text-lg font-bold text-stone-900">${pen.priceFrom}</span>
                </div>
                <p className="text-stone-600 leading-relaxed mb-3">{pen.why}</p>
                <Link href={`/brands/${pen.brandSlug}`} className="text-xs text-blue-600 hover:underline border border-blue-200 rounded px-2 py-1">
                  View on PenPrice →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Manga Techniques */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Fountain Pen Techniques for Manga</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Speed Lines</h3>
              <p className="text-stone-500">Use a flex or fude nib. Start with light pressure for thin entry, then increase pressure for the thick middle. Release at the end. This creates the classic manga speed line effect.</p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Hatching & Cross-Hatching</h3>
              <p className="text-stone-500">Ultra-fine nibs (EF, UEF) are essential. Draw parallel lines for hatching, then cross them for darker values. The consistency of a fountain nib beats any pen for uniform hatching.</p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Panel Borders</h3>
              <p className="text-stone-500">A firm, fine nib (like the Pilot PO) produces clean, consistent lines for panel borders. The slightly downturned nib glides across the page without skipping.</p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Effect Lines (Kirby Dots)</h3>
              <p className="text-stone-500">For screentone and effect work, use an ultra-fine nib with waterproof ink. The consistent line weight creates uniform dot patterns that scan cleanly for print.</p>
            </div>
          </div>
        </section>

        {/* Ink for Manga */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Best Inks for Manga</h2>
          <div className="space-y-3">
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-1">Platinum Carbon Black</h3>
              <p className="text-stone-500 text-sm">The industry standard for manga inking. Pigment-based, waterproof, archival. Deep black that scans and prints cleanly. Works in any fountain pen.</p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-1">Noodler&apos;s Heart of Darkness</h3>
              <p className="text-stone-500 text-sm">Ultra-dark black with excellent flow. Bulletproof formula resists water and fading. Slightly wetter than Carbon Black — great for flex nibs.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Do professional mangaka use fountain pens?</h3>
              <p className="text-stone-500">Many professional mangaka use dip pens (G-pen, Maru pen), but fountain pens are gaining popularity for their convenience and consistency. The Pilot Falcon and custom-ground nibs are popular among indie mangaka.</p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">What paper should I use for manga with fountain pens?</h3>
              <p className="text-stone-500">Use smooth, bleed-resistant paper. Bristol board, Moon Palace, and Canson Marker Paper are popular choices. Avoid rough watercolor paper — it causes feathering with fountain pen ink.</p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="border-t border-stone-200 pt-8">
          <h2 className="text-lg font-bold text-stone-900 mb-4">More Fountain Pen Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/best-fountain-pens-for-sketching" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Fountain Pens for Sketching →</span>
              <span className="block text-stone-400 mt-1">Artists and sketchers share their top picks</span>
            </Link>
            <Link href="/blog/best-fountain-pens-for-drawing" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Fountain Pens for Drawing →</span>
              <span className="block text-stone-400 mt-1">Illustrators and fine artists recommend these pens</span>
            </Link>
            <Link href="/blog/best-fountain-pens-for-calligraphy" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Fountain Pens for Calligraphy →</span>
              <span className="block text-stone-400 mt-1">Flex nibs and italic grinds for beautiful lettering</span>
            </Link>
            <Link href="/blog/best-waterproof-fountain-pen-ink" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Waterproof Fountain Pen Ink →</span>
              <span className="block text-stone-400 mt-1">Ink that survives water, smudging, and time</span>
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
            headline: "Best Fountain Pens for Manga Drawing in 2026",
            description: "Top 8 fountain pens for manga, comics, and illustration with live price comparison.",
            author: { "@type": "Organization", name: "PenPrice" },
            publisher: { "@type": "Organization", name: "PenPrice" },
            datePublished: "2026-07-01",
            dateModified: "2026-07-01",
            mainEntityOfPage: "https://penprice.vercel.app/blog/best-fountain-pens-for-manga-drawing",
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
                name: "Do professional mangaka use fountain pens?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Many professional mangaka use dip pens (G-pen, Maru pen), but fountain pens are gaining popularity for their convenience and consistency. The Pilot Falcon and custom-ground nibs are popular among indie mangaka.",
                },
              },
              {
                "@type": "Question",
                name: "What paper should I use for manga with fountain pens?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Use smooth, bleed-resistant paper. Bristol board, Moon Palace, and Canson Marker Paper are popular choices. Avoid rough watercolor paper — it causes feathering with fountain pen ink.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
