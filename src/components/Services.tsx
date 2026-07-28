"use client";

import { useState } from "react";
import { ChevronRightIcon } from "@/components/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BASE_PATH } from "@/lib/utils";

const poles = [
  {
    id: 1,
    title: "Pôle Soins Généraux",
    description:
      "Consultations dentaires complètes, détartrage professionnel, traitement des caries et extractions dentaires. Des soins essentiels pour préserver votre capital santé bucco-dentaire.",
    subitems: ["Consultations", "Détartrage", "Traitement des caries", "Extractions"],
  },
  {
    id: 2,
    title: "Pôle Implantologie",
    description:
      "Pose d'implants dentaires de dernière génération pour remplacer une ou plusieurs dents manquantes. Des solutions durables et esthétiques pour retrouver un sourire complet.",
    subitems: ["Implants dentaires", "Prothèses sur implants", "Solutions durables"],
  },
  {
    id: 3,
    title: "Pôle Prothèses Dentaires",
    description:
      "Prothèses pluridisciplinaires, couronnes céramique, bridges fixes ou amovibles. Des solutions prothétiques sur mesure pour restaurer votre sourire et votre fonction masticatoire.",
    subitems: ["Couronnes", "Bridges", "Prothèses fixes", "Prothèses amovibles"],
  },
  {
    id: 4,
    title: "Pôle Orthodontie",
    description:
      "Alignement dentaire pour enfants et adultes. Bagues conventionnelles et traitements correctifs pour un sourire harmonieux et une occlusion optimale.",
    subitems: ["Alignement enfants", "Alignement adultes", "Traitement correctif"],
  },
  {
    id: 5,
    title: "Pôle Esthétique & Parodontie",
    description:
      "Blanchiment dentaire professionnel, facettes esthétiques et soins complets des gencives. Alliez beauté du sourire et santé parodontale pour un résultat éclatant.",
    subitems: ["Blanchiment professionnel", "Facettes", "Soins des gencives"],
  },
];

export function Services() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const header = useScrollAnimation("down");
  const list = useScrollAnimation("up");

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={header.refCallback} className={`text-center max-w-2xl mx-auto mb-16 ${header.animationClass}`}>
          <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
            Nos Services
          </span>
          <h2 className="section-title text-foreground mt-4 mb-6">
            Pôles de Soins Dentaires à Tétouan
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Découvrez les six domaines d&apos;expertise du Dr. ZAHIR Nabil, pour une
            prise en charge complète de votre santé bucco-dentaire.
          </p>
        </div>

        <div ref={list.refCallback} className={`grid grid-cols-1 lg:grid-cols-2 gap-6 ${list.animationClass}`}>
          <div className="flex flex-col gap-3">
            {poles.map((pole) => (
              <div
                key={pole.id}
                className={`rounded-xl border transition-all cursor-pointer hover-card ${
                  activeId === pole.id
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-border bg-white hover:border-primary/30 hover:shadow-sm"
                }`}
                onClick={() => setActiveId(activeId === pole.id ? null : pole.id)}
                style={activeId === pole.id ? { borderLeft: "3px solid var(--secondary)" } : { borderLeft: "3px solid transparent" }}
              >
                <div className="flex items-center gap-4 p-5">
                  <span className="text-sm font-bold text-primary/60 w-8 text-right flex-shrink-0">
                    {String(pole.id).padStart(2, "0")}
                  </span>
                  <span className="font-semibold text-foreground flex-1">
                    {pole.title}
                  </span>
                  <ChevronRightIcon
                    className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                      activeId === pole.id ? "rotate-90" : ""
                    }`}
                  />
                </div>
                {activeId === pole.id && (
                  <div className="px-5 pb-5 pl-17">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {pole.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {pole.subitems.map((sub) => (
                        <span
                          key={sub}
                          className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center mt-8 lg:mt-0">
            {/* TODO: remplacer par une photo dédiée fournie par le client */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-md aspect-[3/4]">
              <img
                src={`${BASE_PATH}/images/img-services-equipment.png`}
                alt="Cabinet Dr. ZAHIR Nabil — Équipement du cabinet"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
