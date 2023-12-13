"use client";
// import Link from "next/link";
import React from "react";
import { Link } from "react-scroll";

export const GalleryHero = () => {
  return (
    <section className="w-full h-[715px] px-5 py-10 md:px-10 md:py-20 xl:px-[60px] bg-[url('/hero-bg.png')] bg-cover bg-center ">
      <div className="w-full md:w-4/5 space-y-6">
        <h2 className="font-Lora text-2xl md:text-4xl xl:text-6xl w-full">
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
      </div>
    </section>
  );
};
