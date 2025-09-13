// Focus management utilities
export const focusManagement = {
  // Trap focus within a container
  trapFocus: (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus()
          e.preventDefault()
        }
      }
    }

    container.addEventListener('keydown', handleTab)
    firstElement?.focus()

    return () => {
      container.removeEventListener('keydown', handleTab)
    }
  },

  // Restore focus to previously focused element
  createFocusRestore: () => {
    const previouslyFocused = document.activeElement as HTMLElement
    
    return () => {
      if (previouslyFocused && previouslyFocused.focus) {
        previouslyFocused.focus()
      }
    }
  }
}

// ARIA utilities
export const ariaUtils = {
  // Generate unique IDs for ARIA relationships
  generateId: (prefix: string = 'aria') => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
  },

  // Set ARIA attributes for modal/dialog
  setModalAttributes: (modalElement: HTMLElement, titleId?: string, descriptionId?: string) => {
    modalElement.setAttribute('role', 'dialog')
    modalElement.setAttribute('aria-modal', 'true')
    if (titleId) modalElement.setAttribute('aria-labelledby', titleId)
    if (descriptionId) modalElement.setAttribute('aria-describedby', descriptionId)
  },

  // Set ARIA attributes for expandable content
  setExpandableAttributes: (
    trigger: HTMLElement, 
    content: HTMLElement, 
    isExpanded: boolean
  ) => {
    const contentId = content.id || ariaUtils.generateId('expandable')
    content.id = contentId
    
    trigger.setAttribute('aria-expanded', String(isExpanded))
    trigger.setAttribute('aria-controls', contentId)
    content.setAttribute('aria-hidden', String(!isExpanded))
  }
}

// Screen reader utilities
export const screenReaderUtils = {
  // Announce dynamic content changes
  announce: (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcer = document.createElement('div')
    announcer.setAttribute('aria-live', priority)
    announcer.setAttribute('aria-atomic', 'true')
    announcer.className = 'sr-only'
    document.body.appendChild(announcer)
    
    setTimeout(() => {
      announcer.textContent = message
    }, 100)
    
    setTimeout(() => {
      document.body.removeChild(announcer)
    }, 1000)
  },

  // Create visually hidden text for screen readers
  createSROnly: (text: string) => {
    const span = document.createElement('span')
    span.className = 'sr-only'
    span.textContent = text
    return span
  }
}

// Keyboard navigation helpers
export const keyboardUtils = {
  // Common key codes
  KEYS: {
    ENTER: 'Enter',
    SPACE: ' ',
    ESCAPE: 'Escape',
    ARROW_UP: 'ArrowUp',
    ARROW_DOWN: 'ArrowDown',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
    HOME: 'Home',
    END: 'End',
    TAB: 'Tab'
  },

  // Check if key should trigger action (Enter or Space)
  isActionKey: (key: string) => {
    return key === keyboardUtils.KEYS.ENTER || key === keyboardUtils.KEYS.SPACE
  },

  // Handle arrow key navigation
  handleArrowNavigation: (
    e: KeyboardEvent,
    items: HTMLElement[],
    currentIndex: number,
    options: { loop?: boolean; orientation?: 'horizontal' | 'vertical' } = {}
  ) => {
    const { loop = true, orientation = 'vertical' } = options
    let newIndex = currentIndex

    const isVertical = orientation === 'vertical'
    const nextKey = isVertical ? keyboardUtils.KEYS.ARROW_DOWN : keyboardUtils.KEYS.ARROW_RIGHT
    const prevKey = isVertical ? keyboardUtils.KEYS.ARROW_UP : keyboardUtils.KEYS.ARROW_LEFT

    if (e.key === nextKey) {
      newIndex = currentIndex + 1
      if (newIndex >= items.length) {
        newIndex = loop ? 0 : items.length - 1
      }
    } else if (e.key === prevKey) {
      newIndex = currentIndex - 1
      if (newIndex < 0) {
        newIndex = loop ? items.length - 1 : 0
      }
    } else if (e.key === keyboardUtils.KEYS.HOME) {
      newIndex = 0
    } else if (e.key === keyboardUtils.KEYS.END) {
      newIndex = items.length - 1
    }

    if (newIndex !== currentIndex) {
      items[newIndex]?.focus()
      e.preventDefault()
    }

    return newIndex
  }
}