import React from 'react'
import DataWranglerImg from '../../Icons/Data Wrangling.png'
import "./ModuleDetailItem.css"
export default function ModuleDetailItem() {
  return (
      <div className='ModuleDetailItem'>
          <div className="ModuleDetailItemLeft">
              <div className="ModuleDetailItemLeftheading">
                  <img src={DataWranglerImg} alt="" className='DataWranglerImg' />
                  <div className="ModuleDetailItemLeftInfo">
                      <span className='spanHeading'>DATA WRANGLING &</span>
                      <span className='spanHeading'>VISUALISATION</span>
                      <div className="testInstructor">
                         <img className='owlImg' src={DataWranglerImg} alt="OwlImg" />
                          <span className='spanInstructor'>Test Instructor</span>
                      </div>
                </div>
          </div>
          <div className="progressContainer">
              <div className="progressContainerItem">
                  <span className='progressHeading' >Live Sessions</span>
                  <div className="itemValue">
                    <span className='progressNumber'>0/13</span>
                    <div className="progressDiv"></div>
                  </div>
              </div>
              <div className="progressContainerItem">
                  <span className='progressHeading' >Assignments</span>
                  <div className="itemValue">
                    <span className='progressNumber'>0/3</span>
                    <div className="progressDiv"></div>
                  </div>
              </div>
              <div className="progressContainerItem">
                  <span className='progressHeading' >MCQ Quiz</span>
                  <div className="itemValue">
                    <span className='progressNumber'>0/6</span>
                    <div className="progressDiv"></div>
                  </div>
              </div>
          </div>
          </div>
          <div className="ModuleDetailItemRight">
              <div className="Date">
                <h3>Today's Plan</h3>
                <span>21 March 2022</span>
        </div>
        <h2 className='ModuleDetailItemRightCourseHeading' >Data Transformation using Pandas - 3</h2>
        <div className="dailyFeedback">
          <span style={{color:"#d2c2c2"}} >Daily Feedback</span>
          <span style={{color:"#578cee",fontSize:"small"}} >opens at 7:30 PM</span>
        </div>
        <div className="liveSession">
          <button  className='LiveSessionBtn' >JOIN LIVE SESSION</button>
          <span style={{color:"#d2c2c2",fontSize:"small"}} >BEGINS AT 7 : 30 PM</span>
        </div>
        </div>
    </div>
  )
}