import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Fountain Pens for Travel in 2026 — Portable & Reliable | PenPrice",
  description:
    "Top portable fountain pens for travel. Compact, leak-proof, and airline-friendly fountain pens from Kaweco, Pilot, Lamy, TWSBI, and more. Price comparisons included.",
  openGraph: {
    title: "Best Fountain Pens for Travel 2026 — Portable & Reliable",
    description: "Compact, leak-proof fountain pens for travelers. Kaweco Sport, Pilot E95S, Lamy Aion, and more.",
    type: "article",
  },
};

interface TravelPen {
  name: string;
  slug: string;
  brandSlug: string;
  priceFrom: number;
  category: string;
  why: string;
}

const travelPens: TravelPen[] = [
  {
    name: "Kaweco Sport",
    slug: "sport",
    brandSlug: "kaweco",
    priceFrom: 24.99,
    category: "Best Pocket Pen",
    why: "The iconic octagonal pocket pen. Posts to full size when you need it. Screw cap prevents accidental leaks in your bag. Available in dozens of colors and materials.",
  },
  {
    name: "Pilot E95S",
    slug: "e95s",
    brandSlug: "pilot",
    priceFrom: 72.00,
    category: "Best Gold Nib Travel Pen",
    why: "A compact 14k gold inlaid nib pen that fits in a pocket. The springy nib writes beautifully and the brass body feels premium. Slip-on cap for quick note-taking.",
  },
  {
    name: "Kaweco Liliput",
    slug: "liliput",
    brandSlug: "kaweco",
    priceFrom: 89.99,
    category: "Best Ultra-Compact",
    why: "The smallest screw-cap fountain pen. Fits in any pocket, even a coin purse. Brass or aluminum body. A true everyday carry pen.",
  },
  {
    name: "TWSBI Eco",
    slug: "eco",
    brandSlug: "twsbi",
    priceFrom: 31.99,
    category: "Best Ink Capacity for Travel",
    why: "Piston filler with massive ink capacity. You won't need to carry ink bottles on a long trip. Demonstrator body shows ink levels. Screw cap prevents leaks.",
  },
  {
    name: "Lamy Aion",
    slug: "aion",
    brandSlug: "lamy",
    priceFrom: 67.00,
    category: "Best Durable Travel Pen",
    why: "Anodized aluminum body that can take a beating. Spring-loaded clip attaches securely to any bag. The steel nib is smooth and reliable.",
  },
  {
    name: "Platinum Preppy",
    slug: "preppy",
    brandSlug: "platinum",
    priceFrom: 5.75,
    category: "Best Budget Travel Pen",
    why: "The Slip & Seal cap keeps ink from drying out for months. At $6, you can leave it in your bag without worrying. Perfect for throwing in a travel bag.",
  },
  {
    name: "Lamy Safari",
    slug: "safari",
    brandSlug: "lamy",
    priceFrom: 29.99,
    category: "Best All-Around Travel Pen",
    why: "Lightweight, durable, and easy to replace if lost. Triangular grip is comfortable for long writing sessions. Interchangeable nibs.",
  },
  {
    name: "Kaweco Dia 2",
    slug: "dia2",
    brandSlug: "kaweco",
    priceFrom: 169.00,
    category: "Best Premium Travel Pen",
    why: "A classic Art Deco design in chrome or gold. Screw cap and ball clip. The steel nib is smooth and the pen has real heft. A travel pen you'll want to use daily.",
  },
];

