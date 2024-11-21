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
    h1: ({ children }) => <h1 className="flex items-center w-full gap-5 mb-10 text-3xl font-semibold tracking-wider font-Montserrat xl:text-4xl">{children}</h1>,
    h2: ({ children }) => <h2 className="flex items-center w-full gap-5 mb-10 text-3xl font-semibold tracking-wider font-Montserrat xl:text-4xl">{children}</h2>,
    h3: ({ children }) => <h3 className="flex items-center w-full gap-5 mb-10 text-3xl font-semibold tracking-wider font-Montserrat xl:text-4xl">{children}</h3>,
    h4: ({ children }) => <h4 className="flex items-center w-full gap-5 mb-10 text-3xl font-semibold tracking-wider font-Montserrat xl:text-4xl">{children}</h4>,
    h5: ({ children }) => <h5 className="flex items-center w-full gap-5 mb-10 text-3xl font-semibold tracking-wider font-Montserrat xl:text-4xl">{children}</h5>,
    h6: ({ children }) => <h6 className="flex items-center w-full gap-5 mb-10 text-3xl font-semibold tracking-wider font-Montserrat xl:text-4xl">{children}</h6>,
    normal: ({ children }) => <p className="ml-10 text-base font-Montserrat lg:text-xl">{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-10 space-y-2 list-disc">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="ml-10 space-y-2 list-decimal">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-5">{children}</li>,
    number: ({ children }) => <li className="ml-5">{children}</li>,
  },
  types: {
    image: ({ value }) => (
      <img
        src={value?.imageUrl} // Use the resolved `imageUrl` from GROQ
        alt={value?.alt || 'Image'}
        className="w-full h-full max-w-md max-h-full my-8"
      />
    ),
  },
};





{/* <div className="block w-full xl:w-4/5 mx-auto space-y-[34px]">
        <div>
          <h2 className="flex items-center w-full gap-5 mb-10 text-3xl font-semibold tracking-wider font-Montserrat xl:text-4xl">
            <TbListDetails className="text-3xl xl:text-4xl text-primary" />
            Blog Details
          </h2>
        </div>
        <div className="space-y-10 lg:space-y-[60px]">
          <div className="space-y-3">
            <h4 className="flex items-center gap-5 text-2xl tracking-wide font-Montserrat"><span><GiFurnace className="text-xl text-info" /></span> Dilatometer Principle and Working</h4>
            <p className="ml-10 text-base leading-loose font-Montserrat lg:text-xl">Discover VBCC&apos;s range of Industrial and Research equipment. Our innovative, high-quality products are customizable to meet your specific needs, enhancing manufacturing and research capabilities.</p>
          </div>
          <div className="space-y-3">
            <h4 className="flex items-center gap-5 text-2xl tracking-wide font-Montserrat"><span><GiFurnace className="text-xl text-info" /></span> Dilatometer Principle and Working</h4>
            <p className="ml-10 text-base leading-loose font-Montserrat lg:text-xl">Discover VBCC&apos;s range of Industrial and Research equipment. Our innovative, high-quality products are customizable to meet your specific needs, enhancing manufacturing and research capabilities.</p>
          </div>
          <div className="space-y-3">
            <h4 className="flex items-center gap-5 text-2xl tracking-wide font-Montserrat"><span><GiFurnace className="text-xl text-info" /></span> Dilatometer Principle and Working</h4>
            <p className="ml-10 text-base leading-loose font-Montserrat lg:text-xl">Discover VBCC&apos;s range of Industrial and Research equipment. Our innovative, high-quality products are customizable to meet your specific needs, enhancing manufacturing and research capabilities.</p>
          </div>
        </div>
      </div> */}