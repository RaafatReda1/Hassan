import { PillarCard } from "./PillarCard";
import { homePillars } from "./data";

export function HomePillars() {
  return (
    <section aria-labelledby="pillars-heading" className="py-16">
      <div className="mb-10 text-center">
        <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-800 dark:text-emerald-400">
          الركائز والمهام
        </span>
        <h2
          id="pillars-heading"
          className="mt-2 text-3xl font-black text-slate-950 dark:text-white"
        >
          المسؤوليات والقطاعات القيادية
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {homePillars.map((pillar) => (
          <PillarCard key={pillar.title} item={pillar} />
        ))}
      </div>
    </section>
  );
}
