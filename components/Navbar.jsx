import {useEffect, useState} from 'react'
import Image from "next/image";
import Link from "next/link";
const logoFileName = '/undefined';


const Navbar = () => {

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

    <nav className="absolute top-0 z-10 bg-transparent w-full h-[76px] flex flex-col justify-center items-center">

      <div className="max-w-[1440px] w-full px-5 md:px-20 flex items-center md:justify-end">

        <div className="max-w-[700px] w-full flex items-center justify-end">

          <a 
            href={process.env.NEXT_PUBLIC_NAVBAR_WALLET_TEXT} 
            className="px-6 bg-primary py-2.5 text-center uppercase text-secondary buttonShape text-[11px] font-medium"
          >
            {process.env.NEXT_PUBLIC_NAVBAR_WALLET_TEXT}
          </a>

        </div>

      </div>

    </nav>

  );

};

export default Navbar;
