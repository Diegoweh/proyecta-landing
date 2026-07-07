import { LogoBar } from "@/components/proyecta/logo-bar"
import { WebNav } from "@/components/proyecta/web/web-nav"
import { WebHero } from "@/components/proyecta/web/web-hero"
import { WebBenefits } from "@/components/proyecta/web/web-benefits"
import { WebPortfolio } from "@/components/proyecta/web/web-portfolio"
import { WebProof } from "@/components/proyecta/web/web-proof"
import { WebProcess } from "@/components/proyecta/web/web-process"
import { WebFaq } from "@/components/proyecta/web/web-faq"
import { WebCtaForm } from "@/components/proyecta/web/web-cta-form"
import { WebFooter } from "@/components/proyecta/web/web-footer"
import { WebMobileCta } from "@/components/proyecta/web/web-mobile-cta"

export default function WebLandingPage() {
  return (
    <main className="bg-paper text-ink pb-16 md:pb-0">
      <WebNav />
      <WebHero />
      <LogoBar />
      <WebBenefits />
      <WebPortfolio />
      <WebProof />
      <WebProcess />
      <WebFaq />
      <WebCtaForm />
      <WebFooter />
      <WebMobileCta />
    </main>
  )
}
