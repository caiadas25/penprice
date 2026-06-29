import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Fountain Pens for Drawing and Sketching in 2026 — Artist Guide | PenPrice",
  description:
    "Find the best fountain pens for drawing, sketching, and illustration. Compare prices on Lamy Safari, Pilot Parallel, Noodler's flex nibs, and more. Includes nib recommendations for line art and cross-hatching.",
  openGraph: {
    title: "Best Fountain Pens for Drawing and Sketching 2026",
    description:
      "The definitive guide to fountain pens for artists. Line art, cross-hatching, shading, and calligraphy with fountain pens.",
    type: "article",
  },
};

interface DrawingPen {
  name: string;
  slug: string;
  brandSlug: string;
  priceFrom: number;
  category: string;
  why: string;
}

const drawingPens: DrawingPen[] = [
  {
    name: "Lamy Safari",
    slug: "safari",
    brandSlug: "lamy",
    priceFrom: 29.99,
    category: "Best for Line Art",
    why: "The fine and extra-fine nibs produce consistent, clean lines perfect for technical drawing and illustration. The ergonomic triangular grip reduces hand fatigue during long sketching sessions. Interchangeable nibs let you switch between line weights without changing pens.",
  },
  {
    name: "Pilot Parallel",
    slug: "parallel",
    brandSlug: "pilot",
    priceFrom: 24.00,
    category: "Best for Calligraphy & Lettering",
    why: "Two flat plates create a unique calligraphic line from 1.5mm to 6.0mm. Invaluable for lettering artists and anyone who wants dramatic thick-thin variation. The broad nib can also produce incredible effects in ink wash drawings.",
  },
  {
    name: "Noodler's Ahab",
    slug: "ahab",
    brandSlug: "noodlers",
    priceFrom: 23.00,
    category: "Best Flex Nib",
    why: "A true flex nib that produces dramatic line variation with pressure. Perfect for expressive sketching, calligraphic flourishes, and ink illustrations. The ebonite feed keeps up with heavy ink flow during flex strokes.",
  },
  {
    name: "Lamy 2000",
    slug: "2000",
    brandSlug: "lamy",
    priceFrom: 179.99,
    category: "Best Premium Drawing Pen",
    why: "The 14k gold nib is springy and responsive, giving you natural line variation without a flex mechanism. The hooded nib design prevents ink from drying out during long drawing sessions. A pen that will last a lifetime of art.",
  },
  {
    name: "Pilot Custom 823",
    slug: "custom-823",
    brandSlug: "pilot",
    priceFrom: 289.99,
    category: "Best Ink Capacity",
    why: "The vacuum filling system holds a massive amount of ink, meaning you can sketch for hours without refilling. The translucent amber body lets you see remaining ink. The #15 gold nib is exceptionally smooth for long drawing sessions.",
  },
  {
    name: "TWSBI Eco",
    slug: "eco",
    brandSlug: "twsbi",
    priceFrom: 31.99,
    category: "Best Value Drawing Pen",
    why: "The piston filler holds nearly twice as much ink as a cartridge pen. The demonstrator body shows your ink level at a glance. At ~$32, it's the best value for artists who want a reliable, high-capacity pen for sketching.",
  },
  {
    name: "Platinum 3776 Century",
    slug: "3776",
    brandSlug: "platinum",
    priceFrom: 176.00,
    category: "Best for Fine Detail",
    why: "The 14k gold nib is available in ultra-fine sizes (ULTRA EXTRA FINE, 0.2mm) that are ideal for detailed architectural drawing, stippling, and fine line illustration. The Slip & Seal cap prevents the nib from drying out even if you forget to cap it.",
  },
  {
    name: "Kaweco Sport",
    slug: "sport",
    brandSlug: "kaweco",
    priceFrom: 25.00,
    category: "Best Pocket Sketching Pen",
    why: "The octagonal cap prevents rolling off your sketchpad. At 4.1 inches capped, it fits in any pocket or pencil case. Perfect for urban sketching, travel journals, and plein air drawing. The clip accessory lets you attach it to a notebook.",
  },
];

