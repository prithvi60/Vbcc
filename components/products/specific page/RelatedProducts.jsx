import { Button } from '@nextui-org/react'
import React from 'react'
import { ProductCards } from './ProductCards'
import { Btn2 } from '@/components/Btn'

export const RelatedProducts = () => {
  return (
    <section className='block px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 font-urbanist text-warning xl:px-20 bg-secondary space-y-8'>
        <div className='block space-y-2'>
            <h5 className='text-sm font-urbanist'>Related products</h5>
            <h3 className='font-Lora text-[40px]'>Material Preparation</h3>
        </div>
        <ProductCards/>
        <Btn2
          Hbgcolor={"bg-primary"}
          textColor={"text-warning"}
          HtextColor={"text-white"}
          bColor={"border-warning"}
          title={"View All"}
          href={"/"}
        />
    </section>
  )
}
