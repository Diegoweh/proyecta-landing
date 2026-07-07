"use client"

import { Shield } from "lucide-react"
import { Reveal } from "../reveal"
import { WaLink } from "./wa-link"

export function WebCtaForm() {
  return (
    <section id="form" className="px-6 py-16 text-center">
      <div className="mx-auto max-w-[1080px]">
        <Reveal>
          <span className="mb-3.5 inline-block font-mono text-[11.5px] uppercase tracking-[0.18em] text-primary">
            Auditoría gratis
          </span>
        </Reveal>
        <Reveal>
          <h2 className="mx-auto max-w-[560px] text-[clamp(28px,5vw,44px)] font-black leading-[1.05] tracking-tight text-ink">
            ¿Listo para que tu sitio venda?
          </h2>
        </Reveal>
        <Reveal className="delay-100">
          <p className="mx-auto mt-2.5 max-w-[480px] text-base text-muted-foreground">
            Déjanos tus datos y en menos de 24 h te decimos cómo mejorar tus ventas. Sin compromiso.
          </p>
        </Reveal>
        <Reveal className="delay-100">
          <div className="mx-auto mt-7 max-w-[440px] rounded-2xl border border-border bg-white p-6 text-left shadow-[0_20px_50px_-24px_rgba(0,0,0,0.2)]">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <label className="mb-1.5 block font-mono text-[10.5px] uppercase tracking-wide text-muted-foreground">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full rounded-lg border border-border px-3.5 py-3 text-[15px] focus:border-ink focus:outline-none"
                />
              </div>
              <div className="mb-3">
                <label className="mb-1.5 block font-mono text-[10.5px] uppercase tracking-wide text-muted-foreground">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="Ej. 669 123 4567"
                  className="w-full rounded-lg border border-border px-3.5 py-3 text-[15px] focus:border-ink focus:outline-none"
                />
              </div>
              <div className="mb-3">
                <label className="mb-1.5 block font-mono text-[10.5px] uppercase tracking-wide text-muted-foreground">
                  ¿Tienes sitio actual? (URL — opcional)
                </label>
                <input
                  type="url"
                  placeholder="https://"
                  className="w-full rounded-lg border border-border px-3.5 py-3 text-[15px] focus:border-ink focus:outline-none"
                />
              </div>
              <WaLink
                linkId="web-form-cta"
                className="flex w-full items-center justify-center rounded-xl bg-ink px-6 py-4 text-base font-semibold text-white transition-transform duration-150 hover:-translate-y-0.5"
              >
                Solicitar auditoría gratis →
              </WaLink>
              <div className="mt-2.5 text-center font-mono text-[11px] text-muted-foreground">
                Respondemos en menos de 24 horas · Sin spam
              </div>
            </form>
          </div>
        </Reveal>
        <Reveal className="delay-150">
          <div className="mx-auto mt-4 flex max-w-[420px] items-start justify-center gap-2 text-[13px] text-muted-foreground">
            <Shield className="h-4 w-4 flex-shrink-0 text-primary" />
            <span>
              Si no te llevas al menos 3 ideas accionables, el análisis de tu competencia corre por nuestra cuenta.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
