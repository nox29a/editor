import React from 'react';
import HeroImg from '../img/hero.png';
const Hero = () => {
  return (
<div id="Hero" className='grid h-screen place-items-center bg-hero'>
  <div className='container mx-auto flex flex-col justify-center'>
    <div className='absolute font-semibold flex items-center uppercase'>
      <h1 className='text-[70px] leading-[1.1] font-light'> 
      <span className='font-semibold'>
      Adamczyk Łukasz<br />
      </span> 
      <span className='text-[60px] text-purple-700'>Frontend Developer<br /></span>
      <span className='text-[50px] '>
      Open to work
      </span></h1>
    </div>
      <div className='hidden animate-in md:flex-rows lg:flex justify-end'>
        <img className='max-w-[400px] max-h-[400px]' src={HeroImg} alt="hero"></img>
      </div>
  </div>
</div>
    );
};

export default Hero;
