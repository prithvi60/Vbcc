import Image from 'next/image'
import React from 'react'

const OurTeam = () => {
    return (
        <section className='relative z-auto w-full h-full overflow-hidden text-white bg-primary font-Montserrat'>
            <div className='block w-full h-full mx-auto space-y-6 max-w-[1530px] padding'>
                <div className='block py-10 space-y-6 md:space-y-20 md:py-20'>
                    <div className='block w-full space-y-4 md:space-y-6'>
                        <h4 className='text-2xl tracking-wide md:text-4xl xl:text-5xl text-info'>Our Team</h4>
                        <p className='text-base font-bold md:text-lg text-secondary'>Welcome to VBCC High Temperature Instruments!
                        </p>
                        <p className='text-base md:text-lg !leading-[32px] text-secondary'>Our leadership, CEO Naveen and Dr. V. Viswabaskaran, brings over 32 years of combined expertise in the field, expertly blending experience with cutting-edge innovation. Our skilled team, including specialists in Ceramic, Mechanical, and Electrical Engineering, creatively tackles challenges, ensuring excellence in high-temperature equipment. We are committed to innovation, strong client relationships, and customer satisfaction. Join us as we advance the technology of high-temperature instruments and innovate to make a significant impact.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-10 lg:justify-between lg:flex-row lg:gap-0'>
                        <div className='flex items-center gap-5 group'>
                            <div className="relative size-20 md:size-28">
                                <Image
                                    alt="image"
                                    fill
                                    src={"https://ik.imagekit.io/webibee/VBCC/homepage/founder-1.png?updatedAt=1733225206180"}
                                    className="z-0 object-contain object-center transition ease-linear transform group-hover:scale-125 duration-400"
                                />
                            </div>
                            <div>
                                <h4 className='text-xl font-semibold tracking-wide uppercase text-info md:text-2xl xl:text-3xl'>NAVEEN VISWABASKARAN </h4>
                                <p className='text-base font-medium capitalize md:text-lg xl:text-xl'>CEO & Managing Director </p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 group'>
                            <div className="relative size-20 md:size-28 ">
                                <Image
                                    alt="image"
                                    fill
                                    src={"https://ik.imagekit.io/webibee/VBCC/homepage/founder-2.png?updatedAt=1733225205697"}
                                    className="z-0 object-contain object-center transition ease-linear transform group-hover:scale-125 duration-400"
                                />
                            </div>
                            <div>
                                <h4 className='text-xl font-semibold tracking-wide uppercase text-info md:text-2xl xl:text-3xl'>DR.V.VISWABASKARAN</h4>
                                <p className='text-base font-medium capitalize md:text-lg xl:text-xl'>CTO & Director</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute left-0 w-48 h-28 -top-6 md:h-36 md:w-72'>
                <Image src={"/vector1blue.svg"} fill alt='' className='object-contain object-center' />
            </div>
            <div className='absolute right-0 w-48 h-28 -bottom-6 md:h-36 md:w-72'>
                <Image src={"/vector2blue.svg"} fill alt='' className='object-contain object-center' />
            </div>
        </section>
    )
}

export default OurTeam
