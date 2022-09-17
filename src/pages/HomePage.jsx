import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../style/page.css'
import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className='welcome_container'>
        <div className='welcome_wrapper'>
          <h4>Welcome to Meme-O-Meme</h4>
          <img src="https://c.tenor.com/cg0h-BiFJ5gAAAAM/star-wars-baby-yoda.gif" alt="" />
          <div className="button_wrapper">
            <Link className='primary_button' to='/register'>Register Me</Link>
            <Link className='primary_button' to='/memes'>I want memes!!!</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage