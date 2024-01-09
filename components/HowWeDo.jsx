"use client";
import { data } from "@/libs/data";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import { ProgressBar } from "./ProgressBar";
const ImgSlider =[
  {img: "https://ik.imagekit.io/webibee/VBCC/VBCC.png",title:"Vbcc"},
  {img: "/HWD1.png",title:"Strategize"},
  {img: "/HWD2.png",title:"Design"},
  {img: "/HWD3.png",title:"Engineering"},
]

const HowWeDo = () => {
  const [slide, setSlide] = useState(0);
  const slideVariants = {
    entry:{
      y: 70
    },
    visible: {
      y: 0,
    },
    exit :{
      y:  -70,
    }
    ,
  };
  return (
    <section className="py-16 px-6 md:px-5 lg:px-10 lg:py-20 xl:px-16 xl:py-20 md:bg-secondary xl:bg-transparent">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
        <div className="sticky top-4 lg:top-20 lg:w-1/2 xl:w-2/5 h-full w-full">
          <div className="relative rounded-lg lg:rounded-none py-6 px-4 bg-primary flex flex-col lg:flex-row lg:items-center gap-4">
          <ProgressBar slide={slide}/>
            <AnimatePresence initial={false}>
          <div className="h-full w-full overflow-hidden">
            <div className="relative h-[182px] lg:h-[400px] w-full overflow-hidden" >
              <motion.img
                // fill
                loading="lazy"
                variants={slideVariants}
                initial="entry"
                animate="visible"
                transition={{duration : 1}}
                exit="exit"
                // custom={direction} 
                key={slide}
                src={ImgSlider[slide].img}
                alt="Logo"
                className="absolute w-full h-full object-cover object-center"
              />
            </div>
            <h3 className="text-[32px] absolute top-[48%] left-1/4 md:left-[40%] font-Lora">
               {ImgSlider[slide].title}
            </h3>
          </div>
            </AnimatePresence>
            </div>
        </div>
        <div className="w-full lg:w-1/2 xl:w-3/5 space-y-0.5">
          <div className="py-[70px] px-5 lg:py-48  bg-primary lg:bg-transparent text-secondary lg:text-warning  rounded-lg lg:rounded-none sticky top-80 lg:static">
            <p className="font-Lora text-[40px] tracking-tighter">
              How we do it?
            </p>
          </div>
          {data.map((item, idx) => (
            <InView
              as="div"
              threshold={1}
              // rootMargin="50px"
              triggerOnce={true}
              onChange={(inView, entry) => {
                // console.log("Inview:", inView, item.title, entry);
                setSlide(
                  entry.isIntersecting && item.title === "Working Strategy"
                    ? 1
                    : entry.isIntersecting && item.title === "Design"
                    ? 2
                    : entry.isIntersecting && item.title === "Engineering"
                    ? 3
                    : 0
                );
              }}
              // py-[70px] px-5 lg:py-32
              className="py-[70px] px-5 font-urbanist bg-primary lg:bg-secondary xl:bg-white text-secondary lg:text-warning  rounded-lg lg:rounded-none space-y-8 sticky top-80 lg:static"
              key={idx}
            >
              <h4 className="font-Lora text-[32px] tracking-tighter">
                {item.title}
              </h4>
              <p className="lg:text-danger">{item.desc}</p>
              <Link
                href={"/contact"}
                className={`hidden lg:block px-6 py-4 rounded-full border group border-warning bg-transparent hover:bg-primary text-center text-base duration-700 delay-75 font-urbanist capitalize w-max`}
              >
                <div className={`h-6 w-full overflow-hidden`}>
                  <h4
                    className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-warning`}
                  >
                    {item.btn}
                  </h4>
                  <h4
                    className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-white`}
                  >
                    {item.btn}
                  </h4>
                </div>
              </Link>
              <Link
                href={"/"}
                className={`hidden md:flex lg:hidden px-6 py-4 rounded-full border group border-white bg-transparent hover:bg-white text-center text-base duration-700 delay-75 font-urbanist capitalize w-max`}
              >
                <div className={`h-6 w-full overflow-hidden`}>
                  <h4
                    className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-white`}
                  >
                    {item.btn2}
                  </h4>
                  <h4
                    className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-warning`}
                  >
                    {item.btn2}
                  </h4>
                </div>
              </Link>
              <Link
                href={"/"}
                className={`block md:hidden px-6 py-4 rounded-full border group border-white bg-transparent hover:bg-white text-center text-base duration-700 delay-75 font-urbanist capitalize w-max`}
              >
                <div className={`h-6 w-full overflow-hidden`}>
                  <h4
                    className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-white`}
                  >
                    {item.btn3}
                  </h4>
                  <h4
                    className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-warning`}
                  >
                    {item.btn3}
                  </h4>
                </div>
              </Link>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeDo;