const nibGuide = [
  {
    nib: "Extra Fine (EF)",
    line: "0.2–0.3mm",
    bestFor: "Fine detail, stippling, architectural drawing, hatching",
    example: "Platinum 3776 Century EF, Pilot Custom 74 EF",
  },
  {
    nib: "Fine (F)",
    line: "0.3–0.5mm",
    bestFor: "General sketching, line art, writing and drawing combos",
    example: "Lamy Safari F, Pilot Metropolitan F",
  },
  {
    nib: "Medium (M)",
    line: "0.5–0.7mm",
    bestFor: "Bold outlines, expressive sketching, ink wash prep",
    example: "Lamy Safari M, TWSBI Eco M",
  },
  {
    nib: "Broad (B) / Stub",
    line: "0.7–1.5mm",
    bestFor: "Lettering, headlines, dramatic thick-thin variation",
    example: "Pilot Parallel, Lamy Safari 1.1 Stub",
  },
  {
    nib: "Flex",
    line: "Variable",
    bestFor: "Calligraphic flourishes, expressive illustration, vintage lettering",
    example: "Noodler's Ahab, Pilot Falcon (soft)",
  },
];

const inks = [
  {
    name: "Noodler's Baystate Blue",
    note: "Waterproof and permanent. The go-to for artists who need archival-quality ink. Stains everything it touches, so use it in a pen you don't mind sacrificing.",
  },
  {
    name: "Platinum Carbon Black",
    note: "Archival-quality black with excellent waterproof properties. Perfect for ink-and-wash techniques. Flows well in most pens without clogging.",
  },
  {
    name: "De Atramentis Document Ink",
    note: "Available in multiple colors, all waterproof and archival. Excellent for mixed media work with watercolors.",
  },
  {
    name: "Pilot Iroshizuku Take-sumi",
    note: "A beautiful bamboo charcoal black with subtle purple undertones. Not waterproof, but gorgeous for sketching and journaling.",
  },
];

const faqs = [
  {
    q: "Can I use fountain pens for ink wash and watercolor?",
    a: "Yes, but use waterproof ink like Noodler's Baystate Blue or Platinum Carbon Black. After drawing your lines, you can paint over them with watercolors without smearing. Non-waterproof inks will bleed and run.",
  },
  {
    q: "What nib size is best for sketching?",
    a: "Fine (F) is the most versatile for general sketching. Extra Fine (EF) is better for detailed work and small notebooks. Medium (M) works well for bold outlines. Many artists carry two pens: an EF for details and a medium or broad for fills.",
  },
  {
    q: "How do I prevent my fountain pen from drying out while drawing?",
    a: "Always recap the pen when not actively drawing, even for 30 seconds. Platinum's Slip & Seal cap system is excellent at preventing drying. Avoid leaving pens uncapped in dry or air-conditioned environments. If your pen does dry out, flushing with water usually restores it.",
  },
  {
    q: "Are fountain pens good for urban sketching?",
    a: "Absolutely. Fountain pens are ideal for urban sketching because they produce consistent lines without pressure, work on a variety of papers, and don't smudge as much as markers. The Kaweco Sport and Lamy Safari are popular choices due to their portability and reliability.",
  },
];

