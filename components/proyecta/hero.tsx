import Link from "next/link"

interface HeroStatProps {
  value: string
  label: string
}

function HeroStat({ value, label }: HeroStatProps) {
  return (
    <div className="flex flex-col">
      <span className="font-serif text-3xl text-ink leading-none">{value}</span>
      <span className="text-xs text-gray-400 mt-1 font-medium">{label}</span>
    </div>
  )
}

export function Hero() {
  return (
    <section className="pt-36 pb-20 px-6 max-w-[1120px] mx-auto">
      {/* <div
        className="inline-flex items-center gap-2 bg-green-bg text-green text-[0.82rem] font-semibold px-3.5 py-1.5 rounded-full mb-6 animate-[fadeUp_0.6s_ease-out_both]"
      >
        <span className="block w-[7px] h-[7px] bg-green rounded-full animate-[pulse-dot_2s_infinite]" />
        Aceptando nuevos clientes
      </div> */}

      <h1 className="font-serif text-[clamp(2.4rem,5.5vw,4.2rem)] leading-[1.12] tracking-tight text-ink max-w-[780px] animate-[fadeUp_0.6s_0.1s_ease-out_both] text-balance">
        Agencia de Marketing Digital en M&eacute;xico{" "}
        <em className="not-italic text-primary relative">
          que genera leads reales
          <span className="absolute bottom-0.5 left-0 right-0 h-[3px] bg-primary/30 rounded-sm" />
        </em>{" "}
        y ventas medibles
      </h1>

      <p className="mt-6 text-lg text-gray-600 max-w-[560px] leading-relaxed animate-[fadeUp_0.6s_0.2s_ease-out_both]">
        Ayudamos a empresas de servicios, turismo, salud y e-commerce en M&eacute;xico a conseguir m&aacute;s leads calificados, m&aacute;s ventas y un ROI claro con estrategias de SEO, Google Ads, paid media y desarrollo web.
      </p>

      <div className="mt-9 flex gap-4 flex-wrap animate-[fadeUp_0.6s_0.3s_ease-out_both]">
        <div className="flex flex-col gap-3">
          <Link
            href="#contacto"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-[10px] font-semibold text-base no-underline inline-flex items-center gap-2 transition-all duration-200 hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(200,16,46,0.2)]"
          >
            {'Solicitar diagn\u00f3stico gratuito \u2192'}
          </Link>          
        </div>
        <Link
          href="#resultados"
          className="bg-transparent text-ink px-8 py-3.5 rounded-[10px] font-semibold text-base no-underline border-2 border-gray-200 transition-all duration-200 hover:border-ink"
        >
          {'Ver casos de \u00e9xito'}
        </Link>
        
      </div>
      <p className="text-sm mt-5 text-gray-500 max-w-[420px]">
            {"\ud83d\udee1\ufe0f Si no te llevas al menos una idea accionable, te regalamos un an\u00e1lisis completo de tu competencia digital."}
      </p>

      <div className="mt-14 flex gap-10 flex-wrap animate-[fadeUp_0.6s_0.4s_ease-out_both]">
        <HeroStat value="+40" label="Marcas atendidas" />
        <HeroStat value="8 años" label="De experiencia" />
        <HeroStat value="$18M+" label="En inversión publicitaria gestionada" />
        <HeroStat value="3.8x" label="ROAS promedio clientes" />
      </div>
    </section>
  )
}
