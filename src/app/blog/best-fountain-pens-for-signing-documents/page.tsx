import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Fountain Pens for Signing Documents in 2026 — Professional Picks | PenPrice",
  description:
    "The best fountain pens for signing legal documents, contracts, and official paperwork. Waterproof ink recommendations, professional-looking nibs, and price comparisons from Amazon, JetPens, and Goulet Pens.",
  openGraph: {
    title: "Best Fountain Pens for Signing Documents 2026",
    description:
      "Professional fountain pens for signing legal documents. Waterproof ink, fine nibs, and price comparisons.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fountain Pens for Signing Documents 2026",
    description:
      "Professional fountain pens for legal document signing with waterproof ink.",
  },
};

interface SigningPen {
  name: string;
  brand: string;
  priceFrom: number;
  category: string;
  why: string;
  nibRecommendation: string;
  inkRecommendation: string;
}

const signingPens: SigningPen[] = [
  {
    name: "Pilot Metropolitan",
    brand: "Pilot",
    priceFrom: 18.95,
    category: "Best Overall for Signing",
    why: "Smooth fine nib that produces crisp, professional-looking signatures. The brass body feels premium in hand. Use with Pilot Iroshizuku Take-sumi or Noodler's Heart of Darkness for permanent results.",
    nibRecommendation: "Fine",
    inkRecommendation: "Noodler's Heart of Darkness",
  },
  {
    name: "Lamy 2000",
    brand: "Lamy",
    priceFrom: 149.00,
    category: "Best Premium Signing Pen",
    why: "The Lamy 2000's Makrolon body and 14k gold nib make it a statement pen. The hooded nib prevents drying during long signing sessions. Used by architects and professionals worldwide.",
    nibRecommendation: "Fine",
    inkRecommendation: "Sailor Sei-boku",
  },
  {
    name: "Pilot Vanishing Point",
    brand: "Pilot",
    priceFrom: 148.00,
    category: "Best Retractable",
    why: "The click mechanism means no cap to remove — perfect for signing documents quickly. The 18k gold nib writes smoothly and the retractable design is unmatched for convenience.",
    nibRecommendation: "Fine",
    inkRecommendation: "Platinum Carbon Black",
  },
  {
    name: "Cross Century II",
    brand: "Cross",
    priceFrom: 85.00,
    category: "Best Traditional",
    why: "Cross is the pen of presidents and CEOs. The Century II has a classic professional look that commands respect. The gold-filled cap and appointments signal authority.",
    nibRecommendation: "Fine",
    inkRecommendation: "Cross branded cartridges",
  },
  {
    name: "Parker Sonnet",
    brand: "Parker",
    priceFrom: 78.00,
    category: "Best for Corporate",
    why: "Parker Sonnet is the corporate standard. Available in stainless steel with gold trim, it looks professional without being flashy. The nib writes consistently for large signing sessions.",
    nibRecommendation: "Fine",
    inkRecommendation: "Waterman Serenity Blue",
  },
  {
    name: "Sheaffer 300",
    brand: "Sheaffer",
    priceFrom: 75.00,
    category: "Best Value Premium",
    why: "Sheaffer's crisp, inlaid nib produces clean, professional signatures. The weighted body feels substantial. A great choice if you want a premium pen without Montblanc prices.",
    nibRecommendation: "Fine",
    inkRecommendation: "Noodler's Liberty's Elysium",
  },
  {
    name: "Montblanc Meisterstück Classique",
    brand: "Montblanc",
    priceFrom: 490.00,
    category: "Best Luxury",
    why: "The iconic white star cap is universally recognized. When you sign with a Montblanc, people notice. The 14k gold nib is buttery smooth and the resin body is lightweight for long sessions.",
    nibRecommendation: "Fine",
    inkRecommendation: "Montblanc Blue-Black",
  },
  {
    name: "Pilot Custom 74",
    brand: "Pilot",
    priceFrom: 80.00,
    category: "Best Gold Nib Value",
    why: "A 14k gold nib at under $100 is exceptional value. The Pilot Custom 74 writes like pens costing three times more. The gold nib has just enough spring for character without being flexy.",
    nibRecommendation: "Fine",
    inkRecommendation: "Pilot Iroshizuku Take-sumi",
  },
];

