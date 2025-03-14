import React from "react";
import { FunsaiProductsList } from "@/libs/productsData";
import CategoryHero from "../../CategoryHero";
import CategoryProducts from "../../CategoryProducts";

const FunsaiProducts = () => {
    return (
        <>
            <CategoryHero
                categoryImg={"https://ik.imagekit.io/webibee/VBCC/products/MPE/funsai/multideck%20two%20tier%20(polyuruthene)/isometric-left.png?updatedAt=1736156981576"}
                heroBg={"https://ik.imagekit.io/webibee/VBCC/products/MPE/Funsai.jpg?updatedAt=1736318070849"}
                title={"Ball Mills"}
                desc1={
                    "Funsai is our specialized sub-brand, derived from the Japanese word for 'grinding,' representing excellence in material processing equipment. The product line under this brand includes multi-deck roller jar mills, planetary ball mills (mono mill and table-top), single roller jar mills, and tap-top mills."
                }
                desc2={
                    "These innovative tools are engineered to handle the complex requirements of material grinding and particle size reduction across various industries. By efficiently breaking down and refining raw materials, they help achieve precise particle sizes and enhance material uniformity and consistency. Whether used for laboratory-scale testing or industrial-scale production, Funsai products ensure high-quality processing with reliable performance, making them an integral part of advanced material refinement workflows."
                }
                pdfFile={"https://ik.imagekit.io/webibee/VBCC/products/MPE/Material%20Processing-Brochure-funsai.pdf?updatedAt=1736165989821"}
                // pdfFiles={"/files/Material-Processing-Brochure.pdf"}
                pdfName={"Material Processing-Brochure-funsai.pdf"}
                query="ballMills"
            />
            <CategoryProducts categoryName={"Ball Mills"} data={FunsaiProductsList} />
        </>
    );
};

export default FunsaiProducts;
