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
  <script src="https://cdn.jsdelivr.net/npm/mailtoui@1.0.3/dist/mailtoui-min.js"></script>


  return (
    <div className='w-full bg-neutral-50 m-0 p-0'>
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
