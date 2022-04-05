import Image from "next/image";
import Bitski from "../public/bitski.svg";
const faqLink = process.env.NEXT_PUBLIC_FAQ_LINK;
const tcLink = process.env.NEXT_PUBLIC_TC_LINK;

const Footer = () => {
  return (
    <>
      
      <footer className="py-10 bg-standardO text-standard mx-auto flex w-full items-center justify-center space-x-5">

        <p className="uppercase text-[11px] font-medium">Powered By</p>

        <div>
          <Bitski className="filter_logo_footer" />
        </div>

      </footer>

    </>
  );
};

export default Footer;
