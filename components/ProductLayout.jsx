import productsData from "@/libs/products.json"
import Products from "./Products"
const ProductLayout = () => {
  // const sortedBy = productsData.allProducts.filter(
  //   (val) => val.sortBy.toLowerCase() === "featured"
  // );
  const sortedBy = productsData.allProducts.filter(
    (val) => val.sortBy.includes("Best Selling")
  );
  // console.log(sortedBy);
  // 
  return (
    <Products sortProduct={productsData.sortProduct} productsData={productsData.allProducts} featureProducts={sortedBy} />
  )
}
export default ProductLayout