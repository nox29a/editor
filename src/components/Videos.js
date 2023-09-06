import React from 'react';

import Promo1 from '../img/promo1.jpg';
import Promo2 from '../img/promo2.jpg';
import Promo3 from '../img/promo3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Videos = () => {
  return (
    <div id="Videos" className=' pt-32 bg-black'>
    <div className='grid place-items-center'>
      <div className='container mx-auto'>
    <h1 data-aos="flip-down" className='text-[70px] sm:text-[90px] text-center p-8 gap-4'>Videos</h1>
    <div className='text-lg grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 p-8 gap-20'>
    {/* FIRST CARD */}
  <div  data-aos="flip-left" class="group w-72 sm:w-96 h-[500px] [perspective:1000px]">
    <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div class="absolute inset-0">
        <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={Promo1} alt="" />
      </div>
      <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div class="flex min-h-full flex-col items-center justify-center">

          <p class="text-2xl m-2">Complex edits 📹</p>
          <p class="text-base m-2">Elevate your social media game with eye-catching video edits. Grab attention, tell stories, and leave a lasting impression.</p>
          <button class="border p-1 m-2 rounded-xl">Watch</button>
   
        </div>
      </div>
      </div></div>
    {/* SECOND CARD */}
    <div  data-aos="flip-left" class="group w-72 sm:w-96 h-[500px] [perspective:1000px]">
    <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div class="absolute inset-0">
        <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={Promo3} alt="" />
      </div>
      <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div class="flex min-h-full flex-col items-center justify-center">

        <p class="text-2xl m-2">Funny videos 🤣</p>
          <p class="text-base m-2">Spice up your social feed with hilarious video edits! Laughter is contagious, and your content will spread joy like wildfire.</p>
          <button class="border p-1 m-2 rounded-xl">Watch</button>
   
        </div>
      </div>

      
      </div></div> 
    {/* THIRD CARD */}
    <div  data-aos="flip-left" class="group w-72 sm:w-96 h-[500px] [perspective:1000px]">
    <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div class="absolute inset-0">
        <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={Promo2} alt="" />
      </div>
      <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div class="flex min-h-full flex-col items-center justify-center">

          <p class="text-2xl m-2">Growing audience 📈</p>
          <p class="text-base m-2">Unlock the power of video edits to captivate your audience. Engage, educate, and watch your online community flourish.</p>
          <button class="border p-1 m-2 rounded-xl">Watch</button>
        </div>
      </div>
      </div></div> 
      </div>
    </div>
  </div>
  </div>

  )
};

export default Videos;
