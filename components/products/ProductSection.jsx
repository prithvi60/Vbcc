"use client";
import { CustomSelect, CustomSelectMd } from "./CustomSelect";
import { useEffect, useState } from "react";
import { GrFilter } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import Filter from "./Filter";
import ProductFC from "./ProductF&C";
import { AllProducts } from "@/libs/data";

const ProductSection = ({ products, setProducts }) => {
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [selectedItem, SetselectedItem] = useState("Relevance");
  // console.log(selectedItem);
  const [filteredCategory, setFilteredCategory] = useState([]);

  useEffect(() => {
    const allProducts = AllProducts.filter(
      (val) =>
        val.productName.toLowerCase().includes(searchValue.toLowerCase()) ||
        val.productType.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProducts(allProducts);
  }, [searchValue, setProducts]);

  const handleSortBy = (value) => {
    // console.log(value);
    SetselectedItem(value);
    const sortedBy = AllProducts.filter(
      (val) => val.sortBy.toLowerCase() === value
    );
    // console.log(sortedBy);
    setProducts(sortedBy);
    setOpen(!open);
  };

  return (
    <section className="px-5 xl:px-[60px] py-10 md:p-10 bg-secondary space-y-10">
      {/* Sort Section */}
      <div className="w-full hidden lg:flex justify-end items-center space-y-5 xl:px-[60px]">
        <div className="block space-y-5">
          <CustomSelect
            handleSortBy={handleSortBy}
            open={open}
            setOpen={setOpen}
            selectedItem={selectedItem}
            // sortByValue={sortByValue}
          />
          <div className="flex items-center gap-2 border border-warning px-4 py-2 rounded-full">
            <CiSearch className="h-7 w-7 text-warning" />
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="font-Lora placeholder:font-Lora text-warning border-none outline-none focus:outline-none focus:ring-0 focus:border-none w-full placeholder:text-warning bg-secondary text-2xl"
            />
          </div>
        </div>
      </div>
      {/* Tablet view filter */}
      <div className="w-full flex flex-col-reverse gap-4 md:flex md:flex-row md:gap-0 lg:hidden md:justify-between md:items-start xl:px-[60px]">
        <CustomSelectMd
          open={open}
          setOpen={setOpen}
          handleSortBy={handleSortBy}
          selectedItem={selectedItem}
        />
        <div className="flex md:hidden items-center gap-2 border border-warning px-4 py-2 rounded-full">
          <CiSearch className="h-7 w-7 text-warning" />
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="font-Lora placeholder:font-Lora text-warning border-none outline-none focus:outline-none focus:ring-0 focus:border-none w-full placeholder:text-warning bg-secondary text-base md:text-2xl"
          />
        </div>
        <div
          className="hidden md:flex md:items-center md:gap-2 cursor-pointer"
          onClick={() => setIsFilter(!isFilter)}
        >
          <h5 className="text-warning font-Lora text-base md:text-2xl">
            Filter
          </h5>
          <GrFilter className="w-5 h-5 text-warning" />
        </div>
        <div
          className="flex justify-between items-center gap-2 w-full md:hidden border-warning border px-4 py-2 rounded-full cursor-pointer"
          onClick={() => setIsFilter(!isFilter)}
        >
          <h5 className="text-warning font-Lora text-base md:text-2xl">
            Filter
          </h5>
          <GrFilter className="w-5 h-5 text-warning" />
        </div>
        {isFilter && (
          <Filter
            setIsFilter={setIsFilter}
            filteredCategory={filteredCategory}
            setFilteredCategory={setFilteredCategory}
          />
        )}
      </div>
      {/* Product Section */}
      <ProductFC
        products={products}
        setProducts={setProducts}
        filteredCategory={filteredCategory}
        setFilteredCategory={setFilteredCategory}
      />
    </section>
  );
};

export default ProductSection;
