"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ScrollLink } from "./scroll-link"

export function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-paper/92 backdrop-blur-lg border-b border-gray-200 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto max-w-[1120px] flex items-center justify-between px-6 py-4">
       <Link href="#" className="inline-block">
          <Image
            src="/logo-dark.png"   // place your image inside /public
            alt="Proyecta"
            width={160}
            height={40}
            priority
          />
        </Link>
        <ScrollLink
          href="#contacto"
          className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold text-sm no-underline transition-all duration-200 hover:bg-accent-dark hover:-translate-y-px"
        >
          {'Solicitar diagn\u00f3stico gratis \u2192'}
        </ScrollLink>
      </div>
    </nav>
  )
}
