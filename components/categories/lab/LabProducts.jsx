import React from "react";
import CategoryHero from "../CategoryHero";
import CategoryProducts from "../CategoryProducts";

const LabProducts = () => {
    return (
        <>
            <CategoryHero
                categoryImg={"/category-2.png"}
                heroBg={"/lab-herobg.png"}
                title={"Laboratory Furnances"}
                desc1={
                    "Denkiro is the dedicated sub-brand for electric furnaces under VBCC, embodying precision, efficiency, and innovation in thermal processing. Denkiro electric furnaces are designed to meet the high demands of various industries, offering reliable performance and cutting-edge technology. "
                }
                desc2={
                    "With a focus on energy efficiency, superior temperature control, and customizable features, Denkiro furnaces are ideal for applications ranging from research labs to industrial-scale operations. By combining advanced materials with smart design, Denkiro ensures optimal results, helping customers achieve their goals in metallurgy, ceramics, and beyond"
                }
            />
            <CategoryProducts categoryName={"Laboratory"} />
        </>
    );
};

export default LabProducts;
