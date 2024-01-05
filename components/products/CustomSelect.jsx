"use Client";
import { filter } from "@/libs/data";
import { useEffect, useState } from "react";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { button } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
const sortProduct = [
  { value: "relevance" },
  { value: "new products" },
  { value: "featured" },
  { value: "best sellers" },
];

export const CustomSelect = ({
  open,
  setOpen,
  selectedItem,
  handleSortBy,
}) => {
  return (
    <div className="block space-y-5 bg-secondary h-auto">
      <div className="flex justify-center items-center gap-6 px-4 py-2 border border-warning w-[350px] font-Lora rounded-full bg-secondary">
        <h4 className="font-Lora w-[40%] text-warning text-2xl font-medium">
          Sort By :
        </h4>
        <div
          className="w-64 rounded-full flex justify-between items-center cursor-pointer"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <div className="text-info font-Lora capitalize text-2xl">
            {selectedItem}
          </div>
          {!open ? (
            <RiArrowDownSFill className="h-5 w-5 text-warning" />
          ) : (
            <RiArrowUpSFill className="h-5 w-5 text-warning" />
          )}
        </div>
      </div>
      <ul
        className={`w-[350px] border border-warning rounded-3xl ${
          open
            ? "block h-auto  bg-secondary overflow-hidden transition-all duration-1000"
            : "hidden"
        }`}
      >
        {sortProduct.map((item,idx) => (
          <li
            className={`p-3 capitalize cursor-pointer font-Lora text-2xl text-primary hover:bg-info border-b border-warning last:border-b-0 hover:duration-1000 hover:bg-opacity-10 ${
              selectedItem === item.value ? "bg-white" : ""
            } `}
            key={idx}
            onClick={() => handleSortBy(item.value)}
          >
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const CustomSelectMd = ({
  open,
  setOpen,
  selectedItem,
  handleSortBy,
}) => {
  return (
    <div className="block space-y-5 bg-secondary w-full h-auto">
      <div
        className="w-full md:w-72 px-4 py-3 border border-primary rounded-full flex justify-between items-center cursor-pointer"
        onClick={() => setOpen((prevOpen) => !prevOpen)}
      >
        <div className="text-info font-Lora capitalize text-base md:text-2xl">
          {selectedItem}
        </div>
        {!open ? (
          <RiArrowDownSFill className="h-5 w-5 text-warning" />
        ) : (
          <RiArrowUpSFill className="h-5 w-5 text-warning" />
        )}
      </div>
      <ul
        className={`w-full md:w-72 border border-warning rounded-3xl ${
          open
            ? "block h-auto overflow-hidden transition-all duration-1000"
            : "hidden"
        }`}
      >
        {sortProduct.map((item, idx) => (
          <li
            className={`p-3 border-b border-warning last:border-b-0 capitalize cursor-pointer font-Lora text-base md:text-2xl text-primary hover:bg-info hover:duration-1000 hover:bg-opacity-10 ${
              selectedItem === item.value ? "bg-white" : ""
            } `}
            key={idx}
            onClick={() => handleSortBy(item.value)}
          >
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const CustomFilter = ({setFilters,Filters}) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("category");
  const [index, setIndex] = useState(null);

  // console.log(search);
  const product =
    filter.find((val) => val.title === search) || filter;

    const handleSetIndex = (title) => {
      setIndex(title);
    };

  const handleCheck = (button) => {
    if (Filters.includes(button)) {
      // remove tag
      setFilters((val) => val.filter((del) => del !== button));
    } else {
      // add tag
      setFilters((val) => [...val, button]);
    }
  };

  return (
    <>
    {search === null ? (
    <div className="space-y-4">
      {filter.map((item, idx) => (
        <div
          className="block space-y-3 w-full h-auto"
          key={idx}
          onClick={() => handleSetIndex(idx)}
        >
          <div className="w-full px-4 py-2 border border-warning rounded-full flex justify-between items-center cursor-pointer">
            <div className="text-warning font-Lora capitalize text-base">
              {item.title}
            </div>
            {index !== idx ? (
              <AiOutlinePlus className="h-5 w-5 text-warning" />
            ) : (
              <AiOutlineMinus className="h-5 w-5 text-warning" />
            )}
          </div>
          {index === idx && (
            <div
              className={`w-full border border-warning rounded-3xl h-auto overflow-hidden transition-all duration-1000 p-3 space-y-4 text-sm`}
            >
              <div className="font-Lora tracking-tighter text-warning flex items-center">
                <span className="w-3 h-3 rounded-full bg-warning mx-2"></span>{" "}
                Select Filters
              </div>
              <ul className="flex flex-wrap items-center gap-2">
                {item.button.map((btn, idx) => (
                  <li
                    className={`p-2 w-max capitalize border border-warning rounded-full cursor-pointer font-urbanist text-primary tracking-wider ${
                      Filters.includes(btn)
                        ? "bg-primary text-white"
                        : " bg-transparent"
                    }`}
                    onClick={() => handleCheck(btn)}
                    key={idx}
                  >
                    {btn}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>)  : (
    <div className="space-y-4">
        <div
          className="block space-y-3 w-full h-auto"
        >
          <div className="w-full px-4 py-2 border border-warning rounded-full flex justify-between items-center cursor-pointer">
            <div className="text-warning font-Lora capitalize text-base">
              {product.title}
            </div>
              <AiOutlineMinus className="h-5 w-5 text-warning" />
          </div>
          {search === product.title && (
            <div
              className={`w-full border border-warning rounded-3xl h-auto overflow-hidden transition-all duration-1000 p-3 space-y-4 text-sm`}
            >
              <div className="font-Lora tracking-tighter text-warning flex items-center">
                <span className="w-3 h-3 rounded-full bg-warning mx-2"></span>{" "}
                Select Filters
              </div>
              <ul className="flex flex-wrap items-center gap-2">
                {product.button.map((btn, idx) => (
                  <li
                    className={`p-2 w-max capitalize border border-warning rounded-full cursor-pointer font-urbanist text-primary tracking-wider ${
                      Filters.includes(btn)
                        ? "bg-primary text-white"
                        : " bg-transparent"
                    }`}
                    onClick={() => handleCheck(btn)}
                    key={idx}
                  >
                    {btn}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
    </div>)}
    
    </>
  );
};

