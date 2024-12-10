import { PortableText } from "next-sanity";

export const BlogSpecificPage = ({ post }) => {
  return (
    <section className="px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 text-warning font-Montserrat">
      <PortableText value={post.body} components={customComponents} />
    </section>
  );
};


const customComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="flex items-center w-full gap-5 my-6 text-3.5xl font-bold tracking-wider font-Montserrat xl:text-5xl mb-4 mt-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="flex items-center w-full gap-5 my-6 text-2xl font-bold tracking-wider font-Montserrat xl:text-4.5xl mb-4 mt-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="flex items-center w-full gap-5 my-6 mt-4 mb-4 text-2xl font-bold tracking-wider font-Montserrat xl:text-3xl">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="flex items-center w-full gap-5 my-6 mt-4 mb-4 text-2xl font-bold tracking-wider font-Montserrat xl:text-3xl">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="flex items-center w-full gap-5 my-6 mt-4 mb-4 text-2xl font-bold tracking-wider font-Montserrat xl:text-3xl">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="flex items-center w-full gap-5 my-6 mt-4 mb-4 text-2xl font-bold tracking-wider font-Montserrat xl:text-3xl">
        {children}
      </h6>
    ),
    normal: ({ children }) => (
      <p className="mt-4 mb-4 ml-10 text-lg leading-relaxed font-Montserrat lg:text-xl ">{children}</p>
    ),
    blockquote: ({ children }) => (
      <p className="mt-4 mb-4 ml-10 text-lg leading-relaxed font-Montserrat lg:text-xl ">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-4 ml-10 space-y-2 text-lg list-disc lg:text-xl">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-4 ml-10 space-y-2 text-lg list-decimal lg:text-xl">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mt-4 ml-5 text-lg lg:text-xl">{children}</li>,
    number: ({ children }) => <li className="mt-4 ml-5 text-lg lg:text-xl">{children}</li>,
  },
  types: {
    image: ({ value }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={value?.imageUrl} // Use the resolved `imageUrl` from GROQ
        alt={value?.alt || "Image"}
        className="w-full h-full max-w-md max-h-full mx-auto mt-20 mb-20 md:mt-2b"
      />
    ),
  },
};


// const customComponents = {
//   block: {
//     h1: ({ children }) => <h1 className="flex items-center w-full gap-5 my-6 text-3xl font-semibold tracking-wider font-Montserrat xl:text-4xl">{children}</h1>,
//     h2: ({ children }) => <h2 className="flex items-center w-full gap-5 my-6 text-3xl font-semibold tracking-wider font-Montserrat xl:text-4xl">{children}</h2>,
//     h3: ({ children }) => <h3 className="flex items-center w-full gap-5 my-6 text-3xl font-semibold tracking-wider font-Montserrat xl:text-4xl">{children}</h3>,
//     h4: ({ children }) => <h4 className="flex items-center w-full gap-5 my-6 text-3xl font-semibold tracking-wider font-Montserrat xl:text-4xl">{children}</h4>,
//     h5: ({ children }) => <h5 className="flex items-center w-full gap-5 my-6 text-3xl font-semibold tracking-wider font-Montserrat xl:text-4xl">{children}</h5>,
//     h6: ({ children }) => <h6 className="flex items-center w-full gap-5 my-6 text-3xl font-semibold tracking-wider font-Montserrat xl:text-4xl">{children}</h6>,
//     normal: ({ children }) => <p className="ml-10 text-base font-Montserrat lg:text-xl">{children}</p>,
//   },
//   list: {
//     bullet: ({ children }) => (
//       <ul className="ml-10 space-y-2 list-disc">{children}</ul>
//     ),
//     number: ({ children }) => (
//       <ol className="ml-10 space-y-2 list-decimal">{children}</ol>
//     ),
//   },
//   listItem: {
//     bullet: ({ children }) => <li className="ml-5">{children}</li>,
//     number: ({ children }) => <li className="ml-5">{children}</li>,
//   },
//   types: {
//     image: ({ value }) => (
//       <img
//         src={value?.imageUrl} // Use the resolved `imageUrl` from GROQ
//         alt={value?.alt || 'Image'}
//         className="w-full h-full max-w-md max-h-full my-8"
//       />
//     ),
//   },
// };



