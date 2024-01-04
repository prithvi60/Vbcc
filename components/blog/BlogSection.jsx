"use client";
import { Tab, Tabs } from "@nextui-org/react";
import { BlogCards } from "./BlogCards";
import { allBlogContent } from "@/libs/data";
import { useState } from "react";
export const BlogSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  // console.log(activeTab); 
  return (
    <section className="px-5 py-10 md:px-10 md:py-[60px] lg:p-[60px] font-urbanist bg-secondary space-y-8">
      <ul className="gap-4 w-full h-auto flex-wrap flex justify-start items-end md:flex md:justify-start md:item-center md:flex-wrap">
        {allBlogContent.map((item, idx) => (
          <li
            className={`text-base tracking-tight border border-warning p-5 rounded-full font-Lora min-w-fit px-4 py-2 group/button block bg-transparent hover:bg-success hover:bg-opacity-20 text-center duration-700 delay-75 capitalize cursor-pointer ${
              activeTab === idx ? "!bg-primary !hover:bg-primary" : ""
            }`}
            key={idx}
            onClick={() => setActiveTab(idx)}
          >
            <div className={`h-6 w-full overflow-hidden`}>
              <h4
                className={`transition translate-y-0 group-hover/button:-translate-y-20 duration-700   ${
                  activeTab === idx
                    ? "text-secondary "
                    : "text-warning"
                }`}
              >
                {item.title}
              </h4>
              <h4
                className={`translate-y-20 transition group-hover/button:-translate-y-[25px] duration-700  ${
                  activeTab === idx
                    ? "text-secondary"
                    : "group-hover/button:text-primary"
                }`}
              >
                {item.title}
              </h4>
            </div>
          </li>
        ))}
      </ul>
      <BlogCards item={allBlogContent[activeTab]} blogContents={allBlogContent[activeTab].blogContents} MainBlog={allBlogContent[activeTab].MainBlog}/>
    </section>
  );
};
