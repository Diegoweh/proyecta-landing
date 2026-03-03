import Image from "next/image"

const logos = [
  { src: "https://via.placeholder.com/120x40?text=Gran+Acuario", alt: "Gran Acuario Mazatl\u00e1n" },
  { src: "https://via.placeholder.com/120x40?text=Costa+de+Oro", alt: "Costa de Oro" },
  { src: "https://via.placeholder.com/120x40?text=Gavias", alt: "Gavias" },
  { src: "https://via.placeholder.com/120x40?text=Mazat\u00fan", alt: "Mazat\u00fan" },
  { src: "https://via.placeholder.com/120x40?text=MazaLife", alt: "MazaLife" },
  { src: "https://via.placeholder.com/120x40?text=Photo+Planet", alt: "Photo Planet" },
]

export function LogoBar() {
  return (
    <section className="border-t border-b border-gray-200 bg-gray-100 py-8 px-6">
      <div className="max-w-[1120px] mx-auto text-center">
        <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-5">
          Marcas que conf&iacute;an en nosotros
        </p>
        <div className="flex items-center justify-center gap-9 flex-wrap opacity-55 grayscale">
          {logos.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
              unoptimized
            />
          ))}
        </div>
      </div>
    </section>
  )
}
