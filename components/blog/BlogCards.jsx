import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Btn } from "../Btn";

export const BlogCards = ({ BlogCard, card, item }) => {
  const [width, setWidth] = useState(0)
  const [count,setCount] = useState(6);

useEffect(() =>{
  setWidth(window.innerWidth)
},[])

useEffect(() =>{
  width >= 1440
  ? setCount(6)
  : width >= 1024
  ? setCount(4)
  : width >= 810
  ? setCount(6)
  : setCount(5)
},[width])
  return (
    <section className="block space-y-8">
      <div className="hidden lg:flex items-start gap-8">
        <div className="block space-y-5 lg:w-[55%] xl:w-[70%] text-warning sticky top-6">
          <div
            style={{ backgroundImage: `url(${card.img})` }}
            className="bg-[url('/blog-2.png')] bg-cover bg-center w-full h-[520px] p-5"
          >
            <div
              className={`block rounded-full px-4 py-3 bg-white hover:bg-primary text-center text-base duration-700 delay-75 font-urbanist capitalize w-max group`}
            >
              <div className={`h-6 w-full overflow-hidden`}>
                <h4
                  className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-warning`}
                >
                  {item.title}
                </h4>
                <h4
                  className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-white`}
                >
                  {item.title}
                </h4>
              </div>
            </div>
          </div>
          <h4 className="text-lg lg:text-[32px] font-Lora">
            {card.productTitile}
          </h4>
          <p className="text-sm md:text-base w-[90%]">{card.desc}</p>
             <Btn Hbgcolor={"bg-primary"} textColor={"text-warning"} HtextColor={"text-white"} bColor={"border-warning"} title={"Read More"} href={"/blog/1"}/>
        </div>
        <div className="block space-y-[50px] w-full lg:w-[45%] xl:w-[30%]">
          {BlogCard.slice(0,3).map((list, idx) => (
            <div className="md:block space-y-5 text-warning w-full" key={idx}>
              <div className="relative w-full h-[330px] overflow-hidden">
                <Image
                  fill
                  src={list.img}
                  alt="product"
                  className="absolute object-cover object-center hover:scale-125 transition-all duration-1000"
                />
                <div className="px-4 py-2.5 absolute top-5 left-5 bg-white w-max rounded-md lg:hidden">
                  {item.title}
                </div>
              </div>
              <h4 className="text-lg lg:text-[32px] font-Lora">
                {list.productTitile}
              </h4>
              <p className="text-sm md:text-base">{list.desc}</p>
              <Btn Hbgcolor={"bg-primary"} textColor={"text-warning"} HtextColor={"text-white"} bColor={"border-warning"} title={"Read More"} href={"/blog/1"}/>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {BlogCard.slice(0,count).map((list, idx) => (
          <div
            className=" space-y-5 text-warning w-full"
            key={idx}
          >
            <div className="relative w-full h-[330px] overflow-hidden">
              <Image
                fill
                src={list.img}
                alt="product"
                className="absolute object-cover object-center hover:scale-125 transition-all duration-1000"
              />
              <div className="px-4 py-2.5 absolute top-5 left-5 bg-white w-max rounded-md lg:hidden">
                {item.title}
              </div>
            </div>
            <h4 className="text-lg lg:text-[32px] font-Lora">
              {list.productTitile}
            </h4>
            <p className="text-sm md:text-base">{list.desc}</p>
            <Btn Hbgcolor={"bg-primary"} textColor={"text-warning"} HtextColor={"text-white"} bColor={"border-warning"} title={"Read More"} href={"/blog/1"}/>
          </div>
        ))}
      </div>
    </section>
  );
};
