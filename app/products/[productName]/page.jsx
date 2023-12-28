
import { Overview } from "@/components/products/specific page/Overview";
import { ProductPage } from "@/components/products/specific page/ProductPage";
import { RelatedProducts } from "@/components/products/specific page/RelatedProducts";
import { AllProducts } from "@/libs/data";

export default function Home({params}) {
  const{productName} = params
  const product = AllProducts.find(val => val.productName.replace(/\s/g, '') === productName)
  return (
    <main>
      <ProductPage product={product}/>
      <Overview product={product}/>
      <RelatedProducts product={product}/>
    </main>
  );
}
