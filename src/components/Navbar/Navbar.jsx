import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { fetchPrograms } from '../../Features/Programs/ProgramSlice'

import './Navbar.css'


const Navbar = () => {

  const [userPrograms,setUserPrograms] = useState([])

  const [selectedProgram,setSelectedProgram] = useState({id:'DS031221',name:'Data Scientist Program'})

  const {programs} = useSelector((state) => state)

  const dispatch = useDispatch()
  
  const fetchUserPrograms=()=>{
    // Fetching User's Programs
    dispatch(fetchPrograms(1));

    
    setUserPrograms(programs.programs)
    console.log(programs)
    console.log("response : ",programs.programs)
  }

  const [dropdown,setDropdown] = useState(false)

  const selectProgram = (id,name)=>{
    setSelectedProgram({id:id,name:name});
    setDropdown(false);
  }

  useEffect(() => {
    
      fetchUserPrograms();
    
  }, [])
  
  


  return (
    <div className='navbar'>
      <div className="selected-program-box" onClick={()=>setDropdown(!dropdown)}>
        <span>{selectedProgram.id}</span>
        <i class="fa-solid fa-caret-down"></i>
      </div>

      <div className={dropdown?'navbar-dropdown visible':'navbar-dropdown'}>
        <div style={{fontSize:"large"}}> Select Program</div>

        <div className='program-list'>
        {
          userPrograms.map((program)=>{
            return (
              <span className='program-item' onClick={()=>selectProgram(program.programId,program.programName)}>
                {program.programId}
              </span>
            )
          })
        }
        </div>
      </div>

      <div className='selected-program'>
        {selectedProgram.name}
      </div>
    </div>
  )
}

export default Navbar