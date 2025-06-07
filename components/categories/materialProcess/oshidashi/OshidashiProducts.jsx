import React from "react";
import CategoryHero from "../../CategoryHero";
import CategoryProducts from "../../CategoryProducts";
import { OshidashiProductsList } from "@/libs/productsData";

const OshidashiProducts = () => {
    return (
        <>
            <CategoryHero
                categoryImg={"https://cdn.webibee.com/vbcc/Products/MPE/oshidashi/automatic%20extruder/isometric.png"}
                heroBg={"https://cdn.webibee.com/vbcc/Products/MPE/Oshidashi.jpg"}
                title={"Extruders"}
                desc1={
                    "Oshidashi is VBCC's dedicated sub-brand specializing in material processing equipment that leverages advanced extrusion technology. The product range includes manual extruders, automatic extruders, and vacuum extruders, catering to diverse industrial needs. These machines are engineered to produce consistent and uniform profiles, ensuring precision in output even for intricate and complex designs. Oshidashi's solutions are ideal for applications requiring reliability, efficiency, and superior quality in material shaping and forming processes, making them a trusted choice for industries that demand excellence in extrusion."
                }
                desc2={
                    ""
                }
                pdfFile={"/files/Material-Processing-Brochure-oshidashi.pdf"}
                // pdfFiles={"/files/Material-Processing-Brochure.pdf"}
                pdfName={"Material-Processing-Brochure-oshidashi.pdf"}
                query="extruders"
            />
            <CategoryProducts categoryName={"Extruders"} data={OshidashiProductsList} />
        </>
    );
};

export default OshidashiProducts;
