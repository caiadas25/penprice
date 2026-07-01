import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lamy Safari Review 2026 — The World's Most Popular Fountain Pen? | PenPrice",
  description:
    "In-depth Lamy Safari review: design, nib quality, triangular grip, ink system, and live price comparison across Amazon, JetPens, Goulet, and Goldspot. Is the Safari worth $30?",
  openGraph: {
    title: "Lamy Safari Review 2026 — World's Most Popular Fountain Pen",
    description: "Full review of the Lamy Safari. Design, nib options, filling system, and where to buy it cheapest.",
    type: "article",
  },
};

export default function LamySafariReviewPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-6">
        <Link href="/" className="hover:text-blue-900 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-900 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-600">Lamy Safari Review</span>
      </nav>

      <article>
        <div className="mb-8">
          <span className="text-xs font-medium text-blue-800 bg-blue-50 px-2.5 py-1 rounded">Review</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-3 mb-3 leading-tight">
            Lamy Safari Review 2026 — The World&apos;s Most Popular Fountain Pen?
          </h1>
          <p className="text-stone-500 text-sm">Last updated July 2026 · 7 min read</p>
        </div>

        {/* Quick Specs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          <div className="p-3 rounded border border-stone-200 bg-white text-center">
            <div className="text-xs text-stone-400 mb-1">Nib</div>
            <div className="font-semibold text-stone-900">Steel</div>
          </div>
          <div className="p-3 rounded border border-stone-200 bg-white text-center">
            <div className="text-xs text-stone-400 mb-1">Filling</div>
            <div className="font-semibold text-stone-900">Cartridge / Z28</div>
          </div>
          <div className="p-3 rounded border border-stone-200 bg-white text-center">
            <div className="text-xs text-stone-400 mb-1">Price From</div>
            <div className="font-semibold text-blue-800">$30</div>
          </div>
          <div className="p-3 rounded border border-stone-200 bg-white text-center">
            <div className="text-xs text-stone-400 mb-1">Rating</div>
            <div className="font-semibold text-stone-900">8.5/10</div>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Overview</h2>
          <div className="prose max-w-none text-stone-600 text-sm leading-relaxed space-y-4">
            <p>
              The Lamy Safari is the most recognizable fountain pen in the world. Designed by Wolfgang Fabian and first produced in 1980, it&apos;s been the default recommendation for fountain pen beginners for over four decades. Its triangular grip section, clip design, and distinctiveABS plastic body make it instantly identifiable.
            </p>
            <p>
              At around $30, the Safari occupies a sweet spot: affordable enough for a first pen, but well-made enough that experienced users still keep one in rotation. Lamy releases new colors every year, making it a collectible as well as a practical tool.
            </p>
          </div>
        </section>

        {/* Design & Build */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Design & Build Quality</h2>
          <div className="prose max-w-none text-stone-600 text-sm leading-relaxed space-y-4">
            <p>
              The Safari is made from injection-molded ABS plastic, the same material used in LEGO bricks. It&apos;s light (17g uncapped), durable, and available in over a dozen colors at any given time. The clip is spring-loaded and surprisingly functional for a plastic pen.
            </p>
            <p>
              The defining design feature is the triangular grip section. It naturally guides your fingers into a tripod grip, making it an excellent teaching pen for people who hold pens incorrectly. Some people love this; others find it restrictive. If you have large hands or an unconventional grip, the triangle may feel uncomfortable during long writing sessions.
            </p>
            <p>
              The cap snaps on and off with a satisfying click. It posts securely on the back of the pen, though it makes the pen quite long when posted.
            </p>
          </div>
        </section>

        {/* Nib */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">The Steel Nib</h2>
          <div className="prose max-w-none text-stone-600 text-sm leading-relaxed space-y-4">
            <p>
              The Safari uses a JoWo #5 steel nib. It&apos;s available in Extra Fine, Fine, Medium, Broad, and a special Left-Handed grind. Lamy nibs run notably wider than Japanese nibs: a Lamy Medium is roughly equivalent to a Pilot Broad.
            </p>
            <p>
              The nib is good, not great. It writes smoothly with a touch of feedback, and it&apos;s reliable for everyday writing. The real advantage is that Lamy nibs are easily swappable: you can buy separate nib units and swap them in seconds without tools. This makes the Safari an excellent platform for experimenting with different nib sizes.
            </p>
            <p>
              One caveat: Lamy&apos;s quality control has been inconsistent in recent years. Some nibs write perfectly out of the box; others need minor tuning. If your Safari writes scratchy or hard-starts, a quick adjustment with micromesh or a brass shim usually fixes it.
            </p>
          </div>
        </section>

        {/* Filling System */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Ink System</h2>
          <div className="prose max-w-none text-stone-600 text-sm leading-relaxed space-y-4">
            <p>
              The Safari uses Lamy&apos;s proprietary T10 cartridges, which are wider than standard international cartridges. A Lamy cartridge holds about 1.0ml of ink, which is generous. Lamy also sells the Z28 converter for bottled ink, which holds about 0.7ml. The converter is sold separately ($8) and is not included with the pen.
            </p>
            <p>
              The proprietary cartridge system is the Safari&apos;s main drawback. You can&apos;t use standard international cartridges, and third-party Lamy-compatible cartridges are rare. If you want the widest ink selection, you&apos;ll need to use bottled ink with the Z28 converter.
            </p>
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Pros & Cons</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded border border-green-200 bg-green-50">
              <h3 className="font-bold text-green-800 mb-3">✅ Pros</h3>
              <ul className="text-sm text-stone-600 space-y-2">
                <li>Iconic design, dozens of colors</li>
                <li>Triangular grip teaches proper hold</li>
                <li>Swappable nibs (EF to Broad)</li>
                <li>Lightweight and durable</li>
                <li>Large cartridge capacity (1.0ml)</li>
                <li>Worldwide availability</li>
              </ul>
            </div>
            <div className="p-4 rounded border border-red-200 bg-red-50">
              <h3 className="font-bold text-red-800 mb-3">❌ Cons</h3>
              <ul className="text-sm text-stone-600 space-y-2">
                <li>Proprietary cartridge system</li>
                <li>Triangular grip can be restrictive</li>
                <li>Nib QC can be inconsistent</li>
                <li>Converter not included</li>
                <li>Plastic feels inexpensive compared to metal pens</li>
                <li>Nib sizes run wide vs Japanese pens</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Price Comparison */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Price Comparison (July 2026)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-stone-200 rounded overflow-hidden">
              <thead className="bg-stone-100">
                <tr>
                  <th className="px-4 py-2 text-left text-stone-700 font-semibold">Retailer</th>
                  <th className="px-4 py-2 text-left text-stone-700 font-semibold">Price</th>
                  <th className="px-4 py-2 text-left text-stone-700 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr><td className="px-4 py-2 text-stone-700 font-medium">Amazon</td><td className="px-4 py-2 text-blue-800 font-semibold">$29.99</td><td className="px-4 py-2 text-green-600">In Stock</td></tr>
                <tr><td className="px-4 py-2 text-stone-700 font-medium">JetPens</td><td className="px-4 py-2 text-stone-700">$30.00</td><td className="px-4 py-2 text-green-600">In Stock</td></tr>
                <tr><td className="px-4 py-2 text-stone-700 font-medium">Goulet Pens</td><td className="px-4 py-2 text-stone-700">$30.00</td><td className="px-4 py-2 text-green-600">In Stock</td></tr>
                <tr><td className="px-4 py-2 text-stone-700 font-medium">Goldspot</td><td className="px-4 py-2 text-stone-700">$29.95</td><td className="px-4 py-2 text-green-600">In Stock</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-stone-400 mt-3">Prices are virtually identical across retailers. Limited edition colors may cost more.</p>
        </section>

        {/* Safari vs Metropolitan */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Lamy Safari vs Pilot Metropolitan</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-stone-200 rounded overflow-hidden">
              <thead className="bg-stone-100">
                <tr>
                  <th className="px-4 py-2 text-left text-stone-700 font-semibold">Feature</th>
                  <th className="px-4 py-2 text-left text-stone-700 font-semibold">Lamy Safari</th>
                  <th className="px-4 py-2 text-left text-stone-700 font-semibold">Pilot Metropolitan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr><td className="px-4 py-2 text-stone-700">Price</td><td className="px-4 py-2 text-stone-700">$30</td><td className="px-4 py-2 text-stone-700">$19</td></tr>
                <tr><td className="px-4 py-2 text-stone-700">Material</td><td className="px-4 py-2 text-stone-700">ABS plastic</td><td className="px-4 py-2 text-stone-700">Brass</td></tr>
                <tr><td className="px-4 py-2 text-stone-700">Weight</td><td className="px-4 py-2 text-stone-700">17g</td><td className="px-4 py-2 text-stone-700">27g</td></tr>
                <tr><td className="px-4 py-2 text-stone-700">Nib</td><td className="px-4 py-2 text-stone-700">Steel, swappable</td><td className="px-4 py-2 text-stone-700">Steel, fixed</td></tr>
                <tr><td className="px-4 py-2 text-stone-700">Converter</td><td className="px-4 py-2 text-stone-700">Sold separately ($8)</td><td className="px-4 py-2 text-stone-700">Included</td></tr>
                <tr><td className="px-4 py-2 text-stone-700">Colors</td><td className="px-4 py-2 text-stone-700">12+ at any time</td><td className="px-4 py-2 text-stone-700">4-6</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Internal Links */}
        <section className="border-t border-stone-200 pt-8">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Compare Prices</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/brands/lamy" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">All Lamy Pens →</span>
              <span className="block text-stone-400 mt-1">Safari, AL-Star, 2000, Studio, and more</span>
            </Link>
            <Link href="/blog/kaweco-sport-vs-lamy-safari" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Kaweco Sport vs Lamy Safari →</span>
              <span className="block text-stone-400 mt-1">Budget pen showdown</span>
            </Link>
            <Link href="/blog/best-fountain-pens-for-beginners" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Beginner Pens →</span>
              <span className="block text-stone-400 mt-1">Top 10 picks with live prices</span>
            </Link>
            <Link href="/blog/rotring-600-vs-lamy-safari" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Rotring 600 vs Lamy Safari →</span>
              <span className="block text-stone-400 mt-1">Technical writing showdown</span>
            </Link>
          </div>
        </section>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Lamy Safari Review 2026 — The World's Most Popular Fountain Pen?",
            description: "In-depth Lamy Safari review: design, nib quality, triangular grip, ink system, and live price comparison.",
            author: { "@type": "Organization", name: "PenPrice" },
            publisher: { "@type": "Organization", name: "PenPrice" },
            datePublished: "2026-07-01",
            dateModified: "2026-07-01",
            mainEntityOfPage: "https://penprice.vercel.app/blog/lamy-safari-review",
          }),
        }}
      />
    </div>
  );
}
