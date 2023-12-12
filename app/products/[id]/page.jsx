import { Overview } from "@/components/products/specific page/Overview";
import { ProductPage } from "@/components/products/specific page/ProductPage";
import { RelatedProducts } from "@/components/products/specific page/RelatedProducts";


export default function Home() {
  return (
    <main>
      <ProductPage/>
      <Overview/>
      <RelatedProducts/>
    </main>
  );
}
