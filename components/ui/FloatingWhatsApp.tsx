'use client';

import { MessageCircle } from 'lucide-react';
import { sendGTMEvent } from '@next/third-parties/google';
import { usePathname } from 'next/navigation';

export default function FloatingWhatsApp() {
  const pathname = usePathname();
  if (pathname?.startsWith('/web')) return null;

  return (
    <a
      href="https://wa.me/5213318635199?text=Hola%2C%20vi%20su%20sitio%20y%20me%20interesa%20el%20diagn%C3%B3stico%20gratuito"
      className="fixed right-6 bottom-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
      target="_blank"
      rel="noopener noreferrer"
      title="Contactar por WhatsApp"
      id="whatsapp-floating-button"
      onClick={() =>
        sendGTMEvent({
          event: 'whatsapp_click',
          link_id: 'whatsapp-floating-button',
          link_url: 'https://wa.me/5213318635199',
          link_text: 'WhatsApp Flotante',
        })
      }
    >
      <MessageCircle className="w-6 h-6" />

      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        ¿Necesitas ayuda?
      </span>

      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
    </a>
  );
}
