import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PenPrice — Fountain Pen Price Comparison & Aggregator",
  description:
    "Compare fountain pen prices across Amazon, eBay, JetPens, Goulet Pens, and more. Find the best price on Lamy, Pilot, Pelikan, Montblanc, Sailor, TWSBI, and 130+ models across 56 brands. Built for fountain pen enthusiasts.",
  openGraph: {
    title: "PenPrice — Find the Best Price on Fountain Pens",
    description:
      "Compare prices across top retailers. Lamy Safari, Pilot Custom 823, Pelikan M800, Montblanc 149, and more.",
    siteName: "PenPrice",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PenPrice — Fountain Pen Price Comparison",
    description:
      "Find the best price on your next fountain pen. Compare Amazon, eBay, JetPens, Goulet Pens, and more.",
  },
  metadataBase: new URL("https://penprice.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen bg-stone-50 text-stone-800">
        <nav className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-2xl">🖊️</span>
              <span className="text-xl font-bold text-stone-900">
                Pen<span className="text-blue-900">Price</span>
              </span>
            </Link>
          <nav className="ml-auto flex items-center gap-6 text-sm">
              <Link href="/" className="text-stone-500 hover:text-blue-900 transition-colors">
                Brands
              </Link>
              <Link href="/blog" className="text-stone-500 hover:text-blue-900 transition-colors">
                Guides
              </Link>
              <Link href="/faq" className="text-stone-500 hover:text-blue-900 transition-colors">
                FAQ
              </Link>
            </nav>
          </div>
        </nav>
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}