"use client";
import Image from "next/image";
import othersData from "@/libs/others.json";
import { Btn2 } from "./Btn";
import { NextArrowSvg } from "@/svg_components/NextArrow";
import { PrevArrowSvg } from "@/svg_components/PrevArrow";
import { Carousel } from "react-responsive-carousel";
import { customHorizontalAnimation } from "@/libs/slider_animation";
import { IoMdQuote } from "react-icons/io";

const Testimonials = () => {
  return (
    <section className='relative w-full overflow-hidden bg-white text-primary font-Montserrat'>
      <div className='block w-full space-y-6 padding'>
        <div className='block py-10 space-y-6 md:space-y-16 md:py-20'>
          <div className='block w-full space-y-4 md:space-y-6'>
            <h4 className='text-2xl tracking-wide md:text-4xl xl:text-5xl text-info'>Our Team</h4>
            <div className="flex flex-col md:flex-row">
              <div className="relative overflow-hidden w-full h-64 md:h-80 md:w-[450px] bg-[#E5EFFF] md:border-r-1 border-primary">
                <Image
                  alt="VBCC Logo"
                  src="/VBCC - Logo.svg"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="grid w-full grid-cols-2 md:grid-cols-4">
                {/* {othersData.clientLogos2.map((item, idx) => ( */}
                <div className={`w-full h-full place-content-center bg-[#E5EFFF] md:bg-primary`} >
                  <div className={`relative overflow-hidden size-28 lg:size-32 xl:size-40 mx-auto`}>
                    <Image
                      alt={`Anna University Logo`}
                      src={"https://ik.imagekit.io/webibee/VBCC/client-logo/AU.svg?updatedAt=1731397607533"}
                      fill
                      className="object-cover object-center p-5"
                    />
                  </div>
                </div>
                <div className={`w-full h-full place-content-center bg-primary md:bg-[#E5EFFF]`} >
                  <div className={`relative overflow-hidden size-28 lg:size-32 xl:size-40 mx-auto`}>
                    <Image
                      alt={`BHEL Logo`}
                      src={"https://ik.imagekit.io/webibee/VBCC/client-logo/bhel.svg?updatedAt=1731397608150"}
                      fill
                      className="object-cover object-center p-5"
                    />
                  </div>
                </div>
                <div className={`w-full h-full place-content-center bg-primary`} >
                  <div className={`relative overflow-hidden size-28 lg:size-32 xl:size-40 mx-auto`}>
                    <Image
                      alt={`IIT Madras Logo`}
                      src={"https://ik.imagekit.io/webibee/VBCC/client-logo/IIT-Madras.svg?updatedAt=1731397607544"}
                      fill
                      className="object-cover object-center p-5"
                    />
                  </div>
                </div>
                <div className={`w-full h-full place-content-center bg-[#E5EFFF]`} >
                  <div className={`relative overflow-hidden size-28 lg:size-32 xl:size-40 mx-auto`}>
                    <Image
                      alt={`IIT Hyderabad Logo`}
                      src={"https://ik.imagekit.io/webibee/VBCC/client-logo/IITM%20Hyd%202.svg?updatedAt=1731397608270"}
                      fill
                      className="object-cover object-center p-5"
                    />
                  </div>
                </div>
                <div className={`w-full h-full place-content-center bg-[#E5EFFF]`} >
                  <div className={`relative overflow-hidden size-28 lg:size-32 xl:size-40 mx-auto`}>
                    <Image
                      alt={`ISRO Logo`}
                      src={"https://ik.imagekit.io/webibee/VBCC/client-logo/ISRO.svg?updatedAt=1731397607695"}
                      fill
                      className="object-cover object-center p-5"
                    />
                  </div>
                </div>
                <div className={`w-full h-full place-content-center bg-primary`} >
                  <div className={`relative overflow-hidden size-28 lg:size-32 xl:size-40 mx-auto`}>
                    <Image
                      alt={`VIT Logo`}
                      src={"https://ik.imagekit.io/webibee/VBCC/client-logo/vit.svg?updatedAt=1731397607736"}
                      fill
                      className="object-cover object-center p-5"
                    />
                  </div>
                </div>
                <div className={`w-full h-full block md:hidden place-content-center bg-primary`} >
                  <div className={`relative overflow-hidden size-28 lg:size-32 xl:size-40 mx-auto`}>
                    <Image
                      alt={`CSIR Logo`}
                      src={"https://ik.imagekit.io/webibee/VBCC/client-logo/csir.svg?updatedAt=1731397607575"}
                      fill
                      className="object-cover object-center p-5"
                    />
                  </div>
                </div>
                <div className={`w-full h-full hidden md:block place-content-center bg-primary md:bg-[#E5EFFF]`} >
                  <div className={`relative overflow-hidden size-28 lg:size-32 xl:size-40 mx-auto`}>
                    <Image
                      alt={`DRDO Logo`}
                      src={"https://ik.imagekit.io/webibee/VBCC/client-logo/DRDO.svg?updatedAt=1731397607831"}
                      fill
                      className="object-cover object-center p-5"
                    />
                  </div>
                </div>
                <div className={`w-full h-full hidden md:block place-content-center bg-[#E5EFFF] md:bg-primary`} >
                  <div className={`relative overflow-hidden size-28 lg:size-32 xl:size-40 mx-auto`}>
                    <Image
                      alt={`CSIR Logo`}
                      src={"https://ik.imagekit.io/webibee/VBCC/client-logo/csir.svg?updatedAt=1731397607575"}
                      fill
                      className="object-cover object-center p-5"
                    />
                  </div>
                </div>
                <div className={`w-full h-full block md:hidden place-content-center bg-[#E5EFFF]`} >
                  <div className={`relative overflow-hidden size-28 lg:size-32 xl:size-40 mx-auto`}>
                    <Image
                      alt={`DRDO Logo`}
                      src={"https://ik.imagekit.io/webibee/VBCC/client-logo/DRDO.svg?updatedAt=1731397607831"}
                      fill
                      className="object-cover object-center p-5"
                    />
                  </div>
                </div>
                {/* ))} */}
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-5'>
            {othersData.heroTestimonial.map((item, idx) => (
              <div
                key={idx}
                className="relative border-t-3 border-info bg-gradient-to-b from-[#102242] via-[#FFFFFF1A] to-[#FFFFFF] w-full"
              >
                <div className="absolute top-0 left-0 w-full h-2">
                  <Image
                    alt="svg"
                    src={"/svg 1.svg"}
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <div className="w-full p-5 md:p-6">
                  <div className="flex items-center justify-center w-full h-56">
                    <IoMdQuote className="text-8xl md:text-9xl text-info" />
                  </div>
                  <p className="w-full text-sm leading-tight md:text-base">
                    {item.header}
                  </p>
                </div>
                <div className="flex gap-5 p-5 text-white lg:h-full lg:max-h-48 xl:max-h-40 md:p-6 bg-primary">
                  <div className="relative w-20 h-20">
                    <Image
                      alt="svg"
                      src={item.logo}
                      fill
                      className="object-contain object-center"
                    />
                  </div>
                  <div className="block space-y-2 md:space-y-3">
                    <h4 className="text-lg md:text-xl">{item.title}</h4>
                    <p className="text-xs tracking-wide">{item.subTitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='absolute left-0 w-48 h-20 -top-6 md:h-28 md:w-72'>
        <Image src={"/vector2.svg"} fill alt='' className='object-contain object-center' />
      </div>
      <div className='absolute right-0 w-48 h-28 -bottom-6 md:h-28 md:w-72'>
        <Image src={"/vector1.svg"} fill alt='' className='object-contain object-center' />
      </div>
    </section>
  );
};

export default Testimonials;


{/* <section className="block h-full px-6 py-16 md:px-10 xl:p-16 font-urbanist bg-primary">
        <div className="block text-warning">
          <h3 className="pb-10 text-3xl text-center font-Lora md:text-5xl text-secondary">
            Testimonials
          </h3>
          <div className="block w-full h-auto bg-secondary">
            <Carousel
              showArrows
              ariaLabel={"testimonail content"}
              renderArrowPrev={(clickHandler) => {
                return (
                  <div
                    className="absolute z-20 hidden px-6 py-3 text-base text-center capitalize duration-700 delay-75 border rounded-full cursor-pointer md:block top-80 md:top-52 xl:top-80 left-3 md:left-9 border-primary bg-secondary hover:bg-white font-urbanist w-max group"
                    onClick={clickHandler}
                  >
                    <div className={`h-8 w-full overflow-hidden`}>
                      <h4
                        className={`transition translate-y-0 group-hover:-translate-y-20 duration-700`}
                      >
                        <PrevArrowSvg className={"w-10 h-8 stroke-warning"} />
                      </h4>
                      <h4
                        className={`translate-y-20 transition group-hover:-translate-y-[30px] duration-700`}
                      >
                        <PrevArrowSvg className={"w-10 h-8 stroke-warning"} />
                      </h4>
                    </div>
                  </div>
                );
              }}
              renderArrowNext={(clickHandler) => {
                return (
                  <div
                    className="absolute hidden px-6 py-3 text-base text-center capitalize duration-700 delay-75 border rounded-full cursor-pointer md:block top-80 md:top-52 xl:top-80 right-3 md:right-9 border-primary bg-secondary hover:bg-white font-urbanist w-max group"
                    onClick={clickHandler}
                  >
                    <div className={`h-8 w-full overflow-hidden`}>
                      <h4
                        className={`transition translate-y-0 group-hover:-translate-y-20 duration-700`}
                      >
                        <NextArrowSvg className={"w-10 h-8 stroke-warning"} />
                      </h4>
                      <h4
                        className={`translate-y-20 transition group-hover:-translate-y-[30px] duration-700`}
                      >
                        <NextArrowSvg className={"w-10 h-8 stroke-warning"} />
                      </h4>
                    </div>
                  </div>
                );
              }}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              autoPlay
              interval={5000}
              infiniteLoop
              stopOnHover={false}
              swipeable={false}
              animationHandler={customHorizontalAnimation}
            >
              {othersData.heroTestimonial.map((item, idx) => (
                <div
                  className="w-full p-10 bg-secondary space-y-8 min-h-auto md:min-h-[430px]"
                  key={idx}
                >
                  <h3 className="font-Lora text-base sm:text-[28px] md:text-[32px] xl:text-[40px] leading-6 sm:leading-8 md:leading-[52px] tracking-[-1.6px] text-center">
                    &ldquo;{item.header}&rdquo;
                  </h3>
                  <div className="relative h-[120px] w-[120px] mx-auto">
                    <Image
                      fill
                      src={item.logo}
                      alt="product"
                      className="absolute object-contain object-center"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xl md:text-[20px] tracking-tight">
                      {item.title}
                    </p>
                    <p className="text-xs md:text-base">{item.subTitle}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="flex items-center justify-center mt-10">
            <Btn2
              Hbgcolor={"bg-white"}
              textColor={"text-white"}
              HtextColor={"text-warning"}
              bColor={"border-white"}
              title={"View All"}
              href={"/testimonials"}
            />
          </div>
        </div>
      </section> */}