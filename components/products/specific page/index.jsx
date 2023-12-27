// "use client"
import React from "react";
import { ProductPage } from "./ProductPage";
import { Overview } from "./Overview";
import { RelatedProducts } from "./RelatedProducts";
import { AllProducts } from "@/libs/data";

export const IndexSpecificPage = ({productValue}) => {
  const product = AllProducts.find(val => val.productName === productValue)
  return (
    <section>
      <ProductPage product={product}/>
      <Overview product={product}/>
      <RelatedProducts product={product}/>
    </section>
  );
};
