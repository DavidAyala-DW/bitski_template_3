import Image from "next/image";
import {useEffect, useState} from 'react'
import { arraySocialMedia } from "../helpers";
import Grid from "../public/footer_grid.svg";

const footerImage = "/" + process.env.NEXT_PUBLIC_MAIN_IMAGE;

function Contact() {

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [isLoadImage, setIsLoadImage] = useState(false);


  useEffect(() => {

    const image = document.createElement("IMG");
    image.classList.add("w-full","h-full");
    image.src = footerImage;
    image.onload = () => {
      setHeight(image.height);
      setWidth(image.width);
      setIsLoadImage(true);
    }

  }, []);

  return (

    <div className="min-h-[400px] w-full flex flex-col justify-center items-center">
      <h2 className="text-4xl md:text-7xl">Contact</h2>
    </div>

  )

}

export default Contact