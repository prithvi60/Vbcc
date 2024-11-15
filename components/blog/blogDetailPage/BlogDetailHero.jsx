import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import {
    HeroBox,
    HeroBoxBottom,
    HeroBoxBottomMobile,
    HeroBoxMobile,
} from "@/svg_components/LandingHeroBox";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const BlogDetailHero = ({ data }) => {

    return (
        <section className="relative z-0 w-full h-full mb-10 text-white">
            <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <div className="relative w-full h-[85dvh] lg:h-[100vh] hero-mask">
                    <Image
                        alt="background image"
                        src={data}
                        fill
                        className="z-0 object-cover object-center brightness-[0.30]"
                    />
                </div>
                <div className="absolute z-20 w-11/12 md:w-[80%] -translate-x-1/2 -translate-y-1/2 top-[55%] md:top-1/2 left-1/2 font-Montserrat ">
                    <div className="flex flex-col items-center w-full h-full gap-16 md:gap-6 lg:justify-between md:flex-row">
                        <div className="relative flex items-center gap-5 md:gap-8 xl:gap-20">
                            <ul className="flex flex-col items-center justify-center gap-3 -mt-10 md:-mt-0">
                                <li>
                                    <Link href={""} className="hover:animate-pulse ">
                                        <FaLinkedinIn className="text-base text-white md:text-2xl" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""} className="hover:animate-pulse ">
                                        <FaFacebookF className="text-base text-white md:text-2xl" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""} className="hover:animate-pulse ">
                                        <FaInstagram className="text-base text-white md:text-2xl" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""} className="hover:animate-pulse ">
                                        <FaYoutube className="text-base text-white md:text-2xl" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""} className="hover:animate-pulse ">
                                        <FaXTwitter className="text-base text-white md:text-2xl" />
                                    </Link>
                                </li>
                            </ul>
                            <div className="absolute hidden w-full md:block left-2 -top-20 md:-top-36 lg:-top-48 2xl:-top-60">
                                <HeroBox className="h-10 md:h-40 lg:h-52 2xl:h-64 fill-none" />
                            </div>
                            <div className="absolute block w-full md:hidden left-2 -top-24">
                                <HeroBoxMobile className="h-10 fill-none" />
                            </div>
                            <div className="w-full md:w-4/5">
                                <div className="w-full space-y-2 md:space-y-4 md:w-4/5 xl:w-4/5">
                                    {/* <p className="w-full text-xs font-medium leading-tight md:text-sm xl:text-base">
                                        Vbcc High temperature Instruments
                                    </p>
                                    <h4 className="text-[16px] font-bold tracking-wider md:text-[22px] xl:text-[38px] leading-tight uppercase">
                                        TAILOR MADE
                                    </h4> */}
                                    <h2 className="text-[24px] font-bold tracking-wider md:text-[40px] xl:text-[64px] md:leading-tight xl:leading-[4rem]">
                                        Laboratory Furnaces
                                    </h2>
                                    <div className="flex items-center gap-5">
                                        <button
                                            className={`font-semibold w-fit transition-all flex items-center text-xs xl:text-base gap-3 capitalize duration-400 ease-linear hover:bg-primary bg-info text-white rounded-full cursor-pointer px-6 py-2`}
                                        >
                                            <h4>{"ENQUIRE NOW"}</h4>
                                            <span>
                                                <MdKeyboardDoubleArrowRight className="text-xl" />
                                            </span>
                                        </button>
                                        <button
                                            className={`font-semibold w-fit transition-all flex items-center text-xs xl:text-base gap-3 duration-400 ease-linear capitalize bg-gradient-to-bl from-[#6b778cf8] to-[#ffffff3f] hover:bg-gradient-to-t hover:from-info hover:to-info text-white rounded-full cursor-pointer px-6 py-2`}
                                        >
                                            <h4>{"GO TO CATEGORY"}</h4>
                                            <span>
                                                <MdKeyboardDoubleArrowRight className="text-xl" />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute z-10 hidden w-full md:block left-2 -bottom-14 md:-bottom-40 lg:-bottom-52 2xl:-bottom-64">
                                <HeroBoxBottom className="h-10 md:h-40 lg:h-52 2xl:h-64 fill-none" />
                            </div>
                            <div className="absolute z-10 block w-full md:hidden left-2 -bottom-12">
                                <HeroBoxBottomMobile className="h-10 md:h-40 lg:h-52 2xl:h-64 fill-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default BlogDetailHero
