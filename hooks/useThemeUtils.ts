import { useCallback } from 'react'
import { theme } from '@/lib/theme'

export const useThemeUtils = () => {
  // Generate CSS custom property references
  const getCSSVar = useCallback((varName: string) => {
    return `var(--${varName})`
  }, [])

  // Generate inline styles using theme values
  const getInlineStyles = useCallback((styles: Record<string, any>) => {
    const processedStyles: Record<string, any> = {}
    
    for (const [key, value] of Object.entries(styles)) {
      if (typeof value === 'string' && value.startsWith('theme.')) {
        // Handle theme path references like 'theme.colors.accent.DEFAULT'
        const path = value.replace('theme.', '').split('.')
        let themeValue: any = theme
        
        for (const pathKey of path) {
          if (themeValue && typeof themeValue === 'object' && pathKey in themeValue) {
            themeValue = themeValue[pathKey]
          } else {
            console.warn(`Theme path "${value}" not found`)
            themeValue = null
            break
          }
        }
        
        processedStyles[key] = themeValue
      } else {
        processedStyles[key] = value
      }
    }
    
    return processedStyles
  }, [])

  // Generate responsive font sizes
  const getResponsiveFontSize = useCallback((mobileSize: string, desktopSize: string) => {
    return `clamp(${mobileSize}, 8vw, ${desktopSize})`
  }, [])

  // Generate themed box shadows
  const getThemedBoxShadow = useCallback((shadowType: 'card' | 'card-hover' | 'glow') => {
    const shadows = {
      card: theme.shadows.card,
      'card-hover': theme.shadows['card-hover'],
      glow: theme.shadows.glow
    }
    return shadows[shadowType]
  }, [])

  // Generate theme-aware gradients
  const getGradient = useCallback((type: 'primary' | 'background' | 'custom', customColors?: string[]) => {
    if (type === 'primary') {
      return `linear-gradient(135deg, ${theme.colors.accent.DEFAULT} 0%, ${theme.colors.accent.light} 100%)`
    }
    if (type === 'background') {
      return `linear-gradient(180deg, ${theme.colors.primary.bg} 0%, ${theme.colors.primary.dark} 100%)`
    }
    if (type === 'custom' && customColors && customColors.length >= 2) {
      return `linear-gradient(135deg, ${customColors.join(', ')})`
    }
    return 'none'
  }, [])

  return {
    getCSSVar,
    getInlineStyles,
    getResponsiveFontSize,
    getThemedBoxShadow,
    getGradient,
    theme // Direct access to theme object
  }
}