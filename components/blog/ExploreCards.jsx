"use client";
import blogData from "@/libs/blog.json";
import React, { useEffect, useState } from "react";
import { BlogGridComponent } from "./BlogGridComponent";
import Link from "next/link";

export const ExploreCards = () => {
  const [width, setWidth] = useState(0);
  const [count, setCount] = useState(3);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    width >= 1440 ? setCount(3) : setCount(2);
  }, [width]);
  return (
    <section className="px-5 py-10 md:px-10 md:py-[60px] lg:p-[60px] font-urbanist bg-secondary text-warning ">
      <div className="block w-full space-y-10">
        <div className="flex items-center justify-between">
          <h4 className="text-2xl md:text-[40px] font-Lora tracking-tight">
            Explore Articles
          </h4>
          <div className="block md:hidden bg-transparent px-6 py-5 text-base underline underline-offset-4 cursor-pointer decoration-warning">
            View All
          </div>
            <Link  passHref 
                  href={"https://ik.imagekit.io/webibee/VBCC/blog"}
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
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogData.explore.slice(0, count).map((list, idx) => (
            <BlogGridComponent key={idx} list={list} />
          ))}
        </div>
      </div>
    </section>
  );
};
