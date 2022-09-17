import React from 'react'
import lightning from '../images/lightning.png';
import logo from '../images/logo.png';
import clouds from '../images/clouds.png';
import '../style/navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <img src={lightning} className='lightning' />
        <img src={logo} className='logo' />
        <img src={clouds} className='clouds' />
    </div>
  )
}

export default Navbar