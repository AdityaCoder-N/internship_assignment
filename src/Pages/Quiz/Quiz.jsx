import React from 'react'
import calendarIcon from '../../Icons/calendar.svg'
import clockIcon from '../../Icons/clock-blue.svg'

import './Quiz.css'

const Quiz = () => {
  return (
    <div id='quiz-container'>
      <h1 className='quiz-heading'>Quiz-1 : Data-Types</h1>

      <div className='quiz-date-top'>19 April 2023 , Thursday , 01:30 Am</div>

      <h3>Quiz Details</h3>

      <div className='quiz-info-card'>
        <div className='left-details'>

          <div className='quiz-card-textbox'>
            <div className='quiz-detail'>
              10
            </div>
            <div>
              Questions
            </div>
          </div>

          <div className='quiz-card-textbox'>
            <div className='quiz-detail'>
              -
            </div>
            <div>
              Duration
            </div>
          </div>

          <div className='quiz-card-textbox'>
            <div className='quiz-detail'>
              125
            </div>
            <div>
              Total Score
            </div>
          </div>

        </div>

        <div className="right-details">

          <div className='quiz-start'>

            <h4>Start</h4>
            <div className='quiz-date'> 
              <img src={calendarIcon} alt="" className='quiz-icon'/>
              <div>21 April ,2023</div>
            </div>

            <div className='quiz-date'>
              <img src={clockIcon} alt="" className='quiz-icon'/>
              <div>7:30 Pm</div> 
            </div>

          </div>

          <div className='quiz-due'>

            <h4>Due</h4>
            <div className='quiz-date'> 
              <img src={calendarIcon} alt="" className='quiz-icon'/>
              <div>21 April ,2023</div> 
            </div>

            <div className='quiz-date'>
              <img src={clockIcon} alt="" className='quiz-icon'/>
              <div>11:59 Pm</div>  
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Quiz