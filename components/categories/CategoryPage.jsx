import React from 'react'
import CategoryHero from './CategoryHero'

const CategoryPage = () => {
    return (
        <>
            <CategoryHero
                categoryImg={"https://cdn.shopifyapp.shop/vbcc/homepage/category-1.png"}
                heroBg={"https://cdn.shopifyapp.shop/vbcc/homepage/Category%20Page%20Hero%20Image_jpg.png"}
                title={"Categories"}
                desc1={
                    "Leveraging the expertise of our professional engineering team, we design and develop tailored thermal process systems to meet the unique needs of our clients. Our flagship sub-brands, Denkiro and Denkiro Dental, are renowned for their precision and innovation. Denkiro delivers high-performance electric furnaces for industries such as metallurgy and ceramics, prioritizing energy efficiency, advanced temperature control, and custom solutions. Denkiro Dental provides specialized furnace systems for dental laboratories, ensuring consistent and reliable performance for ceramic firing, sintering, and glazing processes. Both sub-brands are engineered to deliver optimal operational efficiency, cutting-edge technology, and superior results in their respective markets."
                }
                desc2={
                    ""
                }
                pdfFile={"/files/Denkiro-Dental-Brochure-Digital.pdf"}
                pdfName={"Denkiro - Dental - Brochure - Digital.pdf"}
            />
        </>
    )
}

export default CategoryPage
