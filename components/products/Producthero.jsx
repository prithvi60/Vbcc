import React from 'react'

const Product_hero = () => {
  return (
    <section className='h-full w-full flex flex-wrap-reverse md:flex-nowrap bg-success'>
        <div className='w-full md:w-1/2 px-5 py-10 md:px-10 md:py-[60px] lg:p-[60px]'>
        <div className='w-full h-full md:max-w-[550px] lg:max-w-[440px] flex flex-col justify-between items-center gap-10 md:gap-0'>
            <h2 className='font-Lora text-2xl md:text-4xl xl:text-6xl w-full'>All Products</h2>
            <p className='font-urbanist text-sm lg:text-base'>Discover VBCC&apos;s range of Industrial and Research equipment. Our innovative, high-quality products are customizable to meet your specific needs, enhancing manufacturing and research capabilities.</p>
        </div>
        </div>
        <div className="h-[400px] md:h-[50vh] w-full md:w-1/2  bg-[url('/product-bg.png')] bg-cover bg-center bg-no-repeat"></div>
    </section>
  )
}

export default Product_hero