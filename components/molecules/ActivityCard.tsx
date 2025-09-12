'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Activity } from '@/types'
import { H4, P } from '@/components/atoms/Typography'

interface ActivityCardProps {
  activity: Activity
  index: number
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="p-6 bg-surface-glass backdrop-blur-sm border border-surface-border rounded-card hover:bg-surface-glass-hover transition-all duration-normal hover:shadow-card-hover"
    >
      {activity.icon && (
        <div className="inline-flex p-3 bg-surface-glass rounded-xl text-accent mb-4">
          {activity.icon}
        </div>
      )}
      <H4 className="mb-3">{activity.title}</H4>
      <P className="text-text-secondary">{activity.description}</P>
    </motion.div>
  )
}