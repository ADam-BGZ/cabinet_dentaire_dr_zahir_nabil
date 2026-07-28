import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Stats } from "@/components/Stats";
import { Cta } from "@/components/Cta";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { PreRendezVous } from "@/components/PreRendezVous";
import { EmergencyCta } from "@/components/EmergencyCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="section-divider py-8"><div className="section-divider-dot" /></div>
        <About />
        <div className="section-divider py-8"><div className="section-divider-dot" /></div>
        <Services />
        <div className="section-divider py-8"><div className="section-divider-dot" /></div>
        <BeforeAfter />
        <div className="section-divider py-8"><div className="section-divider-dot" /></div>
        <Stats />
        <div className="section-divider py-8"><div className="section-divider-dot" /></div>
        <Cta />
        <div className="section-divider py-8"><div className="section-divider-dot" /></div>
        <Testimonials />
        <div className="section-divider py-8"><div className="section-divider-dot" /></div>
        <Faq />
        <div className="section-divider py-8"><div className="section-divider-dot" /></div>
        <PreRendezVous />
        <div className="section-divider py-8"><div className="section-divider-dot" /></div>
        <EmergencyCta />
      </main>
      <Footer />
    </>
  );
}
