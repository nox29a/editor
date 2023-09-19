import React from 'react';
import HeroImg from '../img/hero.png';
const Header = () => {
  return (
    <header className='backdrop-blur-sm fixed py-2 w-full z-10 border-b-2 border-purple-800'>
      <div className='lg:container mx-2 flex items-center justify-between h-full  '>
        <div className='cursor-pointer grid grid-cols-2 sm:flex sm:flex-row-reverse' >
          <a href='https://editorpl-nox.vercel.app/'>
          <img className='sm:flex grid-cols-2 w-[30px] h-[30px] rounded-full m-1 lg:m-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_Poland_%28normative%29.svg/360px-Flag_of_Poland_%28normative%29.svg.png" alt="hero"></img></a>
          <a href='https://editor-nox.vercel.app/'>
          <img className='sm:flex grid-cols-2 w-[30px] h-[30px] rounded-full m-1 lg:m-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/360px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" alt="hero"></img></a>
          <a href='#Hero'>
          <img className='sm:flex max-w-[50px] max-h-[50px]' src={HeroImg} alt="hero"></img></a>
        </div>
        <div className='grid grid-cols-2 text-base text-center md:flex md:flex-row lg:text-2xl md:justify-end'>

            <div className='m-2 p-2 border-2 border-purple-800 bg-black rounded-xl bg-opacity-60 cursor-pointer' >
            <a href='#Showreel'>Showreel</a></div>
            <div className='m-2 p-2 border-2 border-purple-800 bg-black rounded-xl bg-opacity-60 cursor-pointer' >
            <a href='#Videos'>Films</a></div>

            <div className='m-2 p-2 border-2 border-purple-800 bg-black rounded-xl bg-opacity-60 cursor-pointer' >
            <a href='#Photos'>Photos</a></div>
            <div className='m-2 p-2 border-2 border-purple-800 bg-black rounded-xl bg-opacity-60 cursor-pointer' >
            <a href='#Socials'>Contact</a></div>
          </div>    
      </div>
  </header>
  ); 
};

export default Header;
