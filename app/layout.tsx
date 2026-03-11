import type { Metadata, Viewport } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import { organizationName, seoKeywords, siteUrl } from '@/lib/seo'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', weight: ['300', '400', '500', '600', '700'] })
const dmSerif = DM_Serif_Display({ subsets: ['latin'], variable: '--font-dm-serif', weight: ['400'] })

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Proyecta | Agencia de Marketing Digital en México — Resultados Reales',
  description: 'Agencia de marketing digital en México. Más leads, más ventas para empresas de servicios, turismo, salud y e-commerce. Solicita tu diagnóstico gratuito hoy.',
  keywords: seoKeywords,
  authors: [{ name: organizationName }],
  publisher: organizationName,
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Proyecta | Agencia de Marketing Digital en México — Resultados Reales',
    description: 'Agencia de marketing digital en México. Más leads, más ventas para empresas de servicios, turismo, salud y e-commerce. Solicita tu diagnóstico gratuito hoy.',
    url: siteUrl,
    siteName: 'Proyecta',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Proyecta | Agencia de Marketing Digital en México — Resultados Reales',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proyecta | Agencia de Marketing Digital en México — Resultados Reales',
    description: 'Agencia de marketing digital en México. Más leads, más ventas para empresas de servicios, turismo, salud y e-commerce. Solicita tu diagnóstico gratuito hoy.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#FAFAF8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} ${dmSerif.variable}`}>
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}
      <GoogleAnalytics gaId="G-YNJG5LTJY5" />
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        <Analytics />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
