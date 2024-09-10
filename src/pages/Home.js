import React from 'react';
import About from '../components/About';
import Showreel from '../components/Showreel';
import Social from '../components/Social';
import Photos from '../components/Photos';
import Hero from '../components/Hero';
import Videos from '../components/Videos';

const Home = () => {
  return <div className='overflow-hidden'>
    <Showreel />
    <Videos />
    <Social />
  </div>;
};

export default Home;
