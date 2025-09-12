import React from 'react'
import { Container } from '@/components/atoms/Container'
import { H3, H4, P } from '@/components/atoms/Typography'
import Link from 'next/link'

export const Footer: React.FC = () => {
  const footerLinks = [
    { href: '#mission', label: 'About Us' },
    { href: '#events', label: 'Events' },
    { href: '#team', label: 'Team' },
    { href: 'mailto:qss@psu.edu', label: 'Contact' },
  ]

  const socialLinks = [
    { href: 'https://twitter.com', label: 'Twitter' },
    { href: 'https://linkedin.com', label: 'LinkedIn' },
    { href: 'https://instagram.com', label: 'Instagram' },
  ]

  return (
    <footer className="py-16 bg-black/30 border-t border-surface-border">
      <Container>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <H3 className="mb-4">Quantum Student Society</H3>
            <P className="text-text-secondary">Penn State University</P>
            <P className="text-text-secondary">University Park, PA 16802</P>
          </div>
          
          <div>
            <H4 className="mb-4">Quick Links</H4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <H4 className="mb-4">Connect With Us</H4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-surface-border text-center">
          <P className="text-text-secondary text-sm">
            © 2025 Quantum Student Society. All rights reserved.
          </P>
        </div>
      </Container>
    </footer>
  )
}