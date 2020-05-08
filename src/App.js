import React from 'react';
import './App.css';

import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import ParticleBackground from './components/ParticleBackground';
import FontLoader from './components/FontLoader'

function App() {
  
  return (
    <div className="App" >
      <FontLoader />
      <ParticleBackground />
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
