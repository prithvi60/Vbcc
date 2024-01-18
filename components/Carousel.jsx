"use client";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";

const InnerCarousel = () => {
  const [client, setClient] = useState(false);
  useEffect(() => {
      setClient(true);
  }, []);
  if (!client) {
    return (
      <div className="w-full mx-auto pb-1 md:pb-3">
        <h3 className="font-Lora text-[30px] md:text-[40px] tracking-tight w-full">
          Industrial Equipment
        </h3>
      </div>
    );
  }
  return (
    <div className="w-full mx-auto pb-1 md:pb-3">
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
      >
        <h3 className="font-Lora text-[30px] md:text-[40px] tracking-tight w-full">
          Industrial Equipment
        </h3>
        <h3 className="font-Lora text-[30px] md:text-[40px] tracking-tight w-full">
          Ceramics Products
        </h3>
        <h3 className="font-Lora text-[30px] md:text-[40px] tracking-tight w-full">
          Research Equipment
        </h3>
      </Carousel>
    </div>
  );
};

export default InnerCarousel;
