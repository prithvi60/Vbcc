"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Btn2 } from "./Btn";
import { useRouter } from "next/navigation";

const Products = ({ sortProduct, productsData, featureProducts }) => {
  const [ourProducts, setOurProducts] = useState(featureProducts);
  const [width, setWidth] = useState(0);
  const [count, setCount] = useState(8);
  const [activeTab, setActiveTab] = useState("Featured");
  const router = useRouter();

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
  // console.log(ourProducts);
  return (
    <section className="px-6 py-16 md:px-10 xl:p-16 bg-secondary font-urbanist">
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
                className={`text-sm sm:text-base tracking-tight border border-warning rounded-full font-Lora min-w-fit p-2.5  sm:px-4 sm:py-2 group/button block bg-transparent hover:bg-success hover:bg-opacity-20 text-center duration-700 delay-75 capitalize cursor-pointer ${
                  activeTab === item.value
                    ? "!bg-primary !hover:bg-primary"
                    : ""
                }`}
                key={idx}
                onClick={() => handleSortBy(item.value)}
              >
                <div className={`h-6 w-full overflow-hidden`}>
                  <h4
                    className={`transition translate-y-0 group-hover/button:-translate-y-20 duration-700   ${
                      activeTab === item.value
                        ? "text-secondary "
                        : "text-warning"
                    }`}
                  >
                    {item.value}
                  </h4>
                  <h4
                    className={`translate-y-20 transition group-hover/button:-translate-y-[25px] duration-700  ${
                      activeTab === item.value
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
                </div>
                <Link
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
              </div>
            ))}
          </div>
          {/* Mobile view Product items */}
          <div className="w-full sm:w-[350px] h-full flex  sm:flex-nowrap md:hidden items-center gap-4 overflow-auto hideScroll">
            {ourProducts.slice(0, count).map((card, id) => (
              <Link
                href={`/products/${card.productName.replace(/\s/g, "_")}`}
                className="block w-full h-full p-5 space-y-4 rounded-none bg-primary hover:bg-blue-950 font-urbanist group"
                key={id}
              >
                <div className="flex items-center justify-between">
                  <p className="text-md">in-stock</p>
                  {/* <p className="text-small">$718</p> */}
                </div>
                <div className="relative">
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
                </button>
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
        <Btn2
          Hbgcolor={"bg-primary"}
          textColor={"text-warning"}
          HtextColor={"text-white"}
          bColor={"border-warning"}
          title={"View All Products"}
          href={"/products"}
        />
        </div>
      </div>
    </section>
  );
};

export default Products;
