import React from "react";
import CategoryHero from "../CategoryHero";
import CategoryProducts from "../CategoryProducts";
import { DentalProductsList } from "@/libs/productsData";

const DentalProducts = () => {
    return (
        <>
            <CategoryHero
                categoryImg={"/category-1.png"}
                heroBg={"/dental-herobg.png"}
                title={"Dental Furnaces"}
                desc1={
                    "Denkiro Dental is a specialized sub-brand under VBCC, focused on providing high-precision dental furnaces for the dental industry. Tailored to meet the exacting standards of dental laboratories, Denkiro Dental furnaces offer exceptional temperature control, reliability, and ease of use."
                }
                desc2={
                    "Designed for processes such as ceramic firing, sintering, and glazing, these furnaces ensure consistent results while enhancing workflow efficiency. With advanced technology and a commitment to quality, Denkiro Dental supports dental professionals in achieving the best outcomes in prosthetics and restorative treatments."
                }
                pdfFile={"/files/Denkiro - Dental - Brochure - Digital.pdf"}
                pdfName={"Denkiro - Dental - Brochure - Digital.pdf"}
            />
            <CategoryProducts categoryName={"dental"} data={DentalProductsList} />
        </>
    );
};

export default DentalProducts;