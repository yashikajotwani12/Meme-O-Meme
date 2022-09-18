import React from 'react'
import lightning from '../images/lightning.png';
import logo from '../images/logo.png';
import clouds from '../images/clouds.png';
import '../style/navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <img src={lightning}  alt= 'logo' className='lightning' />
        <img src={logo} className='logo' alt='logo' style={{'cursor':'pointer'}} onClick={() => window.location.href = '/'} />
        <img src={clouds} alt='logo' className='clouds' />
    </div>
  )
}

export default Navbar