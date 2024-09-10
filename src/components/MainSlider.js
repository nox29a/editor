import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import sliderimg from '../img/hero3.jpg'
import sliderimg2 from '../img/hero2.jpg'
import sliderimg3 from '../img/hero1.jpg'
import sliderimg4 from '../img/hero.png';

const sliderData = [
  {
    img: sliderimg,
    title: "Reels Edit",
  },
  {
    img: sliderimg2,
    title: "Promotional Videos",
  },
  {
    img: sliderimg3,
    title: "Subtitles",
    },
    {
      img: sliderimg4,
      title: "Logos and Avatars",
        },
]

const MainSlider = () => {

  return (
  <Swiper
      className='mainSlider h-full bg-primary md:bg-mainSlider rounded-sm'
      modules={[Autoplay, Pagination]}
      loop={true}
      autoplay={{
          delay: 5000,
          disableOnInteraction: false
      }}
      pagination={{ clickable: true }}

    >
  
    <>
      {sliderData.map((slide, index) => {
      return <SwiperSlide key={index}>
          <div className='flex flex-col h-full justify-center'>
            <div className='text-[40px] uppercase font-medium pl-10'>
              {slide.pretitle} <br/>
            </div>
            <div className='text-[13px] uppercase font-medium my-4 pl-10'>
              {slide.title1} <br/>
              {slide.title2} 
            </div>
         </div>
          <div className='flex justify-center h-[350px]'>
            <img className='h-[400px] absolute z-20 top-4 right-10' src={slide.img} alt=''></img>
          </div>
          <div className='flex btn btn-accent z-30 w-40 absolute bottom-10 left-10'>
          <a href={slide.move}><button>{slide.btnText}</button></a>
          </div>
      </SwiperSlide>
      })}
    </>
  </Swiper>
  );
};


export default MainSlider;
