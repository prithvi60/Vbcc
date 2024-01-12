"use client";

import { useSearchParams } from "next/navigation";
import { CategoryTab } from "./ProductF&C";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProductHero = ({ setProducts }) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("category");
  const [data,setData]=useState(null)
  const product =
  data?.productCategory.find((val) => val.title === search) || data?.productCategory[0];
  useEffect(()=>{
    import('@/libs/products.json').then(data => {
      setData(JSON.parse(JSON.stringify(data)));
    });
  },[])
  if(!data){
    return <div>Loading...</div>
  }
  return (
    <section className="h-full w-full flex flex-wrap-reverse lg:flex-nowrap bg-success">
      <div className="w-full lg:w-1/2 px-5 py-10 lg:px-[60px] lg:py-[60px]">
      {/* md:max-w-[550px] */}
        <div className="w-full h-full lg:max-w-[440px] lg:flex lg:flex-col lg:justify-between lg:items-center lg:gap-10 block space-y-6">
          <h2 className="font-Lora text-2xl lg:text-4xl xl:text-6xl w-full">
            {product.title}
          </h2>
          <p className="font-urbanist text-sm lg:text-base">{product.desc}</p>
          <CategoryTab setProducts={setProducts} />
        </div>
      </div>
      <div className="relative h-[400px] lg:h-[50vh] w-full lg:w-1/2">
            <Image priority={true} quality={100} fill src={product.ImgSrc} alt={product.title} 
            // placeholder="blur" blurDataURL=""
            sizes="(min-width: 820px) 50vw, 100vw"
            className="object-cover object-center" />
        </div>
    </section>
  );
};
export  default ProductHero