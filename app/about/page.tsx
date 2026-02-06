import AboutBanner from '@/components/aboutBanner'
import AboutCommit from '@/components/aboutCommit'
import AboutDeliver from '@/components/aboutDeliver'
import AboutJourney from '@/components/aboutJourney'
import AboutPhilosophy from '@/components/aboutPhilosophy'
import AboutPupose from '@/components/aboutPupose'
import AboutVision from '@/components/aboutVision'
import React from 'react'

const page = () => {
  return (
    <div>
      <AboutBanner/>
      <AboutPupose/>
      <AboutPhilosophy/>
      <AboutJourney/>
      <AboutDeliver/>
      <AboutVision/>
      <AboutCommit/>
    </div>
  )
}

export default page
