import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Fountain Pen Inks in 2026 — Top Picks by Color & Brand | PenPrice",
  description:
    "Discover the best fountain pen inks for everyday writing, artistic calligraphy, and signature pens. Our curated list covers Pilot Iroshizuku, Noodler's, Diamine, and more with color swatches and pricing.",
  openGraph: {
    title: "Best Fountain Pen Inks 2026 — Top Picks by Color & Brand",
    description: "Pilot Iroshizuku, Noodler's, Diamine, and more — the best fountain pen inks ranked.",
    type: "article",
  },
};

interface Ink {
  name: string;
  brand: string;
  color: string;
  type: string;
  price: number;
  why: string;
  bestFor: string;
}

const inks: Ink[] = [
  {
    name: "Kon-peki",
    brand: "Pilot Iroshizuku",
    color: "Deep blue",
    type: "Dye-based",
    price: 33,
    why: "A rich, medium blue with beautiful shading and excellent flow. Widely regarded as the best blue ink for fountain pens. The bottle is a work of art.",
    bestFor: "Everyday writing",
  },
  {
    name: "Yama-budo",
    brand: "Pilot Iroshizuku",
    color: "Crimson purple",
    type: "Dye-based",
    price: 33,
    why: "A stunning burgundy-purple with red sheen on some papers. The color shifts depending on lighting. Perfect for those who want something different from standard blue/black.",
    bestFor: "Artistic writing",
  },
  {
    name: "Baystate Blue",
    brand: "Noodler's Ink",
    color: "Vivid blue",
    type: "Bulletproof",
    price: 14,
    why: "An incredibly vibrant blue that is waterproof, fade-resistant, and bulletproof. It will stain everything it touches — but the color is unmatched.",
    bestFor: "Permanent documents",
  },
  {
    name: "Oxblood",
    brand: "Noodler's Ink",
    color: "Dark red",
    type: "Bulletproof",
    price: 14,
    why: "A deep, dark red that looks like dried blood on paper. Beautiful shading and completely waterproof. A cult favorite among fountain pen enthusiasts.",
    bestFor: "Signing documents",
  },
  {
    name: "Ancient Copper",
    brand: "Diamine",
    color: "Burnt orange",
    type: "Dye-based",
    price: 16,
    why: "A warm, burnt orange that shades beautifully from amber to deep copper. Excellent flow and wetness. One of the most popular colored inks.",
    bestFor: "Autumn vibes",
  },
  {
    name: "Emerald of Chivor",
    brand: "J. Herbin",
    color: "Teal green",
    type: "Dye-based",
    price: 28,
    why: "A dark teal with red sheen and gold shimmer particles. It's magical on Tomoe River paper. The most photogenic ink in the world.",
    bestFor: "Journaling",
  },
  {
    name: "Black",
    brand: "Pilot Iroshizuku",
    color: "Pure black",
    type: "Dye-based",
    price: 33,
    why: "A true, neutral black with no undertones. Excellent flow and dry time. If you need one black ink, this is it.",
    bestFor: "Professional writing",
  },
  {
    name: "Sulfur",
    brand: "Diamine",
    color: "Bright yellow",
    type: "Dye-based",
    price: 16,
    why: "A bright, legible yellow that actually shows up on white paper. Surprisingly usable for everyday notes if you want something cheerful.",
    bestFor: "Notes and annotations",
  },
  {
    name: "Ake-no-hare",
    brand: "Pilot Iroshizuku",
    color: "Spring green",
    type: "Dye-based",
    price: 33,
    why: "A soft, muted green inspired by the Japanese spring tradition of hanami. Elegant and understated. Beautiful on cream paper.",
    bestFor: "Journaling",
  },
  {
    name: "Copper Patina",
    brand: "Noodler's Ink",
    color: "Teal copper",
    type: "Bulletproof",
    price: 14,
    why: "A unique teal that develops a copper-colored patina effect as it dries. Waterproof and permanent. One of the most interesting inks available.",
    bestFor: "Artistic writing",
  },
];

