"use client";
import Slider from "react-slick";

const Carousel = () => {
    const settings = {
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: false,
        pauseOnHover : false
      };
      return (
        <section className="py-2 bg-transparent">
            <div className="w-full md:w-[75%] mx-auto">
            <Slider {...settings}>
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
      )
}

export default Carousel