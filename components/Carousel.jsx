import React from 'react'
import { hash } from '../helpers';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Autoplay } from "swiper";
import CustomProductViewer from './CustomProductViewer';



function Carousel({products}) {

  return (

    <section className='px-5 md:px-0 w-full max-w-[1440px] pt-[70px] pb-20 lg:pb-[130px] flex flex-col mx-auto'>

      <div className='flex w-full'>

        <Swiper 

          
          
          loop={true}
          speed={1000}
          spaceBetween={50}
          centeredSlides={true}
          slidesPerView={"auto"}
          autoplay={
            {
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true
            }
          }
          modules={[EffectCoverflow,Autoplay]}
          className = "max-w-max w-full flex items-center"
        >


        {

          products.map((item) => {

            if(Object.entries(item).length > 1){
              return (
                
                <SwiperSlide className=' flex !h-auto justify-center  max-w-full md:max-w-[50%] lg:max-w-[33%]' key={hash(item.id)}>
                  {
                    (<CustomProductViewer product={item}/>)
                  }
                </SwiperSlide>
                
              )
            }else{
              console.log(`The id ${item.id} doesn't exists or is wrong`);
            }

          })

        }
        
      </Swiper>
      </div>

    </section>

  )

}

export default Carousel