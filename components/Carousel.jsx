"use client";
import Slider from "react-slick";

const Carousel = () => {
  return (
    <section className="py-2 bg-transparent">
      <div className="w-full md:w-[75%] mx-auto">
        <Slider
          dots={false}
          infinite={true}
          autoplay={true}
          speed={1950}
          autoplaySpeed={2400}
          arrows={false}
          slidesToShow={1}
          slidesToScroll={1}
          vertical={true}
          verticalSwiping={false}
          pauseOnHover={false}
        >
          <div className="font-Lora text-[32px] md:text-[40px] tracking-tight">
            <h3>Industrial Equipment</h3>
          </div>
          <div className="font-Lora text-[32px] md:text-[40px] tracking-tight">
            <h3>Ceramics Products</h3>
          </div>
          <div className="font-Lora text-[32px] md:text-[40px] tracking-tight">
            <h3>Research Equipment</h3>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
