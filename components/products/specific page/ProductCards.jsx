"use client";
import productsData from "@/libs/products.json";
import { Dumbbell } from "@/svg_components/Dumbbell";
import { Glass } from "@/svg_components/Glass";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const ProductCards = ({ value, name }) => {
  const [width, setWidth] = useState(0);
  const [count, setCount] = useState(3);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    width <= 1024 ? setCount(2) : setCount(3);
  }, [width]);

  const filteredProduct = productsData.allProducts.filter(
    (val) => val.productType === value && val.productName !== name
  );
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full overflow-hidden bg-secondary">
      {filteredProduct.slice(0, count).map((card, idx) => (
        <div className="block group" key={idx}>
          <Link
            passHref
            href={`/products/${card?.productName.replace(/\s/g, "")}`}
            className="min-w-full md:min-w-[50%] md:last:min-w-full md:last:col-span-2 z-10"
          >
            {/*Card Body */}
            <div className="bg-white p-2 h-[335px]">
              <div className="h-[85px] w-full">
                {card.feature.map((val, i) => (
                  <div className="space-y-1.5 block" key={i}>
                    <div
                      className={`${
                        val === "robust" ? "flex" : "hidden"
                      } p-3.5 border border-info w-max rounded-full`}
                    >
                      <Dumbbell className={"fill-info h-6 w-6"} />
                    </div>
                    <div
                      className={`${
                        val === "fragile" ? "flex" : "hidden"
                      } p-3.5 border border-info w-max rounded-full`}
                    >
                      <Glass className={"h-6 w-6"} />
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="group-hover:absolute group-hover:top-3.5 group-hover:right-6 group-hover:px-3.5
                        group-hover:py-4 group-hover:border group-hover:border-info group-hover:text-info text-base group-hover:font-urbanist group-hover:rounded-full group-hover:w-max hidden group-hover:block
                        -translate-x-1000 group-hover:translate-x-3 transition-all duration-100 delay-75"
              >
                View
              </div>
              <div className="relative h-[250px] w-full">
                <Image
                  fill
                  src={card?.img}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
                  alt="product"
                  className="absolute object-cover object-center md:odd:last:object-contain"
                />
              </div>
            </div>
            {/* Card Footer */}
            <div className="flex group-hover:bg-white group-hover:rounded-b-2xl bg-transparent transition-all duration-1000 items-center justify-between py-3">
              <div className="-translate-x-1000 group-hover:translate-x-3 transition-all duration-100 delay-75">
                <h4 className="text-[#0D0D0D] font-urbanist">
                  {card.productName}
                </h4>
                <h4 className="text-[#6C6C6C] font-urbanist text-sm">
                  {card.productType}
                </h4>
              </div>
              <div className="flex items-center">
                <Link
                  passHref
                  href={"/contact"}
                  className={`group/btn block rounded-full px-4 py-3 border border-warning bg-transparent hover:bg-primary text-center text-base duration-700 delay-75 font-urbanist capitalize w-max translate-x-1000 group-hover:-translate-x-3`}
                >
                  <div className={`block h-6 w-full overflow-hidden`}>
                    <h4
                      className={`transition translate-y-0 group-hover/btn:-translate-y-20 duration-700 text-warning`}
                    >
                      contact
                    </h4>
                    <h4
                      className={`translate-y-20 transition group-hover/btn:-translate-y-[25px] duration-700 text-white`}
                    >
                      contact
                    </h4>
                  </div>
                </Link>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};
