"use client";
import * as React from "react";
import productsData from "@/libs/products.json";
import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import { useCallback, useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const ProductFC = ({
  setSortValue,
  searchFilter,
  search,
  products,
  setProducts,
  filteredCategory,
  setFilteredCategory,
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // console.log("prop", searchFilter);

  const [searchCategory, setSearchCategory] = useState(
    search || "All Products"
  );
  const [selected, setSelected] = useState([]);

  const filteredProductType = [
    ...new Set(products.map((val) => val.productType)),
  ];
  // console.log(filteredProductType);
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      value === "All Products" ? params.delete(name) : params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleCategory = (c) => {
    setSearchCategory(c);
    if (c === "All Products") {
      setProducts(productsData.allProducts);
      setProducts(productsData.allProducts);
      setFilteredCategory([]);
    } else {
      const filtered = productsData.allProducts.filter(
        (val) => val.category === c
      );
      setProducts(filtered);
      setSortValue(filtered);
      setFilteredCategory([]);
    }
  };

  const handleFilter = (e) => {
    let value = e.target.value;
    let check = e.target.checked;

    if (check) {
      // console.log("if filter state", filteredCategory);

      setFilteredCategory((val) => [...val, value]);
    } else {
      // console.log("else filter state", filteredCategory);
      setFilteredCategory((prev) => prev?.filter((val) => val !== value));
    }
  };

  const handleClear = () => {
    setFilteredCategory([]);
    setSelected([]);
  };

  useEffect(() => {
    // console.log(searchFilter);
    searchFilter && setFilteredCategory([searchFilter]);
    searchFilter && setSelected([searchFilter]);
  }, [searchFilter, setFilteredCategory]);
  // console.log("url state",search)
  return (
    <section className="flex items-start gap-[60px] mt-10">
      <div className="hidden space-y-10 lg:block lg:sticky lg:top-5">
        <div className="block space-y-6">
          <h4 className="text-xl uppercase text-warning font-Lora">category</h4>
          <ul className="space-y-2 text-2xl text-opacity-50 text-warning font-Lora">
            {productsData.category.map((c, idx) => (
              <li className="w-max" key={idx}>
                <Link
                  scroll={false}
                  passHref
                  href={pathname + "?" + createQueryString("category", c)}
                  key={idx}
                  className={`w-full cursor-pointer btn_hover after:bg-warning after:bg-opacity-50 hover:after:bg-warning hover:after:bg-opacity-50 ${
                    searchCategory === c ? "text-warning text-opacity-100" : ""
                  }`}
                  onClick={() => handleCategory(c)}
                >
                  <h4>{c}</h4>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="h-0.5 w-full border-0 shrink-0 bg-warning bg-opacity-40" />
        {/* Filters */}
        <div className="hidden space-y-6 lg:block">
          <h4 className="text-xl uppercase text-warning font-Lora">Filters</h4>
          {filteredProductType.length > 0 ? (
            <CheckboxGroup
              value={selected}
              onValueChange={setSelected}
              className="space-y-3"
            >
              {filteredProductType.map((type, idx) => (
                <li
                  key={idx}
                  className={`flex items-center gap-2 w-max cursor-pointer capitalize`}
                >
                  <Checkbox
                    value={type}
                    onChange={(e) => handleFilter(e)}
                    size="md"
                    color="success"
                  >
                    <h4 className="text-base text-opacity-50 capitalize text-warning font-urbanist hover:text-warning">
                      {type}
                    </h4>
                  </Checkbox>
                </li>
              ))}
            </CheckboxGroup>
          ) : (
            <div className="flex items-center justify-center text-base font-medium font-urbanist md:text-xl text-warning">
              No Products Type
              <br />
              Available
            </div>
          )}
        </div>
        {filteredProductType.length > 0 && (
          <div
            className="text-base tracking-wide uppercase cursor-pointer text-warning font-urbanist"
            onClick={handleClear}
          >
            Clear Filters
          </div>
        )}
      </div>
      <div className="block w-full h-full space-y-10">
        {products.length > 0 ? (
          <ProductCard
            products={
              filteredCategory?.length > 0
                ? products.filter((val) =>
                    filteredCategory.includes(val.productType)
                  )
                : products
            }
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-base font-medium font-urbanist md:text-xl text-warning">
            Products Not Available
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductFC;

export const CategoryTab = ({ category, setProducts }) => {
  const [selectedItem, SetselectedItem] = useState("All Products");
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      value === "All Products" ? params.delete(name) : params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleCategory = (item) => {
    SetselectedItem(item);
    if (item === "All Products") {
      setProducts(productsData.allProducts);
    } else {
      const filterCategory = productsData.allProducts.filter(
        (val) => val.category === item
      );
      setProducts(filterCategory);
    }
  };
  // console.log("state",selectedItem)
  return (
    <div className="flex flex-wrap gap-3 lg:hidden">
      {category.map((item, idx) => (
        <div
          className={`h-full lg:hidden rounded-full px-4 py-3 border border-white group text-center text-base duration-700 delay-75 font-urbanist font-normal capitalize w-max cursor-pointer ${
            selectedItem === item.list
              ? "bg-white text-warning hover:bg-white"
              : "bg-transparent text-white hover:bg-success"
          }`}
          key={idx}
        >
          <Link
            scroll={false}
            passHref
            href={
              pathname +
              "?" +
              createQueryString("category", item.list, { scroll: true })
            }
            className={`block h-6 w-full overflow-hidden`}
            onClick={() => handleCategory(item.list)}
          >
            <h4
              className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 `}
            >
              {`${item.list} (${item.count})`}
            </h4>
            <h4
              className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700`}
            >
              {`${item.list} (${item.count})`}
            </h4>
          </Link>
        </div>
      ))}
    </div>
  );
};
