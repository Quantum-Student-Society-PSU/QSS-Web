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
    name: 'Sahil Pardasani',
    role: 'Logistics Executive Member',
    major: 'Computer Science',
    description: 'Brings reliability and detail to the behind-the-scenes work.',
  },
  {
    id: '6',
    name: 'Sanyam Agrawal',
    role: 'Education Chair',
    major: 'Computer Science',
    description: 'Creates opportunities for members to learn and dive deeper into quantum.',
  },
  {
    id: '7',
    name: 'Suryansh Sijwali',
    role: 'Education Executive Member',
    major: 'Computer Science & Physics',
    description: 'Supports educational initiatives with passion for both theory and practice.',
  },
  {
    id: '8',
    name: 'Kenneth Carter',
    role: 'Media',
    major: 'Materials Science & Engineering',
    description: 'Captures and shares the QSS story through creative media.',
  },
  {
    id: '9',
    name: 'Rajiv Chandramouli',
    role: 'Relations Chair',
    major: 'Material Science Engineering (Freshman)',
    description: 'Strengthens ties with peers and helps expand QSS connections.',
  },
  {
    id: '10',
    name: 'Greg Kramer',
    role: 'Relations Chair',
    major: 'Math (Sophomore)',
    description: 'Brings a thoughtful perspective to networking and collaboration.',
  },
  {
    id: '11',
    name: 'Shalin Patel',
    role: 'Relations Committee',
    major: 'Electrical Engineering (Freshman)',
    description: 'Adds energy and drive to growing our community presence.',
  },
]

export const ADVISORS: TeamMember[] = [
  {
    id: '12',
    name: 'Prof. Jorge Sofo',
    role: 'QSS Advisor',
    department: 'Physics',
    isAdvisor: true,
    description: 'A leader in theoretical condensed matter physics, Prof. Sofo brings deep insight into the quantum world and encourages our society to think big and stay curious.',
  },
  {
    id: '13',
    name: 'Prof. Daniel Lopez',
    role: 'QSS Advisor',
    department: 'Electrical Engineering',
    isAdvisor: true,
    description: 'An expert in nano-fabrication and experimental systems, Prof. Lopez provides invaluable guidance on connecting theory with cutting-edge applications.',
  },
]

export const ALL_TEAM_MEMBERS = [...OFFICERS, ...ADVISORS]