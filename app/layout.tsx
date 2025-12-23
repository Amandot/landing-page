import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sammunat LLC - Crafting Project Specific Solutions with Expertise',
  description: 'We\'re a creative company that focuses on establishing long-term partnerships with customers. Custom CRM & ERP solutions, web development, and professional video editing services.',
  keywords: 'CRM solutions, ERP systems, web development, video editing, custom software, business solutions, project management',
  authors: [{ name: 'Sammunat LLC' }],
  creator: 'Sammunat LLC',
  publisher: 'Sammunat LLC',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sammunat LLC - Crafting Project Specific Solutions with Expertise',
    description: 'We\'re a creative company that focuses on establishing long-term partnerships with customers. Custom CRM & ERP solutions, web development, and professional video editing services.',
    url: '/',
    siteName: 'Sammunat LLC',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sammunat LLC - Project Specific Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sammunat LLC - Crafting Project Specific Solutions with Expertise',
    description: 'Custom CRM & ERP solutions, web development, and professional video editing services.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#14b8a6" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}