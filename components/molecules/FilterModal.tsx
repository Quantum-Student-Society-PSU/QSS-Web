'use client'

import React, { useRef, useEffect } from 'react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { X, Filter, Check, ChevronDown } from 'lucide-react'
import { H3, P } from '@/components/atoms/Typography'
import { EventType } from '@/types'
import { cn } from '@/lib/utils'

interface FilterModalProps {
  isOpen: boolean
  onClose: () => void
  eventTypes: EventType[]
  selectedFilter: string
  onFilterChange: (filter: string) => void
}

export const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
  eventTypes,
  selectedFilter,
  onFilterChange,
}) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const scrollPositionRef = useRef<number>(0)

  // Lock body scroll when modal is open and preserve scroll position
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      scrollPositionRef.current = window.scrollY
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden'
    } else {
      // Restore scroll position and body scroll
      document.body.style.overflow = ''
      
      // Use setTimeout to ensure the modal animation completes before scrolling
      setTimeout(() => {
        window.scrollTo(0, scrollPositionRef.current)
      }, 100)
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleFilterSelect = (filter: string) => {
    onFilterChange(filter)
    onClose()
  }

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // Close modal if dragged down significantly or fast enough
    if (info.offset.y > 100 || info.velocity.y > 500) {
      onClose()
    }
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center">
          {/* Enhanced Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 backdrop-blur-md"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 50 }}
            transition={{ 
              type: "spring", 
              damping: 30, 
              stiffness: 400,
              duration: 0.4 
            }}
            className="relative w-full md:w-full max-w-2xl mx-4 md:mx-auto max-h-[85vh] md:max-h-[80vh]"
          >
            <div className="bg-gradient-to-br from-primary-bg/95 via-primary-dark/95 to-primary-bg/95 backdrop-blur-xl border-2 border-accent/40 rounded-t-3xl md:rounded-3xl shadow-2xl overflow-hidden">
              
              {/* Header */}
              <div className="flex items-center justify-center px-6 py-6 border-b border-accent/20">
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="p-3 bg-gradient-to-br from-accent/30 to-accent/15 rounded-2xl"
                    whileHover={{ scale: 1.05, rotate: 12 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Filter size={22} className="text-accent" />
                  </motion.div>
                  <div className="text-center">
                    <H3 className="text-xl font-bold text-text-primary">Filter Events</H3>
                    <P className="text-sm text-text-secondary">Choose your event type</P>
                  </div>
                </div>
              </div>

              {/* Scrollable Content */}
              <div 
                ref={contentRef}
                className="modal-scroll overflow-y-auto overscroll-contain px-6 py-6 max-h-[60vh] md:max-h-[50vh] filter-modal-scrollbar"
              >
                <P className="text-text-secondary mb-6 text-center">
                  Select an event type to filter the calendar, or view all events together.
                </P>

                {/* Filter Options */}
                <div className="space-y-4">
                  {/* All Events Option */}
                  <motion.button
                    onClick={() => handleFilterSelect('all')}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "w-full p-5 rounded-2xl border-2 transition-all duration-300 text-left group relative overflow-hidden",
                      selectedFilter === 'all'
                        ? "border-accent bg-gradient-to-r from-accent/20 to-accent/10 shadow-glow"
                        : "border-surface-border hover:border-accent/60 bg-gradient-to-br from-surface-glass to-transparent hover:shadow-lg"
                    )}
                  >
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="relative flex items-center justify-between">
                      <div>
                        <H3 className={cn(
                          "text-lg font-semibold transition-colors duration-300 mb-1",
                          selectedFilter === 'all' ? "text-accent" : "text-text-primary group-hover:text-accent"
                        )}>
                          All Events
                        </H3>
                        <P className="text-sm text-text-secondary">
                          View all upcoming events and activities
                        </P>
                      </div>
                      
                      <motion.div 
                        className={cn(
                          "w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 shrink-0",
                          selectedFilter === 'all'
                            ? "border-accent bg-accent shadow-glow"
                            : "border-surface-border group-hover:border-accent"
                        )}
                        whileHover={{ scale: 1.1 }}
                      >
                        {selectedFilter === 'all' && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Check size={16} className="text-primary-bg" />
                          </motion.div>
                        )}
                      </motion.div>
                    </div>
                  </motion.button>

                  {/* Event Type Options */}
                  {eventTypes.map((eventType, index) => (
                    <motion.button
                      key={eventType.id}
                      onClick={() => handleFilterSelect(eventType.type)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + index * 0.05 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className={cn(
                        "w-full p-5 rounded-2xl border-2 transition-all duration-300 text-left group relative overflow-hidden",
                        selectedFilter === eventType.type
                          ? "border-accent bg-gradient-to-r from-accent/20 to-accent/10 shadow-glow"
                          : "border-surface-border hover:border-accent/60 bg-gradient-to-br from-surface-glass to-transparent hover:shadow-lg"
                      )}
                    >
                      {/* Animated background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                      
                      <div className="relative flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <H3 className={cn(
                            "text-lg font-semibold transition-colors duration-300 mb-2",
                            selectedFilter === eventType.type ? "text-accent" : "text-text-primary group-hover:text-accent"
                          )}>
                            {eventType.title}
                          </H3>
                          <P className="text-sm text-text-secondary leading-relaxed">
                            {eventType.description}
                          </P>
                        </div>
                        
                        <motion.div 
                          className={cn(
                            "w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 shrink-0 mt-1",
                            selectedFilter === eventType.type
                              ? "border-accent bg-accent shadow-glow"
                              : "border-surface-border group-hover:border-accent"
                          )}
                          whileHover={{ scale: 1.1 }}
                        >
                          {selectedFilter === eventType.type && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <Check size={16} className="text-primary-bg" />
                            </motion.div>
                          )}
                        </motion.div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>


              {/* Footer */}
              <div className="flex justify-center items-center p-6 border-t border-accent/20 bg-gradient-to-r from-surface-glass/30 to-transparent">
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-surface-glass to-transparent hover:from-accent/20 hover:to-accent/10 border border-surface-border hover:border-accent/50 rounded-full transition-all duration-200 text-sm font-medium"
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}