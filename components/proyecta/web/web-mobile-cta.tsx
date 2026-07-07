import { MessageCircle } from "lucide-react"
import { WaLink } from "./wa-link"

export function WebMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] flex items-center gap-2.5 border-t border-border bg-white/95 px-3.5 py-2.5 backdrop-blur-md md:hidden">
      <span className="whitespace-nowrap font-mono text-[11px] text-muted-foreground">Desde $25K</span>
      <WaLink
        linkId="web-mobile-sticky"
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3.5 text-[15px] font-semibold text-white"
      >
        <MessageCircle className="h-4 w-4" /> Escríbenos
      </WaLink>
    </div>
  )
}
