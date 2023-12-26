"use client";
import { AllProducts, category, filters } from "@/libs/data";
import { Checkbox, Divider } from "@nextui-org/react";
import { useCallback, useState } from "react";
import { ProductCard } from "./ProductCard";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const ProductFC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [products, setproducts] = useState(AllProducts);
  const [selectedItem, SetselectedItem] = useState("All Products");
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      value === "All Products" ? params.delete(name) : 
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleCategory = (c) => {
    SetselectedItem(c);
    if(c === "All Products"){
      setproducts(AllProducts)
    } else {
    const filterCategory = AllProducts.filter(val => val.category === c)
    setproducts(filterCategory)}
  };

  const handleFilter = ()=>{}

  return (
    <section className="flex items-start gap-[60px] xl:px-[60px]">
      <div className="hidden lg:block space-y-10 lg:sticky lg:top-5">
        <div className="block space-y-6">
          <h4 className="uppercase text-xl text-warning font-Lora">category</h4>
          <ul className="text-warning text-opacity-50 font-Lora text-2xl space-y-2">
            {category.map((c, idx) => (
                <li className="w-max" key={idx}>
                  <Link
                    href={pathname + "?" + createQueryString("category", c)}
                    key={idx}
                    className={`w-full cursor-pointer btn_hover after:bg-warning after:bg-opacity-50 hover:after:bg-warning hover:after:bg-opacity-50 ${
                      selectedItem === c ? "text-warning text-opacity-100" : ""
                    }`}
                    onClick={() => handleCategory(c)}
                  >
                    <h4>{c}</h4>
                  </Link>
                </li>
            ))}
          </ul>
        </div>
        <Divider className="bg-warning bg-opacity-40" />
        {/* Filters */}
        <div className="hidden lg:block space-y-6">
          <h4 className="uppercase text-xl text-warning font-Lora">Filters</h4>
          <ul className="space-y-3">
            {products.map((type, idx) => (
              <li
                key={idx}
                className={`flex items-center gap-2 w-max cursor-pointer`}
                  onClick={() => {
                    handleFilter();
                  }}
              >
                <Checkbox size="md" color="success">
                  <h4 className="text-warning text-opacity-50 font-urbanist text-base hover:text-warning">
                    {type.productType}
                  </h4>
                </Checkbox>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-base text-warning font-urbanist uppercase tracking-wide cursor-pointer">
          Clear Filters
        </div>
      </div>
      <div className="block w-full h-full space-y-10">
        <ProductCard products={products} />
      </div>
    </section>
  );
};

export default ProductFC;
