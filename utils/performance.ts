// Performance monitoring utilities
export const performanceUtils = {
  // Measure component render time
  measureRender: (componentName: string, fn: () => void) => {
    if (typeof window === 'undefined' || !window.performance) return fn()
    
    const startTime = performance.now()
    const result = fn()
    const endTime = performance.now()
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`${componentName} render time: ${endTime - startTime}ms`)
    }
    
    return result
  },

  // Check if user prefers reduced motion
  prefersReducedMotion: () => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  },

  // Get device performance level
  getDevicePerformance: () => {
    if (typeof navigator === 'undefined') return 'high'
    
    const connection = (navigator as any).connection
    const deviceMemory = (navigator as any).deviceMemory
    
    // Check for slow connection
    if (connection && (connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g')) {
      return 'low'
    }
    
    // Check for low memory device
    if (deviceMemory && deviceMemory < 4) {
      return 'medium'
    }
    
    return 'high'
  },

  // Lazy load images with intersection observer
  lazyLoadImage: (img: HTMLImageElement, src: string) => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            img.src = src
            img.classList.remove('lazy')
            observer.unobserve(img)
          }
        })
      })
      observer.observe(img)
    } else {
      // Fallback for browsers without IntersectionObserver
      img.src = src
    }
  },

  // Optimize animation frame rate based on device
  getOptimalFrameRate: () => {
    const performance = performanceUtils.getDevicePerformance()
    
    switch (performance) {
      case 'low':
        return 30 // 30fps for low-end devices
      case 'medium':
        return 45 // 45fps for medium devices
      default:
        return 60 // 60fps for high-end devices
    }
  }
}

// Bundle analysis utilities for development
export const bundleUtils = {
  // Analyze bundle size in development
  analyzeBundleSize: () => {
    if (process.env.NODE_ENV !== 'development') return
    
    // Log loaded scripts size
    const scripts = Array.from(document.querySelectorAll('script[src]'))
    let totalSize = 0
    
    scripts.forEach(async (script) => {
      try {
        const response = await fetch((script as HTMLScriptElement).src)
        const size = parseInt(response.headers.get('content-length') || '0')
        totalSize += size
        
        console.log(`Script: ${(script as HTMLScriptElement).src.split('/').pop()} - ${(size / 1024).toFixed(2)}KB`)
      } catch (e) {
        // Ignore errors for external scripts
      }
    })
    
    setTimeout(() => {
      console.log(`Total bundle size: ${(totalSize / 1024 / 1024).toFixed(2)}MB`)
    }, 1000)
  }
}

// Memory management utilities
export const memoryUtils = {
  // Clean up event listeners and observers
  createCleanupManager: () => {
    const cleanupFunctions: (() => void)[] = []
    
    return {
      add: (cleanup: () => void) => {
        cleanupFunctions.push(cleanup)
      },
      
      cleanup: () => {
        cleanupFunctions.forEach(fn => {
          try {
            fn()
          } catch (e) {
            console.warn('Cleanup function failed:', e)
          }
        })
        cleanupFunctions.length = 0
      }
    }
  },

  // Monitor memory usage (if available)
  getMemoryUsage: () => {
    if (typeof window === 'undefined' || !(performance as any).memory) {
      return null
    }
    
    const memory = (performance as any).memory
    return {
      used: Math.round(memory.usedJSHeapSize / 1048576), // MB
      total: Math.round(memory.totalJSHeapSize / 1048576), // MB
      limit: Math.round(memory.jsHeapSizeLimit / 1048576) // MB
    }
  }
}