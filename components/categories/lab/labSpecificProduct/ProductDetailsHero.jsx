"use client";
import BreadCrumb from "@/components/categories/BreadCrumb";
import { Modal1 } from "@/components/landing page/Modal";
import { LabProductsList } from "@/libs/productsData";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import Slider from "react-slick";
import ProductDetails from "../../ProductDetails";
import MoreProducts from "../../MoreProducts";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const LabProductDetailsHero = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const path = usePathname().split("/").filter((x) => x);
    const filteredURI = path[path.length - 1];

    const [{ Images, productName, desc, keys, spec, headers, headers2, spec2, pdf }] = LabProductsList.filter(
        (val) => val.productName === filteredURI.replace(/_/g, " ")
    );

    const moreProducts = LabProductsList.filter((val) => val.productName !== filteredURI.replace(/_/g, " "));

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
                <div className="relative w-full h-[1200px] md:h-[1000px] lg:h-[700px] xl:h-[800px] bg-primary z-auto"></div>
                <div className="absolute left-0 flex flex-col items-center w-full top-32 bg-white/70 lg:flex-row padding md:items-start">
                    <BreadCrumb />
                    <div className="block w-full py-10 space-y-4 md:py-12 lg:space-y-6 lg:w-3/5">
                        <h4 className="text-xl md:text-3xl xl:text-4xl font-bold tracking-wide !leading-[32px] text-primary">
                            {productName}
                        </h4>
                        <p className="text-base md:text-lg font-medium !leading-[32px] text-primary">
                            {desc}
                        </p>
                        <div className="flex flex-col items-center gap-8 md:flex-row">
                            <button
                                type="submit"
                                className={`block px-3 md:px-6 py-3 group bg-info hover:bg-white text-center text-base duration-700 delay-75 font-urbanist mx-auto md:mx-0 capitalize w-max shadow-xl`}
                            >
                                <a href={pdf} download={`Denkiro - Brochure - Digital- ${productName}`} target="_blank">
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
                            <Modal1
                                styles={"bg-white text-primary"}
                                title={"Request to buy"}
                                type={"enquire"}
                                pageType={"main"}
                                page={productName}
                                query="laboratory"
                            />
                        </div>
                    </div>
                    <div className="z-auto w-full h-full mx-auto space-y-10 max-w-96 md:max-w-md xl:max-w-2xl">
                        <div className="relative z-0 slider-container h-full">
                            <Slider
                                asNavFor={nav2}
                                ref={(slider) => (sliderRef1 = slider)}
                                nextArrow={<NextArrow />}
                                prevArrow={<PrevArrow />}
                                waitForAnimate={false}
                                fade={true}
                                swipe={false}
                            >
                                {Images.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="relative w-full mx-auto h-64 sm:h-72 md:h-60 xl:h-80 group overflow-hidden"
                                    >
                                        <ZoomSlide item={item} idx={idx} shouldRender={true} />
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
                                    <Image
                                        key={idx}
                                        priority={false}
                                        loading="lazy"
                                        quality={100}
                                        width={80}
                                        height={80}
                                        alt={list.alt}
                                        title={list.alt}
                                        src={list.img}
                                        className={`object-contain object-center shrink-0 size-24 sm:size-28 xl:w-36 xl:h-40 ${activeIndex === idx ? "border-4 rounded-lg border-info" : ""}`}
                                    />
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            <ProductDetails keys={keys} specs={spec} headers={headers} page={"lab"} headers2={headers2} specs2={spec2} path={path[1]} />
            <MoreProducts data={moreProducts.slice(0, 2)} type={"laboratory"} />
        </>
    );
};

export default LabProductDetailsHero;

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={"p-1.5 md:p-2 xl:p-3 rounded-full bg-primary absolute top-1/2 cursor-pointer right-0 group"}
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
            className={"p-1.5 md:p-2 xl:p-3 z-10 rounded-full bg-primary absolute top-1/2 cursor-pointer left-0 group"}
            onClick={onClick}
        >
            <FaArrowLeft className="text-sm text-white md:text-lg xl:text-xl group-hover:text-info" />
        </div>
    );
}

const ZoomSlide = ({ item, idx, shouldRender }) => {
    const [isZoomed, setIsZoomed] = useState(false);
    const wrapperRef = useRef(null);

    if (!shouldRender) return null;

    return (
        <div className="w-full h-full">
            <TransformWrapper
                ref={wrapperRef}
                defaultScale={1}
                wheel={{ disabled: true }}
                pinch={{ disabled: true }}
                doubleClick={{ disabled: true }}
            >
                {({ zoomIn, resetTransform }) => (
                    <TransformComponent
                        wrapperStyle={{ height: '100%', width: '100%' }}
                        contentStyle={{ height: '100%', width: '100%' }}
                        wrapperClass="w-full h-full"
                        contentClass={`w-full h-full ${isZoomed ? "cursor-grab" : "cursor-default"}`}
                    >
                        <img
                            src={item.img}
                            alt={item.alt}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                pointerEvents: 'auto'
                            }}
                            className="transition-all duration-300"
                            onMouseEnter={() => {
                                zoomIn(1.2);
                                setIsZoomed(true);
                            }}
                            onMouseLeave={() => {
                                resetTransform();
                                setIsZoomed(false);
                            }}
                        />
                    </TransformComponent>
                )}
            </TransformWrapper>
        </div>
    );
};