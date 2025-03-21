"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

const productList = [
  {
    category: "Research Institutions",
    lists: [
      "Microwave Heating Systems",
      "Furnaces",
      "Ovens",
      "Nano Technology Equipment",
      "Special Research Equipment",
      "Presses",
      "Mettalurgical Equipment",
    ],
  },
  {
    category: "Industries",
    lists: [
      "Industrial Furnaces",
      "Refractory Industry",
      "Tile & Sanitary Ware",
    ],
  },
  {
    category: "Accessories",
    lists: ["Heating Elements", "Controllers", "Ceramic Products"],
  },
];

const sortBy = ["Featured", "New Products", "Best Selling"];

export const ToolTipContent = ({ isOpen, setIsOpen }) => {
  const router = useRouter();
  return (

    <div
      className={`hidden ${isOpen === true ? "hidden" : "group-hover:block group-hover:transition-all group-hover:delay-150"} absolute top-[107px] left-0 p-6 text-warning bg-white shadow-lg w-full z-50 `}
    >
      <div className="block mx-auto space-y-20 2xl:w-3/5 xl:w-4/5">
        <div className="lg:grid lg:grid-cols-3 lg:gap-28">
          {productList.map((item, idx) => (
            <div className="block space-y-4" key={idx}>
              <Link title="products"
                scroll={false}
                href={{
                  pathname: "/products",
                  query: { category: item.category },
                }}
                onClick={() => setIsOpen(!isOpen)}
              >
                <h4 className="text-base underline font-Lora text-warning underline-offset-8 hover:no-underline rev-btn_hover after:bg-warning after:bg-opacity-50 hover:after:bg-info hover:after:bg-opacity-50 w-max">
                  {item.category}
                </h4>
              </Link>
              <ul className="space-y-2 text-xl font-urbanist text-warning">
                {item.lists.map((list, id) => (
                  <li
                    className="cursor-pointer btn_hover after:bg-warning after:bg-opacity-50 hover:after:bg-info hover:after:bg-opacity-50 w-max"
                    key={id}
                  >
                    <Link
                      title="products"
                      scroll={false}
                      href={{
                        pathname: "/products",
                        query: { category: item.category, filter: list },
                      }}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {list}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="block space-y-5">
          <div className="flex items-center gap-5 text-lg font-urbanist">
            {sortBy.map((list, idx) => (
              <Link
                title="products"
                scroll={false}
                href={{
                  pathname: "/products",
                  query: { sortBy: list },
                }}
                onClick={() => setIsOpen(!isOpen)}
                className="underline underline-offset-8 hover:no-underline rev-btn_hover after:bg-warning after:bg-opacity-50 hover:after:bg-info hover:after:bg-opacity-50"
                key={idx}
              >
                {list}
              </Link>
            ))}
          </div>
          <button
            onClick={() => router.push("/contact")}
            className={`group/button block rounded-full px-6 py-3 bg-primary hover:bg-info text-center text-base duration-700 delay-75 font-urbanist capitalize w-max tracking-wider`}
          >
            <div className={`h-6 w-full overflow-hidden`}>
              <h4
                className={`transition translate-y-0 group-hover/button:-translate-y-20 duration-700 text-white`}
              >
                All Products
              </h4>
              <h4
                className={`translate-y-20 transition group-hover/button:-translate-y-[25px] duration-700 group-hover/button:text-white`}
              >
                All Products
              </h4>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
