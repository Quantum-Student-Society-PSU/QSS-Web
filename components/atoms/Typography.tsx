import React from 'react'
import { cn } from '@/lib/utils'

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

export const H1: React.FC<TypographyProps> = ({ children, className }) => (
  <h1 className={cn('text-4xl md:text-6xl lg:text-7xl font-bold text-accent', className)}>
    {children}
  </h1>
)

export const H2: React.FC<TypographyProps> = ({ children, className }) => (
  <h2 className={cn('text-3xl md:text-4xl lg:text-5xl font-bold text-accent', className)}>
    {children}
  </h2>
)

export const H3: React.FC<TypographyProps> = ({ children, className }) => (
  <h3 className={cn('text-xl md:text-2xl lg:text-3xl font-semibold text-accent', className)}>
    {children}
  </h3>
)

export const H4: React.FC<TypographyProps> = ({ children, className }) => (
  <h4 className={cn('text-lg md:text-xl font-semibold text-accent', className)}>
    {children}
  </h4>
)

export const P: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={cn('text-base md:text-lg text-text-primary leading-relaxed', className)}>
    {children}
  </p>
)

export const Lead: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={cn('text-lg md:text-xl text-text-secondary leading-relaxed', className)}>
    {children}
  </p>
)

export const Small: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={cn('text-sm text-text-secondary', className)}>
    {children}
  </p>
)