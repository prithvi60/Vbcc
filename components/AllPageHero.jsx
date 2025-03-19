import Image from "next/image"

export const AllPageHero = ({title,desc,ImgSrc}) => {
  return (
    <section className='flex flex-wrap-reverse w-full h-full md:flex-nowrap bg-success'>
        <div className='w-full md:w-1/2 px-5 py-10 md:px-10 md:py-[60px] lg:p-[60px]'>
        <div className='w-full h-full md:max-w-[550px] lg:max-w-[440px] flex flex-col justify-between items-center gap-10 md:gap-0'>
            <h2 className='w-full text-2xl font-Lora md:text-4xl xl:text-6xl'>{title}</h2>
            <p className='text-sm font-urbanist lg:text-base'>{desc}</p>
        </div>
        </div>
        {/* <div style={{backgroundImage: `url(${ImgSrc})`}} className="bg-center bg-no-repeat bg-cover"></div> */}
        <div className="relative h-[400px] md:h-[50vh] w-full md:w-1/2">
            <Image priority={true} quality={100} fill src={ImgSrc} alt={title} title={title}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
            sizes="(min-width: 820px) 50vw, 100vw"
            className="object-cover object-center" />
        </div>
    </section>
  )
}
