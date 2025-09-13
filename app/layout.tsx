import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quantum Student Society - Penn State',
  description: "We're the Quantum Student Society (QSS) at Penn State, a group of students curious about all things quantum",
  keywords: 'quantum, physics, computing, Penn State, PSU, student society, quantum mechanics',
  authors: [{ name: 'Quantum Student Society' }],
  openGraph: {
    title: 'Quantum Student Society - Penn State',
    description: 'A group of students curious about all things quantum',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quantum Student Society - Penn State',
    description: 'A group of students curious about all things quantum',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}