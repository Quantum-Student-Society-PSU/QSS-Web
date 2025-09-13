'use client'

import React, { useEffect, useState } from 'react'
import { Container } from '@/components/atoms/Container'
import { Button } from '@/components/atoms/Button'
import { H1, Lead } from '@/components/atoms/Typography'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden" style={{ scrollMarginTop: '0' }}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-bg via-primary-dark/50 to-primary-bg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <Container>
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6"
            >
              <H1 className="mb-4 text-5xl md:text-7xl font-bold">
                <span className="inline-block bg-gradient-to-r from-accent via-accent-light to-indigo-400 bg-clip-text text-transparent animate-gradient bg-300%">
                  Quantum
                </span>
                <br />
                <span className="inline-block bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
                  Student Society
                </span>
              </H1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-2xl md:text-3xl text-accent mb-4 font-light">Penn State University</p>
              <Lead className="mb-8 text-lg md:text-xl max-w-2xl text-text-secondary">
                A group of students curious about all things quantum — from physics and computing to the future of technology
              </Lead>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <Link href="#mission">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-primary-bg font-semibold text-lg rounded-full border-2 border-transparent hover:border-accent-light transition-all duration-300 overflow-hidden"
                >
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-light/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  
                  {/* Button content */}
                  <div className="relative z-10 flex items-center">
                    <span className="text-primary-bg group-hover:text-primary-dark transition-colors duration-200">Explore QSS</span>
                    <motion.span
                      className="inline-block ml-2 text-primary-bg group-hover:text-primary-dark"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </motion.button>
              </Link>
              <Link href="#events">
                <Button variant="secondary" size="lg" className="backdrop-blur-md">
                  View Events
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-amber-400 rounded-full"
            style={{
              boxShadow: '0 0 10px rgba(251, 191, 36, 0.8), 0 0 20px rgba(251, 191, 36, 0.4)',
            }}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: Math.random() * 25 + 15,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
          />
        ))}
      </div>
    </section>
  )
}