import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MoreProducts = () => {
    return (
        <section className='w-full h-full space-y-10 bg-primary padding font-Montserrat'>
            <h4 className='text-xl font-medium text-white md:text-2xl'>More Dental Furnaces</h4>
            <div className='flex flex-col items-center gap-10 lg:flex-row'>
                <div className='flex items-center gap-10 justify-between w-full max-w-md h-full lg:w-[420px] xl:w-[520px] p-4 bg-gradient-to-b from-[#6b778cae] to-[#274881af] '>
                    <div className='relative size-44 xl:size-52 '>
                        <Image alt='' fill src={"/sample 1.png"} className='object-contain object-center' />
                    </div>
                    <div className='space-y-8 w-max'>
                        <h4 className='w-full text-xl font-semibold tracking-wider text-white md:text-2xl'>More Dental Furnaces</h4>
                        <button>
                            <Link href={""} className='w-full px-4 py-3 text-sm capitalize md:px-8 md:text-base md:w-max bg-info'>
                                See Product
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='flex items-center gap-10 justify-between w-full max-w-md h-full  lg:w-[420px] xl:w-[520px] p-4 bg-gradient-to-b from-[#6b778cae] to-[#274881af] '>
                    <div className='relative size-44 xl:size-52 '>
                        <Image alt='' fill src={"/sample 1.png"} className='object-contain object-center' />
                    </div>
                    <div className='space-y-8 w-max'>
                        <h4 className='w-full text-xl font-semibold tracking-wider text-white md:text-2xl'>More Dental Furnaces</h4>
                        <button>
                            <Link href={""} className='w-full px-4 py-3 text-sm capitalize md:px-8 md:text-base md:w-max bg-info'>
                                See Product
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoreProducts
