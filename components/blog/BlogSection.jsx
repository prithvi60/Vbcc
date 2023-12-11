"use client";
import { Button, Tab, Tabs } from "@nextui-org/react";
import { BlogCards } from "./BlogCards";
import { BlogCard } from "@/libs/data";
export const BlogSection = () => {
  return (
    <section className="px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 font-urbanist bg-secondary">
        <Tabs
        aria-label="Options"
        classNames={{
          tabList:
            "gap-4 w-full relative rounded-none p-0 h-auto justify-center flex-wrap pb-5",
          cursor: "w-full bg-primary rounded-full px-4 py-4",
          tab: "w-max text-base tracking-tight border border-warning p-5 rounded-full font-Lora",
          tabContent: "group-data-[selected=true]:text-white",
        }}
      >
        {BlogCard.map((item)=>(
          <Tab
            key={item.id}
            title={
              <span className="text-warning group-data-[selected=true]:text-white">
                {item.title}
              </span>
            }
          >
            <BlogCards item={item} BlogCard={item.blogCard} card={item.featureCard}/>
          </Tab>
            ))}
      </Tabs>
    </section>
  )
}
