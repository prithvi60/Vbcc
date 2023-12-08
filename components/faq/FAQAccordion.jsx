"use client";
import { FAQ } from "@/libs/data";
import { Accordion, AccordionItem, Tab, Tabs } from "@nextui-org/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export const FAQAccordion = () => {
  const itemClasses = {
    base: "mb-2 !px-0 w-full rounded-2xl !bg-primary border border-white overflow-hidden",
    heading: "p-4 md:p-5",
    title:
      "font-Lora text-xl md:text-2xl text-white focus-within:outline-none focus-within:border-transparent focus-within:ring-0",
    trigger: "h-auto lg:h-10",
    indicator: "text-xl md:text-2xl text-white",
    content:
      "p-4 md:p-5 font-urbanist text-sm md:text-base bg-warning text-white",
  };
  return (
    <section>
      <Tabs
        aria-label="Options"
        classNames={{
          tabList:
            "gap-4 w-full relative rounded-none p-0 h-auto justify-center flex-wrap bg-primary pb-5",
          cursor: "w-full bg-secondary rounded-full px-4 py-4",
          tab: "w-max text-base tracking-tight border border-white p-5 rounded-full font-Lora",
          tabContent: "group-data-[selected=true]:text-warning",
        }}
      >
        {FAQ.map((item) => (
          <Tab
            key={item.id}
            title={
              <span className="text-white group-data-[selected=true]:text-warning">
                {item.title}
              </span>
            }
          >
            <Accordion
              variant="splitted"
              itemClasses={itemClasses}
              selectionMode="multiple"
            >
              {item.lists.map((list, idx) => (
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
          </Tab>
        ))}
      </Tabs>
    </section>
  );
};
