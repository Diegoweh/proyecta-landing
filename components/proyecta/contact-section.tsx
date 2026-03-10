"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import { Reveal } from "./reveal"
import { Target } from "lucide-react"

interface FormData {
  name: string
  phone: string
  industry: string
  budget: string
}

const WEBHOOK_URL = "TU_WEBHOOK_URL_DE_MAKE"

export function ContactSection() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    industry: "",
    budget: "",
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const payload = {
      ...formData,
      timestamp: new Date().toISOString(),
      source: "landing-proyecta",
    }

    if (WEBHOOK_URL !== "TU_WEBHOOK_URL_DE_MAKE") {
      try {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      } catch (err) {
        console.error("Webhook error:", err)
      }
    }

    router.push("/gracias")
  }

  return (
    <section className="py-24 px-6 max-w-[1120px] mx-auto" id="contacto">
      <Reveal className="bg-ink rounded-[20px] p-16 md:p-16 max-md:p-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-start overflow-hidden relative">
        {/* Background glow */}
        <div className="absolute -top-24 -right-24 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(200,16,46,0.15)_0%,transparent_70%)] pointer-events-none" />

        {/* Left column */}
        <div className="relative z-10">
          <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-white leading-[1.2] tracking-tight mb-5">
            Solicita tu diagn&oacute;stico gratuito
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8">
            En una llamada de 20 minutos analizamos tu situaci&oacute;n actual y te damos al menos 3 oportunidades concretas para mejorar tus resultados. Sin compromiso, sin pitch agresivo &mdash; solo datos y recomendaciones.
          </p>
          <div className="flex items-start gap-3 bg-white/[0.06] rounded-[10px] p-5 border border-white/[0.08]">
            <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-white/50 text-[0.85rem] leading-normal">
              <strong className="text-white/80">Nuestra garant&iacute;a:</strong> Si al terminar la llamada no te llevas al menos una idea accionable que puedas implementar con tu equipo, te enviamos un an&aacute;lisis completo de tu competencia digital totalmente gratis.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="relative z-10">
          <p className="text-white text-[1.1rem] font-bold mb-6">
            {'Cu\u00e9ntanos sobre tu negocio'}
          </p>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-white/50 text-xs font-semibold uppercase tracking-wide">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/[0.08] border border-white/[0.12] rounded-lg px-4 py-3 text-white font-sans text-[0.95rem] placeholder:text-white/25 focus:outline-none focus:border-primary focus:bg-white/[0.12] transition-all duration-200"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-white/50 text-xs font-semibold uppercase tracking-wide">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="Ej: 33 1234 5678"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/[0.08] border border-white/[0.12] rounded-lg px-4 py-3 text-white font-sans text-[0.95rem] placeholder:text-white/25 focus:outline-none focus:border-primary focus:bg-white/[0.12] transition-all duration-200"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5 mt-4">
              <label className="text-white/50 text-xs font-semibold uppercase tracking-wide">
                Industria
              </label>
              <select
                required
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="w-full bg-white/[0.08] border border-white/[0.12] rounded-lg px-4 py-3 text-white font-sans text-[0.95rem] cursor-pointer focus:outline-none focus:border-primary focus:bg-white/[0.12] transition-all duration-200"
              >
                <option value="" disabled className="bg-ink text-white">
                  Selecciona tu industria
                </option>
                <option value="empresarial" className="bg-ink text-white">Empresarial &amp; Servicios profesionales</option>
                <option value="turismo" className="bg-ink text-white">Turismo &amp; Hospitalidad</option>
                <option value="food" className="bg-ink text-white">Food &amp; Lifestyle</option>
                <option value="salud" className="bg-ink text-white">Salud &amp; Wellness</option>
                <option value="ecommerce" className="bg-ink text-white">E-commerce / Tienda online</option>
                <option value="realestate" className="bg-ink text-white">Inmobiliario / Desarrollo</option>
                <option value="other" className="bg-ink text-white">Otro</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5 mt-4">
              <label className="text-white/50 text-xs font-semibold uppercase tracking-wide">
                {'¿Cu\u00e1nto inviertes en ads?'}
              </label>
              <select
                required
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full bg-white/[0.08] border border-white/[0.12] rounded-lg px-4 py-3 text-white font-sans text-[0.95rem] cursor-pointer focus:outline-none focus:border-primary focus:bg-white/[0.12] transition-all duration-200"
              >
                <option value="" disabled className="bg-ink text-white">
                  {'¿Cu\u00e1nto inviertes en ads?'}
                </option>
                <option value="starting" className="bg-ink text-white">{'A\u00fan no invierto, quiero empezar'}</option>
                <option value="5k-15k" className="bg-ink text-white">$5,000 - $15,000 MXN/mes</option>
                <option value="15k-50k" className="bg-ink text-white">$15,000 - $50,000 MXN/mes</option>
                <option value="50k-150k" className="bg-ink text-white">$50,000 - $150,000 MXN/mes</option>
                <option value="150k+" className="bg-ink text-white">{'M\u00e1s de $150,000 MXN/mes'}</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white py-4 border-none rounded-[10px] font-sans text-base font-bold cursor-pointer mt-4 transition-all duration-200 hover:bg-accent-dark hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Solicitar diagn\u00f3stico gratuito \u2192"}
            </button>
            <p className="text-white/30 text-xs mt-3 text-center">
              {'Respondemos en menos de 24 horas \u00b7 Sin compromiso \u00b7 Sin spam'}
            </p>
          </form>
        </div>
      </Reveal>
    </section>
  )
}
