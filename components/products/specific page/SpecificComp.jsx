"use client";

import { carousel } from "@/libs/data";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { motion, AnimatePresence, spring } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const variants = [
  { value: "Variant 1" },
  { value: "Variant 2" },
  { value: "Variant 3" },
  { value: "Variant 4" },
];

export const CustomVariant = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, SetselectedItem] = useState("No Variant");
  return (
    <section>
      <div className="block space-y-5 h-auto w-full">
        <div className="flex justify-center items-center px-4 py-2 border border-warning w-full font-Lora rounded-full">
          <h4 className="font-Lora w-[40%] md:w-[28%] text-warning text-2xl font-medium">
            Variant :
          </h4>
          <div
            className="w-64 rounded-full flex justify-between items-center cursor-pointer"
            onClick={() => setOpen((prevOpen) => !prevOpen)}
          >
            <div className="text-info font-Lora capitalize text-2xl">
              {selectedItem}
            </div>
            {!open ? (
              <RiArrowDownSFill className="h-5 w-5 text-warning" />
            ) : (
              <RiArrowUpSFill className="h-5 w-5 text-warning" />
            )}
          </div>
        </div>
        <ul
          className={`w-full border border-warning rounded-3xl ${
            open
              ? "block h-auto overflow-hidden transition-all duration-1000"
              : "hidden"
          }`}
        >
          {variants.map((item, idx) => (
            <li
              className={`p-3 capitalize cursor-pointer font-Lora text-2xl text-primary hover:bg-info border-b border-warning last:border-b-0 hover:duration-1000 hover:bg-opacity-30 ${
                selectedItem === item.value ? "bg-white" : ""
              } `}
              key={idx}
              onClick={() => {
                SetselectedItem(item.value);
                setOpen(!open);
              }}
            >
              {item.value}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export const CustomAccordion = () => {
  const itemClasses = {
    title: "font-Lora text-xl text-warning",
  };
  return (
    <section>
      <Accordion
        variant="light"
        selectionMode="multiple"
        itemClasses={itemClasses}
      >
        <AccordionItem
          key="1"
          aria-label="Dimensions"
          title="Dimensions"
          indicator={({ isOpen }) =>
            isOpen ? (
              <AiOutlineMinus className="h-5 w-5 text-warning rotate-90" />
            ) : (
              <AiOutlinePlus className="h-5 w-5 text-warning" />
            )
          }
        >
          {<CustomTable />}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Quantity/Time"
          title="Quantity/Time"
          indicator={({ isOpen }) =>
            isOpen ? (
              <AiOutlineMinus className="h-5 w-5 text-warning rotate-90" />
            ) : (
              <AiOutlinePlus className="h-5 w-5 text-warning" />
            )
          }
          className="border-b-3 border-[#F1F1F1]"
        >
          {<CustomTable />}
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export const CustomTable = () => {
  return (
    <table className="w-full border border-[#B9B9B9] text-xl my-5">
      <tr>
        <td className="border border-[#B9B9B9] p-3">Available Space</td>
        <td className="border border-[#B9B9B9] p-3">150 x 150 x 200 mm</td>
      </tr>
      <tr>
        <td className="border border-[#B9B9B9] p-3">Rate of Heating</td>
        <td className="border border-[#B9B9B9] p-3">5&deg;C/Min</td>
      </tr>
      <tr>
        <td className="border border-[#B9B9B9] p-3">Rate of Heating</td>
        <td className="border border-[#B9B9B9] p-3">5&deg;C/Min</td>
      </tr>
      <tr>
        <td className="border border-[#B9B9B9] p-3">Rate of Heating</td>
        <td className="border border-[#B9B9B9] p-3">5&deg;C/Min</td>
      </tr>
      <tr>
        <td className="border border-[#B9B9B9] p-3">Rate of Heating</td>
        <td className="border border-[#B9B9B9] p-3">5&deg;C/Min</td>
      </tr>
      <tr>
        <td className="border border-[#B9B9B9] p-3">Rate of Heating</td>
        <td className="border border-[#B9B9B9] p-3">5&deg;C/Min</td>
      </tr>
    </table>
  );
};

export const CustomCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const slideVariants = {
    slide: (direction) => {
      return { x: direction > 0 ? 1000 : -1000, opacity: 0 };
    },
    visible: {
      x: 0,
      opacity: 1,
      transition :{
        x: {type : "spring",stiffness: 400,damping: 50,},
        opacity :{duration: 0.5}
      }
    },
    exit: (direction) => {
      return {
        x: direction > 0 ? -1000 : 1000,
        opacity: 0,
        transition :{
          x: {type : "spring",stiffness: 400,damping: 50,},
          opacity :{duration: 0.5}
        }
      };
    },
  };
  const handleNext = () => {
    setDirection(1);
    setIndex(() => (index === carousel.length - 1 ? 0 : index + 1));
  };
  const handlePrev = () => {
    setDirection(-1);
    setIndex(() => (index === 0 ? carousel.length - 1 : index - 1));
  };
  const handleThumbnail = (id) => {
    setDirection(id == index ? -1 : 1);
    setIndex(id);
  };

  return (
    <>
      <section className="block space-y-5">
            <AnimatePresence initial={false} custom={direction} >
          <div className="relative w-full h-[490px] overflow-hidden">
            <motion.img
              // fill
              key={carousel[index].img}
              src={carousel[index].img}
              alt="..."
              className="w-full h-full object-cover object-center rounded-md"
              variants={slideVariants}
              initial="slide"
              custom={direction}
              animate="visible"
              exit="exit"
            />
          </div>
        </AnimatePresence>
        <div className="flex items-center gap-5 w-full h-auto">
          {carousel.map((item, idx) => (
            <div
              className={`relative w-full h-[120px] mb-5 overflow-hidden cursor-pointer ${
                idx === index ? " rounded-md border-2 border-info" : ""
              }`}
              key={item.id}
              onClick={() => handleThumbnail(idx)}
            >
              <Image
                fill
                src={item.img}
                alt={item.img}
                className="absolute object-cover object-center rounded-md hover:scale-110 transition-all duration-1000"
              />
            </div>
          ))}
        </div>
        <div className="hidden md:flex justify-between items-center">
          <div
            className="p-4 rounded-full cursor-pointer border border-warning active:border-warning"
            onClick={handlePrev}
          >
            <GoArrowLeft className="h-5 w-5 text-warning active:text-warning" />
          </div>
          <div className="text-xl">
          <AnimatePresence initial={false} custom={direction} >
            <motion.span
              key={index}
              variants={slideVariants}
              initial= "slide"
              animate="visible"
              exit="exit"
              className="w-max h-auto"
              custom={direction}
            >
              {carousel[index].id}
            </motion.span>
            </AnimatePresence>
            / {carousel.length}
          </div>
          <div
            className="p-4 rounded-full cursor-pointer border border-warning active:border-warning"
            onClick={handleNext}
          >
            <GoArrowRight className="h-5 w-5 text-text-warning active:text-warning" />
          </div>
        </div>
      </section>
    </>
  );
};