export default function DrawingGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <nav className="text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-blue-900 transition-colors">PenPrice</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-900 transition-colors">Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-600">Best Fountain Pens for Drawing</span>
      </nav>

      <article>
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Best Fountain Pens for Drawing and Sketching in 2026
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            Fountain pens aren&apos;t just for writing. Artists, illustrators, and urban sketchers use them for
            everything from fine-line technical drawings to expressive ink illustrations. Here are the 8 best
            fountain pens for drawing, with price comparisons and nib recommendations.
          </p>
          <div className="flex items-center gap-3 mt-4 text-sm text-stone-400">
            <time>Updated June 29, 2026</time>
            <span>·</span>
            <span>8 min read</span>
          </div>
        </header>

        {/* Pen Recommendations */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Top 8 Fountain Pens for Artists</h2>
          <div className="space-y-6">
            {drawingPens.map((pen, i) => (
              <div
                key={pen.name}
                className="p-6 rounded-lg border border-stone-200 bg-white hover:border-stone-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-medium text-blue-800 bg-blue-50 px-2 py-0.5 rounded">
                      {pen.category}
                    </span>
                    <h3 className="text-lg font-semibold text-stone-900 mt-2">
                      <Link
                        href={`/brands/${pen.brandSlug}/${pen.slug}`}
                        className="hover:text-blue-900 transition-colors"
                      >
                        {pen.name}
                      </Link>
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-blue-800">from ${pen.priceFrom.toFixed(2)}</span>
                  </div>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">{pen.why}</p>
                <Link
                  href={`/brands/${pen.brandSlug}/${pen.slug}`}
                  className="inline-flex items-center gap-1 mt-3 text-sm text-blue-800 hover:text-blue-900 font-medium transition-colors"
                >
                  Compare prices <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Nib Guide */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Nib Size Guide for Drawing</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="text-left py-3 px-4 font-semibold text-stone-700">Nib Size</th>
                  <th className="text-left py-3 px-4 font-semibold text-stone-700">Line Width</th>
                  <th className="text-left py-3 px-4 font-semibold text-stone-700">Best For</th>
                  <th className="text-left py-3 px-4 font-semibold text-stone-700">Example Pens</th>
                </tr>
              </thead>
              <tbody>
                {nibGuide.map((row) => (
                  <tr key={row.nib} className="border-b border-stone-100">
                    <td className="py-3 px-4 font-medium text-stone-900">{row.nib}</td>
                    <td className="py-3 px-4 text-stone-600">{row.line}</td>
                    <td className="py-3 px-4 text-stone-600">{row.bestFor}</td>
                    <td className="py-3 px-4 text-stone-500 text-xs">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Best Inks for Drawing */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Best Inks for Drawing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {inks.map((ink) => (
              <div key={ink.name} className="p-4 rounded-lg border border-stone-200 bg-white">
                <h3 className="font-semibold text-stone-900 mb-1">{ink.name}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{ink.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-5 rounded-lg border border-stone-200 bg-white">
                <h3 className="font-semibold text-stone-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16 p-6 rounded-lg border border-stone-200 bg-stone-50">
          <h2 className="text-lg font-semibold text-stone-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <Link href="/blog/fountain-pen-nib-sizes-explained" className="text-blue-800 hover:text-blue-900 transition-colors">
              Fountain Pen Nib Sizes Explained →
            </Link>
            <Link href="/blog/best-fountain-pens-for-calligraphy" className="text-blue-800 hover:text-blue-900 transition-colors">
              Best Fountain Pens for Calligraphy →
            </Link>
            <Link href="/blog/fountain-pen-maintenance-guide" className="text-blue-800 hover:text-blue-900 transition-colors">
              Fountain Pen Maintenance Guide →
            </Link>
            <Link href="/blog/fountain-pen-ink-comparison-guide" className="text-blue-800 hover:text-blue-900 transition-colors">
              Ink Comparison Guide →
            </Link>
            <Link href="/blog/best-fountain-pens-for-beginners" className="text-blue-800 hover:text-blue-900 transition-colors">
              Best Fountain Pens for Beginners →
            </Link>
            <Link href="/blog/best-fountain-pens-under-50" className="text-blue-800 hover:text-blue-900 transition-colors">
              Best Fountain Pens Under $50 →
            </Link>
          </div>
        </section>
      </article>

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Best Fountain Pens for Drawing and Sketching in 2026",
            description:
              "The definitive guide to fountain pens for artists. Line art, cross-hatching, shading, and calligraphy with fountain pens.",
            datePublished: "2026-06-29",
            dateModified: "2026-06-29",
            author: {
              "@type": "Organization",
              name: "PenPrice",
            },
            publisher: {
              "@type": "Organization",
              name: "PenPrice",
              url: "https://penprice.vercel.app",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://penprice.vercel.app/blog/best-fountain-pens-for-drawing",
            },
          }),
        }}
      />
    </div>
  );
}
