"use client";
import { m, AnimatePresence, LazyMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const loadFeatures = () =>
  import("@/libs/framer_feature").then((res) => res.default);

const Visitation = ({ title, shortDesc, imgSrc, scrollId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const slideVariants = {
    slide: (direction) => {
      return { x: direction > 0 ? 520 : -520 };
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        y: { type: "spring", stiffness: 420, damping: 50 },
        duration: 1,
        opacity: { duration: 1 },
      },
    },
    exit: (direction) => {
      return {
        y: direction > 0 ? -520 : 520,
        opacity: 0,
        // scale: 0.9,
        transition: {
          y: { type: "spring", stiffness: 420, damping: 50 },
          duration: 0.5,
          opacity: { duration: 1.5 },
        },
      };
    },
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex(() =>
      currentIndex === imgSrc.length - 1 ? 0 : currentIndex + 1
    );
  };
  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(() =>
      currentIndex === 0 ? imgSrc.length - 1 : currentIndex - 1
    );
  };
  const handleThumbnail = (id) => {
    setDirection(id == currentIndex ? -1 : 1);
    setCurrentIndex(id);
  };
  return (
    <section
      className="px-5 py-10 md:py-[60px] xl:px-[60px] md:px-10 bg-primary"
      id={scrollId}
    >
           <div className="md:hidden w-full md:w-1/2 lg:w-[65%]">
          <div className="relative h-[225px] md:h-[455px] w-full overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} custom={direction}>
              <LazyMotion features={loadFeatures}>
                <m.img
                  // fill
                  src={imgSrc[currentIndex]}
                  alt="Logo"
                  key={imgSrc[currentIndex]}
                  className="absolute w-full h-full object-cover object-center "
                  variants={slideVariants}
                  initial="slide"
                  animate="visible"
                  transition={{ duration: 1 }}
                  exit="exit"
                  custom={direction}
                />
              </LazyMotion>
            </AnimatePresence>
          </div>
          {/* <div className="relative h-[225px] md:h-[455px] w-full overflow-hidden rounded-3xl">
              <Image
                fill
                src={imgSrc[currentIndex]}
                alt="Logo"
                key={imgSrc[currentIndex]}
                className="absolute w-full h-full object-cover object-center "
              />
          </div> */}
        </div>
      <div className="w-full flex flex-col md:flex-row md:items-start gap-6 xl:gap-8 text-white">
        <div className="w-full md:w-1/2 xl:w-[35%] md:space-y-8">
          <div className="hidden md:flex flex-wrap items-center gap-2.5">
            {imgSrc.map((img, idx) => (
              <div
                className={`relative md:h-[105px] md:w-[160px] lg:w-[185px] xl:w-[205px] 2xl:w-[230px] cursor-pointer overflow-hidden rounded-2xl ${
                  currentIndex === idx
                    ? " rounded-2xl border-2 border-info"
                    : " "
                } `}
                key={idx}
                onClick={() => handleThumbnail(idx)}
              >
                <Image
                  fill
                  src={img}
                  alt="Logo"
                  className="absolute object-cover hover:scale-125 transition-all duration-1000"
                />
              </div>
            ))}
          </div>
          <div className="block space-y-10 md:space-y-24 h-full w-full">
            <h4 className="font-Lora text-xl md:text-[40px] pt-8 md:pt-0">{title}</h4>
            <div className="flex justify-between items-center">
              <p className="font-urbanist text-base w-3/5">{shortDesc}</p>
              {/* Buttons */}
              <div className="flex items-center gap-3">
                <div
                  className="p-4 rounded-full cursor-pointer border border-secondary hover:bg-warning block duration-700 delay-75 w-max group"
                  onClick={handlePrev}
                >
                  <div className={`h-6 w-full overflow-hidden`}>
                    <h4
                      className={`transition translate-y-0 group-hover:-translate-y-20 duration-700`}
                    >
                      <GoArrowLeft className="h-6 w-6 text-secondary" />
                    </h4>
                    <h4
                      className={`translate-y-20 transition group-hover:-translate-y-[22px] duration-700`}
                    >
                      <GoArrowLeft className="h-6 w-6 text-secondary" />
                    </h4>
                  </div>
                </div>
                <div
                  className="p-4 rounded-full cursor-pointer border border-secondary hover:bg-warning block duration-700 delay-75 w-max group"
                  onClick={handleNext}
                >
                  <div className={`h-6 w-full overflow-hidden`}>
                    <h4
                      className={`transition translate-y-0 group-hover:-translate-y-20 duration-700`}
                    >
                      <GoArrowRight className="h-6 w-6 text-secondary" />
                    </h4>
                    <h4
                      className={`translate-y-20 transition group-hover:-translate-y-[22px] duration-700`}
                    >
                      <GoArrowRight className="h-6 w-6 text-secondary" />
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-full md:w-1/2 lg:w-[65%]">
          <div className="relative h-[225px] md:h-[455px] w-full overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} custom={direction}>
              <LazyMotion features={loadFeatures}>
                <m.img
                  // fill
                  src={imgSrc[currentIndex]}
                  alt="Logo"
                  key={imgSrc[currentIndex]}
                  className="absolute w-full h-full object-cover object-center "
                  variants={slideVariants}
                  initial="slide"
                  animate="visible"
                  transition={{ duration: 1 }}
                  exit="exit"
                  custom={direction}
                />
              </LazyMotion>
            </AnimatePresence>
          </div>
          {/* <div className="relative h-[225px] md:h-[455px] w-full overflow-hidden rounded-3xl">
              <Image
                fill
                src={imgSrc[currentIndex]}
                alt="Logo"
                key={imgSrc[currentIndex]}
                className="absolute w-full h-full object-cover object-center "
              />
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default Visitation;
