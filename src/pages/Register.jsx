import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Navbar2 from '../components/Navbar2'
import '../firebase.js'

function RegisterPage() {
  const [name, setName] = useState("bro");
  const [job, setJob] = useState("");
  const [interest, setInterest] = useState([
    "Music", "Work", "Job", "Dance", "Satire"
  ])
  function register() {
    localStorage.setItem('name', name);
  }
  return (
    <div>
      <Navbar />
      <div className='welcome_container'>
        <div className='form welcome_wrapper'>
          <div className="input_wrapper">
            <h4>What should we call you, han?</h4>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className="input_wrapper">
            <h4>What you do for living?</h4>
            <input type="text" value={job} onChange={(e)=>setJob(e.target.value)}/>
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
          <Link className='primary_button' to='/memes' onClick={()=>register()}>I am fan of memes, register me please!</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default RegisterPage