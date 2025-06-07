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

const BlogDetailHero = ({ data, postName }) => {

    return (
        <section className="relative z-0 w-full h-full text-white">
            <div className="relative w-full h-full overflow-hidden">
                <div className="relative w-full h-[75vh] md:h-[100vh]">
                    <Image
                        alt="background image"
                        title="background image"
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
                                    <Link title="linkedin link" href={""} className="hover:animate-pulse ">
                                        <FaLinkedinIn className="text-base text-white md:text-2xl" />
                                    </Link>
                                </li>
                                <li>
                                    <Link title="facebook link" href={""} className="hover:animate-pulse ">
                                        <FaFacebookF className="text-base text-white md:text-2xl" />
                                    </Link>
                                </li>
                                <li>
                                    <Link title="instagram link" href={""} className="hover:animate-pulse ">
                                        <FaInstagram className="text-base text-white md:text-2xl" />
                                    </Link>
                                </li>
                                <li>
                                    <Link title="youtube link" href={""} className="hover:animate-pulse ">
                                        <FaYoutube className="text-base text-white md:text-2xl" />
                                    </Link>
                                </li>
                                <li>
                                    <Link title="x link" href={""} className="hover:animate-pulse ">
                                        <FaXTwitter className="text-base text-white md:text-2xl" />
                                    </Link>
                                </li>
                            </ul>
                            <div className="absolute hidden w-full md:block left-2 -top-20 md:-top-36 ">
                                <HeroBox className="h-10 md:h-40 fill-none" />
                            </div>
                            <div className="absolute block w-full md:hidden left-2 -top-20">
                                <HeroBoxMobile className="h-10 fill-none" />
                            </div>
                            <div className="w-full md:w-4/5">
                                <div className="w-full space-y-2 md:space-y-4 ">
                                    <h2 className="text-[24px] font-bold tracking-wider md:text-[40px] xl:text-[64px] md:leading-tight xl:leading-[4rem]">
                                        {postName}
                                    </h2>
                                </div>
                            </div>
                            <div className="absolute z-10 hidden w-full md:block left-2 -bottom-14 md:-bottom-40">
                                <HeroBoxBottom className="h-10 md:h-40 fill-none" />
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
