import ProductDetailsHero from '@/components/categories/dental/dentalSpecificProduct/ProductDetailsHero'
import DefaultLayout from '@/components/DefaultLayout'
import React from 'react'

const Page = () => {
    return (
        <main>
            <DefaultLayout>
                <ProductDetailsHero pdfFile={"/files/Denkiro - Dental - Brochure - Digital.pdf"} pdfName={"Denkiro - Dental - Brochure - Digital.pdf"} />
            </DefaultLayout>
        </main>
    )
}

export default Page
