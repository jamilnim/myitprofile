import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import "./Roots.css"
function Roots() {
  return (
    <div>
      <Header/>
      <div className='mainbody'>
      <main > 
        <Outlet/>
      </main>
      </div>
      <Footer/>
    </div>
  )
}

export default Roots
