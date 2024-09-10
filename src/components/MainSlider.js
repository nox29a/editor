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
      className="mainSlider h-full rounded-sm"
      modules={[Autoplay, Pagination]} // Ensure both Autoplay and Pagination are added
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }} // Add pagination for better interaction
    >
      {sliderData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-[400px] w-full flex justify-center items-center">
            {/* Updated styling to use relative positioning */}
            <div className="absolute font-semibold flex text-[32px] text-center uppercase z-20 text-primary border-2 rounded-full bg-black border-purple-800 p-2">
              {slide.title}
            </div>
            <img
              className="w-full h-full object-cover rounded-full" // Ensure images cover the container properly
              src={slide.img}
              alt="promoimages"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};


export default MainSlider;
