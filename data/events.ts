import { Event, EventType } from '@/types'

export const EVENT_TYPES: EventType[] = [
  {
    id: '1',
    type: 'speaker',
    title: 'Speaker Series',
    description: 'Hear from professors, researchers, and industry leaders shaping the quantum frontier',
  },
  {
    id: '2',
    type: 'gbm',
    title: 'General Body Meeting',
    description: 'Regular meetings for all members to discuss club activities, upcoming events, and initiatives',
  },
  {
    id: '3',
    type: 'collab',
    title: 'Collab Meetups',
    description: 'Casual gatherings where members of QSS and other STEM Clubs meet together to brainstorm projects, swap ideas, and learn from one another',
  },
  {
    id: '4',
    type: 'showcase',
    title: 'Showcase Events',
    description: 'A chance to present student work, celebrate achievements, and connect with the wider STEM community',
  },
  {
    id: '5',
    type: 'networking',
    title: 'Networking & Career Prep',
    description: 'Building connections with labs, startups, and companies shaping the quantum workforce of tomorrow',
  },
]

export const UPCOMING_EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'Lecture 2',
    date: { month: 'TBD', day: '--' },
    time: 'TBD',
    location: 'TBD',
    description: 'Join us for an engaging lecture on quantum computing fundamentals and recent developments',
    type: 'speaker',
  },
  {
    id: 'e2',
    title: 'GBM 2',
    date: { month: 'TBD', day: '--' },
    time: 'TBD',
    location: 'TBD',
    description: 'General body meeting to discuss upcoming projects and club initiatives',
    type: 'gbm',
  },
]