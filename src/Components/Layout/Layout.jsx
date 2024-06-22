import React from 'react'
import Nav from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router'

export default function Layout() {
  return <>
  <Nav/>

<Outlet></Outlet>


  <Footer/>
  
  </>
}
