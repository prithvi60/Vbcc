import Blog from "./Blog"
import blogData from "@/libs/blog.json"
 const BlogLayout=()=>{
  return (
    <Blog blogData={blogData}/>
  )
}
export default BlogLayout