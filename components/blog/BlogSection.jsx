import { BlogCards } from "./BlogCards";
export const BlogSection = ({ posts }) => {
  return (
    <section className="px-5 py-10 md:px-10 md:py-[60px] lg:p-[60px]">
      <BlogCards posts={posts} />
    </section>
  );
};
