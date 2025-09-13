import React from 'react'
import { Container } from '@/components/atoms/Container'
import { H3, H4, P } from '@/components/atoms/Typography'

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-black/30 border-t border-surface-border">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-3xl mx-auto">
          <div className="text-center md:text-left">
            <H3 className="mb-4">Quantum Student Society</H3>
            <P className="text-text-secondary">Penn State University</P>
            <P className="text-text-secondary">University Park, PA 16802</P>
          </div>
          
          <div className="text-center md:text-right">
            <H4 className="mb-4">Connect With Us</H4>
            <a
              href="https://campsite.bio/psuqss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
            >
              <span>All Our Links</span>
              <span>→</span>
            </a>
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