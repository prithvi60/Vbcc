"use client"
import { category, filters } from "@/libs/data"
import { Checkbox, Divider } from "@nextui-org/react"
import { useState } from "react";
import { ProductCard } from "./ProductCard";

const ProductFC = () => {
    const [selectedItem, SetselectedItem] = useState("All Products");
  return (
    <section className="flex items-start gap-[60px] xl:px-[60px]">
        <div className="hidden lg:block space-y-10 lg:sticky lg:top-5">
            <div className="block space-y-6">
                <h4 className="uppercase text-xl text-warning font-Lora">category</h4>
                <ul className="text-warning text-opacity-50 font-Lora text-2xl space-y-2">
                    {category.map((c,idx)=>(
                    <li key={idx} className={`w-max cursor-pointer btn_hover after:bg-warning after:bg-opacity-50 hover:after:bg-warning hover:after:bg-opacity-50 ${
                        selectedItem === c ? "text-warning text-opacity-100" : ""
                      }`} onClick={() => {
                        SetselectedItem(c);
                      }}>
                        <h4>{c}</h4>
                    </li>
                    ))}
                </ul>
            </div>
            <Divider className="bg-warning bg-opacity-40"/>
            <div className="hidden lg:block space-y-6">
                <h4 className="uppercase text-xl text-warning font-Lora">Filters</h4>
                <ul className="space-y-3">
                    {filters.map((f,idx)=>(
                    <li key={idx} className={`flex items-center gap-2 w-max cursor-pointer`} 
                    //   onClick={() => {
                    //     SetselectedItem(c);
                    //   }}
                      >
                         <Checkbox size="md" color="success">
                        <h4 className="text-warning text-opacity-50 font-urbanist text-base hover:text-warning">{f}</h4>
                         </Checkbox>
                    </li>
                    ))}
                </ul>
            </div>
            <div className="text-base text-warning font-urbanist uppercase tracking-wide cursor-pointer">Clear Filters</div>
        </div>
        <div className="block w-full h-full space-y-10">
        <ProductCard/>
        </div>
    </section>
  )
}

export default ProductFC