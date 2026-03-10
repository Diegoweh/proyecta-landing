import { Instagram, Linkedin, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10 px-6 text-center text-sm text-gray-400">
      <p>
        {'© 2026 Proyecta Igniting Marketing \u00b7 Mazatl\u00e1n, Sinaloa \u00b7 '}
        <a href="mailto:hola@proyecta.com.mx" className="text-gray-600 no-underline hover:text-ink transition-colors">
          hola@proyecta.com.mx
        </a>
      </p>
      <div className="mt-4 flex items-center justify-center gap-4">
        <a
          href="https://wa.me/5213318635199?text=Hola%2C%20vi%20su%20sitio%20y%20me%20interesa%20el%20diagn%C3%B3stico%20gratuito"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="text-gray-500 transition-colors hover:text-ink"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
        <a
          href="https://www.instagram.com/proyectaignitingmarketing/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="text-gray-500 transition-colors hover:text-ink"
        >
          <Instagram className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/company/proyectaigniting/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-gray-500 transition-colors hover:text-ink"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </div>
    </footer>
  )
}
