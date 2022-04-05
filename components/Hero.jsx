import {useEffect, useState} from "react";
import Image from "next/image";
import HeroGrid from "../public/hero_grid.svg";


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

  }, []);

  return (
    <>

      <section className="md:h-[520px] w-full mx-auto flex flex-col justify-center items-center max-w-[2500px] px-5 md:px-20 relative pb-20">

        <div className="absolute inset-0 w-full h-full max-h-full">
    
          <div className="relative w-full h-full max-h-full">

          <div className="absolute top-0 right-0 w-max h-max ml-auto">  

            <HeroGrid className="stroke-primary w-full h-max opacity-30" />

          </div>

          </div>

        </div>

        <div className="md:absolute inset-0 w-full h-full items-center flex flex-col justify-start pt-[102px] z-20">
          {
            isLoadImage && (
              
              <div className="mb-10 w-full flex justify-center">

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
            <h1 className="max-w-[673px] px-1 md:px-0 w-full text-5xl md:text-[51px] text-center mb-7">
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
