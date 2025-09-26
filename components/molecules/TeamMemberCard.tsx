'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TeamMember } from '@/types'
import { H4, P, Small } from '@/components/atoms/Typography'
import { cn } from '@/lib/utils'
import { Linkedin, Globe } from 'lucide-react'

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
      className="group relative text-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-surface-glass via-transparent to-surface-glass backdrop-blur-md border border-surface-border rounded-2xl hover:border-accent/30 transition-all duration-300 overflow-hidden min-h-[180px] sm:min-h-[220px] flex flex-col"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        <div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <H4 className="text-lg group-hover:text-accent transition-colors duration-300">
              {member.name}
            </H4>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors duration-200"
                aria-label={`${member.name}'s LinkedIn profile`}
              >
                <Linkedin size={18} />
              </a>
            )}
            {member.website && (
              <a
                href={member.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors duration-200"
                aria-label={`${member.name}'s website`}
              >
                <Globe size={18} />
              </a>
            )}
          </div>
          
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