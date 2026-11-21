import { HeroAvatar } from "./HeroAvatar";
import { HeroBio } from "./HeroBio";
import type { HeroProps } from "./types";

export function HomeHero({ profile }: HeroProps) {
  return (
    <section
      aria-label="التعريف بالأمين العام"
      className="animate-luxury-fade relative flex flex-col-reverse items-center justify-between gap-10 border-b border-slate-200/80 pb-16 pt-8 lg:flex-row lg:items-center lg:gap-16 dark:border-slate-800"
    >
      <HeroBio profile={profile} />
      <HeroAvatar imgUrl={profile.img_url} name={profile.name} />
    </section>
  );
}
