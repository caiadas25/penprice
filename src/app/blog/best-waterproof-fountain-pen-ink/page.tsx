import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Waterproof Fountain Pen Inks in 2026 — Permanent & Document-Grade | PenPrice",
  description:
    "The best waterproof and permanent fountain pen inks for artists, students, and professionals. Compare Noodler's, Sailor, Platinum, De Atramentis, and more. Price comparisons included.",
  openGraph: {
    title: "Best Waterproof Fountain Pen Inks 2026",
    description:
      "Compare permanent fountain pen inks by water resistance, drying time, and price. Noodler's, Sailor, Platinum, and more.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Waterproof Fountain Pen Inks 2026",
    description:
      "Permanent fountain pen inks compared by water resistance and price.",
  },
};

interface WaterproofInk {
  name: string;
  brand: string;
  color: string;
  priceFrom: number;
  why: string;
  waterResistance: string;
  dryingTime: string;
  useCase: string;
}

const waterproofInks: WaterproofInk[] = [
  {
    name: "Noodler's Baystate Blue",
    brand: "Noodler's Ink",
    color: "Blue",
    priceFrom: 12.50,
    why: "Noodler's flagship waterproof blue. The gold standard for permanent fountain pen ink. Vibrant blue, fully waterproof when dry, and incredible ink flow. A cult classic — just don't mix it with other inks.",
    waterResistance: "Fully waterproof",
    dryingTime: "10-15 seconds",
    useCase: "Everyday writing, journaling",
  },
  {
    name: "Sailor Sei-boku",
    brand: "Sailor",
    color: "Blue-Black",
    priceFrom: 18.00,
    why: "Sailor's pigmented waterproof ink with a beautiful blue-black color. Nanoparticle technology means it won't clog your pen like some pigmented inks. Excellent flow and shading.",
    waterResistance: "Fully waterproof",
    dryingTime: "5-8 seconds",
    useCase: "Professional documents, fountain pen art",
  },
  {
    name: "Platinum Carbon Black",
    brand: "Platinum",
    color: "Black",
    priceFrom: 12.00,
    why: "The most popular waterproof black ink. Pigment-based, fully archival, and works beautifully in every fountain pen. Deep, saturated black with no sheen or shading.",
    waterResistance: "Fully waterproof",
    dryingTime: "5-10 seconds",
    useCase: "Drawing, professional writing, archival",
  },
  {
    name: "De Atramentis Document Ink",
    brand: "De Atramentis",
    color: "Black",
    priceFrom: 14.00,
    why: "German-made document-grade permanent ink. Available in black, blue, red, and green. Excellent flow, won't clog pens, and fully waterproof. Ideal for signing legal documents.",
    waterResistance: "Fully waterproof",
    dryingTime: "8-12 seconds",
    useCase: "Legal documents, official signatures",
  },
  {
    name: "Noodler's Heart of Darkness",
    brand: "Noodler's Ink",
    color: "Black",
    priceFrom: 12.50,
    why: "Noodler's deepest, darkest black. Bulletproof formula bonds to cellulose fibers in paper. Fully waterproof, UV-resistant, and forgery-resistant. The ultimate permanent black.",
    waterResistance: "Fully waterproof",
    dryingTime: "10-15 seconds",
    useCase: "Legal documents, archival, security writing",
  },
  {
    name: "Noodler's Liberty's Elysium",
    brand: "Noodler's Ink",
    color: "Blue",
    priceFrom: 12.50,
    why: "A cleaner, more professional blue compared to Baystate Blue. Same bulletproof waterproof formula but without the staining issues. Better for professional settings.",
    waterResistance: "Fully waterproof",
    dryingTime: "10-15 seconds",
    useCase: "Professional writing, everyday permanent",
  },
  {
    name: "Rohrer & Klingner Dokumentus",
    brand: "Rohrer & Klingner",
    color: "Black",
    priceFrom: 10.00,
    why: "German document ink that's both permanent and fountain-pen-safe. Excellent flow, deep black color, and no clogging issues. A great alternative to Noodler's.",
    waterResistance: "Fully waterproof",
    dryingTime: "8-12 seconds",
    useCase: "Legal documents, everyday permanent",
  },
  {
    name: "Noodler's X-Feather",
    brand: "Noodler's Ink",
    color: "Black",
    priceFrom: 12.50,
    why: "Specifically designed to eliminate feathering on cheap paper. The bulletproof formula is waterproof and the slow-drying formula prevents spread. Perfect for students.",
    waterResistance: "Fully waterproof",
    dryingTime: "15-20 seconds",
    useCase: "Cheap paper, student notebooks",
  },
  {
    name: "Sailor Kiwa-guro",
    brand: "Sailor",
    color: "Black",
    priceFrom: 18.00,
    why: "Sailor's permanent black ink with nanoparticle technology. Rich, dark black with excellent flow. The sister ink to Sei-boku. Clog-free permanent ink.",
    waterResistance: "Fully waterproof",
    dryingTime: "5-8 seconds",
    useCase: "Professional writing, everyday permanent",
  },
  {
    name: "Platinum Pigment Blue",
    brand: "Platinum",
    color: "Blue",
    priceFrom: 12.00,
    why: "Platinum's permanent blue ink. Pigment-based formula that's fully waterproof and works in all Platinum fountain pens. Excellent flow and a rich blue color.",
    waterResistance: "Fully waterproof",
    dryingTime: "5-10 seconds",
    useCase: "Professional documents, everyday writing",
  },
];

