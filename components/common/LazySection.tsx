'use client'

import React, { lazy, Suspense } from 'react'
import { ErrorBoundary } from './ErrorBoundary'

// Loading fallback component
const SectionFallback = () => (
  <div className="py-section-mobile sm:py-32 lg:py-40 bg-gradient-to-br from-primary-bg via-primary-dark/90 to-primary-bg border-t-2 border-accent/20">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
      </div>
    </div>
  </div>
)

// Error fallback for lazy loaded sections
const LazyErrorFallback = (
  <div className="py-section-mobile sm:py-32 lg:py-40 bg-gradient-to-br from-primary-bg via-primary-dark/90 to-primary-bg border-t-2 border-red-500/20">
    <div className="container mx-auto px-4 text-center">
      <p className="text-red-400 mb-4">Failed to load section</p>
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="px-4 py-2 bg-accent text-primary-bg rounded-full hover:bg-accent-light transition-colors"
      >
        Retry
      </button>
    </div>
  </div>
)

interface LazySectionProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  errorFallback?: React.ReactNode
}

export const LazySection: React.FC<LazySectionProps> = ({
  children,
  fallback = <SectionFallback />,
  errorFallback = LazyErrorFallback
}) => {
  return (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </ErrorBoundary>
  )
}

// HOC for creating lazy sections
export function createLazySection<P extends object>(
  importFn: () => Promise<{ default: React.ComponentType<P> }>,
  fallback?: React.ReactNode
) {
  const LazyComponent = lazy(importFn)
  
  return (props: P) => (
    <LazySection fallback={fallback}>
      <LazyComponent {...props} />
    </LazySection>
  )
}