"use client";

import React from "react";
import { Link } from "react-scroll";

const gallery = ["Culture", "Visitations", "Awards"];

export const GalleryHero = () => {
  return (
    <section className="block w-full h-screen md:h-[715px] px-5 py-10 md:py-[60px] xl:px-[60px] md:px-10 bg-[url('https://ik.imagekit.io/webibee/VBCC/hero-bg.png')] bg-cover bg-center z-0 relative">
      {/* <div className="relative h-[715px] w-full z-0  px-5 py-10 md:py-[60px] xl:px-[60px] md:px-10">
        <Image
          src={"https://ik.imagekit.io/webibee/VBCC/hero-bg.png"}
          fill
          alt="backgroun image"
          className="object-cover object-center"
        />
      </div> */}
      <div className="absolute top-0 left-0 h-screen md:h-[715px] w-full -z-10 backdrop-sepia-0 bg-black/30"></div>
      <div className="flex flex-col justify-start xl:justify-around items-start w-full md:w-4/5 z-50 h-full lg:gap-[170px] gap-52">
        <div className="space-y-6">
          <h2 className="font-Lora text-4xl xl:text-6xl w-full ">Gallery</h2>
          <div className="flex flex-col gap-1.5 space-y-1.5 font-urbanist">
            {gallery.map((text, idx) => (
              <Link
                key={idx}
                to={text.toLowerCase()}
                spy={true}
                smooth={true}
                offset={10}
                duration={800}
                href={"/contact"}
                className={`border border-secondary px-6 py-3 rounded-full w-max cursor-pointer group/btn block bg-transparent hover:bg-primary text-center text-base group-hover:duration-700 group-hover:delay-75 font-urbanist capitalize translate-x-1000 group-hover:-translate-x-3`}
              >
                <div className={`block h-6 w-full overflow-hidden`}>
                  <h4
                    className={`transition translate-y-0 group-hover/btn:-translate-y-20 duration-700 text-secondary`}
                  >
                    {text}
                  </h4>
                  <h4
                    className={`translate-y-20 transition group-hover/btn:-translate-y-[25px] duration-700 text-secondary`}
                  >
                    {text}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Link
          to={"culture"}
          spy={true}
          smooth={true}
          offset={15}
          duration={800}
          // absolute bottom-40 md:bottom-36 left-2 xl:left-12
          className="-rotate-90 w-max -ms-9 h-auto cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <div className="h-[1px] w-10 bg-white"></div>
            <h5 className="text-base md:text-lg font-urbanist text-white font-medium">
              Scroll
            </h5>
          </div>
        </Link>
      </div>
    </section>
  );
};
