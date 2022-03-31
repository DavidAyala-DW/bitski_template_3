import Image from "next/image";
import Marquee from "./Marquee";
import HeroGrid from "../public/hero_grid.svg";


const title = process.env.NEXT_PUBLIC_HERO_TITLE ?? "";
const description = process.env.NEXT_PUBLIC_HERO_DESCRIPTION ?? "";
const image = "/".concat(process.env.NEXT_PUBLIC_HERO_IMAGE) ?? "";

const Hero = () => {

  return (
    <>
      <div className="min-h-[500px] flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-7xl">HERO</h1>
      </div>
    </>

  );
};

export default Hero;
