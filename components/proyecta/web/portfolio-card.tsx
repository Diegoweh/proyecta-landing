"use client"

import { useState } from "react"

interface PortfolioCardProps {
  src: string
  fallbackSrc: string
  name: string
  sector: string
  url: string
}

export function PortfolioCard({ src, fallbackSrc, name, sector, url }: PortfolioCardProps) {
  const [stage, setStage] = useState<"primary" | "fallback" | "broken">("primary")
  const currentSrc = stage === "fallback" ? fallbackSrc : src

  return (
    <div className="text-center flex-none w-[64%] snap-center md:w-auto md:flex-none">
      <div className="group relative mx-auto aspect-[9/19] w-full max-w-[215px] rounded-[30px] bg-neutral-900 p-2 shadow-[0_24px_50px_-18px_rgba(0,0,0,0.32)] transition-transform duration-300 md:group-hover:-translate-y-1.5">
        <div className="absolute top-2 left-1/2 z-10 h-4 w-16 -translate-x-1/2 rounded-b-xl bg-neutral-900" />
        <div className="relative h-full w-full overflow-hidden rounded-[23px] bg-gray-100">
          {stage !== "broken" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={currentSrc}
              alt={name}
              loading="lazy"
              className="h-full w-full object-cover object-top"
              onError={() => setStage((s) => (s === "primary" ? "fallback" : "broken"))}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center p-5 text-center font-mono text-xs text-muted-foreground">
              {name}
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 text-[15px] font-bold">{name}</div>
      <div className="mt-0.5 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">{sector}</div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-[12.5px] font-semibold text-primary"
      >
        Ver en vivo →
      </a>
    </div>
  )
}
