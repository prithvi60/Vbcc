import Image from "next/image"

export const AllPageHero = ({title,desc,ImgSrc}) => {
  return (
    <section className='h-full w-full flex flex-wrap-reverse md:flex-nowrap bg-success'>
        <div className='w-full md:w-1/2 px-5 py-10 md:px-10 md:py-[60px] lg:p-[60px]'>
        <div className='w-full h-full md:max-w-[550px] lg:max-w-[440px] flex flex-col justify-between items-center gap-10 md:gap-0'>
            <h2 className='font-Lora text-2xl md:text-4xl xl:text-6xl w-full'>{title}</h2>
            <p className='font-urbanist text-sm lg:text-base'>{desc}</p>
        </div>
        </div>
        {/* <div style={{backgroundImage: `url(${ImgSrc})`}} className="bg-cover bg-center bg-no-repeat"></div> */}
        <div className="relative h-[400px] md:h-[50vh] w-full md:w-1/2">
            <Image fill src={ImgSrc} alt={title} 
            // placeholder="blur" blurDataURL=""
            sizes="(min-width: 820px) 50vw, 100vw"
            className="object-cover object-center" />
        </div>
    </section>
  )
}
