import React from 'react'
import './LeftNavigator.css'
import { Link } from "react-router-dom";
import { LeftNavigatorOptions } from '../../Data/LeftNavigatorOptions'

const LeftNavigator = () => {
  return (
    <div className='LeftNavigator-container'>

        {
            LeftNavigatorOptions.map((option)=>{
                return (
                    <Link className='option-container' to={option.path}>
                        <div className='option-icon'>
                            {option.icon}
                        </div>
                        <div className='option-name'>
                            {option.name}
                        </div>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default LeftNavigator