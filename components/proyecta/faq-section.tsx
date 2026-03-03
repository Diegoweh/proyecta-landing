"use client"

import { useState } from "react"
import { Reveal } from "./reveal"

interface FaqItemData {
  question: string
  answer: string
}

const faqs: FaqItemData[] = [
  {
    question: "\u00bfCon qu\u00e9 tipo de empresas trabajan?",
    answer:
      "Atendemos cuatro sectores principales: Empresarial & Servicios, Turismo & Hospitalidad, Food & Lifestyle, y Salud & Wellness. Lo que nos define es nuestro enfoque en resultados medibles \u2014 cada estrategia se dise\u00f1a espec\u00edficamente para la din\u00e1mica de tu industria, no usamos plantillas gen\u00e9ricas.",
  },
  {
    question: "\u00bfCu\u00e1nto cuesta trabajar con ustedes?",
    answer:
      "Nuestros servicios de gesti\u00f3n mensual empiezan en $20,000 MXN/mes dependiendo del alcance. Proyectos puntuales (branding, sitio web) se cotizan individualmente. En la llamada de diagn\u00f3stico te damos una propuesta clara y transparente, sin costos ocultos.",
  },
  {
    question: "Estoy fuera de Mazatl\u00e1n, \u00bfpueden trabajar conmigo?",
    answer:
      "Absolutamente. M\u00e1s del 60% de nuestros clientes est\u00e1n fuera de Sinaloa. El marketing digital no tiene fronteras \u2014 lo que importa es la estrategia, la ejecuci\u00f3n y la comunicaci\u00f3n. Mantenemos contacto constante por WhatsApp, email y videollamada semanal.",
  },
  {
    question: "\u00bfEn cu\u00e1nto tiempo veo resultados?",
    answer:
      "Con campa\u00f1as de paid media (Meta/Google Ads) puedes ver leads y ventas desde las primeras 2-4 semanas. SEO y posicionamiento org\u00e1nico toman 3-6 meses para resultados significativos. En el diagn\u00f3stico te damos una l\u00ednea de tiempo realista para tu caso espec\u00edfico.",
  },
  {
    question: "Ya tengo una agencia, \u00bfpor qu\u00e9 cambiarme?",
    answer:
      "No tienes que cambiar nada todav\u00eda. El diagn\u00f3stico gratuito te da una segunda opini\u00f3n profesional sobre tu situaci\u00f3n actual. Si identificamos oportunidades que no se est\u00e1n aprovechando, decides t\u00fa c\u00f3mo proceder. Muchos de nuestros clientes llegaron exactamente as\u00ed.",
  },
  {
    question: "\u00bfC\u00f3mo miden los resultados?",
    answer:
      "Cada mes recibes un reporte enfocado en lo que importa: leads generados, costo por adquisici\u00f3n, retorno sobre inversi\u00f3n, y comparativa mes a mes. No te mandamos capturas de pantalla \u2014 te mandamos un an\u00e1lisis con contexto, insights y pr\u00f3ximos pasos concretos.",
  },
]

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
          Lo que otros nos han preguntado antes de trabajar juntos
        </h2>
        <div>
          {faqs.map((faq, index) => (
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
