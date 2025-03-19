"use client";
import Image from "next/image";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
import { RiArrowRightUpLine } from "react-icons/ri";
import { useState } from "react";

const MobileNav = ({ isOpen, setIsOpen, navLinks }) => {
  const [open, setOpen] = useState(false);

  return (
    <section
      className={`fixed top-0
       ${!open ? "right-0 animate-reveal_In" : "-right-[120%]"} 
       !z-[9999] bg-white/95 backdrop-blur-sm h-screen w-screen flex flex-col gap-7 px-5 py-6 md:py-8 md:px-10 xl:px-16 md:gap-3 font-Montserrat font-medium transition-all duration-[2000] overflow-y-scroll hideScroll`}
    >
      <div className="flex justify-between items-center md:mt-0 p-5 md:px-[60px] md:py-5">
        <div className="relative w-28 h-9 md:w-32 md:h-10">
          <Image
            fill
            src={
              "https://ik.imagekit.io/webibee/VBCC/homepage/VBCC%20logo.svg?updatedAt=1733742968628"
            }
            alt="Logo"
            title="logo"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
            className="object-cover object-center"
          />
        </div>
        <div className="flex items-center p-2 rounded-full bg-primary gap-7">
          <RxCross1
            className={` h-7 w-7 text-info cursor-pointer hover:text-white`}
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
        <ul className="w-full space-y-4 md:space-y-6 lg:space-y-10">
          {navLinks.map((link, idx) => (
            <li
              key={idx}
              className={`w-max uppercase font-semibold text-3xl sm:text-[40px]`}
            >
              <Link
                title="button"
                passHref
                className="flex items-center gap-2 group"
                href={link.ref}
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="rounded-lg after:h-1 after:bg-info after:block after:transition-all hover:after:h-1 after:w-0 hover:after:w-full hover:after:bg-info hover:after:block hover:after:ease-linear hover:after:duration-[3000] text-primary">
                  {link.menu}
                </span>
                <RiArrowRightUpLine className="hidden w-8 h-8 group-hover:block group-hover:text-info" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MobileNav;
