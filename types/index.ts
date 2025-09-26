export interface TeamMember {
  id: string
  name: string
  role: string
  department?: string
  major?: string
  isAdvisor?: boolean
  description?: string
  linkedin?: string
  website?: string
}

export interface Event {
  id: string
  title: string
  date: {
    month: string
    day: string
  }
  time: string
  location: string
  description: string
  type: 'speaker' | 'collab' | 'showcase' | 'networking' | 'gbm'
  link?: string
}

export interface EventType {
  id: string
  type: 'speaker' | 'collab' | 'showcase' | 'networking' | 'gbm'
  title: string
  description: string
}

export interface Activity {
  id: string
  title: string
  description: string
  icon?: React.ComponentType<any>
}

export interface SocialLink {
  name: string
  href: string
  icon: React.ReactNode
}