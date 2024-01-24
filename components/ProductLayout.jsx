import productsData from "@/libs/products.json"
import Products from "./Products"
 const ProductLayout=()=>{
  return (
    <Products productsData={productsData.ourProducts}/>
  )
}
export default ProductLayout