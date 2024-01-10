"use client"
import { AllProducts } from "@/libs/data";
import { useState } from "react";
const ProductHeroComponent = dynamic(() => import("@/components/products/ProductHero"),{ssr:false})
const ProductSectionComponent = dynamic(() => import("@/components/products/ProductSection"),{ssr:false})

export default function Home() {
  const [products, setProducts] = useState(AllProducts);
  return (
    <main>
    <ProductHeroComponent products={products} setProducts={setProducts} />
    <ProductSectionComponent products={products} setProducts={setProducts} />
    </main>
  )
}
