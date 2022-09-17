import React from 'react'
import cat from '../images/cat.png'
import people from '../images/people.png';

function Footer() {
  return (
    <div className='footer'>
        <img src={cat} alt="cat" className='cat' />
        <img src={people} alt="people" className='people' />
    </div>
  )
}

export default Footer