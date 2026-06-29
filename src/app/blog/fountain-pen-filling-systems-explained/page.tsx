import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fountain Pen Filling Systems Explained — Cartridge, Piston, Vacuum & More | PenPrice",
  description:
    "Confused by fountain pen filling systems? Our complete guide explains cartridge, converter, piston, vacuum, eyedropper, and lever fillers with pros, cons, and price comparisons.",
  openGraph: {
    title: "Fountain Pen Filling Systems Explained",
    description: "Cartridge vs piston vs vacuum vs eyedropper — which filling system is right for you?",
    type: "article",
  },
};

interface FillingSystem {
  name: string;
  icon: string;
  description: string;
  pros: string[];
  cons: string[];
  capacity: string;
  pens: { name: string; slug: string; brandSlug: string; price: number }[];
}

const systems: FillingSystem[] = [
  {
    name: "Cartridge / Converter",
    icon: "🔄",
    description:
      "The most common system. A pre-filled ink cartridge snaps into the pen, or you use a refillable converter that works like a mini piston.",
    pros: [
      "Easiest to use — snap in and go",
      "Huge ink color selection from cartridges",
      "Clean and mess-free",
      "Most beginner pens use this system",
    ],
    cons: [
      "Lower ink capacity than piston fillers",
      "Proprietary cartridges vary by brand",
      "Converter capacity is even lower",
    ],
    capacity: "0.4–0.9 mL (cartridge) / 0.4–0.7 mL (converter)",
    pens: [
      { name: "Lamy Safari", slug: "safari", brandSlug: "lamy", price: 29 },
      { name: "Pilot Metropolitan", slug: "metropolitan", brandSlug: "pilot", price: 28 },
      { name: "Kaweco Sport", slug: "sport", brandSlug: "kaweco", price: 25 },
    ],
  },
  {
    name: "Piston Filler",
    icon: "⛽",
    description:
      "A built-in mechanism twists to draw ink directly from a bottle. No cartridges or converters needed. The gold standard for ink capacity.",
    pros: [
      "Largest ink capacity of any filling system",
      "No proprietary cartridges — fill from any bottle",
      "Satisfying mechanical feel",
      "Fewer parts to break or lose",
    ],
    cons: [
      "Must use bottled ink (more mess)",
      "Harder to clean between ink changes",
      "Usually more expensive than cartridge pens",
      "Nib cannot be easily swapped on some models",
    ],
    capacity: "1.0–2.0 mL",
    pens: [
      { name: "TWSBI ECO", slug: "eco", brandSlug: "twsbi", price: 32 },
      { name: "Lamy 2000", slug: "2000", brandSlug: "lamy", price: 179 },
      { name: "Pelikan M800", slug: "m800", brandSlug: "pelikan", price: 499 },
    ],
  },
  {
    name: "Vacuum Filler",
    icon: "💉",
    description:
      "Pull a plunger at the back, push it forward, and ink floods in to fill the entire barrel. Used in flagship pens for maximum ink capacity.",
    pros: [
      "Massive ink capacity — often 2+ mL",
      "Single fill operation (no repeated twisting)",
      "No cartridge waste",
      "Cool factor",
    ],
    cons: [
      "More complex mechanism to maintain",
      "Cleaning requires full disassembly on some models",
      "Premium price tag",
      "Less common — fewer pen options",
    ],
    capacity: "1.5–3.0 mL",
    pens: [
      { name: "Pilot Custom 823", slug: "custom-823", brandSlug: "pilot", price: 289 },
      { name: "TWSBI Vac 700R", slug: "vac-700r", brandSlug: "twsbi", price: 63 },
      { name: "Visconti Homo Sapiens", slug: "homo-sapiens", brandSlug: "visconti", price: 599 },
    ],
  },
  {
    name: "Eyedropper",
    icon: "🧴",
    description:
      "The entire barrel is the ink reservoir. You unscrew the pen and use an eyedropper to fill the barrel directly. Some pens (like the Preppy) can be converted.",
    pros: [
      "Maximum possible ink capacity",
      "Simplest mechanism — no moving parts",
      "Works with any ink",
      "Cheap to implement",
    ],
    cons: [
      "Can leak if not sealed properly (silicone grease needed)",
      "Ink sloshes visibly in the barrel",
      "Temperature changes can cause burping (ink dripping from nib)",
      "Messy refilling process",
    ],
    capacity: "2.0–4.0 mL",
    pens: [
      { name: "Platinum Preppy (converted)", slug: "preppy", brandSlug: "platinum", price: 7 },
      { name: "Kaweco Sport (converted)", slug: "sport", brandSlug: "kaweco", price: 25 },
    ],
  },
  {
    name: "Lever Filler",
    icon: "🔧",
    description:
      "A classic system from the early 1900s. A lever on the barrel compresses an internal rubber sac. Release the lever, and the sac expands to draw in ink.",
    pros: [
      "Vintage aesthetic and charm",
      "Easy to operate — one lever pull",
      "Moderate ink capacity",
      "Fun to use",
    ],
    cons: [
      "Rubber sac degrades over time and needs replacement",
      "Less common in modern pens",
      "Lower ink capacity than piston/vacuum",
      "Can be messy to maintain",
    ],
    capacity: "0.7–1.2 mL",
    pens: [
      { name: "Esterbrook Estie", slug: "estie", brandSlug: "esterbrook", price: 175 },
    ],
  },
];

