import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ngrok CLI UTM Generator',
  description: 'Generate UTM tracking URLs as part of the ngrok CLI program.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
