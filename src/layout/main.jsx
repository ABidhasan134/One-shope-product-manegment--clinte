import React from 'react'
import NavBar from '../global/navBar'
import Footer from '../global/footer'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className='border-2 border-red-600 container mx-auto p-0 '>
      <NavBar></NavBar>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Main
