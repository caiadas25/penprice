import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TWSBI Eco vs Kaweco Sport — Budget Fountain Pen Battle 2026 | PenPrice",
  description:
    "TWSBI Eco vs Kaweco Sport: the two best budget fountain pens under $40 compared. Piston filler vs cartridge, ink capacity, nib quality, portability, and live prices from Amazon, JetPens, and Goulet Pens.",
  openGraph: {
    title: "TWSBI Eco vs Kaweco Sport — Which Budget Pen Wins?",
    description:
      "Two iconic budget fountain pens compared. Piston-filling ink tank vs pocket-size classic. Nib feel, build quality, value, and where to buy.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "TWSBI Eco vs Kaweco Sport — Budget Fountain Pen Showdown",
    description:
      "TWSBI Eco vs Kaweco Sport compared. Which budget fountain pen deserves your money?",
  },
};

export default function TwsbiEcoVsKawecoSportPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-800 transition-colors">Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-500">TWSBI Eco vs Kaweco Sport</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-blue-800 text-sm font-medium mb-2">Comparison Guide — Updated July 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            TWSBI Eco vs Kaweco Sport — Budget Fountain Pen Battle
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            Ask any fountain pen forum &ldquo;best pen under $40?&rdquo; and these two names dominate the conversation.
            The TWSBI Eco is a piston-filling ink tank with a massive ink capacity. The Kaweco Sport is a pocket-sized
            classic that&apos;s been around since 1930. Both are beloved. Both are affordable. But they serve
            completely different purposes. Here&apos;s how they compare.
          </p>
        </header>

        {/* TL;DR */}
        <div className="bg-white border border-stone-200 rounded p-6 mb-10">
          <h2 className="text-lg font-bold text-stone-900 mb-3">TL;DR</h2>
          <ul className="space-y-2 text-sm text-stone-700">
            <li><strong className="text-stone-900">Choose the TWSBI Eco</strong> if you want maximum ink capacity, a piston filler, a demonstrator (clear) body, and a full-size pen for desk use.</li>
            <li><strong className="text-stone-900">Choose the Kaweco Sport</strong> if you want a pocket pen for EDC, a screw cap that won&apos;t pop open, and classic retro styling.</li>
            <li><strong className="text-stone-900">Budget pick:</strong> TWSBI Eco ($32) offers more pen per dollar. Kaweco Sport ($25) wins on portability.</li>
            <li><strong className="text-stone-900">Both</strong> use steel nibs, both are well under $40, and both are excellent entry points into fountain pens.</li>
          </ul>
        </div>

        {/* Quick Comparison Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-stone-200 rounded overflow-hidden">
              <thead className="bg-stone-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-stone-700">Feature</th>
                  <th className="text-left p-3 font-semibold text-blue-800">TWSBI Eco</th>
                  <th className="text-left p-3 font-semibold text-blue-800">Kaweco Sport</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr><td className="p-3 text-stone-500">Price (from)</td><td className="p-3 text-stone-900 font-mono">$32</td><td className="p-3 text-stone-900 font-mono">$25</td></tr>
                <tr><td className="p-3 text-stone-500">Length (capped)</td><td className="p-3 text-stone-900">5.5 inches (139mm)</td><td className="p-3 text-stone-900">4.1 inches (105mm)</td></tr>
                <tr><td className="p-3 text-stone-500">Length (posted)</td><td className="p-3 text-stone-900">5.5 inches (139mm)</td><td className="p-3 text-stone-900">5.2 inches (133mm)</td></tr>
                <tr><td className="p-3 text-stone-500">Weight</td><td className="p-3 text-stone-900">19g</td><td className="p-3 text-stone-900">12g (plastic) / 28g (AL)</td></tr>
                <tr><td className="p-3 text-stone-500">Material</td><td className="p-3 text-stone-900">ABS plastic (demonstrator)</td><td className="p-3 text-stone-900">ABS plastic / Aluminum / Brass</td></tr>
                <tr><td className="p-3 text-stone-500">Nib</td><td className="p-3 text-stone-900">Steel, JoWo #5</td><td className="p-3 text-stone-900">Steel, Kaweco Bock #5</td></tr>
                <tr><td className="p-3 text-stone-500">Nib sizes</td><td className="p-3 text-stone-900">EF, F, M, B</td><td className="p-3 text-stone-900">EF, F, M, B, BB, 1.1, 1.5, 2.3</td></tr>
                <tr><td className="p-3 text-stone-500">Filling system</td><td className="p-3 text-stone-900">Piston</td><td className="p-3 text-stone-900">Cartridge (Kaweco/Std) / Adapter</td></tr>
                <tr><td className="p-3 text-stone-500">Ink capacity</td><td className="p-3 text-stone-900">~1.7ml</td><td className="p-3 text-stone-900">~0.7ml (cartridge)</td></tr>
                <tr><td className="p-3 text-stone-500">Cap style</td><td className="p-3 text-stone-900">Snap cap</td><td className="p-3 text-stone-900">Screw cap</td></tr>
                <tr><td className="p-3 text-stone-500">Demonstrator</td><td className="p-3 text-stone-900">Yes (clear body)</td><td className="p-3 text-stone-900">Yes (clear Sport available)</td></tr>
                <tr><td className="p-3 text-stone-500">Best for</td><td className="p-3 text-stone-900">Desk writing, ink sampling</td><td className="p-3 text-stone-900">Pocket carry, EDC</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Price Comparison */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Live Price Comparison</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-semibold text-stone-900 mb-2">TWSBI Eco</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-stone-500">Amazon</span><span className="text-stone-900 font-mono">$32.00</span></div>
                <div className="flex justify-between"><span className="text-stone-500">JetPens</span><span className="text-stone-900 font-mono">$33.99</span></div>
                <div className="flex justify-between"><span className="text-stone-500">Goulet Pens</span><span className="text-stone-900 font-mono">$35.00</span></div>
              </div>
              <Link href="/brands/twsbi/eco" className="mt-3 inline-block text-xs text-blue-800 hover:underline">See full price history →</Link>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-semibold text-stone-900 mb-2">Kaweco Sport</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-stone-500">Amazon</span><span className="text-stone-900 font-mono">$25.00</span></div>
                <div className="flex justify-between"><span className="text-stone-500">JetPens</span><span className="text-stone-900 font-mono">$28.00</span></div>
                <div className="flex justify-between"><span className="text-stone-500">Goulet Pens</span><span className="text-stone-900 font-mono">$28.00</span></div>
              </div>
              <Link href="/brands/kaweco/sport" className="mt-3 inline-block text-xs text-blue-800 hover:underline">See full price history →</Link>
            </div>
          </div>
        </section>

        {/* Ink Capacity */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Ink Capacity: The Big Differentiator</h2>
          <p className="text-stone-500 leading-relaxed mb-4">
            The TWSBI Eco&apos;s piston filler holds approximately <strong className="text-stone-900">1.7ml of ink</strong> — one
            of the largest capacities in any fountain pen under $100. That means you can write for days without refilling.
            For context, a standard Pilot cartridge holds about 0.7ml, and the Kaweco Sport uses cartridges in that same range.
          </p>
          <p className="text-stone-500 leading-relaxed mb-4">
            The Kaweco Sport uses short international standard cartridges (~0.7ml) or can be fitted with a Kaweco squeeze
            converter or piston converter (sold separately). If you want to use bottled ink with the Sport, you&apos;ll
            need the <Link href="/blog/fountain-pen-converters-explained" className="text-blue-800 hover:underline">Kaweco mini converter</Link>, which
            holds only about 0.4ml.
          </p>
          <p className="text-stone-500 leading-relaxed">
            <strong className="text-stone-900">Verdict:</strong> If ink capacity matters to you, the TWSBI Eco wins by a
            landslide. The Kaweco Sport is designed for cartridge convenience, not bottle refilling.
          </p>
        </section>

        {/* Portability */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Portability: Pocket Pen vs Full-Size</h2>
          <p className="text-stone-500 leading-relaxed mb-4">
            The Kaweco Sport was born as a pocket pen. At <strong className="text-stone-900">4.1 inches capped</strong>, it
            fits in a jeans coin pocket, a small bag, or a card wallet. Post the cap and it becomes a full-length
            writing instrument (5.2 inches). It&apos;s the original EDC fountain pen.
          </p>
          <p className="text-stone-500 leading-relaxed mb-4">
            The TWSBI Eco is a standard full-size pen at 5.5 inches. It&apos;s not bulky, but it&apos;s not going in
            your pocket unless you wear cargo pants. It&apos;s a desk pen, a bag pen, a &ldquo;I&apos;m going to write
            for a while&rdquo; pen.
          </p>
          <p className="text-stone-500 leading-relaxed">
            <strong className="text-stone-900">Verdict:</strong> For carrying around, the Kaweco Sport is unmatched.
            For sitting down and writing a letter, the TWSBI Eco is more comfortable.
          </p>
        </section>

        {/* Nibs */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Nib Quality</h2>
          <p className="text-stone-500 leading-relaxed mb-4">
            Both pens use steel nibs in the $30 range, and both perform well for their price. The TWSBI Eco uses a
            JoWo #5 nib (the same OEM nib used by many pen brands). It&apos;s smooth, reliable, and available in EF
            through B.
          </p>
          <p className="text-stone-500 leading-relaxed mb-4">
            The Kaweco Sport uses a Kaweco Bock #5 nib. It&apos;s slightly more characterful — Kaweco nibs tend to have
            a bit more feedback, which some writers prefer. The Sport also offers a wider range of specialty nibs
            (1.1mm, 1.5mm, 2.3mm calligraphy nibs) that the Eco doesn&apos;t have.
          </p>
          <p className="text-stone-500 leading-relaxed">
            <strong className="text-stone-900">Verdict:</strong> Tie. Both are solid steel nibs. The Eco is smoother;
            the Sport has more character and more nib options.
          </p>
        </section>

        {/* Build and Design */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Build and Design Philosophy</h2>
          <p className="text-stone-500 leading-relaxed mb-4">
            The TWSBI Eco is a <Link href="/blog/best-fountain-pens-for-beginners" className="text-blue-800 hover:underline">demonstrator pen</Link> —
            its clear body lets you see the ink sloshing inside. It&apos;s functional design: the faceted cap,
            the hexagonal body, the piston mechanism visible through the barrel. It looks modern and technical.
          </p>
          <p className="text-stone-500 leading-relaxed mb-4">
            The Kaweco Sport is retro charm. The octagonal cap, the Art Deco lines, the &ldquo;KAWECO&rdquo;
            branding. It comes in dozens of colors and special editions. It&apos;s a pen with personality — you
            buy it in a color that matches your style.
          </p>
          <p className="text-stone-500 leading-relaxed">
            <strong className="text-stone-900">Verdict:</strong> Completely different aesthetics. The Eco is
            minimalist and functional. The Sport is playful and personal.
          </p>
        </section>

        {/* Which Should You Buy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Which Should You Buy?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded border border-blue-200 bg-blue-50">
              <h3 className="font-semibold text-blue-900 mb-2">Choose the TWSBI Eco if you...</h3>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• Want a pen for extended desk writing sessions</li>
                <li>• Love the look of ink moving through a demonstrator</li>
                <li>• Hate constantly buying cartridges</li>
                <li>• Want to try lots of different bottled inks</li>
                <li>• Don&apos;t need to carry it in your pocket</li>
              </ul>
            </div>
            <div className="p-5 rounded border border-stone-200 bg-stone-50">
              <h3 className="font-semibold text-stone-900 mb-2">Choose the Kaweco Sport if you...</h3>
              <ul className="space-y-1 text-sm text-stone-700">
                <li>• Want a pen that goes everywhere with you</li>
                <li>• Prefer the convenience of cartridges</li>
                <li>• Love retro, Art Deco styling</li>
                <li>• Want calligraphy or specialty nib options</li>
                <li>• Want a pen under $25</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group">
              <summary className="cursor-pointer font-semibold text-stone-900 hover:text-blue-800">
                Can I use bottled ink with the Kaweco Sport?
              </summary>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed">
                Yes, but you need a converter. The Kaweco mini converter or squeeze converter holds about 0.4ml, which is
                much less than the TWSBI Eco&apos;s 1.7ml piston. Some people also refill empty Kaweco cartridges with a syringe.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold text-stone-900 hover:text-blue-800">
                Is the TWSBI Eco fragile?
              </summary>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed">
                The Eco is generally durable, but the demonstrator body can crack if dropped on a hard surface. TWSBI is
                known for excellent customer service and will send replacement parts free of charge if anything breaks.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold text-stone-900 hover:text-blue-800">
                Which pen writes smoother out of the box?
              </summary>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed">
                The TWSBI Eco tends to be slightly smoother out of the box. Kaweco nibs sometimes need a break-in period.
                Both can be tuned if needed — a微 (micro-mesh) pad or a brass shim can adjust flow and smoothness.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold text-stone-900 hover:text-blue-800">
                Which is better for a first fountain pen?
              </summary>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed">
                Both are excellent first pens. The Kaweco Sport is more forgiving of being tossed in a bag. The TWSBI Eco
                teaches you to use bottled ink from day one. If you&apos;re desk-bound, go Eco. If you&apos;re on the
                move, go Sport.
              </p>
            </details>
          </div>
        </section>

        {/* Related Comparisons */}
        <section className="border-t border-stone-200 pt-8">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Related Comparisons</h2>
          <div className="grid md:grid-cols-3 gap-3">
            <Link href="/blog/twsbi-eco-vs-pilot-metropolitan" className="p-3 rounded border border-stone-200 bg-white hover:border-blue-200 transition-colors text-sm">
              <span className="font-medium text-stone-900">TWSBI Eco vs Pilot Metropolitan</span>
              <span className="block text-xs text-stone-400 mt-1">Piston filler vs cartridge</span>
            </Link>
            <Link href="/blog/kaweco-sport-vs-lamy-safari" className="p-3 rounded border border-stone-200 bg-white hover:border-blue-200 transition-colors text-sm">
              <span className="font-medium text-stone-900">Kaweco Sport vs Lamy Safari</span>
              <span className="block text-xs text-stone-400 mt-1">Pocket pen vs full-size</span>
            </Link>
            <Link href="/blog/lamy-safari-vs-pilot-metropolitan" className="p-3 rounded border border-stone-200 bg-white hover:border-blue-200 transition-colors text-sm">
              <span className="font-medium text-stone-900">Lamy Safari vs Pilot Metropolitan</span>
              <span className="block text-xs text-stone-400 mt-1">The beginner showdown</span>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
