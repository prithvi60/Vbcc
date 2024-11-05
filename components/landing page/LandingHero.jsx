import Image from "next/image";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import CompanyStats from "./CompanyStats";
import { RxDownload } from "react-icons/rx";
import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa";
import { FaLinkedinIn, FaSquareWhatsapp, FaXTwitter } from "react-icons/fa6";
import { Modal } from "./Modal";
import { ResponsiveSVG } from "@/svg";
const LandingHero = () => {
    return (
        <section className="relative w-full h-full text-white mb-7">
            <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <div className="absolute -top-5 md:-top-3 xl:-top-5 2xl:-top-11 2xl:-left-2.5 size-28 left-1 md:size-24 2xl:size-52 xl:size-32">
                    <Image
                        alt="VBCC Logo"
                        src="/VBCC - Logo.svg"
                        fill
                        className="z-0 object-cover object-center"
                    />
                </div>
                <div className="relative w-full h-[120dvh] md:h-[110dvh] hero-mask">
                    <Image
                        alt="background image"
                        src="/herobg.jpg"
                        fill
                        className="z-0 object-cover object-center"
                    />
                    <div className="absolute w-full h-full bg-[#293271] bg-opacity-60 z-10"></div>
                </div>
                <div className="absolute z-20 w-[80%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-Montserrat ">
                    <div className="absolute left-0 hidden w-full md:block -top-20">
                        <ResponsiveSVG />
                    </div>
                    <div className="absolute left-0 block w-full h-auto md:hidden -top-4">
                        <ResponsiveSVG />
                    </div>
                    <div className="flex flex-col items-center w-full h-full gap-10 md:flex-row">
                        <div className="flex items-center gap-5 md:gap-16 xl:gap-20">
                            <ul className="flex flex-col items-center justify-center gap-3">
                                <li>
                                    <Link href={""} className="hover:animate-pulse ">
                                        <FaLinkedinIn className="text-lg text-white md:text-2xl" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""} className="hover:animate-pulse ">
                                        <FaFacebookF className="text-lg text-white md:text-2xl" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""} className="hover:animate-pulse ">
                                        <FaInstagram className="text-lg text-white md:text-2xl" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""} className="hover:animate-pulse ">
                                        <FaYoutube className="text-lg text-white md:text-2xl" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""} className="hover:animate-pulse ">
                                        <FaXTwitter className="text-lg text-white md:text-2xl" />
                                    </Link>
                                </li>
                            </ul>
                            <div className="w-full md:w-4/5">
                                <div className="w-full space-y-2 md:space-y-4 md:w-4/5 xl:w-4/5">
                                    <p className="w-full text-xs font-medium leading-tight md:text-sm xl:text-base">
                                        We enhance restorative and prosthetics treatments with our
                                        state-of-the-art dental furnaces
                                    </p>
                                    <h2 className="text-[28px] font-bold tracking-wider md:text-[48px] xl:text-[64px] leading-tight">
                                        INDIA’S PREMIUM DENTAL FURNACES
                                    </h2>
                                    <Modal styles={"bg-info text-white !rounded-full !z-[999]"} title={"Products"} />
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full md:w-1/2 xl:w-2/5">
                            <div className="relative w-48 h-48 mx-auto md:w-56 md:h-56 xl:h-72 xl:w-72 group">
                                <Image
                                    alt="image"
                                    fill
                                    src={"/hero-1.png"}
                                    className="z-20 object-contain object-center"
                                />
                                <div className="absolute top-2 md:top-4 group-hover:bg-info transition-colors duration-400 ease-in-out z-10 left-1 flex justify-between items-center rounded-full bg-gradient-to-b from-[#13294F56] to-[#6B778C56] bg-opacity-80 size-44 md:size-52 xl:size-64"></div>
                            </div>
                            <h4 className="font-semibold text-center text-[16px] md:text-[20px] xl:text-[24px] !leading-6 tracking-wider">
                                Zirconia Sintering Furnace
                            </h4>
                        </div>
                    </div>
                </div>
                <Modal styles={"absolute top-5 md:top-7 right-1 md:right-5 bg-gradient-to-r from-[#6B778C80] to-[#FFFFFF0D] text-white hover:opacity-80 border border-info uppercase !rounded-full"} title={"DOWNLOAD BROCHURE"} type={"download"} />
            </div>
            {/* <div className="">  */}
            <CompanyStats />
            {/* </div> */}
        </section>
    );
};

export default LandingHero;
