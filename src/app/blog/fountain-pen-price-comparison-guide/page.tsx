import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fountain Pen Price Comparison Guide — Best Deals Across Retailers 2026 | PenPrice",
  description:
    "Compare fountain pen prices across Amazon, JetPens, Goulet Pens, eBay, and specialty retailers. Find the best deals on Pilot, Lamy, Sailor, Pelikan, Montblanc, and TWSBI fountain pens.",
  openGraph: {
    title: "Fountain Pen Price Comparison Guide 2026",
    description:
      "Compare prices on 130+ fountain pen models across 5 major retailers. Save money on your next pen purchase.",
    type: "article",
  },
};

interface PriceComparison {
  pen: string;
  brand: string;
  brandSlug: string;
  modelSlug: string;
  budget: string;
  priceRange: string;
  bestDeal: string;
  retailer: string;
}

const comparisons: PriceComparison[] = [
  {
    pen: "Pilot Metropolitan",
    brand: "Pilot",
    brandSlug: "pilot",
    modelSlug: "metropolitan",
    budget: "Under $25",
    priceRange: "$17–$22",
    bestDeal: "$17.95",
    retailer: "Amazon",
  },
  {
    pen: "Platinum Preppy",
    brand: "Platinum",
    brandSlug: "platinum",
    modelSlug: "preppy",
    budget: "Under $10",
    priceRange: "$5–$8",
    bestDeal: "$5.75",
    retailer: "JetPens",
  },
  {
    pen: "Lamy Safari",
    brand: "Lamy",
    brandSlug: "lamy",
    modelSlug: "safari",
    budget: "Under $35",
    priceRange: "$25–$32",
    bestDeal: "$25.00",
    retailer: "Amazon",
  },
  {
    pen: "TWSBI Eco",
    brand: "TWSBI",
    brandSlug: "twsbi",
    modelSlug: "eco",
    budget: "Under $35",
    priceRange: "$29–$35",
    bestDeal: "$29.99",
    retailer: "Goulet Pens",
  },
  {
    pen: "Lamy 2000",
    brand: "Lamy",
    brandSlug: "lamy",
    modelSlug: "2000",
    budget: "$150–$200",
    priceRange: "$170–$200",
    bestDeal: "$170.00",
    retailer: "Amazon",
  },
  {
    pen: "Pilot Custom 74",
    brand: "Pilot",
    brandSlug: "pilot",
    modelSlug: "custom-74",
    budget: "$100–$150",
    priceRange: "$90–$140",
    bestDeal: "$90.00",
    retailer: "Amazon JP",
  },
  {
    pen: "Pilot Custom 823",
    brand: "Pilot",
    brandSlug: "pilot",
    modelSlug: "custom-823",
    budget: "$200–$300",
    priceRange: "$220–$276",
    bestDeal: "$220.00",
    retailer: "Amazon JP",
  },
  {
    pen: "Sailor Pro Gear",
    brand: "Sailor",
    brandSlug: "sailor",
    modelSlug: "pro-gear",
    budget: "$200–$350",
    priceRange: "$200–$316",
    bestDeal: "$200.00",
    retailer: "Amazon",
  },
  {
    pen: "Pelikan M200",
    brand: "Pelikan",
    brandSlug: "pelikan",
    modelSlug: "m200",
    budget: "$75–$125",
    priceRange: "$80–$120",
    bestDeal: "$80.00",
    retailer: "Amazon",
  },
  {
    pen: "Pelikan M800",
    brand: "Pelikan",
    brandSlug: "pelikan",
    modelSlug: "m800",
    budget: "$400–$600",
    priceRange: "$420–$575",
    bestDeal: "$420.00",
    retailer: "Amazon",
  },
  {
    pen: "Kaweco Sport",
    brand: "Kaweco",
    brandSlug: "kaweco",
    modelSlug: "sport",
    budget: "Under $35",
    priceRange: "$22–$32",
    bestDeal: "$22.00",
    retailer: "JetPens",
  },
  {
    pen: "Montblanc 149",
    brand: "Montblanc",
    brandSlug: "montblanc",
    modelSlug: "149",
    budget: "$800+",
    priceRange: "$850–$1,100",
    bestDeal: "$850.00",
    retailer: "Amazon",
  },
];

