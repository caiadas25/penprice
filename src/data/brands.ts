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
  msrpUrl?: string;
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
          { retailer: "Amazon", price: 29.99, currency: "USD", url: "https://www.amazon.com/s?k=Lamy+Safari+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 30.00, currency: "USD", url: "https://www.jetpens.com/Lamy-Safari-Fountain-Pen/ct/1327", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 30.00, currency: "USD", url: "https://www.gouletpens.com/collections/lamy-safari", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 29.95, currency: "USD", url: "https://www.goldspot.com/lamy/safari/", inStock: true, condition: "new" },
        ],
        msrp: 30,
        msrpUrl: "https://www.lamy.com/en/lamy-safari/",
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
          { retailer: "Amazon", price: 38.99, currency: "USD", url: "https://www.amazon.com/s?k=lamy+AL-Star+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 41.50, currency: "USD", url: "https://www.jetpens.com/Lamy-AL-Star-Fountain-Pen/ct/2278", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 42.00, currency: "USD", url: "https://www.gouletpens.com/collections/lamy-al-star", inStock: true, condition: "new" },
        ],
        msrp: 42,
        msrpUrl: "https://www.lamy.com/en/lamy-al-star/",
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
          { retailer: "Amazon", price: 179.99, currency: "USD", url: "https://www.amazon.com/s?k=lamy+2000+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 199.00, currency: "USD", url: "https://www.jetpens.com/Lamy-2000-Fountain-Pen/ct/1329", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 199.00, currency: "USD", url: "https://www.gouletpens.com/collections/lamy-2000", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 189.95, currency: "USD", url: "https://www.goldspot.com/lamy/2000/", inStock: true, condition: "new" },
        ],
        msrp: 240,
        msrpUrl: "https://www.lamy.com/en/lamy-2000/",
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
          { retailer: "Amazon", price: 72.99, currency: "USD", url: "https://www.amazon.com/s?k=lamy+Studio+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 90.00, currency: "USD", url: "https://www.jetpens.com/Lamy-Studio-Fountain-Pen/ct/1330", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 89.00, currency: "USD", url: "https://www.gouletpens.com/collections/lamy-studio", inStock: true, condition: "new" },
        ],
        msrp: 95,
        msrpUrl: "https://www.lamy.com/en/lamy-studio/",
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
          { retailer: "Amazon", price: 249.99, currency: "USD", url: "https://www.amazon.com/s?k=lamy+Dialog+3+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 298.00, currency: "USD", url: "https://www.gouletpens.com/collections/lamy-dialog", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 298.00, currency: "USD", url: "https://www.goldspot.com/lamy/dialog/", inStock: true, condition: "new" },
        ],
        msrp: 348,
        msrpUrl: "https://www.lamy.com/en/lamy-dialog/",
        yearIntroduced: 2010,
      },
      {
        id: "lamy-aion",
        name: "Aion",
        slug: "aion",
        description:
          "A modern, minimalist fountain pen with a sleek aluminum body and a distinctive spring-loaded clip. The Aion bridges the gap between the Safari and the 2000 with a refined design and smooth steel nib.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter (Z28)",
        material: "Anodized aluminum",
        knownPrices: [
          { retailer: "Amazon", price: 67.00, currency: "USD", url: "https://www.amazon.com/s?k=Lamy+Aion+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 70.00, currency: "USD", url: "https://www.jetpens.com/Lamy-Aion-Fountain-Pen/ct/15289", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 72.00, currency: "USD", url: "https://www.gouletpens.com/collections/lamy-aion", inStock: true, condition: "new" },
        ],
        msrp: 72,
        msrpUrl: "https://www.lamy.com/en/lamy-aion/",
        yearIntroduced: 2017,
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
          { retailer: "Amazon", price: 24.99, currency: "USD", url: "https://www.amazon.com/s?k=lamy+Metropolitan+(MR)+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 28.50, currency: "USD", url: "https://www.jetpens.com/Pilot-Metropolitan-Fountain-Pen/ct/2193", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 28.80, currency: "USD", url: "https://www.gouletpens.com/collections/pilot-metropolitan", inStock: true, condition: "new" },
        ],
        msrp: 28.80,
        msrpUrl: "https://www.pilotpen.com/metropolitan/",
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
          { retailer: "Amazon", price: 149.99, currency: "USD", url: "https://www.amazon.com/s?k=pilot+Vanishing+Point+(Capless)+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 176.00, currency: "USD", url: "https://www.jetpens.com/Pilot-Capless-Fountain-Pen/ct/2265", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 176.00, currency: "USD", url: "https://www.gouletpens.com/collections/pilot-vanishing-point", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 168.00, currency: "USD", url: "https://www.goldspot.com/pilot/vanishing-point/", inStock: true, condition: "new" },
        ],
        msrp: 184,
        msrpUrl: "https://www.pilotpen.com/vanishing-point/",
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
          { retailer: "Amazon", price: 289.99, currency: "USD", url: "https://www.amazon.com/s?k=pilot+Custom+823+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 336.00, currency: "USD", url: "https://www.jetpens.com/Pilot-Custom-823-Fountain-Pen/ct/11417", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 336.00, currency: "USD", url: "https://www.gouletpens.com/collections/pilot-custom-823", inStock: true, condition: "new" },
        ],
        msrp: 360,
        msrpUrl: "https://www.pilotpen.com/custom-823/",
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
          { retailer: "Amazon", price: 136.99, currency: "USD", url: "https://www.amazon.com/s?k=pilot+Custom+74+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 160.00, currency: "USD", url: "https://www.jetpens.com/Pilot-Custom-74-Fountain-Pen/ct/2264", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 160.00, currency: "USD", url: "https://www.gouletpens.com/collections/pilot-custom-74", inStock: true, condition: "new" },
        ],
        msrp: 184,
        msrpUrl: "https://www.pilotpen.com/custom-74/",
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
          { retailer: "Amazon", price: 135.99, currency: "USD", url: "https://www.amazon.com/s?k=pilot+Falcon+(Elabo)+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 152.00, currency: "USD", url: "https://www.jetpens.com/Pilot-Falcon-Fountain-Pen/ct/2266", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 152.00, currency: "USD", url: "https://www.gouletpens.com/collections/pilot-falcon", inStock: true, condition: "new" },
        ],
        msrp: 192,
        msrpUrl: "https://www.pilotpen.com/falcon/",
        yearIntroduced: 1980,
      },
      {
        id: "pilot-kakuno",
        name: "Kakuno",
        slug: "kakuno",
        description:
          "A playful, hexagonal-barreled pen with a smiley-face nib engraving. The Kakuno is Pilot's most popular beginner pen worldwide. The fine nib is excellent for everyday writing, and the transparent demonstrator version lets you see ink levels.",
        nibOptions: ["Extra Fine", "Fine", "Medium"],
        fillingSystem: "Cartridge / Converter (CON-40)",
        material: "ABS plastic",
        knownPrices: [
          { retailer: "Amazon", price: 12.99, currency: "USD", url: "https://www.amazon.com/s?k=Pilot+Kakuno+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 14.50, currency: "USD", url: "https://www.jetpens.com/Pilot-Kakuno-Fountain-Pen/ct/5380", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 13.00, currency: "USD", url: "https://www.gouletpens.com/collections/pilot-kakuno", inStock: true, condition: "new" },
        ],
        msrp: 15,
        yearIntroduced: 2012,
      },
      {
        id: "pilot-parallel",
        name: "Parallel",
        slug: "parallel",
        description:
          "A unique calligraphy pen with two flat plates that create a wide, flat line. Available in 1.5mm, 2.4mm, 3.8mm, and 6.0mm widths. Invaluable for calligraphers, lettering artists, and illustrators who want dramatic thick-thin variation.",
        nibOptions: ["1.5mm", "2.4mm", "3.8mm", "6.0mm"],
        fillingSystem: "Cartridge / Converter",
        material: "Plastic",
        knownPrices: [
          { retailer: "Amazon", price: 24.00, currency: "USD", url: "https://www.amazon.com/s?k=Pilot+Parallel+calligraphy+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 26.00, currency: "USD", url: "https://www.jetpens.com/Pilot-Parallel-Pen/ct/4855", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 26.00, currency: "USD", url: "https://www.gouletpens.com/collections/pilot-parallel", inStock: true, condition: "new" },
        ],
        msrp: 30,
        yearIntroduced: 2004,
      },
      {
        id: "pilot-e95s",
        name: "E95S",
        slug: "e95s",
        description:
          "A compact, pocket-sized fountain pen with a 14k gold inlaid nib. Designed for everyday carry, the E95S features a sleek, minimalist design and a smooth, springy nib that punches above its weight class.",
        nibOptions: ["Fine", "Medium"],
        fillingSystem: "Cartridge / Converter (CON-40)",
        material: "Brass with lacquer finish",
        knownPrices: [
          { retailer: "Amazon", price: 72.00, currency: "USD", url: "https://www.amazon.com/s?k=Pilot+E95S+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 75.00, currency: "USD", url: "https://www.jetpens.com/Pilot-E95S-Fountain-Pen/ct/12613", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 75.00, currency: "USD", url: "https://www.gouletpens.com/collections/pilot-e95s", inStock: true, condition: "new" },
        ],
        msrp: 75,
        yearIntroduced: 1972,
      },
      {
        id: "pilot-prera",
        name: "Prera",
        slug: "prera",
        description:
          "A compact, pocket-sized fountain pen with a smooth steel nib and a snap cap. The Prera is often called the best pocket pen under $50. Available in vibrant translucent colors with a satisfying click closure.",
        nibOptions: ["Fine", "Medium"],
        fillingSystem: "Cartridge / Converter (CON-40)",
        material: "Acrylic resin",
        knownPrices: [
          { retailer: "Amazon", price: 35.99, currency: "USD", url: "https://www.amazon.com/s?k=Pilot+Prera+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 42.00, currency: "USD", url: "https://www.jetpens.com/Pilot-Prera-Fountain-Pen/ct/2202", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 42.00, currency: "USD", url: "https://www.gouletpens.com/collections/pilot-prera", inStock: true, condition: "new" },
        ],
        msrp: 45,
        yearIntroduced: 2007,
      },
      {
        id: "pilot-custom-743",
        name: "Custom 743",
        slug: "custom-743",
        description:
          "A large, cigar-shaped fountain pen with the #15 14k gold nib — the same size nib as the Custom 823 but with a cartridge/converter filling system. Popular among writers who want Pilot's flagship nib quality without the vacuum filler complexity.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad", "PO (Posting)", "FA (Falcon)", "WA (Waverly)", "C (Coarse)"],
        fillingSystem: "Cartridge / Converter (CON-70)",
        material: "Acrylic resin",
        knownPrices: [
          { retailer: "Amazon", price: 199.99, currency: "USD", url: "https://www.amazon.com/s?k=Pilot+Custom+743+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 276.00, currency: "USD", url: "https://www.jetpens.com/search?q=Pilot+Custom+743", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 276.00, currency: "USD", url: "https://www.gouletpens.com/search?q=pilot+custom+743", inStock: true, condition: "new" },
        ],
        msrp: 276,
        yearIntroduced: 2000,
      },
      {
        id: "pilot-capless-decimo",
        name: "Capless Decimo",
        slug: "capless-decimo",
        description:
          "A slimmer, lighter version of the Pilot Vanishing Point (Capless). The Decimo is ideal for those who find the standard Capless too thick. Same retractable click mechanism and 18k gold nib, but in a more pocket-friendly profile.",
        nibOptions: ["Extra Fine", "Fine", "Medium"],
        fillingSystem: "Cartridge / Converter (CON-40)",
        material: "Brass with lacquer finish",
        knownPrices: [
          { retailer: "Amazon", price: 139.99, currency: "USD", url: "https://www.amazon.com/s?k=Pilot+Capless+Decimo+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 164.00, currency: "USD", url: "https://www.jetpens.com/search?q=Pilot+Capless+Decimo", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 164.00, currency: "USD", url: "https://www.gouletpens.com/search?q=pilot+capless+decimo", inStock: true, condition: "new" },
        ],
        msrp: 184,
        yearIntroduced: 2009,
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
          { retailer: "Amazon", price: 119.99, currency: "USD", url: "https://www.amazon.com/s?k=pilot+M200+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 145.00, currency: "USD", url: "https://www.jetpens.com/Pelikan-M200-Fountain-Pen/ct/1356", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 145.00, currency: "USD", url: "https://www.gouletpens.com/collections/pelikan-m200", inStock: true, condition: "new" },
        ],
        msrp: 170,
        msrpUrl: "https://www.pelikan.com/m200/",
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
          { retailer: "Amazon", price: 299.99, currency: "USD", url: "https://www.amazon.com/s?k=pilot+M400+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 375.00, currency: "USD", url: "https://www.jetpens.com/Pelikan-M400-Fountain-Pen/ct/1358", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 375.00, currency: "USD", url: "https://www.gouletpens.com/collections/pelikan-m400", inStock: true, condition: "new" },
        ],
        msrp: 460,
        msrpUrl: "https://www.pelikan.com/m400/",
        yearIntroduced: 1985,
      },
      {
        id: "pelikan-m600",
        name: "M600",
        slug: "m600",
        description:
          "The mid-size gold nib Souverän, sitting between the compact M400 and the large M800. Features a 14k gold nib with the classic Pelikan striped barrel. A popular choice for those who want a gold nib pen that's substantial but not oversized.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad", "Double Broad"],
        fillingSystem: "Piston",
        material: "Acrylic resin / 14k gold nib",
        knownPrices: [
          { retailer: "Amazon", price: 379.99, currency: "USD", url: "https://www.amazon.com/s?k=Pelikan+M600+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 420.00, currency: "USD", url: "https://www.jetpens.com/search?q=pelikan+m600", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 420.00, currency: "USD", url: "https://www.gouletpens.com/search?q=pelikan+m600", inStock: true, condition: "new" },
        ],
        msrp: 460,
        yearIntroduced: 2015,
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
          { retailer: "Amazon", price: 499.99, currency: "USD", url: "https://www.amazon.com/s?k=pilot+M800+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 680.00, currency: "USD", url: "https://www.jetpens.com/Pelikan-M800-Fountain-Pen/ct/1361", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 680.00, currency: "USD", url: "https://www.gouletpens.com/collections/pelikan-m800", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 659.00, currency: "USD", url: "https://www.goldspot.com/pelikan/m800/", inStock: true, condition: "new" },
        ],
        msrp: 795,
        msrpUrl: "https://www.pelikan.com/m800/",
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
          { retailer: "Amazon", price: 699.99, currency: "USD", url: "https://www.amazon.com/s?k=pilot+M1000+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 875.00, currency: "USD", url: "https://www.gouletpens.com/collections/pelikan-m1000", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 849.00, currency: "USD", url: "https://www.goldspot.com/pelikan/m1000/", inStock: true, condition: "new" },
        ],
        msrp: 975,
        msrpUrl: "https://www.pelikan.com/m1000/",
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
          { retailer: "Amazon", price: 599.99, currency: "USD", url: "https://www.amazon.com/s?k=pilot+Meisterstück+146+(Le+Grand)+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 830.00, currency: "USD", url: "https://www.goldspot.com/montblanc/meisterstuck/", inStock: true, condition: "new" },
          { retailer: "Appelboom Pennen", price: 745.00, currency: "USD", url: "https://www.appelboompennen.com/", inStock: true, condition: "new" },
        ],
        msrp: 875,
        msrpUrl: "https://www.montblanc.com/meisterstuck-146/",
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
          { retailer: "Amazon", price: 699.99, currency: "USD", url: "https://www.amazon.com/s?k=pilot+Meisterstück+149+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 945.00, currency: "USD", url: "https://www.goldspot.com/montblanc/149/", inStock: true, condition: "new" },
          { retailer: "Appelboom Pennen", price: 855.00, currency: "USD", url: "https://www.appelboompennen.com/", inStock: true, condition: "new" },
        ],
        msrp: 995,
        msrpUrl: "https://www.montblanc.com/meisterstuck-149/",
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
          { retailer: "Amazon", price: 449.99, currency: "USD", url: "https://www.amazon.com/s?k=pilot+StarWalker+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 580.00, currency: "USD", url: "https://www.goldspot.com/montblanc/starwalker/", inStock: true, condition: "new" },
        ],
        msrp: 645,
        msrpUrl: "https://www.montblanc.com/starwalker/",
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
          { retailer: "Amazon", price: 155.99, currency: "USD", url: "https://www.amazon.com/s?k=pilot+Profit+(1911S)+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 184.00, currency: "USD", url: "https://www.jetpens.com/Sailor-1911S-Fountain-Pen/ct/1291", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 184.00, currency: "USD", url: "https://www.gouletpens.com/collections/sailor-1911s", inStock: true, condition: "new" },
        ],
        msrp: 220,
        msrpUrl: "https://www.sailorpen.com/1911/",
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
          { retailer: "Amazon", price: 246.99, currency: "USD", url: "https://www.amazon.com/s?k=sailor+Pro+Gear+(1911L)+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 310.00, currency: "USD", url: "https://www.jetpens.com/Sailor-Pro-Gear-Fountain-Pen/ct/1293", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 310.00, currency: "USD", url: "https://www.gouletpens.com/collections/sailor-pro-gear", inStock: true, condition: "new" },
        ],
        msrp: 360,
        msrpUrl: "https://www.sailorpen.com/pro-gear/",
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
          { retailer: "Amazon", price: 699.99, currency: "USD", url: "https://www.amazon.com/s?k=sailor+King+of+Pens+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 888.00, currency: "USD", url: "https://www.jetpens.com/Sailor-King-of-Pens-Fountain-Pen/ct/20046", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 850.00, currency: "USD", url: "https://www.goldspot.com/sailor/king-of-pens/", inStock: true, condition: "new" },
        ],
        msrp: 950,
        msrpUrl: "https://www.sailorpen.com/king-of-pens/",
        yearIntroduced: 2000,
      },
      {
        id: "sailor-pro-color",
        name: "Pro Color",
        slug: "pro-color",
        description:
          "Sailor's entry-level steel nib pen. The Pro Color delivers Sailor's signature feedback at a student-friendly price. The Fine nib writes a thin, fast-drying line ideal for note-taking. Durable body available in fun colors.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "ABS plastic",
        knownPrices: [
          { retailer: "Amazon", price: 25.00, currency: "USD", url: "https://www.amazon.com/s?k=sailor+Pro+Color+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 28.00, currency: "USD", url: "https://www.jetpens.com/Sailor-Pro-Color-Fountain-Pen/ct/1295", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 28.00, currency: "USD", url: "https://www.gouletpens.com/collections/sailor-pro-color", inStock: true, condition: "new" },
        ],
        msrp: 30,
        msrpUrl: "https://www.sailorpen.com/pro-color/",
        yearIntroduced: 2010,
      },
      {
        id: "sailor-shikiori",
        name: "Shikiori (Pro Gear Slim)",
        slug: "shikiori",
        description:
          "A slim-profile Pro Gear with a 14k gold nib, available in beautiful seasonal colorways inspired by Japanese nature. The Shikiori line features unique colors released in limited runs. Excellent feedback and a smooth writer.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Acrylic resin / 14k gold nib",
        knownPrices: [
          { retailer: "Amazon", price: 175.00, currency: "USD", url: "https://www.amazon.com/s?k=Sailor+Shikiori+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 216.00, currency: "USD", url: "https://www.jetpens.com/Sailor-Shikiori-Pro-Gear-Slim-Fountain-Pen/ct/16640", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 216.00, currency: "USD", url: "https://www.gouletpens.com/collections/sailor-pro-gear-slim", inStock: true, condition: "new" },
        ],
        msrp: 250,
        yearIntroduced: 2018,
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
          { retailer: "Amazon", price: 31.99, currency: "USD", url: "https://www.amazon.com/s?k=sailor+ECO+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 34.00, currency: "USD", url: "https://www.jetpens.com/TWSBI-ECO-Fountain-Pen/ct/2166", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 35.00, currency: "USD", url: "https://www.gouletpens.com/collections/twsbi-eco", inStock: true, condition: "new" },
        ],
        msrp: 35,
        msrpUrl: "https://www.twsbi.com/eco/",
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
          { retailer: "Amazon", price: 54.99, currency: "USD", url: "https://www.amazon.com/s?k=twsbi+Diamond+580+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 62.50, currency: "USD", url: "https://www.jetpens.com/TWSBI-Diamond-580-Fountain-Pen/ct/2167", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 62.50, currency: "USD", url: "https://www.gouletpens.com/collections/twsbi-diamond-580", inStock: true, condition: "new" },
        ],
        msrp: 65,
        msrpUrl: "https://www.twsbi.com/diamond-580/",
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
          { retailer: "Amazon", price: 62.99, currency: "USD", url: "https://www.amazon.com/s?k=twsbi+Vac+700R+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 75.00, currency: "USD", url: "https://www.jetpens.com/TWSBI-Vac-700R-Fountain-Pen/ct/9978", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 75.00, currency: "USD", url: "https://www.gouletpens.com/collections/twsbi-vac-700r", inStock: true, condition: "new" },
        ],
        msrp: 80,
        msrpUrl: "https://www.twsbi.com/vac-700r/",
        yearIntroduced: 2015,
      },
      {
        id: "twsbi-classic",
        name: "Classic",
        slug: "classic",
        description:
          "TWSBI's most traditional-looking pen. A demonstrator piston-filler with a more conventional cylindrical body and a metal cap band. Same excellent piston mechanism as the ECO but with a more conservative aesthetic.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Piston",
        material: "Acrylic resin",
        knownPrices: [
          { retailer: "Amazon", price: 44.99, currency: "USD", url: "https://www.amazon.com/s?k=TWSBI+Classic+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 50.00, currency: "USD", url: "https://www.jetpens.com/TWSBI-Classic-Fountain-Pen/ct/7694", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 50.00, currency: "USD", url: "https://www.gouletpens.com/collections/twsbi-classic", inStock: true, condition: "new" },
        ],
        msrp: 55,
        msrpUrl: "https://www.twsbi.com/classic/",
        yearIntroduced: 2013,
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
          { retailer: "Amazon", price: 6.99, currency: "USD", url: "https://www.amazon.com/s?k=twsbi+Preppy+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 7.50, currency: "USD", url: "https://www.jetpens.com/Platinum-Preppy-Fountain-Pen/ct/1762", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 7.00, currency: "USD", url: "https://www.gouletpens.com/collections/platinum-preppy", inStock: true, condition: "new" },
        ],
        msrp: 7.50,
        msrpUrl: "https://www.platinum-pen.com/preppy/",
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
          { retailer: "Amazon", price: 149.99, currency: "USD", url: "https://www.amazon.com/s?k=twsbi+3776+Century+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 182.00, currency: "USD", url: "https://www.jetpens.com/Platinum-3776-Century-Fountain-Pen/ct/2306", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 182.00, currency: "USD", url: "https://www.gouletpens.com/collections/platinum-3776", inStock: true, condition: "new" },
        ],
        msrp: 216,
        msrpUrl: "https://www.platinum-pen.com/3776-century/",
        yearIntroduced: 2012,
      },
      {
        id: "platinum-procyon",
        name: "Procyon",
        slug: "procyon",
        description:
          "A durable, everyday fountain pen with a scratch-resistant aluminum body and a smooth steel nib. The Procyon features Platinum's Slip & Seal cap and a modern, understated design that bridges the gap between the Preppy and the 3776 Century.",
        nibOptions: ["Extra Fine", "Fine", "Medium"],
        fillingSystem: "Cartridge / Converter",
        material: "Anodized aluminum",
        knownPrices: [
          { retailer: "Amazon", price: 52.00, currency: "USD", url: "https://www.amazon.com/s?k=Platinum+Procyon+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 56.00, currency: "USD", url: "https://www.jetpens.com/Platinum-Procyon-Fountain-Pen/ct/14441", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 58.00, currency: "USD", url: "https://www.gouletpens.com/collections/platinum-procyon", inStock: true, condition: "new" },
        ],
        msrp: 60,
        yearIntroduced: 2017,
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
          { retailer: "Amazon", price: 24.99, currency: "USD", url: "https://www.amazon.com/s?k=twsbi+Sport+(Classic+/+AL+/+AC)+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 25.00, currency: "USD", url: "https://www.jetpens.com/Kaweco-Sport-Fountain-Pen/ct/2291", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 25.00, currency: "USD", url: "https://www.gouletpens.com/collections/kaweco-sport", inStock: true, condition: "new" },
        ],
        msrp: 28,
        msrpUrl: "https://www.kaweco-pen.com/sport/",
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
          { retailer: "Amazon", price: 44.99, currency: "USD", url: "https://www.amazon.com/s?k=twsbi+Liliput+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 65.00, currency: "USD", url: "https://www.jetpens.com/Kaweco-Liliput-Fountain-Pen/ct/7890", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 65.00, currency: "USD", url: "https://www.gouletpens.com/collections/kaweco-liliput", inStock: true, condition: "new" },
        ],
        msrp: 68,
        msrpUrl: "https://www.kaweco-pen.com/liliput/",
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
          { retailer: "Amazon", price: 99.99, currency: "USD", url: "https://www.amazon.com/s?k=twsbi+Dia+2+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 130.00, currency: "USD", url: "https://www.jetpens.com/Kaweco-Dia-2-Fountain-Pen/ct/18071", inStock: true, condition: "new" },
        ],
        msrp: 140,
        msrpUrl: "https://www.kaweco-pen.com/dia-2/",
        yearIntroduced: 2015,
      },
      {
        id: "kaweco-al-sport",
        name: "AL Sport",
        slug: "al-sport",
        description:
          "The aluminum version of the iconic Kaweco Sport. Same octagonal cap and pocket-to-full-size design, but machined from solid aluminum for a premium weight and feel. Available in raw, anodized black, and colored finishes.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Anodized aluminum",
        knownPrices: [
          { retailer: "Amazon", price: 69.99, currency: "USD", url: "https://www.amazon.com/s?k=Kaweco+AL+Sport+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 78.00, currency: "USD", url: "https://www.jetpens.com/Kaweco-AL-Sport-Fountain-Pen/ct/5209", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 78.00, currency: "USD", url: "https://www.gouletpens.com/collections/kaweco-al-sport", inStock: true, condition: "new" },
        ],
        msrp: 80,
        msrpUrl: "https://www.kaweco-pen.com/al-sport/",
        yearIntroduced: 2014,
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
          { retailer: "Amazon", price: 44.99, currency: "USD", url: "https://www.amazon.com/s?k=faber+Loom+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 54.00, currency: "USD", url: "https://www.gouletpens.com/collections/faber-castell-loom", inStock: true, condition: "new" },
        ],
        msrp: 58,
        msrpUrl: "https://www.faber-castell.com/loom/",
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
          { retailer: "Amazon", price: 74.99, currency: "USD", url: "https://www.amazon.com/s?k=faber+Ambition+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 92.00, currency: "USD", url: "https://www.gouletpens.com/collections/faber-castell-ambition", inStock: true, condition: "new" },
        ],
        msrp: 98,
        msrpUrl: "https://www.faber-castell.com/ambition/",
        yearIntroduced: 2010,
      },
    ],
  },
  {
    id: "noodlers",
    name: "Noodler's Ink",
    slug: "noodlers",
    country: "United States",
    description:
      "An American fountain pen company known for incredible value, quirky designs, and a commitment to the fountain pen community. Their pens use piston fillers or eye-dropper filling systems and come in a huge variety of ink-compatible models. A favorite among enthusiasts who want maximum ink capacity on a budget.",
    website: "https://www.noodlersink.com",
    models: [
      {
        id: "noodlers-ahab",
        name: "Ahab",
        slug: "ahab",
        description:
          "A large, demonstrator-style piston filler with a flex nib. Extremely popular as a first flex pen and for calligraphy practice. Available in many colors. The nib can be modified for more flex.",
        nibOptions: ["Fine (Flex)"],
        fillingSystem: "Piston",
        material: "ABS plastic",
        knownPrices: [
          { retailer: "Amazon", price: 19.99, currency: "USD", url: "https://www.amazon.com/s?k=faber+Ahab+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 24.00, currency: "USD", url: "https://www.gouletpens.com/collections/noodlers-ahab", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 21.00, currency: "USD", url: "https://www.goldspot.com/noodlers/ahab/", inStock: true, condition: "new" },
        ],
        msrp: 24,
        msrpUrl: "https://www.noodlersink.com/ahab/",
        yearIntroduced: 2010,
      },
      {
        id: "noodlers-konrad",
        name: "Konrad",
        slug: "konrad",
        description:
          "A piston-filling fountain pen with a slightly smaller body than the Ahab. More refined design with an ebonite or acrylic body. Excellent ink capacity and a reliable flex nib.",
        nibOptions: ["Fine (Flex)", "Medium (Flex)"],
        fillingSystem: "Piston",
        material: "Ebonite / Acrylic",
        knownPrices: [
          { retailer: "Amazon", price: 24.99, currency: "USD", url: "https://www.amazon.com/s?k=faber+Konrad+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 28.00, currency: "USD", url: "https://www.gouletpens.com/collections/noodlers-konrad", inStock: true, condition: "new" },
        ],
        msrp: 28,
        msrpUrl: "https://www.noodlersink.com/konrad/",
        yearIntroduced: 2012,
      },
      {
        id: "noodlers-creaper",
        name: "Creaper",
        slug: "creaper",
        description:
          "The smallest and most affordable Noodler's flex pen. A slim piston filler with a flex nib — great for those who want to try flex writing without committing to the larger Ahab or Konrad.",
        nibOptions: ["Fine (Flex)"],
        fillingSystem: "Piston",
        material: "ABS plastic",
        knownPrices: [
          { retailer: "Amazon", price: 14.99, currency: "USD", url: "https://www.amazon.com/s?k=faber+Creaper+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 17.00, currency: "USD", url: "https://www.gouletpens.com/collections/noodlers-creaper", inStock: true, condition: "new" },
        ],
        msrp: 17,
        msrpUrl: "https://www.noodlersink.com/creaper/",
        yearIntroduced: 2011,
      },
      {
        id: "noodlers-triple-tail",
        name: "Triple Tail",
        slug: "triple-tail",
        description:
          "A unique pen designed to hold 3 ink colors simultaneously using a triple-chamber piston system. Ideal for artists and those who like to switch inks without cleaning.",
        nibOptions: ["Fine (Flex)", "Medium (Flex)"],
        fillingSystem: "Triple-Chamber Piston",
        material: "ABS plastic",
        knownPrices: [
          { retailer: "Amazon", price: 34.99, currency: "USD", url: "https://www.amazon.com/s?k=noodlers+Triple+Tail+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 38.00, currency: "USD", url: "https://www.gouletpens.com/collections/noodlers-triple-tail", inStock: true, condition: "new" },
        ],
        msrp: 38,
        msrpUrl: "https://www.noodlersink.com/triple-tail/",
        yearIntroduced: 2018,
      },
    ],
  },
  {
    id: "aurora",
    name: "Aurora",
    slug: "aurora",
    country: "Italy",
    description:
      "Founded in 1919 in Turin, Aurora is Italy's oldest pen manufacturer and one of the most prestigious fountain pen brands in the world. They manufacture their own nibs in-house — a distinction shared by only a handful of companies. Known for exceptional build quality, classic Italian design, and a distinctively smooth writing experience.",
    website: "https://www.aurorapen.com",
    models: [
      {
        id: "aurora-optima",
        name: "Optima",
        slug: "optima",
        description:
          "Aurora's flagship model. A gorgeous piston-filling pen with an 18K gold nib, Auroloide resin barrel, and the iconic clip shaped like a tuning fork. Often considered one of the best luxury fountain pens made in Italy.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Piston",
        material: "Auroloide resin / Gold trim",
        knownPrices: [
          { retailer: "Amazon", price: 489.00, currency: "USD", url: "https://www.amazon.com/s?k=noodlers+Optima+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 498.00, currency: "USD", url: "https://www.goldspot.com/aurora/optima/", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 498.00, currency: "USD", url: "https://www.gouletpens.com/collections/aurora-optima", inStock: true, condition: "new" },
        ],
        msrp: 498,
        msrpUrl: "https://www.aurorapen.com/optima/",
        yearIntroduced: 2006,
      },
      {
        id: "aurora-88",
        name: "88",
        slug: "88",
        description:
          "Named after the iconic Aurora 88 from 1947 (the pen that launched Aurora). A modern reinterpretation with a piston filler, 18K gold nib, and classic cigar-shaped design. A piece of pen history.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Piston",
        material: "Auroloide resin / Gold trim",
        knownPrices: [
          { retailer: "Amazon", price: 379.00, currency: "USD", url: "https://www.amazon.com/s?k=noodlers+88+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 398.00, currency: "USD", url: "https://www.goldspot.com/aurora/88/", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 398.00, currency: "USD", url: "https://www.gouletpens.com/collections/aurora-88", inStock: true, condition: "new" },
        ],
        msrp: 398,
        msrpUrl: "https://www.aurorapen.com/88/",
        yearIntroduced: 2016,
      },
      {
        id: "aurora-ippsilon",
        name: "Ipsilon",
        slug: "ipsilon",
        description:
          "Aurora's entry-level gold nib pen. A cartridge/converter filler with a 14K gold nib at a price point far below most gold-nibbed pens. An excellent gateway to the Aurora writing experience.",
        nibOptions: ["Fine", "Medium"],
        fillingSystem: "Cartridge / Converter",
        material: "Metal / Lacquer",
        knownPrices: [
          { retailer: "Amazon", price: 89.00, currency: "USD", url: "https://www.amazon.com/s?k=noodlers+Ipsilon+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 98.00, currency: "USD", url: "https://www.goldspot.com/aurora/ippsilon/", inStock: true, condition: "new" },
        ],
        msrp: 98,
        msrpUrl: "https://www.aurorapen.com/ippsilon/",
        yearIntroduced: 2019,
      },
    ],
  },
  {
    id: "visconti",
    name: "Visconti",
    slug: "visconti",
    country: "Italy",
    description:
      "Founded in 1988 in Florence, Visconti is known for innovative filling systems, stunning materials, and bold Italian design. Their Homo Sapiens line (made from volcanic lava) and Van Gogh series are legendary.",
    website: "https://www.viscontipens.com",
    models: [
      {
        id: "visconti-homo-sapiens",
        name: "Homo Sapiens",
        slug: "homo-sapiens",
        description:
          "Visconti's iconic flagship. The body is made from real volcanic lava from Mount Etna, giving it a unique matte texture and incredible durability. Features an 18k gold nib, power filler vacuum system, and magnetic cap.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad", "Double Broad"],
        fillingSystem: "Power Filler (vacuum)",
        material: "Volcanic lava resin / Bronze trim",
        knownPrices: [
          { retailer: "Amazon", price: 599.00, currency: "USD", url: "https://www.amazon.com/s?k=visconti+Homo+Sapiens+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 695.00, currency: "USD", url: "https://www.goldspot.com/visconti/homo-sapiens/", inStock: true, condition: "new" },
          { retailer: "Appelboom Pennen", price: 650.00, currency: "USD", url: "https://www.appelboompennen.com/", inStock: true, condition: "new" },
        ],
        msrp: 795,
        msrpUrl: "https://www.viscontipens.com/homo-sapiens/",
        yearIntroduced: 2007,
      },
      {
        id: "visconti-van-gogh",
        name: "Van Gogh",
        slug: "van-gogh",
        description:
          "A tribute to the Dutch master. Each colorway is inspired by a Van Gogh painting. Made from swirl acrylic resin with a stainless steel nib. A beautiful art pen at an accessible price point.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Swirl acrylic resin / Chrome trim",
        knownPrices: [
          { retailer: "Amazon", price: 159.00, currency: "USD", url: "https://www.amazon.com/s?k=visconti+Van+Gogh+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 195.00, currency: "USD", url: "https://www.goldspot.com/visconti/van-gogh/", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 195.00, currency: "USD", url: "https://www.gouletpens.com/collections/visconti-van-gogh", inStock: true, condition: "new" },
        ],
        msrp: 195,
        msrpUrl: "https://www.viscontipens.com/van-gogh/",
        yearIntroduced: 2010,
      },
      {
        id: "visconti-rembrandt",
        name: "Rembrandt",
        slug: "rembrandt",
        description:
          "A mid-range Visconti featuring their proprietary My Pen System (interchangeable cap top). Made from swirl acrylic resin with a stainless steel nib and a clip inspired by Rembrandt's era. A refined entry point to Visconti ownership.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Swirl acrylic resin / Chrome trim",
        knownPrices: [
          { retailer: "Amazon", price: 195.00, currency: "USD", url: "https://www.amazon.com/s?k=Visconti+Rembrandt+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 215.00, currency: "USD", url: "https://www.goldspot.com/visconti/rembrandt/", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 215.00, currency: "USD", url: "https://www.gouletpens.com/search?q=visconti+rembrandt", inStock: true, condition: "new" },
        ],
        msrp: 225,
        msrpUrl: "https://www.viscontipens.com/rembrandt/",
        yearIntroduced: 2012,
      },
      {
        id: "visconti-divina",
        name: "Divina Elegance",
        slug: "divina-elegance",
        description:
          "A slender, elegant pen with Visconti's signature clip design and 18k gold nib. Available in sterling silver, rose gold, and palladium finishes. The Divina features Visconti's double-reservoir power filler for extended writing sessions.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Double Reservoir Power Filler",
        material: "Sterling silver / 18k gold nib",
        knownPrices: [
          { retailer: "Amazon", price: 449.00, currency: "USD", url: "https://www.amazon.com/s?k=Visconti+Divina+Elegance+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 495.00, currency: "USD", url: "https://www.goldspot.com/visconti/divina-elegance/", inStock: true, condition: "new" },
        ],
        msrp: 495,
        yearIntroduced: 2012,
      },
    ],
  },
  {
    id: "leonardo",
    name: "Leonardo",
    slug: "leonardo",
    country: "Italy",
    description:
      "Founded in 2018 in Florence, Leonardo Officina Italiana is a newer Italian pen maker founded by members of the former Delta team. Known for their vintage-inspired designs, large ink capacities, and excellent build quality at competitive prices.",
    website: "https://www.leonardopen.com",
    models: [
      {
        id: "leonardo-momento-zero",
        name: "Momento Zero",
        slug: "momento-zero",
        description:
          "Leonardo's flagship model. A large piston-filling fountain pen with a 14k gold nib and gorgeous acrylic resin barrel. Known for its massive ink capacity and comfortable writing experience. Available in dozens of stunning resin colors.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad", "Stub 1.1"],
        fillingSystem: "Piston",
        material: "Acrylic resin / Gold trim",
        knownPrices: [
          { retailer: "Amazon", price: 179.00, currency: "USD", url: "https://www.amazon.com/s?k=Leonardo+Momento+Zero+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 199.00, currency: "USD", url: "https://www.goldspot.com/leonardo/momento-zero/", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 199.00, currency: "USD", url: "https://www.gouletpens.com/search?q=leonardo+momento+zero", inStock: true, condition: "new" },
        ],
        msrp: 199,
        msrpUrl: "https://www.leonardopen.com/momento-zero/",
        yearIntroduced: 2019,
      },
      {
        id: "leonardo-furore",
        name: "Furore",
        slug: "furore",
        description:
          "A cartridge/converter model with a steel nib at a lower price point than the Momento Zero. The Furore features Leonardo's signature resin colors and excellent nib tuning. Available in standard and ventidue (22) variants.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Acrylic resin / Chrome trim",
        knownPrices: [
          { retailer: "Amazon", price: 89.00, currency: "USD", url: "https://www.amazon.com/s?k=Leonardo+Furore+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 105.00, currency: "USD", url: "https://www.goldspot.com/leonardo/furore/", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 105.00, currency: "USD", url: "https://www.gouletpens.com/search?q=leonardo+furore", inStock: true, condition: "new" },
        ],
        msrp: 105,
        msrpUrl: "https://www.leonardopen.com/furore/",
        yearIntroduced: 2020,
      },
    ],
  },
  {
    id: "waterman",
    name: "Waterman",
    slug: "waterman",
    country: "France",
    description:
      "Founded in 1883 by Lewis Waterman in New York, the brand relocated to Paris and became one of France's most iconic pen makers. Now owned by Newell Brands, Waterman is known for sleek, understated European design and reliable writing performance at mid-range prices.",
    website: "https://www.waterman.com",
    models: [
      {
        id: "waterman-hemisphere",
        name: "Hémisphère",
        slug: "hemisphere",
        description:
          "Waterman's best-selling model. A slim, elegant fountain pen with a stainless steel nib and a polished metal body. The Hémisphère is lightweight and refined — a classic corporate gift pen that also happens to write very well.",
        nibOptions: ["Extra Fine", "Fine", "Medium"],
        fillingSystem: "Cartridge / Converter",
        material: "Stainless steel / Lacquer",
        knownPrices: [
          { retailer: "Amazon", price: 52.00, currency: "USD", url: "https://www.amazon.com/s?k=Waterman+Hemisphere+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 65.00, currency: "USD", url: "https://www.gouletpens.com/search?q=waterman+hemisphere", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 58.00, currency: "USD", url: "https://www.goldspot.com/waterman/hemisphere/", inStock: true, condition: "new" },
        ],
        msrp: 65,
        msrpUrl: "https://www.waterman.com/hemisphere/",
        yearIntroduced: 1999,
      },
      {
        id: "waterman-expert",
        name: "Expert",
        slug: "expert",
        description:
          "A larger, more substantial pen than the Hémisphère with a wider barrel and a gold-plated stainless steel nib. The Expert features a classic cigar shape with a polished clip. A step up in presence and writing comfort.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Stainless steel / Lacquer / Gold trim",
        knownPrices: [
          { retailer: "Amazon", price: 95.00, currency: "USD", url: "https://www.amazon.com/s?k=Waterman+Expert+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 115.00, currency: "USD", url: "https://www.gouletpens.com/search?q=waterman+expert", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 108.00, currency: "USD", url: "https://www.goldspot.com/waterman/expert/", inStock: true, condition: "new" },
        ],
        msrp: 115,
        msrpUrl: "https://www.waterman.com/expert/",
        yearIntroduced: 2003,
      },
      {
        id: "waterman-exception",
        name: "Exception",
        slug: "exception",
        description:
          "Waterman's premium fountain pen featuring an 18k gold nib and a distinctive rectangular barrel design. The Exception sits above the Expert in Waterman's lineup, offering a more luxurious writing experience with gold nib feedback and a refined lacquer finish. A classic executive pen.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Stainless steel / Lacquer / Gold trim",
        knownPrices: [
          { retailer: "Amazon", price: 130.00, currency: "USD", url: "https://www.amazon.com/s?k=Waterman+Exception+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 195.00, currency: "USD", url: "https://www.gouletpens.com/search?q=waterman+exception", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 175.00, currency: "USD", url: "https://www.goldspot.com/waterman/exception/", inStock: true, condition: "new" },
        ],
        msrp: 195,
        msrpUrl: "https://www.waterman.com/exception/",
        yearIntroduced: 2005,
      },
    ],
  },
  {
    id: "taccia",
    name: "Taccia",
    slug: "taccia",
    country: "Japan",
    description:
      "A Japanese brand known for stunning urushi lacquer finishes and unique design collaborations. Taccia pens combine traditional Japanese craftsmanship with modern writing performance. Their models are often inspired by Japanese art and culture.",
    website: "https://www.taccia-pen.com",
    models: [
      {
        id: "taccia-aurora",
        name: "Aurora",
        slug: "aurora",
        description:
          "A mid-range urushi lacquer pen with a 14k gold nib. The Aurora features Taccia's signature swirling urushi finish and a comfortable cigar-shaped body. An excellent introduction to Japanese urushi pens.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Urushi lacquer / Ebonite",
        knownPrices: [
          { retailer: "Amazon", price: 129.99, currency: "USD", url: "https://www.amazon.com/s?k=visconti+Aurora+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 165.00, currency: "USD", url: "https://www.jetpens.com/Taccia-Aurora-Fountain-Pen/ct/18851", inStock: true, condition: "new" },
        ],
        msrp: 195,
        msrpUrl: "https://www.taccia-pen.com/aurora/",
        yearIntroduced: 2015,
      },
      {
        id: "taccia-spectrum",
        name: "Spectrum",
        slug: "spectrum",
        description:
          "An affordable resin pen with a steel nib. The Spectrum features Taccia's distinctive design language at a lower price point. Great for those who want Japanese quality without the urushi price tag.",
        nibOptions: ["Fine", "Medium"],
        fillingSystem: "Cartridge / Converter",
        material: "Acrylic resin",
        knownPrices: [
          { retailer: "Amazon", price: 39.99, currency: "USD", url: "https://www.amazon.com/s?k=visconti+Spectrum+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 45.00, currency: "USD", url: "https://www.jetpens.com/Taccia-Spectrum-Fountain-Pen/ct/19000", inStock: true, condition: "new" },
        ],
        msrp: 45,
        msrpUrl: "https://www.taccia-pen.com/spectrum/",
        yearIntroduced: 2018,
      },
    ],
  },
  {
    id: "nakaya",
    name: "Nakaya",
    slug: "nakaya",
    country: "Japan",
    description:
      "One of the most prestigious fountain pen makers in the world. Nakaya is a small workshop in Tokyo that hand-makes each pen using traditional Japanese urushi lacquer techniques. Every Nakaya is a unique work of art, made to order.",
    website: "https://www.nakaya.org",
    models: [
      {
        id: "nakaya-portable-cigar",
        name: "Portable Cigar",
        slug: "portable-cigar",
        description:
          "Nakaya's most popular model. A cigar-shaped pen with a 14k gold nib and exquisite urushi lacquer finish. Each pen is handcrafted and can be ordered in dozens of lacquer styles, from simple solid colors to elaborate maki-e designs.",
        nibOptions: ["Ultra Extra Fine", "Extra Fine", "Fine", "Medium", "Broad", "Soft Fine", "Soft Medium"],
        fillingSystem: "Cartridge / Converter (or eyedropper)",
        material: "Ebonite / Urushi lacquer",
        knownPrices: [
          { retailer: "Amazon", price: 395.00, currency: "USD", url: "https://www.amazon.com/s?k=nakaya+Portable+Cigar+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Nakaya Direct", price: 480.00, currency: "USD", url: "https://www.nakaya.org/products/portable-cigar", inStock: true, condition: "new" },
        ],
        msrp: 480,
        msrpUrl: "https://www.nakaya.org/portable-cigar/",
        yearIntroduced: 1999,
      },
      {
        id: "nakaya-decapitation-writer",
        name: "Decapitation Writer",
        slug: "decapitation-writer",
        description:
          "A large, flat-top pen with a posted cap that creates a long, balanced writing instrument. The name comes from the Japanese word for the flat-top design. Hand-finished in urushi lacquer with a 14k gold nib.",
        nibOptions: ["Fine", "Medium", "Broad", "Music"],
        fillingSystem: "Cartridge / Converter (or eyedropper)",
        material: "Ebonite / Urushi lacquer",
        knownPrices: [
          { retailer: "Nakaya Direct", price: 520.00, currency: "USD", url: "https://www.nakaya.org/products/decapitation-writer", inStock: true, condition: "new" },
        ],
        msrp: 520,
        msrpUrl: "https://www.nakaya.org/decapitation-writer/",
        yearIntroduced: 2001,
      },
    ],
  },
  {
    id: "delta",
    name: "Delta",
    slug: "delta",
    country: "Italy",
    description: "An iconic Italian fountain pen brand founded in 1982 in Naples. Delta is known for bold, colorful designs inspired by Italian art and culture. Their Dolcevita line is one of the most recognizable fountain pen series in the world.",
    website: "https://www.deltapens.com",
    models: [
      {
        id: "delta-dolcevita",
        name: "Dolcevita",
        slug: "dolcevita",
        description: "Delta's flagship model. A large, piston-filling fountain pen with an 18k gold nib and a distinctive orange barrel (the classic color). The Dolcevita is a statement pen — bold, colorful, and unmistakably Italian.",
        nibOptions: ["Fine", "Medium", "Broad", "Double Broad"],
        fillingSystem: "Piston",
        material: "Auroloide resin / Gold trim",
        knownPrices: [
          { retailer: "Amazon", price: 499.99, currency: "USD", url: "https://www.amazon.com/s?k=Delta+Dolcevita+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 598.00, currency: "USD", url: "https://www.goldspot.com/delta/dolcevita/", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 598.00, currency: "USD", url: "https://www.gouletpens.com/collections/delta-dolcevita", inStock: true, condition: "new" },
        ],
        msrp: 598,
        yearIntroduced: 1995,
      },
      {
        id: "delta-fusion-82",
        name: "Fusion 82",
        slug: "fusion-82",
        description: "A tribute to the original Aurora 88 pen that inspired the Delta brand. Features a piston filler with an 18k gold nib and vintage-inspired design. Available in classic black or colorful auroloide resin.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Piston",
        material: "Auroloide resin / Gold trim",
        knownPrices: [
          { retailer: "Amazon", price: 349.99, currency: "USD", url: "https://www.amazon.com/s?k=Delta+Fusion+82+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 445.00, currency: "USD", url: "https://www.goldspot.com/delta/fusion-82/", inStock: true, condition: "new" },
        ],
        msrp: 445,
        yearIntroduced: 2018,
      },
    ],
  },
  {
    id: "omas",
    name: "Omas",
    slug: "omas",
    country: "Italy",
    description: "Founded in 1925 in Bologna, Omas is one of Italy's most storied fountain pen manufacturers. Known for their distinctive dodecagonal (12-sided) barrel design and exceptional build quality. Omas was acquired by Luxorica Group and later revived as a niche luxury brand.",
    website: "https://www.omaspen.com",
    models: [
      {
        id: "omas-360",
        name: "360",
        slug: "360",
        description: "Omas's flagship model with the iconic triangular barrel that provides a natural, ergonomic grip. Features a piston filler with an 18k gold nib. The 360 is available in classic black, paragon, and special edition colors.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Piston",
        material: "Auroloide resin / Gold trim",
        knownPrices: [
          { retailer: "Amazon", price: 399.99, currency: "USD", url: "https://www.amazon.com/s?k=Omas+360+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 495.00, currency: "USD", url: "https://www.goldspot.com/omas/360/", inStock: true, condition: "new" },
        ],
        msrp: 495,
        yearIntroduced: 2000,
      },
      {
        id: "omas-paragon",
        name: "Paragon",
        slug: "paragon",
        description: "A classic cigar-shaped fountain pen with a 14k gold nib. The Paragon is Omas's more traditional design, featuring a faceted barrel and the distinctive Omas clip. An excellent value for an Italian gold-nibbed pen.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Auroloide resin / Gold trim",
        knownPrices: [
          { retailer: "Amazon", price: 249.99, currency: "USD", url: "https://www.amazon.com/s?k=Omas+Paragon+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 345.00, currency: "USD", url: "https://www.goldspot.com/omas/paragon/", inStock: true, condition: "new" },
        ],
        msrp: 345,
        yearIntroduced: 1990,
      },
    ],
  },
  {
    id: "parker",
    name: "Parker",
    slug: "parker",
    country: "United Kingdom / France",
    description:
      "Founded in 1888 in Janesville, Wisconsin, Parker is one of the most iconic fountain pen brands in history. Known for the Duofold, Sonnet, and Jotter lines, Parker pens have been used by world leaders, writers, and professionals for over a century. Now owned by Newell Brands, Parker remains a top choice for those seeking classic design and reliable performance.",
    website: "https://www.parkerpen.com",
    models: [
      {
        id: "parker-jotter",
        name: "Jotter",
        slug: "jotter",
        description:
          "One of the most recognizable pens in the world. The Parker Jotter fountain pen features a stainless steel nib, a slim profile, and the iconic arrow clip. Originally a ballpoint introduced in 1954, the fountain pen version offers Parker quality at an accessible price point.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter (Quink)",
        material: "Stainless steel / Brass",
        knownPrices: [
          { retailer: "Amazon", price: 28.00, currency: "USD", url: "https://www.amazon.com/s?k=Parker+Jotter+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 32.00, currency: "USD", url: "https://www.goldspot.com/parker/jotter/", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 32.00, currency: "USD", url: "https://www.gouletpens.com/collections/parker-jotter", inStock: true, condition: "new" },
        ],
        msrp: 32,
        msrpUrl: "https://www.parkerpen.com/us/en/parker-jotter.html",
        yearIntroduced: 1954,
      },
      {
        id: "parker-sonnet",
        name: "Sonnet",
        slug: "sonnet",
        description:
          "Parker's mid-range premium pen with a 14k gold nib. The Sonnet is available in a stunning range of finishes from classic black to studded precious metal versions. It offers a smooth, wet writing experience that punches well above its price point.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Brass / Lacquer / Precious metals",
        knownPrices: [
          { retailer: "Amazon", price: 165.00, currency: "USD", url: "https://www.amazon.com/s?k=Parker+Sonnet+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 195.00, currency: "USD", url: "https://www.goldspot.com/parker/sonnet/", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 195.00, currency: "USD", url: "https://www.gouletpens.com/collections/parker-sonnet", inStock: true, condition: "new" },
        ],
        msrp: 195,
        msrpUrl: "https://www.parkerpen.com/us/en/parker-sonnet.html",
        yearIntroduced: 1973,
      },
      {
        id: "parker-duofold",
        name: "Duofold",
        slug: "duofold",
        description:
          "Parker's flagship luxury pen, first introduced in 1921. The Duofold is a symbol of prestige and craftsmanship, featuring an 18k gold nib, premium lacquer finishes, and the iconic oversized design. Used by world leaders and collectors, the Duofold is one of the most storied fountain pen lines in history.",
        nibOptions: ["Fine", "Medium", "Broad", "Palladium Fine"],
        fillingSystem: "Cartridge / Converter",
        material: "Precious resin / 18k gold trim",
        knownPrices: [
          { retailer: "Amazon", price: 450.00, currency: "USD", url: "https://www.amazon.com/s?k=Parker+Duofold+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 550.00, currency: "USD", url: "https://www.goldspot.com/parker/duofold/", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 550.00, currency: "USD", url: "https://www.gouletpens.com/collections/parker-duofold", inStock: true, condition: "new" },
        ],
        msrp: 550,
        msrpUrl: "https://www.parkerpen.com/us/en/parker-duofold.html",
        yearIntroduced: 1921,
      },
      {
        id: "parker-urban",
        name: "Urban",
        slug: "urban",
        description:
          "Parker's modern, affordable fountain pen with a distinctive curved body and rubberized grip section. The Urban features a steel nib with Parker's signature arrow clip and a comfortable, ergonomic design aimed at everyday writers. Available in a range of bold and classic colors.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter (Quink)",
        material: "Brass / Lacquer / Rubber grip",
        knownPrices: [
          { retailer: "Amazon", price: 32.00, currency: "USD", url: "https://www.amazon.com/s?k=Parker+Urban+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 36.00, currency: "USD", url: "https://www.goldspot.com/parker/urban/", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 36.00, currency: "USD", url: "https://www.gouletpens.com/collections/parker-urban", inStock: true, condition: "new" },
        ],
        msrp: 36,
        msrpUrl: "https://www.parkerpen.com/us/en/parker-urban.html",
        yearIntroduced: 2012,
      },
    ],
  },
  {
    id: "sheaffer",
    name: "Sheaffer",
    slug: "sheaffer",
    country: "United States",
    description:
      "Founded in 1913 in Fort Madison, Iowa, Sheaffer is one of America's oldest fountain pen brands. Known for pioneering the lever-filling mechanism and their distinctive white dot marking, Sheaffer pens have been trusted by writers and professionals for over a century. Today owned by Cross (A.T. Cross Company), Sheaffer continues to offer reliable, well-crafted pens at various price points.",
    website: "https://www.sheaffer.com",
    models: [
      {
        id: "sheaffer-100",
        name: "100",
        slug: "100",
        description:
          "Sheaffer's entry-level fountain pen with a steel nib and classic design. The Sheaffer 100 features the iconic white dot on the clip, a slim profile, and reliable performance. Available in a range of colors from classic black to bold blue and red.",
        nibOptions: ["Fine", "Medium"],
        fillingSystem: "Cartridge / Converter",
        material: "Brass / Lacquer",
        knownPrices: [
          { retailer: "Amazon", price: 39.99, currency: "USD", url: "https://www.amazon.com/s?k=Sheaffer+100+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 42.00, currency: "USD", url: "https://www.goldspot.com/sheaffer/100/", inStock: true, condition: "new" },
        ],
        msrp: 45,
        yearIntroduced: 2010,
      },
      {
        id: "sheaffer-prelude",
        name: "Prelude",
        slug: "prelude",
        description:
          "Sheaffer's mid-range offering with a stainless steel nib and premium lacquer finishes. The Prelude features a comfortable grip section, a distinctive tri-tone clip, and Sheaffer's hallmark white dot. A solid, dependable pen for everyday use.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Brass / Lacquer / Chrome trim",
        knownPrices: [
          { retailer: "Amazon", price: 65.00, currency: "USD", url: "https://www.amazon.com/s?k=Sheaffer+Prelude+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 72.00, currency: "USD", url: "https://www.goldspot.com/sheaffer/prelude/", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 72.00, currency: "USD", url: "https://www.gouletpens.com/collections/sheaffer-prelude", inStock: true, condition: "new" },
        ],
        msrp: 72,
        yearIntroduced: 2005,
      },
    ],
  },
  {
    id: "diplomat",
    name: "Diplomat",
    slug: "diplomat",
    country: "Germany",
    description:
      "Founded in 1922 in Hamburg, Diplomat is a German manufacturer known for precision-engineered fountain pens with distinctive aluminum bodies. Their Aero and Excellence lines are popular among professionals who value German craftsmanship and smooth, reliable writing.",
    website: "https://www.diplomat-pen.com",
    models: [
      {
        id: "diplomat-aero",
        name: "Aero",
        slug: "aero",
        description:
          "Diplomat's iconic all-aluminum fountain pen with a distinctive grooved barrel design inspired by the Zeppelin airship. Features a steel nib with excellent ink flow and a satisfying snap cap. The Aero is lightweight yet feels substantial, and the matte finish resists fingerprints.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Aluminum",
        knownPrices: [
          { retailer: "Amazon", price: 155.00, currency: "USD", url: "https://www.amazon.com/s?k=Diplomat+Aero+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 170.00, currency: "USD", url: "https://www.goldspot.com/diplomat/aero/", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 170.00, currency: "USD", url: "https://www.gouletpens.com/collections/diplomat-aero", inStock: true, condition: "new" },
        ],
        msrp: 170,
        yearIntroduced: 2011,
      },
      {
        id: "diplomat-excellence",
        name: "Excellence A2",
        slug: "excellence-a2",
        description:
          "Diplomat's flagship pen with a brushed metal barrel and a premium steel nib. The Excellence A2 features a weighted balance that sits perfectly in hand, a magnetic cap, and a distinctive red dot on the clip. A professional-grade pen at a competitive price.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Brass / Aluminum / Chrome trim",
        knownPrices: [
          { retailer: "Amazon", price: 95.00, currency: "USD", url: "https://www.amazon.com/s?k=Diplomat+Excellence+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 110.00, currency: "USD", url: "https://www.goldspot.com/diplomat/excellence/", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 110.00, currency: "USD", url: "https://www.gouletpens.com/collections/diplomat-excellence", inStock: true, condition: "new" },
        ],
        msrp: 110,
        yearIntroduced: 2015,
      },
      {
        id: "diplomat-esteem",
        name: "Esteem",
        slug: "esteem",
        description:
          "Diplomat's entry-level fountain pen featuring a sleek metal barrel with a snap cap and a smooth steel nib. The Esteem offers Diplomat's signature build quality and German engineering at an accessible price point. A reliable everyday writer with a professional appearance.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Aluminum / Lacquer",
        knownPrices: [
          { retailer: "Amazon", price: 55.00, currency: "USD", url: "https://www.amazon.com/s?k=Diplomat+Esteem+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 65.00, currency: "USD", url: "https://www.goldspot.com/diplomat/esteem/", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 65.00, currency: "USD", url: "https://www.gouletpens.com/collections/diplomat-esteem", inStock: true, condition: "new" },
        ],
        msrp: 65,
        yearIntroduced: 2018,
      },
    ],
  },
  {
    id: "cross",
    name: "Cross",
    slug: "cross",
    country: "United States",
    description:
      "Founded in 1846 in Providence, Rhode Island, Cross is America's oldest writing instrument manufacturer. Known for their Century and Bailey lines, Cross pens are a staple in corporate gifting and professional settings. The brand guarantees their writing instruments for life.",
    website: "https://www.cross.com",
    models: [
      {
        id: "cross-century-ii",
        name: "Century II",
        slug: "century-ii",
        description:
          "Cross's classic slim-profile fountain pen with a polished chrome or gold-filled finish. The Century II features a smooth steel nib and a comfortable twist-action mechanism. A timeless, understated design that has been a boardroom staple for decades.",
        nibOptions: ["Fine", "Medium"],
        fillingSystem: "Cartridge / Converter",
        material: "Brass / Chrome or 10k Gold-filled",
        knownPrices: [
          { retailer: "Amazon", price: 115.00, currency: "USD", url: "https://www.amazon.com/s?k=Cross+Century+II+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 125.00, currency: "USD", url: "https://www.goldspot.com/cross/century-ii/", inStock: true, condition: "new" },
        ],
        msrp: 125,
        yearIntroduced: 1990,
      },
      {
        id: "cross-bailey",
        name: "Bailey",
        slug: "bailey",
        description:
          "Cross's popular mid-range fountain pen with a distinctive bulbous barrel and polished chrome accents. The Bailey features a comfortable grip and a smooth steel nib. Available in multiple lacquer colors, it offers a premium feel at an accessible price.",
        nibOptions: ["Fine", "Medium"],
        fillingSystem: "Cartridge / Converter",
        material: "Brass / Lacquer / Chrome trim",
        knownPrices: [
          { retailer: "Amazon", price: 65.00, currency: "USD", url: "https://www.amazon.com/s?k=Cross+Bailey+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 72.00, currency: "USD", url: "https://www.goldspot.com/cross/bailey/", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 72.00, currency: "USD", url: "https://www.gouletpens.com/collections/cross-bailey", inStock: true, condition: "new" },
        ],
        msrp: 72,
        yearIntroduced: 2005,
      },
    ],
  },
  {
    id: "franklin-christoph",
    name: "Franklin-Christoph",
    slug: "franklin-christoph",
    country: "United States",
    description:
      "Founded in 2001 in North Carolina, Franklin-Christoph is an American fountain pen maker known for their hand-turned acrylic bodies and excellent steel nibs. They sell direct-to-consumer, which keeps prices competitive. Their Model 02 and Model 03 are cult favorites among fountain pen enthusiasts.",
    website: "https://www.franklin-christoph.com",
    models: [
      {
        id: "fc-model-02",
        name: "Model 02 Intrinsic",
        slug: "model-02",
        description:
          "Franklin-Christoph's flagship pocket pen with a distinctive cigar shape and screw cap. The Model 02 features hand-turned acrylic bodies in stunning colors, a JoWo #5 steel nib, and a compact design that posts to full size. A cult classic.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad", "Stub 1.1"],
        fillingSystem: "Cartridge / Converter",
        material: "Hand-turned acrylic",
        knownPrices: [
          { retailer: "Amazon", price: 165.00, currency: "USD", url: "https://www.amazon.com/s?k=Franklin-Christoph+Model+02+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 165.00, currency: "USD", url: "https://www.goldspot.com/franklin-christoph/model-02/", inStock: true, condition: "new" },
        ],
        msrp: 165,
        yearIntroduced: 2010,
      },
      {
        id: "fc-model-03",
        name: "Model 03 Iterum",
        slug: "model-03",
        description:
          "A larger, full-size pen with the same hand-turned acrylic bodies as the Model 02. The Model 03 features a JoWo #6 nib (larger than the Model 02's #5), a comfortable grip section, and a clip for pocket carry. Available in dozens of stunning acrylic patterns.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad", "Stub 1.1", "Music"],
        fillingSystem: "Cartridge / Converter",
        material: "Hand-turned acrylic",
        knownPrices: [
          { retailer: "Amazon", price: 185.00, currency: "USD", url: "https://www.amazon.com/s?k=Franklin-Christoph+Model+03+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 185.00, currency: "USD", url: "https://www.goldspot.com/franklin-christoph/model-03/", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 185.00, currency: "USD", url: "https://www.gouletpens.com/collections/franklin-christoph", inStock: true, condition: "new" },
        ],
        msrp: 185,
        yearIntroduced: 2012,
      },
      {
        id: "fc-model-20",
        name: "Model 20 Marietta",
        slug: "model-20",
        description:
          "Franklin-Christoph's desk pen with a long, elegant body and a JoWo #5 nib. The Model 20 is designed for extended writing sessions at a desk, with a comfortable weight and balance. Available in classic black and special acrylic editions.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad", "Stub 1.1"],
        fillingSystem: "Cartridge / Converter",
        material: "Hand-turned acrylic / Resin",
        knownPrices: [
          { retailer: "Amazon", price: 145.00, currency: "USD", url: "https://www.amazon.com/s?k=Franklin-Christoph+Model+20+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 145.00, currency: "USD", url: "https://www.goldspot.com/franklin-christoph/model-20/", inStock: true, condition: "new" },
        ],
        msrp: 145,
        yearIntroduced: 2014,
      },
    ],
  },
  {
    id: "jinhao",
    name: "Jinhao",
    slug: "jinhao",
    country: "China",
    description:
      "Jinhao is China's most popular fountain pen brand, known for offering surprisingly good writing instruments at rock-bottom prices. Their X450, X750, and 82 are staples of the budget fountain pen world.",
    website: "https://www.jinhaopen.com",
    models: [
      {
        id: "jinhao-x450",
        name: "X450",
        slug: "x450",
        description:
          "A heavy brass-bodied fountain pen with a smooth #6 nib. Available in dozens of finishes. One of the best value fountain pens in existence.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Brass",
        knownPrices: [
          { retailer: "Amazon", price: 6.99, currency: "USD", url: "https://www.amazon.com/s?k=Jinhao+X450+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 12.00, currency: "USD", url: "https://www.jetpens.com/search?q=jinhao+x450", inStock: true, condition: "new" },
        ],
        msrp: 8,
        yearIntroduced: 2012,
      },
      {
        id: "jinhao-x750",
        name: "X750",
        slug: "x750",
        description:
          "Similar to the X450 but with a slimmer profile and lighter weight. Features a smooth steel #6 nib and comes in a variety of lacquered finishes.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Brass",
        knownPrices: [
          { retailer: "Amazon", price: 7.49, currency: "USD", url: "https://www.amazon.com/s?k=Jinhao+X750+fountain+pen", inStock: true, condition: "new" },
        ],
        msrp: 8,
        yearIntroduced: 2014,
      },
      {
        id: "jinhao-82",
        name: "82",
        slug: "82",
        description:
          "A pocket-sized fountain pen inspired by the Kaweco Sport. Compact, lightweight, and available in many colors. Perfect for everyday carry.",
        nibOptions: ["Fine", "Medium"],
        fillingSystem: "Cartridge / Converter",
        material: "ABS plastic",
        knownPrices: [
          { retailer: "Amazon", price: 3.99, currency: "USD", url: "https://www.amazon.com/s?k=Jinhao+82+fountain+pen", inStock: true, condition: "new" },
        ],
        msrp: 4,
        yearIntroduced: 2022,
      },
      {
        id: "jinhao-x159",
        name: "X159",
        slug: "x159",
        description:
          "An oversized fountain pen inspired by the Montblanc 149. Brass body with a smooth #8 steel nib. Remarkably well-built for the price, with a satisfying heft and snap cap. A popular choice for those who want a large pen without the luxury price tag.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Brass",
        knownPrices: [
          { retailer: "Amazon", price: 8.99, currency: "USD", url: "https://www.amazon.com/s?k=Jinhao+X159+fountain+pen", inStock: true, condition: "new" },
          { retailer: "eBay", price: 7.50, currency: "USD", url: "https://www.ebay.com/sch/i.html?_nkw=Jinhao+X159+fountain+pen", inStock: true, condition: "new" },
        ],
        msrp: 10,
        yearIntroduced: 2023,
      },
      {
        id: "jinhao-992",
        name: "992",
        slug: "992",
        description:
          "A transparent demonstrator fountain pen with a smooth steel nib. Available in many colors, it shows the ink sloshing inside. Often compared to the TWSBI Eco at a fraction of the price.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Acrylic",
        knownPrices: [
          { retailer: "Amazon", price: 3.49, currency: "USD", url: "https://www.amazon.com/s?k=Jinhao+992+fountain+pen", inStock: true, condition: "new" },
          { retailer: "eBay", price: 2.99, currency: "USD", url: "https://www.ebay.com/sch/i.html?_nkw=Jinhao+992+fountain+pen", inStock: true, condition: "new" },
        ],
        msrp: 4,
        yearIntroduced: 2018,
      },
      {
        id: "jinhao-599",
        name: "599",
        slug: "599",
        description:
          "A Lamy Safari-inspired pen with a triangular grip and smooth steel nib. Available in many colors. A popular choice for those who like the Safari design but want to try it at a budget price.",
        nibOptions: ["Fine", "Medium"],
        fillingSystem: "Cartridge / Converter",
        material: "ABS plastic",
        knownPrices: [
          { retailer: "Amazon", price: 4.49, currency: "USD", url: "https://www.amazon.com/s?k=Jinhao+599+fountain+pen", inStock: true, condition: "new" },
          { retailer: "eBay", price: 3.50, currency: "USD", url: "https://www.ebay.com/sch/i.html?_nkw=Jinhao+599+fountain+pen", inStock: true, condition: "new" },
        ],
        msrp: 5,
        yearIntroduced: 2015,
      },
    ],
  },
  {
    id: "hongdian",
    name: "Hongdian",
    slug: "hongdian",
    country: "China",
    description:
      "Hongdian has earned a reputation for producing fountain pens that punch well above their price point. Their Forest Series and A1 retractable pen are favorites among budget fountain pen enthusiasts.",
    website: "https://www.hongdian.com",
    models: [
      {
        id: "hongdian-forest-series",
        name: "Forest Series",
        slug: "forest-series",
        description:
          "A brass-bodied pen with wood-grain finish options. Features a smooth steel nib and magnetic cap. Considered one of the best sub-$15 fountain pens available.",
        nibOptions: ["Extra Fine", "Fine", "Medium"],
        fillingSystem: "Cartridge / Converter",
        material: "Brass with wood-grain finish",
        knownPrices: [
          { retailer: "Amazon", price: 12.99, currency: "USD", url: "https://www.amazon.com/s?k=Hongdian+Forest+Series+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 14.00, currency: "USD", url: "https://www.jetpens.com/search?q=hongdian+forest", inStock: true, condition: "new" },
        ],
        msrp: 15,
        yearIntroduced: 2020,
      },
      {
        id: "hongdian-a1",
        name: "A1",
        slug: "a1",
        description:
          "A retractable-nib fountain pen inspired by the Pilot Vanishing Point at a fraction of the cost. Click mechanism deploys the nib instantly.",
        nibOptions: ["Fine", "Medium"],
        fillingSystem: "Cartridge / Converter",
        material: "Metal",
        knownPrices: [
          { retailer: "Amazon", price: 18.99, currency: "USD", url: "https://www.amazon.com/s?k=Hongdian+A1+fountain+pen", inStock: true, condition: "new" },
        ],
        msrp: 20,
        yearIntroduced: 2023,
      },
      {
        id: "hongdian-black-forest",
        name: "Black Forest",
        slug: "black-forest",
        description:
          "The all-black matte version of the Forest Series. Stealthy, heavy, and writes smoothly. A cult favorite in the budget pen community.",
        nibOptions: ["Extra Fine", "Fine", "Medium"],
        fillingSystem: "Cartridge / Converter",
        material: "Matte black brass",
        knownPrices: [
          { retailer: "Amazon", price: 13.99, currency: "USD", url: "https://www.amazon.com/s?k=Hongdian+Black+Forest+fountain+pen", inStock: true, condition: "new" },
        ],
        msrp: 15,
        yearIntroduced: 2021,
      },
    ],
  },
  {
    id: "montegrappa",
    name: "Montegrappa",
    slug: "montegrappa",
    country: "Italy",
    description:
      "Founded in 1912 in Bassano del Grappa, Montegrappa is Italy's oldest pen maker. Known for their bold designs, resin bodies, and the distinctive Parola and Elmo collections.",
    website: "https://www.montegrappa.com",
    models: [
      {
        id: "montegrappa-elmo",
        name: "Elmo 01",
        slug: "elmo-01",
        description:
          "A modern classic inspired by the founder's childhood in the Dolomites. Clean lines, balanced weight, and a smooth steel nib make this an excellent entry to Italian luxury pens.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Resin",
        knownPrices: [
          { retailer: "Amazon", price: 135.00, currency: "USD", url: "https://www.amazon.com/s?k=Montegrappa+Elmo+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 145.00, currency: "USD", url: "https://www.goldspot.com/montegrappa/elmo/", inStock: true, condition: "new" },
        ],
        msrp: 145,
        yearIntroduced: 2019,
      },
      {
        id: "montegrappa-parola",
        name: "Parola",
        slug: "parola",
        description:
          "A mid-range Italian fountain pen with a distinctive clip and clean design. Available in resin and metal finishes. 14k gold nib option available.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Resin",
        knownPrices: [
          { retailer: "Amazon", price: 195.00, currency: "USD", url: "https://www.amazon.com/s?k=Montegrappa+Parola+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 210.00, currency: "USD", url: "https://www.goldspot.com/montegrappa/parola/", inStock: true, condition: "new" },
        ],
        msrp: 210,
        yearIntroduced: 2015,
      },
    ],
  },
  {
    id: "conklin",
    name: "Conklin",
    slug: "conklin",
    country: "United States",
    description:
      "Founded in 1898 by Roy Conklin in Toledo, Ohio. One of America's oldest pen manufacturers. Known for the Duragraph and Endura collections, and for pioneering the piston filling mechanism.",
    website: "https://www.conklinpens.com",
    models: [
      {
        id: "conklin-duragraph",
        name: "Duragraph",
        slug: "duragraph",
        description:
          "A robust demonstrator fountain pen with a faceted cap. The Duragraph offers a satisfying weight and smooth steel nib at a competitive price. Available in multiple resin colors.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Resin",
        knownPrices: [
          { retailer: "Amazon", price: 52.00, currency: "USD", url: "https://www.amazon.com/s?k=Conklin+Duragraph+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 54.00, currency: "USD", url: "https://www.gouletpens.com/collections/conklin-duragraph", inStock: true, condition: "new" },
        ],
        msrp: 55,
        msrpUrl: "https://www.conklinpens.com/collections/duragraph",
        yearIntroduced: 2014,
      },
      {
        id: "conklin-endura",
        name: "Endura",
        slug: "endura",
        description:
          "A modern classic with an Art Deco-inspired design. The Endura features a sturdy metal body with a spring-loaded clip. Comfortable for extended writing sessions.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Brass with lacquer finish",
        knownPrices: [
          { retailer: "Amazon", price: 68.00, currency: "USD", url: "https://www.amazon.com/s?k=Conklin+Endura+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 70.00, currency: "USD", url: "https://www.gouletpens.com/collections/conklin-endura", inStock: true, condition: "new" },
        ],
        msrp: 75,
        yearIntroduced: 2019,
      },
      {
        id: "conklin-all-american",
        name: "All American",
        slug: "all-american",
        description:
          "An oversized fountain pen that offers excellent value. The All American has a large #6 JoWo steel nib and generous ink capacity. Ideal for those who prefer a bigger pen.",
        nibOptions: ["Fine", "Medium", "Broad", "Stub"],
        fillingSystem: "Cartridge / Converter",
        material: "Resin",
        knownPrices: [
          { retailer: "Amazon", price: 48.00, currency: "USD", url: "https://www.amazon.com/s?k=Conklin+All+American+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 50.00, currency: "USD", url: "https://www.gouletpens.com/collections/conklin-all-american", inStock: true, condition: "new" },
        ],
        msrp: 55,
        yearIntroduced: 2018,
      },
    ],
  },
  {
    id: "monteverde",
    name: "Monteverde",
    slug: "monteverde",
    country: "United States",
    description:
      "Founded in 1999, Monteverde (Yafa Brands) is known for affordable fountain pens with innovative features. Their Ritma and Artista Crystal lines offer premium feel at mid-range prices.",
    website: "https://www.monteverdepens.com",
    models: [
      {
        id: "monteverde-ritma",
        name: "Ritma",
        slug: "ritma",
        description:
          "A magnetic-capped fountain pen with a minimalist hexagonal metal body. The magnetic cap posts securely with a satisfying snap. Smooth JoWo steel nib. Excellent build quality for the price.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Stainless steel",
        knownPrices: [
          { retailer: "Amazon", price: 42.00, currency: "USD", url: "https://www.amazon.com/s?k=Monteverde+Ritma+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 45.00, currency: "USD", url: "https://www.gouletpens.com/collections/monteverde-ritma", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 44.00, currency: "USD", url: "https://www.jetpens.com/Monteverde-Ritma-Fountain-Pen/ct/7568", inStock: true, condition: "new" },
        ],
        msrp: 48,
        yearIntroduced: 2020,
      },
      {
        id: "monteverde-artista-crystal",
        name: "Artista Crystal",
        slug: "artista-crystal",
        description:
          "A clear demonstrator fountain pen with a comfortable ergonomic grip section. The Artista Crystal lets you watch ink flow through the feed. Great value for a demonstrator pen.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Clear acrylic",
        knownPrices: [
          { retailer: "Amazon", price: 28.00, currency: "USD", url: "https://www.amazon.com/s?k=Monteverde+Artista+Crystal+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 30.00, currency: "USD", url: "https://www.gouletpens.com/collections/monteverde-artista-crystal", inStock: true, condition: "new" },
        ],
        msrp: 32,
        yearIntroduced: 2018,
      },
      {
        id: "monteverde-monza",
        name: "Monza",
        slug: "monza",
        description:
          "An affordable entry-level fountain pen with a classic cigar shape. The Monza is a great starter pen with a smooth steel nib and reliable converter system.",
        nibOptions: ["Fine", "Medium"],
        fillingSystem: "Cartridge / Converter",
        material: "Resin",
        knownPrices: [
          { retailer: "Amazon", price: 18.00, currency: "USD", url: "https://www.amazon.com/s?k=Monteverde+Monza+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 19.00, currency: "USD", url: "https://www.gouletpens.com/collections/monteverde-monza", inStock: true, condition: "new" },
        ],
        msrp: 20,
        yearIntroduced: 2021,
      },
    ],
  },
  {
    id: "esterbrook",
    name: "Esterbrook",
    slug: "esterbrook",
    country: "United States",
    description:
      "Founded in 1858 in Camden, New Jersey, Esterbrook was one of America's most prolific pen makers. Revived in 2018, the modern Esterbrook blends vintage heritage with modern manufacturing. Known for the popular Estie and JR Pocket Pen.",
    website: "https://www.esterbrookpens.com",
    models: [
      {
        id: "esterbrook-estie",
        name: "Estie",
        slug: "estie",
        description:
          "Esterbrook's flagship pen. A modern cigar-shaped design with a smooth JoWo steel nib. Available in dozens of colors and special editions. The Estie oversized offers a larger body for those who prefer a bigger pen.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Acrylic resin",
        knownPrices: [
          { retailer: "Amazon", price: 175.00, currency: "USD", url: "https://www.amazon.com/s?k=Esterbrook+Estie+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 175.00, currency: "USD", url: "https://www.goldspot.com/esterbrook/estie/", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 175.00, currency: "USD", url: "https://www.gouletpens.com/collections/esterbrook-estie", inStock: true, condition: "new" },
        ],
        msrp: 175,
        yearIntroduced: 2019,
      },
      {
        id: "esterbrook-jr",
        name: "JR Pocket Pen",
        slug: "jr",
        description:
          "A compact pocket pen that posts to a comfortable full size. The JR features a JoWo steel nib and comes in fun, colorful resins. Perfect as an EDC fountain pen.",
        nibOptions: ["Fine", "Medium"],
        fillingSystem: "Cartridge / Converter",
        material: "Acrylic resin",
        knownPrices: [
          { retailer: "Amazon", price: 75.00, currency: "USD", url: "https://www.amazon.com/s?k=Esterbrook+JR+Pocket+Pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 75.00, currency: "USD", url: "https://www.goldspot.com/esterbrook/jr/", inStock: true, condition: "new" },
        ],
        msrp: 75,
        yearIntroduced: 2021,
      },
    ],
  },
  {
    id: "benu",
    name: "Benu",
    slug: "benu",
    country: "United States",
    description:
      "Benu pens are known for their bold, eye-catching resin designs. Each pen features a unique, vibrant color pattern and a smooth JoWo steel nib. Benu pens are conversation starters.",
    website: "https://www.benupens.com",
    models: [
      {
        id: "benu-euphoria",
        name: "Euphoria",
        slug: "euphoria",
        description:
          "Benu's flagship pen. A large, bold resin pen with a distinctive shape and vibrant colors. Each Euphoria is unique due to the resin pour process. Smooth JoWo steel nib. A statement pen.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Resin",
        knownPrices: [
          { retailer: "Amazon", price: 165.00, currency: "USD", url: "https://www.amazon.com/s?k=Benu+Euphoria+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 165.00, currency: "USD", url: "https://www.goldspot.com/benu/euphoria/", inStock: true, condition: "new" },
        ],
        msrp: 165,
        yearIntroduced: 2019,
      },
      {
        id: "benu-talisman",
        name: "Talisman",
        slug: "talisman",
        description:
          "A slightly smaller pen than the Euphoria but equally vibrant. The Talisman features a cap with a decorative band and a comfortable grip section. Great for everyday writing with flair.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Resin",
        knownPrices: [
          { retailer: "Amazon", price: 135.00, currency: "USD", url: "https://www.amazon.com/s?k=Benu+Talisman+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 135.00, currency: "USD", url: "https://www.goldspot.com/benu/talisman/", inStock: true, condition: "new" },
        ],
        msrp: 135,
        yearIntroduced: 2021,
      },
      {
        id: "benu-pencils",
        name: "Briolette",
        slug: "briolette",
        description:
          "Benu's entry-level pen. A faceted resin body with a smooth steel nib. The Briolette offers Benu's signature bold design at a more accessible price point.",
        nibOptions: ["Fine", "Medium"],
        fillingSystem: "Cartridge / Converter",
        material: "Resin",
        knownPrices: [
          { retailer: "Amazon", price: 85.00, currency: "USD", url: "https://www.amazon.com/s?k=Benu+Briolette+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 85.00, currency: "USD", url: "https://www.goldspot.com/benu/briolette/", inStock: true, condition: "new" },
        ],
        msrp: 85,
        yearIntroduced: 2022,
      },
    ],
  },
  {
    id: "nahvalur",
    name: "Nahvalur",
    slug: "nahvalur",
    country: "China",
    description:
      "Nahvalur (formerly Narwhal) is a Chinese pen maker known for affordable piston-filling fountain pens with unique resin bodies. Their pens offer premium features at budget prices.",
    website: "https://www.nahvalur.com",
    models: [
      {
        id: "nahvalur-original-plus",
        name: "Original Plus",
        slug: "original-plus",
        description:
          "Nahvalur's flagship pen. A piston filler with a large ink capacity and a smooth JoWo steel nib. The Original Plus features a demonstrator body that shows off the ink color.",
        nibOptions: ["Fine", "Medium", "Broad", "Stub 1.1"],
        fillingSystem: "Piston",
        material: "Acrylic resin",
        knownPrices: [
          { retailer: "Amazon", price: 55.00, currency: "USD", url: "https://www.amazon.com/s?k=Nahvalur+Original+Plus+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 55.00, currency: "USD", url: "https://www.gouletpens.com/collections/nahvalur-original-plus", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 55.00, currency: "USD", url: "https://www.jetpens.com/Nahvalur-Original-Plus-Fountain-Pen/ct/10029", inStock: true, condition: "new" },
        ],
        msrp: 55,
        yearIntroduced: 2021,
      },
      {
        id: "nahvalur-zhuo-yue",
        name: "Zhuo Yue",
        slug: "zhuo-yue",
        description:
          "A slim, elegant piston filler with a unique clip design. The Zhuo Yue offers a more refined look than the Original Plus while maintaining Nahvalur's signature smooth nib and large ink capacity.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Piston",
        material: "Acrylic resin",
        knownPrices: [
          { retailer: "Amazon", price: 45.00, currency: "USD", url: "https://www.amazon.com/s?k=Nahvalur+Zhuo+Yue+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 45.00, currency: "USD", url: "https://www.gouletpens.com/collections/nahvalur-zhuo-yue", inStock: true, condition: "new" },
        ],
        msrp: 45,
        yearIntroduced: 2022,
      },
    ],
  },
  {
    id: "opus-88",
    name: "Opus 88",
    slug: "opus-88",
    country: "Taiwan",
    description:
      "Opus 88 makes affordable eyedropper fountain pens with massive ink capacity. Their pens use a shut-off valve mechanism to prevent leaks, making eyedropper filling practical and worry-free.",
    website: "https://www.opus88.com",
    models: [
      {
        id: "opus-88-koloro",
        name: "Koloro",
        slug: "koloro",
        description:
          "Opus 88's most popular model. A colorful eyedropper pen with a shut-off valve and smooth JoWo steel nib. The Koloro holds a massive amount of ink and comes in dozens of color combinations.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Eyedropper with shut-off valve",
        material: "Acrylic resin",
        knownPrices: [
          { retailer: "Amazon", price: 62.00, currency: "USD", url: "https://www.amazon.com/s?k=Opus+88+Koloro+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 65.00, currency: "USD", url: "https://www.gouletpens.com/collections/opus-88-koloro", inStock: true, condition: "new" },
        ],
        msrp: 65,
        yearIntroduced: 2019,
      },
      {
        id: "opus-88-flora",
        name: "Flora",
        slug: "flora",
        description:
          "A larger eyedropper pen with a floral-inspired cap design. The Flora offers the same shut-off valve mechanism as the Koloro but in a bigger, more comfortable body for extended writing sessions.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Eyedropper with shut-off valve",
        material: "Acrylic resin",
        knownPrices: [
          { retailer: "Amazon", price: 72.00, currency: "USD", url: "https://www.amazon.com/s?k=Opus+88+Flora+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 75.00, currency: "USD", url: "https://www.gouletpens.com/collections/opus-88-flora", inStock: true, condition: "new" },
        ],
        msrp: 75,
        yearIntroduced: 2020,
      },
    ],
  },
  {
    id: "pineider",
    name: "Pineider",
    slug: "pineider",
    country: "Italy",
    description: "Founded in 1774 in Florence, Pineider is one of Italy's oldest luxury stationery houses. They have supplied pen and paper to Napoleon, Stendhal, and Dante. Their modern fountain pen line features stunning Italian design with innovative magnetic closure systems and hand-finished resin bodies.",
    website: "https://www.pineider.com",
    models: [
      {
        id: "pineider-avatar",
        name: "Avatar",
        slug: "avatar",
        description: "Pineider's flagship fountain pen featuring a revolutionary magnetic cap closure system. The Avatar is made from hand-turned Italian resin with a 14k gold nib by Bock. Available in dozens of stunning colors inspired by Italian landscapes and culture.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Hand-turned Italian resin / Gold trim",
        knownPrices: [
          { retailer: "Amazon", price: 289.00, currency: "USD", url: "https://www.amazon.com/s?k=Pineider+Avatar+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 325.00, currency: "USD", url: "https://www.goldspot.com/pineider/avatar/", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 325.00, currency: "USD", url: "https://www.gouletpens.com/search?q=pineider+avatar", inStock: true, condition: "new" },
        ],
        msrp: 325,
        yearIntroduced: 2018,
      },
      {
        id: "pineider-la-grande-bellezza",
        name: "La Grande Bellezza",
        slug: "la-grande-bellezza",
        description: "An oversized luxury fountain pen inspired by Florence's architectural grandeur. The La Grande Bellezza features a massive 18k gold nib, a piston filler for high ink capacity, and a hand-finished resin barrel with Pineider's signature magnetic closure. A statement pen for serious writers.",
        nibOptions: ["Fine", "Medium", "Broad", "Double Broad"],
        fillingSystem: "Piston",
        material: "Hand-turned Italian resin / 18k gold nib / Gold trim",
        knownPrices: [
          { retailer: "Amazon", price: 489.00, currency: "USD", url: "https://www.amazon.com/s?k=Pineider+La+Grande+Bellezza+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 549.00, currency: "USD", url: "https://www.goldspot.com/pineider/la-grande-bellezza/", inStock: true, condition: "new" },
        ],
        msrp: 549,
        yearIntroduced: 2020,
      },
    ],
  },
  {
    id: "gravitas",
    name: "Gravitas",
    slug: "gravitas",
    country: "Ireland",
    description: "Gravitas is an Irish fountain pen maker known for precision-machined pens using high-grade materials like titanium, zirconium, and Ultem. Their pens are beloved by EDC enthusiasts for their durability and industrial design.",
    website: "https://gravitaspens.com",
    models: [
      {
        id: "gravitas-pensky",
        name: "Pensky",
        slug: "pensky",
        description: "Gravitas' flagship pen. A precision-machined titanium pen with a snap cap and a smooth JoWo #6 steel nib. The Pensky features a knurled grip section for comfortable writing and a clean, minimalist design.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Titanium",
        knownPrices: [
          { retailer: "Gravitas Pens", price: 185.00, currency: "USD", url: "https://gravitaspens.com/collections/pensky", inStock: true, condition: "new" },
        ],
        msrp: 185,
        yearIntroduced: 2021,
      },
      {
        id: "gravitas-soldier",
        name: "Soldier",
        slug: "soldier",
        description: "A compact, rugged pocket pen made from zirconium or titanium. The Soldier features a unique bolt-action cap mechanism and a smooth steel nib. Perfect for EDC and on-the-go writing.",
        nibOptions: ["Extra Fine", "Fine", "Medium"],
        fillingSystem: "Cartridge / Converter",
        material: "Zirconium / Titanium",
        knownPrices: [
          { retailer: "Gravitas Pens", price: 165.00, currency: "USD", url: "https://gravitaspens.com/collections/soldier", inStock: true, condition: "new" },
        ],
        msrp: 165,
        yearIntroduced: 2022,
      },
    ],
  },
  {
    id: "ensso",
    name: "Ensso",
    slug: "ensso",
    country: "Japan",
    description: "Ensso is a Japanese design studio that makes minimalist fountain pens. Their design philosophy is 'less is more' — clean lines, high-quality materials, and exceptional nibs. Based in Tokyo.",
    website: "https://ensso.com",
    models: [
      {
        id: "ensso-piuma",
        name: "Piuma",
        slug: "piuma",
        description: "Ensso's flagship pen. The Piuma is a minimalist aluminum fountain pen with a smooth Schmidt steel nib. Its clean, understated design and comfortable weight make it an excellent daily writer.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Anodized aluminum",
        knownPrices: [
          { retailer: "Amazon", price: 79.00, currency: "USD", url: "https://www.amazon.com/s?k=Ensso+Piuma+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Ensso", price: 79.00, currency: "USD", url: "https://ensso.com/products/piuma-fountain-pen", inStock: true, condition: "new" },
        ],
        msrp: 79,
        yearIntroduced: 2018,
      },
      {
        id: "ensso-uno",
        name: "Uno",
        slug: "uno",
        description: "A compact, minimalist pen designed for quick notes and on-the-go writing. The Uno is a slim aluminum pen with a satisfying click mechanism and a fine steel nib. Perfect for pocket carry.",
        nibOptions: ["Fine", "Medium"],
        fillingSystem: "Cartridge",
        material: "Anodized aluminum",
        knownPrices: [
          { retailer: "Ensso", price: 49.00, currency: "USD", url: "https://ensso.com/products/uno-fountain-pen", inStock: true, condition: "new" },
        ],
        msrp: 49,
        yearIntroduced: 2019,
      },
    ],
  },
  {
    id: "namiki",
    name: "Namiki",
    slug: "namiki",
    country: "Japan",
    description:
      "Namiki is Pilot's ultra-luxury brand, featuring hand-applied Maki-e lacquer art. Each pen is a wearable work of art, with prices ranging from hundreds to tens of thousands of dollars. Namiki represents the pinnacle of Japanese pen craftsmanship.",
    website: "https://www.pilot-namiki.com",
    models: [
      {
        id: "namiki-yukari",
        name: "Yukari",
        slug: "yukari",
        description:
          "The Yukari is Namiki's most popular luxury pen, featuring intricate Maki-e lacquer artwork depicting seasonal themes like cherry blossoms, Mt. Fuji, and cranes. Made with a 14k gold nib and brass body beneath layers of lacquer.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Brass with Maki-e lacquer",
        knownPrices: [
          { retailer: "Amazon", price: 250.00, currency: "USD", url: "https://www.amazon.com/s?k=Namiki+Yukari+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 280.00, currency: "USD", url: "https://www.jetpens.com/Namiki-Yukari-Fountain-Pen/ct/4468", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 299.95, currency: "USD", url: "https://www.gouletpens.com/collections/namiki-yukari", inStock: true, condition: "new" },
        ],
        msrp: 300,
        msrpUrl: "https://www.pilot-namiki.com/namiki/yukari",
        yearIntroduced: 2000,
      },
      {
        id: "namiki-nippon-art",
        name: "Nippon Art",
        slug: "nippon-art",
        description:
          "The Nippon Art series showcases traditional Japanese Maki-e techniques on a wider pen body. Features distinctive motifs drawn from Japanese mythology, nature, and cultural heritage.",
        nibOptions: ["Fine", "Medium"],
        fillingSystem: "Cartridge / Converter",
        material: "Brass with Maki-e lacquer",
        knownPrices: [
          { retailer: "Amazon", price: 200.00, currency: "USD", url: "https://www.amazon.com/s?k=Namiki+Nippon+Art+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 220.00, currency: "USD", url: "https://www.jetpens.com/Namiki-Nippon-Art-Fountain-Pen/ct/4470", inStock: true, condition: "new" },
        ],
        msrp: 225,
        yearIntroduced: 2001,
      },
      {
        id: "namiki-emperor",
        name: "Emperor",
        slug: "emperor",
        description:
          "The Emperor is Namiki's flagship, the largest production fountain pen in the world at 30cm long. Entirely hand-decorated with the finest Maki-e lacquerwork, it is considered one of the most prestigious writing instruments ever made.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Piston (large capacity)",
        material: "Ebonite with Maki-e lacquer",
        knownPrices: [
          { retailer: "Goulet Pens", price: 2500.00, currency: "USD", url: "https://www.gouletpens.com/collections/namiki-emperor", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 2750.00, currency: "USD", url: "https://www.goldspot.com/namiki/emperor/", inStock: true, condition: "new" },
        ],
        msrp: 3000,
        yearIntroduced: 1930,
      },
    ],
  },
  {
    id: "stipula",
    name: "Stipula",
    slug: "stipula",
    country: "Italy",
    description:
      "Founded in Florence in 1973, Stipula is known for handcrafted Italian fountain pens with distinctive celluloid bodies and titanium nibs. They combine artisanal Italian craftsmanship with innovative filling systems.",
    website: "https://www.stipula.com",
    models: [
      {
        id: "stipula-ventidue",
        name: "Ventidue",
        slug: "ventidue",
        description:
          "The Ventidue (meaning 'twenty-two' in Italian) is Stipula's iconic piston-filler made from colorful celluloid. Features a titanium nib and the brand's signature oversized ink window. A cult favorite among Italian pen enthusiasts.",
        nibOptions: ["Fine", "Medium", "Broad", "Flex"],
        fillingSystem: "Piston",
        material: "Celluloid",
        knownPrices: [
          { retailer: "Amazon", price: 120.00, currency: "USD", url: "https://www.amazon.com/s?k=Stipula+Ventidue+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 139.00, currency: "USD", url: "https://www.gouletpens.com/collections/stipula-ventidue", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 135.00, currency: "USD", url: "https://www.goldspot.com/stipula/ventidue/", inStock: true, condition: "new" },
        ],
        msrp: 149,
        yearIntroduced: 1995,
      },
      {
        id: "stipula-passione",
        name: "Passione",
        slug: "passione",
        description:
          "The Passione is Stipula's entry-level fountain pen, made from durable resin with a steel nib. It offers the classic Italian pen feel at an accessible price point with a converter filling system.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Resin",
        knownPrices: [
          { retailer: "Amazon", price: 45.00, currency: "USD", url: "https://www.amazon.com/s?k=Stipula+Passione+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 55.00, currency: "USD", url: "https://www.gouletpens.com/collections/stipula-passione", inStock: true, condition: "new" },
        ],
        msrp: 59,
        yearIntroduced: 2010,
      },
    ],
  },
  {
    id: "caran-dache",
    name: "Caran d'Ache",
    slug: "caran-dache",
    country: "Switzerland",
    description:
      "Swiss luxury writing instruments since 1915. Caran d'Ache is known for their meticulous craftsmanship, vibrant colors, and premium materials. Their fountain pens are works of art with exceptional nib quality.",
    website: "https://www.carandache.com/ch/en",
    models: [
      {
        id: "caran-dache-ecridor",
        name: "Ecridor",
        slug: "ecridor",
        description:
          "A sleek, modern hexagonal fountain pen with a rhodium-plated finish. The Ecridor combines Swiss precision with contemporary design. The 18k gold nib provides a smooth, consistent writing experience.",
        nibOptions: ["Fine", "Medium"],
        fillingSystem: "Cartridge / Converter",
        material: "Rhodium-plated brass",
        knownPrices: [
          { retailer: "Amazon", price: 250.00, currency: "USD", url: "https://www.amazon.com/s?k=Caran+d%27Ache+Ecridor+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 295.00, currency: "USD", url: "https://www.goldspot.com/caran-dache/ecridor/", inStock: true, condition: "new" },
        ],
        msrp: 310,
        yearIntroduced: 2003,
      },
      {
        id: "caran-dache-leman",
        name: "Léman",
        slug: "leman",
        description:
          "The Léman is Caran d'Ache's flagship fountain pen, featuring a rounded barrel with lacquer finish and an 18k gold nib. Named after Lake Geneva, it embodies Swiss luxury and craftsmanship.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Lacquered brass",
        knownPrices: [
          { retailer: "Amazon", price: 385.00, currency: "USD", url: "https://www.amazon.com/s?k=Caran+d%27Ache+Leman+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 425.00, currency: "USD", url: "https://www.goldspot.com/caran-dache/leman/", inStock: true, condition: "new" },
        ],
        msrp: 450,
        yearIntroduced: 2000,
      },
    ],
  },
  {
    id: "rotring",
    name: "Rotring",
    slug: "rotring",
    country: "Germany",
    description:
      "German precision writing instruments since 1928. Rotring is famous for their technical drawing pens and the iconic 600 and 800 series fountain pens with their distinctive hexagonal barrels and red ring detail.",
    website: "https://www.rotring.com",
    models: [
      {
        id: "rotring-600",
        name: "600",
        slug: "600",
        description:
          "The Rotring 600 is a precision-engineered fountain pen with a brass body and hexagonal barrel that prevents rolling. The knurled grip section and red ring detail are iconic design elements. A favorite among architects and engineers.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Brass",
        knownPrices: [
          { retailer: "Amazon", price: 99.99, currency: "USD", url: "https://www.amazon.com/s?k=Rotring+600+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 110.00, currency: "USD", url: "https://www.jetpens.com/Rotring-600-Fountain-Pen/ct/3090", inStock: true, condition: "new" },
        ],
        msrp: 120,
        yearIntroduced: 1988,
      },
      {
        id: "rotring-800",
        name: "800",
        slug: "800",
        description:
          "The premium Rotring 800 features a retractable nib mechanism (a rare feature in fountain pens) and a brass body with a weightier feel than the 600. The retractable nib protects it during travel.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Brass",
        knownPrices: [
          { retailer: "Amazon", price: 195.00, currency: "USD", url: "https://www.amazon.com/s?k=Rotring+800+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 210.00, currency: "USD", url: "https://www.jetpens.com/Rotring-800-Fountain-Pen/ct/6605", inStock: true, condition: "new" },
        ],
        msrp: 230,
        yearIntroduced: 1990,
      },
    ],
  },
  {
    id: "asvine",
    name: "Asvine",
    slug: "asvine",
    country: "China",
    description:
      "Asvine is a Chinese fountain pen manufacturer that has gained a cult following for producing high-quality piston-filling pens at remarkably affordable prices. Their C80 and P36 models are widely praised for smooth nibs and solid build quality that rivals pens costing three times as much.",
    website: "https://www.amazon.com/stores/ASVINE/page/D8C1E2AD-783A-4FC2-B0C7-39D5B3E5D8A8",
    models: [
      {
        id: "asvine-c80",
        name: "C80",
        slug: "c80",
        description:
          "A piston-filling fountain pen with a 14k gold-plated steel nib. The C80 features a frosted acrylic body in multiple colors and a smooth piston mechanism. Often compared to pens costing $100+.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Piston",
        material: "Acrylic",
        knownPrices: [
          { retailer: "Amazon", price: 35.99, currency: "USD", url: "https://www.amazon.com/s?k=Asvine+C80+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Amazon", price: 18.00, currency: "USD", url: "https://www.amazon.com/s?k=Asvine+C80+fountain+pen+used", inStock: true, condition: "used" },
        ],
        msrp: 39.99,
        yearIntroduced: 2023,
      },
      {
        id: "asvine-p36",
        name: "P36",
        slug: "p36",
        description:
          "A compact piston-filling pocket pen with a stainless steel nib. The P36 is known for its smooth writing experience and excellent value. Features a sleek, modern design with an acrylic body.",
        nibOptions: ["Extra Fine", "Fine", "Medium"],
        fillingSystem: "Piston",
        material: "Acrylic",
        knownPrices: [
          { retailer: "Amazon", price: 29.99, currency: "USD", url: "https://www.amazon.com/s?k=Asvine+P36+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Amazon", price: 15.00, currency: "USD", url: "https://www.amazon.com/s?k=Asvine+P36+fountain+pen+used", inStock: true, condition: "used" },
        ],
        msrp: 34.99,
        yearIntroduced: 2023,
      },
    ],
  },
  {
    id: "penbbs",
    name: "PenBBS",
    slug: "penbbs",
    country: "China",
    description:
      "PenBBS is a Chinese stationery company that started as an online forum for fountain pen enthusiasts before launching their own line of pens. Known for beautiful acrylic bodies, smooth nibs, and innovative filling systems, PenBBS pens are a favorite among budget-conscious collectors.",
    website: "https://www.penbbs.com",
    models: [
      {
        id: "penbbs-456",
        name: "456",
        slug: "456",
        description:
          "A vacuum-filling fountain pen with a #6 steel nib. The 456 features stunning acrylic bodies in dozens of colorways and a unique vacuum filling mechanism that holds a large ink capacity.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad", "Stub 1.1"],
        fillingSystem: "Vacuum",
        material: "Acrylic",
        knownPrices: [
          { retailer: "Amazon", price: 45.00, currency: "USD", url: "https://www.amazon.com/s?k=PenBBS+456+fountain+pen", inStock: true, condition: "new" },
          { retailer: "PenBBS", price: 39.00, currency: "USD", url: "https://www.penbbs.com/product/penbbs-456", inStock: true, condition: "new" },
        ],
        msrp: 45.00,
        yearIntroduced: 2020,
      },
      {
        id: "penbbs-355",
        name: "355",
        slug: "355",
        description:
          "A piston-filling fountain pen with a #6 steel nib. The 355 is PenBBS's most popular model, offering smooth piston operation, beautiful acrylic bodies, and a comfortable writing experience at an unbeatable price.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Piston",
        material: "Acrylic",
        knownPrices: [
          { retailer: "Amazon", price: 32.00, currency: "USD", url: "https://www.amazon.com/s?k=PenBBS+355+fountain+pen", inStock: true, condition: "new" },
          { retailer: "PenBBS", price: 28.00, currency: "USD", url: "https://www.penbbs.com/product/penbbs-355", inStock: true, condition: "new" },
        ],
        msrp: 32.00,
        yearIntroduced: 2019,
      },
      {
        id: "penbbs-323",
        name: "323",
        slug: "323",
        description:
          "A lever-filling fountain pen with a fine steel nib. The 323 features a compact, retro-inspired design with a metal body and is one of the most affordable entry points into the PenBBS ecosystem.",
        nibOptions: ["Fine", "Medium"],
        fillingSystem: "Lever",
        material: "Metal / Acrylic",
        knownPrices: [
          { retailer: "Amazon", price: 18.00, currency: "USD", url: "https://www.amazon.com/s?k=PenBBS+323+fountain+pen", inStock: true, condition: "new" },
        ],
        msrp: 20.00,
        yearIntroduced: 2021,
      },
    ],
  },
  {
    id: "wancher",
    name: "Wancher",
    slug: "wancher",
    country: "Japan",
    description:
      "Founded in 1915, Wancher is a Japanese pen maker known for affordable, well-crafted fountain pens with interesting filling systems. Their Dream Pen and Storia models are popular among enthusiasts seeking Japanese quality at accessible prices.",
    website: "https://www.wancherpen.com",
    models: [
      {
        id: "wancher-dream-pen",
        name: "Dream Pen",
        slug: "dream-pen",
        description:
          "A piston-filling fountain pen with a 14k gold nib. The Dream Pen offers smooth writing, generous ink capacity, and a classic Japanese aesthetic. Available in multiple resin colors with a comfortable, well-balanced body.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Piston",
        material: "Resin",
        knownPrices: [
          { retailer: "Amazon", price: 120.00, currency: "USD", url: "https://www.amazon.com/s?k=Wancher+Dream+Pen+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 125.00, currency: "USD", url: "https://www.jetpens.com/Wancher-Dream-Pen-Fountain-Pen/ct/6254", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 129.00, currency: "USD", url: "https://www.gouletpens.com/collections/wancher-dream-pen", inStock: true, condition: "new" },
        ],
        msrp: 130.00,
        msrpUrl: "https://www.wancherpen.com",
        yearIntroduced: 2010,
      },
      {
        id: "wancher-storia",
        name: "Storia",
        slug: "storia",
        description:
          "An affordable piston-filling fountain pen with a steel nib. The Storia is Wancher's entry-level pen, offering excellent value with a comfortable grip and smooth writing experience. Popular among students and beginners.",
        nibOptions: ["Fine", "Medium"],
        fillingSystem: "Piston",
        material: "ABS plastic",
        knownPrices: [
          { retailer: "Amazon", price: 85.00, currency: "USD", url: "https://www.amazon.com/s?k=Wancher+Storia+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 89.00, currency: "USD", url: "https://www.jetpens.com/Wancher-Storia-Fountain-Pen/ct/6255", inStock: true, condition: "new" },
        ],
        msrp: 90.00,
        msrpUrl: "https://www.wancherpen.com",
        yearIntroduced: 2015,
      },
    ],
  },
  {
    id: "conway-stewart",
    name: "Conway Stewart",
    slug: "conway-stewart",
    country: "United Kingdom",
    description:
      "Founded in 1905 in Plymouth, England, Conway Stewart is one of Britain's most storied fountain pen manufacturers. Known for their handcrafted ebonite and resin pens with exceptional gold nibs. The brand went into administration in 2018 but their pens remain highly sought after by collectors for their classic British craftsmanship.",
    website: "https://www.conwaystewartpens.com",
    models: [
      {
        id: "conway-stewart-winston",
        name: "Winston",
        slug: "winston",
        description:
          "Conway Stewart's flagship model, named after Winston Churchill. A large, beautifully crafted fountain pen featuring a hand-turned resin body and a 18k gold nib. Available in dozens of stunning resin colors. A quintessentially British pen with exceptional build quality and writing performance.",
        nibOptions: ["Fine", "Medium", "Broad", "Stub"],
        fillingSystem: "Piston",
        material: "Hand-turned resin / 18k gold nib / Gold trim",
        knownPrices: [
          { retailer: "Amazon", price: 295.00, currency: "USD", url: "https://www.amazon.com/s?k=Conway+Stewart+Winston+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 325.00, currency: "USD", url: "https://www.goldspot.com/conway-stewart/winston/", inStock: true, condition: "new" },
        ],
        msrp: 325,
        yearIntroduced: 2005,
      },
      {
        id: "conway-stewart-no388",
        name: "No. 388",
        slug: "no-388",
        description:
          "A compact, beautifully proportioned fountain pen with a steel nib and cartridge/converter filling. The No. 388 features the same hand-turned resin bodies as the larger models, offering Conway Stewart quality at a more accessible price. A great introduction to British pen craftsmanship.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter",
        material: "Hand-turned resin / Chrome trim",
        knownPrices: [
          { retailer: "Amazon", price: 150.00, currency: "USD", url: "https://www.amazon.com/s?k=Conway+Stewart+388+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 165.00, currency: "USD", url: "https://www.goldspot.com/conway-stewart/no-388/", inStock: true, condition: "new" },
        ],
        msrp: 165,
        yearIntroduced: 2008,
      },
    ],
  },
  {
    id: "bexley",
    name: "Bexley",
    slug: "bexley",
    country: "USA",
    description:
      "Bexley is an American fountain pen manufacturer known for their classic, well-built pens with a focus on American craftsmanship. Their President and Ohio models are favorites among pen enthusiasts for their vintage aesthetics and reliable performance.",
    website: "https://www.bexleypens.com",
    models: [
      {
        id: "bexley-president",
        name: "The President",
        slug: "the-president",
        description:
          "A classic American fountain pen with a 14k gold nib and piston filling system. The President features a traditional cigar shape with a brushed metal finish, offering a premium writing experience at a mid-range price.",
        nibOptions: ["Fine", "Medium", "Broad", "Stub"],
        fillingSystem: "Piston",
        material: "Brass / Acrylic",
        knownPrices: [
          { retailer: "Amazon", price: 200.00, currency: "USD", url: "https://www.amazon.com/s?k=Bexley+President+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 210.00, currency: "USD", url: "https://www.gouletpens.com/collections/bexley-president", inStock: true, condition: "new" },
          { retailer: "Goldspot Pens", price: 199.95, currency: "USD", url: "https://www.goldspot.com/bexley/president/", inStock: true, condition: "new" },
        ],
        msrp: 225.00,
        msrpUrl: "https://www.bexleypens.com",
        yearIntroduced: 2008,
      },
      {
        id: "bexley-ohio",
        name: "Ohio",
        slug: "ohio",
        description:
          "A compact, lightweight fountain pen with a steel nib and cartridge/converter filling system. The Ohio is Bexley's entry-level pen, offering American-made quality at an accessible price point.",
        nibOptions: ["Fine", "Medium"],
        fillingSystem: "Cartridge / Converter",
        material: "Acrylic",
        knownPrices: [
          { retailer: "Amazon", price: 150.00, currency: "USD", url: "https://www.amazon.com/s?k=Bexley+Ohio+fountain+pen", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 155.00, currency: "USD", url: "https://www.gouletpens.com/collections/bexley-ohio", inStock: true, condition: "new" },
        ],
        msrp: 160.00,
        msrpUrl: "https://www.bexleypens.com",
        yearIntroduced: 2012,
      },
    ],
  },
  {
    id: "edison",
    name: "Edison",
    slug: "edison",
    country: "United States",
    description:
      "Edison Pen Company, founded by pen restorer Brian Gray, is known for handcrafted American fountain pens with custom-ground nibs. Each pen is made to order with a wide range of acrylic and ebonite materials.",
    website: "https://edisonpen.com",
    models: [
      {
        id: "edison-beaumont",
        name: "Beaumont",
        slug: "beaumont",
        description:
          "A mid-size fountain pen with a classic cigar shape. Available in dozens of acrylic colors, with a steel or 14k gold nib. The Beaumont is Edison's most popular model, offering custom pen making at accessible prices.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad", "Stub 1.1mm"],
        fillingSystem: "Cartridge / Converter (Standard International)",
        material: "Acrylic",
        knownPrices: [
          { retailer: "Edison Pen Co.", price: 149.00, currency: "USD", url: "https://edisonpen.com/products/beaumont", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 155.00, currency: "USD", url: "https://www.gouletpens.com/collections/edison-beaumont", inStock: true, condition: "new" },
        ],
        msrp: 149.00,
        msrpUrl: "https://edisonpen.com/products/beaumont",
        yearIntroduced: 2010,
      },
      {
        id: "edison-collier",
        name: "Collier",
        slug: "collier",
        description:
          "Edison's larger pen with a girthier grip section. The Collier is designed for extended writing sessions. Available in ebonite and acrylic with custom nib grinding options.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad", "Stub 1.1mm"],
        fillingSystem: "Piston",
        material: "Ebonite / Acrylic",
        knownPrices: [
          { retailer: "Edison Pen Co.", price: 199.00, currency: "USD", url: "https://edisonpen.com/products/collier", inStock: true, condition: "new" },
        ],
        msrp: 199.00,
        msrpUrl: "https://edisonpen.com/products/collier",
        yearIntroduced: 2012,
      },
    ],
  },
  // === Budget Brands ===
  {
    id: "hero",
    name: "Hero",
    slug: "hero",
    country: "China",
    description:
      "One of China's oldest and most recognized pen brands. Known for affordable fountain pens inspired by classic Western designs. The Hero 616 is one of the most widely used fountain pens in the world.",
    website: "https://www.hero.com.cn",
    models: [
      {
        id: "hero-616",
        name: "616",
        slug: "616",
        description:
          "A Parker 51-inspired aerometric filler that's been in production for decades. The hooded nib prevents drying and the aerometric filler is reliable. At $2, it's nearly free.",
        nibOptions: ["Fine", "Medium"],
        fillingSystem: "Aerometric",
        material: "Brass / Plastic",
        knownPrices: [
          { retailer: "Amazon", price: 2.50, currency: "USD", url: "https://www.amazon.com/s?k=hero+616+fountain+pen", inStock: true, condition: "new" },
          { retailer: "eBay", price: 1.99, currency: "USD", url: "https://www.ebay.com/sch/i.html?_nkw=hero+616+fountain+pen", inStock: true, condition: "new" },
        ],
        msrp: 3,
        yearIntroduced: 1960,
      },
    ],
  },
  {
    id: "wing-sung",
    name: "Wing Sung",
    slug: "wing-sung",
    country: "China",
    description:
      "Chinese pen manufacturer known for affordable fountain pens with surprisingly good build quality. Their piston-fillers are particularly popular in the budget pen community.",
    website: "https://www.wingsung.com",
    models: [
      {
        id: "wing-sung-6359",
        name: "6359",
        slug: "6359",
        description:
          "A Lamy 2000-inspired piston filler at a fraction of the cost. The hooded nib writes smoothly and the piston mechanism is surprisingly good.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Piston",
        material: "Acrylic resin",
        knownPrices: [
          { retailer: "Amazon", price: 5.00, currency: "USD", url: "https://www.amazon.com/s?k=wing+sung+6359+fountain+pen", inStock: true, condition: "new" },
          { retailer: "eBay", price: 4.50, currency: "USD", url: "https://www.ebay.com/sch/i.html?_nkw=wing+sung+6359", inStock: true, condition: "new" },
        ],
        msrp: 6,
        yearIntroduced: 2018,
      },
    ],
  },
  {
    id: "dollar",
    name: "Dollar",
    slug: "dollar",
    country: "Pakistan",
    description:
      "Pakistani pen manufacturer producing affordable fountain pens since the 1950s. Known for reliable piston-filling mechanisms at extremely low prices.",
    website: "https://www.dollarpens.com",
    models: [
      {
        id: "dollar-717i",
        name: "717i",
        slug: "717i",
        description:
          "A piston-filling fountain pen with a surprisingly smooth mechanism for the price. The Fine nib writes well on most papers.",
        nibOptions: ["Fine", "Medium"],
        fillingSystem: "Piston",
        material: "ABS plastic",
        knownPrices: [
          { retailer: "Amazon", price: 2.50, currency: "USD", url: "https://www.amazon.com/s?k=dollar+717i+fountain+pen", inStock: true, condition: "new" },
          { retailer: "eBay", price: 2.00, currency: "USD", url: "https://www.ebay.com/sch/i.html?_nkw=dollar+717i+fountain+pen", inStock: true, condition: "new" },
        ],
        msrp: 3,
        yearIntroduced: 2005,
      },
    ],
  },
  {
    id: "majohn",
    name: "Moonman / Majohn",
    slug: "majohn",
    country: "China",
    description:
      "Moonman (rebranded as Majohn) is one of the most popular Chinese fountain pen brands. Known for high-quality build at ultra-budget prices, with innovative designs and reliable piston-fill mechanisms.",
    website: "https://www.majohn.com",
    models: [
      {
        id: "majohn-m2",
        name: "M2",
        slug: "m2",
        description:
          "A transparent demonstrator piston filler with a smooth steel nib. Huge ink capacity and a satisfying filling mechanism. Often compared to the TWSBI Eco at a fraction of the price.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Piston",
        material: "Acrylic",
        knownPrices: [
          { retailer: "Amazon", price: 18.99, currency: "USD", url: "https://www.amazon.com/s?k=majohn+m2+fountain+pen", inStock: true, condition: "new" },
          { retailer: "eBay", price: 16.50, currency: "USD", url: "https://www.ebay.com/sch/i.html?_nkw=majohn+m2+fountain+pen", inStock: true, condition: "new" },
          { retailer: "AliExpress", price: 14.00, currency: "USD", url: "https://www.aliexpress.com/wholesale?SearchText=majohn+m2+fountain+pen", inStock: true, condition: "new" },
        ],
        msrp: 25,
        yearIntroduced: 2018,
      },
      {
        id: "majohn-a1",
        name: "A1",
        slug: "a1",
        description:
          "A retractable nib fountain pen inspired by the Pilot Vanishing Point. Click mechanism deploys the nib. Surprisingly smooth for the price, available in many finishes.",
        nibOptions: ["Fine", "Medium"],
        fillingSystem: "Cartridge / Converter",
        material: "Aluminum",
        knownPrices: [
          { retailer: "Amazon", price: 29.99, currency: "USD", url: "https://www.amazon.com/s?k=majohn+a1+fountain+pen", inStock: true, condition: "new" },
          { retailer: "eBay", price: 25.00, currency: "USD", url: "https://www.ebay.com/sch/i.html?_nkw=majohn+a1+fountain+pen", inStock: true, condition: "new" },
          { retailer: "AliExpress", price: 22.00, currency: "USD", url: "https://www.aliexpress.com/wholesale?SearchText=majohn+a1+fountain+pen", inStock: true, condition: "new" },
        ],
        msrp: 35,
        yearIntroduced: 2022,
      },
      {
        id: "majohn-c1",
        name: "C1",
        slug: "c1",
        description:
          "A solid brass pocket pen with a smooth #5 nib. Compact and heavy for its size, with a screw cap. Great everyday carry pen for the price.",
        nibOptions: ["Extra Fine", "Fine", "Medium"],
        fillingSystem: "Cartridge / Converter",
        material: "Brass",
        knownPrices: [
          { retailer: "Amazon", price: 14.99, currency: "USD", url: "https://www.amazon.com/s?k=majohn+c1+fountain+pen", inStock: true, condition: "new" },
          { retailer: "eBay", price: 12.50, currency: "USD", url: "https://www.ebay.com/sch/i.html?_nkw=majohn+c1+fountain+pen", inStock: true, condition: "new" },
          { retailer: "AliExpress", price: 11.00, currency: "USD", url: "https://www.aliexpress.com/wholesale?SearchText=majohn+c1+fountain+pen", inStock: true, condition: "new" },
        ],
        msrp: 20,
        yearIntroduced: 2020,
      },
    ],
  },
  {
    id: "pilot-custom-heritage",
    name: "Pilot Custom Heritage",
    slug: "pilot-custom-heritage",
    country: "Japan",
    description:
      "Pilot's Custom Heritage line features classic, conservative designs with exceptional 14k and 18k gold nibs. The Custom Heritage 912 is a favorite among writers for its reliable piston filling and versatile nib options including Posting and Falcon nibs.",
    website: "https://www.pilot-namiki.com",
    models: [
      {
        id: "pilot-custom-heritage-912",
        name: "Custom Heritage 912",
        slug: "custom-heritage-912",
        description:
          "A versatile writing instrument with a 14k gold nib available in a wide range of specialty grinds. Piston filling system. The go-to recommendation for writers who want Pilot quality with more nib options than the Custom 74.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad", "PO (Posting)", "FA (Falcon)", "WA (Waverly)", "C (Coarse)"],
        fillingSystem: "Piston",
        material: "Resin / 14k gold nib",
        knownPrices: [
          { retailer: "Amazon", price: 175.00, currency: "USD", url: "https://www.amazon.com/s?k=Pilot+Custom+Heritage+912+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 216.00, currency: "USD", url: "https://www.jetpens.com/search?q=Pilot+Custom+Heritage+912", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 216.00, currency: "USD", url: "https://www.gouletpens.com/search?q=pilot+custom+heritage+912", inStock: true, condition: "new" },
        ],
        msrp: 216,
        yearIntroduced: 2004,
      },
      {
        id: "pilot-justus-95",
        name: "Justus 95",
        slug: "justus-95",
        description:
          "Pilot's adjustable nib pen featuring a mechanism that lets you tune the nib from soft/flexible to firm by adjusting a ring on the section. A unique concept in modern fountain pens with a 14k gold nib.",
        nibOptions: ["Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter (CON-70)",
        material: "Resin / 14k gold nib",
        knownPrices: [
          { retailer: "Amazon", price: 220.00, currency: "USD", url: "https://www.amazon.com/s?k=Pilot+Justus+95+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 275.00, currency: "USD", url: "https://www.jetpens.com/search?q=Pilot+Justus+95", inStock: true, condition: "new" },
        ],
        msrp: 275,
        yearIntroduced: 2019,
      },
    ],
  },
  {
    id: "sailor-exclusive",
    name: "Sailor Specialty",
    slug: "sailor-specialty",
    country: "Japan",
    description:
      "Sailor's specialty and limited edition lines. Known for exceptional nib quality, each nib is hand-tuned and has a distinctive feedback often described as 'writing with a pencil'. Sailor is the gold standard for nib craftsmanship.",
    website: "https://www.sailor.co.jp",
    models: [
      {
        id: "sailor-realo",
        name: "Realo",
        slug: "realo",
        description:
          "Sailor's piston-filling pen with a 21k gold nib. The only non-cartridge Sailor flagship. Features a clear ink window and smooth piston mechanism. A favorite among Sailor enthusiasts who want convenience without sacrificing the legendary Sailor nib.",
        nibOptions: ["Extra Fine", "Fine", "Medium", "Broad", "Zoom"],
        fillingSystem: "Piston",
        material: "Resin / 21k gold nib",
        knownPrices: [
          { retailer: "Amazon", price: 280.00, currency: "USD", url: "https://www.amazon.com/s?k=Sailor+Realo+fountain+pen", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 320.00, currency: "USD", url: "https://www.jetpens.com/search?q=Sailor+Realo", inStock: true, condition: "new" },
          { retailer: "Goulet Pens", price: 320.00, currency: "USD", url: "https://www.gouletpens.com/search?q=sailor+realo", inStock: true, condition: "new" },
        ],
        msrp: 320,
        yearIntroduced: 2013,
      },
    ],
  },
  {
    id: "nakaya",
    name: "Nakaya",
    slug: "nakaya",
    country: "Japan",
    description:
      "Nakaya is a Japanese artisan fountain pen maker known for hand-turned ebonite bodies and exquisite nibs. Founded by former Pilot employees, Nakaya pens are considered some of the finest writing instruments in the world. Each pen is handmade and available in dozens of urushi lacquer finishes.",
    website: "https://www.nakaya.org",
    models: [
      {
        id: "nakaya-portable",
        name: "Portable Writer",
        slug: "portable-writer",
        description:
          "Nakaya's most popular model. A cigar-shaped ebonite pen with a 14k gold nib, available in dozens of urushi lacquer finishes. Each pen is hand-turned and hand-painted by Japanese artisans. The nib is tuned for a smooth, slightly wet writing experience.",
        nibOptions: ["Ultra Extra Fine", "Extra Fine", "Fine", "Medium", "Broad", "Soft Fine", "Cylinder", "Waverly"],
        fillingSystem: "Cartridge / Converter (proprietary Pilot)",
        material: "Ebonite with urushi lacquer",
        knownPrices: [
          { retailer: "Nakaya.org", price: 395.00, currency: "USD", url: "https://www.nakaya.org", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 420.00, currency: "USD", url: "https://www.jetpens.com/search?q=Nakaya+Portable+Writer", inStock: true, condition: "new" },
        ],
        msrp: 395,
        yearIntroduced: 1999,
      },
      {
        id: "nakaya-decapod",
        name: "Decapod Writer",
        slug: "decapod-writer",
        description:
          "A shorter, thicker version of the Portable Writer with a distinctive faceted body. The octagonal cap and barrel give it a unique look. Same excellent Nakaya nib and urushi lacquer options.",
        nibOptions: ["Ultra Extra Fine", "Extra Fine", "Fine", "Medium", "Broad"],
        fillingSystem: "Cartridge / Converter (proprietary Pilot)",
        material: "Ebonite with urushi lacquer",
        knownPrices: [
          { retailer: "Nakaya.org", price: 495.00, currency: "USD", url: "https://www.nakaya.org", inStock: true, condition: "new" },
          { retailer: "JetPens", price: 520.00, currency: "USD", url: "https://www.jetpens.com/search?q=Nakaya+Decapod", inStock: true, condition: "new" },
        ],
        msrp: 495,
        yearIntroduced: 2005,
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