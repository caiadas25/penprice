import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fountain Pen Maintenance Guide — How to Clean & Care for Your Pen | PenPrice",
  description:
    "Complete fountain pen maintenance guide. Learn how to clean your pen, prevent clogging, store it properly, and keep it writing smoothly for years. Step-by-step instructions for every filling system.",
  openGraph: {
    title: "Fountain Pen Maintenance — Complete Cleaning & Care Guide",
    description: "Keep your fountain pen writing smoothly. Step-by-step cleaning, storage, and troubleshooting for every filling system.",
    type: "article",
  },
};

export default function FountainPenMaintenancePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-500 mb-8">
        <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-amber-400 transition-colors">Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-400">Fountain Pen Maintenance</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-amber-400 text-sm font-medium mb-2">Technical Guide — Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Fountain Pen Maintenance Guide
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            A well-maintained fountain pen can last decades. Learn how to clean, flush,
            store, and troubleshoot your pen to keep it writing like new.
          </p>
        </header>

        {/* Why Maintenance Matters */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Why Fountain Pen Maintenance Matters</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            Fountain pens work by capillary action — ink flows from a reservoir through a narrow
            feed channel to the nib. Over time, dried ink, dust, and debris can clog these channels,
            causing skipping, hard starts, or complete flow failure. Regular maintenance prevents
            these issues and extends your pen&apos;s lifespan.
          </p>
          <div className="bg-slate-800/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-amber-400 mb-3">Maintenance frequency guide:</h3>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-1">•</span>
                <span><strong className="text-slate-200">Every use:</strong> Wipe the nib and section with a soft cloth before capping</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-1">•</span>
                <span><strong className="text-slate-200">Every fill:</strong> No special maintenance needed — just write</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-1">•</span>
                <span><strong className="text-slate-200">Every 4-6 weeks:</strong> Flush the pen with clean water if using the same ink</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-1">•</span>
                <span><strong className="text-slate-200">When switching inks:</strong> Always flush thoroughly to prevent ink mixing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-1">•</span>
                <span><strong className="text-slate-200">Before storage:</strong> Flush completely and let dry before putting away</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Basic Cleaning */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Basic Cleaning (Cartridge/Converter Pens)</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            Most fountain pen users have cartridge or converter pens. Here&apos;s the basic cleaning process:
          </p>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Remove the cartridge or converter",
                desc: "Unscrew the barrel to expose the section. Pull out the cartridge or converter gently.",
              },
              {
                step: "2",
                title: "Flush with cool water",
                desc: "Hold the section (nib and feed) under a slow stream of cool tap water. Let water run through the feed until it runs clear. Alternatively, submerge the nib in a cup of cool water and let it soak for 15-30 minutes.",
              },
              {
                step: "3",
                title: "Use a bulb syringe (optional)",
                desc: "For stubborn ink, use a rubber bulb syringe to force water through the feed. This is faster than passive soaking.",
              },
              {
                step: "4",
                title: "Dry the pen",
                desc: "Shake out excess water. Stand the pen nib-down in a cup with a paper towel to wick out remaining moisture. Wait 12-24 hours before re-inking.",
              },
              {
                step: "5",
                title: "Reassemble and re-ink",
                desc: "Insert a new cartridge or fill the converter. Write a few lines to get the ink flowing.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <span className="text-2xl font-bold text-amber-400/30 shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Piston/Vacuum Cleaning */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Cleaning Piston and Vacuum Fillers</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            Piston fillers (TWSBI Eco, Pelikan M-series, Lamy 2000) and vacuum fillers (Pilot Custom 823)
            require a different cleaning approach since you can&apos;t remove the ink reservoir.
          </p>
          <div className="bg-slate-800/50 rounded-lg p-6">
            <ol className="space-y-3 text-slate-400 list-decimal list-inside">
              <li>Expel all remaining ink by turning the piston knob or operating the vacuum mechanism</li>
              <li>Submerge the nib in a cup of cool water</li>
              <li>Draw water into the pen using the filling mechanism, then expel it back into the cup</li>
              <li>Repeat 5-10 times until the expelled water runs clear</li>
              <li>For stubborn inks (like Baystate Blue), add a drop of dish soap to the water or use a commercial pen flush</li>
              <li>Finish with a final flush of clean water</li>
              <li>Stand nib-down to dry for 24 hours</li>
            </ol>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Common Problems & Fixes</h2>
          <div className="space-y-6">
            {[
              {
                problem: "Hard starts (pen won't write immediately)",
                causes: ["Nib and feed dried out", "Ink residue on nib slit", "Cap not sealing properly"],
                fixes: [
                  "Prime the feed: turn converter knob slightly to push ink toward nib",
                  "Wipe the nib with a damp cloth before writing",
                  "If persistent, flush and re-ink"
                ],
              },
              {
                problem: "Skipping during writing",
                causes: ["Clogged feed channels", "Nib misalignment", "Ink too dry for the nib"],
                fixes: [
                  "Flush the pen with water to clear debris",
                  "Check nib tines are properly aligned (use a loupe)",
                  "Try a different ink — some inks flow better than others"
                ],
              },
              {
                problem: "Ink leaking from the nib section",
                causes: ["Cracked cartridge", "Converter not seated properly", "Temperature change (air expansion)"],
                fixes: [
                  "Replace the cartridge or reseat the converter",
                  "Store the pen nib-up when traveling (airplane cabins cause expansion)",
                  "Check for cracks in the section or barrel"
                ],
              },
              {
                problem: "Pen writes too wet or too dry",
                causes: ["Nib/feed alignment", "Ink properties", "Paper quality"],
                fixes: [
                  "Adjust nib tines (advanced — use brass shims to widen or narrow the slit)",
                  "Try a different ink (wetter: Iroshizuku; drier: Pelikan 4001)",
                  "Test on different paper — cheap paper absorbs ink differently"
                ],
              },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-2">{item.problem}</h3>
                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <p className="text-sm font-medium text-red-400 mb-1">Causes:</p>
                    <ul className="text-sm text-slate-400 space-y-1">
                      {item.causes.map((c, j) => <li key={j}>• {c}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green-400 mb-1">Fixes:</p>
                    <ul className="text-sm text-slate-400 space-y-1">
                      {item.fixes.map((f, j) => <li key={j}>• {f}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Storage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Proper Storage</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            How you store your fountain pen matters. Here are the key rules:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                rule: "Store nib-up or horizontal",
                detail: "Nib-down storage can cause ink to pool in the cap, leading to leaks. Horizontal is fine for short periods.",
              },
              {
                rule: "Keep the cap on",
                detail: "The cap creates an airtight seal that prevents the ink from drying out. Never leave a fountain pen uncapped.",
              },
              {
                rule: "Avoid extreme temperatures",
                detail: "Heat causes ink to expand and leak. Cold can cause ink to thicken. Room temperature is ideal.",
              },
              {
                rule: "Long-term storage: flush first",
                detail: "If storing a pen for more than 2 weeks, flush it completely. Dried ink is much harder to clean than fresh ink.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/30 rounded-lg p-5 border border-slate-700/50">
                <h3 className="font-semibold text-white mb-1">{item.rule}</h3>
                <p className="text-sm text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ink-Specific Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Ink-Specific Maintenance Tips</h2>
          <div className="space-y-4">
            <div className="bg-slate-800/30 rounded-lg p-5 border border-slate-700/50">
              <h3 className="font-semibold text-white mb-2">Noodler&apos;s Baystate Blue</h3>
              <p className="text-slate-400 text-sm">
                Baystate Blue stains everything it touches. Flush with a solution of 10:1 water to ammonia,
                or use a dedicated pen for this ink. Don&apos;t mix it with other inks — it can create
                permanent clogs.
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-lg p-5 border border-slate-700/50">
              <h3 className="font-semibold text-white mb-2">Shimmer/Metallic Inks</h3>
              <p className="text-slate-400 text-sm">
                Shimmer inks contain metallic particles that can settle and clog feeds. Shake the pen gently
                before writing. Clean more frequently (every 2 weeks). Don&apos;t use in piston fillers
                unless you flush frequently.
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-lg p-5 border border-slate-700/50">
              <h3 className="font-semibold text-white mb-2">Iron Gall Inks</h3>
              <p className="text-slate-400 text-sm">
                Iron gall inks are permanent but can corrode feeds if left to dry. Clean your pen every
                2 weeks when using iron gall inks. Never let them dry out in the pen.
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-lg p-5 border border-slate-700/50">
              <h3 className="font-semibold text-white mb-2">Pigmented Inks (Platinum Carbon, Sailor Sei-boku)</h3>
              <p className="text-slate-400 text-sm">
                These inks contain fine pigments rather than dyes. They&apos;re more water-resistant but
                require regular flushing. Platinum&apos;s slip-and-seal cap helps prevent drying.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "How often should I clean my fountain pen?",
                a: "Every 4-6 weeks for regular use. When switching inks, always clean thoroughly. If the pen starts skipping or writing inconsistently, clean it immediately.",
              },
              {
                q: "Can I use soap to clean my fountain pen?",
                a: "Yes, a tiny drop of dish soap in water works well for stubborn ink. Rinse thoroughly afterward. Never use alcohol, acetone, or harsh chemicals — they can damage the feed and nib.",
              },
              {
                q: "My pen hasn't been used in months. Can I salvage it?",
                a: "Probably yes. Soak the nib in water for 24-48 hours, changing the water every few hours. For very stubborn dried ink, use a pen flush solution. If the pen still won't write after soaking, a professional nibmeister can restore it.",
              },
              {
                q: "Should I lubricate the piston mechanism?",
                a: "TWSBI includes silicone grease with their pens for a reason. Apply a thin layer to the piston seal every 6-12 months. Pelikan and Lamy 2000 pistons are factory-lubricated and rarely need attention.",
              },
              {
                q: "Can I fly with a fountain pen?",
                a: "Yes, but store it nib-up. Cabin pressure changes can cause air in the cartridge/convertor to expand, pushing ink out. Piston fillers are safer for flights than cartridge pens.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Guides */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/fountain-pen-filling-systems-explained" className="bg-slate-800/30 rounded-lg p-5 border border-slate-700/50 hover:border-amber-400/50 transition-colors">
              <h3 className="font-semibold text-white hover:text-amber-400 transition-colors">Filling Systems Explained</h3>
              <p className="text-sm text-slate-500 mt-1">Cartridge, piston, vacuum, and more.</p>
            </Link>
            <Link href="/blog/fountain-pen-nib-sizes-explained" className="bg-slate-800/30 rounded-lg p-5 border border-slate-700/50 hover:border-amber-400/50 transition-colors">
              <h3 className="font-semibold text-white hover:text-amber-400 transition-colors">Nib Sizes Explained</h3>
              <p className="text-sm text-slate-500 mt-1">Japanese vs European, steel vs gold.</p>
            </Link>
            <Link href="/blog/best-fountain-pen-inks" className="bg-slate-800/30 rounded-lg p-5 border border-slate-700/50 hover:border-amber-400/50 transition-colors">
              <h3 className="font-semibold text-white hover:text-amber-400 transition-colors">Best Fountain Pen Inks</h3>
              <p className="text-sm text-slate-500 mt-1">Top 10 inks across 5 brands.</p>
            </Link>
            <Link href="/blog/best-japanese-fountain-pens" className="bg-slate-800/30 rounded-lg p-5 border border-slate-700/50 hover:border-amber-400/50 transition-colors">
              <h3 className="font-semibold text-white hover:text-amber-400 transition-colors">Best Japanese Fountain Pens</h3>
              <p className="text-sm text-slate-500 mt-1">Pilot, Sailor, Platinum, and more.</p>
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
            headline: "Fountain Pen Maintenance Guide — How to Clean & Care for Your Pen",
            description: "Complete fountain pen maintenance guide. Step-by-step cleaning, storage, and troubleshooting for every filling system.",
            datePublished: "2026-06-27",
            dateModified: "2026-06-27",
            author: {
              "@type": "Organization",
              name: "PenPrice",
            },
            publisher: {
              "@type": "Organization",
              name: "PenPrice",
            },
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
                name: "How often should I clean my fountain pen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Every 4-6 weeks for regular use. When switching inks, always clean thoroughly. If the pen starts skipping, clean it immediately.",
                },
              },
              {
                "@type": "Question",
                name: "Can I use soap to clean my fountain pen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, a tiny drop of dish soap in water works well. Never use alcohol, acetone, or harsh chemicals.",
                },
              },
              {
                "@type": "Question",
                name: "My pen hasn't been used in months. Can I salvage it?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Probably yes. Soak the nib in water for 24-48 hours, changing the water every few hours. For stubborn dried ink, use a pen flush solution.",
                },
              },
              {
                "@type": "Question",
                name: "Can I fly with a fountain pen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, but store it nib-up. Cabin pressure changes can cause ink to leak. Piston fillers are safer for flights than cartridge pens.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
