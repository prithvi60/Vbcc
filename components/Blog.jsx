"use client";
import blogData from "@/libs/blog.json"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Btn2 } from "./Btn";
import { useRouter } from "next/navigation";
const Blog = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [width, setWidth] = useState(0);
  const [count, setCount] = useState(4);
  const router = useRouter()

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    width >= 1440 ? setCount(4) : width >= 1024 ? setCount(3) : setCount(2);
  }, [width]);
  return (
    <section className="py-16 px-6 md:px-10 xl:p-16 bg-primary font-urbanist">
      <div className="flex flex-col justify-center items-center gap-8">
        <h3 className="font-Lora text-3xl md:text-5xl text-secondary">
          News/Journal
        </h3>
        <div className="block w-full space-y-8">
          <div className="gap-3 w-full h-auto justify-center flex item-center flex-wrap bg-primary items-center">
            {blogData.blog.map((item, idx) => (
              <div
                className={`text-base tracking-tight border border-white p-5 rounded-full font-Lora min-w-fit px-4 py-2 group/button block bg-transparent hover:bg-warning text-center duration-700 delay-75 capitalize cursor-pointer ${
                  activeTab === idx ? "!bg-white !hover:bg-white" : ""
                }`}
                key={idx}
                onClick={() => setActiveTab(idx)}
              >
                <div className={`h-6 w-full overflow-hidden`}>
                  <h4
                    className={`transition translate-y-0 group-hover/button:-translate-y-20 duration-700   ${
                      activeTab === idx ? "text-warning " : "text-white"
                    }`}
                  >
                    {item.title}
                  </h4>
                  <h4
                    className={`translate-y-20 transition group-hover/button:-translate-y-[25px] duration-700  ${
                      activeTab === idx
                        ? "text-warning"
                        : "group-hover/button:text-white"
                    }`}
                  >
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-4">
            {blogData.blog[activeTab].sub.slice(0, count).map((card, id) => (
              <Link
                href={"https://ik.imagekit.io/webibee/VBCC/blog/1"}
                className="w-full bg-secondary text-warning rounded-none font-urbanist p-5 space-y-4"
                key={id}
              >
                <div className="space-y-4 p-0">
                  <div className="relative h-[225px] w-full">
                    <Image
                      fill
                      src={card.img}
                      placeholder="blur"
                      blurDataURL={`${card.img}?tr=bl-100`}
                      alt="product"
                      className="absolute object-cover object-center"
                    />
                  </div>
                  <div className="space-y-5">
                    <h4 className="text-xl uppercase font-Lora">
                      {card.title}
                    </h4>
                    <p className="font-urbanist text-sm">{card.desc}</p>
                  </div>
                </div>
                <div className="p-0">
                <button   
                 onClick={()=>router.push("https://ik.imagekit.io/webibee/VBCC/contact")}
                    className={`rounded-full px-4 py-2 group border border-warning bg-primary hover:bg-info text-center text-base duration-700 delay-75 font-urbanist capitalize w-full`}
                  >
                    <div className={`h-6 w-full overflow-hidden`}>
                      <h4
                        className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-white`}
                      >
                        Request a Quote
                      </h4>
                      <h4
                        className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-white`}
                      >
                        Request a Quote
                      </h4>
                    </div>
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Btn2
          Hbgcolor={"bg-white"}
          textColor={"text-white"}
          HtextColor={"text-warning"}
          bColor={"border-white"}
          title={"View All"}
          href={"https://ik.imagekit.io/webibee/VBCC/blog"}
        />
      </div>
    </section>
  );
};

export default Blog;
