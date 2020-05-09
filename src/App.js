import React from 'react';
import './App.css';

import Home from './components/Home'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import FontLoader from './components/FontLoader'

function App() {
  
  return (
    <div className="App" >
      <FontLoader />
      <Navbar />
      <Home />
      <Portfolio />
    </div>
  );
}

export default App;