export default function SigningDocumentsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-800 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-500">Signing Documents</span>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs px-2.5 py-0.5 rounded bg-blue-50 text-blue-800">Professional Guide</span>
          <span className="text-xs text-stone-400">2026-06-30</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
          Best Fountain Pens for Signing Documents in 2026 — Professional Picks
        </h1>
        <p className="text-lg text-stone-500">
          The right fountain pen makes signing documents feel official. Whether you&apos;re signing contracts, legal papers, or just want a pen that commands respect at the office, these are the best fountain pens for professional signing.
        </p>
      </header>

      <div className="prose prose-stone max-w-none">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">What Makes a Good Signing Pen?</h2>
          <p className="text-stone-600 mb-4">
            A signing pen needs to do three things well: write smoothly without skipping, produce a professional-looking line, and use ink that won&apos;t fade or wash away. Here&apos;s what to look for:
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded bg-stone-50 border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-2">Fine Nib</h3>
              <p className="text-stone-600 text-sm">
                A Fine nib produces clean, precise signatures. Japanese Fine (Pilot, Sailor) is thinner than Western Fine (Lamy, Pelikan). Start with Fine for signing.
              </p>
            </div>
            <div className="p-4 rounded bg-stone-50 border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-2">Waterproof Ink</h3>
              <p className="text-stone-600 text-sm">
                For legal documents, use permanent ink. Noodler&apos;s Heart of Darkness, Sailor Sei-boku, or Platinum Carbon Black are all document-grade and fountain-pen-safe.
              </p>
            </div>
            <div className="p-4 rounded bg-stone-50 border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-2">Professional Appearance</h3>
              <p className="text-stone-600 text-sm">
                The pen should look the part. Classic designs in black with gold or silver trim project authority. Avoid brightly colored demonstrators for professional settings.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Top 8 Fountain Pens for Signing Documents</h2>
          <div className="space-y-6">
            {signingPens.map((pen, i) => (
              <div key={pen.name} className="p-6 rounded border border-stone-200 bg-white">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-medium text-blue-800">#{i + 1}</span>
                    <h3 className="text-lg font-bold text-stone-900">{pen.name}</h3>
                    <span className="text-sm text-stone-400">{pen.brand}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-green-700">${pen.priceFrom.toFixed(2)}</span>
                    <span className="text-xs text-stone-400 block">from</span>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded bg-blue-50 text-blue-800 mb-3 inline-block">{pen.category}</span>
                <p className="text-stone-600 text-sm mb-3">{pen.why}</p>
                <div className="flex flex-wrap gap-4 text-xs text-stone-500">
                  <span className="px-2 py-1 bg-stone-100 text-stone-600 rounded">Nib: {pen.nibRecommendation}</span>
                  <span className="px-2 py-1 bg-blue-50 text-blue-800 rounded">Ink: {pen.inkRecommendation}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Best Inks for Signing Documents</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-stone-200">
              <thead>
                <tr className="bg-stone-50">
                  <th className="text-left p-3 border-b border-stone-200 font-bold text-stone-900">Ink</th>
                  <th className="text-left p-3 border-b border-stone-200 font-bold text-stone-900">Type</th>
                  <th className="text-left p-3 border-b border-stone-200 font-bold text-stone-900">Water Res.</th>
                  <th className="text-left p-3 border-b border-stone-200 font-bold text-stone-900">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border-b border-stone-100">Noodler&apos;s Heart of Darkness</td><td className="p-3 border-b border-stone-100">Bulletproof</td><td className="p-3 border-b border-stone-100 text-green-700">Full</td><td className="p-3 border-b border-stone-100">$12.50</td></tr>
                <tr><td className="p-3 border-b border-stone-100">Sailor Sei-boku</td><td className="p-3 border-b border-stone-100">Pigment</td><td className="p-3 border-b border-stone-100 text-green-700">Full</td><td className="p-3 border-b border-stone-100">$18.00</td></tr>
                <tr><td className="p-3 border-b border-stone-100">Platinum Carbon Black</td><td className="p-3 border-b border-stone-100">Pigment</td><td className="p-3 border-b border-stone-100 text-green-700">Full</td><td className="p-3 border-b border-stone-100">$12.00</td></tr>
                <tr><td className="p-3 border-b border-stone-100">De Atramentis Document Ink</td><td className="p-3 border-b border-stone-100">Document</td><td className="p-3 border-b border-stone-100 text-green-700">Full</td><td className="p-3 border-b border-stone-100">$14.00</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Related Guides</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/blog/best-waterproof-fountain-pen-ink" className="block p-4 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all">
              <h3 className="font-bold text-stone-900">Best Waterproof Fountain Pen Inks</h3>
              <p className="text-sm text-stone-500">Compare permanent inks for document signing and archival writing.</p>
            </Link>
            <Link href="/blog/best-fountain-pens-for-beginners" className="block p-4 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all">
              <h3 className="font-bold text-stone-900">Best Fountain Pens for Beginners</h3>
              <p className="text-sm text-stone-500">Start with these affordable pens before upgrading to a signing pen.</p>
            </Link>
            <Link href="/blog/best-everyday-fountain-pens" className="block p-4 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all">
              <h3 className="font-bold text-stone-900">Best Everyday Fountain Pens</h3>
              <p className="text-sm text-stone-500">Daily driver pens that double as great signing pens.</p>
            </Link>
            <Link href="/blog/fountain-pen-maintenance-guide" className="block p-4 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all">
              <h3 className="font-bold text-stone-900">Fountain Pen Maintenance Guide</h3>
              <p className="text-sm text-stone-500">Keep your signing pen in top condition with proper care.</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
