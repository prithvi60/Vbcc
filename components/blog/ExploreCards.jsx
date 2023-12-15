import { explore } from "@/libs/data";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ExploreCards = () => {
  return (
    <section className="px-5 py-10 md:px-10 md:py-[60px] lg:p-[60px] font-urbanist bg-secondary text-warning ">
      <div className="block w-full space-y-10">
        <div className="flex items-center justify-between">
          <h4 className="text-2xl md:text-[40px] font-Lora tracking-tight">
            Explore Articles
          </h4>
          <div className="block md:hidden bg-transparent px-6 py-5 text-base underline underline-offset-4 cursor-pointer decoration-warning">View All</div>
          <div
            className={`hidden md:block rounded-full px-4 py-3 border border-warning bg-transparent hover:bg-primary text-center text-base duration-700 delay-75 font-urbanist capitalize w-max group`}
          >
            <div className={`h-6 w-full overflow-hidden`}>
              <h4
                className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-warning`}
              >
                View All
              </h4>
              <h4
                className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-white`}
              >
                View All
              </h4>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {explore.map((list, idx) => (
            <div className="block space-y-5" key={idx}>
              <div className="relative h-[200px] w-full md:h-[330px]   overflow-hidden">
                <Image
                  fill
                  src={list.img}
                  alt="product feature"
                  className="absolute object-cover object-center hover:scale-125 hover:transition-all hover:duration-1000"
                />
              </div>
              <h4 className="text-lg lg:text-[32px] font-Lora">
                {list.productTitile}
              </h4>
              <p className="text-sm md:text-base">{list.desc}</p>
              <Link
                href={"/blog/1"}
                className={`block rounded-full px-4 py-3 border border-warning bg-transparent hover:bg-primary text-center text-base duration-700 delay-75 font-urbanist capitalize w-max group`}
              >
                <div className={`h-6 w-full overflow-hidden`}>
                  <h4
                    className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-warning`}
                  >
                    Read More
                  </h4>
                  <h4
                    className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-white`}
                  >
                    Read More
                  </h4>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
