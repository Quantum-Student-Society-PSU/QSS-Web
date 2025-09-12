'use client'

import React from 'react'
import { Container } from '@/components/atoms/Container'
import { H2, H3, P } from '@/components/atoms/Typography'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Users, Zap } from 'lucide-react'

export const MissionSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const pillars = [
    {
      icon: <Shield size={40} />,
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
    <section id="mission" className="py-24 bg-gradient-to-b from-primary-bg to-primary-dark/50">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <H2 className="text-center mb-12">Our Mission</H2>
          
          <div className="max-w-4xl mx-auto mb-16">
            <P className="text-center text-lg md:text-xl leading-relaxed">
              The Quantum Student Society at Penn State is dedicated to fostering a vibrant community 
              of students passionate about quantum science and technology. We aim to bridge the gap 
              between theoretical quantum mechanics and practical applications, providing our members 
              with opportunities to learn, research, and innovate in one of the most exciting fields 
              of modern science.
            </P>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-8 bg-surface-glass backdrop-blur-sm border border-surface-border rounded-card hover:bg-surface-glass-hover transition-all duration-normal hover:shadow-card"
              >
                <div className="inline-flex justify-center items-center w-20 h-20 bg-surface-glass rounded-full mb-6 text-accent">
                  {pillar.icon}
                </div>
                <H3 className="mb-4">{pillar.title}</H3>
                <P className="text-text-secondary">{pillar.description}</P>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}