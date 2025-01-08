import React from "react";
import CategoryHero from "../../CategoryHero";
import CategoryProducts from "../../CategoryProducts";
import { OshidashiProductsList } from "@/libs/productsData";

const OshidashiProducts = () => {
    return (
        <>
            <CategoryHero
                categoryImg={"https://ik.imagekit.io/webibee/VBCC/products/MPE/oshidashi/automatic%20extruder/isometric.png?updatedAt=1736156939203"}
                heroBg={"https://ik.imagekit.io/webibee/VBCC/products/MPE/Oshidashi.jpg?updatedAt=1736318068416"}
                title={"Oshidashi"}
                desc1={
                    "Oshidashi is VBCC's dedicated sub-brand specializing in material processing equipment that leverages advanced extrusion technology. The product range includes manual extruders, automatic extruders, and vacuum extruders, catering to diverse industrial needs. These machines are engineered to produce consistent and uniform profiles, ensuring precision in output even for intricate and complex designs. Oshidashi's solutions are ideal for applications requiring reliability, efficiency, and superior quality in material shaping and forming processes, making them a trusted choice for industries that demand excellence in extrusion."
                }
                desc2={
                    ""
                }
                pdfFile={"https://ik.imagekit.io/webibee/VBCC/products/MPE/Material%20Processing-Brochure-oshidashi.pdf?updatedAt=1736165987502"}
                pdfName={"Material Processing-Brochure-oshidashi.pdf"}
            />
            <CategoryProducts categoryName={"oshidashi"} data={OshidashiProductsList} />
        </>
    );
};

export default OshidashiProducts;
