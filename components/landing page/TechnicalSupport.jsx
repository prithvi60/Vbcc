"use client"
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "./UseWindowSize ";
import { Modal } from "./Modal";

const TechnicalSupport = () => {
    const [open, setOpen] = useState(items[0].id);
    return (
        <section className="flex flex-col items-center justify-center w-full h-full gap-16 px-6 py-8 overflow-hidden text-white md:flex-row font-Montserrat md:py-12 md:px-8 xl:px-14 bg-primary">
            <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[480px]">
                <Image
                    src={"/card 1.png"}
                    fill
                    alt="image"
                    className="object-cover object-center"
                />
                <div className="absolute top-0 left-0 z-0 w-full h-full bg-black bg-opacity-70"></div>
                <div className="absolute block w-full space-y-3 top-10 md:top-20 lg:top-10 -right-20 md:-right-14">
                    <h2 className="text-[28px] font-bold tracking-wider !leading-tight md:text-[36px] lg:text-[44px] xl:text-[52px] w-full">
                        How You WIN with <span className="text-info">VBCC ?</span>
                    </h2>
                    <div className="flex w-full md:justify-end">
                        <Modal styles={"bg-info text-white"} title={"Enquire now"} type={"enquire"}  />
                    </div>
                </div>
            </div>
            <div className="flex h-[380px] md:h-[520px] w-full max-w-4xl shadow overflow-hidden">
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
                        />
                    );
                })}
            </div>
        </section>
    );
};

const Panel = ({ open, setOpen, id, title, imgSrc, description }) => {
    const { width } = useWindowSize();
    const isOpen = open === id;

    return (
        <>
            <button
                className="relative flex items-end justify-start gap-4 p-2 transition-colors bg-white md:justify-end md:p-10 hover:bg-slate-50 group"
                onClick={() => setOpen(id)}
                style={{
                    backgroundImage: `url('${imgSrc}')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <span
                    style={{
                        writingMode: "vertical-rl",
                    }}
                    className="relative font-semibold text-left md:text-[26px] xl:text-[32px] leading-7 tracking-wider rotate-180 block text-white before:-left-1 z-10 py-5 md:py-8 before:p-4 before:py-16 md:before:p-11 before:absolute before:top-0 md:before:-left-6 before:-z-10 before:bg-info"
                >
                    {title}
                </span>
                {/* <span className="relative block text-xl before:py-8 before:px-14 before:absolute before:-top-5 before:left-0 z-10 before:-z-10 before:bg-info font-semibold lg:hidden text-[22px]">{title}</span> */}
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
                            className="px-4 py-2 text-sm text-white md:text-base"
                        >
                            <p>{description}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default TechnicalSupport;

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

const items = [
    {
        id: 1,
        title: "Expert Technical Support & Services",
        imgSrc:
            '/card 1.png',
        description:
            "We provide pan-India technical support and services. Our technicians are available six days a week to help you with any issues, ensuring minimal downtime and maximum productivity. ",
    },
    {
        id: 2,
        title: "Seamless Installation & Training",
        imgSrc:
            '/card 3.jpg',
        description:
            "Our experienced professionals will do a hassle-free installation and guide you through our product features and functionalities. We also provide timely replacements of any spare parts.",
    },
    {
        id: 3,
        title: "Tailor Made Promise",
        imgSrc:
            '/card 4.jpg',
        description:
            "We understand that each client has unique requirements that may extend beyond our standardize product offerings. Our “Tailor-Made” promise ensures that we customize our designs to meet your specific needs.",
    }
];
