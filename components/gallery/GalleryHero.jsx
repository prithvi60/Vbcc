"use client";
// import Link from "next/link";
import React from "react";
import { Link } from "react-scroll";

export const GalleryHero = () => {
  return (
    <section className="block w-full h-[715px] px-5 py-10 md:py-[60px] xl:px-[80px] md:px-10 bg-[url('/hero-bg.png')] bg-cover bg-center z-0 overflow-hidden  relative">
      <div className="absolute top-0 left-0 h-screen xl:h-[82vh] w-full -z-10 backdrop-opacity-5 backdrop-invert bg-black/40 opacity-30">
      </div>
      <div className="block space-y-6 w-full md:w-4/5 z-50">
        <h2 className="font-Lora text-2xl md:text-4xl xl:text-6xl w-full ">
          Gallery
        </h2>
        <div className="flex flex-col gap-1.5 space-y-1.5 font-urbanist">
          <Link
            to="culture"
            spy={true}
            smooth={true}
            offset={10}
            duration={800}
            className="border border-secondary px-6 py-3 rounded-full w-max cursor-pointer"
          >
            Culture
          </Link>
          <Link
          to="visitation"
          spy={true}
          smooth={true}
          offset={10}
          duration={800}
            className="border border-secondary px-6 py-3 rounded-full w-max cursor-pointer"
          >
            Visitations
          </Link>
          <Link
          to="awards"
          spy={true}
          smooth={true}
          offset={10}
          duration={800}
            className="border border-secondary px-6 py-3 rounded-full w-max cursor-pointer"
          >
            Awards
          </Link>
        </div>
        <div className=" -rotate-90 absolute bottom-40 md:bottom-36 left-2 xl:left-12 w-max h-auto">
      <div className="flex items-center gap-2.5">
        <div className="h-[1px] w-10 bg-white"></div>
        <h5 className="text-sm font-urbanist text-white">Scroll</h5>
      </div>
      </div>
      </div>
    </section>
  );
};
