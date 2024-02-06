"use client";
import { CustomCarousel } from "./SpecificComp";
import { ProductVariant } from "./ProductVariant";
import Overview from "./Overview";
import { useState } from "react";

const ProductPage = ({ product }) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, SetselectedItem] = useState(product.variant[0]);
  const [specificId, setSpecificId] = useState(0);

  const handleClick = (id, item) => {
    setSpecificId(id);
    // const filtered = product.variant.filter(val => val.variantType === item)
    SetselectedItem(item);
    setOpen(!open);
  };
  return (
    <>
      <section className="px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 font-urbanist text-warning xl:px-20 relative">
        <div className="flex flex-col-reverse xl:flex-row items-start gap-12">
          <div className="block space-y-[52px] w-full xl:w-1/2">
            <div className="block space-y-6 w-full xl:w-4/5">
              <h2 className="font-Lora text-2xl md:text-4xl xl:text-6xl w-full">
                {product.productName}
              </h2>
              <h5 className="text-sm font-urbanist uppercase">
                {product.productType}
              </h5>
              <p className="text-base md:text-xl font-urbanist leading-snug">
                {product.description}
              </p>
            </div>
            <ProductVariant
              product={product}
              open={open}
              setOpen={setOpen}
              selectedItem={selectedItem}
              specificId={specificId}
              handleClick={handleClick}
            />
          </div>
          <div className="w-full xl:w-1/2 xl:sticky xl:top-10">
            {specificId >= 0 ? (
              <CustomCarousel
                specification={product.specification}
                specificId={specificId}
              />
            ) : (
              <CustomCarousel
                specification={product.specification}
                specificId={0}
              />
            )}
          </div>
        </div>
      </section>
      {/* <Overview product={product}  /> */}
      {specificId >= 0 ? (
        <div className="block">
          <Overview
            specification={product.specification}
            specificId={specificId}
          />
        </div>
      ) : (
        <div className="block">
          <Overview specification={product.specification} specificId={0} />
        </div>
      )}
    </>
  );
};
export default ProductPage;
