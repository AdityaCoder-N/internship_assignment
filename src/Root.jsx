import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import LeftNavigator from './components/LeftNavigator/LeftNavigator'
import { Outlet } from 'react-router-dom'
const Root = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <LeftNavigator/>

        <div id="detail">
            <Outlet />
        </div>
    </div>
  )
}

export default Root