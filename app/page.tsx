import BrandCarousel from '@/components/brandCarousel'
import CaseStudy from '@/components/caseStudy'
import { HeroSection } from '@/components/heroSection'
import HomeBusiness from '@/components/homeBusiness'
import HomeCore from '@/components/homeCore'
import HomeEngine from '@/components/homeEngine'
import HomeModel from '@/components/homeModel'
import HomeOutcome from '@/components/homeOutcome'
import HomeStandsFor from '@/components/homeStandsFor'
import HomeWeSolve from '@/components/homeWeSolve'
import HomeWhyChoose from '@/components/homeWhyChoose'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <HomeWeSolve/>
      <HomeStandsFor/>
      <HomeEngine/>
      <HomeModel/>
      <HomeCore/>
      <HomeWhyChoose/>
      <HomeBusiness/>
      <CaseStudy/>
      <HomeOutcome/>
      <BrandCarousel/>

    </div>
  )
}

export default page
