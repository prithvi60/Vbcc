import React from 'react'
import { CustomAccordion, CustomCarousel, CustomVariant } from './SpecificComp'
import Link from 'next/link'

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
            <Link
                href={"/contact"}
                className={`block rounded-full px-4 py-3 border border-warning bg-primary hover:bg-info text-center text-base duration-700 delay-75 font-urbanist capitalize w-full group`}
              >
                <div className={`h-6 w-full overflow-hidden`}>
                  <h4
                    className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-white`}
                  >
                    contact us
                  </h4>
                  <h4
                    className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-white`}
                  >
                    contact us
                  </h4>
                </div>
              </Link>
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
