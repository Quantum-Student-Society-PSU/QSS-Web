'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
  className?: string
}

export const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label, className }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "text-text-primary hover:text-accent transition-colors duration-300",
        className
      )}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  )
}