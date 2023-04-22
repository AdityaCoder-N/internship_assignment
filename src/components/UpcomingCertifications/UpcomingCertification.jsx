import React from 'react'
import profile from '../../Icons/Data-Analysis.png'
import "./UpcomingCertification.css"

export default function UpcomingCertification() {
  return (
      <div className='UpcomingCertification' >
          <div className="CertificationDetail">
              <img src={profile} alt="" className='user-img' />
              <div className="CertificationInfo">
                  <div className='smallSpan' style={{backgroundColor:"#eed0d0"}} ><span>CERTIFICATION </span> | <span> ATTEMPT 1</span></div>
                  <span className='spanHeading'>DATA ANALYSIS</span>
                  <span className='spanHeading'>CERTIFICATION</span>
                  <div className='smallSpan' style={{backgroundColor:"rgb(173, 205, 217)"}} ><span>COMPLETED </span> | <span> 21 MAR 2022</span></div>
              </div>
          </div>
          <div className="CertificationRound">
              <span> <strong>Exam Structure</strong></span>
             <div> <span>Round 1</span><span className='roundsItem' > MCQS</span><span className='roundsItem' > CODING</span></div>
             <div> <span>Round 2</span><span className='roundsItem'> PROJECTS</span></div>
          </div>
          <button className='CertificationViewDetail' >
                VIEW EXAM DETAILS
          </button>
    </div>
  )
}