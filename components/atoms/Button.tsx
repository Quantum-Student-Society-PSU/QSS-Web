'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, asChild = false, ...props }, ref) => {
    const baseStyles = 'relative inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-bg overflow-hidden'
    
    const variants = {
      primary: 'bg-gradient-to-r from-accent to-accent-light text-primary-bg hover:shadow-glow hover:shadow-accent/50 before:absolute before:inset-0 before:bg-gradient-to-r before:from-accent-light before:to-accent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300',
      secondary: 'bg-surface-glass backdrop-blur-md text-text-primary border-2 border-accent/30 hover:bg-accent/20 hover:border-accent hover:shadow-glow',
      ghost: 'bg-transparent text-text-primary hover:bg-surface-glass-hover'
    }
    
    const sizes = {
      sm: 'px-5 py-2.5 text-sm gap-2',
      md: 'px-7 py-3.5 text-base gap-2',
      lg: 'px-10 py-4 text-lg gap-3'
    }

    const combinedClassName = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    )

    if (asChild) {
      return (
        <motion.div
          className={combinedClassName}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {children}
        </motion.div>
      )
    }

    return (
      <motion.button
        ref={ref}
        className={combinedClassName}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="button"
        {...(props as any)}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'