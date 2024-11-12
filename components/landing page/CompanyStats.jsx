"use client"
import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const CompanyStats = () => {
    return (
        <div className="absolute right-0 z-20 md:w-4/5 md:-bottom-28 lg:-bottom-40 xl:-bottom-48 2xl:-bottom-56 left-1 md:left-auto">
            <div
                className="relative z-10 px-6 py-8 bg-center bg-no-repeat bg-cover h-44 md:h-52 lg:h-64 xl:h-72 2xl:h-[380px] card-mask border-3 border-secondary"
                style={{
                    backgroundImage: "url('/counterBg.png')"
                }}
            >
                <div className="absolute w-full h-full bg-[#293271] bg-opacity-60 top-0 left-0 z-20"></div>
                <div className="relative z-30 flex flex-row flex-wrap items-center justify-center h-full gap-3 md:gap-7 xl:gap-9 md:flex-nowrap font-Montserrat">
                    <Stat num={500} suffix="+" subheading="Satisfied Clientele" />
                    <div className="bg-white h-12 w-[1px]" />
                    <Stat num={15000} decimals={1} suffix="+" subheading="Instruments Called" />
                    <div className="hidden sm:block bg-white h-12 w-[1px]" />
                    <Stat num={22} suffix="+" subheading="Years of Expertise" />
                </div>
            </div>
        </div>
    );
};


const Stat = ({ num, suffix, decimals = 0, subheading }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (!isInView) return;

        animate(0, num, {
            duration: 2.5,
            onUpdate(value) {
                if (!ref.current) return;

                ref.current.textContent = value.toFixed(decimals);
            },
        });
    }, [num, decimals, isInView]);

    return (
        <div className="flex items-center py-2 gap-2.5 md:gap-5 sm:py-0 w-min">
            <p className="text-xs text-white md:w-1/2 sm:text-base lg:text-lg 2xl:text-4xl">{subheading}</p>
            <p className="font-semibold text-center text-base md:text-[22px] lg:text-[30px] xl:text-[36px] 2xl:text-[64px] tracking-wider text-info w-max">
                <span ref={ref}></span>
                {suffix}
            </p>
        </div>
    );
};


export default CompanyStats