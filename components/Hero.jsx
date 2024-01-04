"use client";
import Slider from "react-slick";
import { Link as Mylink } from "react-scroll";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import Carousel from "./Carousel";
import { Btn2 } from "./Btn";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="h-[90vh] w-full relative">
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
        pauseOnHover={false}
        className="!z-0"
      >
        {/* Relative is affecting height */}
        <div className="h-[90vh] relative m-0 ">
          <Image
            src={"https://ik.imagekit.io/webibee/VBCC/hero-bg.png"}
            alt="test"
            fill
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="h-[90vh] relative m-0">
          <Image
            src={"https://ik.imagekit.io/webibee/VBCC/hero-bg-2.png"}
            alt="test"
            fill
            objectFit="cover"
            objectPosition="center"

          />
        </div>
        <div className="h-[90vh] relative m-0">
          <Image
            src={"https://ik.imagekit.io/webibee/VBCC/hero-bg-3.png"}
            alt="test"
            fill
            objectFit="cover"
            objectPosition="center"

          />
        </div>
        {/* <div className="h-[90vh] w-full bg-hero-pattern bg-cover bg-center m-0 p-0"></div>
        <div className="h-[90vh] w-full bg-hero-pattern-2 bg-cover bg-center m-0 p-0"></div>
        <div className="h-[90vh] w-full bg-hero-pattern-3 bg-cover bg-center m-0 p-0"></div> */}
      </Slider>
      <div className="absolute top-0 left-0 h-[90.5vh] w-full z-20 backdrop-opacity-5 backdrop-invert bg-black/40 opacity-80"></div>
      <div className="text-center space-y-4 md:space-y-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <h4 className="text-xl md:text-2xl uppercase font-Lora">
          Vb Ceramic Consultants
        </h4>
        <div className="space-y-1 md:space-y-3">
          <h3 className="font-Lora text-[32px] md:text-[40px] tracking-tight mt-2">
            Tailor Made
          </h3>
          <Carousel />
        </div>
        <div className="flex justify-center items-center gap-6">
          <Btn2
            Hbgcolor={"bg-white"}
            textColor={"text-white"}
            HtextColor={"text-warning"}
            bColor={"border-white"}
            title={"Our Products"}
            href={"/products"}
            background={"backdrop-blur-md bg-black/30"}
          />
          <Btn2
            Hbgcolor={"bg-info hover:border-info "}
            textColor={"text-white"}
            HtextColor={"text-white"}
            bColor={"border-white"}
            title={"Contact Us"}
            href={"/contact"}
            background={"backdrop-blur-md bg-black/30"}
          />
        </div>
      </div>
      <Mylink
        to="client"
        spy={true}
        smooth={true}
        offset={20}
        duration={800}
        className={`absolute bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2 block rounded-full p-[18px] border border-secondary hover:bg-white text-center text-base duration-700 delay-75 font-urbanist capitalize w-max group cursor-pointer z-30 backdrop-blur-md bg-black/30`}
      >
        <div className={`h-6 w-full overflow-hidden`}>
          <h4
            className={`transition translate-y-0 group-hover:-translate-y-20 duration-700`}
          >
            <HiOutlineArrowNarrowDown className="h-7 w-7 text-secondary " />
          </h4>
          <h4
            className={`translate-y-20 transition group-hover:-translate-y-[30px] duration-700`}
          >
            <HiOutlineArrowNarrowDown className="h-7 w-7 text-warning" />
          </h4>
        </div>
      </Mylink>
    </section>
  );
};

export default Hero;
