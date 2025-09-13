'use client'

import React, { useState, useEffect } from 'react'
import { Container } from '@/components/atoms/Container'
import { NavLink } from '@/components/molecules/NavLink'
import { SocialLink } from '@/components/molecules/SocialLink'
import { Menu, X, Link2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#mission', label: 'About Us' },
    { href: '#what-we-do', label: 'What We Do' },
    { href: '#events', label: 'Events' },
    { href: '#team', label: 'Team' },
  ]

  const socialLinks = [
    { href: 'https://campsite.bio/psuqss', icon: <Link2 size={20} />, label: 'All Links' },
  ]

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-primary-bg/95 backdrop-blur-md border-b border-surface-border" 
        : "bg-transparent"
    )}>
      <Container>
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              <Image
                src="/images/logo.png"
                alt="QSS Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-accent tracking-wider">QSS</span>
              <span className="text-xs text-text-secondary">Quantum Student Society</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map((link) => (
              <SocialLink
                key={link.label}
                href={link.href}
                icon={link.icon}
                label={link.label}
              />
            ))}
          </div>

          <button
            className="md:hidden text-text-primary hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary-bg/95 backdrop-blur-md border-t border-surface-border"
          >
            <Container>
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    className="block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
                <div className="flex gap-4 pt-4 border-t border-surface-border">
                  {socialLinks.map((link) => (
                    <SocialLink
                      key={link.label}
                      href={link.href}
                      icon={link.icon}
                      label={link.label}
                    />
                  ))}
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}