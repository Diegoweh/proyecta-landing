import { Reveal } from "../reveal"

const steps = [
  { n: "01", title: "Auditoría gratis", body: "Vemos qué frena tus ventas." },
  { n: "02", title: "Diseño a la medida", body: "Lo apruebas antes de programar." },
  { n: "03", title: "Desarrollo", body: "Rápido, responsivo, medible." },
  { n: "04", title: "Lanzas", body: "Listo para recibir campañas." },
]

export function WebProcess() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-[1080px]">
        <Reveal>
          <span className="mb-3.5 inline-block font-mono text-[11.5px] uppercase tracking-[0.18em] text-primary">
            Así de simple
          </span>
        </Reveal>
        <Reveal>
          <h2 className="text-[clamp(28px,5vw,44px)] font-black leading-[1.05] tracking-tight text-ink">
            Tu sitio que vende, en 3 semanas.
          </h2>
        </Reveal>
        <div className="mt-2 grid gap-3 md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} className={i === 1 ? "delay-100" : i === 2 ? "delay-150" : i === 3 ? "delay-200" : ""}>
              <div className="h-full rounded-xl border border-border bg-white p-5">
                <div className="font-mono text-xs font-medium text-primary">{s.n}</div>
                <h3 className="mt-2 text-base font-bold">{s.title}</h3>
                <p className="mt-1 text-[13px] text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
