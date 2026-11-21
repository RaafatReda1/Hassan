import { siteConfig } from "@/lib/config/site";
import type { Profile } from "@/types/profile";

export function generatePersonSchema(profile: Profile) {
  const sameAs = Object.values(profile.links).filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: profile.name,
    jobTitle: profile.profession,
    description: profile.bio,
    birthDate: String(profile.birth_year),
    nationality: "Iraqi",
    image: profile.img_url,
    url: siteConfig.url,
    memberOf: {
      "@type": "Organization",
      name: profile.clan_title || "رئاسة الإمارة الجنيدية",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
      addressCountry: "IQ",
    },
    sameAs,
  };
}
