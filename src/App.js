import React from 'react';
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Social from './components/Social';
import Photos from './components/Photos';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Videos from './components/Videos';

const App = () => {
  return <div className='overflow-hidden'>
    <Header />
    <Hero />
    <About />
    <Portfolio />
    <Videos />
  
    <Photos />
    <Social />
    <Footer />
  </div>;
};

export default App;
