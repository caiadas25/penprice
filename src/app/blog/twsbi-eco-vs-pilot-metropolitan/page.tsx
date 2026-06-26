import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TWSBI Eco vs Pilot Metropolitan — Best Fountain Pen Under $35 | PenPrice",
  description:
    "TWSBI Eco vs Pilot Metropolitan: the two best fountain pens under $35, compared. Piston filler vs cartridge, ink capacity, nib quality, build, and price across Amazon, JetPens, and Goulet Pens.",
  openGraph: {
    title: "TWSBI Eco vs Pilot Metropolitan — Which Should You Buy?",
    description: "The ultimate budget fountain pen showdown. Pistink capacity, nib quality, and value compared.",
    type: "article",
  },
};

export default function TwsbiEcoVsPilotMetropolitanPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-500 mb-8">
        <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-amber-400 transition-colors">Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-400">TWSBI Eco vs Pilot Metropolitan</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-amber-400 text-sm font-medium mb-2">Comparison Guide — Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            TWSBI Eco vs Pilot Metropolitan
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Two of the most recommended budget fountain pens, but they couldn&apos;t be more different.
            One is a piston-filling ink tank; the other is a sleek cartridge pen. Here&apos;s how they compare.
          </p>
        </header>

        {/* Quick Comparison Table */}
        <section className="mb-10 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-700">
                <th className="text-left py-3 px-4 font-semibold text-slate-300">Feature</th>
                <th className="text-left py-3 px-4 font-semibold text-amber-400">TWSBI Eco</th>
                <th className="text-left py-3 px-4 font-semibold text-amber-400">Pilot Metropolitan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-4 text-slate-400">Price (from)</td>
                <td className="py-3 px-4 text-white">$31.99</td>
                <td className="py-3 px-4 text-white">$18.95</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-4 text-slate-400">Filling System</td>
                <td className="py-3 px-4 text-white">Piston</td>
                <td className="py-3 px-4 text-white">Cartridge / Converter</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-4 text-slate-400">Ink Capacity</td>
                <td className="py-3 px-4 text-white">~1.7ml</td>
                <td className="py-3 px-4 text-white">~0.5ml (cartridge) / ~0.4ml (converter)</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-4 text-slate-400">Nib</td>
                <td className="py-3 px-4 text-white">Steel (#6 size)</td>
                <td className="py-3 px-4 text-white">Steel (proprietary Pilot)</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-4 text-slate-400">Nib Sizes</td>
                <td className="py-3 px-4 text-white">EF, F, M, B, Stub 1.1</td>
                <td className="py-3 px-4 text-white">Fine, Medium</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-4 text-slate-400">Material</td>
                <td className="py-3 px-4 text-white">Acrylic (demonstrator)</td>
                <td className="py-3 px-4 text-white">Brass with lacquer finish</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-4 text-slate-400">Weight</td>
                <td className="py-3 px-4 text-white">~18g</td>
                <td className="py-3 px-4 text-white">~27g</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-4 text-slate-400">Transparent Body</td>
                <td className="py-3 px-4 text-white">Yes (demonstrator)</td>
                <td className="py-3 px-4 text-white">No (opaque)</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-4 text-slate-400">Converter Included</td>
                <td className="py-3 px-4 text-white">N/A (built-in piston)</td>
                <td className="py-3 px-4 text-white">Yes (CON-40)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-slate-400">Year Introduced</td>
                <td className="py-3 px-4 text-white">2015</td>
                <td className="py-3 px-4 text-white">2008</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Price Comparison */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Price Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-slate-700 bg-slate-800/30">
              <h3 className="font-bold text-amber-400 mb-3">TWSBI Eco</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Amazon</span>
                  <span className="text-white font-mono">$31.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">JetPens</span>
                  <span className="text-white font-mono">$34.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Goulet Pens</span>
                  <span className="text-white font-mono">$35.00</span>
                </div>
              </div>
              <Link
                href="/brands/twsbi/eco"
                className="inline-block mt-3 text-sm text-amber-400 hover:text-amber-300 transition-colors"
              >
                See all TWSBI Eco prices →
              </Link>
            </div>
            <div className="p-4 rounded-lg border border-slate-700 bg-slate-800/30">
              <h3 className="font-bold text-amber-400 mb-3">Pilot Metropolitan</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Amazon</span>
                  <span className="text-white font-mono">$18.95</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">JetPens</span>
                  <span className="text-white font-mono">$28.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Goulet Pens</span>
                  <span className="text-white font-mono">$28.80</span>
                </div>
              </div>
              <Link
                href="/brands/pilot/metropolitan"
                className="inline-block mt-3 text-sm text-amber-400 hover:text-amber-300 transition-colors"
              >
                See all Pilot Metropolitan prices →
              </Link>
            </div>
          </div>
        </section>

        {/* Filling System Deep Dive */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Filling System: The Biggest Difference</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            This is where these two pens diverge the most. The TWSBI Eco uses a <strong className="text-white">piston filler</strong> — you
            twist the end cap and a piston moves inside the barrel, drawing ink directly from a bottle. The Pilot Metropolitan uses
            <strong className="text-white"> proprietary cartridges or a converter</strong> (the included CON-40).
          </p>
          <div className="p-4 rounded-lg border border-slate-700 bg-slate-800/30 mb-4">
            <h3 className="font-semibold text-white mb-2">Ink Capacity</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              The TWSBI Eco holds roughly <strong className="text-white">1.7ml of ink</strong> — nearly 4x more than the Metropolitan with a converter (~0.4ml)
              and 3x more than a Pilot cartridge (~0.5ml). If you write a lot, you&apos;ll refill the TWSBI far less often.
            </p>
          </div>
          <p className="text-slate-400 leading-relaxed">
            The trade-off? The Metropolitan is more convenient for beginners. Pop in a cartridge and you&apos;re writing in seconds. The TWSBI
            requires bottled ink, which means you need a bottle of ink and the willingness to fill from it. Once you get the hang of it, though,
            piston filling is addictive.
          </p>
        </section>

        {/* Nib Quality */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Nib Quality & Writing Experience</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            Both pens use steel nibs, but the writing experience is noticeably different.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-slate-700 bg-slate-800/30">
              <h3 className="font-semibold text-amber-400 mb-2">TWSBI Eco Nib</h3>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Standard #6 size (easy to swap)</li>
                <li>• Smooth with slight feedback</li>
                <li>• 5 nib sizes including Stub 1.1</li>
                <li>• Swappable with other #6 nibs</li>
                <li>• Slightly wet writer</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border border-slate-700 bg-slate-800/30">
              <h3 className="font-semibold text-amber-400 mb-2">Pilot Metropolitan Nib</h3>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Proprietary Pilot size</li>
                <li>• Exceptionally smooth for a steel nib</li>
                <li>• Only 2 sizes (Fine, Medium)</li>
                <li>• Japanese sizing (finer than Western)</li>
                <li>• Consistent, predictable flow</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-400 leading-relaxed mt-4">
            The Pilot Metropolitan&apos;s Fine nib is genuinely one of the best steel nibs at any price. It&apos;s smooth, consistent, and the
            Japanese Fine is perfect for everyday writing on regular paper. The TWSBI Eco&apos;s nib is also excellent, but the real advantage is
            swappability — you can buy a Stub 1.1 nib unit and transform the pen&apos;s character.
          </p>
        </section>

        {/* Build Quality */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Build Quality & Design</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            The Metropolitan feels more premium out of the box. The brass body gives it weight and presence. The lacquer finish
            looks and feels like a pen costing twice as much. It&apos;s a pen that looks at home next to a Montblanc.
          </p>
          <p className="text-slate-400 leading-relaxed mb-4">
            The TWSBI Eco is plastic and feels lighter, more utilitarian. But the demonstrator body — showing the ink sloshing
            inside — has its own appeal. And the build quality is solid; TWSBI has iterated on this design for years.
          </p>
          <p className="text-slate-400 leading-relaxed">
            One thing to note: TWSBI pens have historically been prone to cracking in cold weather or with heavy use. TWSBI has
            excellent customer service and will replace parts for free, but it&apos;s worth mentioning. The Metropolitan is essentially
            indestructible.
          </p>
        </section>

        {/* Verdict */}
        <section className="mb-10 p-6 rounded-xl border border-amber-700/30 bg-amber-900/10">
          <h2 className="text-2xl font-bold text-white mb-4">Verdict</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-amber-400 mb-2">Choose the TWSBI Eco if...</h3>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• You want to use bottled ink (more colors, cheaper per fill)</li>
                <li>• You write a lot and want high ink capacity</li>
                <li>• You like the demonstrator look (seeing ink in the pen)</li>
                <li>• You want to experiment with different nib sizes</li>
                <li>• You&apos;re okay spending $30-35</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-amber-400 mb-2">Choose the Pilot Metropolitan if...</h3>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• You want the simplest possible setup (cartridge = instant)</li>
                <li>• You prefer a heavier, more premium-feeling pen</li>
                <li>• You have small handwriting (Japanese Fine is perfect)</li>
                <li>• You want the best value under $20</li>
                <li>• You&apos;re buying your very first fountain pen</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-400 leading-relaxed mt-4">
            Honestly? At these prices, buy both. They complement each other perfectly. The Metropolitan for desk duty and the TWSBI for
            ink exploration. Total investment under $50 for two excellent, very different pens.
          </p>
        </section>

        {/* Internal Links */}
        <section className="mt-12 border-t border-slate-700 pt-8">
          <h2 className="text-lg font-bold text-white mb-3">Explore More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/best-fountain-pens-for-beginners" className="p-4 rounded-lg border border-slate-700 hover:border-amber-600/50 transition-all text-sm">
              <span className="text-white font-semibold">Beginner&apos;s Guide →</span>
              <span className="block text-slate-500 mt-1">Top 10 picks for first-time buyers</span>
            </Link>
            <Link href="/blog/lamy-safari-vs-pilot-metropolitan" className="p-4 rounded-lg border border-slate-700 hover:border-amber-600/50 transition-all text-sm">
              <span className="text-white font-semibold">Lamy Safari vs Pilot Metropolitan →</span>
              <span className="block text-slate-500 mt-1">The other classic beginner showdown</span>
            </Link>
            <Link href="/brands/twsbi" className="p-4 rounded-lg border border-slate-700 hover:border-amber-600/50 transition-all text-sm">
              <span className="text-white font-semibold">Browse TWSBI Pens →</span>
              <span className="block text-slate-500 mt-1">ECO, Diamond 580, Vac 700R prices</span>
            </Link>
            <Link href="/brands/pilot" className="p-4 rounded-lg border border-slate-700 hover:border-amber-600/50 transition-all text-sm">
              <span className="text-white font-semibold">Browse Pilot Pens →</span>
              <span className="block text-slate-500 mt-1">Metropolitan, Custom 823, Vanishing Point</span>
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
            headline: "TWSBI Eco vs Pilot Metropolitan — Best Fountain Pen Under $35",
            description: "TWSBI Eco vs Pilot Metropolitan compared. Piston filler vs cartridge, ink capacity, nib quality, and price.",
            author: { "@type": "Organization", name: "PenPrice" },
            publisher: { "@type": "Organization", name: "PenPrice" },
            datePublished: "2026-06-26",
            dateModified: "2026-06-26",
            mainEntityOfPage: "https://penprice.vercel.app/blog/twsbi-eco-vs-pilot-metropolitan",
          }),
        }}
      />
    </div>
  );
}
