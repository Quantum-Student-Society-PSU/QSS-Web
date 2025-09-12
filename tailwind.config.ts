import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: 'var(--color-primary-bg)',
          DEFAULT: 'var(--color-primary-bg)',
          dark: 'var(--color-primary-dark)',
          light: 'var(--color-primary-light)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          light: 'var(--color-accent-light)',
          dark: 'var(--color-accent-dark)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          accent: 'var(--color-text-accent)',
        },
        surface: {
          glass: 'var(--color-surface-glass)',
          'glass-hover': 'var(--color-surface-glass-hover)',
          border: 'var(--color-surface-border)',
          'border-hover': 'var(--color-surface-border-hover)',
        },
      },
      fontFamily: {
        sans: ['var(--font-family-sans)'],
      },
      fontSize: {
        'hero-mobile': 'var(--font-size-hero-mobile)',
        'hero-desktop': 'var(--font-size-hero-desktop)',
        'section-title': 'var(--font-size-section-title)',
        'card-title': 'var(--font-size-card-title)',
      },
      spacing: {
        'section': 'var(--spacing-section)',
        'container-padding': 'var(--spacing-container-padding)',
      },
      maxWidth: {
        'container': 'var(--spacing-container)',
      },
      borderRadius: {
        'card': 'var(--border-radius-card)',
        'button': 'var(--border-radius-button)',
      },
      boxShadow: {
        'card': 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        'glow': 'var(--shadow-glow)',
      },
      transitionDuration: {
        'fast': 'var(--duration-fast)',
        'normal': 'var(--duration-normal)',
        'slow': 'var(--duration-slow)',
      },
      zIndex: {
        'header': 'var(--z-header)',
        'modal': 'var(--z-modal)',
        'tooltip': 'var(--z-tooltip)',
      },
      animation: {
        'fade-in': 'fadeIn var(--duration-slow) ease-in-out',
        'slide-up': 'slideUp var(--duration-slow) ease-out',
        'slide-in': 'slideIn var(--duration-slow) ease-out',
        'spin-slow': 'spin 20s linear infinite',
        'orbit': 'orbit 10s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
}
export default config