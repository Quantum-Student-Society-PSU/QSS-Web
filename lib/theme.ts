// Theme configuration - Single source of truth for all design tokens
export const theme = {
  colors: {
    primary: {
      bg: '#022B3A',
      dark: '#011921',
      light: '#0A3D52'
    },
    accent: {
      DEFAULT: '#E8AA14',
      light: '#FFD700',
      dark: '#C89200'
    },
    text: {
      primary: '#DEF6FF',
      secondary: 'rgba(222, 246, 255, 0.8)',
      accent: '#E8AA14'
    },
    surface: {
      glass: 'rgba(255, 255, 255, 0.05)',
      'glass-hover': 'rgba(255, 255, 255, 0.10)',
      border: 'rgba(232, 170, 20, 0.2)',
      'border-hover': 'rgba(232, 170, 20, 0.4)'
    },
    gradient: {
      primary: 'linear-gradient(135deg, #E8AA14 0%, #FFD700 100%)',
      background: 'linear-gradient(180deg, #022B3A 0%, #011921 100%)'
    }
  },
  spacing: {
    section: '6rem', // 24 in Tailwind
    container: '1200px',
    'container-padding': '1rem'
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif']
    },
    fontSize: {
      'hero-mobile': '2.5rem',
      'hero-desktop': '4.5rem',
      'section-title': '2.5rem',
      'card-title': '1.25rem'
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    },
    lineHeight: {
      tight: '1.1',
      normal: '1.6',
      relaxed: '1.8'
    }
  },
  animation: {
    duration: {
      fast: '200ms',
      normal: '300ms',
      slow: '600ms'
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      'ease-in': 'cubic-bezier(0.4, 0, 1, 1)'
    }
  },
  shadows: {
    card: '0 4px 6px rgba(0, 0, 0, 0.3)',
    'card-hover': '0 10px 20px rgba(232, 170, 20, 0.3)',
    glow: '0 0 20px rgba(232, 170, 20, 0.5)'
  },
  borderRadius: {
    card: '1rem',
    button: '50px',
    avatar: '50%'
  },
  zIndex: {
    header: '50',
    modal: '100',
    tooltip: '200'
  }
} as const

// CSS Variables mapping
export const cssVariables = {
  // Colors
  '--color-primary-bg': theme.colors.primary.bg,
  '--color-primary-dark': theme.colors.primary.dark,
  '--color-primary-light': theme.colors.primary.light,
  '--color-accent': theme.colors.accent.DEFAULT,
  '--color-accent-light': theme.colors.accent.light,
  '--color-accent-dark': theme.colors.accent.dark,
  '--color-text-primary': theme.colors.text.primary,
  '--color-text-secondary': theme.colors.text.secondary,
  '--color-text-accent': theme.colors.text.accent,
  '--color-surface-glass': theme.colors.surface.glass,
  '--color-surface-glass-hover': theme.colors.surface['glass-hover'],
  '--color-surface-border': theme.colors.surface.border,
  '--color-surface-border-hover': theme.colors.surface['border-hover'],
  
  // Spacing
  '--spacing-section': theme.spacing.section,
  '--spacing-container': theme.spacing.container,
  '--spacing-container-padding': theme.spacing['container-padding'],
  
  // Typography
  '--font-family-sans': theme.typography.fontFamily.sans.join(', '),
  '--font-size-hero-mobile': theme.typography.fontSize['hero-mobile'],
  '--font-size-hero-desktop': theme.typography.fontSize['hero-desktop'],
  '--font-size-section-title': theme.typography.fontSize['section-title'],
  '--font-size-card-title': theme.typography.fontSize['card-title'],
  
  // Animation
  '--duration-fast': theme.animation.duration.fast,
  '--duration-normal': theme.animation.duration.normal,
  '--duration-slow': theme.animation.duration.slow,
  '--easing-default': theme.animation.easing.default,
  
  // Shadows
  '--shadow-card': theme.shadows.card,
  '--shadow-card-hover': theme.shadows['card-hover'],
  '--shadow-glow': theme.shadows.glow,
  
  // Border Radius
  '--border-radius-card': theme.borderRadius.card,
  '--border-radius-button': theme.borderRadius.button,
  
  // Z-Index
  '--z-header': theme.zIndex.header.toString(),
  '--z-modal': theme.zIndex.modal.toString(),
  '--z-tooltip': theme.zIndex.tooltip.toString()
} as const

// Type helpers for theme values
export type ThemeColors = typeof theme.colors
export type ThemeSpacing = typeof theme.spacing
export type ThemeTypography = typeof theme.typography