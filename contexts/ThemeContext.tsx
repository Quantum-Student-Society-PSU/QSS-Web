'use client'

import React, { createContext, useContext, ReactNode } from 'react'
import { theme, type ThemeColors, type ThemeSpacing, type ThemeTypography } from '@/lib/theme'

interface ThemeContextValue {
  colors: ThemeColors
  spacing: ThemeSpacing
  typography: ThemeTypography
  // Utility functions
  getColor: (path: string) => string
  getSpacing: (key: keyof ThemeSpacing) => string
  getFontSize: (key: string) => string
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const value: ThemeContextValue = {
    colors: theme.colors,
    spacing: theme.spacing,
    typography: theme.typography,
    
    // Utility function to get nested color values
    getColor: (path: string) => {
      const keys = path.split('.')
      let value: any = theme.colors
      
      for (const key of keys) {
        if (value && typeof value === 'object' && key in value) {
          value = value[key]
        } else {
          console.warn(`Theme color path "${path}" not found`)
          return '#000000' // fallback
        }
      }
      
      return typeof value === 'string' ? value : '#000000'
    },
    
    // Utility function to get spacing values
    getSpacing: (key: keyof ThemeSpacing) => {
      return theme.spacing[key] || '0'
    },
    
    // Utility function to get font sizes
    getFontSize: (key: string) => {
      const sizes = theme.typography.fontSize as Record<string, string>
      return sizes[key] || '1rem'
    }
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

// Convenience hooks for specific theme parts
export const useThemeColors = () => useTheme().colors
export const useThemeSpacing = () => useTheme().spacing
export const useThemeTypography = () => useTheme().typography