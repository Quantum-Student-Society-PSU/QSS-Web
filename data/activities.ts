import { Activity } from '@/types'
import { BookOpen, Microscope, Users, Zap } from 'lucide-react'

export const ACTIVITIES: Activity[] = [
  {
    id: '1',
    title: 'Workshops & Tutorials',
    description: 'Hands-on sessions where members learn the basics (and beyond) of quantum computing, algorithms, and hardware.',
    icon: BookOpen,
  },
  {
    id: '2',
    title: 'Research & Projects (Planning)',
    description: 'Student-led collaborations exploring everything from quantum algorithms to simulations and experimental setups.',
    icon: Microscope,
  },
  {
    id: '3',
    title: 'Community Outreach',
    description: 'Sharing our love for quantum with the broader community through demos, events, and STEM outreach.',
    icon: Users,
  },
  {
    id: '4',
    title: 'Hackathons & Build Nights',
    description: 'Team up, experiment, and put ideas into action in a fast-paced, hands-on setting.',
    icon: Zap,
  },
]