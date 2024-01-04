"use client";
import { FAQ } from "@/libs/data";
import { Accordion, AccordionItem, Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export const FAQAccordion = () => {
  const [activeTab, setActiveTab] = useState(1);


  const itemClasses = {
    base: "mb-2 !px-0 w-full !rounded-[20px] !bg-primary border border-white overflow-hidden",
    heading: "p-4 md:p-5",
    title:
      "font-Lora text-xl md:text-2xl text-white focus-within:outline-none focus-within:border-transparent focus-within:ring-0",
    trigger: "h-auto lg:h-10",
    indicator: "text-xl md:text-2xl text-white",
    content:
      "p-4 md:p-5 font-urbanist text-sm md:text-base text-warning bg-white",
  };
  return (
    <section>
      <div className="space-y-8">
        <ul className="gap-4 w-full h-auto flex-wrap flex justify-start items-end md:flex md:justify-start md:item-center md:flex-wrap">
          {FAQ.map((item, idx) => (
            <li
              className={`min-w-fit text-base tracking-tight border border-secondary p-5 rounded-full font-urbanist px-4 py-2 group/button block bg-transparent hover:bg-warning text-center duration-700 delay-75 capitalize cursor-pointer ${
                activeTab === idx ? "bg-white hover:bg-white" : ""
              }`}
              key={idx}
              onClick={() => setActiveTab(idx)}
            >
              <div className={`h-6 w-full overflow-hidden`}>
                <h4
                  className={`transition translate-y-0 group-hover/button:-translate-y-20 duration-700 text-secondary  ${
                    activeTab === idx
                      ? "text-warning group-hover/button:text-warning"
                      : ""
                  }`}
                >
                  {item.title}
                </h4>
                <h4
                  className={`translate-y-20 transition group-hover/button:-translate-y-[25px] duration-700 group-hover/button:text-secondary ${
                    activeTab === idx
                      ? "text-warning group-hover/button:text-warning"
                      : ""
                  }`}
                >
                  {item.title}
                </h4>
              </div>
            </li>
          ))}
          {/* <li
            className={`w-max text-base tracking-tight border border-secondary p-5 rounded-full font-urbanist px-4 py-2 group/button block bg-transparent hover:bg-warning text-center duration-700 delay-75 capitalize cursor-pointer`}
          >
            <div className={`h-6 w-full overflow-hidden`}>
              <h4
                className={`transition translate-y-0 group-hover/button:-translate-y-20 duration-700 text-secondary`}
              >
                Order & Delivery
              </h4>
              <h4
                className={`translate-y-20 transition group-hover/button:-translate-y-[25px] duration-700 group-hover/button:text-secondary`}
              >
                Order & Delivery
              </h4>
            </div>
          </li>
          <li
            className={`w-max text-base tracking-tight border border-secondary p-5 rounded-full font-urbanist px-4 py-2 group/button block bg-transparent hover:bg-warning text-center duration-700 delay-75 capitalize cursor-pointer`}
          >
            <div className={`h-6 w-full overflow-hidden`}>
              <h4
                className={`transition translate-y-0 group-hover/button:-translate-y-20 duration-700 text-secondary`}
              >
                Order & Delivery
              </h4>
              <h4
                className={`translate-y-20 transition group-hover/button:-translate-y-[25px] duration-700 group-hover/button:text-secondary`}
              >
                Order & Delivery
              </h4>
            </div>
          </li> */}
        </ul>
        <Accordion
          variant="splitted"
          itemClasses={itemClasses}
          selectionMode="multiple"
        >
          {FAQ[activeTab].lists.map((list, idx) => (
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
