import Image from "next/image";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import CompanyStats from "./CompanyStats";

const LandingHero = () => {
    return (
        <section className="relative w-full h-full text-white mb-7">
            <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <div className="relative w-full h-screen hero-mask">
                    <Image
                        alt="background image"
                        src="/herobg.jpg"
                        fill
                        className="z-0 object-cover object-center"
                    />
                    <div className="absolute w-full h-full bg-[#293271] bg-opacity-60 z-10"></div>
                </div>
                <div className="absolute z-20 w-[70%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-Montserrat">
                    <div className="flex flex-col items-center w-full h-full gap-5 md:flex-row md:gap-0">
                        <div className="w-full md:w-4/5">
                            <div className="w-full space-y-4 md:w-1/2 xl:w-4/5">
                                <p className="w-full text-sm font-medium leading-tight md:text-base">
                                    We enhance restorative and prosthetics treatments with our
                                    state-of-the-art dental furnaces
                                </p>
                                <h2 className="text-[24px] font-bold tracking-wider md:text-[48px] xl:text-[64px] leading-tight">
                                    INDIA’S PREMIUM DENTAL FURNACES
                                </h2>
                                <button className="px-6 font-semibold py-2 bg-info text-white w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-lg flex items-center text-sm md:text-base gap-3">
                                    Hover me
                                    <span>
                                        <MdKeyboardDoubleArrowRight className="text-xl" />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="relative w-full md:w-1/2 xl:w-2/5">
                            <div className="relative w-full h-44 md:h-56 xl:h-72">
                                <Image alt="image" fill src={"/hero-1.png"} className="z-20 object-contain object-center" />
                            </div>
                            <h4 className="font-semibold text-center text-[16px] md:text-[26px] xl:text-[32px] leading-7 tracking-wider">Zirconia Sintering Furnance</h4>
                            <div className="absolute top-3 z-10 left-16 md:left-6 xl:left-10 flex justify-between items-center rounded-full bg-gradient-to-b from-[#13294F56] to-[#6B778C56] bg-opacity-80 size-28 md:size-52 xl:size-64"></div>
                        </div>
                    </div>
                </div>
            </div>
            <CompanyStats />
        </section>
    );
};

export default LandingHero;
