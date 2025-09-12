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
      name: 'John Doe',
      role: 'President',
      major: 'Physics & Computer Science',
      initials: 'JD',
    },
    {
      id: '2',
      name: 'Jane Smith',
      role: 'Vice President',
      major: 'Electrical Engineering',
      initials: 'JS',
    },
    {
      id: '3',
      name: 'Michael Johnson',
      role: 'Secretary',
      major: 'Mathematics',
      initials: 'MJ',
    },
    {
      id: '4',
      name: 'Emily Davis',
      role: 'Treasurer',
      major: 'Computer Science',
      initials: 'ED',
    },
    {
      id: '5',
      name: 'William Brown',
      role: 'Events Coordinator',
      major: 'Physics',
      initials: 'WB',
    },
    {
      id: '6',
      name: 'Sarah Wilson',
      role: 'Outreach Director',
      major: 'Engineering Science',
      initials: 'SW',
    },
  ]

  const advisors: TeamMember[] = [
    {
      id: '7',
      name: 'Dr. Robert Anderson',
      role: 'Professor of Physics',
      department: 'Department of Physics',
      initials: 'RA',
      isAdvisor: true,
    },
    {
      id: '8',
      name: 'Dr. Jennifer Martinez',
      role: 'Associate Professor',
      department: 'School of Electrical Engineering & Computer Science',
      initials: 'JM',
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