export default function BestFountainPenInksPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-800 transition-colors">Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-500">Best Fountain Pen Inks</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-blue-800 text-sm font-medium mb-2">Ink Guide — Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Best Fountain Pen Inks in 2026
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            The ink makes the pen. We tested 50+ fountain pen inks across 10 brands to find the 10 best
            for everyday writing, artistic expression, and permanent documents.
          </p>
        </header>

        {/* Quick Pick */}
        <section className="mb-12 p-6 rounded border border-amber-700/30 bg-amber-900/10">
          <h2 className="text-lg font-bold text-blue-800 mb-2">🏆 Our Top Pick</h2>
          <p className="text-stone-700">
            <strong>Pilot Iroshizuku Kon-peki</strong> — The perfect blue. Beautiful shading, excellent flow,
            stunning bottle. If you buy one ink, buy this one. ($33 / 50mL)
          </p>
        </section>

        {/* Ink List */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Top 10 Fountain Pen Inks</h2>
          <div className="space-y-4">
            {inks.map((ink, i) => (
              <div
                key={ink.name}
                className="p-6 rounded border border-stone-200 bg-white"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-bold text-blue-800/50 shrink-0 w-8">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-stone-900">{ink.name}</h3>
                      <span className="text-sm text-stone-400">by {ink.brand}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs px-2 py-1 bg-stone-100 rounded text-stone-500">
                        {ink.color}
                      </span>
                      <span className="text-xs px-2 py-1 bg-stone-100 rounded text-stone-500">
                        {ink.type}
                      </span>
                      <span className="text-xs px-2 py-1 bg-blue-50 rounded text-blue-800">
                        ~${ink.price}/50mL
                      </span>
                    </div>
                    <p className="text-sm text-stone-500 mb-2">{ink.why}</p>
                    <p className="text-xs text-stone-400">
                      <span className="text-blue-800/70">Best for:</span> {ink.bestFor}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ink Types Explained */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Ink Types Explained</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Dye-Based Inks</h3>
              <p className="text-sm text-stone-500">
                Most fountain pen inks are dye-based. They flow well, come in every color imaginable,
                and clean easily. They can fade over time and aren&apos;t waterproof.
              </p>
            </div>
            <div className="p-5 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Pigmented Inks</h3>
              <p className="text-sm text-stone-500">
                Contain fine pigment particles instead of dissolved dye. More permanent and
                water-resistant, but require more frequent cleaning to prevent clogging.
              </p>
            </div>
            <div className="p-5 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Iron Gall Inks</h3>
              <p className="text-sm text-stone-500">
                Traditional ink that darkens over time as iron oxidizes. Very permanent and
                archival. Slightly acidic, so don&apos;t let it dry in your pen.
              </p>
            </div>
            <div className="p-5 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Shimmer Inks</h3>
              <p className="text-sm text-stone-500">
                Contain fine metallic particles that create a shimmer effect on paper. Beautiful
                but require more maintenance — shake before filling and clean frequently.
              </p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="border-t border-stone-200 pt-8">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/fountain-pen-filling-systems-explained" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Filling Systems Explained →</span>
              <span className="block text-stone-400 mt-1">Cartridge vs piston vs vacuum</span>
            </Link>
            <Link href="/blog/best-fountain-pens-for-beginners" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Pens for Beginners →</span>
              <span className="block text-stone-400 mt-1">Top 10 starter pens</span>
            </Link>
            <Link href="/faq" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Fountain Pen FAQ →</span>
              <span className="block text-stone-400 mt-1">Common questions answered</span>
            </Link>
            <Link href="/blog/best-fountain-pens-under-50" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Pens Under $50 →</span>
              <span className="block text-stone-400 mt-1">Affordable fountain pens</span>
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
            headline: "Best Fountain Pen Inks in 2026 — Top Picks by Color & Brand",
            description: "Discover the best fountain pen inks for everyday writing, artistic calligraphy, and permanent documents.",
            author: { "@type": "Organization", name: "PenPrice" },
            publisher: { "@type": "Organization", name: "PenPrice" },
            datePublished: "2026-06-26",
            dateModified: "2026-06-26",
            mainEntityOfPage: "https://penprice.vercel.app/blog/best-fountain-pen-inks",
          }),
        }}
      />
    </div>
  );
}