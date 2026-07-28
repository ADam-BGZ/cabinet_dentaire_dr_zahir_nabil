"use client";

import {
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
} from "@/components/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BASE_PATH } from "@/lib/utils";

const quickLinks = [
  { label: "Accueil", href: "#" },
  { label: "Le cabinet", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const contactItems = [
  { icon: PhoneIcon, text: "+212 668-142427", href: "tel:+212668142427" },
  {
    icon: MapPinIcon,
    text: "Résidence Ain Meloul, Sabbah 5, Appartement 2, Quartier Wilaya, Tétouan",
    href: "#",
  },
  { icon: ClockIcon, text: "Lun – Ven : 09:00–13:00, 15:00–19:00 | Sam : 09:00–14:00", href: "" },
];

export function Footer() {
  const anim = useScrollAnimation("up");

  return (
    <footer id="contact" className="bg-[#0F172A] text-white">
      <div ref={anim.refCallback} className={`max-w-7xl mx-auto px-4 py-16 ${anim.animationClass}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <div className="bg-white rounded-lg p-2 inline-block">
                <img
                  src={`${BASE_PATH}/images/logo-wilaya.png`}
                  alt="Cabinet Dr. ZAHIR Nabil"
                  className="h-10 w-auto"
                />
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Cabinet de chirurgie dentaire à Tétouan. Soins
              professionnels et personnalisés par le Dr. ZAHIR Nabil.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all-fast hover:bg-accent hover:text-foreground"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Liens rapides</h3>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/70 text-sm transition-all-fast hover:text-accent hover:translate-x-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <div className="flex flex-col gap-4">
              {contactItems.map((item) => (
                <div key={item.text} className="flex items-start gap-3 transition-all-fast hover:translate-x-1">
                  <item.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white/70 text-sm transition-all-fast hover:text-accent"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-white/70 text-sm">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Newsletter</h3>
            <p className="text-white/60 text-sm mb-4">
              Restez informé de nos actualités et conseils santé bucco-dentaire.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 bg-white/10 text-white placeholder-white/40 text-sm px-4 py-2.5 rounded-lg border border-white/20 focus:border-accent focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-accent text-foreground px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-accent/90 transition-colors"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Cabinet Dr. ZAHIR Nabil. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
