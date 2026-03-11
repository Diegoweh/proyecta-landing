import { Reveal } from "./reveal"
import { Building, Building2, HeartPulse, Hotel, ShoppingCart, UtensilsCrossed } from "lucide-react"
import type { ReactNode } from "react"

interface VerticalCardProps {
  icon: ReactNode
  title: string
  description: string
  tags: string[]
}

function VerticalCard({ icon, title, description, tags }: VerticalCardProps) {
  return (
    <div className="bg-card border border-gray-200 rounded-xl p-8 transition-all duration-300 hover:border-primary hover:shadow-[0_4px_20px_rgba(200,16,46,0.06)]">
      <div className="text-3xl mb-4">{icon}</div>
      <p className="text-ink text-[1.1rem] font-bold mb-2.5">{title}</p>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 text-gray-600 text-[0.72rem] font-semibold px-2.5 py-1 rounded uppercase tracking-wide border border-gray-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

const verticals: VerticalCardProps[] = [
  {
    icon: <Building2 className="w-7 h-7 text-ink" />,
    title: "Empresarial & Servicios",
    description:
      "Consultoras, despachos, tech y servicios B2B. Generaci\u00f3n de leads calificados con Google Ads, CRM y embudos que filtran mejor y aceleran cierres.",
    tags: ["Lead generation", "LinkedIn + Meta", "CRM integration"],
  },
  {
    icon: <Hotel className="w-7 h-7 text-ink" />,
    title: "Turismo & Hospitalidad",
    description:
      "Hoteles, resorts y atracciones tur\u00edsticas. M\u00e1s reservas directas, menor dependencia de OTAs y campa\u00f1as estacionales con mejor retorno.",
    tags: ["Reservas directas", "Revenue por temporada", "OTA independence"],
  },
  {
    icon: <UtensilsCrossed className="w-7 h-7 text-ink" />,
    title: "Food & Lifestyle",
    description:
      "Restaurantes, franquicias y marcas de consumo. Posicionamiento de marca, contenido comercial y campa\u00f1as locales que generan tr\u00e1fico, reservas y ventas.",
    tags: ["Brand awareness", "Contenido viral", "Local marketing"],
  },
  {
    icon: <HeartPulse className="w-7 h-7 text-ink" />,
    title: "Salud & Wellness",
    description:
      "Cl\u00ednicas, spas y centros de bienestar. Marketing \u00e9tico con cumplimiento normativo, captaci\u00f3n de pacientes y posicionamiento experto en buscadores.",
    tags: ["Patient acquisition", "Reputation mgmt", "Compliant ads"],
  },
  {
    icon: <ShoppingCart className="w-7 h-7 text-ink" />,
    title: "E-commerce & Tienda Online",
    description:
      "Tiendas en Shopify, WooCommerce y Amazon. Optimizaci\u00f3n de conversi\u00f3n, campa\u00f1as de cat\u00e1logo, recuperaci\u00f3n de carritos y estrategias de retenci\u00f3n que aumentan ventas y LTV.",
    tags: ["Conversion rate", "Cat\u00e1logo din\u00e1mico", "Retenci\u00f3n & LTV"],
  },
  {
    icon: <Building className="w-7 h-7 text-ink" />,
    title: "Inmobiliario & Desarrollo",
    description:
      "Desarrolladoras, inmobiliarias y brokers. Landing pages de alta conversi\u00f3n, campa\u00f1as de leads calificados por perfil de inversi\u00f3n y nurturing que acorta el ciclo de venta.",
    tags: ["Lead qualification", "Landing pages", "Nurturing automatizado"],
  },
]

export function VerticalsSection() {
  return (
    <section className="py-24 px-6 bg-gray-100 border-t border-b border-gray-200">
      <Reveal className="max-w-[1120px] mx-auto">
        <p className="text-xs uppercase tracking-[0.12em] text-primary font-bold mb-4">
          Industrias que atendemos
        </p>
        <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.2] text-ink max-w-[640px] tracking-tight mb-12">
          Estrategias de Marketing por Industria: Turismo, Salud, E-commerce y M&aacute;s
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {verticals.map((v) => (
            <VerticalCard key={v.title} {...v} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
