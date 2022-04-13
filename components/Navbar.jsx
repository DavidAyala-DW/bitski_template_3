import {useEffect, useState} from 'react'
import Image from "next/image";
import Link from "next/link";
import MenuHamburger from "../public/menu.svg";
import CloseMenu from "../public/close.svg";


const logoFileName = "/".concat(process.env.NEXT_PUBLIC_NAVBAR_LOGO);

const Navbar = () => {

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [isLoadImage, setIsLoadImage] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  function handleOpenCloseMenu(){
    setMenuOpen(!menuOpen);
  }

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

      <nav className="absolute z-40 md:absolute top-0 bg-transparent w-full pt-5 lg:pt-0 h-auto lg:h-[76px] flex flex-col justify-center items-center">

        <div className="max-w-[1440px] w-full px-5 md:px-20 flex items-center md:justify-end">

          <div className="max-w-[700px] w-full flex items-center justify-end">

            <div className="hidden md:flex">

              <a 
                  href={process.env.NEXT_PUBLIC_NAVBAR_WALLET_LINK} 
                  className="px-6 transition hover:scale-105 cursor-pointer bg-primary py-2.5 text-center uppercase text-secondary buttonShape text-[11px] font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {process.env.NEXT_PUBLIC_NAVBAR_WALLET_TEXT}
              </a>

            </div>

            <div className="flex md:hidden max-w-max" onClick={handleOpenCloseMenu} >
              <MenuHamburger />
            </div>

          </div>

        </div>

      </nav>

      <div className={`fixed flex flex-col md:hidden top-0 z-50 h-screen bg-red w-screen bg-black transition ${menuOpen ? "translate-x-0" : "translate-x-full" } `}>

        <div className="pt-6 mb-20 px-5 w-full flex items-center justify-between">

          {
              isLoadImage && (
                
                <div className="w-max">

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

          <CloseMenu  onClick={handleOpenCloseMenu} />


        </div>

        <a 
          href={process.env.NEXT_PUBLIC_NAVBAR_WALLET_LINK} 
          className="px-5 text-standard leading-[32px] text-[32px] font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
            {process.env.NEXT_PUBLIC_NAVBAR_WALLET_TEXT}
        </a>



      </div>

    </>

  );

};

export default Navbar;
