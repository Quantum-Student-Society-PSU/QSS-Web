'use client'

import React from 'react'
import { Container } from '@/components/atoms/Container'
import { H2, H3, P } from '@/components/atoms/Typography'
import { TeamMemberCard } from '@/components/molecules/TeamMemberCard'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TeamMember } from '@/types'

export const TeamSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const officers: TeamMember[] = [
    {
      id: '1',
      name: 'Pranav Singhal',
      role: 'President',
      major: 'Computer Science',
      initials: 'PS',
      description: 'Guides QSS with vision and keeps the society moving toward new horizons.',
    },
    {
      id: '2',
      name: 'Ragul Vijayakumar Nithya',
      role: 'Vice President',
      major: 'Engineering Science (Neural Engineering)',
      initials: 'RV',
      description: 'Bridges research and community, ensuring every member has a place to grow.',
    },
    {
      id: '3',
      name: 'Keegan Robinson',
      role: 'Treasurer',
      major: 'Architectural Engineering',
      initials: 'KR',
      description: 'Balances the books and makes sure our resources fuel impact.',
    },
    {
      id: '4',
      name: 'Anchita Mitra',
      role: 'Logistics Head',
      major: 'Data Science',
      initials: 'AM',
      description: 'Keeps events and operations running smoothly, no matter the scale.',
    },
    {
      id: '5',
      name: 'Sahil Pardasani',
      role: 'Logistics Executive Member',
      major: 'Computer Science',
      initials: 'SP',
      description: 'Brings reliability and detail to the behind-the-scenes work.',
    },
    {
      id: '6',
      name: 'Sanyam Agrawal',
      role: 'Education Chair',
      major: 'Computer Science',
      initials: 'SA',
      description: 'Creates opportunities for members to learn and dive deeper into quantum.',
    },
    {
      id: '7',
      name: 'Suryansh Sijwali',
      role: 'Education Executive Member',
      major: 'Computer Science & Physics',
      initials: 'SS',
      description: 'Supports educational initiatives with passion for both theory and practice.',
    },
    {
      id: '8',
      name: 'Kenneth Carter',
      role: 'Media',
      major: 'Materials Science & Engineering',
      initials: 'KC',
      description: 'Captures and shares the QSS story through creative media.',
    },
    {
      id: '9',
      name: 'Rajiv Chandramouli',
      role: 'Relations Chair',
      major: 'Material Science Engineering (Freshman)',
      initials: 'RC',
      description: 'Strengthens ties with peers and helps expand QSS connections.',
    },
    {
      id: '10',
      name: 'Greg Kramer',
      role: 'Relations Chair',
      major: 'Math (Sophomore)',
      initials: 'GK',
      description: 'Brings a thoughtful perspective to networking and collaboration.',
    },
    {
      id: '11',
      name: 'Shalin Patel',
      role: 'Relations Committee',
      major: 'Electrical Engineering (Freshman)',
      initials: 'SP2',
      description: 'Adds energy and drive to growing our community presence.',
    },
  ]

  const advisors: TeamMember[] = [
    {
      id: '12',
      name: 'Prof. Jorge Sofo',
      role: 'QSS Advisor',
      department: 'Physics',
      initials: 'JS',
      isAdvisor: true,
      description: 'A leader in theoretical condensed matter physics, Prof. Sofo brings deep insight into the quantum world and encourages our society to think big and stay curious.',
    },
    {
      id: '13',
      name: 'Prof. Daniel Lopez',
      role: 'QSS Advisor',
      department: 'Electrical Engineering',
      initials: 'DL',
      isAdvisor: true,
      description: 'An expert in nano-fabrication and experimental systems, Prof. Lopez provides invaluable guidance on connecting theory with cutting-edge applications.',
    },
  ]

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
            Our Team
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
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <H3 className="text-center mb-12 text-2xl md:text-3xl font-bold text-accent">Officers</H3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {officers.map((member, index) => (
                  <TeamMemberCard
                    key={member.id}
                    member={member}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </div>

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
              {advisors.map((member, index) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  index={index + officers.length}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}