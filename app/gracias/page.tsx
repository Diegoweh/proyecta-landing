import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gracias — Proyecta',
  description: 'Recibimos tu solicitud. Te contactamos en menos de 24 horas.',
  robots: { index: false },
}

export default function GraciasPage() {
  return (
    <main className="min-h-screen bg-ink flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-5xl mb-6">✓</div>
        <h1 className="font-serif text-3xl text-white mb-4">
          ¡Listo, recibimos tu solicitud!
        </h1>
        <p className="text-white/60 text-base leading-relaxed mb-8">
          Te contactamos en menos de 24 horas por WhatsApp para agendar tu diagnóstico gratuito.
        </p>
        <a
          href="https://wa.me/5213318635199?text=Hola%2C%20acabo%20de%20llenar%20el%20formulario%20y%20quiero%20agendar%20mi%20diagn%C3%B3stico%20gratuito"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-base transition-opacity duration-200 hover:opacity-90 mb-4"
        >
          ¿Quieres respuesta inmediata? Escríbenos por WhatsApp
        </a>
        <br />
        <Link
          href="/"
          className="text-white/40 text-sm hover:text-white/70 transition-colors duration-200"
        >
          ← Volver al inicio
        </Link>
      </div>
    </main>
  )
}
