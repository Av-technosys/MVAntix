import IndustriesBuild from '@/components/industriesBuild'
import IndustriesEngagement from '@/components/industriesEngagement'
import IndustriesModel from '@/components/industriesModel'
import IndustriesWhy from '@/components/industriesWhy'
import React from 'react'

const page = () => {
  return (
    <div>
      <IndustriesEngagement/>
      <IndustriesBuild/>
      <IndustriesWhy/>
      <IndustriesModel/>
    </div>
  )
}

export default page
