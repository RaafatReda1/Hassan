import { HeroCredentials } from "./HeroCredentials";
import { HeroActions } from "./HeroActions";
import type { Profile } from "@/types/profile";

export function HeroBio({ profile }: { profile: Profile }) {
  return (
    <div className="flex flex-1 flex-col space-y-6 text-right">
      <div className="space-y-3">
        <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
          {profile.name}
        </h1>
        <p className="text-lg font-bold text-emerald-800 sm:text-xl dark:text-emerald-400">
          {profile.profession}
        </p>
      </div>
      <p className="max-w-2xl text-base font-normal leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
        {profile.bio}
      </p>
      <HeroCredentials items={profile.credentials} />
      <HeroActions items={profile.actions} />
    </div>
  );
}
