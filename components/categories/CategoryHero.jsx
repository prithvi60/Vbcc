import Image from 'next/image'
import React from 'react'

const CategoryHero = () => {
    return (
        <section className='relative z-0 w-full h-screen'>
            <div className="relative w-full h-[110dvh] md:h-[85dvh] lg:h-screen hero-mask bg-primary z-10">
            </div>
            {/* <div className='block w-full h-full '>
                <div className='relative w-full h-[50vh]'>
                    <Image fill src={"/dental-herobg.png"} alt='hero bg' className='object-cover object-center' />
                </div>
            </div> */}
        </section>
    )
}

export default CategoryHero
