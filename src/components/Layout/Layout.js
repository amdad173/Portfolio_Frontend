import React from 'react'
import './Layout.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags"></span>
        <Outlet />

        <span className="tags bottom-tags"></span>
        <br />
        <span className="html-tag bottom-tag-html"></span>
      </div>
    </div>
  )
}

export default Layout
