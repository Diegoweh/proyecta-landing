"use client"

import { useState } from "react"
import { Reveal } from "./reveal"
import { faqItems } from "@/lib/seo"

type FaqItemData = (typeof faqItems)[number]

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItemData
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center gap-4 text-left font-bold text-[1.05rem] text-ink cursor-pointer bg-transparent border-none p-0 font-sans"
        aria-expanded={isOpen}
      >
        {item.question}
        <span
          className={`text-2xl text-gray-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-45 text-primary" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? "max-h-[300px] pt-4" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 text-[0.95rem] leading-relaxed">{item.answer}</p>
      </div>
    </div>
  )
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-6 bg-gray-100">
      <Reveal className="max-w-[720px] mx-auto">
        <p className="text-xs uppercase tracking-[0.12em] text-primary font-bold mb-4">
          Preguntas frecuentes
        </p>
        <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.4rem)] leading-[1.2] tracking-tight text-ink mb-12">
          Preguntas Frecuentes sobre Nuestra Agencia de Marketing Digital
        </h2>
        <div>
          {faqItems.map((faq, index) => (
            <FaqItem
              key={index}
              item={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
