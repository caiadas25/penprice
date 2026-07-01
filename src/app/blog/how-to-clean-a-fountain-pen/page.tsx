import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Clean a Fountain Pen — Step-by-Step Guide 2026 | PenPrice",
  description:
    "Learn how to clean a fountain pen at home with simple supplies. Step-by-step guide for routine flushing, deep cleaning, and fixing ink flow problems. Works for all brands.",
  openGraph: {
    title: "How to Clean a Fountain Pen — Complete Guide",
    description: "Step-by-step fountain pen cleaning guide. Fix ink flow, clogged nibs, and color contamination.",
    type: "article",
  },
};

export default function HowToCleanFountainPenPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-6">
        <Link href="/" className="hover:text-blue-900 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-900 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-600">How to Clean a Fountain Pen</span>
      </nav>

      <article>
        <div className="mb-8">
          <span className="text-xs font-medium text-blue-800 bg-blue-50 px-2.5 py-1 rounded">Guide</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-3 mb-3 leading-tight">
            How to Clean a Fountain Pen — Step-by-Step Guide
          </h1>
          <p className="text-stone-500 text-sm">Last updated July 2026 · 8 min read</p>
        </div>

        {/* Quick Overview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          <div className="p-3 rounded border border-stone-200 bg-white text-center">
            <div className="text-xs text-stone-400 mb-1">Difficulty</div>
            <div className="font-semibold text-stone-900">Easy</div>
          </div>
          <div className="p-3 rounded border border-stone-200 bg-white text-center">
            <div className="text-xs text-stone-400 mb-1">Time</div>
            <div className="font-semibold text-stone-900">5–30 min</div>
          </div>
          <div className="p-3 rounded border border-stone-200 bg-white text-center">
            <div className="text-xs text-stone-400 mb-1">Supplies</div>
            <div className="font-semibold text-stone-900">Water + cup</div>
          </div>
          <div className="p-3 rounded border border-stone-200 bg-white text-center">
            <div className="text-xs text-stone-400 mb-1">Frequency</div>
            <div className="font-semibold text-stone-900">Every 4–8 weeks</div>
          </div>
        </div>

        {/* Why Clean */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Why Clean Your Fountain Pen?</h2>
          <div className="prose max-w-none text-stone-600 text-sm leading-relaxed space-y-4">
            <p>
              Ink residue builds up inside the feed and nib over time. Even if you keep using the same ink, dried particles accumulate in the narrow channels of the feed, gradually restricting flow. The result: hard starts, skipping, and inconsistent line width.
            </p>
            <p>
              Cleaning is especially important when you:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Switch ink colors (to prevent muddy混合 colors)</li>
              <li>Haven&apos;t used the pen in 2+ weeks</li>
              <li>Notice hard starts, skipping, or reduced flow</li>
              <li>Use shimmer or particulate inks (these clog faster)</li>
              <li>Receive a new pen (manufacturing oils remain in the feed)</li>
            </ul>
          </div>
        </section>

        {/* What You Need */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">What You Need</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Essential</h3>
              <ul className="text-sm text-stone-600 space-y-1">
                <li>Room-temperature water (distilled preferred)</li>
                <li>A small cup or glass</li>
                <li>Paper towels or a lint-free cloth</li>
              </ul>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Helpful Extras</h3>
              <ul className="text-sm text-stone-600 space-y-1">
                <li>Pen flush solution (commercial or DIY: 10:1 water-to-ammonia)</li>
                <li>Bulb syringe (for cartridge/converter pens)</li>
                <li>Petri dish or shallow tray</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-stone-400 mt-3">Never use hot water — it can crack feeds made from ebonite or cause ink to boil inside the reservoir.</p>
        </section>

        {/* Routine Cleaning */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Routine Cleaning (5 Minutes)</h2>
          <div className="prose max-w-none text-stone-600 text-sm leading-relaxed space-y-4">
            <p>This is the quick flush you should do every time you change inks or every 4–8 weeks.</p>
            <ol className="list-decimal list-inside space-y-3 ml-4">
              <li>
                <strong>Disassemble:</strong> Remove the cartridge or converter. If you have a converter, twist it to draw up and expel water a few times to clean it separately.
              </li>
              <li>
                <strong>Rinse the nib and feed:</strong> Hold the nib section (the grip with the nib attached) under a gentle stream of cool running water. Let water flow over the nib and through the feed for 30–60 seconds.
              </li>
              <li>
                <strong>Soak briefly:</strong> Place the nib section in a cup of room-temperature water. Let it sit for 5–15 minutes. You&apos;ll see ink bleeding out into the water. Change the water when it gets dark and repeat until the water stays mostly clear.
              </li>
              <li>
                <strong>Dry:</strong> Gently blot the nib and feed with a paper towel. Stand the nib section upright (nib down) on a paper towel for 15–30 minutes to wick out remaining water. Some people use a small colander or pen rest.
              </li>
              <li>
                <strong>Reassemble:</strong> Insert a fresh cartridge or fill the converter with ink. Write a few lines to get the ink flowing. You may see diluted ink for the first few lines — that&apos;s normal.
              </li>
            </ol>
          </div>
        </section>

        {/* Deep Cleaning */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Deep Cleaning (20–30 Minutes)</h2>
          <div className="prose max-w-none text-stone-600 text-sm leading-relaxed space-y-4">
            <p>Use this method when routine flushing doesn&apos;t solve flow problems, or when cleaning up after shimmer/diamond inks.</p>
            <ol className="list-decimal list-inside space-y-3 ml-4">
              <li>
                <strong>Soak overnight:</strong> Fill a cup with pen flush solution (or a 10:1 water-to-ammonia mix). Submerge the nib section and let it soak for 4–8 hours or overnight.
              </li>
              <li>
                <strong>Bulb syringe flush:</strong> Attach a bulb syringe to the back of the nib section (where the cartridge connects). Squeeze gently to push water through the feed under pressure. Repeat 10–15 times. This is the most effective way to dislodge stubborn residue.
              </li>
              <li>
                <strong>Ultrasonic cleaner (optional):</strong> If you have a cheap ultrasonic jewelry cleaner, place the nib section inside with plain water and run one 3-minute cycle. This works extremely well for encrusted dried ink.
              </li>
              <li>
                <strong>Final rinse and dry:</strong> Rinse thoroughly with clean water, then dry as described above.
              </li>
            </ol>
          </div>
        </section>

        {/* Pen Type Specific */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Cleaning Tips by Filling System</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-stone-200 rounded overflow-hidden">
              <thead className="bg-stone-100">
                <tr>
                  <th className="px-4 py-2 text-left text-stone-700 font-semibold">System</th>
                  <th className="px-4 py-2 text-left text-stone-700 font-semibold">Cleaning Method</th>
                  <th className="px-4 py-2 text-left text-stone-700 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr>
                  <td className="px-4 py-2 text-stone-700 font-medium">Cartridge</td>
                  <td className="px-4 py-2 text-stone-700">Remove cartridge, rinse nib section</td>
                  <td className="px-4 py-2 text-stone-400 text-xs">Easiest to clean. Bulb syringe fits perfectly on the back.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-stone-700 font-medium">Converter</td>
                  <td className="px-4 py-2 text-stone-700">Twist converter to flush water in and out</td>
                  <td className="px-4 py-2 text-stone-400 text-xs">Clean converter separately. Z28 (Lamy) holds less water.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-stone-700 font-medium">Piston</td>
                  <td className="px-4 py-2 text-stone-700">Draw water in and expel via piston knob</td>
                  <td className="px-4 py-2 text-stone-400 text-xs">Repeat until water runs clear. Works like a large converter.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-stone-700 font-medium">Vacuum/Filler</td>
                  <td className="px-4 py-2 text-stone-700">Disassemble or use filling knob to flush</td>
                  <td className="px-4 py-2 text-stone-400 text-xs">Pilot 823 requires disassembly. Check manufacturer instructions.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-stone-700 font-medium">Eyedropper</td>
                  <td className="px-4 py-2 text-stone-700">Unscrew barrel, rinse barrel and section</td>
                  <td className="px-4 py-2 text-stone-400 text-xs">Clean barrel interior with a lint-free cloth. Re-apply silicone grease to threads.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Troubleshooting Common Issues</h2>
          <div className="prose max-w-none text-stone-600 text-sm leading-relaxed space-y-4">
            <div className="p-4 rounded border border-amber-200 bg-amber-50">
              <h3 className="font-bold text-amber-800 mb-2">Ink won&apos;t flow after cleaning</h3>
              <p>The feed is likely still waterlogged. Stand the pen nib-down on a paper towel for an hour. The paper will wick out excess water. Be patient — this is normal.</p>
            </div>
            <div className="p-4 rounded border border-amber-200 bg-amber-50">
              <h3 className="font-bold text-amber-800 mb-2">Pen writes scratchy after cleaning</h3>
              <p>The nib may have shifted slightly. Check that the nib is properly seated on the feed. If alignment looks off, gently realign the tines using a loupe. This is common with Lamy pens after disassembly.</p>
            </div>
            <div className="p-4 rounded border border-amber-200 bg-amber-50">
              <h3 className="font-bold text-amber-800 mb-2">Shimmer particles won&apos;t come out</h3>
              <p>Shimmer inks leave metallic particles in the feed channels. Use the bulb syringe method repeatedly. An ultrasonic cleaner is the most effective solution. Consider dedicating a pen to shimmer inks permanently.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Can I use tap water to clean my fountain pen?</h3>
              <p className="text-sm text-stone-600">Yes, tap water works fine for routine cleaning. Distilled water is preferred because it doesn&apos;t leave mineral deposits, but in practice tap water works well. Avoid very hard water — it can leave calcium buildup in the feed over time.</p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">How often should I clean my fountain pen?</h3>
              <p className="text-sm text-stone-600">Every time you change inks (mandatory — mixing inks can cause clogs). If you use the same ink continuously, flush every 4–8 weeks. Pens used daily may need more frequent cleaning than pens used occasionally.</p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Can I soak the entire pen (not just the nib section)?</h3>
              <p className="text-sm text-stone-600">Only if the pen is designed for it. Piston fillers (TWSBI ECO, Pelikan) and vacuum fillers (Pilot 823) should only have the nib section soaked or flushed through their filling mechanism. Soaking the entire body can trap water in the barrel.</p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="border-t border-stone-200 pt-8">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/fountain-pen-maintenance-guide" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Fountain Pen Maintenance Guide →</span>
              <span className="block text-stone-400 mt-1">Complete care routine</span>
            </Link>
            <Link href="/blog/fountain-pen-filling-systems-explained" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Filling Systems Explained →</span>
              <span className="block text-stone-400 mt-1">Cartridge, piston, vacuum, and more</span>
            </Link>
            <Link href="/blog/fountain-pen-converters-explained" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Converters Explained →</span>
              <span className="block text-stone-400 mt-1">Which converter fits your pen</span>
            </Link>
            <Link href="/blog/fountain-pen-nib-sizes-explained" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Nib Sizes Explained →</span>
              <span className="block text-stone-400 mt-1">EF to Bold and beyond</span>
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
            headline: "How to Clean a Fountain Pen — Step-by-Step Guide",
            description: "Learn how to clean a fountain pen at home. Step-by-step guide for routine flushing, deep cleaning, and fixing ink flow problems.",
            author: { "@type": "Organization", name: "PenPrice" },
            publisher: { "@type": "Organization", name: "PenPrice" },
            datePublished: "2026-07-01",
            dateModified: "2026-07-01",
            mainEntityOfPage: "https://penprice.vercel.app/blog/how-to-clean-a-fountain-pen",
          }),
        }}
      />
    </div>
  );
}
