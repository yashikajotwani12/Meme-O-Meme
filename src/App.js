import './App.css';
import MemePage from './pages/MemePage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/Register';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/Meme-O-Meme' element={<HomePage />} />
        <Route exact path='/Meme-O-Meme/memes' element={<MemePage />} />
        <Route exact  path='/Meme-O-Meme/register' element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