export default function FillingSystemsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-800 transition-colors">Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-500">Filling Systems Explained</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-blue-800 text-sm font-medium mb-2">Fountain Pen Guide — Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Fountain Pen Filling Systems Explained
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            Confused by cartridge vs piston vs vacuum? This guide breaks down every major filling system,
            compares ink capacities, and helps you pick the right one for your writing style.
          </p>
        </header>

        {/* Quick Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-stone-200 rounded overflow-hidden">
              <thead>
                <tr className="bg-stone-100 text-stone-700">
                  <th className="px-4 py-3 text-left">System</th>
                  <th className="px-4 py-3 text-left">Ink Capacity</th>
                  <th className="px-4 py-3 text-left">Ease of Use</th>
                  <th className="px-4 py-3 text-left">Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="bg-white">
                  <td className="px-4 py-3 text-stone-900 font-medium">Cartridge/Converter</td>
                  <td className="px-4 py-3 text-stone-500">0.4–0.9 mL</td>
                  <td className="px-4 py-3 text-green-400">★★★★★</td>
                  <td className="px-4 py-3 text-stone-500">$</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-stone-900 font-medium">Piston</td>
                  <td className="px-4 py-3 text-stone-500">1.0–2.0 mL</td>
                  <td className="px-4 py-3 text-yellow-400">★★★★☆</td>
                  <td className="px-4 py-3 text-stone-500">$$–$$$$</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-stone-900 font-medium">Vacuum</td>
                  <td className="px-4 py-3 text-stone-500">1.5–3.0 mL</td>
                  <td className="px-4 py-3 text-yellow-400">★★★☆☆</td>
                  <td className="px-4 py-3 text-stone-500">$$$–$$$$</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-stone-900 font-medium">Eyedropper</td>
                  <td className="px-4 py-3 text-stone-500">2.0–4.0 mL</td>
                  <td className="px-4 py-3 text-orange-400">★★☆☆☆</td>
                  <td className="px-4 py-3 text-stone-500">$</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-stone-900 font-medium">Lever</td>
                  <td className="px-4 py-3 text-stone-500">0.7–1.2 mL</td>
                  <td className="px-4 py-3 text-green-400">★★★★☆</td>
                  <td className="px-4 py-3 text-stone-500">$$–$$$</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Sections */}
        {systems.map((system) => (
          <section key={system.name} className="mb-12 p-6 rounded border border-stone-200 bg-white">
            <h2 className="text-2xl font-bold text-stone-900 mb-2 flex items-center gap-2">
              <span>{system.icon}</span> {system.name}
            </h2>
            <p className="text-stone-500 mb-4">{system.description}</p>
            <p className="text-sm text-blue-800/80 mb-4">Capacity: {system.capacity}</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="text-sm font-bold text-green-400 mb-2">✅ PROS</h3>
                <ul className="space-y-1 text-sm text-stone-500">
                  {system.pros.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-red-400 mb-2">❌ CONS</h3>
                <ul className="space-y-1 text-sm text-stone-500">
                  {system.cons.map((c) => (
                    <li key={c}>• {c}</li>
                  ))}
                </ul>
              </div>
            </div>

            <h3 className="text-sm font-bold text-stone-700 mb-2">Popular Pens with This System</h3>
            <div className="flex flex-wrap gap-2">
              {system.pens.map((pen) => (
                <Link
                  key={pen.slug}
                  href={`/brands/${pen.brandSlug}/${pen.slug}`}
                  className="px-3 py-1 rounded bg-stone-100 text-sm text-stone-700 hover:bg-blue-50 hover:text-blue-800 transition-all"
                >
                  {pen.name} — from ${pen.price}
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* Internal Links */}
        <section className="border-t border-stone-200 pt-8">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/best-fountain-pens-for-beginners" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Fountain Pens for Beginners →</span>
              <span className="block text-stone-400 mt-1">Top 10 pens to start your journey</span>
            </Link>
            <Link href="/blog/best-fountain-pens-under-50" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Fountain Pens Under $50 →</span>
              <span className="block text-stone-400 mt-1">Great pens at every price point</span>
            </Link>
            <Link href="/faq" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Fountain Pen FAQ →</span>
              <span className="block text-stone-400 mt-1">Answers to common questions</span>
            </Link>
            <Link href="/brands/twsbi/eco" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">TWSBI ECO Price Comparison →</span>
              <span className="block text-stone-400 mt-1">Best value piston filler</span>
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
            headline: "Fountain Pen Filling Systems Explained — Cartridge, Piston, Vacuum & More",
            description: "Confused by fountain pen filling systems? Our complete guide explains cartridge, converter, piston, vacuum, eyedropper, and lever fillers.",
            author: { "@type": "Organization", name: "PenPrice" },
            publisher: { "@type": "Organization", name: "PenPrice" },
            datePublished: "2026-06-26",
            dateModified: "2026-06-26",
            mainEntityOfPage: "https://penprice.vercel.app/blog/fountain-pen-filling-systems-explained",
          }),
        }}
      />
    </div>
  );
}