"use client";
import Slider from "react-slick";
import Image from "next/image";
import { testimonial } from "@/libs/data";
import { Btn2 } from "./Btn";
import { NextArrowSvg } from "@/svg_components/NextArrow";
import { PrevArrowSvg } from "@/svg_components/PrevArrow";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-80 md:top-52 xl:top-80 right-3 md:right-9 border border-primary py-3 px-6 cursor-pointer rounded-full bg-secondary block hover:bg-white text-center text-base duration-700 delay-75 font-urbanist capitalize w-max group"
      onClick={onClick}
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
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-80 md:top-52 xl:top-80 left-3 md:left-9 border border-primary py-3 px-6 cursor-pointer rounded-full z-20 bg-secondary block hover:bg-white text-center text-base duration-700 delay-75 font-urbanist capitalize w-max group"
      onClick={onClick}
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
    <section className="block py-16 px-6 md:px-10 xl:p-16 font-urbanist bg-primary h-full">
      <div className="block text-warning">
        <h3 className="font-Lora text-3xl md:text-5xl text-secondary text-center pb-10">
          Testimonials
        </h3>
        <Slider {...settings}>
          {testimonial.map((item, idx) => (
            <div
              className="w-full p-10 bg-secondary space-y-8 min-h-[650px] md:min-h-[430px]"
              key={idx}
            >
              <h3 className="font-Lora sm:text-[28px] md:text-[32px] xl:text-[40px] leading-[52px] tracking-[-1.6px] text-center">
                &ldquo;{item.header}&rdquo;
              </h3>
              <div className="relative h-[120px] w-[120px]mx-auto">
                <Image
                  fill
                  src={item.logo}
                  alt="product"
                  className="absolute object-contain object-center"
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
        </Slider>
        <div className="flex justify-center items-center mt-10">
          <Btn2
            Hbgcolor={"bg-white"}
            textColor={"text-white"}
            HtextColor={"text-warning"}
            bColor={"border-white"}
            title={"View All"}
            href={"/"}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
