import React from "react";
import CategoryHero from "../CategoryHero";
import CategoryProducts from "../CategoryProducts";
import { AnalyticalInstrumentsList } from "@/libs/productsData";

const AnalyticalProducts = () => {
    return (
        <>
            <CategoryHero
                categoryImg={"https://cdn.webibee.com/vbcc/Products/Analytical%20Instruments/Reverse%20Thermal%20Expansion%20System/left.png"}
                heroBg={"https://cdn.webibee.com/vbcc/AI-hero.jpg"}
                title={"Analytical Instruments"}
                desc1={
                    "At VBCC, we offer high-precision instruments for thermal and electrical material analysis, trusted by research labs and industries alike."
                }
                desc2={
                    "Built with the same innovation and quality as our Denkiro furnaces, these instruments combine accuracy, ease of use, and long-term reliability. Ideal for advanced materials research, quality control, and product development"
                }
                pdfFile={"/files/Analytical-Instruments.pdf"}
                pdfName={"Analytical-Instruments.pdf"}
                query="analytical"
            />
            <CategoryProducts categoryName={"analytical_instruments"} data={AnalyticalInstrumentsList} />
        </>
    );
};

export default AnalyticalProducts;
