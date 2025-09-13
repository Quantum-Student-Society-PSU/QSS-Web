'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Activity } from '@/types'
import { H4, P } from '@/components/atoms/Typography'

interface ActivityCardProps {
  activity: Activity
  index: number
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative p-8 bg-gradient-to-br from-surface-glass to-transparent backdrop-blur-md border border-surface-border rounded-2xl hover:border-accent/50 transition-all duration-300 hover:shadow-card-hover overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={false}
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
      />

      {/* Content */}
      <div className="relative z-10">
        {activity.icon && (
          <motion.div 
            className="inline-flex p-4 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl text-accent mb-6 group-hover:scale-110 transition-transform duration-300"
            animate={isHovered ? { rotate: [0, -10, 10, 0] } : {}}
            transition={{ duration: 0.5 }}
          >
            {activity.icon}
          </motion.div>
        )}
        
        <H4 className="mb-4 text-xl group-hover:text-accent transition-colors duration-300">
          {activity.title}
        </H4>
        
        <P className="text-text-secondary leading-relaxed">
          {activity.description}
        </P>

        {/* Decorative corner accent */}
        <motion.div
          className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-accent/20 to-transparent rounded-tl-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}