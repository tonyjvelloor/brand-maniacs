import { Metadata } from "next";
import { WebsiteDevLandingClient, LocationDetails } from "@/app/website-development/client";

export interface PuneLocationData extends LocationDetails {
  slug: string;
  lat: number;
  lng: number;
  pinCode?: string;
}

export const PUNE_LOCATIONS: Record<string, PuneLocationData> = {
  "pune": {
    slug: "pune",
    name: "Pune",
    hub: "Maharashtra's Tech, Startup & Manufacturing Epicenter",
    subareas: "Kothrud, Camp, Shivajinagar, Senapati Bapat Road, Deccan",
    summary: "Engineered for Pune brands looking to expand regionally and globally. We build custom Next.js websites that dominate organic search and capture high-intent inquiries.",
    clientFocus: "High-growth startups, B2B services, clinics, and multi-location retail enterprises across Pune.",
    lat: 18.5204,
    lng: 73.8567,
    pinCode: "411001"
  },
  "hinjewadi": {
    slug: "hinjewadi",
    name: "Hinjewadi",
    hub: "Rajiv Gandhi Infotech Park & Global Tech Corridor",
    subareas: "Phase 1, Phase 2, Phase 3, Embassy TechZone, Megapolis",
    summary: "Hinjewadi IT companies cannot afford slow, bloated WordPress templates. We build modern React and Next.js web platforms tailored for SaaS scale-ups and IT services.",
    clientFocus: "Software product companies, global IT consultancies, cloud engineering firms, and enterprise B2B tech.",
    lat: 18.5913,
    lng: 73.7389,
    pinCode: "411057"
  },
  "baner": {
    slug: "baner",
    name: "Baner",
    hub: "High-Ticket Healthcare, Architecture & Commercial Retail",
    subareas: "Baner Road, Pan Card Club Road, Veerbhadra Nagar, High Street Link",
    summary: "Baner's competitive commercial scene requires high-trust conversion architecture. We build digital storefronts that turn affluent footfall and online searchers into booked consultations.",
    clientFocus: "Super-speciality clinics, interior architecture firms, real estate developers, and premium restaurants.",
    lat: 18.5590,
    lng: 73.7868,
    pinCode: "411045"
  },
  "balewadi": {
    slug: "balewadi",
    name: "Balewadi",
    hub: "High Street Commerce, Sports & Modern Dining",
    subareas: "Balewadi High Street, Balewadi Stadium Precinct, Mahalunge",
    summary: "Balewadi High Street is Pune's epicenter of lifestyle and consumer spending. We build interactive, lightning-fast digital assets that drive footfall and bookings.",
    clientFocus: "D2C brands, sports academies, dining destinations, fitness studios, and modern consultancies.",
    lat: 18.5726,
    lng: 73.7749,
    pinCode: "411045"
  },
  "wakad": {
    slug: "wakad",
    name: "Wakad",
    hub: "Rapid-Growth Commercial & Professional Services",
    subareas: "Datta Mandir Road, Bhumuikar Chowk, Kaspate Vasti, Hinjewadi Link Road",
    summary: "Serving hundreds of commercial establishments along the Mumbai-Pune bypass. We build lead-generating growth websites for local healthcare, education, and services.",
    clientFocus: "Educational academies, dental and medical centers, financial advisors, and residential services.",
    lat: 18.5987,
    lng: 73.7660,
    pinCode: "411057"
  },
  "koregaon-park": {
    slug: "koregaon-park",
    name: "Koregaon Park",
    hub: "Luxury Hospitality, Creative Studios & Lifestyle Brands",
    subareas: "North Main Road, South Main Road, Lane 5 to Lane 7, Bund Garden Precinct",
    summary: "In Koregaon Park, aesthetic elegance must meet conversion rigor. We design high-end digital experiences for luxury lifestyle, boutique hospitality, and creative studios.",
    clientFocus: "Fine dining destinations, boutique architecture studios, luxury real estate, and lifestyle brands.",
    lat: 18.5362,
    lng: 73.8938,
    pinCode: "411001"
  },
  "kalyani-nagar": {
    slug: "kalyani-nagar",
    name: "Kalyani Nagar",
    hub: "Corporate Tech HQs, Media & Modern Commerce",
    subareas: "East Avenue, Central Avenue, Bishop's School Precinct, Jogger's Park Area",
    summary: "A central corporate and commercial district. We build professional web systems that establish authority, pass enterprise vendor reviews, and capture high-value contracts.",
    clientFocus: "Corporate consulting firms, digital media companies, enterprise tech, and upscale retail.",
    lat: 18.5477,
    lng: 73.9038,
    pinCode: "411006"
  },
  "viman-nagar": {
    slug: "viman-nagar",
    name: "Viman Nagar",
    hub: "Airport Commercial Corridor, IT Parks & Coworking",
    subareas: "Symbiosis Road, Phoenix Marketcity Area, Clover Park, Sakore Nagar",
    summary: "Positioned next to Pune International Airport. We build conversion-optimized websites for dynamic coworking spaces, training institutes, and international export businesses.",
    clientFocus: "Coworking spaces, educational institutes, export trading companies, and business hotels.",
    lat: 18.5679,
    lng: 73.9143,
    pinCode: "411014"
  },
  "kharadi": {
    slug: "kharadi",
    name: "Kharadi",
    hub: "EON Free Zone, World Trade Center & FinTech",
    subareas: "EON IT Park, WTC Pune, Grant Road, Ashoka Nagar",
    summary: "Eastern Pune's tech powerhouse. We engineer custom web systems and SEO moats for fintech, enterprise software, and international business consultancies.",
    clientFocus: "Fintech startups, enterprise B2B service firms, global capability centers, and logistics providers.",
    lat: 18.5515,
    lng: 73.9408,
    pinCode: "411014"
  },
  "magarpatta": {
    slug: "magarpatta",
    name: "Magarpatta",
    hub: "Cybercity Integrated Township & Enterprise IT",
    subareas: "Magarpatta Cybercity, Seasons Mall precinct, Destination Centre, Hadapsar",
    summary: "Built for Pune's original self-contained cybercity. We deliver high-speed web platforms that scale with enterprise traffic and capture high-intent inquiries.",
    clientFocus: "Enterprise software vendors, BPO firms, healthcare clinics, and modern township businesses.",
    lat: 18.5134,
    lng: 73.9295,
    pinCode: "411028"
  },
  "aundh": {
    slug: "aundh",
    name: "Aundh",
    hub: "Established Professional Practices & Commercial Retail",
    subareas: "DP Road, ITI Road, Bremen Chowk, Parihar Chowk",
    summary: "One of Pune's most affluent mature neighborhoods. We build premium, trustworthy websites for leading doctors, chartered accountants, legal firms, and boutique retailers.",
    clientFocus: "Healthcare specialists, premium retail shops, design consultancies, and professional practices.",
    lat: 18.5580,
    lng: 73.8075,
    pinCode: "411007"
  },
  "pimpri": {
    slug: "pimpri",
    name: "Pimpri",
    hub: "Automotive, Industrial Fabrication & Engineering MIDC",
    subareas: "Pimpri MIDC, Nehrunagar, Morwadi, Pimpri Colony, Old Mumbai-Pune Highway",
    summary: "The beating heart of Indian automotive engineering. We transform legacy manufacturing websites into global RFQ engines that attract international export buyers.",
    clientFocus: "Automotive component suppliers, sheet metal fabricators, industrial OEMs, and B2B exporters.",
    lat: 18.6298,
    lng: 73.7997,
    pinCode: "411018"
  },
  "pimple-saudagar": {
    slug: "pimple-saudagar",
    name: "Pimple Saudagar",
    hub: "Modern Residential Commercial & Healthcare Hub",
    subareas: "Kunwal Garden Road, Linear Garden, Shivar Chowk, Govind Garden Area",
    summary: "Dense, affluent residential and commercial corridor. We build local SEO and high-conversion booking websites for clinics, wellness centers, and private academies.",
    clientFocus: "Multi-speciality dental and medical clinics, fitness hubs, preschools, and coaching institutes.",
    lat: 18.5982,
    lng: 73.8005,
    pinCode: "411027"
  },
  "kalewadi": {
    slug: "kalewadi",
    name: "Kalewadi",
    hub: "Commercial Trade, Fabrication & Local Contracting",
    subareas: "Kalewadi Main Road, Jyotiba Nagar, Nadhe Nagar, Rahatani Link Road",
    summary: "Fast-expanding commercial center in PCMC. We help local contractors and wholesale suppliers establish digital presence and win exclusive commercial contracts.",
    clientFocus: "Building contractors, wholesale suppliers, home renovation specialists, and trade businesses.",
    lat: 18.6146,
    lng: 73.7925,
    pinCode: "411017"
  },
  "moshi": {
    slug: "moshi",
    name: "Moshi",
    hub: "International Exhibition Corridor & Logistics Hub",
    subareas: "PIECC Exhibition Area, Alandi Road, Pune-Nashik Highway, Borhadewadi",
    summary: "Home to the Pune International Exhibition and Convention Centre. We build digital catalog platforms and inquiry funnels for logistics, warehousing, and exhibitors.",
    clientFocus: "Warehousing operators, exhibition vendors, transport logistics firms, and industrial fabricators.",
    lat: 18.6729,
    lng: 73.8431,
    pinCode: "412105"
  },
  "chikhali": {
    slug: "chikhali",
    name: "Chikhali",
    hub: "Industrial Tooling, Sheet Metal & Manufacturing MIDC",
    subareas: "Chikhali MIDC, Kudalwadi, Patilnagar, Spine Road Industrial Corridor",
    summary: "Industrial tooling and precision manufacturing hub. We replace outdated websites with modern product catalog funnels that generate verified B2B purchase requests.",
    clientFocus: "Machine tool manufacturers, metal fabricators, industrial coating specialists, and engineering exporters.",
    lat: 18.6657,
    lng: 73.8083,
    pinCode: "411062"
  }
};

