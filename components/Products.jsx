"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Btn2 } from "./Btn";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import othersData from "@/libs/others.json"

const Products = ({ sortProduct, productsData, featureProducts }) => {
  const [ourProducts, setOurProducts] = useState(featureProducts);
  const [width, setWidth] = useState(0);
  const [count, setCount] = useState(8);
  const [activeTab, setActiveTab] = useState("Best Selling");
  const router = useRouter();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  }

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    width >= 1440
      ? setCount(8)
      : width >= 1024
        ? setCount(6)
        : width >= 810
          ? setCount(4)
          : setCount(6);
  }, [width]);

  const handleSortBy = (value) => {
    setActiveTab(value);
    const sortedBy = productsData.filter(
      (val) => val.sortBy.includes(value)
    );
    setOurProducts(sortedBy);
  };

  return (

    <section className="relative z-10 w-full h-full overflow-hidden text-white pt-72">
      <div className="w-full h-full overflow-hidden bg-primary font-Montserrat">
        <div className="absolute w-full h-[20vh] md:h-[35vh] -left-1 md:w-4/5 top-28">
          <div
            className="relative w-full h-full px-6 py-8 bg-center bg-no-repeat bg-cover rtl_card-mask border-3 border-secondary"
            style={{
              backgroundImage: "url('/counterBg.png')"
            }}
          >
            <div className="absolute w-full h-full bg-[#293271] bg-opacity-60 top-0 left-0 z-20"></div>
          </div>
          <div className="absolute z-30 flex items-center gap-8 top-8 md:gap-12 left-4 md:left-6 w-max xl:gap-16 2xl:gap-36 md:top-16 lg:top-20 xl:left-24 xl:top-32">
            <div className="z-30 flex items-center justify-center gap-1 ">
              {sortProduct.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSortBy(item.value)}
                  className={`text-xs relative !z-20 lg:text-sm xl:text-lg tracking-tight  min-w-fit p-2 lg:px-10 md:px-5 md:py-2 lg:py-3 group/button block text-center duration-700 delay-75 font-medium capitalize cursor-pointer ${activeTab === item.value
                    ? "after:absolute after:-bottom-4 after:left-0 after:w-full after:h-0.5  after:bg-white bg-info text-white"
                    : "no-underline bg-white text-primary"
                    }`}
                >
                  <h4>{item.value}</h4>
                </div>
              ))}
            </div>
            <h4 className="relative top-0 right-0 md:text-2xl xl:text-3xl">Categories</h4>
          </div>
        </div>

        <div className="relative flex-wrap items-center justify-center hidden w-full h-full gap-4 pb-20 mx-auto overflow-hidden pt-44 slider-container max-w-7xl md:flex">
          {ourProducts.slice(0, count).map((card, id) => (
            <div className="relative w-full h-auto max-w-xs space-y-8 group" key={id}>
              <div className="relative mx-auto transition-all duration-500 ease-linear transform size-56 md:size-80 group-hover:scale-150">
                <Image
                  alt="image"
                  fill
                  src={card.img}
                  className="z-20 object-contain object-center"
                />
                <div className="absolute top-16 z-10 left-5 flex justify-between items-center rounded-full bg-gradient-to-b from-[#13294F56] to-[#6B778C56] bg-opacity-80 size-40 md:size-60 transition-all duration-500 ease-linear group-hover:scale-[0.80] group-hover:bg-gradient-to-b group-hover:from-info group-hover:to-info"></div>
              </div>
              <h4 className="font-semibold text-center mx-auto text-[14px] md:text-[16px] xl:text-[24px] leading-7 tracking-wider w-full sm:w-3/4">
                {card.productName}
              </h4>
            </div>
          ))}
        </div>
        {/* mobile view */}
        <div className="w-full sm:w-[400px] h-full flex sm:flex-nowrap md:hidden items-center gap-4 overflow-auto thumbnail">
          {ourProducts.slice(0, count).map((card, id) => (
            <div className="relative w-full h-auto max-w-xs space-y-8 group" key={id}>
              <div className="relative mx-auto transition-all duration-500 ease-linear transform size-56 md:size-80 group-hover:scale-150">
                <Image
                  alt="image"
                  fill
                  src={card.img}
                  className="z-20 object-contain object-center"
                />
                <div className="absolute top-16 z-10 left-5 flex justify-between items-center rounded-full bg-gradient-to-b from-[#13294F56] to-[#6B778C56] bg-opacity-80 size-40 md:size-60 transition-all duration-500 ease-linear group-hover:scale-[0.80] group-hover:bg-info"></div>
              </div>
              <h4 className="font-semibold text-center mx-auto text-[14px] md:text-[16px] xl:text-[24px] leading-7 tracking-wider w-full sm:w-3/4">
                {card.productName}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-0 w-48 h-28 -top-6 md:h-36 md:w-72">
        <Image src={"/vector1blue.svg"} fill alt="" className="object-contain object-center" />
      </div>
    </section>
  );
};

export default Products;


{/* </div> */ }
{/* </div> */ }
{/* <section className="px-6 py-16 md:px-10 xl:p-16 bg-secondary font-urbanist">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-wrap items-center justify-between w-full md:justify-center">
            <h3 className="text-3xl font-Lora md:text-5xl text-warning">
              Our Products
            </h3>
            <Link scroll={false} href={"/products"} className="block mt-1 text-base underline md:hidden text-warning underline-offset-4 decoration-warning font-urbanist">View All</Link>
          </div>
          <div className="flex flex-col items-center justify-center w-full space-y-8">
            <div className="flex items-center justify-center w-full h-auto gap-1 sm:gap-3 bg-secondary">
              {sortProduct.map((item, idx) => (
                <div
                  className={`text-sm sm:text-base tracking-tight border border-warning rounded-full font-Lora min-w-fit p-2.5  sm:px-4 sm:py-2 group/button block bg-transparent hover:bg-success hover:bg-opacity-20 text-center duration-700 delay-75 capitalize cursor-pointer ${activeTab === item.value
                    ? "!bg-primary !hover:bg-primary"
                    : ""
                    }`}
                  key={idx}
                  onClick={() => handleSortBy(item.value)}
                >
                  <div className={`h-6 w-full overflow-hidden`}>
                    <h4
                      className={`transition translate-y-0 group-hover/button:-translate-y-20 duration-700   ${activeTab === item.value
                        ? "text-secondary "
                        : "text-warning"
                        }`}
                    >
                      {item.value}
                    </h4>
                    <h4
                      className={`translate-y-20 transition group-hover/button:-translate-y-[25px] duration-700  ${activeTab === item.value
                        ? "text-secondary"
                        : "group-hover/button:text-primary"
                        }`}
                    >
                      {item.value}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-wrap items-center justify-center hidden h-full gap-4 overflow-hidden md:flex">
              {ourProducts.slice(0, count).map((card, id) => (
                <div
                  className="w-[340px] md:w-[300px] bg-primary hover:bg-blue-950 rounded-none font-urbanist p-5 space-y-4 group relative"
                  key={id}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-md">in-stock</p>
                    {/* <p className="text-small">$718</p> */}
{/* </div > */ }
{/* <Link
                    href={`/products/${card.productName.replace(/\s/g, "_")}`}
                    className="space-y-4"
                  >
                    <div className="relative h-[225px] w-full">
                      <Image
                        fill
                        src={card.img}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
                        alt="product"
                        className="absolute object-contain object-center"
                      />
                    </div>
                    <p
                      className="group-hover:absolute group-hover:top-10 group-hover:right-2.5 group-hover:px-3.5
                        group-hover:py-4 group-hover:border group-hover:border-info group-hover:text-info text-base group-hover:font-urbanist group-hover:rounded-full group-hover:w-max hidden group-hover:block"
                    >
                      View
                    </p>
                    <div>
                      <h4 className="text-sm uppercase">{card.productType}</h4>
                      <p className="text-xl truncate font-Lora">{card.productName}</p>
                    </div>
                  </Link>
                  <button
                    onClick={() => router.push("/contact")}
                    className={`group/btn rounded-full px-4 py-2 border border-warning bg-white hover:bg-info text-center text-base duration-700 delay-75 font-urbanist capitalize w-full`}
                  >
                    <div className={`h-6 w-full overflow-hidden`}>
                      <h4
                        className={`transition translate-y-0 group-hover/btn:-translate-y-20 duration-700 text-warning`}
                      >
                        Request a Quote
                      </h4>
                      <h4
                        className={`translate-y-20 transition group-hover/btn:-translate-y-[25px] duration-700 group-hover/btn:text-white`}
                      >
                        Request a Quote
                      </h4>
                    </div>
                  </button>
                </div >
              ))}
            </div > */}
{/* Mobile view Product items */ }
{/*<div div className = "w-full sm:w-[350px] h-full flex  sm:flex-nowrap md:hidden items-center gap-4 overflow-auto hideScroll" >
  {
    ourProducts.slice(0, count).map((card, id) => (
      <Link
        href={`/products/${card.productName.replace(/\s/g, "_")}`}
        className="block w-full h-full p-5 space-y-4 rounded-none bg-primary hover:bg-blue-950 font-urbanist group"
        key={id}
      >
        <div className="flex items-center justify-between">
          <p className="text-md">in-stock</p>
          {/* <p className="text-small">$718</p> */}
{/* </div> */ }
{/* <div className="relative">
          <div className="relative h-[160px] sm:h-[225px] sm:w-full">
            <Image
              fill
              src={card.img}
              alt="product"
              className="absolute object-contain"
            />
          </div>
          <p
            className="group-hover:absolute group-hover:top-2 group-hover:right-2.5 group-hover:px-3.5
                        group-hover:py-4 group-hover:border group-hover:border-info group-hover:text-info text-base group-hover:font-urbanist group-hover:rounded-full group-hover:w-max hidden group-hover:block"
          >
            View
          </p>
          <div>
            <h4 className="w-full text-xs uppercase truncate sm:text-sm">{card.productType}</h4>
            <p className="w-full text-sm truncate font-Lora sm:text-xl">{card.productName}</p>
          </div>
        </div>
        <button
          onClick={() => router.push("/contact")}
          className={`group/button block rounded-full p-1 sm:px-4 sm:py-3 border border-warning bg-white hover:bg-info text-center text-sm sm:text-base duration-700 delay-75 font-urbanist capitalize min-w-36 sm:w-full`}
        >
          <div className={`h-6 w-full overflow-hidden`}>
            <h4
              className={`transition translate-y-0 group-hover/button:-translate-y-20 duration-700 text-warning`}
            >
              Request a Quote
            </h4>
            <h4
              className={`translate-y-20 transition group-hover/button:-translate-y-[25px] duration-700 group-hover/button:text-white`}
            >
              Request a Quote
            </h4>
          </div>
        </button> */}
{/* </Link>
    ))
  }
            </div >
          </div > */}
{/* <div className="hidden md:block">
    <Btn2
      Hbgcolor={"bg-primary"}
      textColor={"text-warning"}
      HtextColor={"text-white"}
      bColor={"border-warning"}
      title={"View All Products"}
      href={"/products"}
    />
  </div>
        </div >
      </section > */}