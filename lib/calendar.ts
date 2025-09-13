import { Event } from '@/types'

export const generateICSFile = (event: Event): string => {
  const now = new Date()
  const timestamp = now.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
  
  // Since we have TBD dates, we'll create a tentative future date
  // You can update this logic when actual dates are available
  const eventDate = event.date.month === 'TBD' 
    ? new Date(now.getFullYear(), now.getMonth() + 1, 15) // Default to next month, 15th
    : new Date() // This would be replaced with actual date parsing
  
  const startDate = eventDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
  const endDate = new Date(eventDate.getTime() + 2 * 60 * 60 * 1000) // 2 hours duration
    .toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Quantum Student Society//QSS Events//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${event.id}-${timestamp}@psuqss.org`,
    `DTSTAMP:${timestamp}`,
    `DTSTART:${startDate}`,
    `DTEND:${endDate}`,
    `SUMMARY:QSS - ${event.title}`,
    `DESCRIPTION:${event.description}\\n\\nEvent Type: ${getEventTypeLabel(event.type)}\\n\\nFor more information, visit: https://campsite.bio/psuqss`,
    `LOCATION:${event.location === 'TBD' ? 'Penn State University (Location TBD)' : event.location}`,
    'STATUS:TENTATIVE',
    'BEGIN:VALARM',
    'TRIGGER:-PT1H',
    'ACTION:DISPLAY',
    `DESCRIPTION:Reminder: QSS ${event.title} in 1 hour`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n')

  return icsContent
}

export const downloadICSFile = (event: Event): void => {
  const icsContent = generateICSFile(event)
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
  const url = window.URL.createObjectURL(blob)
  
  const link = document.createElement('a')
  link.href = url
  link.download = `qss-${event.title.toLowerCase().replace(/\s+/g, '-')}.ics`
  
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  
  window.URL.revokeObjectURL(url)
}

const getEventTypeLabel = (type: string): string => {
  const typeLabels: { [key: string]: string } = {
    'speaker': 'Speaker Series',
    'gbm': 'General Body Meeting',
    'collab': 'Collaboration Meetup',
    'showcase': 'Showcase Event',
    'networking': 'Networking & Career Prep'
  }
  return typeLabels[type] || 'QSS Event'
}