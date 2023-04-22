import React, { useState } from 'react'
import './LeftNavigator.css'
import { Link } from "react-router-dom";
import { LeftNavigatorOptions } from '../../Data/LeftNavigatorOptions'



const LeftNavigator = () => {

    const [selected,setSelected] = useState(0)
  return (
    <div className='LeftNavigator-container'>

        {
            LeftNavigatorOptions.map((option,index)=>{
                return (
                    <Link className={(selected===index)?'option-container selected':'option-container'} to={option.path} key={index} onClick={()=>setSelected(index)}>
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