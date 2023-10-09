import React, { useState } from 'react';
import Home from './components/home.js';
import NavBar from './components/navbar.js';
import About from './components/about.js'
import GetInvolved from './components/getInvolved.js';

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
      <GetInvolved />
    </div>
  );
}

export default App;
