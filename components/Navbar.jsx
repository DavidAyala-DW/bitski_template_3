import Image from "next/image";
import Link from "next/link";
const logoFileName = '/' +process.env.NEXT_PUBLIC_NAVBAR_LOGO;


const Navbar = () => {
  return (

    <nav className="absolute z-40 pt-[36px] w-full">

      <div className="flex w-full max-w-[1440px] px-5 md:px-20 mx-auto justify-center flex-wrap">

        <h2 className="text-4xl text-center md:text-7xl">NAVBAR</h2>

      </div>

    </nav>

  );
};

export default Navbar;
