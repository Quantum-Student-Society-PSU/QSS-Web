import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quantum Student Society - Penn State',
  description: "Penn State's premier student organization dedicated to exploring quantum physics, quantum computing, and quantum technologies",
  keywords: 'quantum, physics, computing, Penn State, PSU, student society, quantum mechanics',
  authors: [{ name: 'Quantum Student Society' }],
  openGraph: {
    title: 'Quantum Student Society - Penn State',
    description: 'Exploring the frontiers of quantum physics, computing, and technology',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quantum Student Society - Penn State',
    description: 'Exploring the frontiers of quantum physics, computing, and technology',
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
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}