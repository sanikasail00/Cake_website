// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import FeaturedCake from './components/FeaturedCake';
import CakeGallery from './components/CakeGallery';
import Contact from './components/Contact';
import './styles/App.css';
import './styles/Navbar.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <FeaturedCake />
      <CakeGallery />
      <Contact />
    </div>
  );
}

export default App;
