"use client";
import * as React from "react";
import othersData from "@/libs/others.json";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/navigation";

export const OurPresenceAccordion = () => {
  const router = useRouter();
//   !rounded-[20px]
  const itemClasses = {
    base: "mb-2 !p-0 w-full !bg-transparent !rounded-none border border-warning overflow-hidden",
    heading: "px-3.5 md:p-4",
    title:
      "font-Lora text-xl md:text-2xl text-warning focus-within:outline-none focus-within:border-transparent focus-within:ring-0",
    trigger: "h-auto lg:h-10",
    indicator: "text-xl md:text-2xl text-warning",
    content:
      "p-4 font-urbanist text-sm md:text-base text-white bg-primary",
  };

  return (
    <section className="py-16 px-5 md:py-20 md:px-10 xl:px-[60px] ">
      <div className="space-y-8">
        <h2 className="font-Lora font-medium text-2xl md:text-4xl xl:text-6xl w-full text-warning">
          Locations
        </h2>
        <Accordion
          variant="splitted"
          itemClasses={itemClasses}
          selectionMode="multiple"
        >
          {othersData.ourPresenceLocation.map((list, idx) => (
            <AccordionItem
              indicator={({ isOpen }) =>
                isOpen ? (
                  <AiOutlineMinus className="h-5 w-5 text-warning rotate-90" />
                ) : (
                  <AiOutlinePlus className="h-5 w-5 text-warning" />
                )
              }
              aria-label={list.location}
              title={list.location}
              key={idx}
            >
              <ul className="gap-4 w-full h-auto flex-wrap flex justify-start items-end md:flex md:justify-start md:item-center md:flex-wrap">
                {list.States.map((item, index) => (
                  <li
                    className={`min-w-fit text-base tracking-tight border border-secondary p-5 rounded-full font-urbanist px-4 py-2 group/button block bg-transparent hover:bg-warning text-center duration-700 delay-75 capitalize cursor-pointer`}
                    key={index}
                    onClick={() => router.push("/ourPresence/1")}
                  >
                    <div className={`h-6 w-full overflow-hidden`}>
                      <h4
                        className={`transition translate-y-0 group-hover/button:-translate-y-20 duration-700 text-secondary`}
                      >
                        {item}
                      </h4>
                      <h4
                        className={`translate-y-20 transition group-hover/button:-translate-y-[25px] duration-700 group-hover/button:text-secondary`}
                      >
                        {item}
                      </h4>
                    </div>
                  </li>
                ))}
              </ul>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
