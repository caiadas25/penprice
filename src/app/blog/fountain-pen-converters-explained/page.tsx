import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fountain Pen Converters Explained — Complete Guide | PenPrice",
  description:
    "What is a fountain pen converter? How do they work, which ones fit your pen, and which brand makes the best converter? Complete guide to cartridge/converter fountain pen filling systems.",
  openGraph: {
    title: "Fountain Pen Converters Explained — Complete Guide",
    description:
      "Everything you need to know about fountain pen converters. Compatible brands, filling capacity, and how to choose the right one.",
    type: "article",
  },
};

const converterBrands = [
  { brand: "Pilot", model: "CON-40", type: "Twist", capacity: "~0.4ml", compatible: "Pilot Metropolitan, Kakuno, Prera, Custom 74, and most Pilot cartridge pens", price: "$6-8" },
  { brand: "Pilot", model: "CON-70", type: "Push-button", capacity: "~1.0ml", compatible: "Pilot Custom 743, Custom 823 (when using cartridges), Custom Heritage 912", price: "$12-15" },
  { brand: "Lamy", model: "Z28", type: "Twist", capacity: "~0.7ml", compatible: "Lamy Safari, AL-Star, Studio, Aion, and all Lamy cartridge pens", price: "$7-10" },
  { brand: "Sailor", model: "Standard", type: "Twist", capacity: "~0.4ml", compatible: "Sailor Pro Gear, 1911, Shikiori, and most Sailor cartridge pens", price: "$8-12" },
  { brand: "Platinum", model: "Standard", type: "Twist", capacity: "~0.5ml", compatible: "Platinum 3776, President, Procyon, and Platinum cartridge pens (uses proprietary cartridge)", price: "$8-10" },
  { brand: "TWSBI", model: "None needed", type: "Piston built-in", capacity: "~1.7ml", compatible: "TWSBI Eco, Diamond 580, Vac 700R — all piston fillers, no converter needed", price: "N/A" },
  { brand: "Kaweco", model: "Standard", type: "Piston twist", capacity: "~0.7ml", compatible: "Kaweco Sport, Dia 2, AL Sport, and most Kaweco cartridge pens", price: "$8-12" },
  { brand: "Standard", model: "International", type: "Twist", capacity: "~0.6ml", compatible: "Pelikan, Faber-Castell, Montegrappa, Diplomat, Cross, Rotring, and many European brands", price: "$5-10" },
];

