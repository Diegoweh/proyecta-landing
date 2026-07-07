import { Reveal } from "../reveal"
import { PortfolioCard } from "./portfolio-card"

const microlink = (targetUrl: string) =>
  `https://api.microlink.io/?url=${encodeURIComponent(targetUrl)}&screenshot=true&meta=false&embed=screenshot.url&viewport.isMobile=true&viewport.width=390&viewport.height=850`

const thumio = (targetUrl: string) =>
  `https://image.thum.io/get/viewportWidth/390/width/440/${targetUrl}`

const sites = [
  { slug: "gran-acuario", name: "Gran Acuario Mazatlán", sector: "Turismo & Atracciones", url: "https://gam-v2.vercel.app/" },
  { slug: "gaviana", name: "Gaviana Resort", sector: "Hotelería & Playa", url: "https://gaviana.com/es" },
  { slug: "bellaterra", name: "Bellaterra", sector: "Joyería & E-commerce", url: "https://bellaterrashop.com.mx/" },
  { slug: "jimmys", name: "Jimmy's Mazatlán", sector: "Restaurante & Food", url: "https://jimmysmzt.com/" },
]

export function WebPortfolio() {
  return (
    <section id="work" className="bg-gray-100 px-6 py-16">
      <div className="mx-auto max-w-[1080px]">
        <Reveal>
          <span className="mb-3.5 inline-block font-mono text-[11.5px] uppercase tracking-[0.18em] text-primary">
            Trabajo real
          </span>
        </Reveal>
        <Reveal>
          <h2 className="text-[clamp(28px,5vw,44px)] font-black leading-[1.05] tracking-tight text-ink">
            Sitios que ya están vendiendo.
          </h2>
        </Reveal>
        <Reveal className="delay-100">
          <p className="mt-2 max-w-[520px] text-base text-muted-foreground">
            Estos los diseñamos y desarrollamos nosotros. Míralos en tu celular.
          </p>
        </Reveal>
        <div className="-mx-6 mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-3.5 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-4 md:gap-5 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
          {sites.map((site, i) => (
            <Reveal
              key={site.slug}
              className={`shrink-0 ${i === 1 ? "delay-100" : i === 2 ? "delay-150" : i === 3 ? "delay-200" : ""}`}
            >
              <PortfolioCard
                src={microlink(site.url)}
                fallbackSrc={thumio(site.url)}
                name={site.name}
                sector={site.sector}
                url={site.url}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
