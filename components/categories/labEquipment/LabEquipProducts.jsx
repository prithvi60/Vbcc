import React from "react";
import CategoryHero from "../CategoryHero";
import CategoryProducts from "../CategoryProducts";
import { LabEquiptProductsList } from "@/libs/productsData";

const LabEquipProducts = () => {
    return (
        <>
            <CategoryHero
                categoryImg={"https://ik.imagekit.io/webibee/VBCC/products/Lab_Equipments/Spin%20Basic/Isometric.png?updatedAt=1737378263643"}
                heroBg={"https://ik.imagekit.io/webibee/VBCC/homepage/lab-herobg.png?updatedAt=1733228575257"}
                title={"Lab Equipment"}
                desc1={
                    "Jikken is a dedicated sub-brand under VBCC, offering a comprehensive range of high-performance laboratory equipment for scientific research and industrial applications. Specializing in precision instruments such as spin coaters, dip coaters, spray pyrolysis systems, cold spinners, and glove boxes, Jikken is designed to support advanced material synthesis and coating processes. These tools ensure accuracy, reliability, and flexibility, allowing researchers to maintain stringent control over experimental conditions. With cutting-edge technology and a commitment to innovation, Jikken empowers laboratories to achieve superior results in thin film deposition, surface engineering, and nanotechnology research."
                }
                desc2={
                    ""
                }
                pdfFile={"/files/Lab Equipments - Brochure - Digital.pdf"}
                pdfName={"Lab Equipments - Brochure - Digital.pdf"}
            />
            <CategoryProducts categoryName={"lab_equipment"} data={LabEquiptProductsList} />
        </>
    );
};

export default LabEquipProducts;
