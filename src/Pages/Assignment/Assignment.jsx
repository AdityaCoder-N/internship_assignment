import React from 'react'
import calendarIcon from '../../Icons/calendar.svg'
import clockIcon from '../../Icons/clock-blue.svg'

import './Assignment.css'
const Assignment = () => {
  return (
    <div id='assignment-container'>

      <div className='assignment-heading-container'>
        <h1 className='assignment-heading'>Assignment-1 : Operators | Loops</h1>
        <div className='user-score'>

          <div className='user-score-value'>
            <div>
              <strong>3</strong>
            </div>
            <div>Problems</div>
          </div>
          <div className='user-score-value'>
            <div>
              <strong>150</strong> 
            </div>
            <div>Score</div>
          </div>

        </div>
      </div>

      <div className='assignment-date-top'>19 April 2023 , Thursday , 01:30 Am</div>

      <h3>Assignment Details</h3>

      <div className='assignment-info-card'>
        <div className='assignment-left-details'>

          <div className='assignment-card-textbox'>
            <div className='assignment-detail'>
              3
            </div>
            <div>
              Problems
            </div>
          </div>

          <div className='assignment-card-textbox'>
            <div className='assignment-detail'>
              125
            </div>
            <div>
              Total Score
            </div>
          </div>

        </div>

        <div className="assignment-right-details">

          <div className='assignment-start'>

            <h4>Start</h4>
            <div className='assignment-date'> 
              <img src={calendarIcon} alt="" className='assignment-icon'/>
              <div>21 April ,2023</div>
            </div>

            <div className='assignment-date'>
              <img src={clockIcon} alt="" className='assignment-icon'/>
              <div>7:30 Pm</div> 
            </div>

          </div>

          <div className='assignment-due'>

            <h4>Due</h4>
            <div className='assignment-date'> 
              <img src={calendarIcon} alt="" className='assignment-icon'/>
              <div>21 April ,2023</div> 
            </div>

            <div className='assignment-date'>
              <img src={clockIcon} alt="" className='assignment-icon'/>
              <div>11:59 Pm</div>  
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Assignment