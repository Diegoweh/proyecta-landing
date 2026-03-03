import { Navbar } from "@/components/proyecta/navbar"
import { Hero } from "@/components/proyecta/hero"
import { LogoBar } from "@/components/proyecta/logo-bar"
import { ProblemSection } from "@/components/proyecta/problem-section"
import { ResultsSection } from "@/components/proyecta/results-section"
import { ServicesSection } from "@/components/proyecta/services-section"
import { VerticalsSection } from "@/components/proyecta/verticals-section"
import { ProcessSection } from "@/components/proyecta/process-section"
import { ContactSection } from "@/components/proyecta/contact-section"
import { FaqSection } from "@/components/proyecta/faq-section"
import { FinalCta } from "@/components/proyecta/final-cta"
import { Footer } from "@/components/proyecta/footer"

export default function Page() {
  return (
    <main className="bg-paper text-ink leading-relaxed">
      <Navbar />
      <Hero />
      <LogoBar />
      <ProblemSection />
      <ResultsSection />
      <ServicesSection />
      <VerticalsSection />
      <ProcessSection />
      <ContactSection />
      <FaqSection />
      <FinalCta />
      <Footer />
    </main>
  )
}
