"use client"
import { MdOutlineKeyboardArrowRight,MdOutlineKeyboardArrowLeft  } from "react-icons/md";
import { Carousel } from "react-responsive-carousel";

const bannerContext = ["Free Shipping on orders over $4000 US","Free Shipping on orders over","Free Shipping on orders over $4000 US"]

const Banner = () => {
  return (
    <section className="py-2 bg-primary">
        <div className="md:w-[70%] lg:w-[50%] mx-auto font-urbanist text-white text-sm relative">
        <Carousel
        showArrows
        ariaLabel={"banner content"}
        renderArrowPrev={(clickHandler)=>{
          return (
            <div
            className="hidden md:block absolute -top-1 -left-2 cursor-pointer z-10 bg-primary w-5"
            onClick={clickHandler}
            >
              <MdOutlineKeyboardArrowLeft className="text-secondary h-8 w-8 hover:text-info"/>
            </div>
          );
        }}
        renderArrowNext={(clickHandler)=>{
          return (
            <div
            className="hidden md:block absolute -top-1 right-0 cursor-pointer bg-primary w-5"
            onClick={clickHandler}
            >
              <MdOutlineKeyboardArrowRight className="text-secondary h-8 w-8 hover:text-info"/>
            </div>
          );
        }}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        autoPlay={true}
        interval={5000}
        infiniteLoop
        stopOnHover={false}
        // swipeable={false}
        // animationHandler={"fade"}
      >
        {bannerContext.map((list,id)=>(
          <div className="text-center text-secondary font-urbanist text-sm" key={id}>
          <h3>{list}</h3>
        </div>
        ))}
        {/* <div className="text-center">
            <h3>Free Shipping on orders over $4000 US</h3>
          </div>
          <div className="text-center">
            <h3>Free Shipping on orders over</h3>
          </div>
          <div className="text-center">
            <h3>Free Shipping on orders over $4000 US</h3>
          </div> */}
      </Carousel>
        </div>
      </section>
  )
}

export default Banner