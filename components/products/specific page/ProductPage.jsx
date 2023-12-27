import React from 'react'
import { CustomCarousel } from './SpecificComp'
import { ProductVariant } from './ProductVariant'

export const ProductPage = ({product}) => {
  // console.log(product);
  return (
    <section className='px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 font-urbanist text-warning xl:px-20'>
        <div className='flex flex-col-reverse xl:flex-row items-start gap-12'>
        <div className='block space-y-[52px] w-full xl:w-1/2'>
            <div className='block space-y-6 w-full xl:w-4/5'>
            <h2 className='font-Lora text-2xl md:text-4xl xl:text-6xl w-full'>{product.productName}</h2>
            <h5 className='text-sm font-urbanist uppercase'>{product.productType}</h5>
            <p className='text-base md:text-xl font-urbanist leading-snug'>{product.description}</p>
            </div>
            <ProductVariant product={product}/>
        </div>
        <div className='w-full xl:w-1/2'>
          <CustomCarousel gallery={product.gallery}/>
        </div>
        </div>
    </section>
  )
}
