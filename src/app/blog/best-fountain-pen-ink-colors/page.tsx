import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Fountain Pen Ink Colors in 2026 — Color Guide & Price Comparison | PenPrice",
  description:
    "Discover the best fountain pen ink colors for every writing style. Compare Pilot Iroshizuku, Diamine, Noodler's, Waterman, Pelikan, and Sailor inks by color, price, and properties.",
  openGraph: {
    title: "Best Fountain Pen Ink Colors in 2026 — Complete Color Guide",
    description: "Compare fountain pen ink colors by brand, shade, and price. Blues, blacks, reds, greens, and specialty inks compared.",
    type: "article",
  },
};

interface InkColor {
  name: string;
  brand: string;
  colorHex: string;
  category: string;
  description: string;
  priceFrom: number;
  waterResistance: string;
  bestFor: string;
}

const inkColors: InkColor[] = [
  // Blues
  {
    name: "Kon-Peki (Cerulean Blue)",
    brand: "Pilot Iroshizuku",
    colorHex: "#1E6BB8",
    category: "Blue",
    description: "A rich, vibrant cerulean blue that's become the gold standard for fountain pen inks. Vibrant on paper, well-behaved, and beautiful in any pen.",
    priceFrom: 22.00,
    waterResistance: "Moderate",
    bestFor: "Everyday writing, professional use",
  },
  {
    name: "Yama-Budo (Crimson-Azalea)",
    brand: "Pilot Iroshizuku",
    colorHex: "#9B2D5E",
    category: "Purple-Red",
    description: "A stunning deep crimson-purple with beautiful shading. One of the most photogenic inks in the fountain pen world.",
    priceFrom: 22.00,
    waterResistance: "Low",
    bestFor: "Correspondence, journaling",
  },
  {
    name: "Baystate Blue",
    brand: "Noodler's",
    colorHex: "#1A3C8F",
    category: "Blue",
    description: "The most famous blue ink in the fountain pen world. Bulletproof waterproof ink that stains everything it touches. Incredibly vibrant and permanent.",
    priceFrom: 14.00,
    waterResistance: "Excellent (bulletproof)",
    bestFor: "Permanent documents, addressing envelopes",
  },
  {
    name: "Royal Blue",
    brand: "Waterman",
    colorHex: "#2445A0",
    category: "Blue",
    description: "The classic safe blue ink. Flow is perfect, it cleans easily from any pen, and it's the ink most recommended for vintage and gold-nib pens.",
    priceFrom: 10.00,
    waterResistance: "Low",
    bestFor: "Vintage pens, safe everyday ink",
  },
  {
    name: "Sregistrato (Registration Blue)",
    brand: "Pelikan",
    colorHex: "#003DA5",
    category: "Blue",
    description: "A deep, professional blue from Pelikan's 4001 line. Reliable, well-behaved, and has been a staple of German offices for decades.",
    priceFrom: 8.00,
    waterResistance: "Moderate",
    bestFor: "Professional documents, office use",
  },
  // Blacks
  {
    name: "Take-sumi (Bamboo Charcoal)",
    brand: "Pilot Iroshizuku",
    colorHex: "#2D2D2D",
    category: "Black",
    description: "A soft, warm charcoal black with subtle green undertones. Never harsh on paper, and it flows beautifully. The premium black ink.",
    priceFrom: 22.00,
    waterResistance: "Low",
    bestFor: "Journaling, everyday writing",
  },
  {
    name: "Carbon Black",
    brand: "Platinum",
    colorHex: "#1A1A1A",
    category: "Black",
    description: "A pigment-based permanent black ink. Waterproof, lightfast, and archival. The ink that makes the Platinum 3776 a document-signing powerhouse.",
    priceFrom: 15.00,
    waterResistance: "Excellent",
    bestFor: "Archival documents, legal signing",
  },
  {
    name: "Heart of Darkness",
    brand: "Noodler's",
    colorHex: "#0D0D0D",
    category: "Black",
    description: "The blackest black fountain pen ink available. Bulletproof, waterproof, and permanent. Stains demonstrator pens permanently.",
    priceFrom: 14.00,
    waterResistance: "Excellent (bulletproof)",
    bestFor: "Permanent documents, art, addressing envelopes",
  },
  // Reds
  {
    name: "Momiji (Autumn Leaves)",
    brand: "Pilot Iroshizuku",
    colorHex: "#C84040",
    category: "Red",
    description: "A warm, autumnal red with golden shading. Not too bright, not too muted. The red ink for people who think they don't like red inks.",
    priceFrom: 22.00,
    waterResistance: "Low",
    bestFor: "Journaling, annotation",
  },
  {
    name: "Dragon's Blood",
    brand: "Noodler's",
    colorHex: "#B22222",
    category: "Red",
    description: "A deep, blood-red permanent ink. Waterproof and archival, with a dramatic color that commands attention on paper.",
    priceFrom: 14.00,
    waterResistance: "Excellent (bulletproof)",
    bestFor: "Grading, permanent annotations",
  },
  // Greens
  {
    name: "Chiku-rin (Bamboo Forest)",
    brand: "Pilot Iroshizuku",
    colorHex: "#6B8E3F",
    category: "Green",
    description: "A fresh, leafy green with beautiful golden shading. Evokes spring mornings in a bamboo grove. One of the best shading inks available.",
    priceFrom: 22.00,
    waterResistance: "Low",
    bestFor: "Journaling, creative writing",
  },
  {
    name: "Evergreen",
    brand: "Diamine",
    colorHex: "#2E6B45",
    category: "Green",
    description: "A deep forest green from Diamine's extensive range. Affordable, well-behaved, and available in 30ml bottles for sampling.",
    priceFrom: 8.00,
    waterResistance: "Low",
    bestFor: "Everyday writing, journaling",
  },
  // Oranges
  {
    name: "Yu-yake (Sunset)",
    brand: "Pilot Iroshizuku",
    colorHex: "#E87A2E",
    category: "Orange",
    description: "A vibrant sunset orange with incredible shading from gold to deep amber. One of the most eye-catching inks in any collection.",
    priceFrom: 22.00,
    waterResistance: "Low",
    bestFor: "Creative writing, journaling",
  },
  {
    name: "Sunset Orange",
    brand: "Diamine",
    colorHex: "#E86A1A",
    category: "Orange",
    description: "A bold, true orange that's highly legible. One of the most popular colored inks in the Diamine range. Great value in the 30ml bottle.",
    priceFrom: 8.00,
    waterResistance: "Low",
    bestFor: "Headers, annotations, creative writing",
  },
  // Specialty
  {
    name: "Kiwa-guro (Ultra Black)",
    brand: "Sailor",
    colorHex: "#151515",
    category: "Black",
    description: "Sailor's pigment-based permanent black. Waterproof, lightfast, and incredibly smooth. The professional's choice for permanent black ink.",
    priceFrom: 18.00,
    waterResistance: "Excellent",
    bestFor: "Documents, professional use, art",
  },
  {
    name: "Ancient Copper",
    brand: "Diamine",
    colorHex: "#B87333",
    category: "Orange-Brown",
    description: "A gorgeous copper-brown with gold sheen. Develops a metallic sheen on quality paper that's unlike any other ink. A cult favorite.",
    priceFrom: 8.00,
    waterResistance: "Low",
    bestFor: "Journaling, creative writing, calligraphy",
  },
];

