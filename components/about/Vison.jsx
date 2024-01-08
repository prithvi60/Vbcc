"use client"
import { VM } from "@/libs/data";
import Image from "next/image";
import { useEffect, useState } from "react";
  
export const Vison = () => {
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
        <>
      {VM.map((item,idx)=>(
    <section className="px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 font-urbanist relative bg-success" key={idx}>
      <div className="flex flex-col items-center lg:flex-row gap-16 lg:justify-between lg:items-start" >
        <div className="w-full lg:w-1/2 h-full flex flex-col items-end gap-6">
          {item.img.slice(0,count).map((image,id) => (
            <div className="relative h-[350px] md:h-[392px] w-full" key={id}>
              <Image
                fill
                src={image}
                alt="Image..."
                placeholder="blur"
                  blurDataURL={`${image}?tr=bl-100`}
                  sizes="(min-width: 1040px) calc(50vw - 92px), (min-width: 820px) calc(100vw - 80px), calc(100vw - 40px)"
                className="absolute object-cover object-center"
              />
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/2 space-y-8 lg:sticky lg:top-20">
          <div className="space-y-6 text-white">
            <h3 className="text-[32px] xl:text-[40px] font-Lora">
              {item.title}
            </h3>
            <div className="block space-y-3 text-sm md:text-base 2xl:text-lg font-urbanist w-full xl:w-[70%] 2xl:w-[90%]">
              <p>
                {item.para1}
              </p>
              <ol className="space-y-3 list-decimal ml-2">
                {item.lists.map((list,index)=>(
                <li key={index}>
                  {list}
                </li>
                ))}
              </ol>
              <p>{item.para2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
        ))}
        </>
  );
};
