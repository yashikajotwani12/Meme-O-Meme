import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import rightpaw from '../images/rightpaw.png';
import leftpaw from '../images/leftpaw.png';

const memes = [
  "https://i.redd.it/g1om2rjjxou11.jpg",
  "https://cdn.memes.com/up/73431931627003468/i/1627048124229.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Jokes-GitHub-Code-824x1024.jpg?x34900",
  "https://graphcms2fym.imgix.net/OeftQLSMQsARBgXFJOOk?auto=compress,format&fit=fillmax&ch=Save-Data&w=1200&max-h=1200",
  "https://graphcms2fym.imgix.net/yfuf6S9qRHmejmDz2Nlc?auto=compress,format&fit=fillmax&ch=Save-Data&w=1200&max-h=1200",
  "https://i2.wp.com/i.pinimg.com/originals/f4/3c/d0/f43cd052ba25e1ffbc96895444908259.jpg",
  "https://s3.amazonaws.com/resources.mangahigh.com/blog/20-teacher-memes/meme+2+new.jpg",
  "https://media.wired.co.uk/photos/606d9e536ab54fce4fbb1e51/master/w_1600%2Cc_limit/distractedboyfriend.jpg",
  "https://img2.thejournal.ie/inline/723966/original/?width=333&version=723966",
  "https://www.researchgate.net/publication/341738736/figure/fig8/AS:896575735861249@1590771721991/A-meme-from-the-Student-Problems-Facebook-page.png"
]

function MemePage() {
  const [name, setName] = useState("bro")
  const [index, setIndex] = useState(1);
  function getRandomArbitrary() {
    let min = 0, max = memes.length-1;
    min = Math.ceil(min);
    max = Math.floor(max);
    let newIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    setIndex(newIndex);
    console.log(newIndex);
  }
  useEffect(()=>{
    if(localStorage.getItem('name')) {
      setName(localStorage.getItem('name'))
    }
  },[])
  return (
    <div>
      <Navbar />
      <div className='welcome_container'>
        <div className='welcome_wrapper' style={{ 'display': 'flex', flexDirection: 'column', alignItems: 'center' }} >
          <h4 style={{ 'marginBottom': '10px' }}>Chill, have some memes, {name}!!!</h4>
          <div style={{'width':'300px', height: '300px'}}>
            <img src={memes[index]} style={{ 'width': '100%', height:'100%' }} alt="" />
          </div>
          <div className=""  onClick={()=>{getRandomArbitrary()}} style={{cursor: 'pointer', display: 'flex', alignItems:'center', marginTop:'10px', color: '#FFD369'}} >
            <h3>Click Me, please!!!</h3>
            <img className='paw' alt='rightpaw' src={rightpaw} ></img>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MemePage