function formatLocationName(slug?: string): string {
  if (!slug) return "Pune";
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function generateStaticParams() {
  return Object.keys(PUNE_LOCATIONS).map((location) => ({
    location,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const location = resolvedParams?.location || "pune";
  const loc = PUNE_LOCATIONS[location] || {
    name: formatLocationName(location),
    summary: "Custom websites built on Next.js designed to turn visitors into enquiries, customers, and revenue."
  };
  
  return {
    title: `Custom Website Development in ${loc.name}, Pune`,
    description: `Looking for top-tier website development in ${loc.name}, Pune? We build high-converting Next.js websites with Day 1 SEO, AEO, and lead generation architecture.`,
    alternates: {
      canonical: `/website-development-agency-in-${location}`,
    },
    openGraph: {
      title: `Website Development Agency in ${loc.name}, Pune | The Brand Maniacs`,
      description: `Custom Next.js website design & conversion systems in ${loc.name}. Built for lead generation and search dominance.`,
      url: `https://www.thebrandmaniacs.online/website-development-agency-in-${location}`
    }
  };
}

export default async function DynamicWebsiteDevelopmentPage({ params }: { params: Promise<{ location: string }> }) {
  const resolvedParams = await params;
  const location = resolvedParams?.location || "pune";
  const locationDetails = PUNE_LOCATIONS[location];

  const locName = locationDetails ? locationDetails.name : formatLocationName(location);
  const lat = locationDetails ? locationDetails.lat : 18.6298;
  const lng = locationDetails ? locationDetails.lng : 73.7997;

  const localSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `https://www.thebrandmaniacs.online/website-development-agency-in-${location}#localbusiness`,
        "name": `The Brand Maniacs - Website Development ${locName}`,
        "url": `https://www.thebrandmaniacs.online/website-development-agency-in-${location}`,
        "logo": "https://www.thebrandmaniacs.online/icon.png",
        "image": "https://www.thebrandmaniacs.online/images/og-image.jpg",
        "description": `Professional website development, Next.js engineering, and conversion architecture for businesses in ${locName}, Pune.`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": `${locName}`,
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": locationDetails?.pinCode || "411033",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": lat,
          "longitude": lng
        },
        "areaServed": [`${locName}, Pune`, "Pimpri-Chinchwad", "Pune", "Maharashtra"],
        "priceRange": "$$"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.thebrandmaniacs.online/website-development-agency-in-${location}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.thebrandmaniacs.online"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Website Development",
            "item": "https://www.thebrandmaniacs.online/website-development"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `${locName}, Pune`,
            "item": `https://www.thebrandmaniacs.online/website-development-agency-in-${location}`
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <WebsiteDevLandingClient 
        locationName={locName} 
        locationDetails={locationDetails} 
      />
    </>
  );
}
