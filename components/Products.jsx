"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const Products = ({ sortProduct, productsData, featureProducts }) => {
  const [ourProducts, setOurProducts] = useState(featureProducts);
  const [activeTab, setActiveTab] = useState("Best Selling");
 

  const handleSortBy = (value) => {
    setActiveTab(value);
    const sortedBy = productsData.filter(
      (val) => val.category === value
    );
    setOurProducts(sortedBy[0].lists);
  };

  return (

    <section className="relative z-auto w-full h-full overflow-hidden text-white pt-60 md:pt-72">
      <div className="w-full h-full overflow-hidden bg-primary font-Montserrat">
        <div className="absolute z-auto w-full h-[215px] sm:h-[360px] md:h-[420px] 2xl:h-[450px] 2xxl:h-[490px] -left-1 sm:w-4/5 2xxl:w-3/5 top-28">
          <div
            className="relative w-full h-full px-6 py-8 bg-center bg-no-repeat bg-cover rtl_card-mask"
            style={{
              backgroundImage: "url('/counterBg.png')"
            }}
          >
            <div className="absolute w-full h-full bg-[#293271] bg-opacity-60 top-0 left-0 z-0"></div>
          </div>
          <div className="absolute z-0 flex items-center gap-8 sm:top-16 top-8 md:gap-14 left-4 md:left-6 w-max xl:gap-16 2xl:gap-36 md:top-16 lg:top-28 xl:left-24 xl:top-32">
            <div className="z-0 flex items-center justify-center gap-1 ">
              {sortProduct.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSortBy(item.value)}
                  className={`text-xs relative z-10 lg:text-sm xl:text-lg tracking-tight min-w-fit p-1.5 lg:px-10 md:px-5 md:py-2 lg:py-3 group/button block text-center duration-700 delay-75 font-medium capitalize cursor-pointer ${activeTab === item.value
                    ? "after:absolute after:-bottom-4 after:left-0 after:w-full after:h-0.5  after:bg-white bg-info text-white"
                    : "no-underline bg-white text-primary"
                    }`}
                >
                  <h4>{item.value}</h4>
                </div>
              ))}
            </div>
            <h4 className="relative top-0 right-0 hidden lg:-right-16 md:block md:text-2xl xl:text-3xl">Categories</h4>
          </div>
        </div>

        <div className="relative flex-wrap items-center justify-center hidden w-full h-full gap-4 pt-56 pb-20 mx-auto overflow-hidden slider-container md:gap-10 xl:gap-20 md:flex">
          {ourProducts.map((card, id) => (
            <Link title="products" href={`${card.href}${card.productName.replace(/\s/g, "_")}`} className="relative w-full h-auto max-w-xs space-y-8 group" key={id}>
              <div className="relative mx-auto transition-all duration-500 ease-linear transform size-56 md:size-80 group-hover:scale-150">
                <Image
                  alt="image"
                  title="image"
                  fill
                  src={card.img}
                  className="z-20 object-contain object-center"
                />
                <div className="absolute top-16 z-10 left-5 flex justify-between items-center rounded-full bg-gradient-to-b from-[#13294F56] to-[#6B778C56] bg-opacity-80 size-40 md:size-60 transition-all duration-500 ease-linear group-hover:scale-[0.80] group-hover:bg-gradient-to-b group-hover:from-info group-hover:to-info"></div>
              </div>
              <h4 className="font-semibold text-center mx-auto text-[14px] md:text-[16px] xl:text-[24px] leading-7 tracking-wider w-full sm:w-3/4">
                {card.productName}
              </h4>
            </Link>
          ))}
        </div>
        {/* mobile view */}
        <div className="flex items-center w-full h-full gap-4 px-3.5 py-10 overflow-auto sm:flex-nowrap md:hidden thumbnail">
          {ourProducts.map((card, id) => (
            <Link title="products" href={`${card.href}${card.productName.replace(/\s/g, "_")}`} className="relative w-full h-auto max-w-xs space-y-8 group" key={id}>
              <div className="relative mx-auto transition-all duration-500 ease-linear transform size-36 group-hover:scale-125">
                <Image
                  alt="image"
                  title="image"
                  fill
                  src={card.img}
                  className="z-20 object-contain object-center"
                />
                <div className="absolute top-2 z-10 left-1 flex justify-between items-center rounded-full bg-gradient-to-b from-[#13294F56] to-[#6B778C56] bg-opacity-80 size-36 transition-all duration-500 ease-linear group-hover:scale-[0.80] group-hover:bg-info"></div>
              </div>
              <h4 className="font-semibold text-center mx-auto text-[14px] md:text-[16px] xl:text-[24px] leading-7 tracking-wider w-full sm:w-3/4">
                {card.productName}
              </h4>
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute left-0 w-48 -z-10 h-28 -top-6 md:h-36 md:w-72">
        <Image src={"/vector1blue.svg"} fill alt="icon" title="icon" className="object-contain object-center" />
      </div>
    </section>
  );
};

export default Products;
