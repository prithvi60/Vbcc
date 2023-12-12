import { explore } from '@/libs/data'
import { Button, Card, CardBody, CardFooter } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

export const ExploreCards = () => {
  return (
    <section className='px-5 py-10 md:px-10 md:py-[60px] lg:p-[60px] font-urbanist bg-secondary text-warning '>
      <div className='block w-full space-y-10'>
        <div className='flex items-center justify-between'>
          <h4 className='text-2xl md:text-[40px] font-Lora tracking-tight'>Explore Articles</h4>
          <Button className='bg-transparent md:px-6 md:py-5 md:border md:border-warning text-base underline underline-offset-2 decoration-warning md:no-underline'>View All</Button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {explore.map((list,idx)=>(
          <div className='block space-y-5' key={idx}>
              <div className='relative h-[200px] w-full md:h-[330px]   overflow-hidden'>
                <Image fill src={list.img} alt='product feature' className='absolute object-cover object-center hover:scale-125 hover:transition-all hover:duration-1000'/>
              </div>
              <h4 className="text-lg lg:text-[32px] font-Lora">
              {list.productTitile}
            </h4>
            <p className="text-sm md:text-base">
              {list.desc}
            </p>
            <Button
              variant="bordered"
              className="border border-warning rounded-full px-4 py-3 text-sm md:text-base text-warning"
            >
              Read More
            </Button>
          </div>
          ))}
        </div>
        </div>
    </section>
  )
}
