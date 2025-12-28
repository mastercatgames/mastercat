"use client";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import GamesSection from "./components/GamesSection";
import InDevelopmentSection from "./components/InDevelopmentSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      <main>
        <Hero />
        <GamesSection />
        <InDevelopmentSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
