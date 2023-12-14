"use client";
import Slider from "react-slick";
import { Button } from "@nextui-org/react";
import { Link as Mylink } from "react-scroll";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import Carousel from "./Carousel";
import Link from "next/link";
import { Btn, Btn2 } from "./Btn";
const Hero = () => {
  return (
    <section className="h-screen w-full relative">
      <Slider
        dots={false}
        infinite={true}
        autoplay={true}
        speed={1500}
        autoplaySpeed={3000}
        arrows={false}
        slidesToShow={1}
        slidesToScroll={1}
        vertical={true}
        verticalSwiping={true}
        pauseOnHover={false}
      >
        <div className="h-screen w-full bg-hero-pattern bg-cover bg-center"></div>
        <div className="h-screen w-full bg-hero-pattern-2 bg-cover bg-center"></div>
        <div className="h-screen w-full bg-hero-pattern-3 bg-cover bg-center"></div>
      </Slider>
      <div className="text-center space-y-4 md:space-y-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h4 className="text-xl md:text-2xl uppercase">
          Vb Ceramic Consultants
        </h4>
        <div className="space-y-1 md:space-y-3">
          <h3 className="font-Lora text-[32px] md:text-[40px] tracking-tight mt-2 ">
            Tailor Made
          </h3>
          <Carousel />
        </div>
        <div className="flex justify-center items-center gap-6">
          {/* <Link
            href="/products"
            className="border border-secondary text-secondary text-sm md:text-base rounded-full px-6 py-5 bg-black/30 backdrop-blur-md font-urbanist"
          >
            Our Products
          </Link> */}
          <Btn2 Hbgcolor={"bg-white"} textColor={"text-white"} HtextColor={"text-warning"} bColor={"border-white"} title={"Our Products"} href={"/products"}/>
          {/* <Link
            href="/contact"
            className="border border-secondary text-secondary text-sm md:text-base rounded-full px-6 py-5 bg-black/30 backdrop-blur-md font-urbanist"
          >
            Contact Us
          </Link> */}
          <Btn2 Hbgcolor={"bg-white"} textColor={"text-white"} HtextColor={"text-warning"} bColor={"border-white"} title={"Contact Us"} href={"/contact"}/>
        </div>
      </div>
      {/* <Mylink  Hbgcolor={"bg-secondary"} textColor={"text-white"} HtextColor={"text-warning"} bColor={"border-white"} title={<HiOutlineArrowNarrowDown className="h-7 w-7 text-secondary" />} href={"/contact"} /> */}
      <Mylink
        to="client"
        spy={true}
        smooth={true}
        offset={20}
        duration={800}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full p-3 border border-secondary bg-black/30 backdrop-blur-md hover:opacity-70 cursor-pointer">
        <HiOutlineArrowNarrowDown className="h-7 w-7 text-secondary" />
      </Mylink>
    </section>
  );
};

export default Hero;
