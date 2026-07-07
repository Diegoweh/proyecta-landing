import { Target, Zap, TrendingUp } from "lucide-react"
import { Reveal } from "../reveal"

const benefits = [
  {
    icon: Target,
    title: "Hecho para vender",
    body: "Cada sección empuja a contactarte. Diseño y copy enfocados en convertir, no en rellenar.",
  },
  {
    icon: Zap,
    title: "Vuela en el celular",
    body: "Mobile-first y carga al instante. Ahí están tus clientes y ahí funciona perfecto.",
  },
  {
    icon: TrendingUp,
    title: "Listo para Google y ads",
    body: "SEO técnico y medición conectada. Recibe campañas con piso firme desde el día 1.",
  },
]

export function WebBenefits() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-[1080px]">
        <Reveal>
          <span className="mb-3.5 inline-block font-mono text-[11.5px] uppercase tracking-[0.18em] text-primary">
            Por qué el nuestro sí
          </span>
        </Reveal>
        <Reveal>
          <h2 className="max-w-[720px] text-[clamp(28px,5vw,44px)] font-black leading-[1.05] tracking-tight text-ink">
            No es una página. Es una máquina de clientes.
          </h2>
        </Reveal>
        <div className="mt-2 grid gap-4 md:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} className={i === 1 ? "delay-100" : i === 2 ? "delay-150" : ""}>
              <div className="h-full rounded-xl border border-border bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(0,0,0,0.06)]">
                <b.icon className="mb-3.5 h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold tracking-tight">{b.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
