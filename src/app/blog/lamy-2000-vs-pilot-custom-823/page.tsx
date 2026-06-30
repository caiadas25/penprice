import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lamy 2000 vs Pilot Custom 823 — Endgame Fountain Pen Comparison 2026 | PenPrice",
  description:
    "Lamy 2000 vs Pilot Custom 823: two of the most recommended endgame fountain pens compared. Piston vs vacuum filler, 14k vs 18k gold nib, Bauhaus vs Japanese craftsmanship, and live prices from Amazon, Goulet Pens, Goldspot, and more.",
  openGraph: {
    title: "Lamy 2000 vs Pilot Custom 823 — Which Endgame Pen Wins?",
    description:
      "The two pens everyone recommends as your 'last pen.' Lamy 2000 vs Pilot Custom 823 compared — nib quality, filling system, build, writing experience, and value.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lamy 2000 vs Pilot Custom 823 — Endgame Pen Showdown",
    description:
      "German Bauhaus vs Japanese precision. Lamy 2000 vs Pilot Custom 823 — which one deserves your desk?",
  },
};

export default function Lamy2000VsPilotCustom823Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-800 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-500">Lamy 2000 vs Pilot Custom 823</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-blue-800 text-sm font-medium mb-2">Comparison Guide — Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Lamy 2000 vs Pilot Custom 823 — Endgame Fountain Pen Showdown
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            Ask any fountain pen community &ldquo;what pen should I buy next?&rdquo; and these two names
            come up more than any others. The Lamy 2000 is German Bauhaus minimalism perfected.
            The Pilot Custom 823 is Japanese precision engineering at its finest. Both have loyal followings,
            both are often called &ldquo;endgame&rdquo; pens, and both punch well above their price. Here&apos;s how they compare.
          </p>
        </header>

        {/* TL;DR */}
        <div className="bg-white border border-stone-200 rounded p-6 mb-10">
          <h2 className="text-lg font-bold text-stone-900 mb-3">TL;DR</h2>
          <ul className="space-y-2 text-sm text-stone-700">
            <li><span className="text-blue-800 font-semibold">Choose the Lamy 2000 if:</span> You want a sleek, unobtrusive daily writer with a whisper-smooth nib, integrated clip, and timeless Bauhaus design. Piston filler, ~$200.</li>
            <li><span className="text-blue-800 font-semibold">Choose the Pilot Custom 823 if:</span> You want a larger pen with a vacuum filling system, massive ink capacity, and a nib that feels like writing with a wet brush. ~$280.</li>
            <li><span className="text-blue-800 font-semibold">The truth:</span> Both are exceptional. The choice comes down to nib feel preference (Lamy&apos;s smooth vs Pilot&apos;s bouncy), size, and filling system.</li>
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
                  <th className="text-left p-3 font-semibold text-blue-800">Lamy 2000</th>
                  <th className="text-left p-3 font-semibold text-blue-800">Pilot Custom 823</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr><td className="p-3 text-stone-500">Price (from)</td><td className="p-3 text-stone-900 font-mono">$189</td><td className="p-3 text-stone-900 font-mono">$276</td></tr>
                <tr><td className="p-3 text-stone-500">Length (capped)</td><td className="p-3 text-stone-900">5.5 in (140mm)</td><td className="p-3 text-stone-900">5.87 in (149mm)</td></tr>
                <tr><td className="p-3 text-stone-500">Length (posted)</td><td className="p-3 text-stone-900">6.0 in (152mm)</td><td className="p-3 text-stone-900">6.1 in (155mm)</td></tr>
                <tr><td className="p-3 text-stone-500">Weight</td><td className="p-3 text-stone-900">25g</td><td className="p-3 text-stone-900">30g</td></tr>
                <tr><td className="p-3 text-stone-500">Nib</td><td className="p-3 text-stone-900">14k gold, semi-hooded</td><td className="p-3 text-stone-900">14k gold, open</td></tr>
                <tr><td className="p-3 text-stone-500">Nib feel</td><td className="p-3 text-stone-900">Smooth, controlled, slightly springy</td><td className="p-3 text-stone-900">Wet, bouncy, expressive</td></tr>
                <tr><td className="p-3 text-stone-500">Filling system</td><td className="p-3 text-stone-900">Piston</td><td className="p-3 text-stone-900">Vacuum (plunger)</td></tr>
                <tr><td className="p-3 text-stone-500">Ink capacity</td><td className="p-3 text-stone-900">~1.4 mL</td><td className="p-3 text-stone-900">~1.8 mL</td></tr>
                <tr><td className="p-3 text-stone-500">Material</td><td className="p-3 text-stone-900">Makrolon (fiberglass)</td><td className="p-3 text-stone-900">ABS resin / acrylic</td></tr>
                <tr><td className="p-3 text-stone-500">Clip</td><td className="p-3 text-stone-900">Integrated, spring-loaded</td><td className="p-3 text-stone-900">Traditional, spring-loaded</td></tr>
                <tr><td className="p-3 text-stone-500">Window</td><td className="p-3 text-stone-900">Small ink window</td><td className="p-3 text-stone-900">None (unscrew to check)</td></tr>
                <tr><td className="p-3 text-stone-500">Country</td><td className="p-3 text-stone-900">Germany</td><td className="p-3 text-stone-900">Japan</td></tr>
                <tr><td className="p-3 text-stone-500">Year introduced</td><td className="p-3 text-stone-900">1966</td><td className="p-3 text-stone-900">2000</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Nib Deep Dive */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Nib: The Heart of the Comparison</h2>
          <p className="text-stone-700 mb-4">
            Both pens use 14k gold nibs, but they feel completely different. This is the deciding factor for most people.
          </p>

          <div className="bg-stone-50 border border-stone-200 rounded p-6 mb-6">
            <h3 className="text-lg font-bold text-stone-900 mb-3">Lamy 2000 Nib</h3>
            <p className="text-stone-700 mb-3">
              The Lamy 2000 has a semi-hooded 14k gold nib. Only about 2mm of the nib is exposed when capped, giving
              it a clean, streamlined look. The writing feel is famously smooth, almost buttery. There&apos;s a slight
              springiness but it&apos;s controlled, not bouncy. It writes with a consistent, predictable line that
              rewards steady hands. The nib comes in EF, F, M, B, and a rare oblique.
            </p>
            <p className="text-stone-500 text-sm">
              <strong>Note:</strong> Lamy&apos;s EF tends to run wider than Japanese EF nibs. If you write small, you may
              find the Lamy EF closer to a Japanese Fine.
            </p>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded p-6">
            <h3 className="text-lg font-bold text-stone-900 mb-3">Pilot Custom 823 Nib</h3>
            <p className="text-stone-700 mb-3">
              The Custom 823 uses Pilot&apos;s open 14k gold nib, which is slightly larger than the Lamy&apos;s. The
              feel is distinctly Japanese: bouncy, wet, and expressive. The nib flexes slightly under pressure, giving
              your handwriting character and variation. Pilot&apos;s nibs are among the most consistently excellent
              in the industry. Available in Fine, Medium, Broad, and the coveted FA (Falcon/Namiki Falcon) soft nib.
            </p>
            <p className="text-stone-500 text-sm">
              <strong>Note:</strong> The Custom 823&apos;s vacuum filling system means you cannot easily swap nibs.
              The nib unit is screwed in and sealed. If you want nib variety, this is a consideration.
            </p>
          </div>
        </section>

        {/* Filling System */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Filling System: Piston vs Vacuum</h2>
          <p className="text-stone-700 mb-4">
            Both pens eschew cartridges entirely, using built-in filling systems. But the experience is very different.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-stone-50 border border-stone-200 rounded p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-3">Lamy 2000 — Piston Filler</h3>
              <ul className="text-sm text-stone-700 space-y-2">
                <li>• Turn the blind cap to extend/retract the piston</li>
                <li>• Submerge the nib, turn to fill</li>
                <li>• ~1.4 mL ink capacity</li>
                <li>• Ink window shows remaining ink</li>
                <li>• Simple, reliable, decades-proven</li>
                <li>• Easy to flush for cleaning</li>
              </ul>
            </div>
            <div className="bg-stone-50 border border-stone-200 rounded p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-3">Pilot Custom 823 — Vacuum Filler</h3>
              <ul className="text-sm text-stone-700 space-y-2">
                <li>• Unscrew blind cap, pull plunger back</li>
                <li>• Submerge nib, push plunger down in one stroke</li>
                <li>• ~1.8 mL ink capacity (massive)</li>
                <li>• No ink window, must unscrew to check level</li>
                <li>• More complex but higher capacity</li>
                <li>• Cleaning requires multiple fill/drain cycles</li>
              </ul>
            </div>
          </div>

          <p className="text-stone-700">
            The vacuum system on the Custom 823 is more satisfying to fill. There&apos;s something about that
            single plunger stroke that feels premium. But the Lamy&apos;s piston is faster to clean and the ink
            window is genuinely useful for daily use.
          </p>
        </section>

        {/* Design & Build */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Design & Build Quality</h2>
          <p className="text-stone-700 mb-4">
            The Lamy 2000 is one of the most iconic industrial designs of the 20th century. Designed by Gerd A. Muller
            in 1966, it follows the Bauhaus principle of form following function. There are no visible seams, no visible
            threads, and the clip is integrated into the body. It looks like it was machined from a single piece.
          </p>
          <p className="text-stone-700 mb-4">
            The Pilot Custom 823 is a more traditional pen design: cigar-shaped, with a screw cap and a visible
            clip. It comes in three classic colors (Amber, Clear, Smoke) and feels like a well-made Japanese
            instrument. The build quality is excellent, but the design is conventional compared to the Lamy&apos;s
            radical minimalism.
          </p>
          <p className="text-stone-700">
            In hand, the Lamy 2000 feels lighter and more subtle. It disappears in your pocket. The Custom 823
            is larger and more noticeable, with a presence that announces itself.
          </p>
        </section>

        {/* Price Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Price Comparison — Where to Buy</h2>
          <p className="text-stone-700 mb-4">
            Both pens are widely available from authorized retailers. Prices fluctuate, but here are typical 2026 prices:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-stone-200 rounded overflow-hidden">
              <thead className="bg-stone-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-stone-700">Retailer</th>
                  <th className="text-left p-3 font-semibold text-blue-800">Lamy 2000</th>
                  <th className="text-left p-3 font-semibold text-blue-800">Pilot Custom 823</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr><td className="p-3 text-stone-500">Amazon</td><td className="p-3 text-stone-900 font-mono">$189</td><td className="p-3 text-stone-900 font-mono">$276</td></tr>
                <tr><td className="p-3 text-stone-500">Goulet Pens</td><td className="p-3 text-stone-900 font-mono">$204</td><td className="p-3 text-stone-900 font-mono">$288</td></tr>
                <tr><td className="p-3 text-stone-500">Goldspot Pens</td><td className="p-3 text-stone-900 font-mono">$204</td><td className="p-3 text-stone-900 font-mono">$288</td></tr>
                <tr><td className="p-3 text-stone-500">JetPens</td><td className="p-3 text-stone-900 font-mono">$204</td><td className="p-3 text-stone-900 font-mono">$288</td></tr>
                <tr><td className="p-3 text-stone-500">Appelboom</td><td className="p-3 text-stone-900 font-mono">$180</td><td className="p-3 text-stone-900 font-mono">$265</td></tr>
                <tr><td className="p-3 text-stone-500">eBay (new)</td><td className="p-3 text-stone-900 font-mono">$175-$210</td><td className="p-3 text-stone-900 font-mono">$260-$300</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-500 text-sm">
            Prices are approximate and may vary. The Lamy 2000 is typically $80-$100 cheaper, which matters if
            budget is a factor.
          </p>
        </section>

        {/* Writing Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Writing Experience</h2>
          <p className="text-stone-700 mb-4">
            This is what it really comes down to. Both pens write beautifully, but differently.
          </p>
          <div className="bg-white border border-stone-200 rounded p-6 mb-6">
            <h3 className="text-lg font-bold text-stone-900 mb-3">Lamy 2000 Writing Feel</h3>
            <p className="text-stone-700">
              Smooth, controlled, and consistent. The semi-hooded nib means you hold the pen closer to the tip,
              which many writers find more comfortable for extended sessions. The ink flow is moderate, not too
              wet or dry. It&apos;s a pen that stays out of your way and lets you focus on the writing. Excellent
              for notes, journaling, and professional documents.
            </p>
          </div>
          <div className="bg-white border border-stone-200 rounded p-6">
            <h3 className="text-lg font-bold text-stone-900 mb-3">Pilot Custom 823 Writing Feel</h3>
            <p className="text-stone-700">
              Wet, bouncy, and expressive. The open nib flexes slightly under pressure, giving your handwriting
              natural line variation. The ink flow is generous, which means your writing looks richer and more
              alive. The larger pen is balanced and comfortable for long writing sessions. Excellent for
              correspondence, creative writing, and anyone who wants their pen to feel alive.
            </p>
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded p-6">
              <h3 className="text-lg font-bold text-green-800 mb-3">Lamy 2000 Strengths</h3>
              <ul className="text-sm text-stone-700 space-y-1">
                <li>✓ Iconic, timeless design</li>
                <li>✓ Incredibly smooth writer</li>
                <li>✓ Light and comfortable</li>
                <li>✓ Integrated spring-loaded clip</li>
                <li>✓ Ink window for monitoring</li>
                <li>✓ Easier to clean</li>
                <li>✓ Lower price point</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded p-6">
              <h3 className="text-lg font-bold text-red-800 mb-3">Lamy 2000 Weaknesses</h3>
              <ul className="text-sm text-stone-700 space-y-1">
                <li>✗ Semi-hooded nib limits nib swapping</li>
                <li>✗ Lamy EF runs wider than Japanese EF</li>
                <li>✗ Makrolon body shows micro-scratches</li>
                <li>✗ Piston mechanism can stiffen over years</li>
                <li>✗ Cap can be tricky to post securely</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded p-6">
              <h3 className="text-lg font-bold text-green-800 mb-3">Pilot Custom 823 Strengths</h3>
              <ul className="text-sm text-stone-700 space-y-1">
                <li>✓ Wet, expressive nib with character</li>
                <li>✓ Massive 1.8 mL ink capacity</li>
                <li>✓ Premium vacuum filling experience</li>
                <li>✓ Multiple color options (Amber, Clear, Smoke)</li>
                <li>✓ Excellent ink window (through demonstrator)</li>
                <li>✓ Larger, substantial feel in hand</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded p-6">
              <h3 className="text-lg font-bold text-red-800 mb-3">Pilot Custom 823 Weaknesses</h3>
              <ul className="text-sm text-stone-700 space-y-1">
                <li>✗ Higher price (~$80-$100 more)</li>
                <li>✗ Heavier, may fatigue some writers</li>
                <li>✗ Vacuum cleaning takes longer</li>
                <li>✗ No easy nib swapping</li>
                <li>✗ Traditional design (less distinctive)</li>
                <li>✗ Larger size, less pocket-friendly</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Who Should Buy What */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Which Pen Should You Buy?</h2>
          <div className="bg-blue-50 border border-blue-200 rounded p-6 mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Choose the Lamy 2000 if you:</h3>
            <ul className="text-sm text-stone-700 space-y-2">
              <li>• Value clean, minimalist design over ornament</li>
              <li>• Want a lighter pen for daily carry</li>
              <li>• Prefer smooth, consistent writing without flex</li>
              <li>• Need a pen that&apos;s easy to clean and maintain</li>
              <li>• Write small and want the semi-hooded nib&apos;s precision</li>
              <li>• Want to spend under $200 on your &ldquo;forever&rdquo; pen</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded p-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Choose the Pilot Custom 823 if you:</h3>
            <ul className="text-sm text-stone-700 space-y-2">
              <li>• Want a wet, expressive nib with character</li>
              <li>• Write long-form and want massive ink capacity</li>
              <li>• Prefer a larger, more substantial pen</li>
              <li>• Enjoy the ritual of vacuum filling</li>
              <li>• Want the demonstrator Clear model for ink visibility</li>
              <li>• Don&apos;t mind spending a bit more for premium feel</li>
            </ul>
          </div>
        </section>

        {/* Alternatives */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Alternatives Worth Considering</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/brands/pelikan/pelikan-m800" className="block bg-stone-50 border border-stone-200 rounded p-4 hover:border-blue-300 transition-colors">
              <h4 className="font-bold text-blue-800 text-sm">Pelikan M800</h4>
              <p className="text-xs text-stone-500 mt-1">Another German piston filler with a bouncy 14k gold nib. ~$520.</p>
            </Link>
            <Link href="/brands/sailor/sailor-pro-gear" className="block bg-stone-50 border border-stone-200 rounded p-4 hover:border-blue-300 transition-colors">
              <h4 className="font-bold text-blue-800 text-sm">Sailor Pro Gear</h4>
              <p className="text-xs text-stone-500 mt-1">Japanese gold nib with distinctive feedback. ~$200-$300.</p>
            </Link>
            <Link href="/brands/montblanc/montblanc-146" className="block bg-stone-50 border border-stone-200 rounded p-4 hover:border-blue-300 transition-colors">
              <h4 className="font-bold text-blue-800 text-sm">Montblanc Meisterstuck 146</h4>
              <p className="text-xs text-stone-500 mt-1">The classic luxury pen. Piston filler, 14k gold nib. ~$700.</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-stone-50 border border-stone-200 rounded p-6">
              <h3 className="font-bold text-stone-900 mb-2">Can I use cartridges with the Lamy 2000 or Custom 823?</h3>
              <p className="text-sm text-stone-700">
                No. Both pens use only bottled ink. The Lamy 2000 uses a piston filling system, and the Custom 823 uses a vacuum filling system. This is part of their appeal: higher ink capacity and more ink choices. You can use any fountain pen ink from brands like Pilot Iroshizuku, Waterman, Pelikan, or Diamine.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 rounded p-6">
              <h3 className="font-bold text-stone-900 mb-2">Which pen is better for left-handed writers?</h3>
              <p className="text-sm text-stone-700">
                The Lamy 2000 tends to be slightly better for left-handed writers. Its semi-hooded nib dries faster because less ink is exposed, and the smooth nib glides across paper without catching. The Custom 823&apos;s wet nib may need more drying time, especially on lower-quality paper. Both work fine for lefties, but the Lamy has a slight edge.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 rounded p-6">
              <h3 className="font-bold text-stone-900 mb-2">Is the Lamy 2000 or Custom 823 better for everyday carry?</h3>
              <p className="text-sm text-stone-700">
                The Lamy 2000 is lighter, slimmer, and has an integrated clip that&apos;s excellent for pockets. It&apos;s the better EDC pen. The Custom 823 is larger, heavier, and better suited to desk use or a pen case. Both are durable enough for daily carry if you&apos;re careful.
              </p>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Related Posts</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/pilot-custom-823-vs-sailor-pro-gear" className="block bg-stone-50 border border-stone-200 rounded p-4 hover:border-blue-300 transition-colors">
              <h4 className="font-bold text-blue-800 text-sm">Pilot Custom 823 vs Sailor Pro Gear</h4>
              <p className="text-xs text-stone-500 mt-1">Two Japanese gold nib legends compared.</p>
            </Link>
            <Link href="/blog/sailor-pro-gear-vs-pilot-custom-74" className="block bg-stone-50 border border-stone-200 rounded p-4 hover:border-blue-300 transition-colors">
              <h4 className="font-bold text-blue-800 text-sm">Sailor Pro Gear vs Pilot Custom 74</h4>
              <p className="text-xs text-stone-500 mt-1">Gold nib showdown: which Japanese pen wins?</p>
            </Link>
            <Link href="/blog/pelikan-m800-vs-montblanc-149" className="block bg-stone-50 border border-stone-200 rounded p-4 hover:border-blue-300 transition-colors">
              <h4 className="font-bold text-blue-800 text-sm">Pelikan M800 vs Montblanc 149</h4>
              <p className="text-xs text-stone-500 mt-1">German luxury pen showdown.</p>
            </Link>
            <Link href="/blog/fountain-pen-nib-sizes-explained" className="block bg-stone-50 border border-stone-200 rounded p-4 hover:border-blue-300 transition-colors">
              <h4 className="font-bold text-blue-800 text-sm">Fountain Pen Nib Sizes Explained</h4>
              <p className="text-xs text-stone-500 mt-1">Understanding EF, F, M, B, and beyond.</p>
            </Link>
          </div>
        </section>

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Lamy 2000 vs Pilot Custom 823 — Endgame Fountain Pen Showdown 2026",
              description: "Comprehensive comparison of the Lamy 2000 and Pilot Custom 823 fountain pens. Nib quality, filling system, build, writing experience, and prices.",
              datePublished: "2026-06-30",
              dateModified: "2026-06-30",
              author: { "@type": "Organization", name: "PenPrice" },
              publisher: { "@type": "Organization", name: "PenPrice" },
              mainEntityOfPage: { "@type": "WebPage", "@id": "https://penprice.vercel.app/blog/lamy-2000-vs-pilot-custom-823" },
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
                  name: "Can I use cartridges with the Lamy 2000 or Custom 823?",
                  acceptedAnswer: { "@type": "Answer", text: "No. Both pens use only bottled ink. The Lamy 2000 uses a piston filling system, and the Custom 823 uses a vacuum filling system." },
                },
                {
                  "@type": "Question",
                  name: "Which pen is better for left-handed writers?",
                  acceptedAnswer: { "@type": "Answer", text: "The Lamy 2000 tends to be slightly better for left-handed writers. Its semi-hooded nib dries faster because less ink is exposed." },
                },
                {
                  "@type": "Question",
                  name: "Is the Lamy 2000 or Custom 823 better for everyday carry?",
                  acceptedAnswer: { "@type": "Answer", text: "The Lamy 2000 is lighter, slimmer, and has an integrated clip that is excellent for pockets. It is the better EDC pen." },
                },
              ],
            }),
          }}
        />
      </article>
    </div>
  );
}