const retailerTips = [
  {
    retailer: "Amazon",
    tip: "Often has the lowest prices but watch for third-party sellers. Prime shipping is a bonus. Price fluctuates frequently, so check back often.",
    url: "https://www.amazon.com",
  },
  {
    retailer: "JetPens",
    tip: "Specializes in Japanese pens with accurate product info and free shipping over $25. Great for Pilot, Platinum, Sailor, and TWSBI.",
    url: "https://www.jetpens.com",
  },
  {
    retailer: "Goulet Pens",
    tip: "US-based retailer with excellent customer service, free ink samples with orders, and a huge selection. Best for nibs, inks, and accessories.",
    url: "https://www.gouletpens.com",
  },
  {
    retailer: "eBay",
    tip: "Best for used and vintage pens. Verify seller ratings. Can find discontinued models at good prices.",
    url: "https://www.ebay.com",
  },
  {
    retailer: "Goldspot Pens",
    tip: "Specialty retailer with curated selection. Often has exclusive colors and limited editions. Competitive pricing on premium pens.",
    url: "https://www.goldspot.com",
  },
];

const faqs = [
  {
    question: "Where can I find the cheapest fountain pen prices?",
    answer: "Amazon typically offers the lowest prices on popular fountain pens like the Pilot Metropolitan and Lamy Safari. For Japanese pens, Amazon Japan (amazon.co.jp) often has significantly lower prices with international shipping. JetPens and Goulet Pens occasionally run sales and offer free shipping thresholds.",
  },
  {
    question: "Is it safe to buy fountain pens on Amazon?",
    answer: "Yes, but buy from reputable sellers with high ratings. Look for 'Ships from and sold by Amazon.com' for the safest option. For premium pens like Montblanc or Pelikan, authorized dealers like Goulet Pens or JetPens provide better warranty support.",
  },
  {
    question: "How much should I spend on my first fountain pen?",
    answer: "You can get an excellent first fountain pen for under $25. The Pilot Metropolitan ($18), Platinum Preppy ($6), and Lamy Safari ($30) are all great starting points. There's no need to spend more than $50 for your first pen.",
  },
  {
    question: "Do fountain pen prices change often?",
    answer: "Yes, prices on Amazon and eBay fluctuate daily. Japanese yen exchange rates affect prices on Japanese pens. Set up price alerts on CamelCamelCamel for Amazon to catch drops. Holiday sales (Black Friday, Prime Day) often have the best deals.",
  },
];

export default function FountainPenPriceComparisonGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Fountain Pen Price Comparison Guide — Best Deals Across Retailers 2026",
            description:
              "Compare fountain pen prices across Amazon, JetPens, Goulet Pens, eBay, and specialty retailers. Find the best deals on 130+ models.",
            author: { "@type": "Organization", name: "PenPrice" },
            publisher: { "@type": "Organization", name: "PenPrice" },
            datePublished: "2026-06-30",
            dateModified: "2026-06-30",
          }),
        }}
      />

      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <nav className="text-sm text-stone-500 mb-8">
        <Link href="/" className="hover:text-blue-900">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-900">Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700">Price Comparison Guide</span>
      </nav>

      <h1 className="text-4xl font-bold text-stone-900 mb-6">
        Fountain Pen Price Comparison Guide
      </h1>
      <p className="text-xl text-stone-600 mb-8">
        Compare prices on popular fountain pens across Amazon, JetPens, Goulet Pens, eBay, and specialty retailers. Updated June 2026.
      </p>

      {/* Price Comparison Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-stone-900 mb-6">Quick Price Comparisons</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-stone-200 rounded-lg overflow-hidden">
            <thead className="bg-stone-100">
              <tr>
                <th className="text-left px-4 py-3 text-sm font-semibold text-stone-700">Pen</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-stone-700">Budget</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-stone-700">Price Range</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-stone-700">Best Deal</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-stone-700">Where</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item) => (
                <tr key={item.pen} className="border-t border-stone-200 hover:bg-stone-50">
                  <td className="px-4 py-3">
                    <Link href={`/brands/${item.brandSlug}/${item.modelSlug}`} className="text-blue-900 hover:underline font-medium">
                      {item.pen}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-sm text-stone-600">{item.budget}</td>
                  <td className="px-4 py-3 text-sm text-stone-600">{item.priceRange}</td>
                  <td className="px-4 py-3 text-sm font-semibold text-green-700">{item.bestDeal}</td>
                  <td className="px-4 py-3 text-sm text-stone-600">{item.retailer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Retailer Guide */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-stone-900 mb-6">Where to Buy Fountain Pens</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {retailerTips.map((r) => (
            <div key={r.retailer} className="border border-stone-200 rounded-lg p-5 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">{r.retailer}</h3>
              <p className="text-sm text-stone-600">{r.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-stone-900 mb-6">Price-Saving Tips</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-900 pl-4">
            <h3 className="font-semibold text-stone-900">Use Price Trackers</h3>
            <p className="text-sm text-stone-600 mt-1">
              Set up alerts on <a href="https://camelcamelcamel.com" className="text-blue-900 hover:underline" target="_blank" rel="noopener noreferrer">CamelCamelCamel</a> for Amazon prices. You&apos;ll get notified when prices drop.
            </p>
          </div>
          <div className="border-l-4 border-blue-900 pl-4">
            <h3 className="font-semibold text-stone-900">Check Amazon Japan</h3>
            <p className="text-sm text-stone-600 mt-1">
              Japanese pens (Pilot, Sailor, Platinum) are often 30-40% cheaper on Amazon Japan, even with international shipping. Search for the model in Japanese for better results.
            </p>
          </div>
          <div className="border-l-4 border-blue-900 pl-4">
            <h3 className="font-semibold text-stone-900">Buy During Sales</h3>
            <p className="text-sm text-stone-600 mt-1">
              Prime Day, Black Friday, and end-of-year sales are the best times to buy. Many retailers also offer holiday bundles with free ink samples.
            </p>
          </div>
          <div className="border-l-4 border-blue-900 pl-4">
            <h3 className="font-semibold text-stone-900">Consider Used Pens</h3>
            <p className="text-sm text-stone-600 mt-1">
              eBay, r/Pen_Swap on Reddit, and pen shows are great for finding used pens at 30-50% off retail. Premium pens like Pelikan M800 or Montblanc 149 are often available in excellent condition.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-stone-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-b border-stone-200 pb-6">
              <h3 className="font-semibold text-stone-900 mb-2">{faq.question}</h3>
              <p className="text-sm text-stone-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-stone-100 rounded-lg p-6">
        <h2 className="font-bold text-stone-900 mb-3">Related Guides</h2>
        <div className="grid gap-2 md:grid-cols-2 text-sm">
          <Link href="/blog/best-fountain-pens-under-100" className="text-blue-900 hover:underline">Best Fountain Pens Under $100</Link>
          <Link href="/blog/best-fountain-pens-under-50" className="text-blue-900 hover:underline">Best Fountain Pens Under $50</Link>
          <Link href="/blog/best-fountain-pens-under-30" className="text-blue-900 hover:underline">Best Fountain Pens Under $30</Link>
          <Link href="/blog/best-fountain-pens-for-beginners" className="text-blue-900 hover:underline">Best Fountain Pens for Beginners</Link>
          <Link href="/blog/best-japanese-fountain-pens" className="text-blue-900 hover:underline">Best Japanese Fountain Pens</Link>
          <Link href="/blog/fountain-pen-vs-ballpoint" className="text-blue-900 hover:underline">Fountain Pen vs Ballpoint</Link>
        </div>
      </section>
    </article>
  );
}
