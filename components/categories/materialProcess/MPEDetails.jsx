"use client";
import BreadCrumb from "@/components/categories/BreadCrumb";
import { Modal1 } from "@/components/landing page/Modal";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import ProductDetails from "../ProductDetails";
import MoreProducts from "../MoreProducts";

const MPEDetails = ({ data, type }) => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    // const [height, setHeight] = useState();
    const path = usePathname()
        .split("/")
        .filter((x) => x);
    const filteredURI = path[path.length - 1];
    // console.log(filteredURI);

    const [{ Images, productName, desc, keys, headers, spec, pdf }] =
        data.filter(
            (val) => val.productName === filteredURI.replace(/_/g, " ")
        );

    const moreProducts = data.filter(
        (val) => val.productName !== filteredURI.replace(/_/g, " ")
    );
    // console.log(moreProducts.slice(0, 2));

    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    const title = Images[activeIndex].title

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
                <div className="relative w-full h-[1400px] md:h-[1200px] lg:h-[850px] bg-primary z-auto"></div>
                <div className="absolute left-0 flex flex-col items-center w-full h-full top-32 bg-white/70 lg:flex-row padding md:items-start">
                    <BreadCrumb />
                    <div className="block w-full pt-32 pb-10 space-y-4 md:py-12 lg:space-y-6 lg:w-3/5">
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
                                <a
                                    href={pdf}
                                    download={`Material Processing-Brochure-${productName}`}
                                    target="_blank"
                                >
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
                            />
                        </div>
                    </div>
                    <div className="z-auto w-full h-full mx-auto space-y-6 max-w-96 md:max-w-md">
                        <div className="relative z-0 slider-container">
                            {title && (
                                <h5 className="absolute z-20 w-full p-1 text-sm font-medium tracking-wider left-5 backdrop-blur-lg sm:left-10 lg:left-20 -bottom-48 lg:-bottom-48 text-primary">{title}</h5>
                            )}
                            <Slider
                                asNavFor={nav2}
                                ref={(slider) => (sliderRef1 = slider)}
                                nextArrow={<NextArrow />}
                                prevArrow={<PrevArrow />}
                                waitForAnimate={false}
                                fade={true}
                            >
                                {Images.map((list, idx) => (
                                    <div

                                        className="relative w-full mx-auto h-52 md:h-60 group"
                                        key={idx}
                                    >
                                        {/* {list.title && (
                                            <h5 className="absolute z-20 p-1 text-sm font-medium tracking-wider bg-white rounded-sm backdrop-blur-lg left-14 lg:left-20 -bottom-32 lg:-bottom-48 text-primary">{list.title}</h5>
                                        )} */}
                                        <InnerImageZoom
                                            fadeDuration={300}
                                            mobileBreakpoint={640}
                                            hideHint
                                            src={list.img}
                                            zoomSrc={list.img}
                                            zoomScale={1}
                                            alt={`${list.alt}`}
                                            // fullscreenOnMobile={isIOS}
                                            zoomType="hover"
                                            hideCloseButton={false}
                                            className="object-contain object-center"
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
                                        className={`relative !w-full lg:!w-36 h-24 cursor-pointer md:h-32 ${activeIndex === idx ? "border-2 border-info" : ""
                                            }`}
                                        key={idx}
                                    >
                                        <Image
                                            alt={list.alt}
                                            fill
                                            src={list.img}
                                            className="z-20 object-cover object-center"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            <ProductDetails keys={keys} specs={spec} headers={headers} path={filteredURI} />
            <MoreProducts data={moreProducts.slice(0, 2)} type={type} />
        </>
    );
};

export default MPEDetails;

// const InnerZoomComponent = ({ imageSrc }) => {

//     const zoomScale = 1.5;
//     useEffect(() => {
//         const img = new Image();
//         img.src = imageSrc;

//         img.onload = () => {
//             setHeight(img.naturalHeight * zoomScale);
//         }
//     }, [imageSrc]);
//     return (
//         <InnerImageZoom
//             fadeDuration={300}
//             mobileBreakpoint={640}
//             hideHint
//             src={imageSrc}
//             zoomSrc={imageSrc}
//             zoomScale={0.5}
//             alt={`image-${idx}`}
//             // fullscreenOnMobile={isIOS}
//             zoomType="hover"
//             hideCloseButton={false}
//             className="object-cover object-center"
//         />
//     );
// }

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={
                "p-1.5 md:p-2 xl:p-3 z-10 rounded-full bg-primary absolute top-1/2 cursor-pointer right-0 group"
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
                "p-1.5 md:p-2 z-10 xl:p-3 rounded-full bg-primary absolute top-1/2 cursor-pointer -left-6 group"
            }
            onClick={onClick}
        >
            <FaArrowLeft className="text-sm text-white md:text-lg xl:text-xl group-hover:text-info" />
        </div>
    );
}
