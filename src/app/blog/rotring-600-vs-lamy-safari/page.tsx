import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rotring 600 vs Lamy Safari — Technical Pen Showdown | PenPrice",
  description:
    "Rotring 600 vs Lamy Safari compared: build quality, nib performance, design philosophy, and price. Which precision fountain pen should you buy? Price comparison across Amazon, JetPens, and Goulet Pens.",
  openGraph: {
    title: "Rotring 600 vs Lamy Safari — PenPrice",
    description: "Two iconic precision fountain pens compared. Brass vs plastic, German engineering vs Bauhaus design.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rotring 600 vs Lamy Safari — PenPrice",
    description: "Which precision fountain pen wins? Rotring 600 vs Lamy Safari compared.",
  },
};

interface ComparisonRow {
  feature: string;
  rotring: string;
  lamy: string;
}

const comparisonData: ComparisonRow[] = [
  { feature: "Price", rotring: "$99-110", lamy: "$29-30" },
  { feature: "Body Material", rotring: "Brass (heavier)", lamy: "ABS Plastic (lighter)" },
  { feature: "Nib Material", rotring: "Stainless Steel", lamy: "Stainless Steel" },
  { feature: "Nib Sizes", rotring: "EF, F, M, B", lamy: "EF, F, M, B, LH" },
  { feature: "Filling System", rotring: "Cartridge / Converter", lamy: "Cartridge / Converter (Z28)" },
  { feature: "Grip Section", rotring: "Knurled Metal", lamy: "Triangular ABS" },
  { feature: "Cap Style", rotring: "Snap Cap", lamy: "Snap Cap" },
  { feature: "Weight", rotring: "46g (heavier)", lamy: "17g (lighter)" },
  { feature: "Design", rotring: "Technical / Industrial", lamy: "Bauhaus / Minimalist" },
  { feature: "Hexagonal Barrel", rotring: "Yes", lamy: "No (triangular)" },
  { feature: "Roll Prevention", rotring: "Yes (hexagonal)", lamy: "Yes (triangular grip)" },
  { feature: "Best For", rotring: "Technical drawing, architects", lamy: "Everyday writing, students" },
];

