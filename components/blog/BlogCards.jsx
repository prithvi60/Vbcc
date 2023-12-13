import { BlogCard } from "@/libs/data";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const BlogCards = ({ BlogCard, card, item }) => {
  return (
    <section className="block space-y-8">
      <div className="hidden lg:flex items-start gap-8">
        <div className="block space-y-5 lg:w-[55%] xl:w-[70%] text-warning sticky top-6">
          <div
            style={{ backgroundImage: `url(${card.img})` }}
            className="bg-[url('/blog-2.png')] bg-cover bg-center w-full h-[520px] p-5"
          >
            <div className="px-4 py-2.5 bg-white w-max rounded-md">
              {item.title}
            </div>
          </div>
          <h4 className="text-lg lg:text-[32px] font-Lora">
            {card.productTitile}
          </h4>
          <p className="text-sm md:text-base w-[90%]">{card.desc}</p>
          <Button
            as={Link}
            href={"/blog/1"}
            variant="bordered"
            className="border border-warning rounded-full px-4 py-3 text-sm md:text-base text-warning"
          >
            Read More
          </Button>
        </div>
        <div className="space-y-[50px] w-full lg:w-[45%] xl:w-[30%]">
          {BlogCard.map((list, idx) => (
            <div className="md:block space-y-5 text-warning w-full" key={idx}>
              <div className="relative w-full h-[330px] overflow-hidden">
                <Image
                  fill
                  src={list.img}
                  alt="product"
                  className="absolute object-cover object-center hover:scale-125 transition-all duration-1000"
                />
                <div className="px-4 py-2.5 absolute top-5 left-5 bg-white w-max rounded-md lg:hidden">
                  {item.title}
                </div>
              </div>
              <h4 className="text-lg lg:text-[32px] font-Lora">
                {list.productTitile}
              </h4>
              <p className="text-sm md:text-base">{list.desc}</p>
              <Button
                as={Link}
                href={"/blog/1"}
                variant="bordered"
                className="border border-warning rounded-full px-4 py-3 text-sm md:text-base text-warning"
              >
                Read More
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {BlogCard.map((list, idx) => (
          <div
            className="md:block space-y-5 text-warning w-full xl:last:col-span-3"
            key={idx}
          >
            <div className="relative w-full h-[330px] overflow-hidden">
              <Image
                fill
                src={list.img}
                alt="product"
                className="absolute object-cover object-center hover:scale-125 transition-all duration-1000"
              />
              <div className="px-4 py-2.5 absolute top-5 left-5 bg-white w-max rounded-md lg:hidden">
                {item.title}
              </div>
            </div>
            <h4 className="text-lg lg:text-[32px] font-Lora">
              {list.productTitile}
            </h4>
            <p className="text-sm md:text-base">{list.desc}</p>
            <Button
              as={Link}
              href={"/blog/1"}
              variant="bordered"
              className="border border-warning rounded-full px-4 py-3 text-sm md:text-base text-warning"
            >
              Read More
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};
