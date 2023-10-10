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
    <div class="aspect-w-9 aspect-h-16">


                <iframe
                  src="https://www.tiktok.com/embed/7281714592705711392"
                  class="w-auto h-[500px] border-2 border-purple-900 rounded-xl "
                  allowfullscreen
                  scrolling="no"
                  allow="encrypted-media;"
                ></iframe>
              </div>

           {/* video */}
    <div class="aspect-w-9 aspect-h-16">


                <iframe
                  src="https://www.tiktok.com/embed/7280981665730563361"
                  class="w-auto h-[500px] border-2 border-purple-900 rounded-xl "
                  allowfullscreen
                  scrolling="no"
                  allow="encrypted-media;"
                ></iframe>
              </div>

       {/* video */}
    <div class="aspect-w-9 aspect-h-16">


                <iframe
                  src="https://www.tiktok.com/embed/7281327565145378081"
                  class="w-auto h-[500px] border-2 border-purple-900 rounded-xl "
                  allowfullscreen
                  scrolling="no"
                  allow="encrypted-media;"
                ></iframe>
              </div>

       {/* video */}
       <div class="aspect-w-9 aspect-h-16">


<iframe
  src="https://www.youtube.com/embed/4sn6F_GE96E"
  class="w-auto h-[500px] border-2 border-purple-900 rounded-xl "
  allowfullscreen
  scrolling="no"
  allow="encrypted-media;"
></iframe>
</div>


       {/* video */}
       <div class="aspect-w-9 aspect-h-16">


<iframe
  src="https://www.tiktok.com/embed/7164517650444340486"
  class="w-auto h-[500px] border-2 border-purple-900 rounded-xl "
  allowfullscreen
  scrolling="no"
  allow="encrypted-media;"
></iframe>
</div>

       {/* video */}
       <div class="aspect-w-9 aspect-h-16">


<iframe
  src="https://www.tiktok.com/embed/7258946886311120154"
  class="w-auto h-[500px] border-2 border-purple-900 rounded-xl "
  allowfullscreen
  scrolling="no"
  allow="encrypted-media;"
></iframe>
</div>

       {/* video */}
       <div class="aspect-w-9 aspect-h-16">


<iframe
  src="https://www.tiktok.com/embed/7215121159401131291"
  class="w-auto h-[500px] border-2 border-purple-900 rounded-xl "
  allowfullscreen
  scrolling="no"
  allow="encrypted-media;"
></iframe>
</div>

       {/* video */}
       <div class="aspect-w-9 aspect-h-16">


<iframe
  src="https://www.tiktok.com/embed/7279082299675659552"
  class="w-auto h-[500px] border-2 border-purple-900 rounded-xl "
  allowfullscreen
  scrolling="no"
  allow="encrypted-media;"
></iframe>
</div>
        <div></div>

    {/*dłuższe filmy*/}
    
    <div class="">
  <iframe class="h-[225px] w-[400px]" src="https://player.vimeo.com/video/404296988?h=ea51e71a26" frameborder="0"></iframe>
</div>
    <div class="">
  <iframe class="h-[225px] w-[400px]" src="https://player.vimeo.com/video/401111307?h=eef72a0cc6" frameborder="0"></iframe>
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
