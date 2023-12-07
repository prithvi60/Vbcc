"use Client";
import { filter } from "@/libs/data";
import { useState } from "react";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
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
  SetselectedItem,
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
        {sortProduct.map((item, idx) => (
          <li
            className={`p-3 capitalize cursor-pointer font-Lora text-2xl text-primary hover:bg-info border-b border-warning last:border-b-0 hover:duration-1000 hover:bg-opacity-30 ${
              selectedItem === item.value ? "bg-white" : ""
            } `}
            key={idx}
            onClick={() => {
              SetselectedItem(item.value);
              setOpen(!open);
            }}
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
  SetselectedItem,
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
            className={`p-3 border-b border-warning last:border-b-0 capitalize cursor-pointer font-Lora text-base md:text-2xl text-primary hover:bg-info hover:duration-1000 hover:bg-opacity-30 ${
              selectedItem === item.value ? "bg-white" : ""
            } `}
            key={idx}
            onClick={() => {
              SetselectedItem(item.value);
              setOpen(!open);
            }}
          >
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const CustomFilter = () => {
   const [index, setIndex] = useState(false);

  const handleSetIndex = (Id) => index !== Id && setIndex(Id);
  return (
    <div className="space-y-4">
      {filter.map((item) => (
        <div
          className="block space-y-3 w-full h-auto"
          key={item.id}
          onClick={() => handleSetIndex(item.id)}
        >
          <div className="w-full px-4 py-3 border border-warning rounded-full flex justify-between items-center cursor-pointer">
            <div className="text-warning font-Lora capitalize text-base">
              {item.title}
            </div>
            {index !== item.id ? (
              <AiOutlinePlus className="h-5 w-5 text-warning" />
            ) : (
              <AiOutlineMinus className="h-5 w-5 text-warning" />
            )}
          </div>
          {index === item.id && (
          <ul
            className={`w-full md:w-72 border border-warning rounded-3xl h-auto overflow-hidden transition-all duration-1000 p-3 flex flex-wrap items-center gap-2`}
          >
            {item.button.map((t,idx)=>(
            <li
              className={`p-2 w-max capitalize border border-warning rounded-full cursor-pointer font-urbanist text-base text-primary hover:bg-info hover:duration-1000 hover:bg-opacity-30 tracking-wider`}
              onClick={() => {
                setIndex(false);
              }}
              key={idx}
            >
              {t}
            </li>
            ))}
          </ul>
          )}
        </div>
      ))}
    </div>
  );
};
