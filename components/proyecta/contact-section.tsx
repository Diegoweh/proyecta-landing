"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import { Reveal } from "./reveal"
import { Target } from "lucide-react"

interface FormData {
  nombre: string
  empresa: string
  email: string
  whatsapp: string
  industria: string
  presupuesto: string
  reto: string
}

const LEADS_API_URL = process.env.NEXT_PUBLIC_LEADS_ENDPOINT
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const WHATSAPP_REGEX = /^\d{10}$/

export function ContactSection() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    empresa: "",
    email: "",
    whatsapp: "",
    industria: "",
    presupuesto: "",
    reto: "",
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMessage("")

    const normalizedData = {
      nombre: formData.nombre.trim(),
      empresa: formData.empresa.trim(),
      email: formData.email.trim(),
      whatsapp: formData.whatsapp.replace(/\D/g, ""),
      industria: formData.industria.trim(),
      presupuesto: formData.presupuesto.trim(),
      reto: formData.reto.trim(),
    }

    if (Object.values(normalizedData).some((value) => !value)) {
      setErrorMessage("Todos los campos son obligatorios.")
      return
    }

    if (!EMAIL_REGEX.test(normalizedData.email)) {
      setErrorMessage("Ingresa un email valido.")
      return
    }

    if (!WHATSAPP_REGEX.test(normalizedData.whatsapp)) {
      setErrorMessage("Ingresa un numero de WhatsApp de 10 digitos.")
      return
    }

    if (!LEADS_API_URL) {
      setErrorMessage("El endpoint de contacto no esta configurado.")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch(LEADS_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...normalizedData,
          origen: "landing.proyecta.com.mx",
        }),
      })

      if (!response.ok) {
        setErrorMessage("Hubo un error, por favor intenta de nuevo.")
        return
      }

      router.push("/gracias")
    } catch (error) {
      console.error("Webhook error:", error)
      setErrorMessage("Hubo un error de conexion.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 px-6 max-w-[1120px] mx-auto scroll-mt-28" id="contacto">
      <Reveal className="bg-ink rounded-[20px] p-16 md:p-16 max-md:p-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-start overflow-hidden relative">
        {/* Background glow */}
        <div className="absolute -top-24 -right-24 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(200,16,46,0.15)_0%,transparent_70%)] pointer-events-none" />

        {/* Left column */}
        <div className="relative z-10">
          <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-white leading-[1.2] tracking-tight mb-5">
            Solicita Tu Diagn&oacute;stico de Marketing Gratuito, Sin Compromiso
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
                  name="nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full bg-white/[0.08] border border-white/[0.12] rounded-lg px-4 py-3 text-white font-sans text-[0.95rem] placeholder:text-white/25 focus:outline-none focus:border-primary focus:bg-white/[0.12] transition-all duration-200"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-white/50 text-xs font-semibold uppercase tracking-wide">
                  Empresa
                </label>
                <input
                  type="text"
                  placeholder="Nombre de tu empresa"
                  required
                  name="empresa"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className="w-full bg-white/[0.08] border border-white/[0.12] rounded-lg px-4 py-3 text-white font-sans text-[0.95rem] placeholder:text-white/25 focus:outline-none focus:border-primary focus:bg-white/[0.12] transition-all duration-200"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-white/50 text-xs font-semibold uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="tu@empresa.com"
                  required
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
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
                name="industria"
                value={formData.industria}
                onChange={(e) => setFormData({ ...formData, industria: e.target.value })}
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
                name="presupuesto"
                value={formData.presupuesto}
                onChange={(e) => setFormData({ ...formData, presupuesto: e.target.value })}
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
            <div className="flex flex-col gap-1.5 mt-4">
              <label className="text-white/50 text-xs font-semibold uppercase tracking-wide">
                Reto principal
              </label>
              <textarea
                placeholder="Cuentanos cual es tu principal reto comercial o de marketing"
                required
                name="reto"
                value={formData.reto}
                onChange={(e) => setFormData({ ...formData, reto: e.target.value })}
                rows={4}
                className="w-full bg-white/[0.08] border border-white/[0.12] rounded-lg px-4 py-3 text-white font-sans text-[0.95rem] placeholder:text-white/25 focus:outline-none focus:border-primary focus:bg-white/[0.12] transition-all duration-200 resize-none"
              />
            </div>
            {errorMessage ? (
              <p className="text-[#ffb4b4] text-sm mt-4" role="alert">
                {errorMessage}
              </p>
            ) : null}
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
