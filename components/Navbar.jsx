"use client"
import othersData from "@/libs/others.json";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./MobileNav";

// const productList = [
//   {
//     category: "Research Institutions",
//     lists: [
//       "Microwave Heating Systems",
//       "Furnaces",
//       "Ovens",
//       "Nano Technology Equipment",
//       "Special Research Equipment",
//       "Presses",
//       "Metallurgical Equipment",
//     ],
//   },
//   {
//     category: "Industries",
//     lists: [
//       "Industrial Furnaces",
//       "Refractory Industry",
//       "Tile & Sanitary Ware",
//     ],
//   },
//   {
//     category: "Accessories",
//     lists: ["Heating Elements", "Controllers", "Ceramic Products"],
//   },
// ];

// const sortBy = ["Featured", "New Products", "Best Selling"];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="absolute top-0 left-0 z-10 w-full px-3 py-6 text-white xl:px-5 md:py-6 xl:py-10">
      <div className="relative flex items-center justify-between w-full overflow-hidden rounded-2xl">
        <div className="relative w-24 h-7 lg:h-9 lg:w-28 2xl:h-12 2xl:w-36">
          <Image
            alt="VBCC Logo"
            src="/VBCC - Logo.svg"
            fill
            className="z-0 object-cover object-center"
          />
        </div>
        <ul className="items-center hidden gap-6 lg:flex">
          {navLinks.map((list, id) => (
            <li className="text-base font-medium tracking-wide decoration-info hover:underline hover:underline-offset-8 text-secondary" key={id}>
              <Link href={list.ref}>{list.menu}</Link>
            </li>
          ))}
        </ul>
        <button
          className={`hidden font-semibold border border-info  w-fit transition-all rounded-full lg:flex items-center text-sm md:text-base gap-3 capitalize bg-gradient-to-bl from-[#6b778cf8] to-[#ffffff3f] hover:bg-gradient-to-t hover:from-info hover:to-info group`}
        >
          <h4 className="px-2 py-2 md:px-6">
            WE SHIP OUR INSTRUMENTS GLOBALLY
          </h4>
          <span className="p-4 border rounded-full border-info group-hover:border group-hover:border-primary group-hover:bg-primary">
            {/* <MdOutlineFileDownload className="text-lg md:text-xl" /> */}
          </span>
        </button>
        <div className="block group lg:hidden">
          <div onClick={() => setIsOpen(!isOpen)} className="p-2.5 bg-primary group-hover:bg-info rounded-full cursor-pointer">
            <GiHamburgerMenu className="font-semibold h-7 w-7 md:h-8 md:w-8 text-info group-hover:text-secondary" />
          </div>
        </div>
      </div>
      {isOpen && <MobileNav setIsOpen={setIsOpen} isOpen={isOpen} />}
    </nav>
  );
};

export default NavBar;

const navLinks = [
  { menu: "ABOUT US", ref: "/about" },
  { menu: "CATEGORIES", ref: "/categories" },
  { menu: "BLOGS", ref: "/blogs" },
  { menu: "TESTIMONIALS", ref: "/testimonials" },
];

{
  /* <nav id="nav">
  <div className="font-urbanist font-medium py-6 px-5 md:px-10 md:py-4 xl:px-[60px] lg:py-3.5 border-b border-[#B6BABD] static max-w-full flex justify-between items-center">
    {/* <Link passHref href="/" className="relative w-20 h-5 cursor-pointer">
      <Image
        fill
        src={"https://ik.imagekit.io/webibee/VBCC/logo.svg"}
        placeholder="blur"
        blurDataURL="https://ik.imagekit.io/webibee/VBCC/logo.svg?tr=bl-100"
        alt="Logo"
        className="absolute object-contain object-center"
      />
    </Link> 
    <Link
      passHref
      href="/"
      className="relative w-20 h-8 cursor-pointer md:h-9"
    >
      <Image
        loading="lazy"
        fill
        src={"https://ik.imagekit.io/webibee/VBCC/vbccsvglogo.svg"}
        // placeholder="blur"
        // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
        alt="Logo"
        className="absolute object-contain object-center"
      />
    </Link>
    <div className="hidden gap-10 uppercase lg:flex text-warning">
      <div className="group">
        <div className="relative">
          <Link
            passHref
            href={"/products"}
            className="h-full text-warning py-[26px]"
            onMouseEnter={() => setOpen(false)}
          >
            Products
          </Link>
          <hr className="hidden group-hover:block  group-hover:absolute group-hover:-bottom-[23px] group-hover:left-0 group-hover:h-[7px] group-hover:w-full bg-info group-hover:transition-all group-hover:duration-1000 group-hover:delay-150" />
        </div>
        <ToolTipContent isOpen={open} setIsOpen={setOpen} />
      </div>
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
        <RxHamburgerMenu className="cursor-pointer h-7 w-7 md:h-8 md:w-8 text-warning hover:text-info" />
      </div>
    </div>
  </div>
  {isOpen && <MobileNav setIsOpen={setIsOpen} isOpen={isOpen} />}
</nav> */
}