export default function ConvertersExplainedPage() {
  const faqItems = [
    {
      question: "What does a fountain pen converter do?",
      answer: "A converter lets you use bottled ink in a cartridge/converter fountain pen. It replaces the disposable cartridge and can be refilled from any bottle of fountain pen ink. This gives you access to hundreds of ink colors and is more economical than buying cartridges.",
    },
    {
      question: "Are fountain pen converters universal?",
      answer: "No. Each pen brand typically has its own proprietary converter. Pilot uses CON-40/CON-70, Lamy uses Z28, Sailor and Platinum each have their own. The Standard International converter is the closest thing to universal and works with many European brands (Pelikan, Faber-Castell, Kaweco, Montegrappa, etc.), but it won't fit Pilot, Lamy, Sailor, or Platinum pens.",
    },
    {
      question: "Which converter holds the most ink?",
      answer: "Among converters, the Pilot CON-70 holds the most at approximately 1.0ml. However, piston-filling pens like the TWSBI Eco (1.7ml), Pilot Custom 823 (vacuum, ~1.2ml), and Lamy 2000 (piston, ~1.4ml) hold far more ink than any converter because their entire barrel serves as the ink reservoir.",
    },
    {
      question: "Should I use a converter or bottled ink?",
      answer: "If you want to explore different ink colors, a converter is essential. Bottled ink is also much cheaper per milliliter than cartridges. The main trade-off is convenience — cartridges are faster to swap, but converters let you use the vast world of fountain pen inks from brands like Iroshizuku, Diamine, Waterman, and Noodler's.",
    },
    {
      question: "How do I fill a fountain pen converter?",
      answer: "Submerge the nib and feed into your bottled ink (past the breather hole). Twist the converter's knob to draw ink in. For piston converters: twist to extend the piston, submerge, then twist back to draw ink. For push-button converters: push the button, submerge, then release. Repeat 2-3 times to get maximum capacity and remove air bubbles.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-800 transition-colors">Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-500">Fountain Pen Converters</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-blue-800 text-sm font-medium mb-2">Technical Guide — Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Fountain Pen Converters Explained
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            A converter lets you use bottled ink in a cartridge fountain pen. Here&apos;s everything you need to know about compatibility, capacity, and how to choose the right one for your pen.
          </p>
        </header>

        {/* What is a Converter */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-stone-900 mb-4">What Is a Fountain Pen Converter?</h2>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              A converter is a small, refillable ink reservoir that fits into a cartridge/converter fountain pen in place of a disposable cartridge. It allows you to draw ink directly from a bottle, giving you access to hundreds of ink colors and saving money over time.
            </p>
            <p>
              Most fountain pens fall into two categories: <strong>piston fillers</strong> (like the TWSBI Eco or Pilot Custom 823) where the entire barrel fills with ink, and <strong>cartridge/converter pens</strong> (like the Pilot Metropolitan or Lamy Safari) where you use either a disposable cartridge or a converter.
            </p>
            <p>
              Converters typically hold less ink than cartridges (about 0.4-0.7ml vs 0.7-1.0ml for a standard cartridge), but the trade-off is access to the entire world of bottled fountain pen inks.
            </p>
          </div>
        </section>

        {/* Compatibility Table */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-stone-900 mb-4">Converter Compatibility Guide</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
              <thead className="bg-stone-100">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-stone-700">Pen Brand</th>
                  <th className="text-left px-4 py-3 font-semibold text-stone-700">Converter</th>
                  <th className="text-left px-4 py-3 font-semibold text-stone-700">Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-stone-700">Capacity</th>
                  <th className="text-right px-4 py-3 font-semibold text-stone-700">Price</th>
                </tr>
              </thead>
              <tbody>
                {converterBrands.map((c, i) => (
                  <tr key={i} className="border-t border-stone-100 hover:bg-stone-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-stone-900">{c.brand}</td>
                    <td className="px-4 py-3 text-stone-600">{c.model}</td>
                    <td className="px-4 py-3 text-stone-500">{c.type}</td>
                    <td className="px-4 py-3 text-stone-500">{c.capacity}</td>
                    <td className="px-4 py-3 text-right text-blue-800 font-medium">{c.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Converter vs Cartridge */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-stone-900 mb-4">Converter vs Cartridge vs Piston Filler</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-lg border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Cartridge</h3>
              <ul className="text-sm text-stone-600 space-y-1">
                <li>✓ Most convenient</li>
                <li>✓ No mess</li>
                <li>✓ Travel-friendly</li>
                <li>✗ Limited ink colors</li>
                <li>✗ More expensive per ml</li>
                <li>✗ More plastic waste</li>
              </ul>
            </div>
            <div className="p-5 rounded-lg border border-blue-200 bg-blue-50">
              <h3 className="font-bold text-blue-900 mb-2">Converter</h3>
              <ul className="text-sm text-stone-600 space-y-1">
                <li>✓ Hundreds of ink colors</li>
                <li>✓ Cheaper per ml</li>
                <li>✓ Less waste</li>
                <li>✗ Lower capacity</li>
                <li>✗ Slightly messier</li>
                <li>✗ Brand-specific</li>
              </ul>
            </div>
            <div className="p-5 rounded-lg border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Piston Filler</h3>
              <ul className="text-sm text-stone-600 space-y-1">
                <li>✓ Highest capacity</li>
                <li>✓ Most ink colors</li>
                <li>✓ Built-in, no extra part</li>
                <li>✗ Harder to clean</li>
                <li>✗ Can&apos;t use cartridges</li>
                <li>✗ Often higher pen price</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Fill */}
        <section className="mb-12 p-6 rounded-lg bg-stone-50 border border-stone-200">
          <h2 className="text-xl font-bold text-stone-900 mb-4">How to Fill a Converter</h2>
          <div className="space-y-3 text-stone-600">
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-sm font-bold flex items-center justify-center">1</span>
              <p>Remove the converter from the pen barrel and attach it to the grip section (where the nib is).</p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-sm font-bold flex items-center justify-center">2</span>
              <p>Submerge the nib and feed fully into your bottled ink. The breather hole (on the nib) must be below the ink surface.</p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-sm font-bold flex items-center justify-center">3</span>
              <p>For twist converters: turn the knob clockwise to draw ink in. For push-button converters: push the button, then release.</p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-sm font-bold flex items-center justify-center">4</span>
              <p>Lift the pen out of the ink and wipe the nib and grip section with a lint-free cloth or paper towel.</p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-sm font-bold flex items-center justify-center">5</span>
              <p>Repeat 2-3 times to maximize ink capacity and push out air bubbles. Then reassemble the pen.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-stone-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqItems.map((faq, i) => (
              <div key={i}>
                <h3 className="font-semibold text-stone-900 mb-2">{faq.question}</h3>
                <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <section className="p-6 rounded-lg bg-blue-50 border border-blue-100">
          <h2 className="font-bold text-stone-900 mb-3">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-2">
            <Link href="/blog/fountain-pen-filling-systems-explained" className="text-sm text-blue-800 hover:underline">Filling Systems Explained</Link>
            <Link href="/blog/best-fountain-pen-inks" className="text-sm text-blue-800 hover:underline">Best Fountain Pen Inks</Link>
            <Link href="/blog/fountain-pen-maintenance-guide" className="text-sm text-blue-800 hover:underline">Pen Maintenance Guide</Link>
            <Link href="/blog/fountain-pen-nib-sizes-explained" className="text-sm text-blue-800 hover:underline">Nib Sizes Explained</Link>
            <Link href="/blog/best-fountain-pens-for-beginners" className="text-sm text-blue-800 hover:underline">Best Pens for Beginners</Link>
            <Link href="/blog/fountain-pen-ink-comparison-guide" className="text-sm text-blue-800 hover:underline">Ink Comparison Guide</Link>
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
            headline: "Fountain Pen Converters Explained — Complete Guide",
            description: "What is a fountain pen converter? How do they work, which ones fit your pen, and which brand makes the best converter?",
            datePublished: "2026-06-30",
            dateModified: "2026-06-30",
            author: { "@type": "Organization", name: "PenPrice" },
            publisher: { "@type": "Organization", name: "PenPrice" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
