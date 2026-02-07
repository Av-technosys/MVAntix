import TalentEngagement from '@/components/talentEngagement'
import TalentPods from '@/components/talentPods'
import TalentTraining from '@/components/talentTraining'
import React from 'react'

const page = () => {
  return (
    <div>
     <TalentPods/>
     <TalentTraining/>
     <TalentEngagement/>
    </div>
  )
}

export default page
