import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // component for navbar .. home about project contact (sticky)
  // component for about me
  // tech stack with tech logos
  // component for each portfolio peace with link to live demo


  return (
    <div className=''>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
