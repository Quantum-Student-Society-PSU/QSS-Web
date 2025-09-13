'use client'

import React from 'react'
import { Container } from '@/components/atoms/Container'
import { H2, H3, P } from '@/components/atoms/Typography'
import { ActivityCard } from '@/components/molecules/ActivityCard'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Microscope, Users, Zap } from 'lucide-react'
import { Activity } from '@/types'

export const ActivitiesSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const activities: Activity[] = [
    {
      id: '1',
      title: 'Workshops & Tutorials',
      description: 'Hands-on sessions where members learn the basics (and beyond) of quantum computing, algorithms, and hardware.',
      icon: <BookOpen size={32} />,
    },
    {
      id: '2',
      title: 'Research & Projects (Planning)',
      description: 'Student-led collaborations exploring everything from quantum algorithms to simulations and experimental setups.',
      icon: <Microscope size={32} />,
    },
    {
      id: '3',
      title: 'Community Outreach',
      description: 'Sharing our love for quantum with the broader community through demos, events, and STEM outreach.',
      icon: <Users size={32} />,
    },
    {
      id: '4',
      title: 'Hackathons & Build Nights',
      description: 'Team up, experiment, and put ideas into action in a fast-paced, hands-on setting.',
      icon: <Zap size={32} />,
    },
  ]

  return (
    <section id="what-we-do" className="relative py-40 bg-gradient-to-br from-primary-dark/50 via-primary-bg to-primary-dark/80 border-t-2 border-accent/20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(232,170,20,0.08),transparent_50%)]" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/8 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent-light/8 rounded-full blur-3xl" />
      
      {/* Geometric pattern */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-accent/10 rotate-45 rounded-lg"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-accent-light/10 rotate-12 rounded-lg"></div>
      
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <H2 className="text-center mb-8 text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
            Activities
          </H2>

          {/* Introduction Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <P className="text-lg md:text-xl leading-relaxed mb-6 text-text-secondary">
              At QSS, we believe the best way to understand quantum is to <span className="text-accent font-medium">dive right in</span>. 
              That's why we host a mix of events and projects that bring theory to life and connect students with the bigger quantum world:
            </P>
          </motion.div>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {activities.map((activity, index) => (
              <ActivityCard
                key={activity.id}
                activity={activity}
                index={index}
              />
            ))}
          </div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center p-8 bg-gradient-to-br from-surface-glass to-transparent backdrop-blur-md border border-surface-border rounded-2xl max-w-4xl mx-auto"
          >
            <P className="text-lg md:text-xl leading-relaxed text-text-secondary">
              Whether you're here to <span className="text-accent font-medium">learn</span>, 
              <span className="text-accent font-medium"> research</span>, or just be part of the 
              <span className="text-accent font-medium"> quantum buzz</span>, there's always something happening at QSS.
            </P>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}