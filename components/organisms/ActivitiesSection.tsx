'use client'

import React from 'react'
import { Container } from '@/components/atoms/Container'
import { H2 } from '@/components/atoms/Typography'
import { ActivityCard } from '@/components/molecules/ActivityCard'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Microscope, Users, Star, Code, Zap } from 'lucide-react'
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
      description: 'Hands-on sessions where members learn the basics (and beyond) of quantum computing, algorithms, and hardware',
      icon: <BookOpen size={32} />,
    },
    {
      id: '2',
      title: 'Research & Projects (Planning)',
      description: 'Student-led collaborations exploring everything from quantum algorithms to simulations and experimental setups',
      icon: <Microscope size={32} />,
    },
    {
      id: '3',
      title: 'Community Outreach',
      description: 'Sharing our love for quantum with the broader community through demos, events, and STEM outreach',
      icon: <Users size={32} />,
    },
    {
      id: '4',
      title: 'Hackathons & Build Nights',
      description: 'Team up, experiment, and put ideas into action in a fast-paced, hands-on setting',
      icon: <Zap size={32} />,
    },
  ]

  return (
    <section id="what-we-do" className="py-24">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <H2 className="text-center mb-12">Activities</H2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <ActivityCard
                key={activity.id}
                activity={activity}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}