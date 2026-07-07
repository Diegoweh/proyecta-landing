import { Reveal } from "../reveal"
import { KpiCounter } from "./kpi-counter"

// KPIs placeholder — reemplazar por métricas reales/verificables por caso (ver breaf-lp-solo-web.md)
export function WebProof() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-[1080px]">
        <Reveal>
          <div className="rounded-[22px] bg-ink px-7 py-12 text-center text-white">
            <span className="mb-3.5 inline-block font-mono text-[11.5px] uppercase tracking-[0.18em] text-white/60">
              Resultados, no promesas
            </span>
            <h2 className="mb-8 text-[clamp(28px,5vw,44px)] font-black leading-[1.05] tracking-tight text-white">
              Sitios que venden de verdad.
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              <div>
                <KpiCounter to={340} pre="+" suf="%" className="text-[clamp(38px,7vw,58px)] font-black tracking-tight text-white" />
                <div className="mt-1 font-mono text-xs uppercase tracking-wide text-white/50">Turismo · ventas online</div>
              </div>
              <div>
                <KpiCounter to={3.8} suf="x" dec={1} className="text-[clamp(38px,7vw,58px)] font-black tracking-tight text-white" />
                <div className="mt-1 font-mono text-xs uppercase tracking-wide text-white/50">Servicios · ROAS</div>
              </div>
              <div>
                <KpiCounter to={62} pre="-" suf="%" className="text-[clamp(38px,7vw,58px)] font-black tracking-tight text-white" />
                <div className="mt-1 font-mono text-xs uppercase tracking-wide text-white/50">Turismo · costo por lead</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
