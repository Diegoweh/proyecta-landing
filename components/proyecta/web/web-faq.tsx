import { Reveal } from "../reveal"

const faqs = [
  {
    q: "¿Cuánto cuesta?",
    a: "Desde $25,000 MXN, a la medida según alcance. En la auditoría te damos precio y entregables claros, sin sorpresas.",
  },
  {
    q: "¿En cuánto tiempo?",
    a: "Alrededor de 3 semanas, según alcance y rapidez con que recibamos tu información.",
  },
  {
    q: "Ya tengo sitio, ¿lo rehacen?",
    a: "Sí. En la auditoría te decimos si conviene rediseñarlo o optimizar lo que tienes.",
  },
]

export function WebFaq() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-[1080px]">
        <Reveal>
          <span className="mb-3.5 inline-block font-mono text-[11.5px] uppercase tracking-[0.18em] text-primary">
            Antes de empezar
          </span>
        </Reveal>
        <Reveal>
          <h2 className="text-[clamp(28px,5vw,44px)] font-black leading-[1.05] tracking-tight text-ink">Lo esencial.</h2>
        </Reveal>
        <Reveal className="delay-100">
          <div className="mx-auto mt-6 max-w-[720px]">
            {faqs.map((item, i) => (
              <details key={item.q} className="group border-b border-border" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-semibold [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="text-xl text-primary group-open:hidden">+</span>
                  <span className="hidden text-xl text-primary group-open:inline">–</span>
                </summary>
                <p className="pb-4 text-[14.5px] text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
