import React from 'react';
import About from '../components/About';
import Showreel from '../components/Showreel';
import Social from '../components/Social';
import Photos from '../components/Photos';
import Hero from '../components/Hero';
import AllVideos from '../components/AllVideos';

const Home = () => {
  return <div className='overflow-hidden'>
    <Showreel />
    <AllVideos />
    <Social />
  </div>;
};

export default Home;
