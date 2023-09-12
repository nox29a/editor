import React from 'react';
import HeroImg from '../img/hero.png';
const Hero = () => {
  return (
<div id="Hero" className='grid h-screen place-items-center bg-black'>
  <div className='container mx-auto flex flex-col justify-center'>
    <div className='absolute font-semibold flex items-center uppercase'>
      <h1 className='text-[50px] sm:text-[70px] leading-[1.1] font-light'> 
      <span data-aos="zoom-out-down" z-2 font-semibold animate-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,#4c54e0,45%,#f991ff,55%,#4c54e0)] bg-[length:250%_100%]'>
      Łukasz Adamczyk<br />
      </span> 
      <span data-aos="zoom-out-right" className='z-2 text-[20px] sm:text-[40px] font-semibold animate-shimmer2 bg-clip-text text-transparent bg-[linear-gradient(110deg,#f991ff,45%,#e2e8f0,55%,#f991ff)] bg-[length:250%_100%]'>Video editor<br /></span>
     <span data-aos="zoom-in-left" className='z-2 text-[20px] sm:text-[40px] font-semibold animate-shimmer5 bg-clip-text text-transparent bg-[linear-gradient(110deg,#e2e8f0,45%,#1e293b,55%,#e2e8f0)] bg-[length:250%_100%]'>
      Open to work
      </span></h1>
    </div>
      <div className='z-1 animate-in md:flex-rows flex justify-end    mt-96 lg:mt-20'>
        <img className=' flex max-w-[400px] max-h-[400px] align-bottom' src={HeroImg} alt="hero"></img>
      </div>
  </div>
</div>
    );
};

export default Hero;
