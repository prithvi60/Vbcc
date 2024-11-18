import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryProducts = ({ categoryName }) => {
    return (
        <section className="relative z-0 w-full h-auto space-y-10 overflow-hidden md:space-y-16 bg-primary padding">
            <h4 className="text-2xl tracking-wide md:text-4xl xl:text-5xl text-info">
                Products - {categoryName} Furnaces
            </h4>
            <div className="flex items-center w-full gap-5 pt-8 pb-20">
                {productLists.map((list) => (
                    <Link href={`/categories/dental/${list.id.toString()}`}
                        className="relative w-full space-y-8 group font-Montserrat"
                        key={list.id}
                    >
                        <div className="relative mx-auto transition-all duration-500 ease-linear transform w-36 h-36 group-hover:scale-150 xl:w-52 xl:h-52">
                            <Image
                                alt="image"
                                fill
                                src={list.img}
                                className="z-20 object-contain object-center"
                            />
                            <div className="absolute top-0 z-10 left-1 flex justify-between items-center rounded-full bg-gradient-to-b from-[#13294F56] to-[#6B778C56] bg-opacity-80 size-32 xl:size-48 transition-all duration-500 ease-linear group-hover:scale-[0.80] group-hover:bg-gradient-to-b group-hover:from-info group-hover:to-info"></div>
                        </div>
                        <h4 className="font-semibold text-center mx-auto text-[14px] md:text-[16px] xl:text-[24px] leading-7 tracking-wider w-full sm:w-3/4">
                            {list.title}
                        </h4>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default CategoryProducts;

const productLists = [
    {
        img: "/sample 1.png",
        title: "Vacuum Sintering Furnace",
        temp: "1200 C",
        energy: "1.5 KW",
        id: 1,
    },
    {
        img: "/sample 2.png",
        title: "Burnout Furnace",
        temp: "1200 C",
        energy: "1.5 KW",
        id: 2,
    },
    {
        img: "/sample 3.png",
        title: "Zirconia Sintering Furnace",
        temp: "1600 C",
        energy: "2 KW",
        id: 3,
    },
    {
        img: "/sample 4.png",
        title: "Vacuum Pressing Furnace",
        temp: "1200 C",
        energy: "2 KW",
        id: 4,
    },
];
