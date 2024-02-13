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

export const ToolTipContent = ({isOpen,setIsOpen}) => {
  const router = useRouter();
  return (
    // <div className="block space-y-20">
    //   <div className="lg:grid lg:grid-cols-3 lg:gap-10">
    //     {productList.map((item, idx) => (
    //       <div className="block space-y-4" key={idx}>
    //         <Link
    //           href={{
    //             pathname: "/products",
    //             query: { category: item.category },
    //           }}
    //           onClick={()=>setIsOpen(true)}
    //         >
    //           <h4 className="font-Lora text-base text-warning underline underline-offset-8 hover:no-underline rev-btn_hover after:bg-warning after:bg-opacity-50 hover:after:bg-info hover:after:bg-opacity-50 w-max">
    //             {item.category}
    //           </h4>
    //         </Link>
    //         <ul className="font-urbanist text-2xl text-warning space-y-2">
    //           {item.lists.map((list, id) => (
    //             <li
    //               className="cursor-pointer btn_hover after:bg-warning after:bg-opacity-50 hover:after:bg-info hover:after:bg-opacity-50 w-max"
    //               key={id}
    //             >
    //               <Link
    //                 href={{
    //                   pathname: "/products",
    //                   query: { category: item.category, filter: list },
    //                 }}
    //                 onClick={()=>setIsOpen(true)}
    //               >
    //                 {list}
    //               </Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     ))}
    //   </div>
    //   <div className="block space-y-5">
    //     <div className="flex items-center gap-5 font-urbanist text-lg">
    //       {sortBy.map((list, idx) => (
    //         <Link
    //           href={"/"}
    //           className="underline underline-offset-8 hover:no-underline rev-btn_hover after:bg-warning after:bg-opacity-50 hover:after:bg-info hover:after:bg-opacity-50"
    //           key={idx}
    //         >
    //           {list}
    //         </Link>
    //       ))}
    //     </div>
    //     <button
    //       onClick={() => router.push("/contact")}
    //       className={`group/button block rounded-full px-6 py-3 bg-primary hover:bg-info text-center text-base duration-700 delay-75 font-urbanist capitalize w-max tracking-wider`}
    //     >
    //       <div className={`h-6 w-full overflow-hidden`}>
    //         <h4
    //           className={`transition translate-y-0 group-hover/button:-translate-y-20 duration-700 text-white`}
    //         >
    //           All Products
    //         </h4>
    //         <h4
    //           className={`translate-y-20 transition group-hover/button:-translate-y-[25px] duration-700 group-hover/button:text-white`}
    //         >
    //           All Products
    //         </h4>
    //       </div>
    //     </button>
    //   </div>
    // </div>
    <div
    className={`hidden ${isOpen === true ? "hidden" : "group-hover:block"}  absolute top-[107px] left-0 py-6 text-warning bg-white shadow-lg w-full z-50 group-hover:transition-all group-hover:delay-150`}
    // hidden group-hover:block
    //   <div className="block space-y-20">
    //   <div className="lg:grid lg:grid-cols-3 lg:gap-10">
    //     {productList.map((item, idx) => (
    //       <div className="block space-y-4" key={idx}>
    //         <Link
    //           href={{
    //             pathname: "/products",
    //             query: { category: item.category },
    //           }}
    //           onClick={(open) => setIsOpen(!open)}
    //         >
    //           <h4 className="font-Lora text-base text-warning underline underline-offset-8 hover:no-underline rev-btn_hover after:bg-warning after:bg-opacity-50 hover:after:bg-info hover:after:bg-opacity-50 w-max">
    //             {item.category}
    //           </h4>
    //         </Link>
    //         <ul className="font-urbanist text-2xl text-warning space-y-2">
    //           {item.lists.map((list, id) => (
    //             <li
    //               className="cursor-pointer btn_hover after:bg-warning after:bg-opacity-50 hover:after:bg-info hover:after:bg-opacity-50 w-max"
    //               key={id}
    //             >
    //               <Link
    //                 href={{
    //                   pathname: "/products",
    //                   query: { category: item.category, filter: list },
    //                 }}
    //                 onClick={(open) => setIsOpen(!open)}
    //               >
    //                 {list}
    //               </Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     ))}
    //   </div>
    //   <div className="block space-y-5">
    //     <div className="flex items-center gap-5 font-urbanist text-lg">
    //       {sortBy.map((list, idx) => (
    //         <Link
    //           href={"/"}
    //           className="underline underline-offset-8 hover:no-underline rev-btn_hover after:bg-warning after:bg-opacity-50 hover:after:bg-info hover:after:bg-opacity-50"
    //           key={idx}
    //         >
    //           {list}
    //         </Link>
    //       ))}
    //     </div>
    //     <button
    //       onClick={() => router.push("/contact")}
    //       className={`group/button block rounded-full px-6 py-3 bg-primary hover:bg-info text-center text-base duration-700 delay-75 font-urbanist capitalize w-max tracking-wider`}
    //     >
    //       <div className={`h-6 w-full overflow-hidden`}>
    //         <h4
    //           className={`transition translate-y-0 group-hover/button:-translate-y-20 duration-700 text-white`}
    //         >
    //           All Products
    //         </h4>
    //         <h4
    //           className={`translate-y-20 transition group-hover/button:-translate-y-[25px] duration-700 group-hover/button:text-white`}
    //         >
    //           All Products
    //         </h4>
    //       </div>
    //     </button>
    //   </div>
    // </div>
  >
     <div className="block space-y-20 2xl:w-3/5 xl:w-4/5 mx-auto">
      <div className="lg:grid lg:grid-cols-3 lg:gap-28">
        {productList.map((item, idx) => (
          <div className="block space-y-4" key={idx}>
            <Link
              href={{
                pathname: "/products",
                query: { category: item.category },
              }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <h4 className="font-Lora text-base text-warning underline underline-offset-8 hover:no-underline rev-btn_hover after:bg-warning after:bg-opacity-50 hover:after:bg-info hover:after:bg-opacity-50 w-max">
                {item.category}
              </h4>
            </Link>
            <ul className="font-urbanist text-xl text-warning space-y-2">
              {item.lists.map((list, id) => (
                <li
                  className="cursor-pointer btn_hover after:bg-warning after:bg-opacity-50 hover:after:bg-info hover:after:bg-opacity-50 w-max"
                  key={id}
                >
                  <Link
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
        <div className="flex items-center gap-5 font-urbanist text-lg">
          {sortBy.map((list, idx) => (
            <Link
              href={"/"}
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
