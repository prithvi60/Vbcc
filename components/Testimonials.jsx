"use client";
import Slider from "react-slick";
import { Button } from "@nextui-org/react";
import Image from "next/image";

function NextArrow(props) {
  const {onClick } = props;
  return (
    <div
      className="absolute top-80 md:top-52 xl:top-80 right-3 md:right-9 border border-primary py-3 px-5 cursor-pointer rounded-full bg-secondary"
      onClick={onClick}
    >
      <div className="relative h-8 w-10">
        <Image
          fill
          src="/arrow-right.svg"
          alt="Logo"
          className="absolute object-contain object-center"
        />
      </div>
    </div>
  );
}

function PrevArrow(props) {
    const {onClick } = props;
    return (
      <div
        className="absolute top-80 md:top-52 xl:top-80 left-3 md:left-9 border border-primary py-3 px-5 cursor-pointer rounded-full bg-secondary z-20"
        onClick={onClick}
      >
        <div className="relative h-8 w-10">
          <Image
            fill
            src="/arrow-left.svg"
            alt="Logo"
            className="absolute object-contain object-center"
          />
        </div>
        {/* <MdKeyboardArrowLeft className=" text-secondary h-8 w-8"/> */}
      </div>
    );
  }

const Testimonials = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <section className="py-16 px-6 md:px-10 xl:p-16 font-urbanist  bg-primary">
      <div className="space-y-10 text-warning">
        <h3 className="font-Lora text-3xl md:text-5xl text-secondary text-center">
          Testimonials
        </h3>
        <Slider {...settings}>
          <div className="w-full p-10 bg-secondary space-y-8">
            <h3 className="font-Lora sm:text-[28px] md:text-[32px]  xl:text-[40px] leading-tight text-center">
              &quot;No Company in India, except VB Ceramic Consultants, took
              this challenging task to succession&quot;
            </h3>
            <div className="relative h-[120px] w-[120px]mx-auto">
              <Image
                fill
                src="/Isro svg.svg"
                alt="product"
                className="absolute object-contain object-center"
              />
            </div>
            <div className="text-center">
              <p className="text-xl md:text-[20px] tracking-tight">
                Vikram Sarabhai Space Centre
              </p>
              <p className="text-xs md:text-base">
                on building Microwave Hybrid Furnace
              </p>
            </div>
          </div>
          <div className="w-full p-10 bg-secondary space-y-8">
            <h3 className="font-Lora sm:text-[28px] md:text-[32px]  xl:text-[40px] leading-tight text-center">
              &quot;No Company in India, except VB Ceramic Consultants, took
              this challenging task to succession&quot;
            </h3>
            <div className="relative h-[120px] w-[120px]mx-auto">
              <Image
                fill
                src="/Isro svg.svg"
                alt="product"
                className="absolute object-contain object-center"
              />
            </div>
            <div className="text-center">
              <p className="text-xl md:text-[20px] tracking-tight">
                Vikram Sarabhai Space Centre
              </p>
              <p className="text-xs md:text-base">
                on building Microwave Hybrid Furnace
              </p>
            </div>
          </div>
          <div className="w-full p-10 bg-secondary space-y-8">
            <h3 className="font-Lora sm:text-[28px] md:text-[32px]  xl:text-[40px] leading-tight text-center">
              &quot;No Company in India, except VB Ceramic Consultants, took
              this challenging task to succession&quot;
            </h3>
            <div className="relative h-[120px] w-[120px]mx-auto">
              <Image
                fill
                src="/Isro svg.svg"
                alt="product"
                className="absolute object-contain object-center"
              />
            </div>
            <div className="text-center">
              <p className="text-xl md:text-[20px] tracking-tight">
                Vikram Sarabhai Space Centre
              </p>
              <p className="text-xs md:text-base">
                on building Microwave Hybrid Furnace
              </p>
            </div>
          </div>
        </Slider>
        <div className="text-center">
          <Button
            color="secondary"
            variant="bordered"
            className="px-6 py-5 border-secondary text-secondary"
            size="lg"
            radius="full"
          >
            View All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
