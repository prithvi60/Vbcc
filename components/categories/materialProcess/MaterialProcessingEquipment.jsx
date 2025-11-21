import React from "react";
import CategoryHero from "../CategoryHero";

const MaterialProcessingEquipment = () => {
    return (
        <>
            <CategoryHero
                categoryImg={"https://cdn.shopifyapp.shop/vbcc/Products/MPE/funsai/planetary%20ball%20mill%20(monomill)/isomteric-left.png"}
                heroBg={"https://cdn.shopifyapp.shop/vbcc/Products/MPE/MPR%20Bg%20Image_jpg.png"}
                title={"Material Processing Equipment"}
                desc1={
                    "Funsai, Seikei, and Oshidashi are specialized sub-brand under VBCC’s material processing equipment, designed for high-precision applications. Funsai focuses on grinding, which reduces particle size and refines materials, ensuring better material uniformity and consistency. Seikei utilizes pressing, applying controlled pressure to compact and shape materials, ensuring consistent quality and strength. Oshidashi employs advanced extrusion technology to create uniform profiles, delivering reliable outputs for complex designs. These processes enhance production efficiency, improve material quality, and are essential in sectors such as ceramics, automotive, and electronics. "
                }
                desc2={
                    ""
                }
                pdfFile={"/files/Material-Processing-Brochure.pdf"}
                pdfName={"Material Processing-Brochure Digital.pdf"}
                query={"MPE"}
            />
        </>
    );
};

export default MaterialProcessingEquipment;
