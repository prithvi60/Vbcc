import Image from "next/image";
import React from "react";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";

const OurTeam = () => {
    return (
        <section className="relative z-auto w-full h-full overflow-hidden text-white bg-primary font-Montserrat">
            <div className="block w-full h-full space-y-6 padding">
                <div className="block py-10 space-y-6 md:space-y-20 md:py-20">
                    <div className="block w-full space-y-4 md:space-y-6">
                        <h4 className="relative text-2xl font-bold tracking-wide after:absolute after:h-0.5 w-max after:w-3/4 after:-bottom-4 after:left-0 after:bg-white md:text-4xl xl:text-5xl text-info">
                            Our Team
                        </h4>
                        <p className="pt-5 text-base font-bold md:text-lg text-secondary">
                            Welcome to VBCC High Temperature Instruments!
                        </p>
                        <p className="text-base md:text-lg !leading-[32px] text-secondary w-full">
                            Our leadership, CEO Naveen and Our leadership, CEO Naveen and Dr.
                            V. Viswabaskaran, brings over 32 years of combined expertise in
                            the field, expertly blending experience with cutting-edge
                            innovation. Our skilled team, including specialists in Ceramic,
                            Mechanical, and Electrical Engineering, creatively tackles
                            challenges, ensuring excellence in high-temperature equipment. We
                            are committed to innovation, strong client relationships, and
                            customer satisfaction. Join us as we advance the technology of
                            high-temperature instruments and innovate to make a significant
                            impact.
                        </p>
                    </div>
                    <div className="pt-5 space-y-10">
                        <div className="flex items-center justify-center w-full gap-10 lg:w-1/2 lg:justify-start group">
                            <div className="relative w-36 h-28 lg:size-44">
                                <Image
                                    alt="image"
                                    fill
                                    src={
                                        "https://ik.imagekit.io/webibee/VBCC/homepage/CEO.jpg?updatedAt=1733748402844"
                                    }
                                    className="z-0 object-contain transition ease-linear transform border-t-8 rounded-full border-info group-hover:scale-125 duration-400"
                                />
                            </div>
                            <div className="relative w-3/4 space-y-2">
                                <div className="relative">
                                    <BiSolidQuoteLeft className="absolute top-0 text-base -left-6 md:text-lg text-info" />
                                    <p className="text-base italic font-bold md:text-lg">
                                        Every day is an opportunity to be 1% better than yesterday.
                                    </p>
                                    <BiSolidQuoteRight className="absolute bottom-0 right-0 text-base md:right-4 md:text-lg text-info" />
                                </div>
                                <h4 className="text-base font-semibold tracking-wide uppercase text-info md:text-lg xl:text-3xl">
                                    NAVEEN VISWABASKARAN
                                </h4>
                                <p className="text-base font-medium capitalize md:text-lg xl:text-xl">
                                    CEO & Managing Director
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center lg:justify-end">
                            <div className="flex items-center justify-end gap-5 lg:w-3/4 group">
                                <div className="relative w-1/2 space-y-2 lg:w-2/5">
                                    <div className="relative">
                                        <BiSolidQuoteLeft className="absolute top-0 text-base -left-6 md:text-lg text-info" />
                                        <p className="text-base italic font-bold md:text-lg">
                                            Technology is never static.With an agile approach,We
                                            continuously progress and add value with each iteration.
                                        </p>
                                        <BiSolidQuoteRight className="absolute right-0 4ext-base -bottom-0 md:right-4 md:text-lg text-info" />
                                    </div>
                                    <h4 className="text-base font-semibold tracking-wide uppercase text-info md:text-lg xl:text-3xl">
                                        DR.V.VISWABASKARAN
                                    </h4>
                                    <p className="text-base font-medium capitalize md:text-lg xl:text-xl">
                                        CTO & Director
                                    </p>
                                </div>
                                <div className="relative size-28 lg:size-44">
                                    <Image
                                        alt="image"
                                        fill
                                        src={
                                            "https://ik.imagekit.io/webibee/VBCC/homepage/CTO.jpg?updatedAt=1733748401643"
                                        }
                                        className="z-0 object-contain transition ease-linear transform border-t-8 rounded-full border-info group-hover:scale-125 duration-400"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute left-0 w-48 h-28 -top-6 md:h-36 md:w-72">
                <Image
                    src={"/vector1blue.svg"}
                    fill
                    alt=""
                    className="object-contain object-center"
                />
            </div>
            <div className="absolute right-0 w-48 h-28 -bottom-6 md:h-36 md:w-72">
                <Image
                    src={"/vector2blue.svg"}
                    fill
                    alt=""
                    className="object-contain object-center"
                />
            </div>
        </section>
    );
};

export default OurTeam;