export default function WaterproofInkGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-800 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-500">Waterproof Fountain Pen Inks</span>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs px-2.5 py-0.5 rounded bg-blue-50 text-blue-800">Ink Guide</span>
          <span className="text-xs text-stone-400">2026-06-30</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
          Best Waterproof Fountain Pen Inks in 2026 — Permanent & Document-Grade
        </h1>
        <p className="text-lg text-stone-500">
          The best waterproof and permanent fountain pen inks compared. Whether you need document-grade ink for legal papers, waterproof ink for drawing, or just want your writing to survive a coffee spill — this guide has you covered.
        </p>
      </header>

      <div className="prose prose-stone max-w-none">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Why Waterproof Fountain Pen Ink?</h2>
          <p className="text-stone-600 mb-4">
            Most fountain pen inks are dye-based and water-soluble. That&apos;s great for cleaning your pen, but terrible if your notebook gets wet or you need your writing to be permanent. Waterproof fountain pen inks use either pigment particles or special dye formulas that bond to paper fibers permanently.
          </p>
          <p className="text-stone-600 mb-4">
            There are two main types of waterproof fountain pen inks:
          </p>
          <ul className="list-disc list-inside text-stone-600 space-y-2 mb-4">
            <li><strong>Pigment-based inks</strong> (Platinum Carbon Black, Sailor Sei-boku) — Use tiny pigment particles suspended in water. Waterproof, archival, but require more frequent pen cleaning.</li>
            <li><strong>Bulletproof/NCell inks</strong> (Noodler&apos;s) — Use special dye formulas that bond chemically to cellulose in paper. Fully waterproof once dry and won&apos;t clog pens like pigmented inks.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Top 10 Waterproof Fountain Pen Inks</h2>
          <div className="space-y-6">
            {waterproofInks.map((ink, i) => (
              <div key={ink.name} className="p-6 rounded border border-stone-200 bg-white">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-medium text-blue-800">#{i + 1}</span>
                    <h3 className="text-lg font-bold text-stone-900">{ink.name}</h3>
                    <span className="text-sm text-stone-400">{ink.brand}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-green-700">${ink.priceFrom.toFixed(2)}</span>
                    <span className="text-xs text-stone-400 block">from</span>
                  </div>
                </div>
                <p className="text-stone-600 text-sm mb-3">{ink.why}</p>
                <div className="flex flex-wrap gap-4 text-xs text-stone-500">
                  <span className="px-2 py-1 bg-green-50 text-green-800 rounded">{ink.waterResistance}</span>
                  <span className="px-2 py-1 bg-blue-50 text-blue-800 rounded">{ink.color}</span>
                  <span className="px-2 py-1 bg-stone-100 text-stone-600 rounded">Dries: {ink.dryingTime}</span>
                  <span className="px-2 py-1 bg-stone-100 text-stone-600 rounded">{ink.useCase}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">What to Consider When Choosing Waterproof Ink</h2>
          <div className="space-y-4">
            <div className="p-4 rounded bg-stone-50 border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-2">Pen Compatibility</h3>
              <p className="text-stone-600 text-sm">
                Pigmented inks (Platinum Carbon Black, Sailor Sei-boku) should only be used in pens you can easily clean. They&apos;re safe in Platinum, Sailor, and most Japanese pens. Avoid using them in vintage pens or pens with complex filling systems.
              </p>
            </div>
            <div className="p-4 rounded bg-stone-50 border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-2">Cleaning</h3>
              <p className="text-stone-600 text-sm">
                Waterproof inks require more maintenance. Clean your pen every 2-4 weeks if using pigmented inks. Noodler&apos;s bulletproof inks are easier to clean since they&apos;re dye-based rather than pigment-based.
              </p>
            </div>
            <div className="p-4 rounded bg-stone-50 border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-2">Drying Time</h3>
              <p className="text-stone-600 text-sm">
                Waterproof inks generally take longer to dry than regular inks. If you&apos;re left-handed, test before committing. Sailor and Platinum inks tend to dry faster than Noodler&apos;s.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-stone-200">
              <thead>
                <tr className="bg-stone-50">
                  <th className="text-left p-3 border-b border-stone-200 font-bold text-stone-900">Ink</th>
                  <th className="text-left p-3 border-b border-stone-200 font-bold text-stone-900">Type</th>
                  <th className="text-left p-3 border-b border-stone-200 font-bold text-stone-900">Water Res.</th>
                  <th className="text-left p-3 border-b border-stone-200 font-bold text-stone-900">Price</th>
                  <th className="text-left p-3 border-b border-stone-200 font-bold text-stone-900">Best For</th>
                </tr>
              </thead>
              <tbody>
                {waterproofInks.map((ink) => (
                  <tr key={ink.name} className="hover:bg-stone-50">
                    <td className="p-3 border-b border-stone-100 font-medium">{ink.name}</td>
                    <td className="p-3 border-b border-stone-100">{ink.brand.includes("Noodler") ? "Bulletproof" : "Pigment"}</td>
                    <td className="p-3 border-b border-stone-100 text-green-700">Full</td>
                    <td className="p-3 border-b border-stone-100">${ink.priceFrom.toFixed(2)}</td>
                    <td className="p-3 border-b border-stone-100">{ink.useCase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Related Guides</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/blog/fountain-pen-ink-comparison-guide" className="block p-4 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all">
              <h3 className="font-bold text-stone-900">Fountain Pen Ink Comparison Guide</h3>
              <p className="text-sm text-stone-500">Compare all types of fountain pen inks by color, drying time, and price.</p>
            </Link>
            <Link href="/blog/best-fountain-pen-inks" className="block p-4 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all">
              <h3 className="font-bold text-stone-900">Best Fountain Pen Inks in 2026</h3>
              <p className="text-sm text-stone-500">The top 10 fountain pen inks for everyday writing, ranked and compared.</p>
            </Link>
            <Link href="/blog/fountain-pen-maintenance-guide" className="block p-4 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all">
              <h3 className="font-bold text-stone-900">Fountain Pen Maintenance Guide</h3>
              <p className="text-sm text-stone-500">How to clean and care for your fountain pen, especially with pigmented inks.</p>
            </Link>
            <Link href="/blog/best-fountain-pens-for-drawing" className="block p-4 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all">
              <h3 className="font-bold text-stone-900">Best Fountain Pens for Drawing</h3>
              <p className="text-sm text-stone-500">Fountain pens and waterproof inks for artists and sketchers.</p>
            </Link>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="p-4 rounded bg-stone-50 border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-2">Can I use waterproof ink in any fountain pen?</h3>
              <p className="text-stone-600 text-sm">
                It depends on the type. Noodler&apos;s bulletproof inks are dye-based and safe in most pens. Pigmented inks (Platinum Carbon Black, Sailor Sei-boku) should only be used in pens you can easily disassemble and clean. Never use pigmented inks in vintage or irreplaceable pens.
              </p>
            </div>
            <div className="p-4 rounded bg-stone-50 border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-2">Will waterproof ink damage my pen?</h3>
              <p className="text-stone-600 text-sm">
                If you clean your pen regularly, no. The risk is with pigmented inks that can dry and clog if left in a pen unused for weeks. Clean your pen every 2-4 weeks when using waterproof inks.
              </p>
            </div>
            <div className="p-4 rounded bg-stone-50 border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-2">What&apos;s the best waterproof ink for everyday writing?</h3>
              <p className="text-stone-600 text-sm">
                Noodler&apos;s Liberty&apos;s Elysium or Sailor Sei-boku are our top picks for everyday waterproof writing. Both have excellent flow, won&apos;t clog pens, and are fully permanent once dry.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
