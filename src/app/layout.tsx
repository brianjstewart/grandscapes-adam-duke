import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GrandScapes | Landscape Design & Installation | Mount Pleasant, SC',
  description: 'Premier landscape design, installation, and maintenance services in Mount Pleasant and Charleston, SC. Over 16 years of excellence.',
  openGraph: {
    title: 'GrandScapes | Landscape Design & Installation',
    description: 'Premier landscape design, installation, and maintenance in Mount Pleasant, SC',
    url: 'https://grandscapes-adam-duke.vercel.app',
    type: 'website',
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
// Build timestamp: Wed Apr  1 15:05:43 CDT 2026
