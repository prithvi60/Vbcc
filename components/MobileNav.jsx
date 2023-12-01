import { Navlink } from "@/libs/data";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
import { FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";

const MobileNav = ({ isOpen, setIsOpen }) => {
  return (
    <section className="fixed top-0 left-0 z-30 bg-primary h-screen w-screen p-4 md:p-10 lg:px-20 lg:py-12 flex flex-col gap-14 md:gap-3 font-urbanist font-medium">
      <div className="flex justify-between items-center mt-6 md:mt-0">
        <div className="relative h-5 w-32">
          <Image
            fill
            src={"/logo-white.svg"}
            alt="Logo"
            className="absolute object-contain object-center"
          />
        </div>
        <div className="flex items-center gap-7">
        <Button variant="bordered" className="border-info text-info text-sm md:text-base rounded-3xl p-5 capitalize">Contact us</Button>
        <RxCross1
          className="h-5 w-5 md:h-7 md:w-7 text-[#EFF3F6] cursor-pointer hover:text-info"
          onClick={() => setIsOpen(!isOpen)}
        />
        </div>
      </div>
      <div className="flex justify-between items-center py-14 md:py-2 ">
        <ul className="p-3">
          {Navlink.map((link, idx) => (
            <li key={idx} className="text-secondary uppercase text-xl md:text-3xl mb-3 hover:text-info">
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className="relative w-[500px] h-[220px] md:w-96 md:h-[500px] lg:w-[500px]">
          <Image
            fill
            src={"/mobile-nav.png"}
            alt="Logo"
            className="absolute object-cover md:object-contain md:object-center"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center gap-5">
        <div className="space-x-5">
          <Button variant="bordered" className="border-info text-info text-sm md:text-base rounded-3xl p-5">Location?</Button>
          <Button variant="bordered" className="border-info text-info text-sm md:text-base rounded-3xl p-5">FAQs</Button>
        </div>
        <div className="flex justify-evenly items-center gap-3">
              <Link href={"/"} className="p-2.5 rounded-full border border-info hover:bg-info">
                <FaYoutube className="h-7 w-7 text-white"/>
              </Link>
              <Link href={"/"} className="p-2.5 rounded-full border border-info hover:bg-info">
                <FaLinkedin  className="h-7 w-7 text-white"/>
              </Link>
              <Link href={"/"} className="p-2.5 rounded-full border border-info hover:bg-info">
                <FaWhatsapp   className="h-7 w-7 text-white"/>
              </Link>
        </div>
      </div>
    </section>
  );
};

export default MobileNav;
