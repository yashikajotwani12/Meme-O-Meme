import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import rightpaw from '../images/rightpaw.png';
import leftpaw from '../images/leftpaw.png';

function MemePage() {
  return (
    <div>
        <Navbar />
        <div className='welcome_container'>
        <div className='welcome_wrapper'>
          <h4>Some of your Favorite Memes</h4>
          <img src="https://c.tenor.com/c1rbgR_YFkkAAAAC/baby-throw.gif" alt="" />
          <div className="button_wrapper">
            <img className='paw' alt='leftpaw' src={leftpaw}></img>
            <img  className='paw' alt='rightpaw' src={rightpaw}></img>
          </div>
        </div>
      </div>
        <Footer/>
    </div>
  )
}

export default MemePage