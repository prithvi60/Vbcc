import React from "react";
import CategoryHero from "../CategoryHero";
import CategoryProducts from "../CategoryProducts";
import { LabProductsList } from "@/libs/productsData";

const LabProducts = () => {
    return (
        <>
            <CategoryHero
                categoryImg={"https://ik.imagekit.io/webibee/VBCC/homepage/category-2.png?updatedAt=1733228578390"}
                heroBg={"https://ik.imagekit.io/webibee/VBCC/homepage/lab-herobg.png?updatedAt=1733228575257"}
                title={"Laboratory Furnaces"}
                desc1={
                    "Denkiro is the dedicated sub-brand for electric furnaces under VBCC, embodying precision, efficiency, and innovation in thermal processing. Denkiro electric furnaces are designed to meet the high demands of various industries, offering reliable performance and cutting-edge technology. "
                }
                desc2={
                    "With a focus on energy efficiency, superior temperature control, and customizable features, Denkiro furnaces are ideal for applications ranging from research labs to industrial-scale operations. By combining advanced materials with smart design, Denkiro ensures optimal results, helping customers achieve their goals in metallurgy, ceramics, and beyond"
                }
                pdfFile={"/files/Denkiro-Brochure-Digital.pdf"}
                pdfName={"Denkiro - Brochure - Digital.pdf"}
                query="laboratory"
            />
            <CategoryProducts categoryName={"laboratory"} data={LabProductsList} />
        </>
    );
};

export default LabProducts;
