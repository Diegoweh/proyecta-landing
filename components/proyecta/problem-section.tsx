import { Reveal } from "./reveal"
import { TrendingDown, RefreshCw, Target } from "lucide-react"
import type { ReactNode } from "react"

interface ProblemCardProps {
  icon: ReactNode
  title: string
  description: string
}

function ProblemCard({ icon, title, description }: ProblemCardProps) {
  return (
    <div className="bg-warm rounded-xl p-8 border border-transparent transition-colors duration-300 hover:border-gray-200">
      <div className="w-11 h-11 bg-card rounded-[10px] flex items-center justify-center text-xl mb-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
        {icon}
      </div>
      <h3 className="text-[1.05rem] font-bold text-ink mb-2">{title}</h3>
      <p className="text-[0.92rem] text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

const problems: ProblemCardProps[] = [
  {
    icon: <TrendingDown className="w-5 h-5 text-ink" />,
    title: "Inviertes en marketing pero no ves retorno claro",
    description:
      "Cada mes se va presupuesto en ads, redes, contenido... y no tienes certeza de cu\u00e1ntos clientes realmente generaron. Los reportes que recibes son confusos o llenos de m\u00e9tricas que no significan nada para tu negocio.",
  },
  {
    icon: <RefreshCw className="w-5 h-5 text-ink" />,
    title: "Tu agencia actual se siente en piloto autom\u00e1tico",
    description:
      "Te mandan los mismos reportes gen\u00e9ricos cada mes, no proponen nada nuevo, y sientes que eres t\u00fa quien tiene que empujar. Necesitas un equipo que piense como socio estrat\u00e9gico, no como proveedor que cobra y desaparece.",
  },
  {
    icon: <Target className="w-5 h-5 text-ink" />,
    title: "Sabes que deber\u00edas estar creciendo m\u00e1s r\u00e1pido",
    description:
      "Ves a tu competencia posicion\u00e1ndose mientras t\u00fa sigues con la misma estrategia de siempre. El mercado digital avanza y tu presencia no est\u00e1 al nivel que tu negocio merece.",
  },
]

export function ProblemSection() {
  return (
    <Reveal as="section" className="py-24 px-6 max-w-[1120px] mx-auto">
      <p className="text-xs uppercase tracking-[0.12em] text-primary font-bold mb-4">
        El problema
      </p>
      <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.2] max-w-[640px] tracking-tight text-ink">
        Si algo de esto te suena familiar, no est&aacute;s solo
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {problems.map((problem) => (
          <ProblemCard key={problem.title} {...problem} />
        ))}
      </div>
    </Reveal>
  )
}
