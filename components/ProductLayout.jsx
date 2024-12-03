import productsData from "@/libs/products.json"
import Products from "./Products"
import { categoriesProducts, sortProducts } from "@/libs/otherPage";
const ProductLayout = () => {

  const sortedBy = categoriesProducts.filter(
    (val) => val.category === "Best Selling"
  );
  // console.log(sortedBy[0].lists);

  return (
    <Products sortProduct={sortProducts} productsData={categoriesProducts} featureProducts={sortedBy[0].lists} />
  )
}
export default ProductLayout