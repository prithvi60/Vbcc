"use client";

import Link from "next/link";
import { CustomAccordion, CustomVariant } from "./SpecificComp";

export const ProductVariant = ({
  product,
  open,
  setOpen,
  selectedItem,
  specificId,
  handleClick,
}) => {

  return (
    <section className="space-y-[52px]">
      <div className="block space-y-10 max-w-[390px]">
        {(product.variant).length > 0 && (
          <CustomVariant
            variant={product.variant}
            handleClick={handleClick}
            open={open}
            setOpen={setOpen}
            selectedItem={selectedItem}
          />
        )}
        <h4 className="text-[32px] md:text-[36px] font-Lora">
          {product.price}
        </h4>
        <Link
          passHref
          href={"/contact"}
          className={`block rounded-full px-4 py-3 border border-warning bg-primary hover:bg-info text-center text-base duration-700 delay-75 font-urbanist capitalize w-full group`}
        >
          <div className={`h-6 w-full overflow-hidden`}>
            <h4
              className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-white`}
            >
              contact us
            </h4>
            <h4
              className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-white`}
            >
              contact us
            </h4>
          </div>
        </Link>
      </div>
      {product.specification[specificId].title[0] && (
      <h4 className="font-Lora text-[32px]">Specifications</h4>
      )}
      {specificId >= 0 ? (
        <div className="block space-y-5 max-w-xl">
          <CustomAccordion
            specification={product.specification}
            specificId={specificId}
          />
        </div>
      ) : (
        <div className="block space-y-5 max-w-xl">
          <CustomAccordion
            specification={product.specification}
            specificId={0}
          />
        </div>
      )}
      {product.specification[specificId].title[0] && (
      <h5 className="font-urbanist text-base md:text-lg text-info">
        *Customizable to your Requirements
      </h5>
      )}
    </section>
  );
};
