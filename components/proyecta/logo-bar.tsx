import Image from "next/image"

const logos = [
  { src: "/logos/clientes-05.png", alt: "Gran Acuario Mazatlán" },
  { src: "/logos/clientes-06.png", alt: "Costa de Oro" },
  { src: "/logos/clientes-07.png", alt: "Gavias" },  
  { src: "/logos/clientes-09.png", alt: "MazaLife" },
  { src: "/logos/clientes-10.png", alt: "Photo Planet" },
]

export function LogoBar() {
  return (
    <section className="border-t border-b border-gray-200 bg-gray-100 py-8 px-6">
      <div className="max-w-[1120px] mx-auto text-center">
        <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-5">
          Marcas que conf&iacute;an en nosotros
        </p>
        <div className="flex items-center justify-center gap-15 flex-wrap opacity-55">
          {logos.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className="h-25 w-auto object-contain"
              unoptimized
            />
          ))}
        </div>
      </div>
    </section>
  )
}
