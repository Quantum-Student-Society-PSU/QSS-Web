'use client'

import React from 'react'
import { Container } from '@/components/atoms/Container'
import { Button } from '@/components/atoms/Button'
import { H1, Lead } from '@/components/atoms/Typography'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20" style={{ scrollMarginTop: '0' }}>
      <Container>
        <div className="relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <H1 className="mb-4">
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Quantum Student Society
              </span>
            </H1>
            <p className="text-xl md:text-2xl text-accent mb-4">Penn State University</p>
            <Lead className="mb-8">
              A group of students curious about all things quantum
            </Lead>
            
            <div className="flex flex-wrap gap-4">
              <Link href="#mission">
                <Button variant="primary" size="lg">
                  Learn More
                </Button>
              </Link>
              <Link href="#events">
                <Button variant="secondary" size="lg">
                  Upcoming Events
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 opacity-30">
          <motion.div
            className="w-64 h-64 md:w-96 md:h-96 border border-accent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 border border-accent-light rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-16 h-16 md:w-24 md:h-24 border border-surface-border rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.div
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-accent rounded-full"
            animate={{
              x: [0, 100, 0, -100, 0],
              y: [0, -100, 0, 100, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </section>
  )
}