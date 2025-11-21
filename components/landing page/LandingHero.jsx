"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdOutlineFileDownload,
} from "react-icons/md";
import CompanyStats from "./CompanyStats";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Modal1, SpringModal } from "./Modal";
import { HeroBox, HeroBoxBottom } from "@/svg_components/LandingHeroBox";
const LandingHero = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="relative w-full h-full text-white mb-7">
      <div className="relative z-0 w-full h-full overflow-hidden rounded-2xl">
        <div className="absolute w-32 -left-2 xl:left-0 top-4 h-14 md:h-16 md:w-40 2xl:h-20 2xl:w-44">
          <Image
            alt="VBCC Logo"
            title="VBCC Logo"
            src="http://cdn.shopifyapp.shop/vbcc/homepage/VBCC%20logo.svg"
            fill
            className="z-0 object-cover object-center"
          />
        </div>
        <div className="relative w-full h-[120dvh] md:h-[110dvh] hero-mask -rotate-[0.1deg] -mt-[3px]">
          <Image
            alt="background image"
            title="background image"
            src="http://cdn.shopifyapp.shop/vbcc/homepage/herobg.jpg"
            fill
            className="z-0 object-cover object-center"
          />
          <div className="absolute w-full h-full bg-[#293171cb] z-10"></div>
        </div>
        <div className="absolute z-20 w-[80%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-Montserrat">
          <div className="flex flex-col items-center w-full h-full gap-10 md:flex-row">
            <div className="relative flex items-center gap-5 md:gap-16 xl:gap-20">
              <ul className="flex flex-col items-center justify-center gap-3 -mt-10 md:-mt-0">
                <li>
                  <Link title="linkedin link"
                    href={"https://www.linkedin.com/company/vbcc-hti/"}
                    target="_blank"
                  >
                    <FaLinkedinIn className="text-base text-white md:text-2xl" />
                  </Link>
                </li>
                <li>
                  <Link title="facebook link"
                    href={"https://www.facebook.com/vbcchti/"}
                    target="_blank"
                  >
                    <FaFacebookF className="text-base text-white md:text-2xl" />
                  </Link>
                </li>
                <li>
                  <Link title="instagram link"
                    href={"https://www.instagram.com/vbcc_hti/"}
                    target="_blank"
                  >
                    <FaInstagram className="text-base text-white md:text-2xl" />
                  </Link>
                </li>
                <li>
                  <Link title="youtube link"
                    href={"https://www.youtube.com/@vbcc_hti"}
                    target="_blank"
                  >
                    <FaYoutube className="text-base text-white md:text-2xl" />
                  </Link>
                </li>
                <li>
                  <Link title="X link" href={"https://x.com/vbcc_hti"} target="_blank">
                    <FaXTwitter className="text-base text-white md:text-2xl" />
                  </Link>
                </li>
              </ul>
              <div className="absolute block w-full left-2 -top-20 md:-top-24 2xl:-top-40">
                <HeroBox className="h-28 md:h-52 2xl:h-64 fill-none" />
              </div>
              <div className="z-10 w-full h-full md:w-4/5">
                <div className="w-full h-full space-y-2 md:space-y-4 md:w-4/5 xl:w-4/5">
                  <p className="w-full text-xs font-medium leading-tight md:text-sm xl:text-base">
                    We enhance restorative and prosthetics treatments with our
                    state-of-the-art dental furnaces
                  </p>
                  <h2 className="text-[28px] font-bold tracking-wider md:text-[48px] xl:text-[64px] leading-tight">
                    INDIA’S PREMIUM DENTAL FURNACES
                  </h2>
                  <LinkScroll
                    title="products link"
                    to="products"
                    spy={true}
                    smooth={true}
                    offset={165}
                    duration={500}
                    className={`font-semibold w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] flex items-center text-sm md:text-base gap-3 capitalize bg-info text-white rounded-full cursor-pointer px-6 py-2`}
                  >
                    <h1>{"Products"}</h1>
                    <span>
                      <MdKeyboardDoubleArrowRight className="text-xl" />
                    </span>
                  </LinkScroll>
                </div>
              </div>

              <div className="absolute z-0 block w-full left-2 -bottom-14 md:-bottom-28 2xl:-bottom-48">
                <HeroBoxBottom className="h-28 md:h-52 2xl:h-64 fill-none" />
              </div>
            </div>
            <div className="relative w-full md:w-1/2 xl:w-2/5">
              <div className="relative w-48 h-48 mx-auto md:w-56 md:h-56 xl:h-72 xl:w-72 group">
                <Image
                  alt="image"
                  title="image"
                  fill
                  src={
                    "http://cdn.shopifyapp.shop/vbcc/Products/dental%20furnaces/Isometric%20-%20Sintering.png"
                  }
                  className="z-20 object-contain object-center transition-all duration-500 ease-linear group-hover:scale-125"
                />
                <div className="absolute top-2 md:top-4 group-hover:bg-gradient-to-b group-hover:from-info group-hover:to-info transition-all duration-500 group-hover:scale-90 ease-linear z-10 left-1 flex justify-between items-center rounded-full bg-gradient-to-b from-[#13294F56] to-[#6B778C56]  size-44 md:size-52 xl:size-64"></div>
              </div>
              <h4 className="font-semibold text-center text-[16px] md:text-[20px] xl:text-[24px] !leading-6 tracking-wider">
                Zirconia Sintering Furnace
              </h4>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className={`font-semibold w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]
                 flex items-center text-sm md:text-base gap-3 p-0 absolute top-5 md:top-7 right-1 md:right-5 bg-gradient-to-r from-[#6B778C80] to-[#FFFFFF0D] text-white hover:opacity-80 border border-info uppercase rounded-full font-Montserrat`}
        >
          <h4 className="px-2 py-2 md:px-6">DOWNLOAD BROCHURE</h4>
          <span className="p-2 border rounded-full border-info">
            <MdOutlineFileDownload className="text-lg md:text-xl" />
          </span>
        </button>
      </div>
      {isOpen && <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} query="laboratory" pageType="main" />}
      <CompanyStats />
    </section>
  );
};

export default LandingHero;
