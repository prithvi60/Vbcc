"use client";
import Slider from "react-slick";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import Carousel from "./Carousel";
import { hero } from "@/libs/data";
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
        className="!gap-0"
      >
        {/* {hero.map((item,idx)=>( */}
        <div className="h-screen w-full bg-hero-pattern bg-cover bg-center flex justify-center items-center font-urbanist font-medium text-secondary "></div>
        <div className="h-screen w-full bg-hero-pattern-2 bg-cover bg-center flex justify-center items-center font-urbanist font-medium text-secondary "></div>
        <div className="h-screen w-full bg-hero-pattern-3 bg-cover bg-center flex justify-center items-center font-urbanist font-medium text-secondary "></div>
        {/* ))}  */}
      </Slider>
      <div className="text-center space-y-4 md:space-y-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h4 className="text-xl md:text-2xl uppercase">
          Vb Ceramic Consultants
        </h4>
        <div className="space-y-1 md:space-y-3">
          <h3 className="font-Lora text-[32px] md:text-[40px] tracking-tight mt-2 ">
            Tailor Made
          </h3>
          {/* <div> */}
          <Carousel />
          {/* </div> */}
        </div>
        <div className="flex justify-center items-center gap-6">
          <Button
            variant="bordered"
            className="border-secondary text-secondary text-sm md:text-base rounded-3xl p-6 bg-black/30 backdrop-blur-md"
          >
            Our Products
          </Button>
          {/* <Link 
          href={"#"}
            className="px-6 py-5 h-10 w-auto border  hover:border hover:text-white rounded-3xl duration-500 group overflow-hidden border-secondary text-secondary text-sm md:text-base bg-black/30 backdrop-blur-md"
          >
            <div className="group-hover:animate-spin_word space-y-4">
              <p>Our Products</p>
              <p>Our Products</p>
            </div>
          </Link> */}
          <Button
            variant="bordered"
            className="border-secondary text-secondary text-sm md:text-base rounded-3xl p-6 bg-black/30 backdrop-blur-md"
          >
            Contact Us
          </Button>
        </div>
      </div>
      <Link
        href={"#"}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full p-3 border border-secondary bg-black/30 backdrop-blur-md hover:opacity-70"
      >
        <HiOutlineArrowNarrowDown className="h-7 w-7 text-secondary" />
      </Link>
    </section>
  );
};

export default Hero;
