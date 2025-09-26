'use client'

import React, { useState } from 'react'
import { Container } from '@/components/atoms/Container'
import { H2, H3, P } from '@/components/atoms/Typography'
import { EventCard } from '@/components/molecules/EventCard'
import { FilterModal } from '@/components/molecules/FilterModal'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Event, EventType } from '@/types'
import { Filter, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { UPCOMING_EVENTS, EVENT_TYPES } from '@/data/events'

export const EventsSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [selectedFilter, setSelectedFilter] = useState<string>('all')
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)

  const eventTypes = EVENT_TYPES
  const upcomingEvents = UPCOMING_EVENTS

  const filteredEvents = selectedFilter === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === selectedFilter)

  const getFilterDisplayText = () => {
    if (selectedFilter === 'all') return 'All Events'
    const eventType = eventTypes.find(type => type.type === selectedFilter)
    return eventType ? eventType.title : 'All Events'
  }

  return (
    <section id="events" className="relative py-section-mobile sm:py-32 lg:py-40 bg-gradient-to-br from-primary-bg via-primary-dark/60 to-primary-bg overflow-hidden border-t-2 border-accent/20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(232,170,20,0.06),transparent_60%)]" />
      <div className="absolute top-1/4 left-4 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 bg-accent/6 rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 right-4 sm:right-10 w-32 h-32 sm:w-48 sm:h-48 bg-accent-light/6 rounded-full blur-2xl" />
      
      {/* Geometric shapes - responsive positioning */}
      <div className="absolute top-4 left-4 sm:top-10 sm:left-10 lg:top-20 lg:left-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-accent/10 rotate-45 rounded-lg hidden sm:block"></div>
      <div className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 lg:bottom-20 lg:right-20 w-12 h-12 sm:w-18 sm:h-18 lg:w-24 lg:h-24 border border-accent-light/10 rotate-12 rounded-lg hidden sm:block"></div>
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <H2 className="text-center mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
            Events
          </H2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12 max-w-4xl mx-auto"
          >
            <P className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 text-text-secondary">
              QSS isn't just about theory, we <span className="text-accent font-medium">bring quantum to life</span> through events that spark curiosity and connection. 
              Our calendar is packed with opportunities to learn, share, and get inspired:
            </P>
          </motion.div>

          {/* Filter Button */}
          <div className="flex justify-center mb-8">
            <motion.button
              onClick={() => setIsFilterModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-surface-glass to-transparent backdrop-blur-md border border-accent/30 rounded-full hover:border-accent hover:shadow-glow transition-all duration-300 group"
            >
              <Filter size={18} className="text-accent group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-text-primary font-medium">{getFilterDisplayText()}</span>
              <ChevronDown size={16} className="text-text-secondary group-hover:text-accent transition-colors duration-300" />
            </motion.button>
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

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mt-16 p-8 bg-gradient-to-br from-surface-glass to-transparent backdrop-blur-md border border-surface-border rounded-2xl max-w-4xl mx-auto"
          >
            <P className="text-base sm:text-lg md:text-xl leading-relaxed text-text-secondary">
              Whether it's a <span className="text-accent font-medium">lecture hall</span>, a 
              <span className="text-accent font-medium"> lab</span>, or just a 
              <span className="text-accent font-medium"> whiteboard session late at night</span>, our events are 
              designed to make quantum learning engaging and accessible.
            </P>
          </motion.div>
        </motion.div>
      </Container>

      {/* Filter Modal */}
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        eventTypes={eventTypes}
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />
    </section>
  )
}