import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar/index.ts'
import { Footer } from '../components/Footer/index.ts'
export const Layout = () => {
  return (
    <div className="layout">
      <React.Fragment>
        <Navbar />
        <Outlet />
        <Footer />
      </React.Fragment>
    </div>
  )
}
