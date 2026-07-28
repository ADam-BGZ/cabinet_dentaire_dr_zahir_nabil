"use client";

import { PhoneIcon, ShieldIcon, AwardIcon, HeartIcon, AccessibilityIcon } from "@/components/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BASE_PATH } from "@/lib/utils";

const features = [
  { icon: ShieldIcon, text: "6 domaines de spécialités dentaires" },
  { icon: AwardIcon, text: "Ancien médecin-chef des services sociaux militaires" },
  { icon: HeartIcon, text: "Approche personnalisée et bienveillante" },
];

const accessibility = [
  { icon: AccessibilityIcon, text: "Entrée accessible en fauteuil roulant" },
  { icon: AccessibilityIcon, text: "Toilettes adaptées aux PMR" },
  { icon: AccessibilityIcon, text: "Parking gratuit sur place" },
  { icon: AccessibilityIcon, text: "Stationnement gratuit dans la rue" },
];

export function About() {
  const left = useScrollAnimation("left");
  const right = useScrollAnimation("right");

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div ref={left.refCallback} className={`flex-1 ${left.animationClass}`}>
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
              À propos
            </span>
            <h2 className="section-title text-foreground mt-4 mb-6">
              Cabinet Dr. ZAHIR Nabil
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Ancien médecin-chef des services sociaux militaires de Tétouan, le Dr. ZAHIR Nabil met son expertise et son engagement au service de votre santé bucco-dentaire. Son cabinet situé au Quartier Wilaya vous accueille dans un cadre moderne et rassurant.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Implantologie, orthodontie, esthétique dentaire, prothèses, parodontie et soins généraux — une approche pluridisciplinaire complète pour toute la famille.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {features.map((feature, i) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-3 transition-default"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 transition-default hover:bg-primary/20">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Accessibilité */}
            <div className="bg-muted rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-4">
                Accessibilité
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {accessibility.map((item) => (
                  <div key={item.text} className="flex items-center gap-2">
                    <span className="text-success text-lg">✓</span>
                    <span className="text-muted-foreground text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+212668142427"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold text-base transition-all-fast hover:bg-primary/90"
              >
                <PhoneIcon className="w-5 h-5" />
                Contactez-nous
              </a>
              <a
                href="tel:+212668142427"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-base transition-all-fast hover:bg-primary hover:text-white"
              >
                +212 668-142427
              </a>
            </div>
          </div>

          {/* Right — Logo */}
          <div ref={right.refCallback} className={`flex-1 relative ${right.animationClass}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-8 transition-default hover:shadow-3xl">
              <img
                src={`${BASE_PATH}/images/logo-wilaya.png`}
                alt="Cabinet Dr. ZAHIR Nabil"
                className="w-full h-auto object-contain transition-default hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-foreground px-6 py-4 rounded-xl shadow-lg transition-default hover:scale-105">
              <div className="text-2xl font-bold">—</div>
              <div className="text-sm font-medium">Années d&apos;expérience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
