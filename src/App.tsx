import { ScrollProgress } from "./components/ScrollProgress";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Countdown } from "./components/Countdown";
import { About } from "./components/About";
import { Process } from "./components/Process";
import { Evaluation } from "./components/Evaluation";
import { Top50 } from "./components/Top50";
import { Preparation } from "./components/Preparation";
import { EventDetails } from "./components/EventDetails";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";

export function App() {
  return (
    <div className="min-h-screen bg-[#FCFCFD] text-[#0F172A] flex flex-col relative antialiased selection:bg-[#EA580C]/20 selection:text-[#EA580C]">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with SIH & College Visual Composition */}
        <Hero />

        {/* Dynamic Countdown Section */}
        <Countdown />

        {/* About & Mission Section */}
        <About />

        {/* 4-Step Interactive Challenge Process */}
        <Process />

        {/* External Evaluation Pipeline */}
        <Evaluation />

        {/* High-Impact Top 50 Highlight Section with Animated Counter */}
        <Top50 />

        {/* Actionable Preparation Section */}
        <Preparation />

        {/* Official Event Details Grid */}
        <EventDetails />

        {/* Interactive FAQ Accordion */}
        <FAQ />

        {/* Final Call to Action */}
        <FinalCTA />
      </main>

      {/* Official Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}

export default App;

