"use client";
import othersData from "@/libs/others.json";
import Image from "next/image";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
import { FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { RiArrowRightUpLine } from "react-icons/ri";
import { useState } from "react";

const MobileNav = ({ isOpen, setIsOpen }) => {
  const [open, setOpen] = useState(false);
  return (
    <section
      className={`fixed top-0
       ${!open ? "right-0 animate-reveal_In" : "-right-[120%]"} 
       z-[100] bg-primary h-screen w-screen flex flex-col gap-7 md:gap-3 font-urbanist font-medium transition-all duration-[2000] overflow-y-scroll hideScroll`}
    >
      <div className="flex justify-between items-center mt-6 md:mt-0 p-5 md:px-[60px] md:py-[32px]">
        <Image
          width={70}
          height={20}
          src={"https://ik.imagekit.io/webibee/VBCC/vbcc%20logo%202.svg"}
          alt="Logo"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
          className=" object-contain object-center"
        />
        <div className="flex items-center gap-7">
          <Link
            passHref
            href={"/contact"}
            className={`block rounded-full px-4 py-2 border border-info bg-transparent hover:bg-info group text-center text-base duration-700 delay-75 font-urbanist capitalize`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`block h-6 w-full overflow-hidden`}>
              <h4
                className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-info`}
              >
                Contact Us
              </h4>
              <h4
                className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-white`}
              >
                Contact Us
              </h4>
            </div>
          </Link>
          <RxCross1
            className={` h-5 w-5 md:h-7 md:w-7 text-[#EFF3F6] cursor-pointer hover:text-info`}
            onClick={() => {
              setOpen(true);
              setTimeout(() => {
                setIsOpen(!isOpen);
              }, 800);
            }}
          />
        </div>
      </div>
      <div className="flex justify-center md:justify-between items-center p-5 md:px-[60px] md:py-[24px]">
        <ul className="space-y-4 md:space-y-6 lg:space-y-10 w-full">
          {othersData.navlink.map((link, idx) => (
            <li
              key={idx}
              className="w-max uppercase font-semibold text-3xl sm:text-[40px]"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link
                passHref
                className="flex items-center gap-2 group"
                href={link.href}
              >
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
            src={"https://ik.imagekit.io/webibee/VBCC/mobile-nav.png"}
            alt="Logo"
            className="absolute object-cover object-center"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 p-5 md:px-[60px] md:py-[32px]">
        <div className="flex items-center gap-5">
          <Link
            passHref
            href={"https://maps.app.goo.gl/U8LEV8Fyq6sDujZz5"}
            className={`block rounded-full px-4 py-2 border border-info bg-transparent hover:bg-info group text-center text-base duration-700 delay-75 font-urbanist capitalize`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`block h-6 w-full overflow-hidden`}>
              <h4
                className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-info`}
              >
                Location ?
              </h4>
              <h4
                className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-white`}
              >
                Location ?
              </h4>
            </div>
          </Link>
          <Link
            passHref
            href={"/faq"}
            className={`block rounded-full px-4 py-2 border border-info bg-transparent hover:bg-info group text-center text-base duration-700 delay-75 font-urbanist capitalize`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`block h-6 w-full overflow-hidden`}>
              <h4
                className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-info`}
              >
                FAQs
              </h4>
              <h4
                className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-white`}
              >
                FAQs
              </h4>
            </div>
          </Link>
        </div>
        <div className="flex md:justify-evenly items-center gap-3 mt-5 mx-2 md:mt-0 md:mx-0">
          <Link
            passHref
            href={"https://www.youtube.com/@drviswabaskaranvbceramics4394"}
            className="p-4 rounded-full border border-info hover:bg-info"
          >
            <FaYoutube className="h-7 w-7 text-white" />
          </Link>
          <Link
            passHref
            href={"https://in.linkedin.com/company/vb-ceramic-consultants"}
            className="p-4 rounded-full border border-info hover:bg-info"
          >
            <FaLinkedin className="h-7 w-7 text-white" />
          </Link>
          <Link
            passHref
            href={"https://wa.me/7338894199"}
            className="p-4 rounded-full border border-info hover:bg-info"
          >
            <FaWhatsapp className="h-7 w-7 text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MobileNav;
