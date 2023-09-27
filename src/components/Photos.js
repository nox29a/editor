import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PromoPhoto1 from '../img/promo5.jpg';
import PromoPhoto2 from '../img/promo4.jpg';
import PromoPhoto3 from '../img/promo6.jpg';
import PromoPhoto4 from '../img/promo7.jpg';
AOS.init();
const Photos = () => {
      return (
<div id='Photos' className='grid place-items-center pt-32 bg-black'>
<h1 data-aos="flip-down" className='text-[70px] sm:text-[90px] text-center p-8 gap-4'>Photos</h1>
<div class="relative flex min-h-[450px] items-center justify-center overflow-hidden ">
  <div class="max-w-2xl px-24">
    <div class="relative h-52 w-[20rem] lg:h-80 lg:w-[32rem] shadow-xl shadow-black/60">
      <div class="top-left absolute -top-6 -left-10 h-12 w-20 -rotate-45 bg-purple-900"></div>
      
      <div class="top-right absolute -top-6 -right-10 h-12 w-20 rotate-45 bg-blue-900"></div>
      <div class="bottom-right absolute -bottom-6 -right-10 h-12 w-20 -rotate-45 bg-purple-900"></div>
      <div class="bottom-left absolute -bottom-6 -left-10 h-12 w-20 rotate-45 bg-blue-900"></div>
      <img class="h-full w-full object-cover" src={PromoPhoto2} alt="" />
    </div>
  </div>
</div>
<div class="relative lg:flex  min-h-[450px] items-center justify-center overflow-hidden">

<div class="relative  flex min-h-[450px] items-center justify-center overflow-hidden ">


  <div class="max-w-2xl px-24">
    <div class="relative h-52 w-[20rem] lg:h-80 lg:w-[32rem] shadow-xl shadow-black/60">
      <div class="top-left absolute -top-6 -left-10 h-12 w-20 -rotate-45 bg-purple-900"></div>
      
      <div class="top-right absolute -top-6 -right-10 h-12 w-20 rotate-45 bg-blue-900"></div>
      <div class="bottom-right absolute -bottom-6 -right-10 h-12 w-20 -rotate-45 bg-purple-900"></div>
      <div class="bottom-left absolute -bottom-6 -left-10 h-12 w-20 rotate-45 bg-blue-900"></div>
      <img class="h-full w-full object-cover" src={PromoPhoto1} alt="" />
    </div>
  </div>
</div>

  <div class="max-w-2xl px-24 mb-16 lg:mb-0">
    <div class="relative h-80 w-[14rem] shadow-xl shadow-black/60">
      <div class="top-left absolute -top-6 -left-10 h-12 w-20 -rotate-45 bg-purple-900"></div>
      
      <div class="top-right absolute -top-6 -right-10 h-12 w-20 rotate-45 bg-blue-900"></div>
      <div class="bottom-right absolute -bottom-6 -right-10 h-12 w-20 -rotate-45 bg-purple-900"></div>
      <div class="bottom-left absolute -bottom-6 -left-10 h-12 w-20 rotate-45 bg-blue-900"></div>
      <img class="h-full w-full object-cover" src={PromoPhoto4} alt="" />
    </div>
  </div>
</div>
<div class="relative flex min-h-[450px] items-center justify-center overflow-hidden ">
  <div class="max-w-2xl px-24">
    <div class="relative h-52 w-[20rem] lg:h-80 lg:w-[32rem] shadow-xl shadow-black/60">
      <div class="top-left absolute -top-6 -left-10 h-12 w-20 -rotate-45 bg-purple-900"></div>
      
      <div class="top-right absolute -top-6 -right-10 h-12 w-20 rotate-45 bg-blue-900"></div>
      <div class="bottom-right absolute -bottom-6 -right-10 h-12 w-20 -rotate-45 bg-purple-900"></div>
      <div class="bottom-left absolute -bottom-6 -left-10 h-12 w-20 rotate-45 bg-blue-900"></div>
      <img class="h-full w-full object-cover" src={PromoPhoto3} alt="" />
    </div>
  </div>
</div>
</div>
      )
};

export default Photos;
