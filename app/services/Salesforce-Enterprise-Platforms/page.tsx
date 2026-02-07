import SalesAi from '@/components/salesAi'
import SalesBanner from '@/components/salesBanner'
import SalesCloud from '@/components/salesCloud'
import SalesForceService from '@/components/salesForceService'
import SalesOperations from '@/components/salesOperations'
import SalesSolution from '@/components/salesSolution'
import React from 'react'

const page = () => {
  return (
    <div>
      <SalesBanner/>
      <SalesForceService/>
      <SalesOperations/>
      <SalesAi/>
      <SalesCloud/>
      <SalesSolution/>
    </div>
  )
}

export default page
