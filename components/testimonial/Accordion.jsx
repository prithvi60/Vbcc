"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

export default function AccordionTestimonial({
  data,
  handleProducts,
  categoryList,
  productList,
  handleCategory,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setOpenMenuIndex(null);
    setOpenSubMenuIndex(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  // console.log(data.filter(item => item.category === "Laboratory Furnace").flatMap(item => item.products));

  return (
    <div className="relative">
      <ul className="mt-5 space-y-4">
        {data.map((item, i) => {
          const isMenuOpen = openMenuIndex === i;
          const hasSubMenu = data.map((item) => item.products).length;

          return (
            <li key={i} className="bg-primary text-white rounded-[2rem]">
              <div>
                {hasSubMenu ? (
                  <div
                    className={`px-3 text-sm md:px-6 py-4 group duration-700 md:text-base font-urbanist font-semibold delay-75 mx-auto md:mx-0 shadow-md capitalize w-full !leading-5 rounded-full cursor-pointer flex justify-between items-center ${categoryList === item.category ? "bg-info" : "bg-primary hover:bg-info text-white"}`}
                    onClick={() => {
                      handleCategory(item.category);
                      setOpenMenuIndex(isMenuOpen ? null : i);
                    }}
                  >
                    <h3>{item.category}</h3>
                    <IoIosArrowDown
                      className={`ml-auto ${isMenuOpen && "rotate-180"} `}
                    />
                  </div>
                ) : (
                  <div
                    title={item.category}
                    onClick={() => {
                      handleCategory(item.category);
                      toggleDrawer();
                    }}
                    className="relative text-sm capitalize rounded-md cursor-pointer md:text-lg"
                  >
                    {item.category}
                  </div>
                )}
              </div>
              {hasSubMenu && (
                <motion.ul
                  initial="exit"
                  animate={isMenuOpen ? "enter" : "exit"}
                  variants={subMenuDrawer}
                  className="rounded-b-[2rem]"
                >
                  {data
                    .filter((entry) => entry.category === item.category)
                    .flatMap((entry) =>
                      entry.products.map((product, index) => (
                        <li key={index} className="w-full cursor-pointer">
                          <div
                            onClick={() => {
                              handleProducts(item.category, product);
                              setOpenSubMenuIndex(
                                openSubMenuIndex === index ? null : index
                              );
                            }}
                            className={`block p-2 text-center duration-700 text-xs md:text-base font-urbanist font-semibold delay-75 mx-auto md:mx-0 capitalize w-full ${productList === product
                              ? "bg-secondary text-black shadow-lg"
                              : "bg-primary text-white"
                              }`}
                          >
                            {product}
                          </div>
                        </li>
                      ))
                    )}
                </motion.ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
