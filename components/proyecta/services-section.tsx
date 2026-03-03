import { Reveal } from "./reveal"

interface ServiceItemProps {
  title: string
  description: string
}

function ServiceItem({ title, description }: ServiceItemProps) {
  return (
    <div className="bg-paper p-9 transition-colors duration-200 hover:bg-warm">
      <h3 className="text-[1.15rem] font-bold text-ink mb-2.5 flex items-center gap-2.5">
        <span className="block w-2 h-2 bg-primary rounded-sm flex-shrink-0" />
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed pl-[18px]">{description}</p>
    </div>
  )
}

const services: ServiceItemProps[] = [
  {
    title: "Campa\u00f1as de Paid Media",
    description:
      "Meta Ads, Google Ads, TikTok Ads. Estructura, segmentaci\u00f3n, creativos y optimizaci\u00f3n continua enfocada en generar leads y ventas, no clics vac\u00edos.",
  },
  {
    title: "Branding e Identidad",
    description:
      "Concepto rector, identidad visual, manual de marca y sistema gr\u00e1fico. Tu marca como activo estrat\u00e9gico que diferencia y posiciona frente a la competencia.",
  },
  {
    title: "Desarrollo Web",
    description:
      "Sitios dise\u00f1ados para convertir visitantes en clientes. UX pensada en tu usuario, velocidad optimizada, y embudo de conversi\u00f3n integrado desde el d\u00eda uno.",
  },
  {
    title: "SEO y Contenido",
    description:
      "Posicionamiento org\u00e1nico con estrategia de contenido, SEO t\u00e9cnico, y arquitectura que escala tu visibilidad y autoridad mes a mes.",
  },
  {
    title: "Producci\u00f3n Audiovisual",
    description:
      "Fotograf\u00eda, video, motion graphics y reels. Contenido que detiene el scroll, comunica tu valor y convierte atenci\u00f3n en acci\u00f3n.",
  },
  {
    title: "Estrategia y Consultor\u00eda",
    description:
      "Diagn\u00f3stico de tu ecosistema digital, plan de acci\u00f3n priorizado, y acompa\u00f1amiento estrat\u00e9gico con reportes que hablan de negocio, no de vanidad.",
  },
]

export function ServicesSection() {
  return (
    <Reveal as="section" className="py-24 px-6 max-w-[1120px] mx-auto">
      <p className="text-xs uppercase tracking-[0.12em] text-primary font-bold mb-4">
        Lo que hacemos
      </p>
      <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.2] max-w-[640px] tracking-tight text-ink mb-12">
        Todo lo que necesitas para crecer, bajo un solo equipo
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-gray-200 rounded-xl overflow-hidden">
        {services.map((service) => (
          <ServiceItem key={service.title} {...service} />
        ))}
      </div>
    </Reveal>
  )
}
