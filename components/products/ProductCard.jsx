"use client";
import { cards } from "@/libs/data";
import { Dumbbell } from "@/svg_components/Dumbbell";
import { Glass } from "@/svg_components/Glass";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const ProductCard = () => {
  const [page, setPage] = useState(1);
  const lastIndex = page * 6;
  const firstIndex = lastIndex - 6;
  const t = Math.ceil(cards.length / 6);
  const handlePage = () => {
    let pageIndex = page + 1;
    if (pageIndex <= t && pageIndex >= 1) {
      setPage(pageIndex);
    }
  };
  return (
    <section className="bg-secondary space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full overflow-y-auto h-[60vh] md:h-full">
        {cards.slice(firstIndex, lastIndex).map((card, idx) => (
          <div className="block group md:odd:last:col-span-2" key={idx}>
            <Link
              href={"/products/1"}
              className="min-w-full md:min-w-[50%] z-10"
            >
              {/*Card Body */}
              <div className="bg-white rounded-2xl group-hover:rounded-t-2xl group-hover:rounded-b-none relative p-2">
                <div className="block space-y-1.5">
                  <div className="p-3.5 border border-info w-max rounded-full">
                    <Dumbbell className={"fill-info h-6 w-6 "} />
                  </div>
                  <div className="p-3.5 border border-info w-max rounded-full">
                    <Glass className={"h-6 w-6"} />
                  </div>
                </div>
                <div
                  className="group-hover:absolute group-hover:top-3.5 group-hover:right-4 group-hover:px-3.5
                        group-hover:py-4 group-hover:border group-hover:border-info group-hover:text-info text-base group-hover:font-urbanist group-hover:rounded-full group-hover:w-max hidden group-hover:block"
                >
                  View
                </div>
                <div className="relative h-[200px] w-full">
                  <Image
                    fill
                    src={"/product-img.png"}
                    alt="product"
                    className="absolute object-cover object-bottom md:odd:last:object-contain"
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
                    {card.type}
                  </h4>
                </div>
                <div className="flex items-center">
                  <Link
                    href={"/contact"}
                    className={`block rounded-full px-4 py-3 border border-warning bg-transparent group-hover:bg-primary text-center text-base duration-700 delay-75 font-urbanist capitalize w-max translate-x-1000 group-hover:-translate-x-3`}
                  >
                    <div className={`block h-6 w-full overflow-hidden`}>
                      <h4
                        className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-warning`}
                      >
                        contact
                      </h4>
                      <h4
                        className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-white`}
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
      </div>
      {page + 1 <= t ? (
        <div className="flex justify-center items-center">
          <button
            onClick={handlePage}
            className={`block rounded-full px-6 py-5 border border-warning bg-transparent hover:bg-primary text-center text-base duration-700 delay-75 font-urbanist capitalize w-max group cursor-pointer`}
          >
            <div className={`block h-6 w-full overflow-hidden`}>
              <h4
                className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-warning`}
              >
                View All
              </h4>
              <h4
                className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-white`}
              >
                View All
              </h4>
            </div>
          </button>
        </div>
      ) : cards.length <= 6 ? (
        null
      ) : (
        <div className="flex justify-center items-center">
          <button
            onClick={() => setPage(1)}
            className={`block rounded-full px-6 py-3 border border-warning bg-transparent hover:bg-primary text-center text-base duration-700 delay-75 font-urbanist capitalize w-max group cursor-pointer`}
          >
            <div className={`block h-6 w-full overflow-hidden`}>
              <h4
                className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-warning`}
              >
                Back To Main
              </h4>
              <h4
                className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-white`}
              >
                Back To Main
              </h4>
            </div>
          </button>
        </div>
      )}
    </section>
  );
};

{
  /* {[...Array(Math.ceil(cards.length / 6))].map((_,idx) =>( */
}
{
  /* ))} */
}
