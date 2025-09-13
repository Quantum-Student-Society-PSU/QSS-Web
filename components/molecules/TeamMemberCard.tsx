'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TeamMember } from '@/types'
import { H4, P, Small } from '@/components/atoms/Typography'
import { cn } from '@/lib/utils'

interface TeamMemberCardProps {
  member: TeamMember
  index: number
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        delay: index * 0.05,
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group relative text-center p-8 bg-gradient-to-br from-surface-glass via-transparent to-surface-glass backdrop-blur-md border border-surface-border rounded-2xl hover:border-accent/30 transition-all duration-300 overflow-hidden min-h-[280px] flex flex-col"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Profile circle with animation */}
      <motion.div 
        className="relative z-10 mb-6"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className={cn(
          "w-28 h-28 mx-auto rounded-full flex items-center justify-center shadow-lg group-hover:shadow-glow transition-shadow duration-300",
          member.isAdvisor 
            ? "bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600" 
            : "bg-gradient-to-br from-accent via-accent-light to-yellow-400"
        )}>
          <span className="text-3xl font-bold text-primary-bg">{member.initials}</span>
        </div>
        
        {/* Orbital ring around profile */}
        <motion.div
          className="absolute inset-0 w-28 h-28 mx-auto border-2 border-accent/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        <div>
          <H4 className="mb-2 text-lg group-hover:text-accent transition-colors duration-300">
            {member.name}
          </H4>
          
          <P className="font-semibold mb-2 text-accent text-sm">
            {member.role}
          </P>
          
          {member.major && (
            <Small className="text-text-secondary block">
              {member.major}
            </Small>
          )}
          
          {member.department && (
            <Small className="text-text-secondary block mt-1">
              {member.department}
            </Small>
          )}
        </div>
        
        {member.description && (
          <div className="flex-1 flex items-end mt-4">
            <P className="text-text-secondary text-sm leading-relaxed italic">
              "{member.description}"
            </P>
          </div>
        )}
      </div>

      {/* Corner decoration */}
      <motion.div
        className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-3xl"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}