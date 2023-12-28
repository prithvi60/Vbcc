"use client"
import { ProductHero } from "@/components/products/ProductHero";
import ProductSection from "@/components/products/ProductSection";
import { AllProducts } from "@/libs/data";
import { useState } from "react";

export default function Home() {
  const [products, setProducts] = useState(AllProducts);
  return (
    <main>
    <ProductHero products={products} setProducts={setProducts} />
    <ProductSection products={products} setProducts={setProducts} />
    </main>
  )
}
