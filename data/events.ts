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
    title: 'GBM - How Quantum Materials Supercharges Quantum Computing',
    date: { month: 'Feb', day: '24' },
    time: '6:30-8:00pm',
    location: 'Chambers 104',
    description: 'Professor Zhu will teach us how advancements in quantum materials are paving the way for quantum computing',
    type: 'gbm',
  },
]