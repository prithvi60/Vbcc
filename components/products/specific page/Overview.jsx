import Image from 'next/image'
import React from 'react'

export const Overview = () => {
  return (
    <section className='px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 xl:px-20 font-urbanist text-white bg-primary'>
        <h4 className='font-Lora text-[40px]'>
        Overview
        </h4>
        <div className='bg-secondary rounded-lg text-base p-5 xl:p-10 flex flex-col md:flex-row items-start gap-5'>
        <div className="relative w-full md:w-[300px] xl:w-80 h-[180px]">
                <Image fill src={"/sample 1.png"} alt="..." className="absolute object-cover object-center rounded-md"/>
            </div>
            <p className='font-urbanist text-base md:text-xl text-warning w-full md:w-[60%] xl:w-[80%]'>
            Dilatometer, A precision instrument for measuring thermal expansion with unparalleled accuracy. VBCC takes pride in offering a Dilatometer that sets the standard for precision and control, with features that make it an ideal choice for various industries.
            <br/>
            <br/>
            Our Dilatometer boasts one-micron resolution thanks to LVDT technology, ensuring meticulous measurements. With a one-degree temperature accuracy, you can trust the results for your research and production needs. This Dilatometer is specifically tailored for tile, sanitary ware, and refractories industries.
            <br/>
            <br/>
            What sets VBCC apart is our commitment to providing high-quality solutions at a fraction of the cost of imported alternatives. Our Dilatometer not only matches imports in performance but also delivers incredible value for your investment. It&apos;s built to last, with rugged durability, and our 24/7 service support ensures you&apos;re never left in the lurch.
            <br/>
            <br/>
            For high-quality research and precise measurements, VBCC&apos;s Dilatometer is your trusted companion. Explore our range, including horizontal and vertical Dilatometers, as well as quenching Dilatometers, covering a temperature range from -RT to 1600°C.
            </p>
        </div>
    </section>
  )
}
