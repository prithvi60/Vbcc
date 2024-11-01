"use client"
import Image from "next/image";
import React from "react";
import { MdKeyboardDoubleArrowRight, MdOutlineFileDownload, MdRemoveRedEye } from "react-icons/md";
import Slider from "react-slick";
import { Modal } from "./Modal";

const ExploreProduction = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        arrows: false,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };
    return (
        <section className="relative w-full h-full px-6 pb-8 mb-20 space-y-5 text-4xl text-white md:space-y-10 font-Montserrat bg-primary md:px-12 xl:px-14 pt-36 md:pt-48 md:pb-8">
            <div className="flex flex-col items-center justify-between gap-10 md:gap-0 md:flex-row">
                <div className="w-full space-y-3 md:w-3/4 md:space-y-8">
                    <h2 className="text-[28px] font-bold tracking-wider !leading-10 md:text-[36px] lg:text-[44px] xl:text-[52px] w-full md:w-3/5">
                        Explore Products{" "}
                    </h2>
                    <p className="text-sm md:text-base !leading-8">
                        Denkiro Dental is a specialised sub-brand under VBCC, focused on
                        providing high-precision dental furnaces for the dental industry.
                        Tailored to meet the exacting standards of dental laboratories.
                        Denkiro Dental furnaces offer exceptional temperature control,
                        reliability, and ease. Designed for processes such as ceramic
                        firing, sintering, and glazing. These furnaces ensure consistent
                        results while enhancing workflow efficiency. With advanced
                        technology and a commitment to quality, Denkiro Dental supports
                        dental professionals in achieving the best outcomes.
                    </p>
                    <button className="px-6 font-semibold py-2 bg-info text-white w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-lg flex items-center text-sm md:text-base gap-3 capitalize">
                        Enquire now
                        <span>
                            <MdKeyboardDoubleArrowRight className="text-xl" />
                        </span>
                    </button>
                </div>
                <div className="relative w-full h-[380px] md:w-[280px] md:h-[420px]">
                    <Image
                        src={"/explore 1.jpg"}
                        fill
                        alt="image"
                        className="object-cover object-center "
                    />
                    <div className="absolute w-full h-full bg-[#293271] bg-opacity-60 top-0 left-0 z-0"></div>
                    <div className="absolute block space-y-3 bottom-16 left-8">
                        <Image alt="icon" src={"/dental-icon.svg"} height={50} width={50} />
                        <h5 className="text-lg tracking-wider uppercase lg:text-xl">
                            DENTAL
                        </h5>
                        <p className="w-3/5 text-sm lg:text-base md:w-3/4">
                            Over 100 products for ceramic industry.
                        </p>
                    </div>
                </div>
            </div>
            <div className="hidden md:grid md:grid-cols-4 place-content-center w-full h-[420px]">
                {productLists.map((list, idx) => (
                    <div className="relative w-full group" key={idx}>
                        <div className="relative w-32 h-32 mx-auto transition-all duration-500 ease-linear xl:w-44 xl:h-44">
                            {/* group-hover:w-full group-hover:h-56 group-hover:sm:w-44 */}
                            <Image
                                alt="image"
                                fill
                                src={list.img}
                                className="z-20 object-contain object-center"
                            />
                            <div className="absolute top-0 z-10 left-4 flex justify-between items-center rounded-full bg-gradient-to-b from-[#13294F56] to-[#6B778C56] bg-opacity-80 size-24 xl:size-36 transition-all duration-500 ease-linear"></div>
                            {/* <div className="group-hover:absolute group-hover:top-0 z-10 left-16 sm:left-0 xl:-left-2.5 hidden group-hover:flex justify-between items-center rounded-full bg-gradient-to-b from-[#13294F56] to-[#6B778C56] transition-all duration-500 ease-linear bg-opacity-80 size-40 xl:size-44"></div> */}
                        </div>
                        <h4 className="font-semibold text-center mx-auto text-[14px] md:text-[18px] xl:text-[24px] leading-7 tracking-wider w-full sm:w-3/4">
                            {list.title}
                        </h4>
                    </div>
                ))}
            </div>
            <div className="md:hidden slider-container">
                <Slider {...settings}>
                    {productLists.map((list, idx) => (
                        <div className="relative w-full group" key={idx}>
                            <div className="relative w-32 h-32 mx-auto transition-all duration-500 ease-linear xl:w-44 xl:h-44">
                                {/* group-hover:w-full group-hover:h-56 group-hover:sm:w-44 */}
                                <Image
                                    alt="image"
                                    fill
                                    src={list.img}
                                    className="z-20 object-contain object-center"
                                />
                                <div className="absolute top-0 z-10 left-4 flex justify-between items-center rounded-full bg-gradient-to-b from-[#13294F56] to-[#6B778C56] bg-opacity-80 size-24 xl:size-36 transition-all duration-500 ease-linear"></div>
                                {/* <div className="group-hover:absolute group-hover:top-0 z-10 left-16 sm:left-0 xl:-left-2.5 hidden group-hover:flex justify-between items-center rounded-full bg-gradient-to-b from-[#13294F56] to-[#6B778C56] transition-all duration-500 ease-linear bg-opacity-80 size-40 xl:size-44"></div> */}
                            </div>
                            <h4 className="font-semibold text-center mx-auto text-[14px] md:text-[18px] xl:text-[24px] !leading-tight tracking-wider w-full">
                                {list.title}
                            </h4>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="flex items-center justify-center gap-4 md:gap-8">
                {/* <button onClick={() => setIsOpen(true)} className="px-6 font-semibold py-2 bg-info text-white w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-lg flex items-center text-sm md:text-base gap-3 capitalize">
                    Download Brochure
                    <span>
                        <MdOutlineFileDownload className="text-xl" />
                    </span>
                </button> */}
                <Modal />
                <button className="px-6 font-semibold py-2 bg-white text-primary w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-lg flex items-center text-sm md:text-base gap-3 capitalize">
                    View Online
                    <span>
                        <MdRemoveRedEye className="text-xl" />
                    </span>
                </button>
            </div>
        </section>
    );
};

export default ExploreProduction;

const productLists = [
    { img: "/sample 1.png", title: "Zirconia Sintering Furnace" },
    { img: "/sample 2.png", title: "Burnout Furnace" },
    { img: "/sample 3.png", title: "Zirconia Sintering Furnace" },
    { img: "/sample 4.png", title: "Vacuum Pressing Furnace" },
];
