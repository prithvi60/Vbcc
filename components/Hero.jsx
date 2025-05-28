"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  HeroBox,
  HeroBoxBottom,
  HeroBoxBottomMobile,
  HeroBoxMobile,
} from "@/svg_components/LandingHeroBox";
import Statistics from "./Statistics";
import { MdDoubleArrow, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import { heroSlider } from "@/libs/otherPage";
import { HeroComponent } from "./homePageComponents/HeroComponents";
import { Link as LinkScroll } from "react-scroll";

const Hero = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [nav3, setNav3] = useState(null);
  const [loading, setLoading] = useState(true);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  let sliderRef3 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
    setNav3(sliderRef3);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SamplePrevArrow loading={loading} />,
    prevArrow: <SampleNextArrow loading={loading} />,
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <section className="relative z-0 w-full h-full mb-10 text-white lg:mb-24">
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        <div className="relative w-full h-[1150px] md:h-[850px] slider-container lg:h-[1000px] xl:h-[1200px] hero-mask_home -rotate-[0.1deg] -mt-[3px] overflow-hidden">
          {loading && (
            <div className="absolute w-full h-[1150px] md:h-[85vw] lg:h-[1000px] xl:h-[1200px] overflow-hidden">
              <Image
                fill
                src="https://cdn.webibee.com/vbcc/homepage/dental%20-hero.png"
                alt="Loading..."
                title="loading"
                className="object-contain object-center blur-lg brightness-[0.15]"
              />
            </div>
          )}
          <Slider
            arrows={false}
            asNavFor={nav2}
            waitForAnimate={false}
            fade={true}
            draggable={false}
            autoplaySpeed={2000}
            ref={(slider) => (sliderRef1 = slider)}
          >
            {heroSlider.map((list, idx) => (
              <div
                key={idx}
                className="relative w-full h-[1150px] md:h-[85vw] slider-container lg:h-[1000px] xl:h-[1200px]"
              >
                <Image
                  alt="background image"
                  title="background image"
                  src={list.bgImg || heroSlider[0].bgImg}
                  fill
                  className="z-0 object-cover object-center brightness-[0.30]"
                  onLoad={handleImageLoad}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="absolute z-20 w-11/12 md:w-[95%] -translate-x-1/2 -translate-y-1/2 top-[55%] md:top-1/2 left-1/2 font-Montserrat ">
          <div className="flex flex-col items-center w-full h-full gap-28 md:gap-0 lg:gap-6 lg:justify-between md:flex-row">
            <div className="relative flex items-center w-full gap-5 md:w-[55%] ml-9 md:ml-0 lg:w-3/5 md:gap-8 xl:gap-20">
              <HeroComponent />
              <div className="absolute hidden w-full md:block left-2 -top-20 md:-top-36 lg:-top-48 2xl:-top-60">
                <HeroBox className="h-10 md:h-40 lg:h-52 2xl:h-64 fill-none" />
              </div>
              <div className="absolute block w-full md:hidden left-2 -top-24">
                <HeroBoxMobile className="h-10 fill-none" />
              </div>
              <div className="w-full md:w-4/5">
                <div className="w-full space-y-2 md:space-y-4 md:w-4/5 xl:w-4/5">
                  <p className="w-full text-xs font-medium leading-tight capitalize md:text-sm xl:text-base">
                    Vbcc High temperature Instruments
                  </p>
                  <h2 className="text-[16px] font-bold tracking-wider md:text-[22px] xl:text-[38px] leading-tight uppercase">
                    TAILOR MADE
                  </h2>
                  <div className="w-full max-w-xl slider-container">
                    {loading && (
                      <h3 className="text-[24px] font-bold tracking-wider md:text-[40px] xl:text-[64px] md:leading-tight xl:leading-[4rem] blur-sm">
                        {heroSlider[0].categories}
                      </h3>
                    )}
                    <Slider
                      arrows={false}
                      asNavFor={nav3}
                      waitForAnimate={false}
                      fade={true}
                      speed={2000}
                      autoplaySpeed={2000}
                      draggable={false}
                      ref={(slider) => (sliderRef2 = slider)}
                    >
                      {heroSlider.map((list, idx) => (
                        <h3
                          className="text-[24px] font-bold tracking-wider md:text-[40px] xl:text-[64px] md:leading-tight -ml-[10px] xl:leading-[4rem]"
                          key={idx}
                        >
                          {list.categories}
                        </h3>
                      ))}
                    </Slider>
                  </div>
                  <div className="flex flex-col gap-5 w-max md:w-full lg:items-center lg:flex-row">
                    <LinkScroll
                      title="links"
                      to="explore"
                      spy={true}
                      smooth={true}
                      offset={-110}
                      duration={500}
                      className={`font-semibold w-fit transition-all flex items-center text-xs xl:text-base gap-3 capitalize duration-400 ease-linear hover:bg-primary bg-info text-white rounded-full cursor-pointer px-6 py-2`}
                    >
                      <h4>{"ENQUIRE NOW"}</h4>
                      <span>
                        <MdKeyboardDoubleArrowRight className="text-xl" />
                      </span>
                    </LinkScroll>
                    <Link title="categories" aria-label="category link" href={"/categories"}>
                      <button
                        className={`font-semibold w-fit transition-all flex items-center text-xs xl:text-base gap-3 duration-400 ease-linear capitalize bg-gradient-to-bl from-[#6b778cf8] to-[#ffffff3f] hover:bg-gradient-to-t hover:from-info hover:to-info text-white rounded-full cursor-pointer px-6 py-2`}
                      >
                        <h4>{"GO TO CATEGORY"}</h4>
                        <span>
                          <MdKeyboardDoubleArrowRight className="text-xl" />
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute z-10 hidden w-full md:block left-2 -bottom-14 md:-bottom-40 lg:-bottom-52 2xl:-bottom-64">
                <HeroBoxBottom className="h-10 md:h-40 lg:h-52 2xl:h-64 fill-none" />
              </div>
              <div className="absolute z-10 block w-full md:hidden left-2 -bottom-12">
                <HeroBoxBottomMobile className="h-10 md:h-40 lg:h-52 2xl:h-64 fill-none" />
              </div>
            </div>
            <div className="z-20 w-full h-full px-6 md:max-w-sm lg:max-w-96 xl:max-w-md lg:px-0 slider-container">
              <Slider
                asNavFor={nav1}
                ref={(slider) => (sliderRef3 = slider)}
                swipeToSlide={true}
                focusOnSelect={true}
                waitForAnimate={false}
                fade={true}
                {...settings}
              >
                {heroSlider.map((list, idx) => (
                  <div
                    className="rounded-lg w-full h-full bg-gradient-to-bl from-[#6b778cf8] to-[#ffffff3f] backdrop-blur-xl space-y-4 md:space-y-7 p-4 md:px-7 md:py-7 lg:px-10 lg:py-10"
                    key={idx}
                  >
                    <h5 className="w-3/4 text-lg font-medium tracking-wide lg:w-3/4 xl:text-xl ">
                      {`${list.categories}`}
                    </h5>
                    <div className="w-full h-full space-y-8 overflow-scroll lg:overflow-auto max-h-[430px] lg:max-h-full lg:h-full hideScroll">
                      {list.products.map((item, id) => (
                        <Link
                          title="categories"
                          aria-label="category products"
                          href={
                            item.type === "Dental PRODUCTS"
                              ? `/categories/dental/${item.productName.replace(/\s/g, "_")}`
                              : item.type === "AI PRODUCTS"
                                ? `/categories/analytical_instruments/${item.productName.replace(/\s/g, "_")}`
                                : item.type === "LAB PRODUCTS"
                                  ? `/categories/lab_equipment/${item.productName.replace(/\s/g, "_")}` : item.type === "BALL MILLS PRODUCTS"
                                    ? `/categories/material_processing_equipment/Ball_Mills/${item.productName.replace(/\s/g, "_")}`
                                    : item.type === "PRESSES PRODUCTS"
                                      ? `/categories/material_processing_equipment/Presses/${item.productName.replace(/\s/g, "_")}`
                                      : item.type === "EXTRUDERS PRODUCTS"
                                        ? `/categories/material_processing_equipment/Extruders/${item.productName.replace(/\s/g, "_")}`
                                        : `/categories/laboratory/${item.productName.replace(/\s/g, "_")}`
                          }
                          className="flex items-center gap-5 transition-all ease-linear duration-400 group"
                          key={id}
                        >
                          <div className="relative px-6 py-6 rounded-lg bg-info">
                            <div className="relative top-6 size-16 xl:size-24">
                              <Image
                                alt="sample image"
                                title="sample image"
                                fill
                                priority
                                src={item.img}
                                className="object-contain object-center"
                              />
                            </div>
                            <h5 className="absolute top-3 left-3 text-[9px] lg:text-xs border border-white px-3 py-1.5">
                              IN STOCK
                            </h5>
                          </div>
                          <div className="space-y-2 lg:space-y-3">
                            <h4 className="text-xs font-medium tracking-wide uppercase">
                              {item.type}
                            </h4>
                            <h5 className="flex items-center gap-2 text-sm font-semibold tracking-wide lg:text-lg">
                              {item.productName}
                              <span>
                                <MdDoubleArrow className="text-2xl text-info" />
                              </span>
                            </h5>
                            {/* <div>
                              <button className="hidden w-full px-5 py-2 text-xs bg-transparent border border-white rounded-full xl:w-max group-hover:bg-info group-hover:block">
                                Request a quote
                              </button>
                            </div> */}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <Statistics />
    </section>
  );
};

export default Hero;

function SampleNextArrow(props) {
  const { onClick, loading } = props;
  return (
    <div
      className={`${loading && "hidden"} size-6 absolute top-7 lg:top-10 right-20 xl:right-24 px-5 py-3 z-30 border-l rounded-l-xl border-y cursor-pointer hover:bg-info backdrop-blur-xl`}
      onClick={onClick}
    >
      <Image
        alt="next arrow"
        title="next arrow"
        fill
        priority
        src={"/prev arrow.png"}
        className="object-contain object-center p-2"
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick, loading } = props;
  return (
    <div
      className={`${loading && "hidden"} size-6 absolute px-5 py-3 border-r rounded-r-xl border-y cursor-pointer hover:bg-info top-7 right-10 xl:right-14 lg:top-10 z-30 backdrop-blur-xl`}
      onClick={onClick}
    >
      <Image
        alt="prev arrow"
        title="prev arrow"
        fill
        priority
        src={"/next arrow.png"}
        className="object-contain object-center p-2"
      />
    </div>
  );
}
