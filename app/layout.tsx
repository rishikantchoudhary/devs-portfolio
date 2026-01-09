import type { Metadata } from 'next'
import { Mukta } from 'next/font/google'
import './globals.css'

const mukta = Mukta({
  variable: '--font-mukta',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: "Rishi's Portfolio",
  description: "Developer's portfolio site of Rishi.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${mukta.variable} antialiased bg-bg dark:bg-bg-dark overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
