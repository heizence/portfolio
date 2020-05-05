import React from 'react';
import './App.css';

import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Navbar from './components/Navbar'
import Project from './components/Project'
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
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
