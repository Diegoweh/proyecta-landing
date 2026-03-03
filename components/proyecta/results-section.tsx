import { Reveal } from "./reveal"

interface ResultCardProps {
  metric: string
  description: string
  client: string
}

function ResultCard({ metric, description, client }: ResultCardProps) {
  return (
    <div className="bg-white/[0.06] border border-white/10 rounded-xl p-9 transition-colors duration-300 hover:bg-white/10">
      <div className="font-serif text-[2.8rem] leading-none text-primary mb-2">
        {metric}
      </div>
      <p className="text-[0.95rem] text-white/70 mb-5 leading-normal">
        {description}
      </p>
      <div className="flex items-center gap-2.5 pt-5 border-t border-white/10">
        <span className="text-xs text-white/40">{client}</span>
      </div>
    </div>
  )
}

const results: ResultCardProps[] = [
  {
    metric: "+340%",
    description:
      "Incremento en venta de boletos online en los primeros 6 meses de gesti\u00f3n de campa\u00f1as digitales.",
    client: "Gran Acuario Mazatl\u00e1n \u00b7 Turismo & Hospitalidad",
  },
  {
    metric: "3.8x",
    description:
      "Retorno sobre inversi\u00f3n publicitaria en campa\u00f1as de generaci\u00f3n de leads para servicios profesionales.",
    client: "Gavias \u00b7 Empresarial & Servicios",
  },
  {
    metric: "-62%",
    description:
      "Reducci\u00f3n en costo por lead calificado despu\u00e9s de reestructurar campa\u00f1as y optimizar audiencias.",
    client: "Costa de Oro \u00b7 Turismo & Hospitalidad",
  },
]

export function ResultsSection() {
  return (
    <section className="bg-ink py-24 px-6" id="resultados">
      <Reveal className="max-w-[1120px] mx-auto">
        <p className="text-xs uppercase tracking-[0.12em] text-primary font-bold mb-4">
          Casos de &eacute;xito
        </p>
        <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.2] max-w-[640px] tracking-tight text-white">
          No hablamos de m&eacute;tricas vanidad. Hablamos de clientes y ventas reales.
        </h2>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result) => (
            <ResultCard key={result.metric} {...result} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
