import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryProducts = ({ categoryName, data }) => {
    return (
        <section className="w-full h-auto space-y-10 overflow-hidden md:space-y-16 bg-primary padding">
            <h4 className="relative text-2xl font-semibold tracking-wide capitalize text-info after:absolute after:h-1 w-max after:w-2/5 after:-bottom-4 after:left-0 after:bg-white md:text-4xl xl:text-5xl">
                {`Products - ${categoryName === "lab_equipment" ? "lab equipment" : categoryName} ${categoryName === "dental" || categoryName === "laboratory" ? "Furnaces" : ""}`}
            </h4>
            <div className="grid w-full gap-5 pt-8 pb-20 place-content-center place-items-center sm:grid-cols-2 lg:grid-cols-3">
                {data.map((list, idx) => (
                    <Link title="products link"
                        href={`${list.slug === "Ball_Mills" || list.slug === "Presses" || list.slug === "Extruders" ? `/categories/material_processing_equipment/${list.slug}/${list.productName.replace(/\s/g, "_").replace(/\(/g, "(").replace(/\)/g, ")")}` : `/categories/${categoryName}/${list.productName.replace(/\s/g, "_").replace(/\(/g, "(").replace(/\)/g, ")")}`}`}
                        className="relative w-full max-w-sm space-y-8 group font-Montserrat"
                        key={idx}
                    >
                        <div className="relative mx-auto transition-all duration-500 ease-linear transform w-36 h-36 group-hover:scale-150 xl:w-72 xl:h-44">
                            <Image
                                alt="image"
                                title="image"
                                fill
                                src={list.mainImg}
                                className="z-0 object-contain object-center"
                            />
                            <div className="absolute top-0 -z-10 left-3 xl:left-12 flex justify-between items-center rounded-full bg-gradient-to-b from-[#13294F56] to-[#6B778C56] bg-opacity-80 size-32 xl:size-48 transition-all duration-500 ease-linear group-hover:scale-[0.70] group-hover:bg-gradient-to-b group-hover:from-info group-hover:to-info"></div>
                        </div>
                        <h4 className="font-semibold text-center mx-auto text-[14px] md:text-[16px] xl:text-[24px] leading-7 tracking-wider w-full sm:w-3/4">
                            {list.productName}
                        </h4>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default CategoryProducts;
