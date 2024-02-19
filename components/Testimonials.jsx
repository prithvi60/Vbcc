"use client";
import Image from "next/image";
import othersData from "@/libs/others.json";
import { Btn2 } from "./Btn";
import { NextArrowSvg } from "@/svg_components/NextArrow";
import { PrevArrowSvg } from "@/svg_components/PrevArrow";
import { Carousel } from "react-responsive-carousel";
import { customHorizontalAnimation } from "@/libs/slider_animation";

const Testimonials = () => {
  return (
    <section className="block py-16 px-6 md:px-10 xl:p-16 font-urbanist bg-primary h-full">
      <div className="block text-warning">
        <h3 className="font-Lora text-3xl md:text-5xl text-secondary text-center pb-10">
          Testimonials
        </h3>
        <div className="block bg-secondary h-auto w-full">
          <Carousel
            showArrows
            ariaLabel={"testimonail content"}
            renderArrowPrev={(clickHandler) => {
              return (
                <div
                  className="hidden md:block absolute top-80 md:top-52 xl:top-80 left-3 md:left-9 border border-primary py-3 px-6 cursor-pointer rounded-full z-20 bg-secondary  hover:bg-white text-center text-base duration-700 delay-75 font-urbanist capitalize w-max group"
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
                  className="hidden md:block absolute top-80 md:top-52 xl:top-80 right-3 md:right-9 border border-primary py-3 px-6 cursor-pointer rounded-full bg-secondary hover:bg-white text-center text-base duration-700 delay-75 font-urbanist capitalize w-max group"
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
            //   swipeable={false}
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
        <div className="flex justify-center items-center mt-10">
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
    </section>
  );
};

export default Testimonials;
