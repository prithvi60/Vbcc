"use client";
import * as React from "react";
import othersData from "@/libs/others.json";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

 const FAQAccordion = () => {
  const [activeTab, setActiveTab] = useState(0);

  const itemClasses = {
    base: "mb-2 !px-0 w-full !rounded-[20px] !bg-primary border border-white overflow-hidden",
    heading: "px-3 py-2 md:p-6",
    title:
      "font-Lora text-xl md:text-2xl text-white focus-within:outline-none focus-within:border-transparent focus-within:ring-0",
    trigger: "h-auto lg:h-10 py-2 md:py-4",
    indicator: "text-xl md:text-2xl text-white",
    content:
      "p-4 md:p-5 font-urbanist text-sm md:text-base text-warning bg-white",
  };
  return (
    <section>
      <div className="space-y-8">
        <ul className="gap-x-2 gap-y-4 sm:gap-2.5 w-full h-auto flex-wrap flex justify-start items-end md:flex md:justify-start md:item-center md:flex-wrap">
          {othersData.faqDetails.map((item, idx) => (
            <li
              className={`min-w-fit text-base tracking-tight border border-secondary p-5 rounded-full font-urbanist px-4 py-2 group/button block bg-transparent hover:bg-warning text-center duration-700 delay-75 capitalize cursor-pointer ${
                activeTab === idx ? "bg-white hover:bg-white" : ""
              }`}
              key={idx}
              onClick={() => setActiveTab(idx)}
            >
              <div className={`hidden md:block h-6 w-full overflow-hidden`}>
                <h4
                  className={`transition translate-y-0 group-hover/button:-translate-y-20 duration-700 text-secondary  ${
                    activeTab === idx
                      ? "text-warning group-hover/button:text-warning"
                      : ""
                  }`}
                >
                  {item.title1}
                </h4>
                <h4
                  className={`translate-y-20 transition group-hover/button:-translate-y-[25px] duration-700 group-hover/button:text-secondary ${
                    activeTab === idx
                      ? "text-warning group-hover/button:text-warning"
                      : ""
                  }`}
                >
                  {item.title1}
                </h4>
              </div>
              <div className={`block md:hidden h-6 w-full overflow-hidden`}>
                <h4
                  className={`transition translate-y-0 group-hover/button:-translate-y-20 duration-700 text-secondary  ${
                    activeTab === idx
                      ? "text-warning group-hover/button:text-warning"
                      : ""
                  }`}
                >
                  {item.title2}
                </h4>
                <h4
                  className={`translate-y-20 transition group-hover/button:-translate-y-[25px] duration-700 group-hover/button:text-secondary ${
                    activeTab === idx
                      ? "text-warning group-hover/button:text-warning"
                      : ""
                  }`}
                >
                  {item.title2}
                </h4>
              </div>
            </li>
          ))}
        </ul>
        <Accordion
          variant="splitted"
          itemClasses={itemClasses}
          selectionMode="multiple"
        >
          {othersData.faqDetails[activeTab].lists.map((list, idx) => (
            <AccordionItem
              className="bg-warning bg-opacity-50"
              indicator={({ isOpen }) =>
                isOpen ? (
                  <AiOutlineMinus className="h-5 w-5 text-white rotate-90" />
                ) : (
                  <AiOutlinePlus className="h-5 w-5 text-white" />
                )
              }
              key={idx}
              aria-label={list.ques}
              title={list.ques}
            >
              {list.ans}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
export default FAQAccordion;