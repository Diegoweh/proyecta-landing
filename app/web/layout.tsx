import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import { siteUrl } from '@/lib/seo'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans', weight: ['400', '500', '600', '700', '800', '900'] })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', weight: ['400', '500'] })

const title = 'Webs que venden | Proyecta'
const description = 'Diseñamos sitios web que venden. A la medida, rápidos y listos para campañas. En 3 semanas. Auditoría gratis. Desde $25,000.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${siteUrl}web`,
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}web`,
    siteName: 'Proyecta',
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${geist.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}>
      {metaPixelId && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
      {children}
    </div>
  )
}
