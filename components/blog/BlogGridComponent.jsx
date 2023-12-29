import React from 'react'
import { Btn } from '../Btn'
import Image from 'next/image'

export const BlogGridComponent = ({list,key}) => {
  return (
    <div className="md:block space-y-5 w-full" key={key}>
          <div className="text-warning space-y-5 group">
            <div className="relative w-full h-[330px] overflow-hidden">
              <Image
                fill
                src={list.img}
                alt="product"
                className="absolute object-cover object-center group-hover:scale-125 transition-all duration-1000"
              />
              <div className="px-4 py-2.5 absolute top-5 left-5 bg-white w-max rounded-md lg:hidden">
                Featured
              </div>
            </div>
            <h4 className="text-lg lg:text-[32px] font-Lora">
              {list.blogTitile}
            </h4>
            <p className="text-sm md:text-base">{list.blogDescription}</p>
          </div>
          <Btn
            Hbgcolor={"bg-primary"}
            textColor={"text-warning"}
            HtextColor={"text-white"}
            bColor={"border-warning"}
            title={"Read More"}
            href={"/blog/1"}
          />
        </div>
  )
}
