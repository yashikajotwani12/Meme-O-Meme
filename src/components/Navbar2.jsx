import React from 'react'

import lightning from '../images/lightning.png';
import logo from '../images/logo.png';
import '../style/navbar.css'
function Navbar2() {
    return (
        <div className='navbar'>
            <img src={lightning} className='lightning' />
            <img src={logo} className='logo' />
            <img src={lightning} className='lightning2' />
        </div>
    )
}

export default Navbar2