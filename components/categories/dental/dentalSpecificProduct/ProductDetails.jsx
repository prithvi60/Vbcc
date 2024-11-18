"use client";
import React from "react";
import { useState } from "react";

const ProductDetails = () => {
    const [activeTab, setActiveTab] = useState("Key Functions");
    return (
        <section className="w-full h-full space-y-20 padding font-Montserrat bg-primary">
            <div className="flex items-center gap-8">
                <button
                    onClick={() => setActiveTab("Key Functions")}
                    className={`relative font-medium tracking-wide uppercase text-xl  ${activeTab === "Key Functions" &&
                        "after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-1 after:bg-info active:text-info"
                        }`}
                >
                    Key Functions
                </button>
                <button
                    onClick={() => setActiveTab("Specifications")}
                    className={`relative font-medium tracking-wide uppercase text-xl ${activeTab === "Specifications" &&
                        "after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-1 after:bg-info active:text-info"
                        }`}
                >
                    Specifications
                </button>
            </div>
            {activeTab === "Key Functions" && (
                <div className="w-full h-full">
                    <p className="text-base font-medium md:text-lg">
                        <span className="mr-1 text-base font-semibold tracking-wide md:text-lg text-info">
                            Advanced Furnace Design :
                        </span>
                        Our double-wall stainless steel furnace ensures superior safety by
                        reducing exterior temperatures, enhances energy efficiency through
                        improved thermal retention, and offers unmatched durability and
                        aesthetic appeal, making it an ideal choice for any setting.
                    </p>
                </div>
            )}
            {activeTab === "Specifications" && (
                <div className="overflow-x-auto thumbnail">
                    <table className="w-full border border-collapse border-gray-300">
                        <thead className="text-primary bg-info">
                            <tr>
                                {specs.map((spec, idx) => (
                                    <th
                                        key={idx}
                                        className="px-4 py-2 text-sm font-semibold text-center border border-primary"
                                    >
                                        {spec.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {specs.map((spec, idx) => (
                                    <td
                                        key={idx}
                                        className="px-4 py-2 text-sm text-center bg-white border border-primary text-primary"
                                    >
                                        {spec.value}
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
};

export default ProductDetails;

const specs = [
    { label: "Length", value: "280 mm" },
    { label: "Width", value: "300 mm" },
    { label: "Height", value: "600 mm" },
    { label: "Weight", value: "20 Kg" },
    { label: "Casing", value: "Stainless Steel" },
    { label: "Chamber Diameter", value: "100 mm" },
    { label: "Chamber Height", value: "60 mm" },
    { label: "Firing Temperature", value: "1200 C" },
    { label: "Power Supply", value: "230 - Volt Single Phase" },
    { label: "Power Consumption", value: "1.5 KW" },
    { label: "Display", value: "7 Inch" },
];
