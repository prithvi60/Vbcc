"use client";
import BreadCrumb from "@/app/categories/BreadCrumb";
import { Modal } from "@/components/landing page/Modal";
import Image from "next/image";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Slider from "react-slick";

const ProductDetailsHero = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        beforeChange: (current, next) => setActiveIndex(next),
    };
    return (
        <section className="relative z-0 w-full h-full overflow-hidden font-Montserrat">
            <div className="relative w-full h-[130vh] md:h-[130vh] lg:h-[90vh] xl:h-[85vh] hero-mask bg-primary z-10"></div>
            <div className="absolute left-0 z-10 flex flex-col items-center w-full top-32 bg-white/70 lg:flex-row padding md:items-start">
                <BreadCrumb />
                <div className="block w-full py-10 space-y-4 md:py-12 lg:space-y-6 lg:w-3/5">
                    <h4 className="text-xl md:text-2xl font-medium !leading-[32px] text-primary">
                        Vacuum Sintering Furnance
                    </h4>
                    <p className="text-base md:text-lg font-medium !leading-[32px] text-primary">
                        Denkiro is the dedicated sub-brand for electric furnaces under VBCC,
                        embodying precision, efficiency, and innovation in thermal
                        processing. Denkiro electric furnaces are designed to meet the high
                        demands of various industries, offering reliable performance and
                        cutting-edge technology.{" "}
                    </p>
                    <div className="flex items-center gap-4 md:gap-8">
                        <Modal
                            styles={"bg-info text-white"}
                            title={"catalog now"}
                            type={"download"}
                            pageType={"main"}
                        />
                        <Modal
                            styles={"bg-white text-primary"}
                            title={"Request to buy"}
                            type={""}
                            pageType={"main"}
                        />
                    </div>
                </div>
                <div className="w-full h-full space-y-10 max-w-64 md:max-w-sm lg:max-w-md xl:max-w-2xl">
                    <div className="slider-container">
                        <Slider
                            arrows={false}
                            asNavFor={nav2}
                            ref={(slider) => (sliderRef1 = slider)}
                        >
                            {images.map((list, idx) => (
                                <div
                                    className="relative mx-auto w-52 h-52 md:w-60 md:h-60 xl:h-80 xl:w-80 group"
                                    key={idx}
                                >
                                    <Image
                                        alt="image"
                                        fill
                                        src={list}
                                        className="z-20 object-contain object-center"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="slider-container">
                        <Slider
                            asNavFor={nav1}
                            ref={(slider) => (sliderRef2 = slider)}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            {...settings}
                        >
                            {images.map((list, idx) => (
                                <div
                                    className={`relative w-full md:w-24 h-16 md:h-24 ${activeIndex === idx ? "border-2 border-info" : ""
                                        }`}
                                    key={idx}
                                >
                                    <Image
                                        alt="image"
                                        fill
                                        src={list}
                                        className="z-20 object-cover object-center"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetailsHero;

const images = ["/explore-1.png", "/explore-2.png", "/explore-3.png"];
