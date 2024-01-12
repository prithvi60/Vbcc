"use client"
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic'

const ProductHeroComponent = dynamic(() => import("@/components/products/ProductHero"),{ssr:false})
const ProductSectionComponent = dynamic(() => import("@/components/products/ProductSection"),{ssr:false})

export default function Home() {
  const [products, setProducts] = useState(null);
  useEffect(()=>{
    import('@/libs/products.json').then(data => {
      setProducts(JSON.parse(JSON.stringify(data)).allProducts);
    });
  },[])
  if(!products){
    return <div>Loading...</div>
  }
  return (
    <main>
    <ProductHeroComponent products={products} setProducts={setProducts} />
    <ProductSectionComponent products={products} setProducts={setProducts} />
    </main>
  )
}
