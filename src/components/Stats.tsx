"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  {
    value: "—",
    label: "Années d'Expérience",
    description:
      "L'expertise du Dr. ZAHIR Nabil au service de votre santé bucco-dentaire.",
  },
  {
    value: "—",
    label: "Patients Accueillis",
    description:
      "Chaque patient bénéficie d'une attention personnalisée et de soins de qualité.",
  },
  {
    value: "—",
    label: "Interventions Réalisées",
    description:
      "Des traitements précis et réussis grâce à un savoir-faire d'excellence.",
  },
];

export function Stats() {
  const left = useScrollAnimation("left");
  const right = useScrollAnimation("right");

  return (
    <section className="section-padding bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Content */}
          <div ref={left.refCallback} className={`flex-1 ${left.animationClass}`}>
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
              Notre Impact
            </span>
            <h2 className="section-title text-foreground mt-4 mb-6">
              Pourquoi choisir le Dr. ZAHIR Nabil ?
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Le Dr. ZAHIR Nabil vous accueille dans son cabinet à Tétouan pour
              des soins dentaires d&apos;excellence, alliant expertise et bienveillance.
            </p>
          </div>

          {/* Stats Grid */}
          <div ref={right.refCallback} className={`flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 ${right.animationClass}`}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover-card border border-border/40"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold text-foreground text-sm mb-3">
                  {stat.label}
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
