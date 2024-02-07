"use client";

import productsData from "@/libs/products.json";
import { useSearchParams } from "next/navigation";
import { CategoryTab } from "./ProductF&C";
import Image from "next/image";

const ProductHero = ({ setProducts }) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("category");
  // const searchNav = searchParams.get("filter");
  // console.log(searchNav);
  // const NavbarFilter = productsData.allProducts.filter(val => val.category === searchNav)
  // setProducts(NavbarFilter)
  const product =
    productsData.productCategory.find((val) => val.title === search) ||
    productsData.productCategory[0];
 
  const AllProductList = productsData.allProducts;

  const RIProductList = productsData.allProducts.filter(
    (val) => val.category === "Research Institutions"
  );

  const IndusProductList = productsData.allProducts.filter(
    (val) => val.category === "Industries"
  );

  const AccessProductList = productsData.allProducts.filter(
    (val) => val.category === "Accessories"
  );

  const category = [
    { list: "All Products", count: `${AllProductList.length}` },
    { list: "Research Institutions", count: `${RIProductList.length}` },
    { list: "Industries", count: `${IndusProductList.length}` },
    { list: "Accessories", count: `${AccessProductList.length}` }
  ];
  return (
    <section className="h-full w-full flex flex-wrap-reverse lg:flex-nowrap bg-success">
      <div className="w-full lg:w-1/2 px-5 py-10 lg:px-[60px] lg:py-[60px]">
        {/* md:max-w-[550px] */}
        <div className="w-full h-full lg:max-w-[440px] lg:flex lg:flex-col lg:justify-between lg:items-center lg:gap-10 block space-y-6">
          <h2 className="font-Lora text-2xl lg:text-4xl xl:text-6xl w-full">
            {product.title}
          </h2>
          <p className="font-urbanist text-sm lg:text-base">{product.desc}</p>
          <CategoryTab category={category} setProducts={setProducts} />
        </div>
      </div>
      <div className="relative h-[400px] lg:h-[50vh] w-full lg:w-1/2">
        <Image
          priority={true}
          quality={100}
          fill
          src={product.ImgSrc}
          alt={product.title}
          // placeholder="blur" blurDataURL=""
          sizes="(min-width: 820px) 50vw, 100vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
};
export default ProductHero;
