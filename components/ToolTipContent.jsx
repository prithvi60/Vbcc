import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const ToolTipContent = ({ productList, sortBy }) => {
  // const pathname = usePathname();
  // const searchParams = useSearchParams();
  const router = useRouter()

  // const createQueryString = useCallback(
  //   (name, value) => {
  //     const params = new URLSearchParams(searchParams);
  //     value === "All Products" ? params.delete(name) : params.set(name, value);
  //     return params.toString();
  //   },
  //   [searchParams]
  // );
  return (
    <div className="block space-y-20">
      <div className="lg:grid lg:grid-cols-3 lg:gap-10">
        {productList.map((item, idx) => (
          <div className="block space-y-4" key={idx}>
            <Link href={"/"}>
              <h4 className="font-Lora text-base text-warning underline underline-offset-8 hover:no-underline rev-btn_hover after:bg-warning after:bg-opacity-50 hover:after:bg-info hover:after:bg-opacity-50 w-max">
                {item.category}
              </h4>
            </Link>
            <ul className="font-urbanist text-2xl text-warning space-y-2">
              {item.lists.map((list, id) => (
                <li
                  className="cursor-pointer btn_hover after:bg-warning after:bg-opacity-50 hover:after:bg-info hover:after:bg-opacity-50 w-max"
                  key={id}
                >
                  <Link href={"/"}>
                  {/* href={pathname + "?" + createQueryString("type", list)} */}
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
  );
};
