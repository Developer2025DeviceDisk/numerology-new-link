import React from "react";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import AboutTransform from "@/components/sections/AboutTransform";
import Services from "@/components/sections/Services";
import Shop from "@/components/sections/Shop";
import ZodiacSection from "@/components/sections/ZodiacSection";
import Team from "@/components/sections/Team";
import FAQ from "@/components/sections/FAQ";
import ConsultationBanner from "@/components/sections/ConsultationBanner";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <Header />
      <Hero />
      <AboutTransform />
      <Services />
      <Shop />
      <ZodiacSection />
      <Team />
      <FAQ />
      <ConsultationBanner />
      <Testimonials />
      <Footer />
    </main>
  );
}
