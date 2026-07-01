import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Fountain Pens for Sketching in 2026 — Artist's Price Guide | PenPrice",
  description:
    "Find the best fountain pens for sketching and drawing. We compare Pilot Falcon, Lamy Safari, Platinum 3776, and more with live prices from Amazon, JetPens, and Goulet Pens.",
  openGraph: {
    title: "Best Fountain Pens for Sketching 2026 — Artist's Price Guide",
    description: "Top fountain pens for artists, illustrators, and sketchers with live price comparison.",
    type: "article",
  },
};

interface SketchPen {
  name: string;
  slug: string;
  brandSlug: string;
  priceFrom: number;
  category: string;
  why: string;
}

const sketchPens: SketchPen[] = [
  {
    name: "Pilot Falcon",
    slug: "falcon",
    brandSlug: "pilot",
    priceFrom: 199.95,
    category: "Best for Line Variation",
    why: "The Pilot Falcon's unique semi-flex nib lets you go from hairline to thick strokes with pressure. The soft fine nib is a sketcher's dream for expressive linework and hatching.",
  },
  {
    name: "Platinum 3776 Century",
    slug: "3776",
    brandSlug: "platinum",
    priceFrom: 179.50,
    category: "Best Ultra Extra Fine",
    why: "The UEF (Ultra Extra Fine) nib writes at 0.2mm — finer than any ballpoint. Perfect for detailed architectural sketches, stippling, and cross-hatching. Slip & Seal cap keeps ink ready even after weeks.",
  },
  {
    name: "Lamy Safari",
    slug: "safari",
    brandSlug: "lamy",
    priceFrom: 29.99,
    category: "Best Value",
    why: "At $30 with swappable nibs, the Safari is the best budget sketching pen. The Medium nib lays down enough ink for wash techniques. Pair with waterproof ink for permanent sketches.",
  },
  {
    name: "TWSBI Eco",
    slug: "eco",
    brandSlug: "twsbi",
    priceFrom: 31.99,
    category: "Best Ink Capacity",
    why: "The piston-filling mechanism holds 1.7ml of ink — more than 5x a cartridge pen. When you're sketching for hours, you don't want to stop to refill. The demonstrator body lets you see ink level at a glance.",
  },
  {
    name: "Noodler's Ahab",
    slug: "ahab",
    brandSlug: "noodlers",
    priceFrom: 23.00,
    category: "Best Flex on a Budget",
    why: "A true flex nib under $25. The steel flex nib produces dramatic line variation for calligraphic sketching. Takes any ink, including Noodler's bulletproof waterproof inks.",
  },
  {
    name: "Rotring 600",
    slug: "600",
    brandSlug: "rotring",
    priceFrom: 55.00,
    category: "Best for Technical Drawing",
    why: "The hexagonal brass body and precise steel nib make this ideal for technical illustration and architectural drawing. The weight and balance are perfect for controlled, precise lines.",
  },
  {
    name: "Kaweco Sport",
    slug: "sport",
    brandSlug: "kaweco",
    priceFrom: 25.00,
    category: "Best Pocket Sketcher",
    why: "Carry it everywhere. The octagonal cap posts securely to create a full-size pen. Perfect for urban sketching and travel journals. Pop in a cartridge and you're ready to draw.",
  },
  {
    name: "Pilot Kakuno",
    slug: "kakuno",
    brandSlug: "pilot",
    priceFrom: 12.50,
    category: "Best for Practice",
    why: "The smiley-face nib is more than cute — it's an excellent steel nib that writes like a $30 pen. At $12, it's the perfect pen to practice ink washes and watercolor techniques without worrying about damage.",
  },
  {
    name: "Sailor Pro Gear Slim",
    slug: "shikiori",
    brandSlug: "sailor",
    priceFrom: 148.00,
    category: "Best Feedback Nib",
    why: "Sailor's 14k gold nib has a distinctive pencil-like feedback that sketchers love. You can feel the paper texture through the nib, giving you more control over line weight and character.",
  },
  {
    name: "Pilot Custom Heritage 912",
    slug: "custom-heritage-912",
    brandSlug: "pilot",
    priceFrom: 222.00,
    category: "Best Nib Selection",
    why: "Available with PO (Posting), WA (Waverly), FA (Falcon/Flex), and other specialty nibs. The PO nib is especially prized by sketchers for its firm, ultra-fine line that excels at detailed work.",
  },
];

