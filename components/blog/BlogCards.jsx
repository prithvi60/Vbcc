import { BlogGridComponent } from "./BlogGridComponent";

export const BlogCards = ({ posts }) => {

  return (
    <section>
      <div className="grid w-full grid-cols-1 gap-4 place-content-center place-items-center lg:grid-cols-3 md:grid-cols-2">
        {posts.map((post, idx) => (
          <BlogGridComponent key={idx} post={post} />
        ))}
      </div>
    </section>
  );
};
