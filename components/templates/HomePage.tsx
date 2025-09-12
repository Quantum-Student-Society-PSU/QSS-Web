import React from 'react'
import { Header } from '@/components/organisms/Header'
import { HeroSection } from '@/components/organisms/HeroSection'
import { MissionSection } from '@/components/organisms/MissionSection'
import { ActivitiesSection } from '@/components/organisms/ActivitiesSection'
import { EventsSection } from '@/components/organisms/EventsSection'
import { TeamSection } from '@/components/organisms/TeamSection'
import { Footer } from '@/components/organisms/Footer'

export const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="bg-primary-bg">
        <HeroSection />
        <MissionSection />
        <ActivitiesSection />
        <EventsSection />
        <TeamSection />
      </main>
      <Footer />
    </>
  )
}