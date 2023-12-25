"use client";

import { testimonial, testimonials } from "@/libs/data";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FsLightbox from "fslightbox-react";

export const TestimonialSection = () => {
  const [selectedItem, SetselectedItem] = useState(0);
  const [toggler, setToggler] = useState(false);
  const slideVariants = {
    slide: {
      // x: 1000,
      opacity: 0,
    },
    visible: {
      // x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.2,
        opacity: { duration: 0.5 },
      },
      // transition :{
      //   x: {type : "spring",stiffness: 400,damping: 50,},
      //   opacity :{duration: 0.5}
      // }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        delay: 0.4,
        opacity: { duration: 0.5 },
      },
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
    <section className="w-full h-[99vh] md:h-[90vh] px-5 py-10 md:px-10 md:py-20 lg:px-[60px] bg-[url('/Testimonials-BG.png')] bg-cover bg-center flex flex-col gap-6 md:gap-0 md:flex-row md:justify-between items-start relative">
      <div className="absolute top-0 left-0 h-[99vh] md:h-[90vh] w-full z-20 backdrop-opacity-5 backdrop-invert bg-black/40 opacity-80"></div>
      <div className="w-full md:w-1/2 xl:w-[65%] space-y-9 z-30">
        <h2 className="font-Lora text-2xl md:text-4xl xl:text-6xl w-full">
          Testimonials
        </h2>
        <div className="w-full md:w-96 h-full md:h-auto overflow-hidden flex gap-4">
          <div className="flex flex-nowrap md:flex-wrap items-center gap-4 h-[70px] md:h-full animate-horizontal_carousel md:animate-none pause">
            {testimonials.map((item, idx) => (
              <div
                className={`p-1 rounded-md ${
                  idx === selectedItem
                    ? "bg-gradient-to-br from-[#A5005A] to-[#5A00A4] "
                    : " "
                } `}
                key={item.id}
              >
                <div
                  className="relative h-[70px] w-[90px] bg-white rounded-md cursor-pointer"
                  onClick={() => handleChangePDF(idx)}
                >
                  <Image
                    fill
                    src={item.logo}
                    alt="Logo"
                    className="absolute object-contain object-center p-3"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {/* bg-white px-12 py-4 rounded-3xl */}
        <div className="md:w-[35%] w-full h-full z-30 flex items-center justify-start md:justify-end">
          <motion.div
            className="relative h-full w-[390px]  overflow-hidden cursor-pointer"
            // bg-white px-4 rounded-lg
            onClick={() => setToggler(!toggler)}
            variants={slideVariants}
            initial="slide"
            animate="visible"
            exit="exit"
            key={selectedItem}
          >
            {/* <motion.img
              src={testimonials[selectedItem].pdf}
              alt="Logo"  
              key={selectedItem}
              className="w-full h-full object-contain object-center"
              variants={slideVariants}
              initial="slide"
              animate="visible"
              exit="exit"
            /> */}
            <Image
              fill
              src={testimonials[selectedItem].pdf}
              alt="Logo"
              className="w-full h-full object-contain object-center py-4"
            />
          </motion.div>
        </div>
      </AnimatePresence>
      <FsLightbox
        exitFullscreenOnClose={true}
        toggler={toggler}
        sources={[testimonials[selectedItem].pdf]}
        key={selectedItem}
        type="image"
      />
    </section>
  );
};
