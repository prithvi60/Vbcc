"use client";
import { data } from "@/libs/data";
import { Progress } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useCallback, useState } from "react";
// import { useInView } from 'react-intersection-observer';
import { InView } from "react-intersection-observer";
const ImgSlider =[
  {img: "https://ik.imagekit.io/webibee/VBCC/VBCC.png",title:"Vbcc"},
  {img: "/HWD1.png",title:"Strategize"},
  {img: "/HWD2.png",title:"Design"},
  {img: "/HWD3.png",title:"Engineering"},
]

const HowWeDo = () => {
  const [slide, setSlide] = useState(ImgSlider[0]);
  // console.log(slide.title);
  return (
    <section className="py-16 px-6 md:px-5 lg:px-10 lg:py-20 xl:px-16 xl:py-20 md:bg-secondary xl:bg-transparent">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
        <div className=" rounded-lg lg:rounded-none py-6 px-4 bg-primary w-full lg:w-1/2 xl:w-2/5 flex flex-col lg:flex-row lg:items-center gap-4 lg:sticky lg:top-6">
          <div className="flex flex-row items-center lg:flex-col lg:items-center gap-3 h-full">
            <h5>00</h5>
            <div className="w-full h-3 lg:h-96 lg:w-3 bg-secondary border-2 border-slate-200 ">
              {/* <Progress aria-label="Loading..." value={60} className="max-w-lg rotate-90" color="primary"/> */}
            </div>
            <h5>03</h5>
          </div>
          <div className="relative h-full w-full">
            <div className="relative h-[182px] lg:h-[400px] w-full">
              <Image
                fill
                src={slide.img}
                alt="Logo"
                className="object-cover object-center"
              />
            </div>
            <h3 className="text-3xl  absolute top-[50%] left-[42%] ">
               {slide.title}
            </h3>
          </div>
        </div>
        <div className="w-full lg:w-1/2 xl:w-3/5 space-y-0.5">
          <div className="py-[70px] px-5 lg:py-48  bg-primary lg:bg-transparent text-secondary lg:text-warning  rounded-lg lg:rounded-none">
            <p className="font-Lora text-[40px] tracking-tighter">
              How we do it?
            </p>
          </div>
          {data.map((item, idx) => (
            <InView
              as="div"
              threshold={1}
              // rootMargin="50px"
              // triggerOnce={true}
              onChange={(inView, entry) => {
                console.log("Inview:", inView, item.title, entry);
                setSlide(
                  entry.isIntersecting && item.title === "Working Strategy"
                    ? ImgSlider[1]
                    : entry.isIntersecting && item.title === "Design"
                    ? ImgSlider[2]
                    : entry.isIntersecting && item.title === "Engineering"
                    ? ImgSlider[3]
                    : ImgSlider[0]
                );
              }}
              // py-[70px] px-5 lg:py-32
              className="py-[70px] px-5 font-urbanist bg-primary lg:bg-secondary xl:bg-white text-secondary lg:text-warning  rounded-lg lg:rounded-none space-y-8"
              key={idx}
            >
              <h4 className="font-Lora text-[32px] tracking-tighter">
                {item.title}
              </h4>
              <p className="lg:text-danger">{item.desc}</p>
              <Link
                href={"/contact"}
                className={`hidden lg:block px-6 py-5 rounded-full border group border-warning bg-transparent hover:bg-primary text-center text-base duration-700 delay-75 font-urbanist capitalize w-max`}
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
                className={`hidden md:flex lg:hidden px-6 py-5 rounded-full border group border-white bg-transparent hover:bg-white text-center text-base duration-700 delay-75 font-urbanist capitalize w-max`}
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
                className={`block md:hidden px-6 py-5 rounded-full border group border-white bg-transparent hover:bg-white text-center text-base duration-700 delay-75 font-urbanist capitalize w-max`}
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
