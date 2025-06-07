import Products from "./Products"
import { categoriesProducts, sortProducts } from "@/libs/otherPage";
const ProductLayout = () => {

  const sortedBy = categoriesProducts.filter(
    (val) => val.category === "Best Selling"
  );

  return (
    <Products sortProduct={sortProducts} productsData={categoriesProducts} featureProducts={sortedBy[0].lists} />
  )
}
export default ProductLayout