import React from 'react'
import Navbar from './../components/Navabr';
import Footer from './../components/Footer';


const Layout = ({children}) => {
  return (
    <div className='w-full flex flex-col '>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout