import { Zap } from "lucide-react"
import { Reveal } from "../reveal"
import { WebScrollLink } from "./web-scroll-link"

export function WebHero() {
  return (
    <section className="px-6 pb-8 pt-14">
      <div className="mx-auto grid max-w-[1080px] items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          {/* <Reveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-gray-100 px-3.5 py-1.5 font-mono text-[11px] tracking-wide text-muted-foreground">
              <span className="block h-[7px] w-[7px] animate-[pulse-dot_1.8s_infinite] rounded-full bg-primary" />
              Sitios web que venden
            </span>
          </Reveal> */}
          <Reveal>
            <h1 className="max-w-[620px] text-[clamp(40px,8vw,68px)] font-black leading-[1.05] tracking-tight text-ink text-balance">
              Webs que <span className="text-primary">venden</span>.<br />No que solo se ven bien.
            </h1>
          </Reveal>
          <Reveal className="delay-100">
            <p className="mt-4 max-w-[440px] text-lg text-gray-600">
              Diseño a la medida, rápido y listo para captar clientes. Tu nuevo sitio en 3 semanas.
            </p>
          </Reveal>
          <Reveal className="mt-6 flex flex-wrap gap-3 delay-150">
            <WebScrollLink
              href="#form"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-7 py-4 text-base font-semibold text-white shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-all duration-150 hover:-translate-y-0.5 hover:bg-black"
            >
              Quiero mi sitio →
            </WebScrollLink>
            <WebScrollLink
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-7 py-4 text-base font-semibold text-ink transition-colors duration-150 hover:border-ink"
            >
              Ver nuestro trabajo
            </WebScrollLink>
          </Reveal>
          <Reveal className="delay-200">
            <p className="mt-4 font-mono text-[13px] text-muted-foreground">
              Desde <b className="text-ink">$25,000 MXN</b> · cotización a la medida
            </p>
            <div className="mt-7 flex flex-wrap gap-6">
              <div>
                <div className="text-[26px] font-black tracking-tight">+65</div>
                <div className="font-mono text-xs text-muted-foreground">webs entregadas</div>
              </div>
              <div>
                <div className="text-[26px] font-black tracking-tight">
                  40<span className="text-primary">+</span>
                </div>
                <div className="font-mono text-xs text-muted-foreground">años de marca</div>
              </div>
              <div>
                <div className="text-[26px] font-black tracking-tight">
                  3 <span className="text-primary">sem</span>
                </div>
                <div className="font-mono text-xs text-muted-foreground">de entrega</div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="delay-100" as="div">
          <div className="relative mx-auto max-w-[380px]" style={{ perspective: "1200px" }}>
            <div className="animate-[floaty_5s_ease-in-out_infinite] overflow-hidden rounded-2xl border border-border bg-white shadow-[0_30px_70px_-20px_rgba(0,0,0,0.22)] max-md:animate-[floaty-m_5s_ease-in-out_infinite] md:[transform:rotateY(-9deg)_rotateX(3deg)]">
              <div className="flex gap-1.5 border-b border-border bg-gray-50 px-3.5 py-2.5">
                <i className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <i className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <i className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="p-5">
                <div className="mb-2.5 h-3 w-[62%] rounded bg-ink" />
                <div className="mb-1.5 h-2 w-[82%] rounded bg-gray-200" />
                <div className="mb-4 h-2 w-[48%] rounded bg-gray-200" />
                <span className="inline-block animate-[cpulse_1.6s_infinite] rounded-md bg-primary px-3.5 py-2 text-[11px] font-bold text-white">
                  Contactar ahora →
                </span>
                <div className="mt-5 flex h-[60px] items-end gap-1.5">
                  <b className="block h-[30%] flex-1 rounded-t bg-gray-100" />
                  <b className="block h-[52%] flex-1 rounded-t bg-gray-100" />
                  <b className="block h-[44%] flex-1 rounded-t bg-gray-100" />
                  <b className="block h-[72%] flex-1 rounded-t bg-gray-100" />
                  <b className="block h-full flex-1 rounded-t bg-primary" />
                </div>
              </div>
            </div>
            <div className="absolute -right-2.5 -top-3.5 hidden items-center gap-1.5 rounded-lg border border-border bg-white px-3.5 py-2 text-xs font-semibold shadow-[0_12px_30px_rgba(0,0,0,0.1)] md:flex">
              <span className="h-2 w-2 rounded-full bg-[#28c840]" /> +3 leads hoy
            </div>
            <div className="absolute -bottom-2 -left-5 hidden items-center gap-1.5 rounded-lg border border-border bg-white px-3.5 py-2 text-xs font-semibold shadow-[0_12px_30px_rgba(0,0,0,0.1)] md:flex">
              <Zap className="h-3.5 w-3.5 text-primary" /> Carga 0.9s
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
