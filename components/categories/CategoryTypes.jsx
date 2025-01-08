import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const CategoryTypes = ({ lists }) => {
    return (
        <section>
            <section className="w-full h-auto space-y-10 overflow-hidden md:space-y-16 bg-primary padding">
                <h4 className="relative text-2xl font-medium tracking-wide capitalize md:text-4xl xl:text-5xl text-info after:absolute after:h-1 w-max after:w-2/5 after:-bottom-4 after:left-0 after:bg-white">
                    Explore Our Diverse Range of Product Categories
                </h4>
                <div className="flex flex-wrap items-center justify-center w-full gap-5 px-2.5 pt-8 pb-20 lg:justify-start">
                    {lists.map((list, idx) => (
                        <Link
                            href={list.ref}
                            className="relative w-full max-w-sm space-y-8 group font-Montserrat"
                            key={idx}
                        >
                            <div className="relative w-full h-56 overflow-hidden xl:h-72">
                                <Image
                                    alt={`${list.menu} image`}
                                    fill
                                    src={list.img}
                                    className="z-0 object-cover object-center transition-all duration-500 ease-linear transform brightness-75 group-hover:brightness-100 group-hover:scale-125"
                                />
                            </div>
                            <div className="font-semibold absolute backdrop-blur-sm bottom-5 left-2 text-center text-[14px] md:text-[16px] xl:text-[22px] leading-7 tracking-wider capitalize text-info group-hover:bg-info max-w-sm transition-all duration-300 ease-linear flex items-center gap-2 transform group-hover:text-white p-2.5 xl:mr-2.5">
                                <h4 className="w-full text-start xl:w-3/4">{list.menu}</h4>
                                <span>
                                    <MdKeyboardDoubleArrowRight className="text-xl text-info group-hover:text-white" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default CategoryTypes;
