"use client";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import GamesSection from "./components/GamesSection";
import InDevelopmentSection from "./components/InDevelopmentSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden max-w-full">
      <Navigation />
      <main>
        <Hero />
        <ScrollReveal direction="up">
          <GamesSection />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <InDevelopmentSection />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <ContactSection />
        </ScrollReveal>
      </main>
      <ScrollReveal direction="fade">
        <Footer />
      </ScrollReveal>
    </div>
  );
}
