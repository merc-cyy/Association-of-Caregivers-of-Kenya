// src/index.js or src/App.js
//For the slideshow
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react'
import './App.css';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUS/About';
import MiniHeader from './components/Header/MiniHeader';
import Resources from './components/Resources/Resources';
import GetInvolved from './components/GetInvolved/GetInvolved';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <MiniHeader />   
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/GetInvolved" element={<GetInvolved />} />
      </Routes>
    </div>

    </Router>
  );
}

export default App;
