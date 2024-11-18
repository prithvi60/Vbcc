import { BlogGridComponent } from "./BlogGridComponent";

export const BlogCards = () => {
  return (
    <section>
      <div className="grid w-full grid-cols-1 gap-4 place-content-center place-items-center lg:grid-cols-3 md:grid-cols-2">
        {blogs.map(list => (
          <BlogGridComponent key={list.id} list={list} />
        ))}
      </div>
    </section>
  );
};

const blogs = [
  {
    id: "1",
    img: "/blog-1.jpeg",
    note: "Units operate satisfactorily,VBCC High Temperature Instruments service enabled our research project's success.",
  },
  {
    id: "2",
    img: "/blog-2.jpeg",
    note: "Units operate satisfactorily,VBCC High Temperature Instruments service enabled our research project's success.",
  },
  {
    id: "3",
    img: "/blog-4.jpeg",
    note: "Units operate satisfactorily,VBCC High Temperature Instruments service enabled our research project's success.",
  },
  {
    id: "4",
    img: "/blog-3.jpeg",
    note: "Units operate satisfactorily,VBCC High Temperature Instruments service enabled our research project's success.",
  },
  {
    id: "5",
    img: "/blog-5.jpeg",
    note: "Units operate satisfactorily,VBCC High Temperature Instruments service enabled our research project's success.",
  },
  {
    id: "6",
    img: "/blog-6.jpeg",
    note: "Units operate satisfactorily,VBCC High Temperature Instruments service enabled our research project's success.",
  },
];

{/* <section className="block space-y-8">
      <div className="items-start hidden gap-8 lg:flex">
        {/* Main Blog Section *
<div className="block space-y-5 lg:w-1/2 xl:w-[66%] text-warning sticky top-6">
  <div className="relative">
    <div className="relative w-full h-[520px] p-5">
      <Image
        fill
        src={MainBlog.img}
        alt={MainBlog.blogTitile}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
        sizes="(min-width: 1440px) calc(66.28vw - 87px), calc(50vw - 76px)"
        className="object-cover object-center"
      />
    </div>
    <div
      className={`absolute top-5 left-5 block rounded-full  px-4 py-2.5 bg-white hover:bg-primary text-center text-base duration-700 delay-75 font-urbanist capitalize w-max group`}
    >
      <div className={`h-6 w-full overflow-hidden`}>
        <h4
          className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-warning tracking-wider`}
        >
          Featured
        </h4>
        <h4
          className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-white tracking-wider`}
        >
          Featured
        </h4>
      </div>
    </div>
  </div>
  <h4 className="text-lg lg:text-[32px] font-Lora">
    {MainBlog.blogTitile}
  </h4>
  <p className="text-sm md:text-base w-[90%]">
    {MainBlog.blogDescription}
  </p>
  <Btn
    Hbgcolor={"bg-primary"}
    textColor={"text-warning"}
    HtextColor={"text-white"}
    bColor={"border-warning"}
    title={"Read More"}
    href={"/blog/1"}
  />
</div>
<div className="block space-y-[50px] w-full lg:w-1/2 xl:w-[32%]">
  {blogContents.slice(0, 3).map((list, idx) => (
    <BlogGridComponent key={idx} list={list} />
  ))}
</div>
      </div >
  < div className = "grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3" >
  {
    blogContents.slice(0, lastIndex).map((list, idx) => (
      <BlogGridComponent key={idx} list={list} />
    ))
  }
      </ >
{
  page + 1 <= t ? (
    <div className="flex items-center justify-center">
      <button
        onClick={handlePage}
        className={`block rounded-full px-6 py-4 border border-warning bg-transparent hover:bg-primary text-center text-base duration-700 delay-75 font-urbanist capitalize w-max group cursor-pointer`}
      >
        <div className={`block h-6 w-full overflow-hidden`}>
          <h4
            className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-warning`}
          >
            View All
          </h4>
          <h4
            className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-white`}
          >
            View All
          </h4>
        </div>
      </button>
    </div>
  ) : null
}
    </section > */}