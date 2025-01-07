import React from "react";
import CategoryHero from "../../CategoryHero";
import CategoryProducts from "../../CategoryProducts";
import { SeikiProductsList } from "@/libs/productsData";

const SeikiProducts = () => {
    return (
        <>
            <CategoryHero
                categoryImg={"https://ik.imagekit.io/webibee/VBCC/products/MPE/seiki/Vacuum%20Hot%20Press/isometric.png?updatedAt=1736156797548"}
                heroBg={"https://ik.imagekit.io/webibee/VBCC/homepage/Dental%20Category.jpg?updatedAt=1733815065906"}
                title={"Seikei"}
                desc1={
                    "Seikei is our specialized sub-brand dedicated to material processing equipment, particularly focused on pressing technologies. These advanced machines are meticulously designed to apply controlled pressure, enabling the compaction and shaping of materials with precision. By ensuring uniformity and structural integrity, Seikei equipment supports diverse applications across industries that require high-quality material fabrication. Whether in research, development, or large-scale production, Seikei solutions are built to deliver consistent results, enhancing both product performance and reliability."
                }
                desc2={
                    ""
                }
                pdfFile={"https://ik.imagekit.io/webibee/VBCC/products/MPE/Material%20Processing-Brochure-seiki.pdf?updatedAt=1736165990390"}
                pdfName={"Material Processing-Brochure-seiki.pdf"}
            />
            <CategoryProducts categoryName={"seikei"} data={SeikiProductsList} />
        </>
    );
};

export default SeikiProducts;
