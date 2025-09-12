'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Event } from '@/types'
import { H4, P, Small } from '@/components/atoms/Typography'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

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
      className="flex gap-6 p-6 bg-surface-glass backdrop-blur-sm border border-surface-border rounded-card hover:bg-surface-glass-hover transition-all duration-normal hover:shadow-card-hover"
    >
      <div className="flex flex-col items-center justify-center min-w-[80px] p-4 bg-accent text-primary-bg rounded-xl">
        <span className="text-sm font-semibold">{event.date.month}</span>
        <span className="text-3xl font-bold">{event.date.day}</span>
      </div>
      
      <div className="flex-1">
        <H4 className="mb-2">{event.title}</H4>
        <Small className="mb-2">{event.time} | {event.location}</Small>
        <P className="mb-3 text-text-secondary">{event.description}</P>
        {event.link && (
          <a 
            href={event.link}
            className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors"
          >
            <span>Learn More</span>
            <ArrowRight size={16} />
          </a>
        )}
      </div>
    </motion.div>
  )
}