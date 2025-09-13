import React from 'react'
import { Container } from '@/components/atoms/Container'
import { H2 } from '@/components/atoms/Typography'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'

interface SectionProps {
  id?: string
  title?: string
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'primary' | 'secondary' | 'hero'
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  withAnimations?: boolean
  withBackground?: boolean
}

const variantClasses = {
  default: 'py-section-mobile sm:py-32 lg:py-40 bg-gradient-to-br from-primary-bg via-primary-dark/90 to-primary-bg',
  primary: 'py-section-mobile sm:py-32 lg:py-40 bg-gradient-to-br from-primary-dark/50 via-primary-bg to-primary-dark/80',
  secondary: 'py-section-mobile sm:py-32 lg:py-40 bg-gradient-to-br from-primary-bg via-primary-dark/60 to-primary-bg',
  hero: 'relative min-h-screen flex items-center pt-16 sm:pt-20 px-4 sm:px-0'
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  className,
  variant = 'default',
  containerSize = 'lg',
  withAnimations = true,
  withBackground = true
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const sectionClasses = cn(
    'relative overflow-hidden',
    withBackground && 'border-t-2 border-accent/20',
    variantClasses[variant],
    className
  )

  const content = (
    <>
      {title && (
        <motion.div
          initial={withAnimations ? { opacity: 0, y: 20 } : {}}
          animate={withAnimations && inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <H2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
            {title}
          </H2>
        </motion.div>
      )}
      {children}
    </>
  )

  return (
    <section
      id={id}
      className={sectionClasses}
      style={id ? { scrollMarginTop: variant === 'hero' ? '0' : '5rem' } : {}}
      ref={withAnimations ? ref : undefined}
    >
      {variant === 'hero' ? (
        content
      ) : (
        <Container size={containerSize}>
          {withAnimations ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {content}
            </motion.div>
          ) : (
            content
          )}
        </Container>
      )}
    </section>
  )
}