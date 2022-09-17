import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Navbar2 from '../components/Navbar2'
import '../firebase.js'

function RegisterPage() {
  const [interest, setInterest] = useState([
    "Music", "Work", "Job", "Dance", "Satire"
  ])
  return (
    <div>
      <Navbar />
      <div className='welcome_container'>
        <div className='form'>
          <div className="input_wrapper">
            <h4>What should we call you, han?</h4>
            <input type="text" />
          </div>
          <div className="input_wrapper">
            <h4>What you do for living?</h4>
            <input type="text" />
          </div>
          <div className="input_wrapper">
            <h4>What is your interest?</h4>
            <div className='checkbox_wrapper'>
              {
                interest.map((item) => (
                  <label for={item} className="checkbox_label">
                    <h3>{item}</h3>
                    <input id={item} className="checkbox" type="checkbox" value={item} />
                  </label>
                ))
              }
            </div>
          </div>
          <button className='primary_button'>I am fan of memes, register me please!</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default RegisterPage