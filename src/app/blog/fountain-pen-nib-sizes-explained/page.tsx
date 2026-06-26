import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fountain Pen Nib Sizes Explained — Extra Fine to Broad Guide | PenPrice",
  description:
    "Complete guide to fountain pen nib sizes from Ultra Extra Fine to Broad. Learn what each nib size writes like, which brand to choose, and compare prices across Pilot, Lamy, Sailor, Pelikan, and more.",
  openGraph: {
    title: "Fountain Pen Nib Sizes Explained — Complete Guide",
    description:
      "From Extra Fine to Broad, learn what each nib size writes like. Includes comparison charts and price links.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fountain Pen Nib Sizes Explained",
    description:
      "Complete guide to fountain pen nib sizes with comparison charts, brand recommendations, and price links.",
  },
};

export default function NibSizesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-500 mb-8">
        <Link href="/" className="hover:text-amber-400 transition-colors">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-amber-400 transition-colors">
          Guides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-400">Nib Sizes Explained</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-amber-400 text-sm font-medium mb-2">
            Technical Guide — Updated June 2026
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Fountain Pen Nib Sizes Explained
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            One of the most confusing aspects of fountain pens is nib sizing.
            A &quot;Fine&quot; from Pilot writes very differently from a &quot;Fine&quot;
            from Lamy. Here&apos;s everything you need to know.
          </p>
        </header>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Fountain Pen Nib Sizes Explained",
              description:
                "Complete guide to fountain pen nib sizes from Ultra Extra Fine to Broad, with comparison charts and brand recommendations.",
              datePublished: "2026-06-27",
              dateModified: "2026-06-27",
              author: { "@type": "Organization", name: "PenPrice" },
              publisher: {
                "@type": "Organization",
                name: "PenPrice",
                url: "https://penprice.vercel.app",
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id":
                  "https://penprice.vercel.app/blog/fountain-pen-nib-sizes-explained",
              },
            }),
          }}
        />

        {/* The Key Insight */}
        <section className="mb-12 p-6 rounded-xl border border-amber-700/30 bg-amber-900/10">
          <h2 className="text-xl font-bold text-amber-400 mb-3">
            The Most Important Thing to Know
          </h2>
          <p className="text-slate-300 leading-relaxed mb-3">
            <strong className="text-white">
              Nib sizes are NOT universal across brands.
            </strong>{" "}
            A Pilot Fine is much thinner than a Lamy Fine. A Sailor Medium
            writes more like a Japanese Fine. This is because Japanese brands
            use the Japanese nib sizing system, while European brands (Lamy,
            Pelikan, Montblanc) use the European system.
          </p>
          <p className="text-slate-300 leading-relaxed">
            If you&apos;re coming from ballpoints or gel pens, start with a{" "}
            <strong className="text-white">Fine or Medium</strong> nib. They
            offer the most forgiving writing experience for beginners.
          </p>
        </section>

        {/* Size Comparison Chart */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Nib Size Comparison Chart
          </h2>
          <p className="text-slate-400 mb-4">
            Line widths are approximate (in mm) and vary by paper, ink, and
            pressure.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800/50">
                  <th className="text-left px-4 py-3 text-slate-400">
                    Nib Size
                  </th>
                  <th className="text-left px-4 py-3 text-blue-400">
                    Japanese (Pilot, Sailor, Platinum)
                  </th>
                  <th className="text-left px-4 py-3 text-amber-400">
                    European (Lamy, Pelikan, Montblanc)
                  </th>
                  <th className="text-left px-4 py-3 text-slate-400">
                    Line Width
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="px-4 py-3 text-white font-medium">
                    Ultra Extra Fine
                  </td>
                  <td className="px-4 py-3 text-slate-300">
                    Pilot UEF, Platinum UEF
                  </td>
                  <td className="px-4 py-3 text-slate-500">—</td>
                  <td className="px-4 py-3 text-slate-300">~0.1mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white font-medium">
                    Extra Fine
                  </td>
                  <td className="px-4 py-3 text-slate-300">
                    Pilot EF, Sailor EF
                  </td>
                  <td className="px-4 py-3 text-slate-300">Lamy EF</td>
                  <td className="px-4 py-3 text-slate-300">~0.3mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white font-medium">Fine</td>
                  <td className="px-4 py-3 text-slate-300">
                    Pilot F, Sailor F
                  </td>
                  <td className="px-4 py-3 text-slate-300">Lamy F</td>
                  <td className="px-4 py-3 text-slate-300">
                    JP ~0.38mm / EU ~0.5mm
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white font-medium">Medium</td>
                  <td className="px-4 py-3 text-slate-300">
                    Pilot M, Sailor M
                  </td>
                  <td className="px-4 py-3 text-slate-300">Lamy M</td>
                  <td className="px-4 py-3 text-slate-300">
                    JP ~0.5mm / EU ~0.65mm
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white font-medium">Broad</td>
                  <td className="px-4 py-3 text-slate-300">
                    Pilot B, Sailor B
                  </td>
                  <td className="px-4 py-3 text-slate-300">Lamy B, Pelikan B</td>
                  <td className="px-4 py-3 text-slate-300">
                    JP ~0.6mm / EU ~0.8mm
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white font-medium">
                    Double Broad
                  </td>
                  <td className="px-4 py-3 text-slate-500">—</td>
                  <td className="px-4 py-3 text-slate-300">Pelikan BB</td>
                  <td className="px-4 py-3 text-slate-300">~1.0mm+</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white font-medium">Music</td>
                  <td className="px-4 py-3 text-slate-300">Sailor Music</td>
                  <td className="px-4 py-3 text-slate-300">Pelikan Music</td>
                  <td className="px-4 py-3 text-slate-300">~0.8-1.2mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white font-medium">Stub</td>
                  <td className="px-4 py-3 text-slate-500">Rare</td>
                  <td className="px-4 py-3 text-slate-300">Lamy 1.1, TWSBI 1.1</td>
                  <td className="px-4 py-3 text-slate-300">Varies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Size Breakdown */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Detailed Nib Size Breakdown
          </h2>

          <div className="space-y-8">
            {/* UEF */}
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-800/20">
              <h3 className="text-lg font-bold text-white mb-2">
                Ultra Extra Fine (UEF)
              </h3>
              <p className="text-slate-400 text-sm mb-3">
                <strong className="text-slate-300">Who it&apos;s for:</strong>{" "}
                Journalers, annotators, people with very small handwriting
              </p>
              <p className="text-slate-300 leading-relaxed mb-3">
                The thinnest line available from a fountain pen. Nearly
                comparable to a 0.28mm gel pen. Only Pilot and Platinum offer
                UEF nibs. Produces extremely thin, precise lines that are
                perfect for marginalia and tiny handwriting.
              </p>
              <p className="text-slate-400 text-sm">
                <strong className="text-slate-300">Best UEF pens:</strong>{" "}
                <Link
                  href="/brands/pilot/custom-74"
                  className="text-amber-400 hover:text-amber-300"
                >
                  Pilot Custom 74
                </Link>{" "}
                ·{" "}
                <Link
                  href="/brands/platinum/3776-century"
                  className="text-amber-400 hover:text-amber-300"
                >
                  Platinum 3776 Century
                </Link>
              </p>
            </div>

            {/* EF */}
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-800/20">
              <h3 className="text-lg font-bold text-white mb-2">
                Extra Fine (EF)
              </h3>
              <p className="text-slate-400 text-sm mb-3">
                <strong className="text-slate-300">Who it&apos;s for:</strong>{" "}
                Small handwriting, fine detail work, note-taking
              </p>
              <p className="text-slate-300 leading-relaxed mb-3">
                Produces a thin, controlled line. Japanese EF nibs write
                thinner (closer to 0.3mm) than European EF nibs. Popular for
                academic writing and situations where paper quality is poor, as
                thinner lines bleed less.
              </p>
              <p className="text-slate-400 text-sm">
                <strong className="text-slate-300">Best EF pens:</strong>{" "}
                <Link
                  href="/brands/pilot/vanishing-point-capless"
                  className="text-amber-400 hover:text-amber-300"
                >
                  Pilot Vanishing Point
                </Link>{" "}
                ·{" "}
                <Link
                  href="/brands/sailor/profit-1911s"
                  className="text-amber-400 hover:text-amber-300"
                >
                  Sailor Profit 1911S
                </Link>{" "}
                ·{" "}
                <Link
                  href="/brands/lamy/safari"
                  className="text-amber-400 hover:text-amber-300"
                >
                  Lamy Safari
                </Link>
              </p>
            </div>

            {/* Fine */}
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-800/20">
              <h3 className="text-lg font-bold text-white mb-2">Fine (F)</h3>
              <p className="text-slate-400 text-sm mb-3">
                <strong className="text-slate-300">Who it&apos;s for:</strong>{" "}
                Everyday writing, note-taking, most left-handed writers
              </p>
              <p className="text-slate-300 leading-relaxed mb-3">
                The most popular nib size for everyday use. A Japanese Fine
                (~0.38mm) writes more like a European Extra Fine. If you&apos;re
                used to 0.5mm gel pens, a Japanese Fine will feel familiar. A
                European Fine (~0.5mm) is slightly broader.
              </p>
              <p className="text-slate-400 text-sm">
                <strong className="text-slate-300">Best Fine pens:</strong>{" "}
                <Link
                  href="/brands/pilot/metropolitan"
                  className="text-amber-400 hover:text-amber-300"
                >
                  Pilot Metropolitan
                </Link>{" "}
                ·{" "}
                <Link
                  href="/brands/pelikan/m200"
                  className="text-amber-400 hover:text-amber-300"
                >
                  Pelikan M200
                </Link>{" "}
                ·{" "}
                <Link
                  href="/brands/sailor/pro-gear-1911l"
                  className="text-amber-400 hover:text-amber-300"
                >
                  Sailor Pro Gear
                </Link>
              </p>
            </div>

            {/* Medium */}
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-800/20">
              <h3 className="text-lg font-bold text-white mb-2">Medium (M)</h3>
              <p className="text-slate-400 text-sm mb-3">
                <strong className="text-slate-300">Who it&apos;s for:</strong>{" "}
                General writing, journaling, most right-handed writers
              </p>
              <p className="text-slate-300 leading-relaxed mb-3">
                The &quot;sweet spot&quot; for many fountain pen users. A Japanese
                Medium (~0.5mm) is comparable to a European Fine. A European
                Medium (~0.65mm) produces a wet, smooth line that shows off ink
                shading and sheen.
              </p>
              <p className="text-slate-400 text-sm">
                <strong className="text-slate-300">Best Medium pens:</strong>{" "}
                <Link
                  href="/brands/lamy/2000"
                  className="text-amber-400 hover:text-amber-300"
                >
                  Lamy 2000
                </Link>{" "}
                ·{" "}
                <Link
                  href="/brands/pilot/custom-823"
                  className="text-amber-400 hover:text-amber-300"
                >
                  Pilot Custom 823
                </Link>{" "}
                ·{" "}
                <Link
                  href="/brands/pelikan/m800"
                  className="text-amber-400 hover:text-amber-300"
                >
                  Pelikan M800
                </Link>
              </p>
            </div>

            {/* Broad */}
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-800/20">
              <h3 className="text-lg font-bold text-white mb-2">Broad (B)</h3>
              <p className="text-slate-400 text-sm mb-3">
                <strong className="text-slate-300">Who it&apos;s for:</strong>{" "}
                Signature writing, calligraphy, showing off ink properties
              </p>
              <p className="text-slate-300 leading-relaxed mb-3">
                A thick, wet line that&apos;s great for signatures and display
                writing. Broad nibs really show off the character of an ink
                — shading, sheen, and shimmer effects are most visible at
                this width. European broads (~0.8mm) are noticeably thicker
                than Japanese broads (~0.6mm).
              </p>
              <p className="text-slate-400 text-sm">
                <strong className="text-slate-300">Best Broad pens:</strong>{" "}
                <Link
                  href="/brands/lamy/2000"
                  className="text-amber-400 hover:text-amber-300"
                >
                  Lamy 2000
                </Link>{" "}
                ·{" "}
                <Link
                  href="/brands/twbsbi/eco"
                  className="text-amber-400 hover:text-amber-300"
                >
                  TWSBI Eco
                </Link>{" "}
                ·{" "}
                <Link
                  href="/brands/kaweco/sport"
                  className="text-amber-400 hover:text-amber-300"
                >
                  Kaweco Sport
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Specialty Nibs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Specialty Nib Types
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-800/20">
              <h3 className="font-bold text-white mb-2">Music Nib</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                A specialized nib with two tines and a wide slit, designed for
                music notation. Produces both thick downstrokes and thin
                cross-strokes. Also excellent for expressive calligraphy and
                signing documents.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-800/20">
              <h3 className="font-bold text-white mb-2">Stub / Italic Nib</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                A flat-edged nib that produces natural line variation — thin on
                upstrokes, thick on downstrokes. Great for calligraphy-style
                handwriting without needing special technique. Lamy and TWSBI
                offer affordable stub nibs.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-800/20">
              <h3 className="font-bold text-white mb-2">
                Flex / Soft Nib
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                A nib that bends under pressure to produce line variation. Noodler&apos;s
                Ahab and Pilot Falcon (Elabo) are popular flex options. Real
                flex nibs are rare — most modern pens are semi-flex at best.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-800/20">
              <h3 className="font-bold text-white mb-2">
                Left-Handed Nib
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Lamy offers a special left-handed nib with a smoother tip
                angle for pushers (left-handed writers who push the pen).
                Most left-handed writers do fine with any nib, but the Lamy
                left-handed option is a nice touch.
              </p>
            </div>
          </div>
        </section>

        {/* Nib Material */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Steel vs Gold Nibs
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-800/20">
              <h3 className="font-bold text-white mb-2">Steel Nibs</h3>
              <ul className="text-slate-400 text-sm space-y-1.5">
                <li>• More affordable ($5-$50 for the nib)</li>
                <li>• Stiffer, more consistent line width</li>
                <li>• Durable and low maintenance</li>
                <li>• Great for everyday writing</li>
                <li>• Found on pens under $100 typically</li>
              </ul>
            </div>
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-800/20">
              <h3 className="font-bold text-white mb-2">Gold Nibs (14k-18k)</h3>
              <ul className="text-slate-400 text-sm space-y-1.5">
                <li>• More expensive ($50-$500+ for the nib)</li>
                <li>• Softer, more responsive to writing pressure</li>
                <li>• Smoother, more &quot;springy&quot; writing feel</li>
                <li>• Better for long writing sessions</li>
                <li>• Found on pens from $50 to $5,000+</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-400 text-sm">
            <strong className="text-slate-300">Bottom line:</strong> A gold
            nib isn&apos;t necessarily &quot;better&quot; — it&apos;s different.
            Many fountain pen enthusiasts prefer the crisp, consistent line of
            a steel Lamy nib over a softer gold nib. Try both before committing
            to an expensive upgrade.
          </p>
        </section>

        {/* Recommendations by Use Case */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Which Nib Size Should You Choose?
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800/50">
                  <th className="text-left px-4 py-3 text-slate-400">
                    Use Case
                  </th>
                  <th className="text-left px-4 py-3 text-amber-400">
                    Recommended Size
                  </th>
                  <th className="text-left px-4 py-3 text-slate-400">
                    Best Pens
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="px-4 py-3 text-white">Daily note-taking</td>
                  <td className="px-4 py-3 text-slate-300">Fine or Medium</td>
                  <td className="px-4 py-3 text-slate-400">
                    Pilot Metropolitan, Lamy Safari
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">Journaling</td>
                  <td className="px-4 py-3 text-slate-300">Fine or Medium</td>
                  <td className="px-4 py-3 text-slate-400">
                    TWSBI Eco, Pilot Custom 74
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">
                    Left-handed writing
                  </td>
                  <td className="px-4 py-3 text-slate-300">Fine</td>
                  <td className="px-4 py-3 text-slate-400">
                    Lamy Safari (F or LH), Pilot Metropolitan
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">
                    Calligraphy / signatures
                  </td>
                  <td className="px-4 py-3 text-slate-300">
                    Broad, Stub, or Flex
                  </td>
                  <td className="px-4 py-3 text-slate-400">
                    Lamy 1.1 Stub, TWSBI Eco 1.1
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">
                    Small handwriting
                  </td>
                  <td className="px-4 py-3 text-slate-300">
                    Extra Fine or Fine
                  </td>
                  <td className="px-4 py-3 text-slate-400">
                    Pilot Vanishing Point, Sailor Profit
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">
                    Showcasing ink properties
                  </td>
                  <td className="px-4 py-3 text-slate-300">
                    Medium or Broad
                  </td>
                  <td className="px-4 py-3 text-slate-400">
                    TWSBI Eco, Pelikan M800
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Related Guides
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/blog/best-fountain-pens-for-beginners"
              className="p-4 rounded-xl border border-slate-800 bg-slate-800/20 hover:border-amber-600/50 transition-all"
            >
              <h3 className="font-bold text-white hover:text-amber-400 transition-colors mb-1">
                Best Fountain Pens for Beginners
              </h3>
              <p className="text-slate-400 text-sm">
                New to fountain pens? Our complete starter guide.
              </p>
            </Link>
            <Link
              href="/blog/fountain-pen-filling-systems-explained"
              className="p-4 rounded-xl border border-slate-800 bg-slate-800/20 hover:border-amber-600/50 transition-all"
            >
              <h3 className="font-bold text-white hover:text-amber-400 transition-colors mb-1">
                Fountain Pen Filling Systems Explained
              </h3>
              <p className="text-slate-400 text-sm">
                Cartridge vs piston vs vacuum — which is right for you?
              </p>
            </Link>
            <Link
              href="/blog/best-fountain-pen-inks"
              className="p-4 rounded-xl border border-slate-800 bg-slate-800/20 hover:border-amber-600/50 transition-all"
            >
              <h3 className="font-bold text-white hover:text-amber-400 transition-colors mb-1">
                Best Fountain Pen Inks in 2026
              </h3>
              <p className="text-slate-400 text-sm">
                Top 10 inks across 5 brands, tested and compared.
              </p>
            </Link>
            <Link
              href="/blog/best-fountain-pens-under-50"
              className="p-4 rounded-xl border border-slate-800 bg-slate-800/20 hover:border-amber-600/50 transition-all"
            >
              <h3 className="font-bold text-white hover:text-amber-400 transition-colors mb-1">
                Best Fountain Pens Under $50
              </h3>
              <p className="text-slate-400 text-sm">
                Compare prices on top-rated affordable fountain pens.
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What nib size is best for beginners?",
                a: "A Fine or Medium nib is best for most beginners. Fine nibs are more forgiving on cheaper paper and produce a controlled, consistent line. If you write small, go Fine. If you write large, go Medium.",
              },
              {
                q: "Why are Japanese nibs thinner than European nibs?",
                a: "Japanese and European manufacturers use different sizing conventions. Japanese nibs are sized to match the fine-tipped pens popular in East Asian writing, while European nibs follow Western pen traditions. A Japanese Medium is roughly equivalent to a European Fine.",
              },
              {
                q: "Can I swap nibs on my fountain pen?",
                a: "Some pens allow nib swapping (Lamy Safari, TWSBI ECO, Pilot Metropolitan with compatible nib units), while others are permanently attached. Check your pen's documentation. Lamy's swappable nib system is one of their biggest advantages.",
              },
              {
                q: "Do gold nibs write better than steel nibs?",
                a: "Not necessarily better, but differently. Gold nibs are softer and more responsive, which some people prefer for long writing sessions. Steel nibs are stiffer and more consistent. Many experienced users prefer steel for everyday writing.",
              },
              {
                q: "What's the difference between Fine and Extra Fine?",
                a: "Extra Fine produces a thinner line than Fine. Japanese EF (~0.3mm) is very thin, comparable to a 0.3mm gel pen. European EF (~0.4mm) is slightly broader. EF nibs can feel scratchier if you press too hard — they're designed for light pressure.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-slate-800 bg-slate-800/20"
              >
                <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
