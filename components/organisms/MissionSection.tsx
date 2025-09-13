'use client'

import React from 'react'
import { Container } from '@/components/atoms/Container'
import { H2, H3, P } from '@/components/atoms/Typography'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Users, Zap, Lightbulb, BookOpen, Target } from 'lucide-react'

export const MissionSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const highlights = [
    {
      icon: <Users size={32} />,
      title: 'Diverse Backgrounds',
      description: 'Physics, engineering, math, and computer science students united by quantum curiosity',
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Making Complex Simple',
      description: 'We make big ideas in quantum science feel a little more down-to-earth',
    },
    {
      icon: <Target size={32} />,
      title: 'Future Ready',
      description: 'Growing as a community to prepare for the future of quantum technology',
    },
  ]

  const pillars = [
    {
      icon: <BookOpen size={40} />,
      title: 'Education',
      description: 'Advancing quantum literacy through workshops, seminars, and hands-on experiences',
    },
    {
      icon: <Users size={40} />,
      title: 'Community',
      description: 'Building connections between students, faculty, and industry professionals',
    },
    {
      icon: <Zap size={40} />,
      title: 'Innovation',
      description: 'Encouraging research and development in quantum technologies',
    },
  ]

  return (
    <section id="mission" className="relative py-section-mobile sm:py-32 lg:py-40 bg-gradient-to-br from-primary-bg via-primary-dark/90 to-primary-bg overflow-hidden border-t-2 border-accent/20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,170,20,0.05),transparent_70%)]" />
      <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent-light/5 rounded-full blur-3xl" />
      
      {/* Geometric shapes - responsive positioning */}
      <div className="absolute top-4 right-4 sm:top-10 sm:right-10 lg:top-20 lg:right-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-accent/10 rotate-45 rounded-lg hidden sm:block"></div>
      <div className="absolute bottom-4 left-4 sm:bottom-10 sm:left-10 lg:bottom-20 lg:left-20 w-12 h-12 sm:w-18 sm:h-18 lg:w-24 lg:h-24 border border-accent-light/10 rotate-12 rounded-lg hidden sm:block"></div>
      
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <H2 className="text-center mb-12 sm:mb-16 text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              About Us
            </H2>
          </motion.div>
          
          {/* Main Content */}
          <div className="max-w-6xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <P className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-6 sm:mb-8 font-light">
                We're the <span className="text-accent font-semibold">Quantum Student Society (QSS)</span> at Penn State, 
                a group of students curious about all things quantum. From physics and engineering to math and computer science, 
                we come from different backgrounds but share the same energy and enthusiasm to explore the quantum world together.
              </P>
              
              <P className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 text-text-secondary">
                We host talks, lectures, and projects that make big ideas in quantum science feel a little more down-to-earth. 
                QSS is a space to learn, collaborate, and connect, whether you're deep into research or just starting to wonder 
                what <span className="text-accent font-medium">"quantum"</span> really means.
              </P>
              
              <P className="text-base sm:text-lg md:text-xl leading-relaxed text-text-secondary">
                At the end of the day, we're here to grow as a community and help each other get ready for the 
                <span className="text-accent font-medium"> future of quantum tech</span>.
              </P>
            </motion.div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center p-6 bg-gradient-to-br from-surface-glass to-transparent backdrop-blur-md border border-surface-border rounded-2xl hover:border-accent/30 transition-all duration-300"
                >
                  <div className="inline-flex p-4 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl text-accent mb-4">
                    {highlight.icon}
                  </div>
                  <H3 className="text-lg mb-3 text-accent">{highlight.title}</H3>
                  <P className="text-sm text-text-secondary leading-relaxed">{highlight.description}</P>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mission Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <H3 className="text-center mb-8 sm:mb-12 text-xl sm:text-2xl md:text-3xl font-bold text-accent">Our Mission Pillars</H3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className="text-center p-8 bg-gradient-to-br from-surface-glass to-transparent backdrop-blur-sm border border-surface-border rounded-2xl hover:bg-surface-glass-hover transition-all duration-300 hover:shadow-glow hover:border-accent/30 group"
                >
                  <div className="inline-flex justify-center items-center w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                    {pillar.icon}
                  </div>
                  <H3 className="mb-4 group-hover:text-accent transition-colors duration-300">{pillar.title}</H3>
                  <P className="text-text-secondary leading-relaxed">{pillar.description}</P>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}