import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { OpenSource } from "./components/OpenSource";
import { Pricing } from "./components/Pricing";
import { Community } from "./components/Community";
import { Footer } from "./components/Footer";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <OpenSource />
        <Pricing />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
