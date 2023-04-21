import React from 'react'
import profile from '../../Icons/Data-Analysis.png'

import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
            EDYODA
        </div>

        <div className='user-profile'>
          <div>
            Hi Test User !
          </div>
          <div>
            <img src={profile} alt="" className='user-img'/>
          </div>
        </div>
    </div>
  )
}

export default Header