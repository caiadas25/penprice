import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kaweco Sport vs Lamy Safari — Best Portable Fountain Pen 2026 | PenPrice",
  description:
    "Kaweco Sport vs Lamy Safari: the two best portable fountain pens compared. Pocket-size vs full-size, design, nibs, filling systems, and live prices from Amazon, JetPens, and Goulet Pens.",
  openGraph: {
    title: "Kaweco Sport vs Lamy Safari — Which Portable Pen Wins?",
    description:
      "Two iconic portable fountain pens compared. Pocket clip vs triangular grip, steel nibs, and value.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaweco Sport vs Lamy Safari — Portable Fountain Pen Comparison",
    description:
      "Pocket-size Kaweco Sport vs full-size Lamy Safari compared. Nib quality, portability, design, and price.",
  },
};

export default function KawecoSportVsLamySafariPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-800 transition-colors">Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-500">Kaweco Sport vs Lamy Safari</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-blue-800 text-sm font-medium mb-2">Comparison Guide — Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Kaweco Sport vs Lamy Safari — Best Portable Fountain Pen?
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            The Kaweco Sport popularized the pocket fountain pen. The Lamy Safari popularized modernist pen design.
            Both are iconic. Both are under $30. But they serve very different purposes. Here&apos;s how they compare.
          </p>
        </header>

        {/* Quick Comparison Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-stone-200 rounded overflow-hidden">
              <thead className="bg-stone-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-stone-700">Feature</th>
                  <th className="text-left p-3 font-semibold text-blue-800">Kaweco Sport</th>
                  <th className="text-left p-3 font-semibold text-blue-800">Lamy Safari</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr><td className="p-3 text-stone-500">Price (from)</td><td className="p-3 text-stone-900 font-mono">$25</td><td className="p-3 text-stone-900 font-mono">$28</td></tr>
                <tr><td className="p-3 text-stone-500">Length (capped)</td><td className="p-3 text-stone-900">4.1 inches (105mm)</td><td className="p-3 text-stone-900">5.5 inches (140mm)</td></tr>
                <tr><td className="p-3 text-stone-500">Length (posted)</td><td className="p-3 text-stone-900">5.2 inches (133mm)</td><td className="p-3 text-stone-900">5.5 inches (140mm)</td></tr>
                <tr><td className="p-3 text-stone-500">Weight</td><td className="p-3 text-stone-900">12g (plastic) / 28g (AL)</td><td className="p-3 text-stone-900">17g</td></tr>
                <tr><td className="p-3 text-stone-500">Material</td><td className="p-3 text-stone-900">ABS plastic / Aluminum / Brass</td><td className="p-3 text-stone-900">ABS plastic</td></tr>
                <tr><td className="p-3 text-stone-500">Nib</td><td className="p-3 text-stone-900">Steel, Kaweco Bock #5</td><td className="p-3 text-stone-900">Steel, Lamy proprietary</td></tr>
                <tr><td className="p-3 text-stone-500">Nib sizes</td><td className="p-3 text-stone-900">EF, F, M, B, BB, 1.1, 1.5, 2.3</td><td className="p-3 text-stone-900">EF, F, M, B, LH</td></tr>
                <tr><td className="p-3 text-stone-500">Filling system</td><td className="p-3 text-stone-900">Cartridge (Kaweco/Std) / Adapter</td><td className="p-3 text-stone-900">Cartridge / Converter (Z28)</td></tr>
                <tr><td className="p-3 text-stone-500">Cap style</td><td className="p-3 text-stone-900">Screw cap</td><td className="p-3 text-stone-900">Snap cap</td></tr>
                <tr><td className="p-3 text-stone-500">Clip</td><td className="p-3 text-stone-900">Separate purchase ($5-15)</td><td className="p-3 text-stone-900">Included</td></tr>
                <tr><td className="p-3 text-stone-500">Best for</td><td className="p-3 text-stone-900">Pocket carry, EDC</td><td className="p-3 text-stone-900">Desk, school, daily writing</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Portability */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Portability: The Core Difference</h2>
          <p className="text-stone-500 leading-relaxed mb-4">
            The Kaweco Sport was designed in 1930 as a pocket pen. At <strong className="text-stone-900">4.1 inches capped</strong>,
            it fits in a jeans coin pocket, a small bag, or a card wallet. When you post the cap on the back, it becomes
            a full-length pen (5.2 inches). The Lamy Safari is a standard full-size pen at 5.5 inches.
          </p>
          <p className="text-stone-500 leading-relaxed mb-4">
            This isn&apos;t a minor difference. If you carry a pen in your pocket daily, the Kaweco Sport is one of the few
            fountain pens that&apos;s genuinely pocketable. The Lamy Safari needs a pen case or bag.
          </p>
          <div className="p-4 rounded border border-stone-200 bg-white">
            <h3 className="font-semibold text-stone-900 mb-2">Weight Matters Too</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              The plastic Kaweco Sport weighs just 12g — lighter than most ballpoints. The Aluminum Sport is 28g, which
              gives it a premium heft. The Lamy Safari sits at 17g, comfortable but noticeably bigger in the hand.
            </p>
          </div>
        </section>

        {/* Nib Comparison */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Nib Quality & Writing Experience</h2>
          <p className="text-stone-500 leading-relaxed mb-4">
            Both pens use steel nibs, but the writing experience and nib ecosystems are very different.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-semibold text-blue-800 mb-2">Kaweco Sport Nib</h3>
              <ul className="text-sm text-stone-500 space-y-1">
                <li>• Kaweco/Bock #5 size (widely available)</li>
                <li>• Slightly springy, smooth with feedback</li>
                <li>• 8 nib sizes including calligraphy stubs</li>
                <li>• Easy to swap (push-fit nib unit)</li>
                <li>• Available in steel, gold (retro style)</li>
              </ul>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-semibold text-blue-800 mb-2">Lamy Safari Nib</h3>
              <ul className="text-sm text-stone-500 space-y-1">
                <li>• Lamy proprietary size</li>
                <li>• Smooth, consistent, slightly wet</li>
                <li>• 5 sizes including Left-Handed</li>
                <li>• Easy to swap (pull-out nib unit)</li>
                <li>• Gold upgrade available (~$100)</li>
              </ul>
            </div>
          </div>
          <p className="text-stone-500 leading-relaxed mt-4">
            The Kaweco&apos;s nib has more character — a slight springiness that makes it pleasant for longer writing
            sessions. The Lamy Safari&apos;s nib is more predictable and consistent, which some writers prefer.
            Both are excellent for the price.
          </p>
          <p className="text-stone-500 leading-relaxed mt-2">
            <strong className="text-stone-900">Important:</strong> Japanese nib sizes (like Pilot) run finer than Western sizes.
            Both Kaweco and Lamy use Western sizing, so their Fine nibs are comparable.
          </p>
        </section>

        {/* Design & Build */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Design & Build Quality</h2>
          <p className="text-stone-500 leading-relaxed mb-4">
            These two pens represent opposite design philosophies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-semibold text-stone-900 mb-2">Kaweco Sport</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Art Deco heritage. The octagonal cap is iconic — it prevents the pen from rolling off a desk
                without a clip. The design has barely changed since 1930. Available in dozens of colors and
                materials: Classic Sport (plastic), AL Sport (aluminum), Brass Sport, Skyline Sport, and more.
              </p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-semibold text-stone-900 mb-2">Lamy Safari</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Bauhaus modernism. Designed by Wolfgang Fabian in 1980, the triangular grip section forces
                proper pen hold. The molded clip is integrated into the body. New special edition colors
                release annually. The design is polarizing — you either love it or find it uncomfortable.
              </p>
            </div>
          </div>
          <p className="text-stone-500 leading-relaxed mt-4">
            The Lamy Safari&apos;s triangular grip is its most controversial feature. If you hold a pen traditionally,
            it&apos;ll feel natural. If you have an unusual grip, it may be uncomfortable. The Kaweco&apos;s round section
            is more forgiving for different grip styles.
          </p>
        </section>

        {/* Price Comparison */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Price Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-blue-800 mb-3">Kaweco Sport (Classic)</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-stone-500">Amazon</span>
                  <span className="text-stone-900 font-mono">$25.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">JetPens</span>
                  <span className="text-stone-900 font-mono">$28.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Goulet Pens</span>
                  <span className="text-stone-900 font-mono">$28.00</span>
                </div>
              </div>
              <Link
                href="/brands/kaweco/sport"
                className="inline-block mt-3 text-sm text-blue-800 hover:text-blue-700 transition-colors"
              >
                See all Kaweco Sport prices →
              </Link>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-blue-800 mb-3">Lamy Safari</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-stone-500">Amazon</span>
                  <span className="text-stone-900 font-mono">$28.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">JetPens</span>
                  <span className="text-stone-900 font-mono">$30.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Goulet Pens</span>
                  <span className="text-stone-900 font-mono">$30.00</span>
                </div>
              </div>
              <Link
                href="/brands/lamy/safari"
                className="inline-block mt-3 text-sm text-blue-800 hover:text-blue-700 transition-colors"
              >
                See all Lamy Safari prices →
              </Link>
            </div>
          </div>
          <p className="text-stone-500 leading-relaxed mt-4">
            Prices are nearly identical. The Kaweco AL Sport jumps to ~$60-75, and the Brass Sport to ~$80-90.
            The Lamy Safari has no premium variant (the Lamy AL-Star is the metal sibling at ~$40).
          </p>
        </section>

        {/* Filling System */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Filling System</h2>
          <p className="text-stone-500 leading-relaxed mb-4">
            Both pens use proprietary cartridge systems, but with different compatibility:
          </p>
          <div className="p-4 rounded border border-stone-200 bg-white mb-4">
            <h3 className="font-semibold text-stone-900 mb-2">Kaweco Sport</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              Uses <strong className="text-stone-900">Kawecomini cartridges</strong> (short, proprietary) or standard international
              short cartridges. For bottled ink, you need the <strong className="text-stone-900">Kaweco Sport converter</strong> (sold separately, ~$8),
              which has a small 0.7ml capacity. Or use a standard international short cartridge as an eyedropper fill.
            </p>
          </div>
          <div className="p-4 rounded border border-stone-200 bg-white">
            <h3 className="font-semibold text-stone-900 mb-2">Lamy Safari</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              Uses <strong className="text-stone-900">Lamy T10 cartridges</strong> (proprietary, wide) or the included
              <strong className="text-stone-900"> Lamy Z28 converter</strong> (~0.7ml). The converter is often included in the box
              (varies by retailer). Lamy cartridges are widely available at stationery stores.
            </p>
          </div>
          <p className="text-stone-500 leading-relaxed mt-4">
            Neither pen has great bottled ink capacity. If that matters to you, consider the
            <Link href="/blog/twsbi-eco-vs-pilot-metropolitan" className="text-blue-800 hover:text-blue-700 transition-colors">
              TWSBI Eco</Link> (1.7ml piston filler) instead.
          </p>
        </section>

        {/* Verdict */}
        <section className="mb-10 p-6 rounded border border-amber-700/30 bg-amber-900/10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Verdict</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-blue-800 mb-2">Choose the Kaweco Sport if...</h3>
              <ul className="text-sm text-stone-500 space-y-2">
                <li>• You carry a pen in your pocket every day</li>
                <li>• You want a pocket pen that actually writes well</li>
                <li>• You prefer a round grip section</li>
                <li>• You want lots of nib size options (8 sizes)</li>
                <li>• You like Art Deco design and compact tools</li>
                <li>• You want aluminum or brass for premium feel</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-blue-800 mb-2">Choose the Lamy Safari if...</h3>
              <ul className="text-sm text-stone-500 space-y-2">
                <li>• You write at a desk or in class mostly</li>
                <li>• You want a full-size pen without paying full-size prices</li>
                <li>• The triangular grip feels natural to you</li>
                <li>• You like special edition colors (new every year)</li>
                <li>• You want a clip included (no extra purchase)</li>
                <li>• You have large hands (full-size body)</li>
              </ul>
            </div>
          </div>
          <p className="text-stone-500 leading-relaxed mt-4">
            They&apos;re complementary, not competing. The Kaweco Sport is the best pocket fountain pen made.
            The Lamy Safari is one of the best desk/school pens under $30. If you can afford both (~$55 total),
            you&apos;ll have a pen for every situation.
          </p>
        </section>

        {/* Related Posts */}
        <section className="mt-12 border-t border-stone-200 pt-8">
          <h2 className="text-lg font-bold text-stone-900 mb-3">Explore More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/lamy-safari-vs-pilot-metropolitan" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Lamy Safari vs Pilot Metropolitan →</span>
              <span className="block text-stone-400 mt-1">The classic beginner showdown</span>
            </Link>
            <Link href="/blog/best-fountain-pens-for-travel" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Fountain Pens for Travel →</span>
              <span className="block text-stone-400 mt-1">Pocket pens and leak-proof picks</span>
            </Link>
            <Link href="/brands/kaweco" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Browse Kaweco Pens →</span>
              <span className="block text-stone-400 mt-1">Sport, AL-Sport, Liliput, Dia2 prices</span>
            </Link>
            <Link href="/brands/lamy" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Browse Lamy Pens →</span>
              <span className="block text-stone-400 mt-1">Safari, AL-Star, 2000, Studio prices</span>
            </Link>
          </div>
        </section>
      </article>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Kaweco Sport vs Lamy Safari — Best Portable Fountain Pen 2026",
            description:
              "Kaweco Sport vs Lamy Safari compared. Pocket-size vs full-size, design, nibs, filling systems, and price.",
            author: { "@type": "Organization", name: "PenPrice" },
            publisher: { "@type": "Organization", name: "PenPrice" },
            datePublished: "2026-06-30",
            dateModified: "2026-06-30",
            mainEntityOfPage: "https://penprice.vercel.app/blog/kaweco-sport-vs-lamy-safari",
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
                name: "Is the Kaweco Sport good for everyday writing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, the Kaweco Sport is an excellent everyday pen, especially for pocket carry. At 4.1 inches capped, it fits in a jeans pocket. Posted (cap on back), it extends to 5.2 inches — a comfortable full-size writing length. The steel nib is smooth and reliable.",
                },
              },
              {
                "@type": "Question",
                name: "Can you use Lamy cartridges in a Kaweco Sport?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. The Kaweco Sport uses Kaweco mini cartridges or standard international short cartridges. Lamy uses a proprietary wide cartridge that is not compatible. You cannot use Lamy cartridges in a Kaweco without an adapter.",
                },
              },
              {
                "@type": "Question",
                name: "Which is better for students, Kaweco Sport or Lamy Safari?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Lamy Safari is generally better for students. It's a full-size pen with a comfortable grip designed for extended writing, a clip to secure it in a notebook, and widely available cartridges. The Kaweco Sport is better if you need to carry a pen in a pocket.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
