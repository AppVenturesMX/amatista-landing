import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Casa Amatista en Punta Azul, Rosarito | $295,000 USD',
  description:
    'Casa nueva de 157 m² de construcción sobre 120 m² de terreno en el fraccionamiento privado Punta Azul (Lienzo Charro), Playas de Rosarito. 3 recámaras, 4 baños, roof deck con vista al mar y amenidades tipo resort. Agenda tu visita con el asesor.',
  openGraph: {
    title: 'Casa Amatista en Punta Azul, Rosarito | $295,000 USD',
    description:
      'Casa nueva de 157 m² de construcción sobre 120 m² de terreno en el fraccionamiento privado Punta Azul (Lienzo Charro), Playas de Rosarito. 3 recámaras, 4 baños, roof deck con vista al mar. Agenda tu visita con el asesor.',
    type: 'website',
    locale: 'es_MX',
    siteName: 'Amatista, Punta Azul',
    images: [
      {
        url: '/images/fachada-modelo.jpg',
        width: 1087,
        height: 816,
        alt: 'Fachada de una casa terminada del desarrollo Punta Azul, con cochera y roof deck',
      },
    ],
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
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
