"use client";
import othersData from "@/libs/others.json";
import Image from "next/image";
import { useState } from "react";
import { m, AnimatePresence, LazyMotion } from "framer-motion";
import ReactSimplyCarousel from "react-simply-carousel";

import dynamic from "next/dynamic";
import { customHorizontalAnimation } from "@/libs/slider_animation";
// Make sure to return the specific export containing the feature bundle.
const loadFeatures = () =>
  import("../../libs/framer_feature").then((res) => res.default);
const FsLightbox = dynamic(() => import("fslightbox-react"), { ssr: false });
export const TestimonialSection = () => {
  const [selectedItem, SetselectedItem] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const fsTool = othersData.testimonials.map((val) => val.pdf);
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: selectedItem + 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number + 1,
    });
  }

  const slideVariants = {
    slide: {
      // x: 1000,
      opacity: 0,
    },
    visible: {
      // x: 0,
      opacity: 1,
      // transition: {
      //   duration: 1,
      //   delay: 0.2,
      //   opacity: { duration: 0.5 },
      // },
      // transition :{
      //   x: {type : "spring",stiffness: 400,damping: 50,},
      //   opacity :{duration: 0.5}
      // }
    },
    exit: {
      opacity: 0,
      // scale: 0.8,
      // transition: {
      //   duration: 0.5,
      //   delay: 0.4,
      //   opacity: { duration: 0.5 },
      // },
      // transition :{
      //   duration: 0.5,
      //   x: {type : "spring",stiffness: 400,damping: 50,},
      //   opacity :{duration: 0.5}
      // }
    },
  };
  const handleChangePDF = (id) => {
    SetselectedItem(id);
  };

  return (
    <section className="w-full h-screen md:h-[90vh] px-5 py-10 md:px-10 lg:py-20 lg:px-[60px] bg-[url('https://ik.imagekit.io/webibee/VBCC/Testimonials-BG.png')] bg-cover bg-center flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-between items-start relative">
      <div className="absolute top-0 left-0 h-screen lg:h-[90vh] w-full z-20 backdrop-opacity-5 backdrop-invert bg-black/40 opacity-80"></div>
      <div className="w-full lg:w-1/2 xl:w-[65%] space-y-9 z-30">
        <h2 className="font-Lora text-2xl lg:text-4xl xl:text-6xl w-full">
          Testimonials
        </h2>
        <div className="w-full lg:w-96 2xl:w-1/2 lg:h-auto overflow-hidden flex gap-4">
          <div className="hidden md:flex flex-nowrap lg:flex-wrap items-center gap-3 h-[70px] lg:h-full animate-horizontal_carousel lg:animate-none pause mt-2">
            {othersData.testimonials.map((item, idx) => (
              <div
                className={`p-1 rounded-md ${
                  idx === selectedItem
                    ? "bg-gradient-to-br from-[#A5005A] to-[#5A00A4] "
                    : " "
                } `}
                key={item.id}
              >
                <div
                  className="relative h-[70px] w-[90px] 2xl:h-[80px] 2xl:w-[100px] bg-white rounded-md cursor-pointer"
                  onClick={() => handleChangePDF(idx)}
                >
                  <Image
                    fill
                    src={item.logo}
                    placeholder="blur"
                    blurDataURL={`${item.logo}?tr=bl-100`}
                    alt="Logo"
                    className="object-contain object-center p-3"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:hidden">
          <ReactSimplyCarousel
            activeSlideIndex={activeSlideIndex}
            updateOnItemClick={true}
            persistentChangeCallbacks={true}
            onRequestChange={setActiveSlideIndex}
            onAfterChange={(o) => {
              // console.log("change", o, selectedItem);
              SetselectedItem(o);
            }}
            itemsToShow={4}
            itemsToScroll={1}
            speed={1600}
            easing={"linear"}
            infinite
            autoplay={true}
            autoplayDelay={1500}
            autoplayDirection={"forward"}
          >
            {othersData.testimonials.map((item, idx) => (
              <div
                className={`p-1 rounded-md ${
                  idx === selectedItem
                    ? "bg-gradient-to-br from-[#A5005A] to-[#5A00A4] "
                    : " "
                } `}
                key={item.id}
              >
                <div
                  className="relative h-[70px] w-[90px] 2xl:h-[80px] 2xl:w-[100px] bg-white rounded-md cursor-pointer"
                  onClick={() => handleChangePDF(idx)}
                >
                  <Image
                    fill
                    src={item.logo}
                    placeholder="blur"
                    blurDataURL={`${item.logo}?tr=bl-100`}
                    alt="Logo"
                    className="object-contain object-center p-3"
                  />
                </div>
              </div>
            ))}
          </ReactSimplyCarousel>
        </div>
      </div>
      <AnimatePresence initial={true}>
        <div className="lg:w-1/2 w-full h-full z-30 flex items-center justify-start lg:justify-end">
          <LazyMotion features={loadFeatures}>
            <m.div
              className="relative h-full w-full  overflow-hidden cursor-pointer"
              onClick={() => openLightboxOnSlide(selectedItem)}
              variants={slideVariants}
              initial="slide"
              animate="visible"
              transition={{ duration: 1.5 }}
              exit="exit"
              key={selectedItem}
            >
              <Image
                fill
                src={othersData.testimonials[selectedItem].pdf}
                placeholder="blur"
                blurDataURL={`${othersData.testimonials[selectedItem].pdf}?tr=bl-20`}
                sizes="(min-width: 1320px) 390px, (min-width: 1040px) calc(26.15vw + 50px), (min-width: 460px) 390px, calc(92.86vw - 19px)"
                alt="Logo"
                className="w-full h-full object-contain object-center rounded-xl"
              />
            </m.div>
          </LazyMotion>
        </div>
      </AnimatePresence>
      <FsLightbox
        exitFullscreenOnClose={true}
        toggler={lightboxController.toggler}
        sources={fsTool}
        type="image"
        slide={lightboxController.slide}
      />
    </section>
  );
};
