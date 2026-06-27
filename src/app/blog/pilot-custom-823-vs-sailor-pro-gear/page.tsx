import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pilot Custom 823 vs Sailor Pro Gear — Gold Nib Showdown | PenPrice",
  description:
    "Pilot Custom 823 vs Sailor Pro Gear compared: gold nib performance, filling systems, build quality, and price. Which Japanese gold nib pen should you buy?",
  openGraph: {
    title: "Pilot Custom 823 vs Sailor Pro Gear — PenPrice",
    description: "Two legendary Japanese gold nib fountain pens compared side by side.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilot Custom 823 vs Sailor Pro Gear — PenPrice",
    description: "Which Japanese gold nib pen wins? Pilot Custom 823 vs Sailor Pro Gear.",
  },
};

const comparisonData = [
  { feature: "Price", pilot: "$262-280", sailor: "$248-312" },
  { feature: "Nib Material", pilot: "14k Gold", sailor: "21k Gold" },
  { feature: "Nib Sizes", pilot: "F, M, B, FA", sailor: "EF, F, M, B, MF, Zoom" },
  { feature: "Filling System", pilot: "Vacuum (huge capacity)", sailor: "Cartridge / Converter" },
  { feature: "Ink Capacity", pilot: "~1.2ml (largest in class)", sailor: "~0.5ml (converter)" },
  { feature: "Body Material", pilot: "ABS resin", sailor: "PMMA resin" },
  { feature: "Weight", pilot: "30g (heavier)", sailor: "25g (lighter)" },
  { feature: "Posted Length", pilot: "149mm", sailor: "134mm" },
  { feature: "Clip Style", pilot: "Spring-loaded", sailor: "Standard" },
  { feature: "Cap Type", pilot: "Threaded (slow)", sailor: "Threaded (slow)" },
  { feature: "Nib Feedback", pilot: "Smooth, wet writer", sailor: "Pencil-like feedback" },
  { feature: "Best For", pilot: "Long writing sessions, journaling", sailor: "Daily carry, character lovers" },
];

export default function Pilot823VsSailorProGearPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Pilot Custom 823 vs Sailor Pro Gear",
    description: "Two legendary Japanese gold nib fountain pens compared side by side.",
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
        name: "Is the Pilot Custom 823 worth the extra money over the Sailor Pro Gear?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you value enormous ink capacity and a smooth, wet writing experience, the Custom 823 is worth it. The Sailor Pro Gear offers a gold nib with unique pencil-like feedback at a similar price point. Both are excellent — it comes down to writing style preference.",
        },
      },
      {
        "@type": "Question",
        name: "Which pen has a better gold nib?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Sailor Pro Gear has a 21k gold nib versus the Pilot's 14k. However, nib material alone doesn't determine quality. Pilot's 14k nibs are exceptionally smooth and consistent, while Sailor's 21k nibs offer distinctive feedback that many writers love.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-amber-400 transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-400">Pilot Custom 823 vs Sailor Pro Gear</span>
        </nav>

        <article>
          <header className="mb-10">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-900/30 text-amber-400 mb-3 inline-block">Comparison</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pilot Custom 823 vs Sailor Pro Gear
            </h1>
            <p className="text-lg text-slate-400">
              Two Japanese gold nib icons. The Pilot Custom 823 is a vacuum-filling powerhouse with huge ink capacity. The Sailor Pro Gear is a 21k gold nib classic with distinctive pencil-like feedback. Both are staples of the fountain pen community.
            </p>
          </header>

          <div className="bg-amber-950/30 border border-amber-900/50 rounded-lg p-6 mb-10">
            <h2 className="text-lg font-bold text-amber-400 mb-3">Quick Verdict</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-slate-300 text-sm">
              <div>
                <strong className="text-white">Choose the Pilot Custom 823 if:</strong>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>You write for long sessions and hate refilling</li>
                  <li>You prefer a smooth, wet writer</li>
                  <li>You want the largest ink capacity in this price range</li>
                  <li>You do a lot of journaling or correspondence</li>
                </ul>
              </div>
              <div>
                <strong className="text-white">Choose the Sailor Pro Gear if:</strong>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>You love unique nib feedback (pencil-on-paper feel)</li>
                  <li>You want a wider range of nib sizes (including Zoom)</li>
                  <li>You prefer a lighter, more compact pen</li>
                  <li>You appreciate the classic Pro Gear design</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Feature</th>
                  <th className="text-left py-3 px-4 text-amber-400 font-medium">Pilot Custom 823</th>
                  <th className="text-left py-3 px-4 text-amber-400 font-medium">Sailor Pro Gear</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {comparisonData.map((row) => (
                  <tr key={row.feature} className="border-b border-slate-800">
                    <td className="py-3 px-4 font-medium text-white">{row.feature}</td>
                    <td className="py-3 px-4">{row.pilot}</td>
                    <td className="py-3 px-4">{row.sailor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">FAQ</h2>
          <div className="space-y-4">
            <details className="bg-slate-900/50 border border-slate-800 rounded-lg">
              <summary className="p-4 font-medium text-slate-200 cursor-pointer hover:text-amber-400 transition-colors">
                Is the Pilot Custom 823 worth the extra money over the Sailor Pro Gear?
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm">
                If you value enormous ink capacity and a smooth, wet writing experience, the Custom 823 is worth it. The Sailor Pro Gear offers a gold nib with unique pencil-like feedback at a similar price point. Both are excellent.
              </div>
            </details>
            <details className="bg-slate-900/50 border border-slate-800 rounded-lg">
              <summary className="p-4 font-medium text-slate-200 cursor-pointer hover:text-amber-400 transition-colors">
                Which pen has a better gold nib?
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm">
                The Sailor Pro Gear has a 21k gold nib versus the Pilot&apos;s 14k. However, nib material alone doesn&apos;t determine quality. Pilot&apos;s 14k nibs are exceptionally smooth, while Sailor&apos;s 21k nibs offer distinctive feedback.
              </div>
            </details>
          </div>
        </section>

        <section className="border-t border-slate-800 pt-8">
          <h2 className="text-lg font-bold text-slate-300 mb-4">Related Comparisons</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/blog/lamy-safari-vs-pilot-metropolitan" className="block bg-slate-900/50 border border-slate-800 rounded-lg p-4 hover:border-amber-900/50 transition-colors">
              <span className="text-sm font-medium text-white">Lamy Safari vs Pilot Metropolitan</span>
              <span className="block text-xs text-slate-400 mt-1">The two best beginner pens</span>
            </Link>
            <Link href="/blog/twsbi-eco-vs-pilot-metropolitan" className="block bg-slate-900/50 border border-slate-800 rounded-lg p-4 hover:border-amber-900/50 transition-colors">
              <span className="text-sm font-medium text-white">TWSBI Eco vs Pilot Metropolitan</span>
              <span className="block text-xs text-slate-400 mt-1">Piston filler vs cartridge</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
