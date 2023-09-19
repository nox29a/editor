import React from 'react';
import Portret from '../img/portret.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const About = () => {
  return (
  <div id="About" className=' pt-40 bg-black'>
    <div className='grid place-items-center'>
      <div className='container mx-auto'>
        <h1 data-aos="flip-down" className='text-[90px] text-center p-8 gap-4'>About</h1>
            <div className='text-lg grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 p-8 gap-20'>
              <p data-aos="fade-right" className='bg-hero border-2 border-purple-700 text-xl rounded-lg p-8 '><img src={Portret} alt='portret' className='w-fit' /></p>
              <p data-aos="fade-right" className='bg-hero border-2 border-purple-700 text-xl rounded-lg p-8 text-center'>I'm a passionate and experienced video editor on the lookout for exciting new opportunities to bring your ideas to life. With a keen eye for detail, creativity, and technical expertise, I have the skills to transform raw footage into compelling visual stories.</p>
              <p data-aos="fade-left" className='justify-end bg-hero border-2 border-purple-700 text-xl text-center  rounded-lg p-8 '>My editing style is driven by creativity and a deep understanding of storytelling. Whether it's a promotional video, a documentary, or a social media clip, I can tailor my skills to your project's unique needs.

</p>
            </div>
      </div>
    </div>
  </div>
  )
};

export default About;
