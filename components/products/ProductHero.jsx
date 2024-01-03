"use client";

import { ProductCategory } from "@/libs/data";
import { useSearchParams } from "next/navigation";
import { CategoryTab } from "./ProductF&C";

export const ProductHero = ({ setProducts }) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("category");
  const product =
    ProductCategory.find((val) => val.title === search) || ProductCategory[0];

  return (
    <section className="h-full w-full flex flex-wrap-reverse lg:flex-nowrap bg-success">
      <div className="w-full lg:w-1/2 px-5 py-10 lg:px-10 lg:py-[60px] lg:p-[60px]">
      {/* md:max-w-[550px] */}
        <div className="w-full h-full lg:max-w-[440px] lg:flex lg:flex-col lg:justify-between lg:items-center lg:gap-10 block space-y-6">
          <h2 className="font-Lora text-2xl lg:text-4xl xl:text-6xl w-full">
            {product.title}
          </h2>
          <p className="font-urbanist text-sm lg:text-base">{product.desc}</p>
          {/* <div className="flex flex-wrap gap-3 lg:hidden">
          {category.map((item,idx)=>(
          <div
            className={`h-full lg:hidden rounded-full px-4 py-3 border border-white bg-transparent hover:bg-white group text-center text-base duration-700 delay-75 font-urbanist font-normal capitalize w-max cursor-pointer`}
          key={idx}>
            <Link href={pathname + "?" + createQueryString("category", c)} 
            className={`block h-6 w-full overflow-hidden`} 
            onClick={() => handleCategory(c)}>
              <h4
                className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-white`}
              >
                {`${item} (150)`}
              </h4>
              <h4
                className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-warning`}
              >
                {`${item} (150)`}
              </h4>
            </Link>
          </div>
          ))}
          </div> */}
          <CategoryTab setProducts={setProducts} />
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${product.ImgSrc})` }}
        className="h-[400px] lg:h-[50vh] w-full lg:w-1/2  bg-cover bg-center bg-no-repeat"
      ></div>
    </section>
  );
};
