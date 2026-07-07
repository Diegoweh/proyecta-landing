"use client"

import Link, { type LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import type { MouseEvent, ReactNode } from "react"

interface WebScrollLinkProps extends LinkProps {
  children: ReactNode
  className?: string
}

export function WebScrollLink({ href, children, className, ...props }: WebScrollLinkProps) {
  const pathname = usePathname()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (typeof href !== "string" || !href.startsWith("#") || pathname !== "/web") {
      return
    }

    const target = document.querySelector<HTMLElement>(href)
    if (!target) return

    event.preventDefault()

    const nav = document.querySelector("nav")
    const navHeight = nav instanceof HTMLElement ? nav.offsetHeight : 0
    const targetTop = window.scrollY + target.getBoundingClientRect().top - navHeight - 24

    window.scrollTo({ top: Math.max(targetTop, 0), behavior: "smooth" })
    window.history.replaceState(null, "", href)
  }

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
