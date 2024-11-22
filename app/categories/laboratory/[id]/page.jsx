import DefaultLayout from '@/components/DefaultLayout'
import React from 'react'
import LabProductDetailsHero from '@/components/categories/lab/labSpecificProduct/ProductDetailsHero'

const Page = () => {
    return (
        <main>
            <DefaultLayout>
                <LabProductDetailsHero pdfFile={"/files/Denkiro - Brochure - Digital.pdf"} pdfName={"Denkiro - Brochure - Digital.pdf"} />
            </DefaultLayout>
        </main>
    )
}

export default Page
