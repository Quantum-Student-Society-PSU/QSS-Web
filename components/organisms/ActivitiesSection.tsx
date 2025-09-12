'use client'

import React from 'react'
import { Container } from '@/components/atoms/Container'
import { H2 } from '@/components/atoms/Typography'
import { ActivityCard } from '@/components/molecules/ActivityCard'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Microscope, Users, Star, Code, Package } from 'lucide-react'
import { Activity } from '@/types'

export const ActivitiesSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const activities: Activity[] = [
    {
      id: '1',
      title: 'Weekly Study Groups',
      description: 'Collaborative learning sessions covering quantum mechanics, quantum computing algorithms, and quantum information theory',
      icon: <BookOpen size={32} />,
    },
    {
      id: '2',
      title: 'Research Projects',
      description: 'Student-led research initiatives in quantum algorithms, quantum cryptography, and quantum simulation',
      icon: <Microscope size={32} />,
    },
    {
      id: '3',
      title: 'Guest Speaker Series',
      description: 'Monthly talks by leading researchers and industry experts in quantum technologies',
      icon: <Users size={32} />,
    },
    {
      id: '4',
      title: 'Hackathons & Competitions',
      description: 'Participate in quantum computing challenges and compete with teams from around the world',
      icon: <Star size={32} />,
    },
    {
      id: '5',
      title: 'Workshop Series',
      description: 'Hands-on workshops on quantum programming with Qiskit, Cirq, and other quantum development frameworks',
      icon: <Code size={32} />,
    },
    {
      id: '6',
      title: 'Industry Partnerships',
      description: 'Connect with leading quantum computing companies for internships and career opportunities',
      icon: <Package size={32} />,
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
          <H2 className="text-center mb-12">What We Do</H2>
          
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