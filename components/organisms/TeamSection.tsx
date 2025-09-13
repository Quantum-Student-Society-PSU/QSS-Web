'use client'

import React from 'react'
import { Container } from '@/components/atoms/Container'
import { H2, H3 } from '@/components/atoms/Typography'
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
    },
    {
      id: '2',
      name: 'Ragul Vijayakumar Nithya',
      role: 'Vice President',
      major: 'Engineering Science (Neural Engineering)',
      initials: 'RV',
    },
    {
      id: '3',
      name: 'Keegan Robinson',
      role: 'Treasurer',
      major: 'Architectural Engineering',
      initials: 'KR',
    },
    {
      id: '4',
      name: 'Anchita Mitra',
      role: 'Logistics Head',
      major: 'Data Science',
      initials: 'AM',
    },
    {
      id: '5',
      name: 'Sahil Pardasani',
      role: 'Logistics Executive Member',
      major: 'Computer Science',
      initials: 'SP',
    },
    {
      id: '6',
      name: 'Sanyam Agrawal',
      role: 'Education Chair',
      major: 'Computer Science',
      initials: 'SA',
    },
    {
      id: '7',
      name: 'Suryansh Sijwali',
      role: 'Education Executive Member',
      major: 'Computer Science & Physics',
      initials: 'SS',
    },
    {
      id: '8',
      name: 'Kenneth Carter',
      role: 'Media',
      major: 'Materials Science & Engineering',
      initials: 'KC',
    },
    {
      id: '9',
      name: 'Rajiv Chandramouli',
      role: 'Relations Chair',
      major: 'Material Science Engineering (Freshman)',
      initials: 'RC',
    },
    {
      id: '10',
      name: 'Greg Kramer',
      role: 'Relations Chair',
      major: 'Math (Sophomore)',
      initials: 'GK',
    },
    {
      id: '11',
      name: 'Shalin Patel',
      role: 'Relations Committee',
      major: 'Electrical Engineering (Freshman)',
      initials: 'SP2',
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
    },
    {
      id: '13',
      name: 'Prof. Daniel Lopez',
      role: 'QSS Advisor',
      department: 'Electrical Engineering',
      initials: 'DL',
      isAdvisor: true,
    },
  ]

  return (
    <section id="team" className="py-24">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <H2 className="text-center mb-16">Our Team</H2>
          
          <div className="mb-16">
            <H3 className="text-center mb-8">Officers</H3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {officers.map((member, index) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div>
            <H3 className="text-center mb-8">Faculty Advisors</H3>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {advisors.map((member, index) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  index={index}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}