import { PortableText } from "next-sanity";

export const BlogSpecificPage = ({ post }) => {
  return (
    <section className="px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 text-warning font-Montserrat">
      <div className="max-w-7xl prose prose-blue mx-auto prose-h1:text-3.5xl prose-h1:font-bold prose-h2:text-2xl prose-h2:font-bold prose-h3:text-2xl prose-h3:font-bold prose-h4:text-2xl prose-h4:font-bold prose-p:leading-relaxed prose-p:text-lg lg:prose-p:text-xl prose-p:mt-4 prose-p:mb-4 prose-blockquote:leading-relaxed prose-blockquote:text-lg lg:prose-blockquote:text-xl prose-list:list-disc prose-list-decimal">
        <PortableText value={post.body} components={customComponents} />
      </div>
    </section>
  );
};

const customComponents = {
  types: {
    image: ({ value }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={value?.imageUrl} // Use the resolved `imageUrl` from GROQ
        alt={value?.alt || "Image"}
        title={value?.alt || "Image"}
        className="w-full h-full max-w-md max-h-full mx-auto mt-20 mb-20 md:mt-20 md:mb-10"
      />
    ),
  },
};

