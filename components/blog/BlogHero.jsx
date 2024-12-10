import React from 'react'

const BlogHero = () => {
    return (
        <section>
            <div className="flex flex-col items-center justify-center gap-10 mt-20 space-y-4 md:flex-row md:justify-evenly md:space-y-5 md:mt-28 xl:mt-32 lg:space-y-8 padding font-Montserrat">
                <div className="space-y-3 w-max md:w-1/2">
                    <h4 className="text-2xl font-semibold text-info tracking-wider md:text-[32px] xl:text-[44px] w-max">VBCC</h4>
                    <h2 className="text-5xl font-bold text-primary tracking-wider md:text-[64px] xl:text-[80px] w-max">Chronicles</h2>
                </div>
                <p className="w-4/5 text-sm font-medium md:w-full text-primary md:text-base ">Unveiling the journey behind our innovations, success stories, and industry insights—where expertise meets excellence.</p>
            </div>
        </section>
    )
}

export default BlogHero
