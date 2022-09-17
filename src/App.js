import './App.css';
import MemePage from './pages/MemePage';
import HomePage from './pages/HomePage';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route exact path='/' element={<HomePage/>} />
    <Route path='/memes' element={<MemePage/>} />
    </Routes>
    
    </div>
  );
}

export default App;
