import React from 'react'
import profile from '../../Icons/Data-Analysis.png'
import "./UpcomingCertification.css"

export default function UpcomingCertification() {
  return (
      <div className='upcoming-certification' >
          <div className="certification-detail">
              <img src={profile} alt="" className='data-analysis-img' />
              <div className="certification-info">
                  <div className='small-span bg-light-pink'>CERTIFICATION  | ATTEMPT 1</div>
                  <div className='certification-heading'>DATA ANALYSIS CERTIFICATION</div>
                  <div className='small-span bg-light-blue' >COMPLETED  |  21 MAR 2022</div>
              </div>
          </div>
          <div className="certification-round-container">
                <div><strong>Exam Structure</strong></div>
                <div className='round-row'> 
                    <span>Round 1</span>
                    <span className='rounds-item' > MCQS</span>
                    <span className='rounds-item' > CODING</span>
                </div>
                <div className='round-row'> 
                    <span>Round 2</span>
                    <span className='rounds-item'> PROJECTS</span>
                </div>
          </div>
          <button className='certification-view-detail' >
                VIEW EXAM DETAILS
          </button>
    </div>
  )
}