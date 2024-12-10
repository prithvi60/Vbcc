import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MoreProducts = ({ data, type }) => {
    return (
        <section className='w-full h-full space-y-10 bg-primary padding font-Montserrat'>
            <h4 className='relative text-xl font-bold tracking-wide text-white md:text-3xl xl:text-4xl after:absolute after:h-1 w-max after:w-3/5 after:-bottom-4 after:left-0 after:bg-info'>{`More ${type} Furnaces `}</h4>
            <div className='flex flex-col items-center gap-10 lg:flex-row'>
                {data.map((list, idx) => (
                    <div className='flex items-center gap-10 justify-between w-full sm:max-w-md xl:max-w-xl h-full p-4 bg-gradient-to-b from-[#6b778cae] to-[#274881af]' key={idx}>
                        <div className='relative size-44 xl:h-44 xl:w-72'>
                            <Image alt={list.productName} fill src={list.mainImg} className='object-contain object-center' />
                        </div>
                        <div className='space-y-8 w-max'>
                            <h4 className='w-full text-xl font-semibold tracking-wider text-white md:text-2xl'>{list.productName}</h4>
                            <button>
                                <Link href={`/categories/dental/${encodeURIComponent(list.productName)}`} className='w-full px-4 py-3 text-sm capitalize md:px-8 md:text-base md:w-max bg-info'>
                                    See Product
                                </Link>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MoreProducts
