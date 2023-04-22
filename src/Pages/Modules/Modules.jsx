import React, { useState } from 'react'
import playLogo from '../../Icons/activeTopic.svg'
import assignmentLogo from '../../Icons/activeAssignment.svg'
import questionLogo from '../../Icons/activeModuleQuiz.svg'
import { Outlet ,Link} from 'react-router-dom'
import './Modules.css'

const Modules = () => {

    const [selected,setSelected] = useState(0);
  return (
    <div id='modules-container'>
        <div className='left-module-navigator'>

            <Link className={(selected===0)?'module-option selectedModule':'module-option'} onClick={()=>setSelected(0)} to='/modules/lesson'>
                <img src={playLogo} alt="" />
                <div>Python Loops</div>
            </Link>
            <Link className={(selected===1)?'module-option selectedModule':'module-option'} onClick={()=>setSelected(1)} to='/modules/quiz'>
                <img src={questionLogo} alt="" />
                <div>Quiz-1 : Data Types</div>
            </Link>
            <Link className={(selected===2)?'module-option selectedModule':'module-option'} onClick={()=>setSelected(2)} to='/modules/assignment'>
                <img src={assignmentLogo} alt="" />
                <div>Assignment-1 : Operators | Loops</div>
            </Link>



        </div>

        <div className='right-module-container'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Modules