import Image from "next/image";
import Link from "next/link";
import React from "react";

const MoreProducts = ({ data, type }) => {
    return (
        <section className="w-full h-full space-y-10 overflow-hidden bg-primary padding font-Montserrat">
            <h4 className="relative w-full text-xl font-bold tracking-wide text-white capitalize md:text-3xl xl:text-4xl after:absolute after:h-1 after:w-1/4 after:-bottom-4 after:left-0 after:bg-info">{`More ${type === "Ball_Mills" ? "Ball Mills" : type === "lab_equipment" ? "lab equipment" : type} ${type === "dental" || type === "laboratory" ? "Furnaces" : ""}`}</h4>
            <div className="flex flex-col items-center gap-10 lg:flex-row">
                {data.map((list, idx) => (
                    <div
                        className="flex items-center gap-10 justify-between w-full sm:max-w-md xl:max-w-xl h-full p-4 bg-gradient-to-b from-[#6b778cae] to-[#274881af]"
                        key={idx}
                    >
                        <div className="relative size-44 xl:h-44 xl:w-72">
                            <Image
                                alt={list.productName}
                                title={list.productName}
                                fill
                                src={list.mainImg}
                                className="object-contain object-center"
                            />
                        </div>
                        <div className="space-y-8 w-max">
                            <h4 className="w-full text-xl font-semibold tracking-wider text-white md:text-2xl">
                                {list.productName}
                            </h4>
                            <button>
                                <Link
                                    title="products link"
                                    href={`${type === "lab_equipment" || type === "dental" || type === "laboratory" || type === "analytical_instruments" ? `/categories/${type}/${list.productName.replace(/\s/g, "_")}` : `/categories/material_processing_equipment/${type}/${list.productName.replace(/\s/g, "_")}`} `}
                                    className="w-full px-4 py-3 text-sm capitalize md:px-8 md:text-base md:w-max bg-info"
                                >
                                    See Product
                                </Link>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MoreProducts;
