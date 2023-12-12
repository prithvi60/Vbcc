import React from 'react'
import { CustomAccordion, CustomCarousel, CustomVariant } from './SpecificComp'
import { Button } from '@nextui-org/react'

export const ProductPage = () => {
  return (
    <section className='px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 font-urbanist text-warning xl:px-20'>
        <div className='flex flex-col-reverse xl:flex-row items-start gap-12'>
        <div className='block space-y-[52px] w-full xl:w-1/2'>
            <div className='block space-y-6 w-full xl:w-4/5'>
            <h2 className='font-Lora text-2xl md:text-4xl xl:text-6xl w-full'>Glove Box</h2>
            <h5 className='text-sm font-urbanist uppercase'>Material Preparation</h5>
            <p className='text-base md:text-xl font-urbanist leading-snug'>Discover VBCC&apos;s range of Industrial and Research equipment. Our innovative, high-quality products are customizable to meet your specific needs, enhancing manufacturing and research capabilities.</p>
            </div>
            <div className='block space-y-10 max-w-[390px]'>
            <CustomVariant/>
            <h4 className='text-[40px] font-Lora tracking-wider'>₹7.2L</h4>
            <Button radius='full' className='w-full bg-primary px-14 py-3 font-urbanist text-white'>Contact Us</Button>
            </div>
            <div className='block space-y-5 max-w-lg'>
              <h4 className='font-Lora text-[32px]'>Specifications</h4>
              <CustomAccordion/>
            </div>
        </div>
        <div className='w-full xl:w-1/2'>
          <CustomCarousel/>
        </div>
        </div>
    </section>
  )
}
