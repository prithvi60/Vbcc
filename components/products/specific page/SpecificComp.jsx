"use client";
import * as React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { m, LazyMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
// Make sure to return the specific export containing the feature bundle.
const loadFeatures = () =>
  import("../../../libs/framer_feature").then((res) => res.default);
export const CustomVariant = ({
  variant,
  handleClick,
  open,
  setOpen,
  selectedItem,
}) => {
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
          {variant.map((item, idx) => (
            <li
              className={`p-3 capitalize cursor-pointer font-Lora text-2xl text-primary hover:bg-info border-b border-warning last:border-b-0 hover:duration-1000 hover:bg-opacity-30 ${
                selectedItem === item ? "bg-white" : ""
              } `}
              key={idx}
              onClick={() => {
                handleClick(idx, item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export const CustomAccordion = ({ specification, specificId }) => {
  const specificGeneral = specification[specificId].Title1;
  const specificTemperature = specification[specificId].Title2;
  const specificSize = specification[specificId].Title3;
  const itemClasses = {
    base: "border-b-3 border-[#F1F1F1] pb-3",
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
          aria-label={specification[specificId].title[0]}
          title={specification[specificId].title[0]}
          indicator={({ isOpen }) =>
            isOpen ? (
              <AiOutlineMinus className="h-5 w-5 text-warning rotate-90" />
            ) : (
              <AiOutlinePlus className="h-5 w-5 text-warning" />
            )
          }
        >
          <table className="w-full border border-[#B9B9B9] text-xl my-5">
            <tbody>
              {specificGeneral.map((list, idx) => (
                <tr key={idx}>
                  <td className="border border-[#B9B9B9] p-3">{list.name}</td>
                  <td className="border border-[#B9B9B9] p-3">{list.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </AccordionItem>
        {specification[specificId].title[1] && (
        <AccordionItem
          key="2"
          aria-label={specification[specificId].title[1]}
          title={specification[specificId].title[1]}
          indicator={({ isOpen }) =>
            isOpen ? (
              <AiOutlineMinus className="h-5 w-5 text-warning rotate-90" />
            ) : (
              <AiOutlinePlus className="h-5 w-5 text-warning" />
            )
          }
        >
          <table className="w-full border border-[#B9B9B9] text-xl my-5">
            <tbody>
              {specificTemperature.map((list, idx) => (
                <tr key={idx}>
                  <td className="border border-[#B9B9B9] p-3">{list.name}</td>
                  <td className="border border-[#B9B9B9] p-3">{list.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </AccordionItem>
        )}
        {specification[specificId].title[2] && (
        <AccordionItem
          key="3"
          aria-label={specification[specificId].title[2]}
          title={specification[specificId].title[2]}
          indicator={({ isOpen }) =>
            isOpen ? (
              <AiOutlineMinus className="h-5 w-5 text-warning rotate-90" />
            ) : (
              <AiOutlinePlus className="h-5 w-5 text-warning" />
            )
          }
          // className="border-b-3 border-[#F1F1F1]"
        >
          <table className="w-full border border-[#B9B9B9] text-xl my-5">
            <tbody>
              {specificSize.map((list, idx) => (
                <tr key={idx}>
                  <td className="border border-[#B9B9B9] p-3">{list.name}</td>
                  <td className="border border-[#B9B9B9] p-3">{list.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </AccordionItem>
        )}
        {specification[specificId].title[3] && (
        <AccordionItem
          key="4"
          aria-label={specification[specificId].title[3]}
          title={specification[specificId].title[3]}
          indicator={({ isOpen }) =>
            isOpen ? (
              <AiOutlineMinus className="h-5 w-5 text-warning rotate-90" />
            ) : (
              <AiOutlinePlus className="h-5 w-5 text-warning" />
            )
          }
          // className="border-b-3 border-[#F1F1F1]"
        >
          <table className="w-full border border-[#B9B9B9] text-xl my-5">
            <tbody>
              {specificSize.map((list, idx) => (
                <tr key={idx}>
                  <td className="border border-[#B9B9B9] p-3">{list.name}</td>
                  <td className="border border-[#B9B9B9] p-3">{list.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </AccordionItem>
        )}
      </Accordion>
    </section>
  );
};

export const CustomCarousel = ({ gallery }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const slideVariants = {
    slide: (direction) => {
      return { x: direction > 0 ? 650 : -650 };
    },
    visible: {
      x: 0,
      // opacity: 1,
      // transition: {
      //   x: { type: "spring", stiffness: 400, damping: 50 },
      //   opacity: { duration: 0.5 },
      // },
    },
    exit: (direction) => {
      return {
        x: direction > 0 ? -650 : 650,
        // opacity: 0,
        // transition: {
        //   x: { type: "spring", stiffness: 400, damping: 50 },
        //   opacity: { duration: 0.5 },
        // },
      };
    },
  };
  const handleNext = () => {
    setDirection(1);
    setIndex(() => (index === gallery.length - 1 ? 0 : index + 1));
  };
  const handlePrev = () => {
    setDirection(-1);
    setIndex(() => (index === 0 ? gallery.length - 1 : index - 1));
  };
  const handleThumbnail = (id) => {
    setDirection(id == index ? -1 : 1);
    setIndex(id);
  };

  return (
    <>
      <section className="block space-y-5">
        {/* <div className="relative w-full h-[490px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              // fill
              key={gallery[index].img}
              src={gallery[index].img}
              alt="..."
              className="w-full h-full object-cover object-center rounded-md"
              variants={slideVariants}
              initial="slide"
              custom={direction}
              animate="visible"
              exit="exit"
            />
          </AnimatePresence>
        </div> */}
        <div className="relative w-full h-[490px] overflow-hidden">
          <Image
            fill
            key={gallery[index].img}
            src={gallery[index].img}
            alt="..."
            className="w-full h-full object-cover object-center rounded-md"
          />
        </div>
        <div className="flex items-center gap-5 w-full h-auto">
          {gallery.map((item, idx) => (
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
          {/* Prev button */}
          <div
            className="p-4 rounded-full cursor-pointer border border-warning block duration-700 delay-75 w-max group"
            onClick={handlePrev}
          >
            <div className={`h-6 w-full overflow-hidden`}>
              <h4
                className={`transition translate-y-0 group-hover:-translate-y-20 duration-700`}
              >
                <GoArrowLeft className="h-6 w-6 text-text-warning active:text-warning" />
              </h4>
              <h4
                className={`translate-y-20 transition group-hover:-translate-y-[22px] duration-700`}
              >
                <GoArrowLeft className="h-6 w-6 text-text-warning active:text-warning" />
              </h4>
            </div>
          </div>
          <div className="text-xl">
            <LazyMotion features={loadFeatures}>
              <m.span
                key={index}
                variants={slideVariants}
                initial="slide"
                animate="visible"
                exit="exit"
                className="w-max h-auto"
              >
                {gallery[index].id}&nbsp;
              </m.span>
              / {gallery.length}
            </LazyMotion>
          </div>
          {/* Next button */}
          <div
            className="p-4 rounded-full cursor-pointer border border-warning block duration-700 delay-75 w-max group"
            onClick={handleNext}
          >
            <div className={`h-6 w-full overflow-hidden`}>
              <h4
                className={`transition translate-y-0 group-hover:-translate-y-20 duration-700`}
              >
                <GoArrowRight className="h-6 w-6 text-text-warning active:text-warning" />
              </h4>
              <h4
                className={`translate-y-20 transition group-hover:-translate-y-[22px] duration-700`}
              >
                <GoArrowRight className="h-6 w-6 text-text-warning active:text-warning" />
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
