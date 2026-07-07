"use client"

import { useEffect, useRef, useState } from "react"

interface KpiCounterProps {
  to: number
  pre?: string
  suf?: string
  dec?: number
  className?: string
  redSuffix?: boolean
}

export function KpiCounter({ to, pre = "", suf = "", dec = 0, className = "", redSuffix = true }: KpiCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true)
            const duration = 1300
            let start: number | null = null
            const step = (t: number) => {
              if (start === null) start = t
              const progress = Math.min((t - start) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setValue(to * eased)
              if (progress < 1) requestAnimationFrame(step)
            }
            requestAnimationFrame(step)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [to])

  const formatted = dec ? value.toFixed(dec) : Math.round(value).toString()

  return (
    <div ref={ref} className={className}>
      {pre}
      {formatted}
      {redSuffix ? <span className="text-primary">{suf}</span> : suf}
    </div>
  )
}
