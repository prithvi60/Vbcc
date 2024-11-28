"use client"
import othersData from "@/libs/others.json"
import Image from "next/image"
import { useMemo } from "react";
import dynamic from 'next/dynamic'
import Slider from "react-slick";
import { TSBox } from "@/svg_components/LandingHeroBox";
import Link from "next/link";
const MarqueeComponent = dynamic(() => import("react-fast-marquee"), { ssr: false })

const Clients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };
  return (
    <section className='relative w-full h-full overflow-y-hidden text-white lg:h-screen bg-primary font-Montserrat'>
      <div className='flex flex-col items-center gap-28 lg:gap-0 justify-center lg:justify-around xl:justify-between w-full h-full mx-auto max-w-[1530px] lg:flex-row padding'>
        <div className="relative w-[250px] h-[380px] md:w-[280px] lg:w-[340px] md:h-[380px] lg:h-[480px] z-10">
          <Image
            src={"/card 1.png"}
            fill
            alt="image"
            className="object-cover object-center"
          />
          <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-b from-[#0c1a32d9] to-[#081326b4] "></div>
          <div className="absolute z-20 block w-full space-y-3 top-20 -right-12 md:-right-24">
            <h2 className="text-[28px] font-bold tracking-wider !leading-tight md:text-[36px] w-full capitalize">
              Our Prestigious <span className="text-info w-max">Clients</span>
            </h2>
          </div>
          <div className="absolute z-10 -top-3 -left-5 md:-left-5 md:-top-8 lg:-top-8 lg:-left-16">
            <TSBox className={"w-[280px] h-[400px] md:w-[320px] md:h-[440px] lg:w-[450px] lg:h-[550px] fill-none"} />
          </div>
        </div>
        <div className="block space-y-0 md:space-y-10">
          <div className="w-full h-full mx-auto max-w-64 md:max-w-sm max-h-32 lg:max-w-md xl:max-w-2xl slider-container">
            <Slider {...settings}>
              {othersData.clientLogos.slice(0, 4).map((list, idx) => (
                <Link href={"/testimonials"} key={idx} className="relative size-16 md:size-24 lg:size-28 group">
                  <Image alt="logo" src={list} fill className="object-contain object-center transition-all ease-linear transform group-hover:scale-110 duration-400" />
                </Link>
              ))}
            </Slider>
          </div>
          <div className="w-full h-full mx-auto max-w-64 md:max-w-sm max-h-32 lg:max-w-md xl:max-w-2xl slider-container">
            <Slider {...settings} rtl>
              {othersData.clientLogos.slice(4, 9).map((list, idx) => (
                <Link href={"/testimonials"} key={idx} className="relative size-16 md:size-24 lg:size-28 group">
                  <Image alt="logo" src={list} fill className="object-contain object-center transition-all ease-linear transform group-hover:scale-110 duration-400" />
                </Link>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className='absolute left-0 z-0 w-48 h-28 -top-6 md:h-36 md:w-72'>
        <Image src={"/vector1blue.svg"} fill alt='' className='object-contain object-center' />
      </div>
      <div className='absolute right-0 z-0 w-48 h-28 -bottom-6 md:h-36 md:w-72'>
        <Image src={"/vector2blue.svg"} fill alt='' className='object-contain object-center' />
      </div>
    </section>
  )
}

export default Clients;

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={"absolute z-10 top-4 md:top-5 lg:top-10 -right-12 md:-right-14 size-10 xl:size-12 cursor-pointer"}
      onClick={onClick}
    >
      <Image alt="next arrow" fill src={"/next.svg"} className="object-contain object-center" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={"absolute z-10 top-4 md:top-5 lg:top-10 -left-12 md:-left-14 size-10 xl:size-12 cursor-pointer"}
      onClick={onClick}
    >
      <Image alt="prev arrow" fill src={"/prev.svg"} className="object-contain object-center" />
    </div>
  );
}

{/* <section className="py-16 space-y-8 bg-secondary" id="client">
      <h3 className="px-8 text-lg md:px-16 md:text-xl text-primary">Our Prestigious Clients</h3>
        <MarqueeComponent pauseOnHover speed={70} autoFill={true}>
      <div className="flex items-center gap-10">
        {memoizedLogos.map((logo,idx)=>(
      <div className="relative w-20 h-20 mx-8" key={idx}>
            <Image
              fill
              loading="lazy"
              placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
              src={logo}
              alt="Logo"
              className="object-contain object-center w-full"
            />
          </div>
        ))}
      </div>
        </MarqueeComponent>
    </section> */}