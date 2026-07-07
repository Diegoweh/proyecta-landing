"use client"

import type { ReactNode } from "react"
import { sendGTMEvent } from "@next/third-parties/google"

const WA_NUMBER = "5213318635199"
const WA_MESSAGE = "Hola Proyecta, quiero la auditoría gratis de mi sitio web."

interface WaLinkProps {
  linkId: string
  className?: string
  children: ReactNode
}

export function WaLink({ linkId, className = "", children }: WaLinkProps) {
  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`

  const handleClick = () => {
    sendGTMEvent({
      event: "whatsapp_click",
      link_id: linkId,
      link_url: `https://wa.me/${WA_NUMBER}`,
      link_text: "Auditoría gratis",
    })
    if (typeof window !== "undefined" && (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq) {
      ;(window as unknown as { fbq: (...args: unknown[]) => void }).fbq("track", "Contact")
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      id={linkId}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  )
}
