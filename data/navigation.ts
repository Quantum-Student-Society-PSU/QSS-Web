export interface NavItem {
  href: string
  label: string
}

export interface SocialLinkData {
  href: string
  icon: string
  label: string
}

export const NAV_ITEMS: NavItem[] = [
  { href: '#home', label: 'Home' },
  { href: '#mission', label: 'About Us' },
  { href: '#activities', label: 'Activities' },
  { href: '#events', label: 'Events' },
  { href: '#team', label: 'Team' },
]

export const SOCIAL_LINKS: SocialLinkData[] = [
  { href: 'https://campsite.bio/psuqss', icon: 'Link2', label: 'All Links' },
]