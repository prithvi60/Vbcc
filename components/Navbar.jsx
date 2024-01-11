"use client";

import othersData from "@/libs/others.json"
import Link from "next/link"
import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNav from "./MobileNav";
import { Btn } from "./Btn";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // console.log(othersData.navlinks);
  return (
    <nav id="nav">
      <div
        className="font-urbanist font-medium py-6 px-5 md:px-10 md:py-4 xl:px-[60px] lg:py-3.5 border-b border-[#B6BABD] static max-w-full flex justify-between items-center"
      >
          <Link passHref href="/" className="relative h-5 w-20 cursor-pointer">
            <Image
              fill
              src={"https://ik.imagekit.io/webibee/VBCC/logo.svg"}
              placeholder="blur"
              blurDataURL="https://ik.imagekit.io/webibee/VBCC/logo.svg?tr=bl-100"
              alt="Logo"
              className="absolute object-contain object-center"
            />
          </Link>
        <div
          className="hidden lg:flex gap-10 text-warning uppercase"
        >
          {othersData.navlinks.map((link, idx) => (
            <div key={idx} className="relative group">
              <Link passHref href={link.href} className="h-full text-warning">
                {link.title}
              </Link>
              <hr className="hidden group-hover:block  group-hover:absolute group-hover:-bottom-[23px] group-hover:left-0 group-hover:h-[7px] group-hover:w-full bg-info group-hover:transition-all group-hover:duration-1000 group-hover:delay-150" />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <Btn
              Hbgcolor={"bg-primary"}
              textColor={"text-warning"}
              HtextColor={"text-white"}
              bColor={"border-warning"}
              title={"contact us"}
              href={"/contact"}
            />
          </div>
          <div onClick={() => setIsOpen(!isOpen)}>
            <RxHamburgerMenu className="h-7 w-7 md:h-8 md:w-8 text-warning cursor-pointer hover:text-info" />
          </div>
        </div>
      </div>
      {isOpen && <MobileNav setIsOpen={setIsOpen} isOpen={isOpen} />}
    </nav>
  );
};

export default NavBar;
