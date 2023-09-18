import React from 'react';
import Github from '../img/25231.png';
import Vercel from '../img/25331.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Portfolio = () => {
  return (
<div id="Showreel" class="bg-black pt-32 ">
<h1 data-aos="flip-down" className='text-[70px] sm:text-[90px] text-center p-8 gap-4 mb-10'>Showreel</h1>
  <div class="flex justify-around h-[600px] w-auto">

    <div class="aspect-w-9 aspect-h-16">
      <iframe
        src="https://www.youtube.com/embed/vUntmZyyVAI"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="true"
        class="w-auto h-[500px] border-2 border-purple-900 rounded-xl "
      ></iframe>
    </div>
  <div className='align-middle mt-32'>
   
    <h2 className='text-[40px] flex justify-center'>2023</h2>
  </div>
  </div>

</div>
  )
};

export default Portfolio;
