"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const imgSrc = [
  "/gallery01.png",
  "/gallery02.png",
  "/gallery03.png",
  "/gallery04.png",
];

export const Culture = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const slideVariants = {
    slide: (direction) => {
      return { y: direction > 0 ? 1000 : -1000, opacity: 0 };
    },
    visible: {
      y: 0,
      opacity: 1,
      transition :{
        y: {type : "spring",stiffness: 400,damping: 50,},
        opacity :{duration: 0.5}
      }
    },
    exit: (direction) => {
      return {
        y: direction > 0 ? -1000 : 1000,
        opacity: 0,
        transition :{
          y: {type : "spring",stiffness: 400,damping: 50,},
          opacity :{duration: 0.5}
        }
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
    <section className="px-5 py-10 md:py-[60px] md:px-[60px]" id="culture">
      <div className="w-full xl:px-10 flex flex-col md:flex-row md:items-start gap-6 xl:gap-8 text-warning">
        <div className="w-full md:w-1/2 xl:w-[65%]">
          <AnimatePresence initial={false} custom={direction}>
            <div className="relative h-[225px] md:h-[455px] w-full overflow-hidden rounded-3xl">
              <motion.img
                // fill
                src={imgSrc[currentIndex]}
                alt="Logo"
                key={imgSrc[currentIndex]}
                className="w-full h-full object-cover object-center "
                variants={slideVariants}
                initial="slide"
                animate="visible"
                exit="exit"
                custom={direction}
              />
            </div>
          </AnimatePresence>
        </div>
        <div className="w-full md:w-1/2 xl:w-[35%] md:space-y-8">
          <div className="hidden md:flex flex-wrap items-center gap-2.5">
            {imgSrc.map((img, idx) => (
              <div
                className={`relative md:h-[105px] md:w-[160px]  lg:w-[195px] cursor-pointer ${
                  currentIndex === idx ? " rounded-2xl border-2 border-info" : " "
                } `}
                key={idx}
                onClick={() => handleThumbnail(idx)}
              >
                <Image
                  fill
                  src={img}
                  alt="Logo"
                  className="absolute object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
          <div className="block space-y-10 md:space-y-24 h-full w-full">
            <h4 className="font-Lora text-xl md:text-[40px]">Culture</h4>
            <div className="flex justify-between items-center">
              <p className="font-urbanist text-base w-3/5">
                Redefining what it means to be a team. Showcasing our Work life
                through the years.
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="p-4 rounded-full cursor-pointer border border-warning active:border-warning"
                  onClick={handlePrev}
                >
                  <GoArrowLeft className="h-5 w-5 text-warning active:text-warning" />
                </div>
                <div
                  className="p-4 rounded-full cursor-pointer border border-warning active:border-warning"
                  onClick={handleNext}
                >
                  <GoArrowRight className="h-5 w-5 text-warning active:text-warning" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
