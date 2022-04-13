import Image from "next/image";
import Bitski from "../public/bitski.svg";
const faqLink = process.env.NEXT_PUBLIC_FAQ_LINK;
const tcLink = process.env.NEXT_PUBLIC_TC_LINK;

const Footer = () => {
  return (
    <>
      
      <footer className="pt-20 pb-10 md:py-10 bg-standardO text-standard mx-auto flex w-full items-center justify-center space-x-5">

        <p className="uppercase text-[11px] font-medium">Powered By</p>

        <a className="block" href="https://www.bitski.com/" target="_blank" rel="noopener noreferrer">
          <Bitski className="filter_logo_footer" />
        </a>

      </footer>

    </>
  );
};

export default Footer;
