import DefaultLayout from "@/components/DefaultLayout";
import productsData from "@/libs/products.json";
import dynamic from 'next/dynamic'

// const OverviewComponent = dynamic(() => import("@/components/products/specific page/Overview"))
const ProductPageComponent = dynamic(() => import("@/components/products/specific page/ProductPage"))
const RelatedProductsComponent = dynamic(() => import("@/components/products/specific page/RelatedProducts"))



export default function Home({ params }) {
  const { productName } = params
  const product = productsData.allProducts.find(val => val.productName === productName.replace(/_/g, " "))
  // console.log(product);
  return (
    <main>
      <DefaultLayout>
        <ProductPageComponent product={product} />
        {/* <OverviewComponent product={product}/> */}
        <RelatedProductsComponent product={product} />
      </DefaultLayout>
    </main>
  );
}
