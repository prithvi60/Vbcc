"use client";
import othersData from "@/libs/others.json";
import Link from "next/link";
import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import { ProgressBar } from "./ProgressBar";
import { motion, AnimatePresence, LazyMotion } from "framer-motion";
import { useWindowSize } from "./landing page/UseWindowSize ";
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Modal2 } from "./landing page/Modal";
import { TSBox } from "@/svg_components/LandingHeroBox";
import { items } from "@/libs/otherPage";
const ImgSlider = [
  { img: "https://ik.imagekit.io/webibee/VBCC/VBCC.png", title: "Vbcc" },
  { img: "https://ik.imagekit.io/webibee/VBCC/HWD1.png", title: "Strategize" },
  { img: "https://ik.imagekit.io/webibee/VBCC/HWD2.png", title: "Design" },
  { img: "https://ik.imagekit.io/webibee/VBCC/HWD3.png", title: "Engineering" },
];

const loadFeatures = () =>
  import("@/libs/framer_feature").then((res) => res.default);

const HowWeDo = () => {
  const [slide, setSlide] = useState(0);
  const [open, setOpen] = useState(items[0].id);

  const slideVariants = {
    entry: {
      y: 70,
    },
    visible: {
      y: 0,
    },
    exit: {
      y: -70,
    },
  };
  return (
    <>
      <section className='relative z-auto w-full h-full overflow-hidden text-white bg-primary font-Montserrat'>
        <div className='flex flex-col items-center w-full h-full md:flex-row padding'>
          <div className='block w-full space-y-4 py-14 md:py-20 md:space-y-6 md:w-3/5'>
            <h4 className='text-3xl font-bold tracking-wide md:text-4xl xl:text-5xl text-info'>The "Tailor Made" Promise </h4>
            <p className='text-base md:text-lg !leading-[32px] text-secondary'>At VBCC, we understand that each client has unique requirements that may extend beyond our standardized product offerings. Our "Tailor-Made" promise ensures that we customize our designs to meet your specific needs. Whether it involves modifying existing products or creating entirely new solutions, our team of experts works closely with you to understand your challenges and deliver equipment that perfectly aligns with your operational goals. With a focus on flexibility and innovation, we provide bespoke solutions that enhance  efficiency, precision, and performance, ensuring your complete satisfaction and success. </p>
          </div>
          <div className="relative z-0 mx-auto w-52 h-52 md:w-60 md:h-60 xl:h-80 xl:w-80 group">
            <Image
              alt="image"
              fill
              src={"https://ik.imagekit.io/webibee/VBCC/homepage/tailor-1.png?updatedAt=1733225442253"}
              className="z-10 object-contain object-center transition ease-linear transform group-hover:scale-125 duration-400"
            />
            <div className="absolute top-2 md:top-8 group-hover:scale-80 transition-colors duration-400 ease-in-out z-0 left-6 flex justify-between items-center rounded-full bg-gradient-to-b from-[#13294F56] to-[#6B778C56] shadow-lg blur-sm size-44 md:size-56 xl:size-72 group-hover:bg-gradient-to-b group-hover:from-info group-hover:to-info"></div>
          </div>
        </div>
        <div className='absolute left-0 w-0 h-28 -top-6 md:h-36 md:w-72'>
          <Image src={"/vector1blue.svg"} fill alt='' className='object-contain object-center' />
        </div>
        <div className='absolute right-0 w-48 h-28 -bottom-6 md:h-36 md:w-72'>
          <Image src={"/vector2blue.svg"} fill alt='' className='object-contain object-center' />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center w-full h-full gap-16 px-6 pt-10 pb-8 text-white lg:gap-40 lg:flex-row font-Montserrat md:px-8 bg-primary">
        <div className="relative w-full lg:w-1/4">
          <div className="relative w-[250px] h-[380px] md:w-[280px] lg:w-[340px] md:h-[380px] lg:h-[480px] z-10 mx-auto">
            <Image
              src={"https://ik.imagekit.io/webibee/VBCC/homepage/card%201.png?updatedAt=1733225337760"}
              fill
              alt="image"
              className="object-cover object-center"
            />
            <div className="absolute top-0 left-0 z-0 w-full h-full bg-black bg-opacity-70"></div>
            <div className="absolute z-50 block w-full space-y-3 top-10 md:top-20 lg:top-10 -right-3 md:-right-20 ">
              <h2 className="text-[28px] font-bold tracking-wider !leading-tight md:text-[36px] lg:text-[44px] xl:text-[52px] w-full capitalize">
                How we <span className="text-info">do it? </span>
              </h2>
              <Modal2 pageType={"main"} page={"Home"} query="laboratory" />
            </div>
            <div className="absolute z-10 -top-7 -left-5 md:-left-5 md:-top-8 lg:-top-8 lg:-left-14">
              <TSBox className={"w-[300px] h-[440px] md:w-[320px] md:h-[440px] lg:w-[450px] lg:h-[550px] fill-none"} />
            </div>
          </div>
        </div>
        <div className="flex h-[380px] md:h-[520px] w-full max-w-7xl shadow overflow-hidden">
          {items.map((item) => {
            return (
              <Panel
                key={item.id}
                open={open}
                setOpen={setOpen}
                id={item.id}
                Icon={item.Icon}
                title={item.title}
                imgSrc={item.imgSrc}
                description={item.description}
                href={"/contact"}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

const Panel = ({ open, setOpen, id, title, imgSrc, description, href }) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className={`relative z-auto items-end justify-start gap-4 p-10 transition-colors bg-white md:justify-end md:p-20 hover:bg-slate-50 group ${isOpen ? "hidden" : "flex"}`}
        onClick={() => setOpen(id)}
        style={{
          backgroundImage: `url('${imgSrc}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Link
          style={{
            writingMode: "vertical-rl",
          }}
          href={"/contact"}
          className={`leading-7 tracking-wider rotate-180 block px-2 py-2 md:py-6 group bg-white shadow-2xl shadow-black bg-opacity-20 transition-colors duration-400 ease-out hover:bg-primary text-center text-base font-urbanist capitalize max-h-48 w-max absolute top-8 right-5 md:top-80 md:left-3`}
        >
          <h3
            className={`text-white flex items-center gap-2`}
          >
            Know More
            <span><MdKeyboardDoubleArrowRight className="text-xl text-white rotate-90" /></span>
          </h3>
        </Link>
        <span
          style={{
            writingMode: "vertical-rl",
          }}
          className="absolute bottom-4 right-7 font-semibold text-left md:text-[26px] xl:text-[32px] leading-7 tracking-wider rotate-180 block text-white before:-left-1 z-0 py-5 md:py-8 before:p-4 before:py-6 md:before:p-11 before:absolute before:top-0 md:before:-left-6 before:-z-10 before:bg-info"
        >
          {title}
        </span>

      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url('${imgSrc}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="relative flex items-end w-full h-full overflow-hidden"
          >
            <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-t from-[#F06F38E5] to-[#00000000]"></div>
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-6 space-y-4 text-sm text-white md:text-base"
            >
              <p>{description}</p>
              <Link
                href={href}
                className={`block p-2  md:px-6 md:py-3 group bg-info shadow-2xl shadow-black bg-opacity-30 hover:bg-primary text-center text-sm md:text-base duration-700 delay-75 font-urbanist capitalize w-max`}
              >
                <div className={`h-6 w-full overflow-hidden`}>
                  <h3
                    className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-white flex items-center gap-2`}
                  >
                    Know More
                    <span><MdKeyboardDoubleArrowRight className="text-sm text-white md:text-xl" /></span>
                  </h3>
                  <h3
                    className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-white flex items-center gap-2`}
                  >
                    Know More
                    <span><MdKeyboardDoubleArrowRight className="text-sm text-white md:text-xl" /></span>
                  </h3>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HowWeDo;


const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};


