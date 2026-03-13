import { useCallback, useMemo, useRef } from 'react'
import { useWindowSize } from './useWindowSize'

export function usePerformanceOptimization() {
  const { isMobile } = useWindowSize()
  const rafRef = useRef<number>(0)

  // Throttled function for expensive operations
  const throttle = useCallback(<T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): T => {
    let timeoutId: NodeJS.Timeout
    let lastExecTime = 0

    return ((...args: Parameters<T>) => {
      const currentTime = Date.now()

      if (currentTime - lastExecTime > delay) {
        func.apply(null, args)
        lastExecTime = currentTime
      } else {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          func.apply(null, args)
          lastExecTime = Date.now()
        }, delay - (currentTime - lastExecTime))
      }
    }) as T
  }, [])

  // Debounced function for user input
  const debounce = useCallback(<T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): T => {
    let timeoutId: NodeJS.Timeout

    return ((...args: Parameters<T>) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => func.apply(null, args), delay)
    }) as T
  }, [])

  // RAF-based animation helper
  const requestAnimationFrame = useCallback((callback: () => void) => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }
    rafRef.current = window.requestAnimationFrame(callback)
  }, [])

  // Get optimal particle count based on device performance
  const getOptimalParticleCount = useMemo(() => {
    if (isMobile) return 30
    if (typeof window !== 'undefined') {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReducedMotion) return 10
      
      // Check device memory (if available)
      const deviceMemory = (navigator as any).deviceMemory
      if (deviceMemory && deviceMemory < 4) return 50
    }
    return 100
  }, [isMobile])

  return {
    throttle,
    debounce,
    requestAnimationFrame,
    getOptimalParticleCount,
    isMobile
  }
}