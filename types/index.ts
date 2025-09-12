export interface TeamMember {
  id: string
  name: string
  role: string
  department?: string
  major?: string
  initials: string
  isAdvisor?: boolean
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
  link?: string
}

export interface Activity {
  id: string
  title: string
  description: string
  icon?: React.ReactNode
}

export interface SocialLink {
  name: string
  href: string
  icon: React.ReactNode
}