import React from 'react'
import './HomePage.css'

import UpcomingCertification from '../../components/UpcomingCertifications/UpcomingCertification'
import ModuleDetailItem from '../../components/ModuleDetailItem/ModuleItemDetail'
import ProgressOverview from '../../components/ProgressOverview/ProgressOverview'
const HomePage = () => {
  return (
    <div id='homepage-container'>
      <h1 className='homepage-heading'>Upcoming Certifications</h1>
      <UpcomingCertification/>

      <h1 className="homepage-heading">Continue Learning</h1>

      <div className='homepage-module-container'>

        <div style={{width:'70%'}}>
          
          <ModuleDetailItem/>

        </div>
        <div style={{width:'30%'}}>
          
          <ProgressOverview/>

        </div>

      </div>
    </div>
  )
}

export default HomePage