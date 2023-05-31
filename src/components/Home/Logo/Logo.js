import React, { useRef } from 'react'
import './Logo.scss'
import logok from '../../../assets/images/logo_rm.png'
const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={logok} alt="K" />
    </div>
  )
}

export default Logo
