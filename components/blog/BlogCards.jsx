import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Btn } from "../Btn";
import { BlogGridComponent } from "./BlogGridComponent";

export const BlogCards = ({ blogContents, MainBlog, item }) => {
  const [width, setWidth] = useState(0);
  const [count, setCount] = useState(6);
  const [page, setPage] = useState(1);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    width >= 1440
      ? setCount(6)
      : width >= 1024
      ? setCount(4)
      : width >= 810
      ? setCount(6)
      : setCount(5);
  }, [width]);
  const lastIndex = page * count;
  const t = Math.ceil(blogContents.length / count);
  const handlePage = () => {
    let pageIndex = page + 1;
    if (pageIndex <= t && pageIndex >= 1) {
      setPage(pageIndex);
    }
  };

  return (
    <section className="block space-y-8">
      <div className="hidden lg:flex items-start gap-8">
        {/* Main Blog Section */}
        <div className="block space-y-5 lg:w-1/2 xl:w-[66%] text-warning sticky top-6">
          <div
            style={{ backgroundImage: `url(${MainBlog.img})` }}
            className="bg-[url('/blog-2.png')] bg-cover bg-center w-full h-[520px] p-5"
          >
            <div
              className={`block rounded-full px-4 py-2 bg-white hover:bg-primary text-center text-base duration-700 delay-75 font-urbanist capitalize w-max group`}
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
        {/* other Blogs Section */}
        <div className="block space-y-[50px] w-full lg:w-1/2 xl:w-[32%]">
          {blogContents.slice(0, 3).map((list, idx) => (
            <BlogGridComponent key={idx} list={list} />
          ))}
        </div>
      </div>
      {/* Blogs wrapper Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {blogContents.slice(0, lastIndex).map((list, idx) => (
          <BlogGridComponent key={idx} list={list} />
        ))}
      </div>
      {/* Pagination */}
      {page + 1 <= t ? (
        <div className="flex justify-center items-center">
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
      ) : null}
    </section>
  );
};
