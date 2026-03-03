import { Reveal } from "./reveal"

interface ProcessStepProps {
  num: string
  title: string
  description: string
}

function ProcessStep({ num, title, description }: ProcessStepProps) {
  return (
    <div className="relative">
      <div className="font-serif text-[3.5rem] text-primary/20 leading-none mb-3">
        {num}
      </div>
      <h3 className="text-[1.1rem] font-bold text-ink mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

const steps: ProcessStepProps[] = [
  {
    num: "01",
    title: "Diagn\u00f3stico gratuito",
    description:
      "Analizamos tu presencia digital, tus ads, tu sitio web y tu competencia. Te decimos exactamente d\u00f3nde est\u00e1n las oportunidades \u2014 sin compromiso.",
  },
  {
    num: "02",
    title: "Estrategia a la medida",
    description:
      "Dise\u00f1amos un plan espec\u00edfico para tu negocio, tu industria y tus objetivos. Cada acci\u00f3n tiene un KPI medible y un timeline claro.",
  },
  {
    num: "03",
    title: "Ejecuci\u00f3n integral",
    description:
      "Nuestro equipo de estrategas, dise\u00f1adores, desarrolladores y productores ejecuta, mide y ajusta. T\u00fa te enfocas en tu negocio.",
  },
  {
    num: "04",
    title: "Reportes de negocio",
    description:
      "Cada mes recibes un reporte que habla de clientes, ventas y ROI \u2014 no de alcance e impresiones. Datos que sirven para tomar decisiones.",
  },
]

export function ProcessSection() {
  return (
    <Reveal as="section" className="py-24 px-6 bg-warm">
      <div className="max-w-[1120px] mx-auto">
        <p className="text-xs uppercase tracking-[0.12em] text-primary font-bold mb-4">
          C&oacute;mo trabajamos
        </p>
        <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.2] max-w-[640px] tracking-tight text-ink mb-14">
          De la primera llamada a resultados medibles en 30 d&iacute;as
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <ProcessStep key={step.num} {...step} />
          ))}
        </div>
      </div>
    </Reveal>
  )
}
