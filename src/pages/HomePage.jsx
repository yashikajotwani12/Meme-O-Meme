import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../style/page.css'

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className='welcome_container'>
        <div className='welcome_wrapper'>
          <h4>Welcome to Meme-O-Meme</h4>
          <img src="https://c.tenor.com/cg0h-BiFJ5gAAAAM/star-wars-baby-yoda.gif" alt="" />
          <div className="button_wrapper">
            <button className='primary_button'>Register Me</button>
            <button className='primary_button'>I want memes!!!</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage