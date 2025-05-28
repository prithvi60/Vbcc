import React from "react";
import CategoryHero from "../../CategoryHero";
import CategoryProducts from "../../CategoryProducts";
import { SeikiProductsList } from "@/libs/productsData";

const SeikiProducts = () => {
    return (
        <>
            <CategoryHero
                categoryImg={"https://cdn.webibee.com/vbcc/Products/MPE/seiki/Vacuum%20Hot%20Press/isometric.png"}
                heroBg={"https://cdn.webibee.com/vbcc/Products/MPE/Seikei.jpg"}
                title={"Presses"}
                desc1={
                    "Seikei is our specialized sub-brand dedicated to material processing equipment, particularly focused on pressing technologies. These advanced machines are meticulously designed to apply controlled pressure, enabling the compaction and shaping of materials with precision. By ensuring uniformity and structural integrity, Seikei equipment supports diverse applications across industries that require high-quality material fabrication. Whether in research, development, or large-scale production, Seikei solutions are built to deliver consistent results, enhancing both product performance and reliability."
                }
                desc2={
                    ""
                }
                pdfFile={"/files/Material-Processing-Brochure-seiki.pdf"}
                // pdfFiles={"/files/Material-Processing-Brochure.pdf"}
                pdfName={"Material-Processing-Brochure-seiki.pdf"}
                query={"presses"}
            />
            <CategoryProducts categoryName={"Presses"} data={SeikiProductsList} />
        </>
    );
};

export default SeikiProducts;
