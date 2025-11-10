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
    id: 'e11',
    title: 'Speaker Event - Prof. Imran Mirza',
    date: { month: 'Nov', day: '13' },
    time: '5:30-6:30pm',
    location: 'Wilard 165',
    description: 'Professor Imran Mirza will give a talk on Quantum Information Science and its connection to optics',
    type: 'speaker',
  },
  {
    id: 'e13',
    title: 'Speaker Event - Prof. Zhiqiang Mao',
    date: { month: 'Nov', day: '27' },
    time: 'TBD',
    location: 'TBD',
    description: 'Professor Zhiqiang Mao will give a talk about quantum materials',
    type: 'speaker',
  },
  {
    id: 'e14',
    title: 'Speaker Event - Prof. Jun Zhu',
    date: { month: 'Dec', day: '11' },
    time: 'TBD',
    location: 'TBD',
    description: 'Professor Jun Zhu will speak about Quantum Information pathways on topological edge states',
    type: 'speaker',
  },
]