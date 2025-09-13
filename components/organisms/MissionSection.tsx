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
          <H2 className="text-center mb-12">About Us</H2>
          
          <div className="max-w-4xl mx-auto mb-16">
            <P className="text-center text-lg md:text-xl leading-relaxed">
              We're the Quantum Student Society (QSS) at Penn State, a group of students curious about all 
              things quantum. From physics and engineering to math and computer science, we come from 
              different backgrounds but share the same energy and enthusiasm to explore the quantum world 
              together.
            </P>
            <P className="text-center text-lg md:text-xl leading-relaxed mt-6">
              We host talks, lectures, and projects that make big ideas in quantum science feel a little more 
              down-to-earth. QSS is a space to learn, collaborate, and connect, whether you're deep into 
              research or just starting to wonder what "quantum" really means.
            </P>
            <P className="text-center text-lg md:text-xl leading-relaxed mt-6">
              At the end of the day, we're here to grow as a community and help each other get ready for the 
              future of quantum tech.
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