import './App.css';
import logo from './logo.png';
import lightning from './lightning.png';
import clouds from './clouds.png';
import cat from './cat.png';
import people from './people.png';
import hello from './hi-hello-there.gif';

function App() {
  return (
    <div className="App">
      <div className='Home'>
      <img className='lightning_logo' alt='LIGHTNING' src={lightning}/>
      <img alt='LOGO' src={logo}/>
      <img className='clouds_logo' alt='CLOUDS' src={clouds}/>
      </div>
      <div className='Introduction'>
      <p className='Intro'>
      <img className='hello' alt='HELLO' src={hello}/></p>
      </div>
      <div className='Footer'>
      <img className='cat_logo' alt='cat' src={cat}></img>
      <img className='people_logo' alt='people' src={people}></img>
      </div>
    </div>
  );
}

export default App;
