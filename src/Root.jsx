import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import LeftNavigator from './components/LeftNavigator/LeftNavigator'
import { Outlet } from 'react-router-dom'

import './index.css'
const Root = () => {
  return (
    <div>
        <Header/>
        <Navbar/>

        <div style={{display:"flex"}}>

            <LeftNavigator/>

            <div id="main-right-div">
                <Outlet />
            </div>

        </div>
    </div>
  )
}

export default Root