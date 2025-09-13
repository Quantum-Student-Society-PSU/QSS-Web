import { TeamMember } from '@/types'

export const OFFICERS: TeamMember[] = [
  {
    id: '1',
    name: 'Pranav Singhal',
    role: 'President',
    major: 'Computer Science',
    description: 'Guides QSS with vision and keeps the society moving toward new horizons.',
  },
  {
    id: '2',
    name: 'Ragul Vijayakumar Nithya',
    role: 'Vice President',
    major: 'Engineering Science (Neural Engineering)',
    description: 'Bridges research and community, ensuring every member has a place to grow.',
  },
  {
    id: '3',
    name: 'Keegan Robinson',
    role: 'Treasurer',
    major: 'Architectural Engineering',
    description: 'Balances the books and makes sure our resources fuel impact.',
  },
  {
    id: '4',
    name: 'Anchita Mitra',
    role: 'Logistics Head',
    major: 'Data Science',
    description: 'Keeps events and operations running smoothly, no matter the scale.',
  },
  {
    id: '5',
    name: 'Suryansh Sharma',
    role: 'Head of Technology',
    major: 'Computer Science',
    description: 'Drives our tech initiatives and builds the digital tools that power QSS.',
  },
]

export const ADVISORS: TeamMember[] = [
  {
    id: 'advisor-1',
    name: 'Dr. Srinivas Tadigadapa',
    role: 'Faculty Advisor',
    department: 'Electrical Engineering',
    isAdvisor: true,
    description: 'A leading researcher in MEMS and sensor technology, Dr. Tadigadapa brings decades of experience in quantum sensing and device physics.',
  },
  {
    id: 'advisor-2',
    name: 'Prof. Humberto Terrones',
    role: 'Faculty Advisor',
    department: 'Physics',
    isAdvisor: true,
    description: 'An expert in condensed matter physics and nanomaterials, Prof. Terrones provides guidance on quantum materials and theoretical foundations.',
  },
  {
    id: 'advisor-3',
    name: 'Dr. Kristina Lopez',
    role: 'Faculty Advisor',
    department: 'Materials Science',
    isAdvisor: true,
    description: 'An expert in nano-fabrication and experimental systems, Prof. Lopez provides invaluable guidance on connecting theory with cutting-edge applications.',
  },
]

export const ALL_TEAM_MEMBERS = [...OFFICERS, ...ADVISORS]