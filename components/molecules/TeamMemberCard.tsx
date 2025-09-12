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
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="text-center p-6 bg-surface-glass backdrop-blur-sm border border-surface-border rounded-card hover:bg-surface-glass-hover transition-all duration-normal hover:shadow-card-hover"
    >
      <div className={cn(
        "w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center",
        member.isAdvisor 
          ? "bg-gradient-to-br from-blue-500 to-purple-600" 
          : "bg-gradient-to-br from-accent to-accent-light"
      )}>
        <span className="text-2xl font-bold text-primary-bg">{member.initials}</span>
      </div>
      
      <H4 className="mb-2">{member.name}</H4>
      <P className="font-semibold mb-1 text-text-primary">{member.role}</P>
      {member.major && (
        <Small className="text-text-secondary">{member.major}</Small>
      )}
      {member.department && (
        <Small className="text-text-secondary">{member.department}</Small>
      )}
    </motion.div>
  )
}