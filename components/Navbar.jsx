"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import { MdDoubleArrow } from "react-icons/md";
import { navLinks } from "@/libs/otherPage";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const path = usePathname();

  return (
    <nav className="absolute left-0 z-10 w-full px-3 py-6 text-white top-1.5 md:-top-2 xl:px-5 md:py-6 xl:py-10">
      <div
        className={`relative flex items-center w-full rounded-2xl ${path.startsWith("/categories/") ||
          path === "/" ||
          path === "/about" ||
          path.startsWith("/blog/") ||
          path === "/testimonials" ||
          path === "/blog"
          ? "justify-between lg:justify-start lg:gap-52 2xxl:gap-72"
          : "justify-between"
          }`}
      >
        <Link href={"/"}>
          <div
            className={`ml-5 md:ml-0 absolute top-0 md:top-2  ${path === "/categories/dental" || path === "/categories/laboratory"
              ? "w-36 bg-white rounded-md h-16 md:w-24 md:h-7 -left-8 md:left-2 "
              : "w-36 h-12 md:w-24 md:h-7 -left-2 md:left-2"
              } lg:h-9 lg:w-28 2xl:h-12 2xl:w-36 ${(path === "/about" || path === "/categories/dental/" || path === "/categories/laboratory/") && "bg-white !w-36 !-left-9 md:!left-2 !h-16 md:!w-28 md:!h-11 xl:!w-36 xl:!h-14 rounded-md "}`}
          >
            <Image
              alt="VBCC Logo"
              src="/VBCC - Logo.svg"
              fill
              className={`object-cover object-center ${(path === "/about" || path === "/categories/dental" || path === "/categories/laboratory") && "p-3 md:p-1.5"}`}
              priority
            />
          </div>
        </Link>
        <ul className="items-center hidden gap-6 lg:flex">
          {navLinks.map((list, id) => (
            <li key={id} className="relative py-4 group">
              <div
                className={`relative text-base font-medium tracking-wide decoration-info hover:underline hover:underline-offset-8 z-20 ${list.menu === "CATEGORIES" && "group-hover:text-white"
                  } group-hover:!z-[1000] ${path === "/" ||
                    path.startsWith("/blog/") ||
                    path.startsWith("/categories/") ||
                    path === "/about"
                    ? "text-white"
                    : "text-primary"
                  }`}
              >
                {list.menu === "CATEGORIES" ? (
                  <Link href={list.ref} onMouseEnter={() => setIsHover(true)}>
                    <h4>{list.menu}</h4>
                  </Link>
                ) : (
                  <Link href={list.ref}>
                    <h4>{list.menu}</h4>
                  </Link>
                )}

                {/* {list.menu === "BLOGS" && path !== "/" ? (
                    <h4>{`CULTURE OR ${list.menu}`}</h4>
                  ) : (
                    <h4>{list.menu}</h4>
                  )}{" "} */}
              </div>
              {list.subMenu && (
                <div
                  className={`fixed w-full h-full bg-[#2931719c] bg-opacity-60 top-0 left-0 !z-[999] ${isHover
                    ? "block transition-all duration-400 ease-linear group"
                    : "hidden"
                    }`}
                >
                  <div
                    className={`absolute w-full h-[400px] xl:h-[320px] left-48 xl:left-64 md:w-3/4 2xl:w-[55%] top-3 !z-[999]`}
                  >
                    <div
                      onMouseLeave={() => setIsHover(false)}
                      className="relative w-full h-full px-6 py-8 bg-center bg-no-repeat bg-cover rtl_card-mask border-3 border-secondary"
                      style={{
                        backgroundImage: "url('/counterBg.png')",
                      }}
                    >
                      <div className="absolute w-full h-full bg-[#293271] bg-opacity-60 top-0 left-0 z-20"></div>
                      <ul
                        className={`absolute flex items-center gap-10 xl:gap-5 top-20 xl:top-20 ${path.startsWith("/categories/") || path === "/"
                          ? "left-32 xl:left-20"
                          : "lg:left-20 xl:left-80 2xl:left-[380px]"
                          }`}
                      >
                        {list.subMenu.map((item, idx) => (
                          <li className="relative" key={idx}>
                            <Link
                              href={item.ref}
                              className="flex flex-row h-full gap-4 xl:flex-col"
                              onClick={() => setIsHover(false)}
                            >
                              <div className="relative overflow-hidden size-12 xl:size-20 !z-[1000] rounded-md">
                                <Image
                                  alt=""
                                  src={item.img}
                                  fill
                                  className="object-cover object-center"
                                />
                              </div>
                              <div
                                className={`text-base font-medium tracking-wide decoration-info capitalize relative !z-[1000] text-white`}
                              >
                                {item.menu}{" "}
                                <p className="flex items-center gap-2">
                                  Furnaces{" "}
                                  <span>
                                    <MdDoubleArrow className="text-2xl text-info" />
                                  </span>
                                </p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
        {path === "/" ||
          path.startsWith("/blog/") ||
          path === "/about" ||
          path === "/testimonials" ||
          path === "/blog" ? (
          <button
            className={`hidden font-semibold border border-info  w-fit transition-all rounded-full items-center text-sm md:text-base gap-3 capitalize bg-gradient-to-bl from-[#6b778cf8] to-[#ffffff3f] hover:bg-gradient-to-t hover:from-info hover:to-info group`}
          >
            <h4 className="px-2 py-2 md:px-6">
              WE SHIP OUR INSTRUMENTS GLOBALLY
            </h4>
            <span className="p-4 border rounded-full border-info group-hover:border group-hover:border-primary group-hover:bg-primary">
              {/* <MdOutlineFileDownload className="text-lg md:text-xl" /> */}
            </span>
          </button>
        ) : (
          <button
            className={`hidden font-semibold border border-info  w-fit transition-all rounded-full items-center text-sm md:text-base gap-3 capitalize bg-gradient-to-r from-[#102242] to-[#27488180] hover:bg-gradient-to-t hover:from-info hover:to-info group ${path.startsWith("/categories/") ? "hidden" : "lg:flex"
              }`}
          >
            <h4 className="px-2 py-2 md:px-6">
              WE SHIP OUR INSTRUMENTS GLOBALLY
            </h4>
            <span className="p-4 border rounded-full border-info group-hover:border group-hover:border-primary group-hover:bg-primary">
              {/* <MdOutlineFileDownload className="text-lg md:text-xl" /> */}
            </span>
          </button>
        )}

        <div className="block group lg:hidden">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 bg-primary group-hover:bg-info mr-5 rounded-full cursor-pointer"
          >
            <GiHamburgerMenu className="font-semibold h-7 w-7 md:h-8 md:w-8 text-info group-hover:text-secondary" />
          </div>
        </div>
      </div>
      {isOpen && (
        <MobileNav setIsOpen={setIsOpen} isOpen={isOpen} navLinks={navLinks} />
      )}
    </nav>
  );
};

export default NavBar;

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
