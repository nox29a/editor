import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const AllVideos = () => {
  return (
<div id="Showreel" class="bg-black pt-32 ">
<h1 data-aos="flip-down" className='text-[40px] md:text-[70px] sm:text-[90px] text-center p-8 gap-4'>All videos</h1>
  <div class="grid gap-10 grid-cols-1 lg:grid-cols-3 p-10 lg:p-20">
{/* video */}


           {/* video */}

       <div class="aspect-w-9 aspect-h-16">


<iframe
  src="https://drive.google.com/file/d/1p8LpgulWsKR1M_tmyEKhMjYKAe4YlW23/preview"
  class="w-auto h-[500px] border-2 border-purple-900 rounded-xl "
  allowfullscreen
  scrolling="no"
  allow="encrypted-media;"
></iframe>
</div>
        <div></div>
       {/* video */}


       {/* video */}
       <div class="aspect-w-9 aspect-h-16">


<iframe
  src="https://drive.google.com/file/d/1yCdtDNaRAYDlhaxNnnXcwO5W71kZ2ioE/preview"
  class="w-auto h-[500px] border-2 border-purple-900 rounded-xl "
  allowfullscreen
  scrolling="no"
  allow="encrypted-media;"
></iframe>
</div>
        <div></div>


       {/* video */}


       {/* video */}
       <div class="aspect-w-9 aspect-h-16">


<iframe
  src="https://drive.google.com/file/d/1ajkIdYuTTATtM_tMF5jaPJ4qJkrxwUMx/preview"
  class="w-auto h-[500px] border-2 border-purple-900 rounded-xl "
  allowfullscreen
  scrolling="no"
  allow="encrypted-media;"
></iframe>
</div>
        <div></div>

       {/* video */}


       {/* video */}
       <div class="aspect-w-9 aspect-h-16">


<iframe
  src="https://drive.google.com/file/d/1ibr6_JlycYAKHSr70qSTAdU4yIO7mygF/preview"
  class="w-auto h-[500px] border-2 border-purple-900 rounded-xl "
  allowfullscreen
  scrolling="no"
  allow="encrypted-media;"
></iframe>
</div>
        <div></div>

    {/*dłuższe filmy*/}
    
    <div class="">
  <iframe class="h-[225px] w-[400px]" src="https://drive.google.com/file/d/1FLVpAyr-ot-yL1DmugOUC7DLvRM_UKi0/preview" frameborder="0"></iframe>
</div>
    <div class="">
  <iframe class="h-[225px] w-[400px]" src="https://drive.google.com/file/d/195TOzePT58IyYle6k6TUUWXuNGYwyTXr/preview" frameborder="0"></iframe>
</div>
    <div class="">
  <iframe class="h-[225px] w-[400px]" src="https://www.youtube.com/embed/H20IUSS71K0?si=fHDInuVnhPuW0Byw" frameborder="0"></iframe>
</div>
    <div class="">
  <iframe class="h-[225px] w-[400px]" src="https://www.youtube.com/embed/VRwi4sArrs4?si=uNFmd_Ge_E1H8Dqt" frameborder="0"></iframe>
</div>
    

  </div>

</div>
  )
};

export default AllVideos;
