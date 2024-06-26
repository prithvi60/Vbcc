"use client";
import * as React from "react";
import { Dumbbell } from "@/svg_components/Dumbbell";
import { Glass } from "@/svg_components/Glass";
import { Tooltip } from "@nextui-org/tooltip";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const ProductCard = ({ products }) => {
  const [page, setPage] = useState(1);
  const lastIndex = page * 12;
  const t = Math.ceil(products.length / 12);
  const router = useRouter()
  // console.log(t);
  const handlePage = () => {
    let pageIndex = page + 1;
    if (pageIndex <= t && pageIndex >= 1) {
      setPage(pageIndex);
    }
  };

  useEffect(() => {}, [products, page, t]);
  
  return (
    <section className="space-y-10 bg-secondary">
      <div className="grid w-full h-full grid-cols-1 gap-4 md:grid-cols-2">
        {products.slice(0, lastIndex).map((list, idx) => (
          <div className="block group md:odd:last:col-span-2" key={idx}>
              <Link
              scroll={false}
              passHref
              href={`/products/${list?.productName.replace(/\s/g, "_")}`}
              className="min-w-full relative md:min-w-[50%] z-10"
            >
              {/*Card Body */}
              <div className="bg-white p-2 h-[335px]">
                <div className="h-[85px] w-full">
                  {list.feature.map((val) => (
                    <div className="space-y-1.5 block" key={val.id}>
                      <Tooltip
                        key={val.robust}
                        placement={"right"}
                        content={val.robust}
                        color="success"
                        className="px-3 py-2 text-base capitalize font-Lora"
                      >
                        <div
                          className={`${
                            val.robust ? "flex" : "hidden"
                          } p-3.5 border border-info w-max rounded-full`}
                        >
                          <Dumbbell className={"fill-info h-6 w-6"} />
                        </div>
                      </Tooltip>
                      <Tooltip
                        key={val.fragile}
                        placement={"right"}
                        content={val.fragile}
                        color="success"
                        className="px-3 py-2 text-base capitalize font-Lora"
                      >
                      <div
                        className={`${
                          val.fragile ? "flex" : "hidden"
                        } p-3.5 border border-info w-max rounded-full`}
                      >
                        <Glass className={"h-6 w-6"} />
                      </div>
                      </Tooltip>
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
                    src={list?.img}
                    alt="product"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
                    className="absolute object-contain object-center lg:object-cover md:odd:last:object-contain"
                  />
                </div>
              </div>
              {/* Card Footer */}
              <div className="flex items-center justify-between py-3 transition-all duration-1000 bg-transparent group-hover:bg-white group-hover:rounded-b-2xl">
                <div className="w-9/12 transition-all duration-100 delay-75 -translate-x-1000 group-hover:translate-x-3 xl:w-full">
                  <h4 className="text-[#0D0D0D] font-urbanist truncate w-4/5 xl:w-full">
                    {list?.productName}
                  </h4>
                  <h4 className="text-[#6C6C6C] font-urbanist text-sm w-max">
                    {list?.productType}
                  </h4>
                </div>
                <div className="flex items-center">
                    <button
                    onClick={()=>router.push("/contact")}
                    className={`group/btn block rounded-full px-4 py-3 border border-warning bg-transparent hover:bg-primary text-center text-base group-hover:duration-700 group-hover:delay-75 font-urbanist capitalize w-max translate-x-1000 group-hover:-translate-x-3`}
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
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {page + 1 <= t ? (
        <div className="flex items-center justify-center">
          <button
            onClick={handlePage}
            className={`block rounded-full px-6 py-5 border border-warning bg-transparent hover:bg-primary text-center text-base duration-700 delay-75 font-urbanist capitalize w-max group cursor-pointer`}
          >
            <div className={`block h-6 w-full overflow-hidden`}>
              <h4
                className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-warning`}
              >
                View More
              </h4>
              <h4
                className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-white`}
              >
                View More
              </h4>
            </div>
          </button>
        </div>
      ) : null}
    </section>
  );
};
