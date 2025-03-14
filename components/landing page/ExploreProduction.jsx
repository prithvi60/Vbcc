"use client";
import Image from "next/image";
import React from "react";
import {
    MdKeyboardDoubleArrowRight,
    MdOutlineFileDownload,
    MdRemoveRedEye,
} from "react-icons/md";
import Slider from "react-slick";
import { Modal, Modal1 } from "./Modal";
import { productLists } from "@/libs/productsData";

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
        <section name="products" id="products" className="relative w-full h-full px-6 pb-8 mb-40 space-y-5 text-4xl text-white md:space-y-10 font-Montserrat bg-primary md:px-12 xl:px-14 pt-36 md:pt-48 md:pb-8">
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
                    <Modal1 styles={"bg-info text-white"} title={"Enquire now"} type={"enquire"} page={"landing"} query="laboratory" />
                </div>
                <div className="relative w-full h-[380px] md:w-[280px] md:h-[420px] before:absolute before:border-2 before:border-info before:top-3 before:-left-3 before:md:h-[420px] before:w-full before:z-10 before:h-[380px]">
                    <Image
                        src={"https://ik.imagekit.io/webibee/VBCC/homepage/explore%201.jpg?updatedAt=1733225201844"}
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
            <div className="grid w-full h-full grid-cols-2 py-10 md:grid-cols-4 place-content-center" id={"products"}>
                <ProductsComponent />
            </div>
            <div className="hidden h-full slider-container">
                <Slider {...settings}>
                    {productLists.map((list, idx) => (
                        <div className="relative w-full space-y-8 group" key={idx}>
                            <div className="relative mx-auto transition-all duration-500 ease-linear transform size-28 group-hover:scale-150">
                                <Image
                                    alt="image"
                                    fill
                                    src={list.img}
                                    className="z-20 object-contain object-center"
                                />
                                <div className="absolute top-0 z-10 left-1.5 flex justify-between items-center rounded-full bg-gradient-to-b from-[#13294F56] to-[#6B778C56] bg-opacity-80 size-24 transition-all duration-500 ease-linear group-hover:scale-[0.80] group-hover:bg-info"></div>
                            </div>
                            <h4 className="font-semibold text-center mx-auto text-[14px] md:text-[16px] xl:text-[24px] leading-7 tracking-wider w-full sm:w-3/4">
                                {list.title}
                            </h4>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="flex items-center justify-center gap-4 md:gap-8">
                <Modal1 styles={"bg-info text-white"} title={"download now"} type={"download"} page={"landing"} query="laboratory" />
                {/* <Modal styles={"bg-white text-primary"} title={"View Online"} type={"view"} /> */}
            </div>
        </section>
    );
};

export default ExploreProduction;



const ProductsComponent = () => {
    return (
        <>
            {productLists.map((list, idx) => (
                <div className="relative w-full space-y-8 group font-Montserrat" key={idx}>
                    <div className="relative mx-auto transition-all duration-500 ease-linear transform w-36 h-36 group-hover:scale-150 xl:w-52 xl:h-52">
                        <Image
                            alt="image"
                            fill
                            src={list.img}
                            className="z-20 object-contain object-center"
                        />
                        <div className="absolute top-0 z-10 left-1 flex justify-between items-center rounded-full bg-gradient-to-b from-[#13294F56] to-[#6B778C56] bg-opacity-80 size-32 xl:size-48 transition-all duration-500 ease-linear group-hover:scale-[0.80] group-hover:bg-gradient-to-b group-hover:from-info group-hover:to-info"></div>
                    </div>
                    <h4 className="font-semibold text-center mx-auto text-[14px] md:text-[16px] xl:text-[24px] leading-7 tracking-wider w-full sm:w-3/4">
                        {list.title}
                    </h4>
                    <div
                        className="absolute hidden group-hover:block -left-10 top-1/2"
                    // className="absolute hidden group-hover:block -bottom-56 lg:-bottom-60 -right-10 lg:-right-6"
                    >
                        <h4 className="flex flex-col items-center justify-center p-2 text-xs font-semibold tracking-wide transition-all duration-500 ease-linear transform bg-white border-2 rounded-xl lg:text-base xl:text-xl w-max text-primary border-info"> Energy Efficiency<span>{list.energy}</span></h4>
                    </div>
                    <div
                        className="absolute right-0 hidden group-hover:block top-1/2"
                    // className="absolute hidden group-hover:block -left-6 lg:left-0 -bottom-72 lg:-bottom-80"
                    >
                        <h4 className="flex flex-col items-center justify-center p-2 text-xs font-semibold tracking-wide bg-white border-2 lg:text-base xl:text-xl w-max text-primary rounded-xl border-info">Temperature<span>{list.temp}</span> </h4>
                    </div>
                </div>
            ))}
        </>
    );
};
