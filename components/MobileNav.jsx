import { Navlink } from "@/libs/data";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
import { FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { RiArrowRightUpLine } from "react-icons/ri";

const MobileNav = ({ isOpen, setIsOpen }) => {
  return (
    <section
      className={`fixed top-0 ${
        open ? "right-0 animate-reveal_In" : "-right-full"
      } z-30 bg-primary h-screen w-screen flex flex-col gap-7 md:gap-3 font-urbanist font-medium overflow-auto transition-all delay-200 duration-[3000]`}
    >
      <div className="flex justify-between items-center mt-6 md:mt-0 p-5 md:px-[60px] md:py-[32px]">
        <Image
          width={70}
          height={20}
          src={"/logo-white.svg"}
          alt="Logo"
          className=" object-contain object-center"
        />
        <div className="flex items-center gap-7">
          <Button
            as={Link}
            href="/contact"
            variant="bordered"
            className="border-info text-info text-sm md:text-base rounded-3xl p-5 capitalize"
            onClick={() => setIsOpen(!isOpen)}
          >
            Contact us
          </Button>
          <RxCross1
            className={` h-5 w-5 md:h-7 md:w-7 text-[#EFF3F6] cursor-pointer hover:text-info`}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
      <div className="flex justify-center md:justify-between items-center p-5 md:px-[60px] md:py-[24px]">
        <ul className="space-y-2 w-full">
          {Navlink.map((link, idx) => (
            <li
              key={idx}
              className="w-max uppercase font-semibold text-[40px]"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link className="flex items-center gap-2 group" href={link.href}>
                <span className="rounded-lg after:h-1 after:bg-info after:block after:transition-all hover:after:h-1 after:w-0 hover:after:w-full hover:after:bg-info hover:after:block hover:after:ease-linear hover:after:duration-[3000] text-secondary">
                  {link.title}
                </span>
                <RiArrowRightUpLine className="h-8 w-8 hidden group-hover:block group-hover:text-info" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex relative w-full h-[425px]">
          <Image
            fill
            src={"/mobile-nav.png"}
            alt="Logo"
            className="absolute object-cover object-center"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 p-5 md:px-[60px] md:py-[32px]">
        <div className="space-x-5">
          <Link
            href={"/location"}
            className="border border-info text-info text-sm md:text-base rounded-full px-6 py-5"
            onClick={() => setIsOpen(!isOpen)}
          >
            Location ?
          </Link>
          <Link
            href={"/faq"}
            className="border border-info text-info text-sm md:text-base rounded-full px-6 py-5"
            onClick={() => setIsOpen(!isOpen)}
          >
            FAQs
          </Link>
        </div>
        <div className="flex md:justify-evenly items-center gap-3 mt-5 mx-2 md:mt-0 md:mx-0">
          <Link
            href={"/"}
            className="p-2.5 rounded-full border border-info hover:bg-info"
          >
            <FaYoutube className="h-7 w-7 text-white" />
          </Link>
          <Link
            href={"/"}
            className="p-2.5 rounded-full border border-info hover:bg-info"
          >
            <FaLinkedin className="h-7 w-7 text-white" />
          </Link>
          <Link
            href={"/"}
            className="p-2.5 rounded-full border border-info hover:bg-info"
          >
            <FaWhatsapp className="h-7 w-7 text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MobileNav;
