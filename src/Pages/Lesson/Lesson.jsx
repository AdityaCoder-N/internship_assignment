import React, { useState } from 'react'
import { LessonOptions } from '../../Data/LessonOptions'
import './Lesson.css'
const Lesson = () => {

  const [selected,setSelected] = useState(0)
  return (
    <div id='lesson-container'>
      <h1 id='lesson-heading'>Python Loops</h1>

      <div className='subtext'>19 April 2023 , Thursday , 01:30 Am</div>

      <div className='daily-feedback'>Daily Feedback</div>

      <div className='lesson-content-container'>

        <div className='lesson-options-row'>
        {
          LessonOptions.map((option,index)=>{
            return (
              <div className={(selected===index)?'lesson-option active-l-option':'lesson-option'} onClick={()=>setSelected(index)} key={index}>
                <img src={option.icon} alt="" className='lesson-icons'/>
                <span>
                  {option.name}
                </span>
              </div>
            )
          })
        }
        </div>

        {(selected===0) && <div className='option-content'>
            <h2 className='sub-heading'>Session Plan</h2>

            <div className='sub-text'>Live session is about to start. Please stay tuned .</div>
            <button  className='LiveSessionBtn' >JOIN LIVE SESSION</button>

            <div className='subtopics-container'>
              <h3 className='sub-sub-heading'>Subtopics</h3>
              <ol type='1' className='sub-text topics-list'>
                <li>Sorting and Indexing Dataframe</li>
                <li>Filtering Dataframe</li>
                <li>Usage of loc and iloc Functions</li>
              </ol>
            </div>
            

            <h3 className='sub-sub-heading'>Session Details</h3>

        </div>}

        {
          (selected===1) && <div className="option-content">
            Pre-Watch Videos
          </div>
        }
        {
          (selected===2) && <div className="option-content">
            Session Recordings
          </div>
        }
        {
          (selected===3) && <div className="option-content">
            Refrences
          </div>
        }


      </div>

    </div>
  )
}

export default Lesson