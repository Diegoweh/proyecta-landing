import { WebScrollLink } from "./web-scroll-link"
import Image from "next/image"

export function WebNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1080px] items-center justify-between px-6 py-3.5">
        <Image
          src="/logo-dark.png"   // place your image inside /public
          alt="Proyecta"
          width={130}
          height={40}
          priority
        />
        <WebScrollLink
          href="#form"
          className="hidden rounded-xl bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-150 hover:-translate-y-0.5 md:inline-flex"
        >
          Auditoría gratis →
        </WebScrollLink>
      </div>
    </nav>
  )
}
