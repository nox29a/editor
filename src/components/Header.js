import React from 'react';
import HeroImg from '../img/hero.png';
const Header = () => {
  return (
    <header className=' bg-herohead backdrop-blur-sm py-6 fixed w-full z-10 border-b-4 border-purple-800'>
      <div className='container mx-0 flex items-center justify-between h-full  '>
        <div className='cursor-pointer flex' >
          <a href='#Hero'>
          <img className='sm:flex max-w-[50px] max-h-[50px]' src={HeroImg} alt="hero"></img></a>
          <a href='https://editorpl-nox.vercel.app/'>
          <img className='sm:flex w-[40px] h-[40px] rounded-full m-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_Poland_%28normative%29.svg/360px-Flag_of_Poland_%28normative%29.svg.png" alt="hero"></img></a>
          <a href='https://editor-nox.vercel.app/'>
          <img className='sm:flex w-[40px] h-[40px] rounded-full m-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/360px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" alt="hero"></img></a>
        </div>
        <div className='grid grid-cols-2 text-lg text-center sm:flex sm:flex-row sm:text-2xl sm:justify-end'>
            <div className='m-2  p-2 border-2 border-purple-800 bg-black rounded-xl bg-opacity-60 cursor-pointer' >
            <a href='#About'>About</a></div>
            <div className='m-2 p-2 border-2 border-purple-800 bg-black rounded-xl bg-opacity-60 cursor-pointer' >
            <a href='#Videos'>Videos</a></div>

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
