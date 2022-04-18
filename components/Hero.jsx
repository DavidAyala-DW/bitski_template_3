import {useEffect, useState} from "react";
import Image from "next/image";
import HeroGridDesktop from "../public/hero_grid.svg";
import HeroGridMobile from "../public/grid_footer.svg";


const title = process.env.NEXT_PUBLIC_HERO_TITLE ?? "";
const description = process.env.NEXT_PUBLIC_HERO_DESCRIPTION ?? "";
const imageDesktop = "/".concat(process.env.NEXT_PUBLIC_HERO_IMAGE_DESKTOP) ?? "";
const imageMobile = "/".concat(process.env.NEXT_PUBLIC_HERO_IMAGE_MOBILE) ?? "";
const logoFileName = "/".concat(process.env.NEXT_PUBLIC_NAVBAR_LOGO);

const cta_text = process.env.NEXT_PUBLIC_HERO_CTA_TEXT ?? "";
const cta_link = process.env.NEXT_PUBLIC_HERO_CTA_LINK ?? "/";

const Hero = () => {


  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [isLoadImage, setIsLoadImage] = useState(false);
  const [viewportDesktop, setViewPortDesktop] = useState(false);

  useEffect(() => {

    if(logoFileName != "/undefined"){
      
      const image = document.createElement("IMG");
      image.classList.add("w-full","h-full");
      image.src = logoFileName;
      image.onload = () => {
        setHeight(image.height);
        setWidth(image.width);
        setIsLoadImage(true);
      }
      
    }

    if(typeof window !== "undefined"){
      if(window.innerWidth > 768){
        setViewPortDesktop(true);
      }else{
        setViewPortDesktop(false);
      }
    }

  }, []);

  useEffect(() => {

    if(typeof window !== "undefined"){

      function handleResize(){

        if(window.innerWidth > 768){
          setViewPortDesktop(true);
        }else{
          setViewPortDesktop(false);
        }

      }

      window.addEventListener("resize",handleResize);

      return window.removeEventListener("resize",handleResize,true);

    }

  }, []);

  return (
    <>

      <section className="md:h-[520px] w-full mx-auto flex flex-col justify-center items-center  px-5 md:px-20 relative pb-20">

        <div className="absolute inset-0 w-full h-full max-h-full">
    
          <div className="relative w-full h-full max-h-full">

          <div className="absolute top-0 right-0 w-max h-max ml-auto md:ml-auto transition md:translate-y-[-15px]">  

            {

              !viewportDesktop && (
                <HeroGridMobile className="stroke-primary w-full !h-max opacity-20" />
              )
              
            }

            {
              
              viewportDesktop && (
                <HeroGridDesktop className="stroke-primary w-full !h-max opacity-30" />
                // <FooterGrid className="stroke-primary w-full !h-max opacity-30" />
              )

            }

            

          </div>

          </div>

        </div>

        <div className="md:absolute inset-0 w-full h-full items-center flex flex-col justify-start pt-16 lg:pt-[120px] z-20">
          {
            isLoadImage && (
              
              <div className="mb-10 max-w-[150px] w-full flex justify-center">

                <Image
                  src={logoFileName}
                  priority={true}
                  alt={logoFileName.replace("/","")}
                  width={width}
                  height={height}
                />  

              </div>

            )
          }
            <h1 className="max-w-[673px] font-extrabold px-1 md:px-0 w-full text-5xl md:text-[51px] text-center mb-7">
              {title}
            </h1>

            <p className="max-w-[647px] w-full text-center text-xl leading-9 ">
              {description}
            </p>

        </div>

      </section>

    </>
  );
};

export default Hero;
