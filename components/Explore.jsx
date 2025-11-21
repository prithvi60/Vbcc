"use client"
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Modal2 } from "./landing page/Modal";
import { exploreList, whyChooseUs } from "@/libs/otherPage";
import Slider from "react-slick";
const Explore = () => {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section
      name="explore"
      id="explore"
      className="relative w-full h-full pt-40 overflow-hidden bg-white pb-60 text-primary font-Montserrat md:overflow-visible"
    >
      <div
        className="absolute z-auto w-full h-[115px] sm:h-[260px] md:h-[420px] 2xl:h-[450px] 2xxl:h-[490px] right-0 top-10
       md:w-4/5 2xxl:w-3/5 md:-top-24 2xl:-top-36"
      >
        <div
          className="relative w-full h-full px-6 py-8 bg-bottom bg-no-repeat bg-cover card-mask_2"
          style={{
            backgroundImage: "url('https://cdn.shopifyapp.shop/vbcc/homepage/lab-herobg.png')",
          }}
        >
          <div className="absolute w-full h-full bg-[#293271] bg-opacity-80  top-0 left-0 z-10"></div>
          <p className="relative z-20 w-full -mt-3 text-xl font-semibold text-white 2xl:mt-32 md:mt-10 xl:mt-20 md:text-2xl xl:text-5xl md:w-3/4">
            Your Product Vision, Crafted into Reality by Us
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-10 mb-10 overflow-hidden 2xxl:mt-20 md:mb-56 lg:flex-row">
        <div className="block p-10 mx-auto space-y-4">
          <Link title="categories" href={"/categories"} className="relative w-full lg:w-2/5 flex justify-center md:justify-start gap-2 items-center lg:block text-3xl text-[#A7ACB8] hover:text-info transition-colors duration-400 ease-in-out md:text-5xl xl:text-6xl group">
            <h4 className="w-3/5 font-bold tracking-wider">Explore Products</h4>
            <RiArrowRightUpLine className="mt-2 lg:mt-0 lg:absolute top-10 left-80 text-info" />
          </Link>
          <div className="w-full md:w-max">
            <Modal2 pageType={"main"} page={"Home"} query="laboratory" />
          </div>
        </div>
        <div className="w-full px-8 max-w-full sm:max-w-[40rem] lg:max-w-3xl slider-container">
          <Slider {...settings} className="explore-slider">
            {exploreList.map((list, idx) => (
              <Link
                title="explore"
                href={list.ref}
                className="relative !h-[380px] !w-full md:!w-[320px] lg:!w-[280px] xl:!w-[260px] md:!h-[480px] after:absolute after:top-2 after:-left-2 z-auto after:border-2 after:border-info after:w-full after:h-full"
                key={idx}
              >
                <Image
                  src={list.img}
                  fill
                  alt="product image"
                  title="product image"
                  className="object-cover object-center brightness-[0.45]"
                />
                <div className="absolute block w-full space-y-4 text-white bottom-14 left-5">
                  <div className="relative z-auto size-12 md:size-16">
                    <Image
                      src={list.icon}
                      fill
                      alt="product image"
                      title="product image"
                      className="object-cover object-center"
                    />
                  </div>
                  <h2 className="text-base font-bold tracking-wider !leading-tight md:text-[18px] xl:text-[22px] w-3/5 capitalize">
                    {list.title}
                  </h2>
                  {/* <p className="w-4/5 text-xs md:text-sm">
                  {list.desc}
                </p> */}
                </div>
              </Link>
            ))}
          </Slider>
        </div>
        <h2 className="text-[28px] mt-6 justify-center items-center font-bold tracking-wider !leading-tight flex md:hidden w-full capitalize gap-1">
          Why <span className="font-bold text-info">Choose Us?</span>
        </h2>
      </div>
      <div className="relative flex flex-col w-[96%] sm:w-full h-full gap-10 lg:gap-0 lg:flex-row lg:justify-between">
        <div className="relative w-full h-full lg:w-3/5">
          <div className="z-0 h-full md:h-[850px] absolute -bottom-3 md:-bottom-24 lg:-bottom-10 xl:-bottom-24 left-6 w-full">
            <div
              className="relative w-full h-full px-6 py-8 bg-right-bottom bg-no-repeat bg-cover explore_card-mask border-3 border-secondary"
              style={{
                backgroundImage: "url('https://cdn.shopifyapp.shop/vbcc/homepage/explore.png')",
              }}
            >
              <div className="absolute w-full h-full bg-[#293271] bg-opacity-60 top-0 left-0 z-10"></div>
            </div>
          </div>

          <div className="relative flex flex-col items-end w-3/4 h-auto gap-6 ml-20 lg:w-4/5">
            <>
              {whyChooseUs.map((item, idx) => (
                <div
                  className={`p-6 bg-info space-y-4 rounded-lg w-full h-auto border border-secondary text-white z-auto`}
                  key={idx}
                >
                  <div className="relative w-8 h-8 md:h-10 md:w-10">
                    <Image
                      fill
                      src={item.img}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
                      alt="Logo"
                      title="product Logo"
                      className="absolute object-contain object-center"
                    />
                  </div>
                  <p className="text-xs md:text-sm">{item.desc}</p>
                </div>
              ))}
            </>
          </div>
        </div>
        <div className="relative block w-full px-10 space-y-4 md:py-10 xl:py-12 md:space-y-8 lg:w-2/5 text-primary">
          <h2 className="text-[28px] font-bold tracking-wider !leading-tight md:text-[36px] lg:text-[44px] xl:text-[52px] hidden md:flex w-full capitalize gap-1">
            Why <span className="text-info">Choose Us?</span>
          </h2>
          <p className="text-sm md:text-base">
            with over two decades of expertise, VBCC High Temperature
            Instruments Pvt, Ltd, previously Known as VB Ceramic Consultants is
            a distinguished leader crafting top-tier Instruments, Equipment,
            Furnaces, and Kilns, Our unwavering commitment to excellance has
            earned trust from diverse clientee, including prestigious
            universities, research organizations,and thriving industries.
          </p>
          <p className="text-sm md:text-base">
            At VBCC, our dedicated team delivers comprehensive solutions across
            the industry spectrum,Providing superior products and essential
            technical expertise through tailored turnkey solutions. Choose VBCC
            for quality, innovation, and personalized service, transforming
            challenges into oppurtunites.
          </p>
          <Modal2 pageType={"main"} page={"home"} query="laboratory" />
          <div className="absolute -bottom-48 lg:-bottom-44 xl:-bottom-44 left-24 md:left-32 lg:left-20 xl:left-32">
            <div className="relative w-20 overflow-hidden h-44 md:w-24 md:h-52 xl:w-32 xl:h-64">
              <Image
                src={"https://cdn.shopifyapp.shop/vbcc/homepage/card%201.png"}
                fill
                alt="product image"
                title="product image"
                className="object-cover object-center rounded-full"
              />
              <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-b from-[#afadadef] via-[#848080df] to-[#a9a9a9de] rounded-full bg-opacity-20"></div>
              <div className="absolute overflow-hidden top-4 left-3 md:top-10 md:left-4 xl:left-6 size-14 xl:size-20">
                <Image
                  src={
                    "https://cdn.shopifyapp.shop/vbcc/homepage/iso.svg"
                  }
                  fill
                  alt="product image"
                  title="product image"
                  className="object-contain object-center"
                />
              </div>
              <div className="absolute overflow-hidden bottom-4 left-3 md:bottom-10 md:left-4 xl:left-6 size-14 xl:size-20">
                <Image
                  src={
                    "https://cdn.shopifyapp.shop/vbcc/homepage/ce-logo.svg"
                  }
                  fill
                  alt="product image"
                  title="product image"
                  className="object-contain object-center"
                />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-48 lg:-bottom-24 right-24 md:right-52 lg:right-16 xl:right-40">
            <div className="relative w-20 h-44 md:w-24 md:h-52 xl:w-32 xl:h-64">
              <Image
                src={
                  "https://cdn.shopifyapp.shop/vbcc/homepage/card%201.png"
                }
                fill
                alt="product image"
                title="product image"
                className="object-cover object-center rounded-full"
              />
              <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-b from-[#afadadef] via-[#848080df] to-[#a9a9a9de] rounded-full bg-opacity-20"></div>
              <div className="absolute overflow-hidden top-4 left-3 md:top-10 md:left-4 xl:left-4 size-16 xl:size-24">
                <Image
                  src={
                    "https://cdn.shopifyapp.shop/vbcc/msme-logo.png"
                  }
                  fill
                  alt="product image"
                  title="product image"
                  className="object-contain object-center"
                />
              </div>
              <div className="absolute overflow-hidden bottom-4 left-3 md:bottom-10 md:left-4 xl:left-4 size-16 xl:size-24">
                <Image
                  src={
                    "https://cdn.shopifyapp.shop/vbcc/homepage/MIN-Logo.png"
                  }
                  fill
                  alt="product image"
                  title="product image"
                  className="object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 z-0 w-48 h-20 -top-6 md:h-28 md:w-72">
        <Image
          src={"/vector2.svg"}
          fill
          alt="icon"
          title="icon"
          className="object-contain object-center"
        />
      </div>
      <div className="absolute right-0 z-0 w-48 h-28 -bottom-10 md:-bottom-6 md:h-28 md:w-72">
        <Image
          src={"/vector1.svg"}
          fill
          alt="icon"
          title="icon"
          className="object-contain object-center"
        />
      </div>
    </section>
  );
};

export default Explore;
