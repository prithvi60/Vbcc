"use client";
import Image from "next/image";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMdQuote } from "react-icons/io";
import Slider from "react-slick";

const TestimonialLanding = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 810,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <section className="w-full h-full px-6 py-8 space-y-10 text-4xl text-black md:px-12 xl:px-20 font-Montserrat">
            <h3 className="text-[26px] md:text-[32px] font-bold tracking-wider xl:text-[48px] leading-tight text-info">
                Our Testimonial
            </h3>
            <div className="w-full h-full slider-container">
                <Slider {...settings}>
                    {TestimonialList.map((list, idx) => (
                        <div
                            key={idx}
                            className="relative border-t-3 border-info bg-gradient-to-b from-[#102242] via-[#FFFFFF1A] to-[#FFFFFF] h-full w-full sm:w-80"
                        >
                            <div className="absolute top-0 left-0 w-full h-2">
                                <Image
                                    alt="svg"
                                    src={"/svg 1.svg"}
                                    fill
                                    className="object-contain object-center"
                                />
                            </div>
                            <div className="w-full p-5 md:p-6">
                                <div className="flex items-center justify-center w-full h-56">
                                    <IoMdQuote className="text-8xl md:text-9xl text-info" />
                                </div>
                                <p className="w-full text-sm leading-tight md:text-base">
                                    {list.para}
                                </p>
                            </div>
                            <div className="flex items-center gap-5 p-5 text-white md:p-6 bg-primary p-">
                                <div className="relative w-20 h-20">
                                    <Image
                                        alt="svg"
                                        src={list.icon}
                                        fill
                                        className="object-contain object-center"
                                    />
                                </div>
                                <div className="block space-y-2 md:space-y-3">
                                    <h4 className="text-lg md:text-xl">{list.title}</h4>
                                    <p className="text-xs tracking-wide">{list.subtle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default TestimonialLanding;

const TestimonialList = [
    {
        icon: "https://ik.imagekit.io/webibee/VBCC/client-logo/AU.svg?updatedAt=1731397607533",
        para: "Units operate satisfactorily, VBCC High Temperature Instrument service enabled our research project's success.",
        title: "Anna University",
        subtle: "Department of Ceramic technology",
    },
    {
        icon: "https://ik.imagekit.io/webibee/VBCC/client-logo/vit.svg?updatedAt=1731397607736",
        para: "The Custom Hot Press met our needs, stayed efficient throughout and we're very delighted with it",
        title: "VIT University",
        subtle: "Centre of Nano technology research",
    },
    {
        icon: "https://ik.imagekit.io/webibee/VBCC/client-logo/ISRO.svg?updatedAt=1731397607695",
        para: "No Company in India, except VBCC High Temperature took this challenging task to succession.",
        title: "ISRO",
        subtle: "Department of Space",
    },
    {
        icon: "https://ik.imagekit.io/webibee/VBCC/client-logo/AU.svg?updatedAt=1731397607533",
        para: "Units operate satisfactorily, VBCC High Temperature Instrument service enabled our research project's success.",
        title: "Anna University",
        subtle: "Department of Ceramic technology",
    },
    {
        icon: "https://ik.imagekit.io/webibee/VBCC/client-logo/vit.svg?updatedAt=1731397607736",
        para: "The Custom Hot Press met our needs, stayed efficient throughout and we're very delighted with it",
        title: "VIT University",
        subtle: "Centre of Nano technology research",
    },
    {
        icon: "https://ik.imagekit.io/webibee/VBCC/client-logo/ISRO.svg?updatedAt=1731397607695",
        para: "No Company in India, except VBCC High Temperature took this challenging task to succession.",
        title: "ISRO",
        subtle: "Department of Space",
    },
];


function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={
                "p-1.5 md:p-2 xl:p-3 rounded-full bg-primary absolute top-1/2 cursor-pointer -right-5 md:-right-10 xl:-right-14 group"
            }
            onClick={onClick}
        >
            <FaArrowRight className="text-sm text-white md:text-lg xl:text-xl group-hover:text-info" />
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={
                "p-1.5 md:p-2 xl:p-3 rounded-full bg-primary absolute top-1/2 cursor-pointer -left-5 md:-left-10 xl:-left-14 group"
            }
            onClick={onClick}
        >
            <FaArrowLeft className="text-sm text-white md:text-lg xl:text-xl group-hover:text-info" />
        </div>
    );
}