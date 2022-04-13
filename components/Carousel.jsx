import React from 'react'
import Image from "next/image";
import { hash } from '../helpers';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Autoplay } from "swiper";
import CustomProductViewer from './CustomProductViewer';


const textImages = process.env.NEXT_PUBLIC_CAROUSEL_ARRAY_IMAGES ?? "";
const arrayImages = textImages.split(",");

function Carousel() {

  return (

    <section className='px-0 w-full max-w-[1440px] py-10 md:pt-[70px] md:pb-20 lg:pb-[140px] flex flex-col mx-auto'>

      <div className='flex w-full'>

        <Swiper 
                  
          loop={true}
          speed={1000}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={40}
          autoplay={
            {
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true
            }
          }
          breakpoints = {{

            320: {
              slidesPerView: "auto",
              spaceBetween: 8
            },
            480: {
              slidesPerView: "auto",
              spaceBetween: 40
            },
            560: {
              slidesPerView: "auto",
              spaceBetween: 40
            },
            1080:{
              slidesPerView: 3,
              spaceBetween: 40
            }


          }}
          modules={[EffectCoverflow,Autoplay]}
          className = "max-w-max w-full flex items-center"
        >

          {

            arrayImages.map((item) => {
              
              if(item.length > 0){

                if (!String.prototype.replaceAll) {
                  String.prototype.replaceAll = function(str, newStr){
                
                    // If a regex pattern
                    if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') {
                      return this.replace(str, newStr);
                    }
                
                    // If a string
                    return this.replace(new RegExp(str, 'g'), newStr);
                
                  };
                }

                const image = item.toString().trim().replaceAll("'","").replaceAll('"',"");

                return (
                  
                  <SwiperSlide className='flex !h-auto justify-center max-w-[343px] md:max-w-[400px]' key={hash(image)}>
                    {
                      (

                        <div className="relative w-[400px] h-[400px]" data-src={item}>
                          <Image
                            className="select-none object-cover h-full w-full object-center rounded-[32px]"
                            src={"/"+image}
                            alt={item}
                            layout={"fill"}
                          />
                        </div>

                        // <CustomProductViewer product={item}/>
                      )
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