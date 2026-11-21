import { getProfile } from "@/lib/data/profile";
import { getFeaturedArticles } from "@/lib/data/articles";
import { generatePersonSchema } from "@/lib/seo/schemas/person";
import { JsonLd } from "@/components/seo/JsonLd";
import { HomeHero } from "@/components/home/hero/HomeHero";
import { HomePillars } from "@/components/home/pillars/HomePillars";
import { LatestArticles } from "@/components/home/latest-articles/LatestArticles";

export default async function HomePage() {
  const [profile, articles] = await Promise.all([
    getProfile(),
    getFeaturedArticles(),
  ]);

  return (
    <>
      <JsonLd data={generatePersonSchema(profile)} />
      <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-8">
        <HomeHero profile={profile} />
        <HomePillars />
        <LatestArticles articles={articles} />
      </div>
    </>
  );
}
