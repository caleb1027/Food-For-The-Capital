import React, { useState } from 'react';
import Home from './components/home.js';
import NavBar from './components/navbar.js';
import About from './components/about.js'

function App() {
  const [isEnglish, setIsEnglish] = useState(true);

  let changeLang = () => {
    setIsEnglish(!isEnglish)
  }
  return (
    <div className="App bg-white">
      <NavBar isEnglish={isEnglish} changeLang={changeLang}/>
      <Home isEnglish={isEnglish}/> 
      <About />
    </div>
  );
}

export default App;