const categories = [...new Set(inkColors.map(i => i.category))];

export default function BestFountainPenInkColorsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-800 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-500">Best Fountain Pen Ink Colors</span>
      </nav>

      <header className="mb-10">
        <span className="text-xs px-2.5 py-0.5 rounded bg-blue-50 text-blue-800 mb-3 inline-block">Ink Guide</span>
        <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
          Best Fountain Pen Ink Colors in 2026
        </h1>
        <p className="text-lg text-stone-500 leading-relaxed">
          The right ink transforms your writing experience. From the iconic Pilot Iroshizuku range to permanent Noodler&apos;s bulletproof inks, here are the best fountain pen ink colors organized by shade, brand, and use case.
        </p>
      </header>

      {/* Quick comparison table */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">Quick Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-50">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-stone-700">Ink</th>
                <th className="text-left px-4 py-3 font-semibold text-stone-700">Brand</th>
                <th className="text-left px-4 py-3 font-semibold text-stone-700">Color</th>
                <th className="text-left px-4 py-3 font-semibold text-stone-700">Water Resistance</th>
                <th className="text-right px-4 py-3 font-semibold text-stone-700">Price From</th>
              </tr>
            </thead>
            <tbody>
              {inkColors.map((ink, i) => (
                <tr key={i} className="border-t border-stone-100 hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-stone-800">
                    <span className="inline-block w-3 h-3 rounded-full mr-2 align-middle" style={{ backgroundColor: ink.colorHex }} />
                    {ink.name}
                  </td>
                  <td className="px-4 py-3 text-stone-500">{ink.brand}</td>
                  <td className="px-4 py-3 text-stone-500">{ink.category}</td>
                  <td className="px-4 py-3 text-stone-500">{ink.waterResistance}</td>
                  <td className="px-4 py-3 text-right font-semibold text-blue-800">${ink.priceFrom.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed cards by category */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-stone-900 mb-6">Detailed Ink Comparisons</h2>
        <div className="space-y-6">
          {categories.map(cat => (
            <div key={cat}>
              <h3 className="text-lg font-semibold text-stone-800 mb-3 flex items-center gap-2">
                <span className="text-xs px-2 py-0.5 bg-stone-100 rounded text-stone-500">{cat}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {inkColors.filter(i => i.category === cat).map((ink, i) => (
                  <div key={i} className="p-5 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-6 h-6 rounded-full border border-stone-200" style={{ backgroundColor: ink.colorHex }} />
                      <div>
                        <div className="font-semibold text-stone-900 text-sm">{ink.name}</div>
                        <div className="text-xs text-stone-400">{ink.brand}</div>
                      </div>
                      <div className="ml-auto text-right">
                        <div className="text-sm font-bold text-blue-800">${ink.priceFrom.toFixed(2)}</div>
                      </div>
                    </div>
                    <p className="text-xs text-stone-500 leading-relaxed mb-2">{ink.description}</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="px-2 py-0.5 bg-stone-50 rounded text-stone-500">{ink.bestFor}</span>
                      <span className={`px-2 py-0.5 rounded ${
                        ink.waterResistance.includes("Excellent") ? "bg-green-50 text-green-700" :
                        ink.waterResistance === "Moderate" ? "bg-amber-50 text-amber-700" :
                        "bg-stone-50 text-stone-500"
                      }`}>
                        {ink.waterResistance}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What to Consider */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-stone-900 mb-6">How to Choose Fountain Pen Ink</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "Dye-Based vs Pigment-Based", desc: "Dye-based inks (Pilot Iroshizuku, Diamine) flow better and come in more colors. Pigment-based inks (Platinum Carbon, Sailor Kiwa-guro) are waterproof and archival but require more cleaning." },
            { title: "Water Resistance", desc: "If you sign documents or address envelopes, you need waterproof ink. Noodler's bulletproof line and Platinum Carbon Black are the gold standards. For journaling, any ink works." },
            { title: "Shading & Sheen", desc: "Some inks show color variation (shading) or a metallic overlay (sheen) on quality paper. Iroshizuku inks are famous for shading. Diamine Ancient Copper develops copper sheen." },
            { title: "Pen Compatibility", desc: "Pigment inks can clog pens that aren't cleaned regularly. Always check if your pen manufacturer recommends against pigment inks. Pilot and Sailor pens handle their own pigmented inks well." },
          ].map((item, i) => (
            <div key={i} className="p-5 rounded border border-stone-200 bg-white">
              <h3 className="font-semibold text-stone-900 mb-2">{item.title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ink Brands Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-stone-900 mb-6">Ink Brands Compared</h2>
        <div className="space-y-4">
          {[
            { brand: "Pilot Iroshizuku", range: "$22-28 per 50ml", desc: "The luxury standard. 25+ colors inspired by Japanese nature. Premium glass bottles. Beautiful shading and flow. Worth the price." },
            { brand: "Diamine", range: "$8-16 per 30-80ml", desc: "The widest color range of any ink brand (100+ colors). Affordable 30ml bottles for sampling. Well-behaved and beginner-friendly." },
            { brand: "Noodler's", range: "$14-18 per 3oz", desc: "The waterproof ink specialist. Bulletproof, Baystate, and standard lines. Known for bold colors and permanent formulas. American-made." },
            { brand: "Sailor", range: "$15-22 per 20ml", desc: "Known for Shikiori (seasonal) and Sei-boku/Kiwa-guro (pigment) lines. Small bottles but exceptional quality. Their pigmented inks are among the best." },
            { brand: "Waterman", range: "$8-12 per 50ml", desc: "The safe choice. Serenity Blue and Intense Black are the recommended inks for vintage pens. Affordable, reliable, easy to clean." },
            { brand: "Pelikan 4001", range: "$6-10 per 62.5ml", desc: "The German office standard. Blue-Black, Royal Blue, and Brilliant Black. Cheap, reliable, and safe for any pen. The workhorse ink." },
          ].map((item, i) => (
            <div key={i} className="p-5 rounded border border-stone-200 bg-white">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-stone-900">{item.brand}</h3>
                <span className="text-xs px-2 py-0.5 bg-stone-100 rounded text-stone-500">{item.range}</span>
              </div>
              <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-stone-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "What is the best blue fountain pen ink?", a: "Pilot Iroshizuku Kon-Peki is the consensus favorite for everyday blue. For waterproof blue, Noodler's Baystate Blue is iconic (but stains). For safe use in vintage pens, Waterman Serenity Blue is the standard." },
            { q: "Can I mix fountain pen inks?", a: "Only mix inks from the same brand. Different brands use different chemical formulas that can react and clog your pen. Pilot Iroshizuku colors mix safely with each other. Never mix Noodler's Baystate Blue with other inks." },
            { q: "How long does fountain pen ink last?", a: "A 50ml bottle lasts roughly 2-4 months of daily writing. A 30ml Diamine bottle lasts about 2 months. Cartridge pens use about one cartridge per week of daily writing." },
            { q: "What ink is best for fountain pen calligraphy?", a: "For flex nibs and calligraphy, wet flowing inks work best. Pilot Iroshizuku inks are excellent. Noodler's Konrad and Ahab flex pens work well with almost any dye-based ink." },
          ].map((faq, i) => (
            <div key={i} className="p-5 rounded border border-stone-200 bg-white">
              <h3 className="font-semibold text-stone-900 mb-2">{faq.q}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Guides */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-stone-900 mb-4">Related Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/blog/fountain-pen-ink-comparison-guide", label: "Fountain Pen Ink Comparison Guide" },
            { href: "/blog/best-fountain-pen-inks", label: "Best Fountain Pen Inks" },
            { href: "/blog/best-waterproof-fountain-pen-ink", label: "Best Waterproof Fountain Pen Inks" },
            { href: "/blog/fountain-pen-maintenance-guide", label: "Fountain Pen Maintenance Guide" },
            { href: "/blog/fountain-pen-nib-sizes-explained", label: "Fountain Pen Nib Sizes Explained" },
            { href: "/blog/best-fountain-pens-for-beginners", label: "Best Fountain Pens for Beginners" },
          ].map(link => (
            <Link key={link.href} href={link.href} className="p-3 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all text-sm font-medium text-stone-700 hover:text-blue-800">
              {link.label} →
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-12 pt-8 border-t border-stone-200 text-xs text-stone-400 text-center space-y-1">
        <p>PenPrice — Autonomous fountain pen price comparison tool. Prices updated from retailer listings.</p>
        <p>Built by an AI agent as a 30-day experiment. <a href="https://github.com/caiadas25/penprice" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-blue-900 transition-colors">Source on GitHub ↗</a></p>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Best Fountain Pen Ink Colors in 2026",
            description: "Compare fountain pen ink colors by brand, shade, and price. Blues, blacks, reds, greens, and specialty inks compared.",
            datePublished: "2026-06-30",
            author: { "@type": "Organization", name: "PenPrice" },
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
                name: "What is the best blue fountain pen ink?",
                acceptedAnswer: { "@type": "Answer", text: "Pilot Iroshizuku Kon-Peki is the consensus favorite for everyday blue. For waterproof blue, Noodler's Baystate Blue is iconic. For vintage pens, Waterman Serenity Blue is the standard." },
              },
              {
                "@type": "Question",
                name: "Can I mix fountain pen inks?",
                acceptedAnswer: { "@type": "Answer", text: "Only mix inks from the same brand. Different brands use different chemical formulas that can react and clog your pen." },
              },
              {
                "@type": "Question",
                name: "How long does fountain pen ink last?",
                acceptedAnswer: { "@type": "Answer", text: "A 50ml bottle lasts roughly 2-4 months of daily writing. A 30ml Diamine bottle lasts about 2 months." },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
