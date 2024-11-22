"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
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

const Hero = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [nav3, setNav3] = useState(null);
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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="relative z-0 w-full h-full mb-10 text-white lg:mb-24">
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        <div className="relative w-full h-[150vh] md:h-[85vh] slider-container lg:h-[110vh] xl:h-[142vh] hero-mask_home overflow-hidden">
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
              <div key={idx} className="relative w-full h-[150vh] md:h-[85vh] slider-container lg:h-[110vh] xl:h-[142vh]">
                <Image
                  alt="background image"
                  src={list.bgImg || heroSlider[0].bgImg}
                  fill
                  className="z-0 object-cover object-center brightness-[0.30]"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="absolute z-20 w-11/12 md:w-[95%] -translate-x-1/2 -translate-y-1/2 top-[55%] md:top-1/2 left-1/2 font-Montserrat ">
          <div className="flex flex-col items-center w-full h-full gap-28 md:gap-0 lg:gap-6 lg:justify-between md:flex-row">
            <div className="relative flex items-center w-full gap-5 md:w-[55%] lg:w-3/5 md:gap-8 xl:gap-20">
              <ul className="flex flex-col items-center justify-center gap-3 -mt-10 md:-mt-0">
                <li>
                  <Link href={"https://www.linkedin.com/company/vbcc-hti/"} className="hover:animate-pulse" target="_blank">
                    <FaLinkedinIn className="text-base text-white md:text-2xl" />
                  </Link>
                </li>
                <li>
                  <Link href={"https://www.facebook.com/vbcc.hti/"} className="hover:animate-pulse " target="_blank">
                    <FaFacebookF className="text-base text-white md:text-2xl" />
                  </Link>
                </li>
                <li>
                  <Link href={"https://www.instagram.com/vbcc_hti/"} className="hover:animate-pulse " target="_blank">
                    <FaInstagram className="text-base text-white md:text-2xl" />
                  </Link>
                </li>
                <li>
                  <Link href={"www.youtube.com/@vbcc_hti"} className="hover:animate-pulse " target="_blank">
                    <FaYoutube className="text-base text-white md:text-2xl" />
                  </Link>
                </li>
                <li>
                  <Link href={"https://x.com/vbcc_hti"} className="hover:animate-pulse " target="_blank">
                    <FaXTwitter className="text-base text-white md:text-2xl" />
                  </Link>
                </li>
              </ul>
              <div className="absolute hidden w-full md:block left-2 -top-20 md:-top-36 lg:-top-48 2xl:-top-60">
                <HeroBox className="h-10 md:h-40 lg:h-52 2xl:h-64 fill-none" />
              </div>
              <div className="absolute block w-full md:hidden left-2 -top-24">
                <HeroBoxMobile className="h-10 fill-none" />
              </div>
              <div className="w-full md:w-4/5">
                <div className="w-full space-y-2 md:space-y-4 md:w-4/5 xl:w-4/5">
                  <p className="w-full text-xs font-medium leading-tight md:text-sm xl:text-base">
                    Vbcc High temperature Instruments
                  </p>
                  <h4 className="text-[16px] font-bold tracking-wider md:text-[22px] xl:text-[38px] leading-tight uppercase">
                    TAILOR MADE
                  </h4>
                  <div className="w-full max-w-2xl slider-container">
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
                        <h2 className="text-[24px] font-bold tracking-wider md:text-[40px] xl:text-[64px] md:leading-tight xl:leading-[4rem]" key={idx}>
                          {list.categories}
                        </h2>
                      ))}
                    </Slider>
                  </div>
                  <div className="flex flex-col gap-5 lg:items-center lg:flex-row">
                    <button
                      className={`font-semibold w-fit transition-all flex items-center text-xs xl:text-base gap-3 capitalize duration-400 ease-linear hover:bg-primary bg-info text-white rounded-full cursor-pointer px-6 py-2`}
                    >
                      <h4>{"ENQUIRE NOW"}</h4>
                      <span>
                        <MdKeyboardDoubleArrowRight className="text-xl" />
                      </span>
                    </button>
                    <Link href={"/categories/dental"}>
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
            <div className="z-20 w-full h-full max-w-sm px-6 lg:max-w-96 xl:max-w-md lg:px-0 slider-container">
              {/* <div className="w-full "> */}
              <Slider
                asNavFor={nav1}
                ref={(slider) => (sliderRef3 = slider)}
                swipeToSlide={true}
                focusOnSelect={true}
                // waitForAnimate={false}
                // fade={true}
                {...settings}
              >
                {heroSlider.map((list, idx) => (
                  <div className="rounded-lg w-full h-full bg-gradient-to-bl from-[#6b778cf8] to-[#ffffff3f] backdrop-blur-xl space-y-4 md:space-y-7 px-7 py-7 lg:px-10 lg:py-10" key={idx}>
                    <h4 className="w-3/4 text-lg font-medium tracking-wide lg:w-full xl:text-xl ">
                      {`${list.type} Furnaces`}
                    </h4>
                    <div className="w-full h-full space-y-8 overflow-scroll lg:overflow-auto max-h-[430px] lg:max-h-full lg:h-full hideScroll">
                      {list.products.map((item, id) => (
                        <div className="flex items-center gap-5 transition-all ease-linear duration-400 group" key={id}>
                          <div className="relative px-6 py-6 rounded-lg bg-info">
                            <div className="relative top-6 size-16 xl:size-24">
                              <Image alt="sample image" fill src={item.img} className="object-contain object-center" />
                            </div>
                            <h4 className="absolute top-3 left-3 text-[9px] lg:text-xs border border-white px-3 py-1.5">
                              IN STOCK
                            </h4>
                          </div>
                          <div className="space-y-2 lg:space-y-3">
                            <h6 className="text-xs font-medium tracking-wide uppercase">
                              {item.type}
                            </h6>
                            <h4 className="flex items-center gap-2 text-sm font-semibold tracking-wide lg:text-lg">
                              {item.productName}
                              <span>
                                <MdDoubleArrow className="text-2xl text-info" />
                              </span>
                            </h4>
                            <div>
                              <Link
                                href={""}
                                className="hidden w-full px-5 py-2 text-xs bg-transparent border border-white rounded-full xl:w-max group-hover:bg-info group-hover:block"
                              >
                                Request a quote
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Slider>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      <Statistics />
    </section >
  );
};

export default Hero;

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={"size-6 absolute top-7 lg:top-10 right-20 xl:right-24 px-5 py-3 border-l rounded-l-xl border-y cursor-pointer hover:bg-info backdrop-blur-xl"}
      onClick={onClick}
    >
      <Image alt="next arrow" fill src={"/prev arrow.png"} className="object-contain object-center p-2" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={"size-6 absolute px-5 py-3 border-r rounded-r-xl border-y cursor-pointer hover:bg-info top-7 right-10 xl:right-14 lg:top-10 z-30 backdrop-blur-xl"}
      onClick={onClick}
    >
      <Image alt="prev arrow" fill src={"/next arrow.png"} className="object-contain object-center p-2" />
    </div>
  );
}



// const products = [
//   { productName: "APM Kanthal", type: "CERAMIC PRODUCTS" },
//   { productName: "Alumina - Boats And Crucibles ", type: "CERAMIC PRODUCTS" },
//   { productName: "Alumina - Boats And Crucibles", type: "CERAMIC PRODUCTS" },
//   { productName: "Graphite Heating Elements", type: "CERAMIC PRODUCTS" },
// ];

// <section className="h-[90vh] w-full relative">
//   {client ? (
//     <Carousel
//       showArrows={false}
//       showThumbs={false}
//       showStatus={false}
//       showIndicators={false}
//       className="!z-0"
//       autoPlay={client}
//       interval={3000}
//       infiniteLoop
//       axis={"vertical"}
//       stopOnHover={false}
//       swipeable={false}
//       animationHandler={customVerticalAnimation}
//     >
//       {/* Relative is affecting height */}
//       <div className="h-[90vh] relative m-0">
//         <Image
//           src={"https://ik.imagekit.io/webibee/VBCC/hero-bg.png"}
//           alt="test"
//           fill
//           sizes={"100vw"}
//           priority={true}
//           quality={50}
//           placeholder="blur"
//         blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
//           className="object-cover object-center brightness-50 aspect-auto"
//         />
//       </div>
//       <div className="h-[90vh] relative m-0">
//         <Image
//           src={"https://ik.imagekit.io/webibee/VBCC/hero-bg-2.png"}
//           alt="test1"
//           fill
//           sizes={"100vw"}
//           quality={50}
//           placeholder="blur"
//           blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
//           className="object-cover object-center brightness-50"
//         />
//       </div>
//       <div className="h-[90vh] relative m-0">
//         <Image
//           src={"https://ik.imagekit.io/webibee/VBCC/hero-bg-3.png"}
//           alt="test2"
//           fill
//           quality={50}
//           sizes={"100vw"}
//           placeholder="blur"
//         blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
//           className="object-cover object-center brightness-50"
//         />
//       </div>
//       {/* <div className="h-[90vh] relative m-0">
//         <Image
//           src={"https://ik.imagekit.io/webibee/VBCC/hero-bg.png"}
//           alt="test"
//           fill
//           sizes={"100vw"}
//           priority={true}
//           quality={50}
//           placeholder="blur"
//           blurDataURL={
//             "data:image/webp;base64,UklGRhoDAABXRUJQVlA4WAoAAAAgAAAACgEAsQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggLAEAALATAJ0BKgsBsgA/cbbSZDStqSah0ukCkC4JaW7dX1o7hfYViHTBHkXM9fsZh9I3yL3TE9mLEOmaaltvKxPTIg5NpWQbie0x5u56L1jvwR4b7xVqLsfk9TKdSdmF4sptnlhL+8qw2lSemJ+l257nlOpOyBuy+NRWlvN3Vd+sqOqoYNYezdoI/Suz15pNTup7+6JLbG502IIN2V3Y71QpzPIRcVguZAAAeY3OK5Da/CFfpIwrqBCDMsql1ZAAAAbhqwaL0hRkqTCpSF83jQXmSKGvMYZ8LDRk3lZ1u+fkPyatDPTugyZEJMTyX5TvfMnVCry1CNC1s5XTiZiASWuoLfzCIwctXPVabwp2zExSI/Uud7cy0iFcfMW+tXlM9ulrulPeGaAYKHmATdIAAA=="
//           }
//           className="object-cover object-center brightness-50 aspect-auto"
//         />
//       </div> */}
//     </Carousel>
//   ) : (
//     <div className="h-[90vh] relative m-0">
//       <Image
//         src={"https://ik.imagekit.io/webibee/VBCC/hero-bg.png"}
//         alt="test"
//         fill
//         sizes={"100vw"}
//         priority={true}
//         quality={50}
//         placeholder="blur"
//         blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
//         className="object-cover object-center brightness-50 aspect-auto"
//       />
//     </div>
//   )}
//   <div className="absolute z-30 text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//     <h4 className="mb-4 text-lg uppercase font-urbanist md:mb-6">
//       VbCC High temperature instruments
//     </h4>
//     <p className="font-Lora text-[32px] md:text-[40px] tracking-tight mt-2">
//       Tailor Made
//     </p>
//     <InnerCarousel />
//     <span className="flex items-center justify-center gap-6">
//       <Btn2
//         Hbgcolor={"bg-white"}
//         textColor={"text-white"}
//         HtextColor={"text-warning"}
//         bColor={"border-white"}
//         title={"Our Products"}
//         href={"/products"}
//         background={"backdrop-blur-md bg-black/30"}
//       />
//       <Btn2
//         Hbgcolor={"bg-info hover:border-info "}
//         textColor={"text-white"}
//         HtextColor={"text-white"}
//         bColor={"border-white"}
//         title={"Contact Us"}
//         href={"/contact"}
//         background={"backdrop-blur-md bg-black/30"}
//       />
//     </span>
//   </div>
//   {client && (
//     <Mylink
//       aria-label="back to client"
//       to="client"
//       name="gotoclient"
//       id="gotoclient"
//       href="#client"
//       spy={true}
//       smooth={true}
//       offset={20}
//       duration={800}
//       className={`absolute bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2 block rounded-full p-3 border border-secondary hover:bg-white text-center text-base duration-700 delay-75 font-urbanist capitalize w-max group cursor-pointer z-30 backdrop-blur-md bg-black/30`}
//     >
//       <div className={`h-[26px] w-full overflow-hidden`}>
//         <h4
//           className={`transition translate-y-0 group-hover:-translate-y-20 duration-700`}
//         >
//           <HiOutlineArrowNarrowDown className="w-6 h-6 md:h-7 md:w-7 text-secondary " />
//         </h4>
//         <h4
//           className={`translate-y-20 transition group-hover:-translate-y-[30px] duration-700`}
//         >
//           <HiOutlineArrowNarrowDown className="w-6 h-6 md:h-7 md:w-7 text-warning" />
//         </h4>
//       </div>
//     </Mylink>
//   )}
// </section>


// LinkedIn - https://www.linkedin.com/company/vbcc-hti/
// Facebook - https://www.facebook.com/vbcc.hti/
// Instagram - https://www.instagram.com/vbcc_hti/
// YouTube - www.youtube.com/@vbcc_hti
// X - https://x.com/vbcc_hti 