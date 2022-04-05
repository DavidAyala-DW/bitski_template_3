import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from "swiper";
import { hash } from '../helpers';
import CustomProductViewer from "./CustomProductViewer";
import 'swiper/css';


function Carousel({products}) {

  return (

    <section className='px-5 md:px-0 w-screen max-w-[1440px] pt-[70px] pb-20 lg:pb-[130px] mx-auto'>

      <Swiper
        spaceBetween={50}
        loop={true}
        speed={1000}
      >

        {

          products.map((item) => {

            if(Object.entries(item).length > 1){
              return (
                
                <SwiperSlide className='max-w-[100%] md:max-w-[50%] lg:max-w-[33%]' key={hash(item.id)}>
                  <CustomProductViewer product={item}/>
                </SwiperSlide>
                
              )
            }else{
              console.log(`The id ${item.id} doesn't exists or is wrong`);
            }

          })

        }
        
      </Swiper>

    </section>

  )

}

export default Carousel