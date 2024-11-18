import MoreProducts from '@/components/categories/dental/dentalSpecificProduct/MoreProducts'
import ProductDetails from '@/components/categories/dental/dentalSpecificProduct/ProductDetails'
import ProductDetailsHero from '@/components/categories/dental/dentalSpecificProduct/ProductDetailsHero'
import DefaultLayout from '@/components/DefaultLayout'
import React from 'react'

const Page = () => {
    return (
        <main>
            <DefaultLayout>
                <ProductDetailsHero />
                <ProductDetails />
                <MoreProducts />
            </DefaultLayout>
        </main>
    )
}

export default Page
