'use client'

import React, { useState } from 'react'
import { Container } from '@/components/atoms/Container'
import { H2, H3, P } from '@/components/atoms/Typography'
import { EventCard } from '@/components/molecules/EventCard'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Event, EventType } from '@/types'
import { cn } from '@/lib/utils'

export const EventsSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [selectedFilter, setSelectedFilter] = useState<string>('all')

  const eventTypes: EventType[] = [
    {
      id: '1',
      type: 'speaker',
      title: 'Speaker Series',
      description: 'Hear from professors, researchers, and industry leaders shaping the quantum frontier',
    },
    {
      id: '2',
      type: 'gbm',
      title: 'General Body Meeting',
      description: 'Regular meetings for all members to discuss club activities, upcoming events, and initiatives',
    },
    {
      id: '3',
      type: 'collab',
      title: 'Collab Meetups',
      description: 'Casual gatherings where members of QSS and other STEM Clubs meet together to brainstorm projects, swap ideas, and learn from one another',
    },
    {
      id: '4',
      type: 'showcase',
      title: 'Showcase Events',
      description: 'A chance to present student work, celebrate achievements, and connect with the wider STEM community',
    },
    {
      id: '5',
      type: 'networking',
      title: 'Networking & Career Prep',
      description: 'Building connections with labs, startups, and companies shaping the quantum workforce of tomorrow',
    },
  ]

  const upcomingEvents: Event[] = [
    {
      id: 'e1',
      title: 'Lecture 2',
      date: { month: 'TBD', day: '--' },
      time: 'TBD',
      location: 'TBD',
      description: 'Join us for an engaging lecture on quantum computing fundamentals and recent developments',
      type: 'speaker',
    },
    {
      id: 'e2',
      title: 'GBM 2',
      date: { month: 'TBD', day: '--' },
      time: 'TBD',
      location: 'TBD',
      description: 'General body meeting to discuss upcoming projects and club initiatives',
      type: 'gbm',
    },
  ]

  const filteredEvents = selectedFilter === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === selectedFilter)

  return (
    <section id="events" className="py-24 bg-gradient-to-b from-primary-dark/50 to-primary-bg">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <H2 className="text-center mb-4">Events</H2>
          <P className="text-center text-text-secondary mb-12 max-w-3xl mx-auto">
            QSS brings quantum to life through events that spark curiosity and connection. 
            Our calendar is packed with opportunities to learn, share, and get inspired.
          </P>

          {/* Event Types Description */}
          <div className="mb-12">
            <H3 className="text-center mb-8">Event Types</H3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {eventTypes.map((eventType, index) => (
                <motion.div
                  key={eventType.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-surface-glass backdrop-blur-sm border border-surface-border rounded-card"
                >
                  <H3 className="text-lg mb-3">{eventType.title}</H3>
                  <P className="text-sm text-text-secondary">{eventType.description}</P>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setSelectedFilter('all')}
              className={cn(
                "px-4 py-2 rounded-full transition-all duration-normal",
                selectedFilter === 'all'
                  ? "bg-accent text-primary-bg"
                  : "bg-surface-glass border border-surface-border text-text-secondary hover:text-text-primary hover:border-accent"
              )}
            >
              All Events
            </button>
            {eventTypes.map((eventType) => (
              <button
                key={eventType.type}
                onClick={() => setSelectedFilter(eventType.type)}
                className={cn(
                  "px-4 py-2 rounded-full transition-all duration-normal",
                  selectedFilter === eventType.type
                    ? "bg-accent text-primary-bg"
                    : "bg-surface-glass border border-surface-border text-text-secondary hover:text-text-primary hover:border-accent"
                )}
              >
                {eventType.title}
              </button>
            ))}
          </div>

          {/* Upcoming Events Calendar */}
          <div>
            <H3 className="text-center mb-8">Upcoming Events</H3>
            {filteredEvents.length > 0 ? (
              <div className="max-w-4xl mx-auto space-y-6">
                {filteredEvents.map((event, index) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <P className="text-text-secondary">No events found for the selected filter.</P>
              </div>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}