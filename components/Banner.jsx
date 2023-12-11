"use client"
import Slider from "react-slick";
import { MdOutlineKeyboardArrowRight,MdKeyboardArrowLeft  } from "react-icons/md";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="hidden md:block absolute top-0 -right-8 -mt-1 cursor-pointer"
      onClick={onClick}
    >
      <MdOutlineKeyboardArrowRight className="text-secondary h-8 w-8 hover:text-info"/>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="hidden md:block absolute top-0 -left-8 -mt-1 cursor-pointer"
      onClick={onClick}
    >
      <MdKeyboardArrowLeft className=" text-secondary h-8 w-8 hover:text-info"/>
    </div>
  );
}

const Banner = () => {
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
    <section className="py-2 bg-primary">
        <div className="md:w-[70%] lg:w-[50%] mx-auto">
        <Slider {...settings}>
          <div className="text-secondary text-center">
            <h3>Free Shipping on orders over $4000 US</h3>
          </div>
          <div className="text-secondary text-center">
            <h3>Free Shipping on orders over</h3>
          </div>
          <div className="text-secondary text-center">
            <h3>Free Shipping on orders over $4000 US</h3>
          </div>
        </Slider>
        </div>
      </section>
  )
}

export default Banner
