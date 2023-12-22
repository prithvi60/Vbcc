"use client"
import { story } from "@/libs/data";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Story = () => {
  const [width, setWidth] = useState(0)
  const [count,setCount] = useState(3);

useEffect(() =>{
  setWidth(window.innerWidth)
},[])

useEffect(() =>{
  width >= 1440
  ? setCount(4)
  : setCount(1)
},[width])
  return (
    <section className="px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 font-urbanist relative" id="story">
      <div className="flex flex-col-reverse items-center lg:flex-row gap-16 lg:justify-between lg:items-start">
        <div className="w-full lg:w-1/2 space-y-8 lg:sticky lg:top-20">
          <div className="space-y-6 text-warning">
            <h3 className="text-[32px] xl:text-[40px] font-Lora">
              Our Story
            </h3>
            <p className="text-sm md:text-base">
              Explore the compelling journey of VBCC High Temperature
              Instruments, formerly VB Ceramic Consultants, led by Dr.
              Viswabaskaran since 2002. With over two decades of industry
              experience and five years of immersive research at Anna
              University, his passion has garnered prestigious awards and
              accolades, shaping our remarkable trajectory.
              <br />
              <br />
              Initially rooted as VB Ceramic Consultants, our expertise tailored
              solutions for the ceramic industry. Evolving, we expanded into
              crafting furnaces and high-temperature instruments, supplying over
              20,000 instruments globally.
              <br />
              <br />
              Naveen, a proud Ceramic Technology graduate, continues the legacy,
              leveraging his entrepreneurship and project management experience.
              As former President of the Student Chapter of the Indian Ceramic
              Society, he envisions international expansion, dedicated to
              enhancing VBCC&apos;s product quality and maintaining innovation.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full flex flex-col items-end gap-6">
          {story.slice(0,count).map((item, idx) => (
              <div className="relative h-[350px] md:h-[392px] w-full" key={idx}>
                <Image
                  fill
                  src={item}
                  alt="Image..."
                  className="absolute object-cover object-center"
                />
              </div>
          ))} 
        </div>
      </div>
    </section>
  );
};
