import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="selected-program-box">
        <span>23434DASD2</span>
        <i class="fa-solid fa-caret-down"></i>
      </div>

      <div className='selected-program'>
        Data Scientist Program
      </div>
    </div>
  )
}

export default Navbar