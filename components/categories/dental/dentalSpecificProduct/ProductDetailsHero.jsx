"use client";
import BreadCrumb from "@/app/categories/BreadCrumb";
import { Modal } from "@/components/landing page/Modal";
import { DentalProductsList } from "@/libs/productsData";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import Slider from "react-slick";
import ProductDetails from "../../ProductDetails";
import MoreProducts from "../../MoreProducts";

const ProductDetailsHero = ({ pdfFile, pdfName }) => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const path = usePathname()
        .split("/")
        .filter((x) => x);
    const filteredURI = path[path.length - 1];

    const [{ Images, productName, desc, keys, spec }] = DentalProductsList.filter(
        (val) => val.productName === decodeURIComponent(filteredURI)
    );

    const moreProducts = DentalProductsList.filter(
        (val) => val.productName !== decodeURIComponent(filteredURI)
    );
    // console.log(moreProducts.slice(0, 2));

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
        <>
            <section className="relative z-auto w-full h-full overflow-hidden font-Montserrat">
                <div className="relative w-full h-[140vh] md:h-[130vh] lg:h-[90vh] xl:h-[85vh] hero-mask bg-primary z-10"></div>
                <div className="absolute left-0 z-10 flex flex-col items-center w-full top-32 bg-white/70 lg:flex-row padding md:items-start">
                    <BreadCrumb />
                    <div className="block w-full py-10 space-y-4 md:py-12 lg:space-y-6 lg:w-3/5">
                        <h4 className="text-xl md:text-2xl font-medium !leading-[32px] text-primary">
                            {productName}
                        </h4>
                        <p className="text-base md:text-lg font-medium !leading-[32px] text-primary">
                            {desc !== ""
                                ? desc
                                : "Denkiro is the dedicated sub-brand for electric furnaces under VBCC, embodying precision, efficiency, and innovation in thermal processing. Denkiro electric furnaces are designed to meet the high demands of various industries, offering reliable performance and cutting-edge technology. "}
                        </p>
                        <div className="flex flex-col items-center gap-8 md:flex-row">
                            <button
                                type="submit"
                                className={`block px-3 md:px-6 py-3 group bg-info hover:bg-white text-center text-base duration-700 delay-75 font-urbanist mx-auto md:mx-0 capitalize w-max shadow-xl`}
                            >
                                <a href={pdfFile} download={pdfName}>
                                    <div className={`h-6 w-full overflow-hidden`}>
                                        <h3
                                            className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-white flex items-center gap-2`}
                                        >
                                            catalog now
                                            <span>
                                                <MdOutlineFileDownload className="text-xl text-white" />
                                            </span>
                                        </h3>
                                        <h3
                                            className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 flex items-center gap-2 text-primary`}
                                        >
                                            catalog now
                                            <span>
                                                <MdOutlineFileDownload className="text-xl text-primary" />
                                            </span>
                                        </h3>
                                    </div>
                                </a>
                            </button>
                            <Modal
                                styles={"bg-white text-primary"}
                                title={"Request to buy"}
                                type={""}
                                pageType={"main"}
                                page={""}
                            />
                        </div>
                    </div>
                    <div className="w-full h-full mx-auto space-y-10 max-w-96 md:max-w-md xl:max-w-2xl">
                        <div className="slider-container">
                            <Slider
                                arrows={false}
                                asNavFor={nav2}
                                ref={(slider) => (sliderRef1 = slider)}
                            >
                                {Images.map((list, idx) => (
                                    <div
                                        className="relative w-full mx-auto h-52 md:h-60 xl:h-80 group"
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
                                {Images.map((list, idx) => (
                                    <div
                                        className={`relative !w-full lg:!w-36 h-16 md:h-24 ${activeIndex === idx ? "border-2 border-info" : ""
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
            <ProductDetails keys={keys} specs={spec} />
            <MoreProducts data={moreProducts.slice(0, 2)} />
        </>
    );
};

export default ProductDetailsHero;
