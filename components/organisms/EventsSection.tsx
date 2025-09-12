'use client'

import React from 'react'
import { Container } from '@/components/atoms/Container'
import { H2 } from '@/components/atoms/Typography'
import { EventCard } from '@/components/molecules/EventCard'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Event } from '@/types'

export const EventsSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const events: Event[] = [
    {
      id: '1',
      title: 'Quantum Computing Workshop',
      date: { month: 'TBD', day: '--' },
      time: 'Coming Soon',
      location: 'TBD',
      description: 'Learn the fundamentals of quantum computing and hands-on programming with quantum frameworks',
      link: '#',
    },
    {
      id: '2',
      title: 'Industry Guest Speaker Series',
      date: { month: 'TBD', day: '--' },
      time: 'Coming Soon',
      location: 'TBD',
      description: 'Leading experts from quantum computing companies share insights on the latest developments',
      link: '#',
    },
    {
      id: '3',
      title: 'Annual Quantum Hackathon',
      date: { month: 'TBD', day: '--' },
      time: 'Coming Soon',
      location: 'TBD',
      description: 'Compete in teams to solve quantum computing challenges with prizes and mentorship',
      link: '#',
    },
    {
      id: '4',
      title: 'Weekly Study Sessions',
      date: { month: 'TBD', day: '--' },
      time: 'Every Week',
      location: 'TBD',
      description: 'Regular study groups covering quantum algorithms, theory, and applications',
      link: '#',
    },
  ]

  return (
    <section id="events" className="py-24 bg-gradient-to-b from-primary-dark/50 to-primary-bg">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <H2 className="text-center mb-12">Upcoming Events</H2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {events.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}