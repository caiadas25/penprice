export interface RetailerPrice {
  retailer: string;
  price: number;
  currency: string;
  url: string;
  inStock: boolean;
  condition: "new" | "used" | "both";
}

export interface Model {
  id: string;
  name: string;
  slug: string;
  description: string;
  nibOptions: string[];
  fillingSystem: string;
  material: string;
  knownPrices: RetailerPrice[];
  imageUrl?: string;
  yearIntroduced?: number;
  msrp?: number;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  country: string;
  description: string;
  website: string;
  logoUrl?: string;
  models: Model[];
}

export const brands: Brand[] = [
  {
    id: "lamy",
    name: "Lamy",
    slug: "lamy",
    country: "Germany",
    description:
      "Founded in 1930, Lamy is known for their modernist, Bauhaus-inspired design philosophy. Their Safari model is one of the most popular fountain pens worldwide, especially among beginners.",
    website: "https://www.lamy.com",
    models: [
      {
        id: "lamy-safari",
        name: "Safari",
        slug: "safari",
        description:
          "Iconic triangular grip fountain pen designed by Wolfgang Fabian. Made of ABS plastic, lightweight and durable. The Safari is Lamy's best-selling pen and a top recommendation for beginners.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad", "Left-Handed"],
        fillingSystem: "Cartridge / Converter (Z28)",
        material: "ABS plastic",
        knownPrices: [
          { retailer: "Amazon", price: 29.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 30.00, currency: "USD", url: "https://www.jetpens.com/Lamy-Safari-Fountain-Pen/ct/1327", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 30.00, currency: "USD", url: "https://www.gouletpens.com/collections/lamy-safari", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 29.95, currency: "USD", url: "https://www.goldspot.com/lamy/safari/", inStock: true, condition: "new" },
        ],
        msrp: 30,
        yearIntroduced: 1980,
      },
      {
        id: "lamy-al-star",
        name: "AL-Star",
        slug: "al-star",
        description:
          "The aluminum-bodied sibling of the Safari. Same design and nib, but with a brushed metal finish that gives it a more premium feel and weight.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad", "Left-Handed"],
        fillingSystem: "Cartridge / Converter (Z28)",
        material: "Aluminum",
        knownPrices: [
          { retailer: "Amazon", price: 38.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 41.50, currency: "USD", url: "https://www.jetpens.com/Lamy-AL-Star-Fountain-Pen/ct/2278", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 42.00, currency: "USD", url: "https://www.gouletpens.com/collections/lamy-al-star", inStock: true, condition: "new" },
        ],
        msrp: 42,
        yearIntroduced: 2000,
      },
      {
        id: "lamy-2000",
        name: "2000",
        slug: "2000",
        description:
          "A design icon designed by Gerd A. Müller. Made from Makrolon polycarbonate with a brushed stainless steel hood. Features a unique piston filling system and a spring-loaded clip. Widely considered one of the best value luxury fountain pens.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad", "Double Broad"],
        fillingSystem: "Piston",
        material: "Makrolon polycarbonate",
        knownPrices: [
          { retailer: "Amazon", price: 179.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 199.00, currency: "USD", url: "https://www.jetpens.com/Lamy-2000-Fountain-Pen/ct/1329", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 199.00, currency: "USD", url: "https://www.gouletpens.com/collections/lamy-2000", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 189.95, currency: "USD", url: "https://www.goldspot.com/lamy/2000/", inStock: true, condition: "new" },
        ],
        msrp: 240,
        yearIntroduced: 1966,
      },
      {
        id: "lamy-studio",
        name: "Studio",
        slug: "studio",
        description:
          "A sleek, modern fountain pen with a polished steel nib and a distinctive asymmetrical clip. The barrel is available in various finishes including brushed stainless steel and colored lacquer.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter (Z28)",
        material: "Brushed stainless steel / Lacquer",
        knownPrices: [
          { retailer: "Amazon", price: 72.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 90.00, currency: "USD", url: "https://www.jetpens.com/Lamy-Studio-Fountain-Pen/ct/1330", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 89.00, currency: "USD", url: "https://www.gouletpens.com/collections/lamy-studio", inStock: true, condition: "new" },
        ],
        msrp: 95,
        yearIntroduced: 2003,
      },
      {
        id: "lamy-dialog-3",
        name: "Dialog 3",
        slug: "dialog-3",
        description:
          "A capless retractable fountain pen with a twist mechanism. The 14k gold nib retracts into the barrel when twisted. Features a platinum-coated body and is Lamy's flagship retractable pen.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter (Z28)",
        material: "Platinum-coated metal / Palladium",
        knownPrices: [
          { retailer: "Amazon", price: 249.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 298.00, currency: "USD", url: "https://www.gouletpens.com/collections/lamy-dialog", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 298.00, currency: "USD", url: "https://www.goldspot.com/lamy/dialog/", inStock: true, condition: "new" },
        ],
        msrp: 348,
        yearIntroduced: 2010,
      },
    ],
  },
  {
    id: "pilot",
    name: "Pilot",
    slug: "pilot",
    country: "Japan",
    description:
      "One of the world's largest pen manufacturers, Pilot produces everything from the affordable Metropolitan to the flagship Custom Urushi. Known for exceptional nib quality across all price points.",
    website: "https://www.pilotpen.com",
    models: [
      {
        id: "pilot-metropolitan",
        name: "Metropolitan (MR)",
        slug: "metropolitan",
        description:
          "The Metropolitan (known as MR in Europe) is arguably the best value fountain pen under $30. Brass barrel with lacquer finish gives it a weighty, premium feel. Uses Pilot's proprietary cartridges or CON-40 converter.",
        nibOptions: ["Fine", "Medium"],
        fillingSystem: "Cartridge / Converter (CON-40)",
        material: "Brass with lacquer finish",
        knownPrices: [
          { retailer: "Amazon", price: 24.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 28.50, currency: "USD", url: "https://www.jetpens.com/Pilot-Metropolitan-Fountain-Pen/ct/2193", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 28.80, currency: "USD", url: "https://www.gouletpens.com/collections/pilot-metropolitan", inStock: true, condition: "new" },
        ],
        msrp: 28.80,
        yearIntroduced: 2008,
      },
      {
        id: "pilot-vanishing-point",
        name: "Vanishing Point (Capless)",
        slug: "vanishing-point",
        description:
          "A retractable capless fountain pen — click the button and the nib emerges, ready to write. The 18k gold nib is one of the smoothest writing experiences available. The Decimo is a slimmer variant.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad", "Stub"],
        fillingSystem: "Cartridge / Converter (CON-40)",
        material: "Brass with lacquer or matte finish",
        knownPrices: [
          { retailer: "Amazon", price: 149.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 176.00, currency: "USD", url: "https://www.jetpens.com/Pilot-Capless-Fountain-Pen/ct/2265", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 176.00, currency: "USD", url: "https://www.gouletpens.com/collections/pilot-vanishing-point", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 168.00, currency: "USD", url: "https://www.goldspot.com/pilot/vanishing-point/", inStock: true, condition: "new" },
        ],
        msrp: 184,
        yearIntroduced: 1963,
      },
      {
        id: "pilot-custom-823",
        name: "Custom 823",
        slug: "custom-823",
        description:
          "A vacuum-filling flagship pen with a massive ink capacity. The #15 14k gold nib is renowned for its springiness and character. The translucent amber, smoke, or clear body shows the ink sloshing inside. Widely considered one of the best fountain pens ever made.",
        nibOptions: ["Extra Fine", "Fine", "Fine Medium", "Medium", "Broad"],
        fillingSystem: "Vacuum filler",
        material: "Acrylic resin",
        knownPrices: [
          { retailer: "Amazon", price: 289.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 336.00, currency: "USD", url: "https://www.jetpens.com/Pilot-Custom-823-Fountain-Pen/ct/11417", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 336.00, currency: "USD", url: "https://www.gouletpens.com/collections/pilot-custom-823", inStock: true, condition: "new" },
        ],
        msrp: 360,
        yearIntroduced: 2002,
      },
      {
        id: "pilot-custom-74",
        name: "Custom 74",
        slug: "custom-74",
        description:
          "The entry-level gold nib pen from Pilot's Custom line. Features a #5 14k gold nib and a comfortable cigar-shaped resin body. Excellent value for those wanting to try a gold nib without spending $300+.",
        nibOptions: ["Extra Fine", "Fine", "Fine Medium", "Medium", "Broad", "Soft Fine", "Soft Medium"],
        fillingSystem: "Cartridge / Converter (CON-70)",
        material: "Acrylic resin",
        knownPrices: [
          { retailer: "Amazon", price: 136.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 160.00, currency: "USD", url: "https://www.jetpens.com/Pilot-Custom-74-Fountain-Pen/ct/2264", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 160.00, currency: "USD", url: "https://www.gouletpens.com/collections/pilot-custom-74", inStock: true, condition: "new" },
        ],
        msrp: 184,
        yearIntroduced: 1995,
      },
      {
        id: "pilot-falcon",
        name: "Falcon (Elabo)",
        slug: "falcon",
        description:
          "A semi-flex fountain pen with a 14k gold nib that offers line variation with pressure. The soft nib gives an almost brush-like writing experience. Also known as the Pilot Elabo in Japan.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Soft Extra Fine", "Soft Fine", "Soft Medium"],
        fillingSystem: "Cartridge / Converter (CON-70)",
        material: "Acrylic resin",
        knownPrices: [
          { retailer: "Amazon", price: 135.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 152.00, currency: "USD", url: "https://www.jetpens.com/Pilot-Falcon-Fountain-Pen/ct/2266", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 152.00, currency: "USD", url: "https://www.gouletpens.com/collections/pilot-falcon", inStock: true, condition: "new" },
        ],
        msrp: 192,
        yearIntroduced: 1980,
      },
    ],
  },
  {
    id: "pelikan",
    name: "Pelikan",
    slug: "pelikan",
    country: "Germany",
    description:
      "Founded in 1838, Pelikan is one of the oldest pen manufacturers. Known for their piston-filling system and distinctive striped barrel designs. The Souverän series is their flagship line.",
    website: "https://www.pelikan.com",
    models: [
      {
        id: "pelikan-m200",
        name: "M200",
        slug: "m200",
        description:
          "Entry-level piston-filler in the Pelikan Souverän line. Features a steel nib with a small amount of spring, and the classic Pelikan striped barrel (in some colors). Smooth piston mechanism and excellent build quality.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Piston",
        material: "Acrylic resin / Steel nib",
        knownPrices: [
          { retailer: "Amazon", price: 119.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 145.00, currency: "USD", url: "https://www.jetpens.com/Pelikan-M200-Fountain-Pen/ct/1356", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 145.00, currency: "USD", url: "https://www.gouletpens.com/collections/pelikan-m200", inStock: true, condition: "new" },
        ],
        msrp: 170,
        yearIntroduced: 1985,
      },
      {
        id: "pelikan-m400",
        name: "M400",
        slug: "m400",
        description:
          "The entry-level gold nib Souverän. Features a 14k gold nib with the classic Pelikan 'waffle' pattern. Traditional green-striped or black barrel. Smaller size suitable for most hands.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Piston",
        material: "Acrylic resin / 14k gold nib",
        knownPrices: [
          { retailer: "Amazon", price: 299.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 375.00, currency: "USD", url: "https://www.jetpens.com/Pelikan-M400-Fountain-Pen/ct/1358", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 375.00, currency: "USD", url: "https://www.gouletpens.com/collections/pelikan-m400", inStock: true, condition: "new" },
        ],
        msrp: 460,
        yearIntroduced: 1985,
      },
      {
        id: "pelikan-m800",
        name: "M800",
        slug: "m800",
        description:
          "The flagship Souverän model. Large size with a massive #18 18k gold nib. Brass piston mechanism gives it a weighty feel. Arguably the most famous Pelikan model, with the classic green striped barrel.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad", "Double Broad", "Triple Broad"],
        fillingSystem: "Piston",
        material: "Acrylic resin / 18k gold nib / Brass piston",
        knownPrices: [
          { retailer: "Amazon", price: 499.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 680.00, currency: "USD", url: "https://www.jetpens.com/Pelikan-M800-Fountain-Pen/ct/1361", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 680.00, currency: "USD", url: "https://www.gouletpens.com/collections/pelikan-m800", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 659.00, currency: "USD", url: "https://www.goldspot.com/pelikan/m800/", inStock: true, condition: "new" },
        ],
        msrp: 795,
        yearIntroduced: 1987,
      },
      {
        id: "pelikan-m1000",
        name: "M1000",
        slug: "m1000",
        description:
          "Pelikan's largest production fountain pen. Features a huge #30 18k gold nib that is famously soft and bouncy. Oversized barrel with the classic striped design. For those who want maximum size and flex.",
        nibOptions: ["Fine", "Medium", "Broad", "Double Broad", "Triple Broad"],
        fillingSystem: "Piston",
        material: "Acrylic resin / 18k gold nib / Brass piston",
        knownPrices: [
          { retailer: "Amazon", price: 699.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 875.00, currency: "USD", url: "https://www.gouletpens.com/collections/pelikan-m1000", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 849.00, currency: "USD", url: "https://www.goldspot.com/pelikan/m1000/", inStock: true, condition: "new" },
        ],
        msrp: 975,
        yearIntroduced: 1997,
      },
    ],
  },
  {
    id: "montblanc",
    name: "Montblanc",
    slug: "montblanc",
    country: "Germany",
    description:
      "The most recognized luxury pen brand in the world. Since 1906, Montblanc has represented the pinnacle of writing instrument craftsmanship, with the iconic white star symbolizing the snowcap of Mont Blanc.",
    website: "https://www.montblanc.com",
    models: [
      {
        id: "montblanc-146",
        name: "Meisterstück 146 (Le Grand)",
        slug: "146",
        description:
          "The Le Grand size of the iconic Meisterstück line. A piston-filler with a 14k gold nib. The perfect balance of size and portability. The quintessential luxury fountain pen.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad", "Double Broad", "Oblique"],
        fillingSystem: "Piston",
        material: "Precious resin",
        knownPrices: [
          { retailer: "Amazon", price: 599.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 830.00, currency: "USD", url: "https://www.goldspot.com/montblanc/meisterstuck/", inStock: true, condition: "new" },
          { retailer: "Appelboom Pennen", price: 745.00, currency: "USD", url: "https://www.appelboompennen.com/", inStock: true, condition: "new" },
        ],
        msrp: 875,
        yearIntroduced: 1952,
      },
      {
        id: "montblanc-149",
        name: "Meisterstück 149",
        slug: "149",
        description:
          "The flagship oversized Meisterstück. The #9 18k gold nib is massive and iconic. A symbol of status and craftsmanship. The definitive luxury fountain pen that needs no introduction.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad", "Double Broad", "Oblique"],
        fillingSystem: "Piston",
        material: "Precious resin / 18k gold nib",
        knownPrices: [
          { retailer: "Amazon", price: 699.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 945.00, currency: "USD", url: "https://www.goldspot.com/montblanc/149/", inStock: true, condition: "new" },
          { retailer: "Appelboom Pennen", price: 855.00, currency: "USD", url: "https://www.appelboompennen.com/", inStock: true, condition: "new" },
        ],
        msrp: 995,
        yearIntroduced: 1952,
      },
      {
        id: "montblanc-starwalker",
        name: "StarWalker",
        slug: "starwalker",
        description:
          "A modern, sleek design with a floating Montblanc star in the cap top. Metal body with rubberized grip section. Cartridge/converter filling. A contemporary alternative to the classic Meisterstück.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Metal / Lacquer",
        knownPrices: [
          { retailer: "Amazon", price: 449.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 580.00, currency: "USD", url: "https://www.goldspot.com/montblanc/starwalker/", inStock: true, condition: "new" },
        ],
        msrp: 645,
        yearIntroduced: 2000,
      },
    ],
  },
  {
    id: "sailor",
    name: "Sailor",
    slug: "sailor",
    country: "Japan",
    description:
      "Known for their exceptionally smooth and feedback-rich gold nibs. Sailor uses proprietary 21k gold nibs on their higher-end models. Their nib grinding is considered among the best in the world.",
    website: "https://www.sailorpen.com",
    models: [
      {
        id: "sailor-1911",
        name: "Profit (1911S)",
        slug: "1911",
        description:
          "The classic cigar-shaped Sailor. The 1911S (Standard) features a 14k gold nib, while the 1911L (Large) has a 21k gold nib. Known for the distinctive 'Sailor feedback' — a pleasant pencil-like feel.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad", "Zoom", "Music", "Saver Extra Fine"],
        fillingSystem: "Cartridge / Converter",
        material: "Acrylic resin",
        knownPrices: [
          { retailer: "Amazon", price: 155.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 184.00, currency: "USD", url: "https://www.jetpens.com/Sailor-1911S-Fountain-Pen/ct/1291", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 184.00, currency: "USD", url: "https://www.gouletpens.com/collections/sailor-1911s", inStock: true, condition: "new" },
        ],
        msrp: 220,
        yearIntroduced: 1990,
      },
      {
        id: "sailor-pro-gear",
        name: "Pro Gear (1911L)",
        slug: "pro-gear",
        description:
          "The flat-top counterpart to the 1911. The Pro Gear has a distinctive flat cap and barrel end. Available in Standard (14k) and Large (21k) sizes. The 21k nib is famous for its bouncy feel and precision feedback.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad", "Zoom", "Music", "Naginata Togi"],
        fillingSystem: "Cartridge / Converter",
        material: "Acrylic resin",
        knownPrices: [
          { retailer: "Amazon", price: 246.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 310.00, currency: "USD", url: "https://www.jetpens.com/Sailor-Pro-Gear-Fountain-Pen/ct/1293", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 310.00, currency: "USD", url: "https://www.gouletpens.com/collections/sailor-pro-gear", inStock: true, condition: "new" },
        ],
        msrp: 360,
        yearIntroduced: 1995,
      },
      {
        id: "sailor-king-of-pens",
        name: "King of Pens",
        slug: "king-of-pens",
        description:
          "Sailor's oversized flagship. A massive pen with an enormous 21k gold nib that is one of the largest production nibs available. Ebonite feed for maximum ink flow. The ultimate Sailor writing experience.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad", "King Eagle"],
        fillingSystem: "Cartridge / Converter",
        material: "Acrylic resin / Ebonite feed",
        knownPrices: [
          { retailer: "Amazon", price: 699.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 888.00, currency: "USD", url: "https://www.jetpens.com/Sailor-King-of-Pens-Fountain-Pen/ct/20046", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 850.00, currency: "USD", url: "https://www.goldspot.com/sailor/king-of-pens/", inStock: true, condition: "new" },
        ],
        msrp: 950,
        yearIntroduced: 2000,
      },
    ],
  },
  {
    id: "twsbi",
    name: "TWSBI",
    slug: "twsbi",
    country: "Taiwan",
    description:
      "Taiwanese brand known for high-quality, affordable piston and vacuum-filling pens with demonstrator (transparent) barrels. Excellent value and innovative filling systems at accessible prices.",
    website: "https://www.twsbi.com",
    models: [
      {
        id: "twsbi-eco",
        name: "ECO",
        slug: "eco",
        description:
          "TWSBI's best-selling model. An affordable piston-filler with a massive ink capacity. The transparent demonstrator body shows the mechanism and ink sloshing inside. Best value piston-filler on the market.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad", "Stub 1.1"],
        fillingSystem: "Piston",
        material: "Acrylic resin",
        knownPrices: [
          { retailer: "Amazon", price: 31.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 34.00, currency: "USD", url: "https://www.jetpens.com/TWSBI-ECO-Fountain-Pen/ct/2166", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 35.00, currency: "USD", url: "https://www.gouletpens.com/collections/twsbi-eco", inStock: true, condition: "new" },
        ],
        msrp: 35,
        yearIntroduced: 2015,
      },
      {
        id: "twsbi-diamond-580",
        name: "Diamond 580",
        slug: "diamond-580",
        description:
          "A step up from the ECO with a faceted barrel design, removable nib unit for easy swapping, and a precision piston mechanism. Available in clear and various colored editions.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad", "Stub 1.1"],
        fillingSystem: "Piston",
        material: "Acrylic resin",
        knownPrices: [
          { retailer: "Amazon", price: 54.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 62.50, currency: "USD", url: "https://www.jetpens.com/TWSBI-Diamond-580-Fountain-Pen/ct/2167", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 62.50, currency: "USD", url: "https://www.gouletpens.com/collections/twsbi-diamond-580", inStock: true, condition: "new" },
        ],
        msrp: 65,
        yearIntroduced: 2012,
      },
      {
        id: "twsbi-vac-700r",
        name: "Vac 700R",
        slug: "vac-700r",
        description:
          "A vacuum-filling pen with a massive ink capacity. The valve at the back seals the ink chamber for travel. Huge #6 nib. One of the best value large-capacity pens on the market.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad", "Stub 1.1"],
        fillingSystem: "Vacuum filler",
        material: "Acrylic resin",
        knownPrices: [
          { retailer: "Amazon", price: 62.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 75.00, currency: "USD", url: "https://www.jetpens.com/TWSBI-Vac-700R-Fountain-Pen/ct/9978", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 75.00, currency: "USD", url: "https://www.gouletpens.com/collections/twsbi-vac-700r", inStock: true, condition: "new" },
        ],
        msrp: 80,
        yearIntroduced: 2015,
      },
    ],
  },
  {
    id: "platinum",
    name: "Platinum",
    slug: "platinum",
    country: "Japan",
    description:
      "Japanese pen manufacturer known for their Slip & Seal cap mechanism that prevents ink from drying out for months. The 3776 Century is their flagship model, featuring an excellent 14k gold nib.",
    website: "https://www.platinum-pen.com",
    models: [
      {
        id: "platinum-preppy",
        name: "Preppy",
        slug: "preppy",
        description:
          "The cheapest reliable fountain pen on the market. Under $8 and writes better than many pens costing ten times as much. Can be eyedropper-converted for massive ink capacity. The gateway pen for millions.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter (or eyedropper)",
        material: "Polypropylene",
        knownPrices: [
          { retailer: "Amazon", price: 6.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 7.50, currency: "USD", url: "https://www.jetpens.com/Platinum-Preppy-Fountain-Pen/ct/1762", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 7.00, currency: "USD", url: "https://www.gouletpens.com/collections/platinum-preppy", inStock: true, condition: "new" },
        ],
        msrp: 7.50,
        yearIntroduced: 2005,
      },
      {
        id: "platinum-3776",
        name: "3776 Century",
        slug: "3776",
        description:
          "Platinum's flagship model. Named after the height of Mount Fuji (3,776m). Features a 14k gold nib with Platinum's proprietary Slip & Seal cap that prevents drying for up to 24 months. Excellent nib with pleasant feedback.",
        nibOptions: ["Ultra Extra Fine", "Extra Fine", "Fine", "Medium", "Broad", "Coarse", "Music", "Soft Fine"],
        fillingSystem: "Cartridge / Converter",
        material: "Acrylic resin",
        knownPrices: [
          { retailer: "Amazon", price: 149.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 182.00, currency: "USD", url: "https://www.jetpens.com/Platinum-3776-Century-Fountain-Pen/ct/2306", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 182.00, currency: "USD", url: "https://www.gouletpens.com/collections/platinum-3776", inStock: true, condition: "new" },
        ],
        msrp: 216,
        yearIntroduced: 2012,
      },
    ],
  },
  {
    id: "kaweco",
    name: "Kaweco",
    slug: "kaweco",
    country: "Germany",
    description:
      "German brand famous for their octagonal, minimalist designs. The Sport model is iconic — a pocket pen that posts to full length. Originally founded in 1883, revived in the 1990s.",
    website: "https://www.kaweco-pen.com",
    models: [
      {
        id: "kaweco-sport",
        name: "Sport (Classic / AL / AC)",
        slug: "sport",
        description:
          "The iconic octagonal pocket pen. Short when capped, but posts to a comfortable full length. Available in ABS plastic (Classic), aluminum (AL), or carbon fiber (AC). Uses standard short international cartridges.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad", "Double Broad"],
        fillingSystem: "Cartridge (short international)",
        material: "ABS plastic / Aluminum / Carbon fiber",
        knownPrices: [
          { retailer: "Amazon", price: 24.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 25.00, currency: "USD", url: "https://www.jetpens.com/Kaweco-Sport-Fountain-Pen/ct/2291", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 25.00, currency: "USD", url: "https://www.gouletpens.com/collections/kaweco-sport", inStock: true, condition: "new" },
        ],
        msrp: 28,
        yearIntroduced: 1911,
      },
      {
        id: "kaweco-liliput",
        name: "Liliput",
        slug: "liliput",
        description:
          "An ultra-compact pocket pen made from a single piece of metal (aluminum, brass, copper, or steel). One of the smallest fountain pens in production. Develops a beautiful patina over time.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge (short international)",
        material: "Aluminum / Brass / Copper / Steel",
        knownPrices: [
          { retailer: "Amazon", price: 44.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 65.00, currency: "USD", url: "https://www.jetpens.com/Kaweco-Liliput-Fountain-Pen/ct/7890", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 65.00, currency: "USD", url: "https://www.gouletpens.com/collections/kaweco-liliput", inStock: true, condition: "new" },
        ],
        msrp: 68,
        yearIntroduced: 2010,
      },
      {
        id: "kaweco-dia2",
        name: "Dia 2",
        slug: "dia-2",
        description:
          "A classic gold nib pen in Kaweco's lineup. Elegant, traditional design with a gold-plated nib and clip. Cartridge/converter filler inspired by Kaweco's 1930s models.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Acrylic resin / Gold-plated trim",
        knownPrices: [
          { retailer: "Amazon", price: 99.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 130.00, currency: "USD", url: "https://www.jetpens.com/Kaweco-Dia-2-Fountain-Pen/ct/18071", inStock: true, condition: "new" },
        ],
        msrp: 140,
        yearIntroduced: 2015,
      },
    ],
  },
  {
    id: "faber-castell",
    name: "Faber-Castell",
    slug: "faber-castell",
    country: "Germany",
    description:
      "One of the world's oldest companies (founded 1761). Known for exceptional steel nibs that many consider the best steel nibs on the market — smooth, with a hint of feedback and excellent flow.",
    website: "https://www.faber-castell.com",
    models: [
      {
        id: "faber-castell-loom",
        name: "Loom",
        slug: "loom",
        description:
          "A steel-nibbed pen with what many consider the best steel nib on the market. The barrel is thick, comfortable, and available in multiple metallic finishes. Exceptional value for the nib quality alone.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Metal / Lacquer",
        knownPrices: [
          { retailer: "Amazon", price: 44.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 54.00, currency: "USD", url: "https://www.gouletpens.com/collections/faber-castell-loom", inStock: true, condition: "new" },
        ],
        msrp: 58,
        yearIntroduced: 2012,
      },
      {
        id: "faber-castell-ambition",
        name: "Ambition",
        slug: "ambition",
        description:
          "A sleek, minimalist fountain pen with a unique cap that posts deeply on the barrel. Very short when capped, but transforms when posted. Distinctive snap cap and excellent Faber-Castell steel nib.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Wood / Metal / Resin",
        knownPrices: [
          { retailer: "Amazon", price: 74.99, currency: "USD", url: "", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 92.00, currency: "USD", url: "https://www.gouletpens.com/collections/faber-castell-ambition", inStock: true, condition: "new" },
        ],
        msrp: 98,
        yearIntroduced: 2010,
      },
    ],
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export function getModelBySlug(brandSlug: string, modelSlug: string): Model | undefined {
  const brand = getBrandBySlug(brandSlug);
  return brand?.models.find((m) => m.slug === modelSlug);
}

export function getLowestPrice(model: Model): number | null {
  if (model.knownPrices.length === 0) return null;
  return Math.min(...model.knownPrices.map((p) => p.price));
}

export function getPriceRange(model: Model): { min: number; max: number } | null {
  if (model.knownPrices.length === 0) return null;
  const prices = model.knownPrices.map((p) => p.price);
  return { min: Math.min(...prices), max: Math.max(...prices) };
}