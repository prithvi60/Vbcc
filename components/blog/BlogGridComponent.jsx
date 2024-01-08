import React from "react";
import { Btn } from "../Btn";
import Image from "next/image";

export const BlogGridComponent = ({ list }) => {
  return (
    <div className="md:block space-y-5 w-full">
      <div className="text-warning space-y-5 group">
        <div className="relative w-full h-[330px] overflow-hidden">
          <Image
            fill
            src={list.img}
            alt="product"
            placeholder="blur"
            blurDataURL={`${list.img}?tr=bl-100`}
            sizes="(min-width: 1440px) calc(32.12vw - 41px), calc(50vw - 76px)"
            className="absolute object-cover object-center group-hover:scale-125 transition-all duration-1000"
          />
          <div
              className={`block hover:bg-primary text-center text-base duration-700 delay-75 font-urbanist capitalize group/feature px-4 py-2.5 absolute top-5 left-5 bg-white w-max rounded-full lg:hidden`}
            >
              <div className={`h-6 w-full overflow-hidden`}>
                <h4
                  className={`transition translate-y-0 group-hover/feature:-translate-y-20 duration-700 text-warning tracking-wider`}
                >
                  Featured
                </h4>
                <h4
                  className={`translate-y-20 transition group-hover/feature:-translate-y-[25px] duration-700 text-white tracking-wider`}
                >
                  Featured
                </h4>
              </div>
            </div>
          {/* <div className="px-4 py-2.5 absolute top-5 left-5 bg-white w-max rounded-md lg:hidden">
            Featured
          </div> */}
        </div>
        <h4 className="text-lg lg:text-[32px] font-Lora">{list.blogTitile}</h4>
        <p className="text-sm md:text-base">{list.blogDescription}</p>
      </div>
      <Btn
        Hbgcolor={"bg-primary"}
        textColor={"text-warning"}
        HtextColor={"text-white"}
        bColor={"border-warning"}
        title={"Read More"}
        href={"/blog/1"}
      />
    </div>
  );
};
