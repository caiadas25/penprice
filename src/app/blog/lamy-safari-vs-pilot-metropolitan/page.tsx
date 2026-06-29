import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lamy Safari vs Pilot Metropolitan — Which Beginner Fountain Pen Should You Buy? | PenPrice",
  description:
    "The two most recommended beginner fountain pens, head-to-head. Lamy Safari vs Pilot Metropolitan — price, nib quality, ink system, build quality, and value compared.",
  openGraph: {
    title: "Lamy Safari vs Pilot Metropolitan — Which Should You Buy?",
    description: "The ultimate beginner fountain pen showdown. Price, nib quality, and value compared.",
    type: "article",
  },
};

export default function ComparisonPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-800 transition-colors">Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-500">Lamy Safari vs Pilot Metropolitan</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-blue-800 text-sm font-medium mb-2">Comparison Guide — Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Lamy Safari vs Pilot Metropolitan
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            The two most recommended beginner fountain pens in the world, head-to-head. Both cost
            under $30, but they offer very different writing experiences.
          </p>
        </header>

        {/* Quick Verdict */}
        <section className="mb-12 grid md:grid-cols-2 gap-4">
          <div className="p-5 rounded border border-amber-700/30 bg-amber-900/10">
            <h3 className="font-bold text-blue-800 mb-2">🏆 Best for Comfort</h3>
            <p className="text-stone-900 font-bold text-lg">Lamy Safari</p>
            <p className="text-sm text-stone-500 mt-1">
              The triangular grip section forces proper hand position. Comfortable for long writing sessions.
            </p>
          </div>
          <div className="p-5 rounded border border-amber-700/30 bg-amber-900/10">
            <h3 className="font-bold text-blue-800 mb-2">🏆 Best Value</h3>
            <p className="text-stone-900 font-bold text-lg">Pilot Metropolitan</p>
            <p className="text-sm text-stone-500 mt-1">
              Brass body, converter included, and Pilot&apos;s legendary nib quality. More pen for less money.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Head-to-Head Comparison</h2>
          <div className="overflow-x-auto rounded border border-stone-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-stone-100">
                  <th className="text-left px-4 py-3 text-stone-500">Feature</th>
                  <th className="text-left px-4 py-3 text-blue-800">Lamy Safari</th>
                  <th className="text-left px-4 py-3 text-blue-400">Pilot Metropolitan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="px-4 py-3 text-stone-500">Price</td>
                  <td className="px-4 py-3 text-stone-900">~$30</td>
                  <td className="px-4 py-3 text-stone-900">~$28</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-stone-500">Material</td>
                  <td className="px-4 py-3 text-stone-900">ABS plastic</td>
                  <td className="px-4 py-3 text-stone-900">Brass with lacquer</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-stone-500">Weight</td>
                  <td className="px-4 py-3 text-stone-900">Light (14g)</td>
                  <td className="px-4 py-3 text-stone-900">Heavy (27g)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-stone-500">Nib</td>
                  <td className="px-4 py-3 text-stone-900">Steel, swappable</td>
                  <td className="px-4 py-3 text-stone-900">Steel, fixed</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-stone-500">Nib Sizes</td>
                  <td className="px-4 py-3 text-stone-900">EF, F, M, B, LH</td>
                  <td className="px-4 py-3 text-stone-900">F, M</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-stone-500">Filling System</td>
                  <td className="px-4 py-3 text-stone-900">Cartridge/Converter (sold separately)</td>
                  <td className="px-4 py-3 text-stone-900">Cartridge/Converter (converter included)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-stone-500">Grip</td>
                  <td className="px-4 py-3 text-stone-900">Triangular (pencil-like)</td>
                  <td className="px-4 py-3 text-stone-900">Cylindrical, smooth</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-stone-500">Cartridge Type</td>
                  <td className="px-4 py-3 text-stone-900">Lamy proprietary</td>
                  <td className="px-4 py-3 text-stone-900">Pilot proprietary</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-stone-500">Nib Swap?</td>
                  <td className="px-4 py-3 text-green-400">Yes (easy snap-in)</td>
                  <td className="px-4 py-3 text-red-400">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-stone-500">Design</td>
                  <td className="px-4 py-3 text-stone-900">Modernist, Bauhaus</td>
                  <td className="px-4 py-3 text-stone-900">Classic, retro</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-stone-500">Best For</td>
                  <td className="px-4 py-3 text-stone-900">Long writing, left-handers</td>
                  <td className="px-4 py-3 text-stone-900">Everyday carry, value seekers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Sections */}
        <section className="mb-12 space-y-6">
          <div className="p-6 rounded border border-stone-200 bg-white">
            <h2 className="text-xl font-bold text-blue-800 mb-3">The Nib</h2>
            <p className="text-sm text-stone-500 mb-3">
              The Lamy Safari uses Western sizing (its Fine writes like a Japanese Medium). The Pilot
              Metropolitan uses Japanese sizing — its Fine is genuinely fine, perfect for small handwriting
              or writing on rough paper.
            </p>
            <p className="text-sm text-stone-500">
              Pilot&apos;s nibs are widely considered smoother out of the box. Lamy&apos;s nibs have more
              feedback but can be swapped for different sizes or even specialty nibs (left-handed, calligraphy).
            </p>
          </div>

          <div className="p-6 rounded border border-stone-200 bg-white">
            <h2 className="text-xl font-bold text-blue-800 mb-3">The Ink System</h2>
            <p className="text-sm text-stone-500 mb-3">
              Both use proprietary cartridges, which limits your ink choices to their respective brands.
              However, both support converters for bottled ink — and the Metropolitan includes a
              CON-40 converter in the box. The Lamy Z28 converter is sold separately (~$8).
            </p>
            <p className="text-sm text-stone-500">
              Lamy cartridges are easier to find in stationery stores. Pilot cartridges are more widely
              available in Asian markets.
            </p>
          </div>

          <div className="p-6 rounded border border-stone-200 bg-white">
            <h2 className="text-xl font-bold text-blue-800 mb-3">Build Quality</h2>
            <p className="text-sm text-stone-500">
              The Metropolitan feels more premium due to its brass body and weight. The Safari is lighter
              and more durable (ABS plastic doesn&apos;t scratch or dent). Both will last years with
              proper care. The Safari&apos;s clip is more robust; the Metropolitan&apos;s cap can feel
              slightly loose.
            </p>
          </div>
        </section>

        {/* Verdict */}
        <section className="mb-12 p-6 rounded border border-amber-700/30 bg-amber-900/10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Our Verdict</h2>
          <div className="space-y-3 text-sm text-stone-700">
            <p>
              <strong>Buy the Lamy Safari if:</strong> You want a lightweight pen for long writing sessions,
              you&apos;re left-handed, you want to experiment with different nib sizes, or you prefer the
              modern Bauhaus design.
            </p>
            <p>
              <strong>Buy the Pilot Metropolitan if:</strong> You want the best value, you prefer a heavier
              pen, you want finer nib sizes for small handwriting, or you want a converter included in the box.
            </p>
            <p className="text-blue-800 font-medium">
              Can&apos;t decide? Buy both. They&apos;re under $30 each and complement each other perfectly.
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="border-t border-stone-200 pt-8">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/best-fountain-pens-for-beginners" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Pens for Beginners →</span>
              <span className="block text-stone-400 mt-1">Top 10 starter pens</span>
            </Link>
            <Link href="/blog/best-fountain-pens-under-50" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Pens Under $50 →</span>
              <span className="block text-stone-400 mt-1">Affordable options</span>
            </Link>
            <Link href="/brands/lamy/safari" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Lamy Safari Prices →</span>
              <span className="block text-stone-400 mt-1">Compare retailers</span>
            </Link>
            <Link href="/brands/pilot/metropolitan" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Pilot Metropolitan Prices →</span>
              <span className="block text-stone-400 mt-1">Compare retailers</span>
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
            headline: "Lamy Safari vs Pilot Metropolitan — Which Beginner Fountain Pen Should You Buy?",
            description: "The two most recommended beginner fountain pens, head-to-head. Price, nib quality, and value compared.",
            author: { "@type": "Organization", name: "PenPrice" },
            publisher: { "@type": "Organization", name: "PenPrice" },
            datePublished: "2026-06-26",
            dateModified: "2026-06-26",
            mainEntityOfPage: "https://penprice.vercel.app/blog/lamy-safari-vs-pilot-metropolitan",
          }),
        }}
      />
    </div>
  );
}