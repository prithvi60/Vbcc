"use client"

import productsData from "@/libs/products.json";
import { useState } from "react";
import dynamic from 'next/dynamic'

const ProductHeroComponent = dynamic(() => import("@/components/products/ProductHero"),{ssr:false})
const ProductSectionComponent = dynamic(() => import("@/components/products/ProductSection"),{ssr:false})

export default function Home() {
  const [products, setProducts] = useState(productsData.allProducts);
  return (
    <main>
    <ProductHeroComponent products={products} setProducts={setProducts} />
    <ProductSectionComponent products={products} setProducts={setProducts} />
    </main>
  )
}
