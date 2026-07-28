"use client";

export function Marquee() {
  // TODO: le client pourra ajouter de vrais chiffres ici (nombre de patients, années d'expérience, etc.)
  const items = [
    "Cabinet Dr. ZAHIR Nabil",
    "Chirurgien-Dentiste à Tétouan",
    "Ancien médecin-chef des services sociaux militaires",
    "Implantologie · Orthodontie · Esthétique · Prothèses · Parodontie · Soins Généraux",
    "Résidence Ain Meloul, Sabbah 5, Quartier Wilaya, Tétouan",
    "+212 668-142427",
    "Lun – Ven : 09:00–13:00, 15:00–19:00 | Sam : 09:00–14:00",
  ];

  return (
    <div className="bg-primary text-white py-2.5 marquee-container">
      <div className="marquee-track">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-6 text-sm font-medium whitespace-nowrap">
            <span className="w-1.5 h-1.5 bg-white/40 rounded-full flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
