"use client";
import { customVerticalAnimation } from "@/libs/slider_animation";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";

const InnerCarousel = () => {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setClient(true);
    }, 200);
  }, []);
  if (!client) {
    return (
      <div className="w-full mx-auto pb-1 md:pb-3">
        {/* text-[30px] */}
        <h3 className="font-Lora text-[27.5px] md:text-[42px] -pb-1 tracking-tight w-full font-normal">
          Laboratory Instruments
        </h3>
      </div>
    );
  }
  return (
    <div className="w-full mx-auto mb-5 md:mb-0 pb-1 md:pb-3">
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        autoPlay={client}
        swipeable={false}
        interval={3000}
        infiniteLoop
        axis={"vertical"}
        stopOnHover={false}
        animationHandler={customVerticalAnimation}
      >
        <h3 className="font-Lora text-[27.5px] md:text-[42px] -pb-1 tracking-tight w-full font-normal ">
          Laboratory Instruments
        </h3>
        <h3 className="font-Lora text-[27.5px] md:text-[42px] -pb-1 tracking-tight w-full font-normal">
          Industrial Furnaces
        </h3>
        <h3 className="font-Lora text-[27.5px] md:text-[42px] -pb-1 tracking-tight w-full font-normal">
          Research Equipment
        </h3>
      </Carousel>
    </div>
  );
};

export default InnerCarousel;
