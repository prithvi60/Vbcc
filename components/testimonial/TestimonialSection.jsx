"use client"

import { testimonials } from "@/libs/data";
import Image from "next/image";
import { useEffect, useState } from "react";

export const TestimonialSection = () => {
  const idx = testimonials[0].id
  // const [index, setIndex] = useState("0")
  const [selectedItem, SetselectedItem] = useState(testimonials[idx].pdf);

  useEffect(() => {
  }, [selectedItem,SetselectedItem])
  
  return (
    <section className="w-full h-screen px-5 py-10 md:px-10 md:py-20 lg:px-[60px] bg-[url('/Testimonials-BG.png')] bg-cover bg-center flex flex-col gap-6 md:gap-0 md:flex-row md:justify-between items-start">
      <div className="w-full md:w-1/2 xl:w-[65%] space-y-9">
        <h2 className="font-Lora text-2xl md:text-4xl xl:text-6xl w-full">
          Gallery
        </h2>
        <div className="w-full md:w-96 h-full md:h-auto overflow-hidden flex gap-4">
        <div className="flex flex-nowrap md:flex-wrap items-center gap-4 h-[70px] md:h-full animate-horizontal_carousel md:animate-none pause ">
          {testimonials.map((item) => (
            <div className="active:bg-gradient-to-br from-[#A5005A] to-[#5A00A4] p-1 rounded-md" key={item.id}>
            <div className="relative h-[70px] w-[90px] bg-white rounded-md cursor-pointer" onClick={()=>SetselectedItem(testimonials[item.id].pdf)}>
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
        <div className="md:w-1/2 xl:w-[35%] w-full h-full">
        <div className="relative h-full w-full bg-white rounded-md">
              <Image
                fill
                src={selectedItem}
                alt="Logo"
                className="absolute object-contain object-center px-11 py-4 md:px-[10px] md:py-6 xl:px-3 xl:py-7"
              />
            </div>
      </div>
    </section>
  );
};
