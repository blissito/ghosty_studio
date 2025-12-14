import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Demo } from "./components/Demo";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
import { OpenSource } from "./components/OpenSource";
import { Footer } from "./components/Footer";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Demo />
        <HowItWorks />
        <Pricing />
        <OpenSource />
      </main>
      <Footer />
    </div>
  );
}
