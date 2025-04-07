import React from 'react'
import IntegrationAppsSearchbox from './IntegrationAppsSearchbox'
import IntegrationData from './IntegrationCards'
import IntegrationTopCards from './IntegrationTopCards'

export default function IntegrationAppsDiscover() {
  return (
    <div>
        <IntegrationTopCards/>
      <IntegrationAppsSearchbox/>
      <IntegrationData/>
      
    </div>
  )
}
