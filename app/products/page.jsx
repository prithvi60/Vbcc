"use client";

import productsData from "@/libs/products.json";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import DefaultLayout from "@/components/DefaultLayout";

const ProductHeroComponent = dynamic(
  () => import("@/components/products/ProductHero"),
  { ssr: false }
);
const ProductSectionComponent = dynamic(
  () => import("@/components/products/ProductSection"),
  { ssr: false }
);

export default function Home() {
  const searchParams = useSearchParams();
  const search = searchParams.get("category");
  const [products, setProducts] = useState(productsData.allProducts);
  useEffect(() => {
    const filtered =
      productsData.allProducts.filter((val) => val.category === search);
    search && setProducts(filtered);
    // console.log(filtered);
  }, [search, setProducts]);
  return (
    <main>
      <DefaultLayout>
        <ProductHeroComponent
          search={search}
          products={products}
          setProducts={setProducts}
        />
        <ProductSectionComponent
          search={search}
          products={products}
          setProducts={setProducts}
        />
      </DefaultLayout>
    </main>
  );
}