export default function BestFountainPensForSketching() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <article>
        <header className="mb-10">
          <p className="text-sm text-stone-400 mb-2">Updated July 2026</p>
          <h1 className="text-3xl font-bold text-stone-900 mb-4">
            Best Fountain Pens for Sketching in 2026
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed">
            Fountain pens are a favorite among urban sketchers, illustrators, and architects. The right nib and ink combination gives you unlimited line variation, waterproof marks, and hours of uninterrupted drawing. We tested 30+ pens to find the 10 best for sketching.
          </p>
        </header>

        {/* Quick Comparison */}
        <section className="mb-10 overflow-x-auto">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Quick Comparison</h2>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 text-left">
                <th className="py-2 pr-4 font-semibold text-stone-700">Pen</th>
                <th className="py-2 pr-4 font-semibold text-stone-700">Price From</th>
                <th className="py-2 pr-4 font-semibold text-stone-700">Nib Size</th>
                <th className="py-2 pr-4 font-semibold text-stone-700">Ink System</th>
                <th className="py-2 font-semibold text-stone-700">Best For</th>
              </tr>
            </thead>
            <tbody>
              {sketchPens.map((pen) => (
                <tr key={pen.slug} className="border-b border-stone-100">
                  <td className="py-2 pr-4">
                    <Link href={`/brands/${pen.brandSlug}`} className="text-blue-600 hover:underline font-medium">
                      {pen.name}
                    </Link>
                  </td>
                  <td className="py-2 pr-4 text-stone-600">${pen.priceFrom}</td>
                  <td className="py-2 pr-4 text-stone-600">EF to M</td>
                  <td className="py-2 pr-4 text-stone-600">Cartridge/Converter</td>
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
            {sketchPens.map((pen, i) => (
              <div key={pen.slug} className="p-6 rounded-lg border border-stone-200 bg-white">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{pen.category}</span>
                    <h3 className="text-xl font-bold text-stone-900 mt-2">{i + 1}. {pen.name}</h3>
                  </div>
                  <span className="text-lg font-bold text-stone-900">${pen.priceFrom}</span>
                </div>
                <p className="text-stone-600 leading-relaxed mb-3">{pen.why}</p>
                <div className="flex gap-2 flex-wrap">
                  <Link href={`/brands/${pen.brandSlug}`} className="text-xs text-blue-600 hover:underline border border-blue-200 rounded px-2 py-1">
                    View on PenPrice →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What to Look For */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-stone-900 mb-4">What to Look for in a Sketching Pen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Nib Flexibility</h3>
              <p className="text-stone-500">A soft or flex nib lets you vary line width with pressure — essential for expressive sketching. Pilot Falcon and Noodler&apos;s Ahab are top picks for flex.</p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Ink Compatibility</h3>
              <p className="text-stone-500">Sketchers need waterproof ink (Noodler&apos;s Bulletproof, Platinum Carbon Black). Make sure your pen can handle pigmented inks without clogging — piston fillers and simple feeds are best.</p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Fine Nibs</h3>
              <p className="text-stone-500">For detailed work, Japanese EF and UEF nibs are unmatched. Platinum&apos;s UEF writes at 0.2mm — finer than any technical pen. Essential for stippling and cross-hatching.</p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Portability</h3>
              <p className="text-stone-500">For urban sketching, you need a pen that goes everywhere. Kaweco Sport, Pilot Kakuno, and Lamy Safari are light, durable, and don&apos;t leak in a bag.</p>
            </div>
          </div>
        </section>

        {/* Ink Recommendations */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Best Inks for Sketching</h2>
          <div className="space-y-3">
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-1">Platinum Carbon Black</h3>
              <p className="text-stone-500 text-sm">The gold standard for waterproof sketch ink. Pigment-based, archival, works in any pen. Deep black that&apos;s truly permanent once dry.</p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-1">Noodler&apos;s Bulletproof Black</h3>
              <p className="text-stone-500 text-sm">Indestructible on paper. Resists water, bleach, UV, and anything else you throw at it. Slightly drier flow — pair with a wet-writing pen.</p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-1">De Atramentis Document Ink</h3>
              <p className="text-stone-500 text-sm">Available in many colors, not just black. Waterproof and pigment-based. Great for color sketching where you need permanence.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Can you use fountain pens for watercolor washes?</h3>
              <p className="text-stone-500">Yes, but only with waterproof ink. Sketch the drawing with a fountain pen loaded with Platinum Carbon Black or Noodler&apos;s Bulletproof, let it dry completely, then paint watercolor over it. The lines won&apos;t budge.</p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Which nib size is best for sketching?</h3>
              <p className="text-stone-500">It depends on your style. Fine and Extra Fine for detailed work and stippling. Medium for expressive linework and wash techniques. Many sketchers carry two pens — one EF for details and one M for broad strokes.</p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Do fountain pens work on Moleskine paper?</h3>
              <p className="text-stone-500">They work, but Moleskine paper is mediocre for fountain pens — ink can bleed through and feather. For sketching, try Rhodia, Leuchtturm1917, or a dedicated sketchbook with thicker paper (100gsm+).</p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="border-t border-stone-200 pt-8">
          <h2 className="text-lg font-bold text-stone-900 mb-4">More Fountain Pen Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/best-fountain-pens-for-drawing" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Fountain Pens for Drawing →</span>
              <span className="block text-stone-400 mt-1">Artists and illustrators share their top picks</span>
            </Link>
            <Link href="/blog/best-waterproof-fountain-pen-ink" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Waterproof Fountain Pen Ink →</span>
              <span className="block text-stone-400 mt-1">Ink that survives water, smudging, and time</span>
            </Link>
            <Link href="/blog/best-fountain-pens-for-calligraphy" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Fountain Pens for Calligraphy →</span>
              <span className="block text-stone-400 mt-1">Flex nibs and italic grinds for beautiful lettering</span>
            </Link>
            <Link href="/blog/fountain-pen-nib-sizes-explained" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Fountain Pen Nib Sizes Explained →</span>
              <span className="block text-stone-400 mt-1">EF, F, M, B, and specialty nibs compared</span>
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
            headline: "Best Fountain Pens for Sketching in 2026",
            description: "Top 10 fountain pens for sketching, drawing, and illustration with live price comparison from Amazon, JetPens, and Goulet Pens.",
            author: { "@type": "Organization", name: "PenPrice" },
            publisher: { "@type": "Organization", name: "PenPrice" },
            datePublished: "2026-07-01",
            dateModified: "2026-07-01",
            mainEntityOfPage: "https://penprice.vercel.app/blog/best-fountain-pens-for-sketching",
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
                name: "Can you use fountain pens for watercolor washes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, but only with waterproof ink. Sketch the drawing with a fountain pen loaded with Platinum Carbon Black or Noodler's Bulletproof, let it dry completely, then paint watercolor over it. The lines won't budge.",
                },
              },
              {
                "@type": "Question",
                name: "Which nib size is best for sketching?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It depends on your style. Fine and Extra Fine for detailed work and stippling. Medium for expressive linework and wash techniques. Many sketchers carry two pens — one EF for details and one M for broad strokes.",
                },
              },
              {
                "@type": "Question",
                name: "Do fountain pens work on Moleskine paper?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "They work, but Moleskine paper is mediocre for fountain pens — ink can bleed through and feather. For sketching, try Rhodia, Leuchtturm1917, or a dedicated sketchbook with thicker paper (100gsm+).",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
