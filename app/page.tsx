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
import { faqItems, organizationName, siteUrl } from "@/lib/seo"

export default function Page() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: organizationName,
    image: `${siteUrl}og-image.png`,
    url: siteUrl,
    email: "hola@proyecta.com.mx",
    telephone: "+523318635199",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mazatlán",
      addressRegion: "Sinaloa",
      addressCountry: "MX",
    },
    areaServed: {
      "@type": "Country",
      name: "México",
    },
    sameAs: [
      "https://www.instagram.com/proyectaignitingmarketing/",
      "https://www.linkedin.com/company/proyectaigniting/",
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <main className="bg-paper text-ink leading-relaxed">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