export default function RotringVsLamyPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Rotring 600 vs Lamy Safari",
    description: "Two iconic precision fountain pens compared: build quality, nib performance, and price.",
    datePublished: "2026-06-27",
    author: { "@type": "Organization", name: "PenPrice", url: "https://penprice.vercel.app" },
    publisher: { "@type": "Organization", name: "PenPrice", url: "https://penprice.vercel.app" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is the Rotring 600 worth the extra money over the Lamy Safari?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you value brass construction, a heavier pen feel, and a technical aesthetic, the Rotring 600 is worth the premium. For everyday writing at an accessible price, the Lamy Safari offers better value with its ergonomic grip and lighter weight.",
        },
      },
      {
        "@type": "Question",
        name: "Which pen is better for technical drawing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Rotring 600 is specifically designed for technical work. Its precise nib, brass body for stability, and hexagonal barrel that won't roll off a drafting table make it the clear choice for architects and engineers.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-stone-400 mb-8">
          <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-800 transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-stone-500">Rotring 600 vs Lamy Safari</span>
        </nav>

        <article>
          <header className="mb-10">
            <span className="text-xs px-2.5 py-0.5 rounded bg-blue-50 text-blue-800 mb-3 inline-block">Comparison</span>
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Rotring 600 vs Lamy Safari
            </h1>
            <p className="text-lg text-stone-500">
              Two precision-engineered German fountain pens with very different philosophies. The Rotring 600 is a brass-bodied technical instrument. The Lamy Safari is a lightweight Bauhaus design icon. Both are excellent — but for different people.
            </p>
          </header>

          {/* Quick Verdict */}
          <div className="bg-amber-950/30 border border-amber-900/50 rounded p-6 mb-10">
            <h2 className="text-lg font-bold text-blue-800 mb-3">Quick Verdict</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-stone-700 text-sm">
              <div>
                <strong className="text-stone-900">Choose the Rotring 600 if:</strong>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>You want a heavy, premium-feeling pen</li>
                  <li>You do technical drawing or architectural work</li>
                  <li>You prefer a knurled metal grip</li>
                  <li>You want a pen that says &quot;precision&quot;</li>
                </ul>
              </div>
              <div>
                <strong className="text-stone-900">Choose the Lamy Safari if:</strong>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>You write for long periods (lighter weight)</li>
                  <li>You want the best value fountain pen</li>
                  <li>You like the ergonomic triangular grip</li>
                  <li>You want a left-handed nib option</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Price Comparison */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Price Comparison</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-stone-200 rounded p-5">
                <h3 className="font-bold text-blue-800 mb-3">Rotring 600</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between text-stone-700">
                    <span>Amazon</span><span className="text-stone-900 font-medium">$99.99</span>
                  </li>
                  <li className="flex justify-between text-stone-700">
                    <span>JetPens</span><span className="text-stone-900 font-medium">$110.00</span>
                  </li>
                  <li className="flex justify-between text-stone-700">
                    <span>MSRP</span><span className="text-stone-900 font-medium">$120.00</span>
                  </li>
                </ul>
                <Link href="/brands/rotring/600" className="block mt-3 text-center text-sm text-blue-800 hover:underline">
                  View full price history →
                </Link>
              </div>
              <div className="bg-white border border-stone-200 rounded p-5">
                <h3 className="font-bold text-blue-800 mb-3">Lamy Safari</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between text-stone-700">
                    <span>Amazon</span><span className="text-stone-900 font-medium">$29.99</span>
                  </li>
                  <li className="flex justify-between text-stone-700">
                    <span>JetPens</span><span className="text-stone-900 font-medium">$30.00</span>
                  </li>
                  <li className="flex justify-between text-stone-700">
                    <span>Goulet Pens</span><span className="text-stone-900 font-medium">$30.00</span>
                  </li>
                </ul>
                <Link href="/brands/lamy/safari" className="block mt-3 text-center text-sm text-blue-800 hover:underline">
                  View full price history →
                </Link>
              </div>
            </div>
          </section>

          {/* Feature Comparison Table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Feature Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-stone-200">
                    <th className="text-left py-3 px-4 text-stone-500 font-medium">Feature</th>
                    <th className="text-left py-3 px-4 text-blue-800 font-medium">Rotring 600</th>
                    <th className="text-left py-3 px-4 text-blue-800 font-medium">Lamy Safari</th>
                  </tr>
                </thead>
                <tbody className="text-stone-700">
                  {comparisonData.map((row) => (
                    <tr key={row.feature} className="border-b border-stone-200">
                      <td className="py-3 px-4 font-medium text-stone-900">{row.feature}</td>
                      <td className="py-3 px-4">{row.rotring}</td>
                      <td className="py-3 px-4">{row.lamy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">FAQ</h2>
            <div className="space-y-4">
              <details className="bg-white border border-stone-200 rounded">
                <summary className="p-4 font-medium text-stone-800 cursor-pointer hover:text-blue-800 transition-colors">
                  Is the Rotring 600 worth the extra money over the Lamy Safari?
                </summary>
                <div className="px-4 pb-4 text-stone-700 text-sm">
                  If you value brass construction, a heavier pen feel, and a technical aesthetic, the Rotring 600 is worth the premium. For everyday writing at an accessible price, the Lamy Safari offers better value with its ergonomic grip and lighter weight.
                </div>
              </details>
              <details className="bg-white border border-stone-200 rounded">
                <summary className="p-4 font-medium text-stone-800 cursor-pointer hover:text-blue-800 transition-colors">
                  Which pen is better for technical drawing?
                </summary>
                <div className="px-4 pb-4 text-stone-700 text-sm">
                  The Rotring 600 is specifically designed for technical work. Its precise nib, brass body for stability, and hexagonal barrel that won&apos;t roll off a drafting table make it the clear choice for architects and engineers.
                </div>
              </details>
            </div>
          </section>

          {/* Related */}
          <section className="border-t border-stone-200 pt-8">
            <h2 className="text-lg font-bold text-stone-700 mb-4">Related Comparisons</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/blog/lamy-safari-vs-pilot-metropolitan" className="block bg-white border border-stone-200 rounded p-4 hover:border-amber-900/50 transition-colors">
                <span className="text-sm font-medium text-stone-900">Lamy Safari vs Pilot Metropolitan</span>
                <span className="block text-xs text-stone-500 mt-1">The two best beginner pens</span>
              </Link>
              <Link href="/blog/twsbi-eco-vs-pilot-metropolitan" className="block bg-white border border-stone-200 rounded p-4 hover:border-amber-900/50 transition-colors">
                <span className="text-sm font-medium text-stone-900">TWSBI Eco vs Pilot Metropolitan</span>
                <span className="block text-xs text-stone-500 mt-1">Piston filler vs cartridge</span>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
