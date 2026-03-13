'use client'

import React, { useEffect, useState, memo, useMemo } from 'react'
import { Container } from '@/components/atoms/Container'
import { Button } from '@/components/atoms/Button'
import { H1, Lead } from '@/components/atoms/Typography'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePerformanceOptimization } from '@/hooks/usePerformanceOptimization'
import { CONTENT } from '@/content/sections'

// Generate a pseudo-random number from a seed (deterministic)
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

// Generate consistent particle positions using seeded random
const generateParticles = (count: number, seedOffset: number = 0) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${seedOffset}-${i}`,
    initialX: seededRandom(i + seedOffset) * 1920,
    initialY: seededRandom(i + seedOffset + 1000) * 1080,
    animateX: seededRandom(i + seedOffset + 2000) * 1920,
    animateY: seededRandom(i + seedOffset + 3000) * 1080,
    duration: seededRandom(i + seedOffset + 4000) * 20 + 10,
    delay: seededRandom(i + seedOffset + 5000) * 2,
  }))
}

const HeroSectionComponent: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { getOptimalParticleCount } = usePerformanceOptimization()

  // Memoize particle generation so it's consistent across renders
  const particles = useMemo(() => generateParticles(10, 0), [])
  
  const floatingParticles = useMemo(() => {
    const count = typeof window !== 'undefined' ? getOptimalParticleCount : 20
    return generateParticles(count, 100)
  }, [getOptimalParticleCount])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 sm:pt-20 px-4 sm:px-0 overflow-hidden" 
      style={{ scrollMarginTop: '0' }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-bg via-primary-dark/50 to-primary-bg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
      </div>

      {/* Floating particles - reduced for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-accent/30 rounded-full hidden md:block"
            initial={{
              x: particle.initialX,
              y: particle.initialY,
            }}
            animate={{
              x: particle.animateX,
              y: particle.animateY,
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
              delay: particle.delay,
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
              <H1 className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="inline-block bg-gradient-to-r from-accent via-accent-light to-indigo-400 bg-clip-text text-transparent animate-gradient bg-300%">
                  {CONTENT.hero.title.split(' ')[0]}
                </span>
                <br />
                <span className="inline-block bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
                  {CONTENT.hero.title.split(' ').slice(1).join(' ')}
                </span>
              </H1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-xl sm:text-2xl md:text-3xl text-accent mb-4 font-light">
                {CONTENT.hero.subtitle}
              </p>
              <Lead className="mb-8 text-base sm:text-lg md:text-xl max-w-2xl text-text-secondary">
                {CONTENT.hero.description}
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
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-light/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                  
                  {/* Button content */}
                  <div className="relative z-10 flex items-center">
                    <span className="text-primary-bg group-hover:text-primary-dark transition-colors duration-200">
                      {CONTENT.hero.cta.primary}
                    </span>
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
                  {CONTENT.hero.cta.secondary}
                </Button>
              </Link>
              <Link href="https://campsite.bio/psuqss">
                <Button variant="secondary" size="lg" className="backdrop-blur-md">
                  {CONTENT.hero.cta.connect}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Floating particles - responsive count */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-amber-400 rounded-full"
            style={{
              boxShadow: '0 0 10px rgba(251, 191, 36, 0.8), 0 0 20px rgba(251, 191, 36, 0.4)',
            }}
            initial={{
              x: particle.initialX,
              y: particle.initialY,
            }}
            animate={{
              x: particle.animateX,
              y: particle.animateY,
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: particle.duration + 15,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
              delay: particle.delay,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export const HeroSection = memo(HeroSectionComponent)