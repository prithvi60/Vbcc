"use client";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";

const InnerCarousel = () => {
  return (
      <div className="w-full mx-auto pb-1 md:pb-3">
          <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          className="!z-0" 
          autoPlay={true}
          swipeable
          interval={3000}
          infiniteLoop
          axis={"vertical"}
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
        </Carousel>
      </div>
  );
};

export default InnerCarousel;