export default function BestFountainPensForTravelPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Fountain Pens for Travel in 2026",
    description:
      "Top portable fountain pens for travel. Compact, leak-proof, and airline-friendly fountain pens from Kaweco, Pilot, Lamy, TWSBI, and more.",
    datePublished: "2026-06-30",
    author: { "@type": "Organization", name: "PenPrice", url: "https://penprice.vercel.app" },
    publisher: { "@type": "Organization", name: "PenPrice", url: "https://penprice.vercel.app" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I bring a fountain pen on an airplane?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, fountain pens are allowed in both carry-on and checked luggage. However, air pressure changes can cause ink to leak from some pens. Screw-cap pens and pens with good seals (like Kaweco Sport or Platinum Preppy) are safest for air travel.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best compact fountain pen for travel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Kaweco Sport is widely considered the best compact fountain pen for travel. It's a pocket-sized pen that posts to full size, has a screw cap to prevent leaks, and is available in many colors. The Pilot E95S is a premium alternative with a 14k gold nib.",
        },
      },
      {
        "@type": "Question",
        name: "How do I prevent fountain pen ink from leaking when flying?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use a screw-cap pen (like Kaweco Sport, TWSBI Eco, or Lamy Safari). Keep the pen full or empty (half-full is the worst case). Store the pen nib-up in a sealed bag. Some travelers wrap the nib section in a small plastic bag for extra protection.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-500">Best Fountain Pens for Travel</span>
        </nav>

        <article>
          <header className="mb-10">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 mb-3 inline-block">Travel Guide</span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Best Fountain Pens for Travel in 2026
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Looking for a portable fountain pen that won't leak in your bag or on a plane? Here are the 8 best fountain pens for travel, from budget pocket pens to premium gold-nib daily carries. All with price comparisons from Amazon, JetPens, and Goulet Pens.
            </p>
          </header>

          {/* Why Bring a Fountain Pen When Traveling? */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Why Bring a Fountain Pen When Traveling?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Fountain pens are the best writing instruments for travel. They're lighter than most pens, produce less fatigue over long writing sessions, and the ink lasts far longer than ballpoint cartridges. For journaling, sketching, or filling out customs forms, a fountain pen is unmatched.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The key is choosing a pen with a reliable seal, a screw cap (or a good snap cap), and a size that fits your travel bag. Below we cover everything from $6 budget pens to $170 premium options.
            </p>
          </section>

          {/* Pen Comparison Table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Quick Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-left">
                    <th className="p-3 font-semibold text-slate-700">Pen</th>
                    <th className="p-3 font-semibold text-slate-700">Category</th>
                    <th className="p-3 font-semibold text-slate-700">From</th>
                    <th className="p-3 font-semibold text-slate-700">Cap Type</th>
                    <th className="p-3 font-semibold text-slate-700">Material</th>
                  </tr>
                </thead>
                <tbody>
                  {travelPens.map((pen, i) => (
                    <tr key={pen.slug} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3">
                        <Link href={`/brands/${pen.brandSlug}/${pen.slug}`} className="text-indigo-600 hover:underline font-medium">
                          {pen.name}
                        </Link>
                      </td>
                      <td className="p-3 text-slate-600">{pen.category}</td>
                      <td className="p-3 font-mono text-slate-800">${pen.priceFrom.toFixed(2)}</td>
                      <td className="p-3 text-slate-600">Screw</td>
                      <td className="p-3 text-slate-600">{pen.brandSlug === "kaweco" ? "Brass / Aluminum" : pen.brandSlug === "pilot" ? "Brass" : pen.brandSlug === "twsbi" ? "Acrylic" : pen.brandSlug === "lamy" ? "Aluminum" : "ABS Plastic"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Detailed Pen Recommendations */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Detailed Recommendations</h2>
            {travelPens.map((pen) => (
              <div key={pen.slug} className="mb-8 p-6 bg-white border border-slate-200 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">
                      <Link href={`/brands/${pen.brandSlug}/${pen.slug}`} className="hover:text-indigo-600 transition-colors">
                        {pen.name}
                      </Link>
                    </h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700">{pen.category}</span>
                  </div>
                  <span className="text-lg font-mono font-bold text-slate-800">from ${pen.priceFrom.toFixed(2)}</span>
                </div>
                <p className="text-slate-600 leading-relaxed">{pen.why}</p>
                <Link href={`/brands/${pen.brandSlug}/${pen.slug}`} className="inline-block mt-3 text-indigo-600 hover:underline text-sm font-medium">
                  View prices and details →
                </Link>
              </div>
            ))}
          </section>

          {/* Travel Tips Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Fountain Pen Travel Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-2">Air Pressure Leaks</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Air pressure changes during flights can push ink out of the nib. Keep the pen nib-up in a sealed bag, or use a pen with a tight screw cap.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-2">Ink Carrying</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  For long trips, bring a small ink bottle (under 3.4oz/100ml for carry-on). Piston-fillers like the TWSBI Eco have huge ink capacity and won't need refilling for weeks.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-2">Paper Matters</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Bring a small notebook with fountain-pen-friendly paper (Rhodia, Clairefontaine, or Tomoe River). Cheap paper will feather and bleed.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-2">Pocket Pen vs. Full Size</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Pocket pens (Kaweco Sport, Liliput) are great for carrying but can feel small for long writing. Full-size pens (TWSBI Eco, Lamy Safari) are better for journaling.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqJsonLd.mainEntity.map((faq) => (
                <div key={faq.name} className="bg-white border border-slate-200 rounded-lg p-4">
                  <h3 className="font-bold text-slate-800 mb-2">{faq.name}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/blog/best-fountain-pens-for-beginners" className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors">
                <span className="font-medium text-indigo-600">Best Fountain Pens for Beginners</span>
                <p className="text-sm text-slate-500 mt-1">New to fountain pens? Start here.</p>
              </Link>
              <Link href="/blog/best-fountain-pens-under-50" className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors">
                <span className="font-medium text-indigo-600">Best Fountain Pens Under $50</span>
                <p className="text-sm text-slate-500 mt-1">Budget-friendly picks for every writer.</p>
              </Link>
              <Link href="/blog/best-fountain-pens-for-journaling" className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors">
                <span className="font-medium text-indigo-600">Best Fountain Pens for Journaling</span>
                <p className="text-sm text-slate-500 mt-1">Smooth writers for your travel journal.</p>
              </Link>
              <Link href="/blog/fountain-pen-maintenance-guide" className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors">
                <span className="font-medium text-indigo-600">Fountain Pen Maintenance Guide</span>
                <p className="text-sm text-slate-500 mt-1">Keep your pen running while you travel.</p>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
