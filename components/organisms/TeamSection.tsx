'use client'

import React from 'react'
import { Container } from '@/components/atoms/Container'
import { H2, H3, P } from '@/components/atoms/Typography'
import { TeamMemberCard } from '@/components/molecules/TeamMemberCard'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { OFFICERS, ADVISORS } from '@/data'
import { CONTENT } from '@/content/sections'

export const TeamSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="team" className="relative py-section-mobile sm:py-32 lg:py-40 bg-gradient-to-br from-primary-dark/90 via-primary-bg to-primary-dark/70 border-t-2 border-accent/20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,170,20,0.05),transparent_70%)]" />
      <div className="absolute top-0 right-1/4 sm:right-1/3 w-64 h-64 md:w-96 md:h-96 bg-accent/7 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 sm:left-1/3 w-64 h-64 md:w-96 md:h-96 bg-accent-light/7 rounded-full blur-3xl" />
      
      {/* Geometric shapes - responsive positioning */}
      <div className="absolute top-4 right-4 sm:top-10 sm:right-10 lg:top-20 lg:right-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-accent/10 rotate-45 rounded-lg hidden sm:block"></div>
      <div className="absolute bottom-4 left-4 sm:bottom-10 sm:left-10 lg:bottom-20 lg:left-20 w-12 h-12 sm:w-18 sm:h-18 lg:w-24 lg:h-24 border border-accent-light/10 rotate-12 rounded-lg hidden sm:block"></div>
      
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <H2 className="text-center mb-8 sm:mb-12 text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
            {CONTENT.team.title}
          </H2>
          
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <P className="text-lg md:text-xl leading-relaxed text-text-secondary">
              The Quantum Student Society is built by <span className="text-accent font-medium">students who bring energy, ideas, and dedication</span> to 
              every project. From leading events to building connections, this is the team making QSS happen:
            </P>
          </motion.div>

          {/* Officers Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <H3 className="text-center mb-12 text-2xl md:text-3xl font-bold text-accent">Officers</H3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {OFFICERS.map((member, index) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Advisors Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <H3 className="text-center mb-8 text-2xl md:text-3xl font-bold text-accent">Faculty Advisors</H3>
            
            {/* Advisors Introduction */}
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <P className="text-lg leading-relaxed text-text-secondary">
                QSS is guided by <span className="text-accent font-medium">world-class faculty</span> whose expertise and mentorship keep us grounded in both 
                academic rigor and real-world impact. Their support helps shape our projects, outreach, and 
                vision for the future of quantum at Penn State.
              </P>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {ADVISORS.map((advisor, index) => (
                <TeamMemberCard
                  key={advisor.id}
                  member={advisor}
                  index={index + OFFICERS.length}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}