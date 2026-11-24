import type { Metadata } from "next";
import { notFound } from "next/navigation";

import USCityGrowthPage, {
  generateMetadata as generateUSCityMetadata,
  generateStaticParams as getUSCityParams,
} from "@/lib/pseo/us-cities";

import DynamicWebsiteDevelopmentPage, {
  generateMetadata as generatePuneLocationMetadata,
  generateStaticParams as getPuneLocationParams,
} from "@/lib/pseo/pune-locations";

import CityDynamicPage, {
  generateMetadata as generateIndiaCityMetadata,
  generateStaticParams as getIndiaCityParams,
} from "@/lib/pseo/india-cities";

import IndustryDynamicPage, {
  generateMetadata as generateIndustryMetadata,
  generateStaticParams as getIndustryParams,
} from "@/lib/pseo/industries";

import LeadGenerationDynamicPage, {
  generateMetadata as generateLeadGenMetadata,
  generateStaticParams as getLeadGenParams,
} from "@/lib/pseo/lead-gen";

export const dynamicParams = false;

const US_CITY_PREFIX = "growth-marketing-agency-in-";
const PUNE_WEB_PREFIX = "website-development-agency-in-";
const INDIA_CITY_PREFIX = "digital-marketing-agency-in-";
const INDUSTRY_PREFIX = "marketing-agency-for-";
const LEAD_GEN_PREFIX = "lead-generation-agency-for-";

const VALID_US_CITIES = new Set(getUSCityParams().map((p) => p["us-city"]));
const VALID_PUNE_LOCATIONS = new Set(getPuneLocationParams().map((p) => p.location));
const VALID_INDIA_CITIES = new Set(getIndiaCityParams().map((p) => p.city));
const VALID_INDUSTRIES = new Set(
  getIndustryParams()
    .map((p) => p.industry)
    .filter((i) => i !== "d2c-ecommerce")
);
const VALID_LEAD_GEN = new Set(getLeadGenParams().map((p) => p.industry));

export function generateStaticParams() {
  return [
    ...Array.from(VALID_US_CITIES).map((c) => ({ slug: `${US_CITY_PREFIX}${c}` })),
    ...Array.from(VALID_PUNE_LOCATIONS).map((l) => ({ slug: `${PUNE_WEB_PREFIX}${l}` })),
    ...Array.from(VALID_INDIA_CITIES).map((c) => ({ slug: `${INDIA_CITY_PREFIX}${c}` })),
    ...Array.from(VALID_INDUSTRIES).map((i) => ({ slug: `${INDUSTRY_PREFIX}${i}` })),
    ...Array.from(VALID_LEAD_GEN).map((i) => ({ slug: `${LEAD_GEN_PREFIX}${i}` })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (slug.startsWith(US_CITY_PREFIX)) {
    const usCity = slug.slice(US_CITY_PREFIX.length);
    if (VALID_US_CITIES.has(usCity)) {
      return generateUSCityMetadata({ params: Promise.resolve({ "us-city": usCity }) });
    }
  }

  if (slug.startsWith(PUNE_WEB_PREFIX)) {
    const location = slug.slice(PUNE_WEB_PREFIX.length);
    if (VALID_PUNE_LOCATIONS.has(location)) {
      return generatePuneLocationMetadata({ params: Promise.resolve({ location }) });
    }
  }

  if (slug.startsWith(INDIA_CITY_PREFIX)) {
    const city = slug.slice(INDIA_CITY_PREFIX.length);
    if (VALID_INDIA_CITIES.has(city)) {
      return generateIndiaCityMetadata({ params: Promise.resolve({ city }) });
    }
  }

  if (slug.startsWith(INDUSTRY_PREFIX)) {
    const industry = slug.slice(INDUSTRY_PREFIX.length);
    if (VALID_INDUSTRIES.has(industry)) {
      return generateIndustryMetadata({ params: Promise.resolve({ industry }) });
    }
  }

  if (slug.startsWith(LEAD_GEN_PREFIX)) {
    const industry = slug.slice(LEAD_GEN_PREFIX.length);
    if (VALID_LEAD_GEN.has(industry)) {
      return generateLeadGenMetadata({ params: Promise.resolve({ industry }) });
    }
  }

  return { title: "Page Not Found" };
}

export default async function ProgrammaticSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug.startsWith(US_CITY_PREFIX)) {
    const usCity = slug.slice(US_CITY_PREFIX.length);
    if (VALID_US_CITIES.has(usCity)) {
      return <USCityGrowthPage params={Promise.resolve({ "us-city": usCity })} />;
    }
  }

  if (slug.startsWith(PUNE_WEB_PREFIX)) {
    const location = slug.slice(PUNE_WEB_PREFIX.length);
    if (VALID_PUNE_LOCATIONS.has(location)) {
      return <DynamicWebsiteDevelopmentPage params={Promise.resolve({ location })} />;
    }
  }

  if (slug.startsWith(INDIA_CITY_PREFIX)) {
    const city = slug.slice(INDIA_CITY_PREFIX.length);
    if (VALID_INDIA_CITIES.has(city)) {
      return <CityDynamicPage params={Promise.resolve({ city })} />;
    }
  }

  if (slug.startsWith(INDUSTRY_PREFIX)) {
    const industry = slug.slice(INDUSTRY_PREFIX.length);
    if (VALID_INDUSTRIES.has(industry)) {
      return <IndustryDynamicPage params={Promise.resolve({ industry })} />;
    }
  }

  if (slug.startsWith(LEAD_GEN_PREFIX)) {
    const industry = slug.slice(LEAD_GEN_PREFIX.length);
    if (VALID_LEAD_GEN.has(industry)) {
      return <LeadGenerationDynamicPage params={Promise.resolve({ industry })} />;
    }
  }

  notFound();
}
