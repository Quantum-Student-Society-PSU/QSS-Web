'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Event } from '@/types'
import { H4, P, Small } from '@/components/atoms/Typography'
import { cn } from '@/lib/utils'
import { ArrowRight, Calendar } from 'lucide-react'
import { downloadICSFile } from '@/lib/calendar'

interface EventCardProps {
  event: Event
  index: number
}

export const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ x: 10 }}
      className="group flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 bg-gradient-to-br from-surface-glass to-transparent backdrop-blur-md border border-surface-border rounded-2xl hover:border-accent/30 transition-all duration-300 hover:shadow-glow overflow-hidden relative"
    >
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col items-center justify-center w-20 h-20 sm:min-w-[90px] sm:w-auto sm:h-auto p-3 sm:p-4 bg-gradient-to-br from-accent to-accent-light text-primary-bg rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300 self-center sm:self-start">
        <span className="text-xs sm:text-sm font-semibold">{event.date.month}</span>
        <span className="text-xl sm:text-3xl font-bold">{event.date.day}</span>
      </div>
      
      <div className="flex-1 relative z-10">
        <div className="flex flex-col gap-3 sm:gap-4 text-center sm:text-left">
          <div className="flex-1">
            <H4 className="mb-2">{event.title}</H4>
            <Small className="mb-2">{event.time} | {event.location}</Small>
            <P className="mb-3 text-text-secondary">{event.description}</P>
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              {event.link && (
                <a 
                  href={event.link}
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </a>
              )}
              <button
                onClick={() => downloadICSFile(event)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-surface-glass border border-surface-border rounded-full text-text-secondary hover:text-accent hover:border-accent transition-all duration-normal"
                title="Add to Calendar"
              >
                <Calendar size={16} />
                <span className="text-sm">Add to Calendar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}