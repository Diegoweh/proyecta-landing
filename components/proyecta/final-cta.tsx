import Link from "next/link"
import { Reveal } from "./reveal"

export function FinalCta() {
  return (
    <Reveal as="section" className="py-24 px-6 text-center max-w-[1120px] mx-auto">
      <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] leading-[1.15] tracking-tight text-ink max-w-[580px] mx-auto mb-6 text-balance">
        Deja de adivinar. Empieza a crecer con estrategia.
      </h2>
      <p className="text-gray-600 text-[1.05rem] max-w-[500px] mx-auto mb-9 leading-relaxed">
        Solicita tu diagn&oacute;stico gratuito y descubre cu&aacute;nto puede mejorar tu presencia digital con el equipo correcto.
      </p>
      <Link
        href="#contacto"
        className="bg-primary text-primary-foreground px-8 py-3.5 rounded-[10px] font-semibold text-base no-underline inline-flex items-center gap-2 transition-all duration-200 hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(200,16,46,0.2)]"
      >
        {'Solicitar diagn\u00f3stico gratuito \u2192'}
      </Link>
    </Reveal>
  )
}
