"use client";
import { AllProducts, category, filters } from "@/libs/data";
import { Checkbox, Divider } from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const ProductFC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [products, setproducts] = useState(AllProducts);
  const [selectedItem, SetselectedItem] = useState("All Products");
  const [isSelected, setIsSelected] = useState(false);
  const [filteredCategory, setFilteredCategory] = useState([]);

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      value === "All Products" ? params.delete(name) : params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleCategory = (c) => {
    SetselectedItem(c);
    if (c === "All Products") {
      setproducts(AllProducts);
    } else {
      const filterCategory = AllProducts.filter((val) => val.category === c);
      setproducts(filterCategory);
    }
  };

  const handleFilter = (e) => {
    let value = e.target.value;
    let check = e.target.checked;
   if(check){
    setFilteredCategory((val) => [...val, value])
    setIsSelected(true)
  } else {
    setFilteredCategory((prev) => prev.filter((val) => val !== value));
    setIsSelected(false)
  }
  };

  const handleClear =() =>{
    setFilteredCategory([])
    setIsSelected(false)
  }

  // console.log("isSelected", isSelected);
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
              >
                <Checkbox
                  value={type.productType}
                  // isSelected={isSelected}
                  // onValueChange={setIsSelected}
                  onChange={(e) => handleFilter(e)}
                  size="md"
                  color="success"
                >
                  <h4 className="text-warning text-opacity-50 font-urbanist text-base hover:text-warning">
                    {type.productType}
                  </h4>
                </Checkbox>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-base text-warning font-urbanist uppercase tracking-wide cursor-pointer" onClick={handleClear}>
          Clear Filters
        </div>
      </div>
      <div className="block w-full h-full space-y-10">
        <ProductCard
          products={
            filteredCategory.length > 0
              ? products.filter((val) =>
                  filteredCategory.includes(val.productType)
                )
              : products
          }
        />
      </div>
    </section>
  );
};

export default ProductFC;

import React from "react";

export const CategoryTab = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [products, setproducts] = useState(AllProducts);

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      value === "All Products" ? params.delete(name) : params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleCategory = (c) => {
    SetselectedItem(c);
    if (c === "All Products") {
      setproducts(AllProducts);
    } else {
      const filterCategory = AllProducts.filter((val) => val.category === c);
      setproducts(filterCategory);
    }
  };
  return (
    <div className="flex flex-wrap gap-3 md:hidden">
      {category.map((item, idx) => (
        <div
          className={`h-full md:hidden rounded-full px-4 py-3 border border-white bg-transparent hover:bg-white group text-center text-base duration-700 delay-75 font-urbanist font-normal capitalize w-max cursor-pointer`}
          key={idx}
        >
          <Link
            href={pathname + "?" + createQueryString("category", item)}
            className={`block h-6 w-full overflow-hidden`}
            onClick={() => handleCategory(item)}
          >
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
    </div>
  );
};
