import React from "react";
import { FunsaiProductsList } from "@/libs/productsData";
import CategoryHero from "../../CategoryHero";
import CategoryProducts from "../../CategoryProducts";

const FunsaiProducts = () => {
    return (
        <>
            <CategoryHero
                categoryImg={"https://cdn.webibee.com/vbcc/Products/MPE/funsai/multideck%20two%20tier%20(polyuruthene)/isometric-left.png"}
                heroBg={"https://cdn.webibee.com/vbcc/Products/MPE/Funsai_jpg.png"}
                title={"Ball Mills"}
                desc1={
                    "Funsai is our specialized sub-brand, derived from the Japanese word for 'grinding,' representing excellence in material processing equipment. The product line under this brand includes multi-deck roller jar mills, planetary ball mills (mono mill and table-top), single roller jar mills, and tap-top mills."
                }
                desc2={
                    "These innovative tools are engineered to handle the complex requirements of material grinding and particle size reduction across various industries. By efficiently breaking down and refining raw materials, they help achieve precise particle sizes and enhance material uniformity and consistency. Whether used for laboratory-scale testing or industrial-scale production, Funsai products ensure high-quality processing with reliable performance, making them an integral part of advanced material refinement workflows."
                }
                pdfFile={"/files/Material-Processing-Brochure-funsai.pdf"}
                pdfName={"Material-Processing-Brochure-funsai.pdf"}
                query="ballMills"
            />
            <CategoryProducts categoryName={"Ball Mills"} data={FunsaiProductsList} />
        </>
    );
};

export default FunsaiProducts;
