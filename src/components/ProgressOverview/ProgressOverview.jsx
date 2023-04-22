import React from 'react'
import './ProgressOverview.css'
const ProgressOverview = () => {
  return (
    <div className='progress-overview-container'>
        
        <h3 className='progress-heading'>Progress Overview</h3>

        <div className='progress-box'>
            <div>
                <strong>0%</strong>
            </div>

            <div className='grade-name'>
                Overall Grade
            </div>

            <div className='progress-grey-bar'></div>
        </div>
        <div className='progress-box'>
            <div>
                <strong>0%</strong>
            </div>

            <div className='grade-name'>
                Attendance
            </div>

            <div className='progress-grey-bar'></div>
        </div>

        <a className='view-detailed-progress-btn'>View Detailed Progress</a>
    </div>
  )
}

export default ProgressOverview