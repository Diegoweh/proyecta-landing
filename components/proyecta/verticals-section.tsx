import { Reveal } from "./reveal"
import { Building2, Hotel, UtensilsCrossed, HeartPulse } from "lucide-react"
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
      <h3 className="text-ink text-[1.1rem] font-bold mb-2.5">{title}</h3>
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
      "Consultoras, despachos, tech, servicios B2B. Generaci\u00f3n de leads calificados con embudos que filtran y cierran.",
    tags: ["Lead generation", "LinkedIn + Meta", "CRM integration"],
  },
  {
    icon: <Hotel className="w-7 h-7 text-ink" />,
    title: "Turismo & Hospitalidad",
    description:
      "Hoteles, resorts, atracciones tur\u00edsticas. M\u00e1s reservas directas, menor dependencia de intermediarios, campa\u00f1as estacionales.",
    tags: ["Reservas directas", "Revenue por temporada", "OTA independence"],
  },
  {
    icon: <UtensilsCrossed className="w-7 h-7 text-ink" />,
    title: "Food & Lifestyle",
    description:
      "Restaurantes, franquicias, marcas de consumo. Posicionamiento de marca, contenido que conecta, y campa\u00f1as que llenan mesas.",
    tags: ["Brand awareness", "Contenido viral", "Local marketing"],
  },
  {
    icon: <HeartPulse className="w-7 h-7 text-ink" />,
    title: "Salud & Wellness",
    description:
      "Cl\u00ednicas, spas, centros de bienestar. Marketing \u00e9tico con cumplimiento normativo, captaci\u00f3n de pacientes, y posicionamiento experto.",
    tags: ["Patient acquisition", "Reputation mgmt", "Compliant ads"],
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
          Estrategias espec&iacute;ficas para cada sector, no recetas gen&eacute;ricas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {verticals.map((v) => (
            <VerticalCard key={v.title} {...v} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
