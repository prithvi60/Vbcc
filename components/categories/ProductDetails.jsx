"use client";
import React from "react";
import { useState } from "react";
import Tablet from "../Tablet";

const ProductDetails = ({ keys, specs, headers, page, headers2, specs2, path }) => {
  const [activeTab, setActiveTab] = useState("Key Functions");
  return (
    <section className="w-full h-full space-y-20 padding font-Montserrat bg-primary">
      <div className="flex flex-col items-center gap-6 sm:gap-8 sm:flex-row">
        <button
          onClick={() => setActiveTab("Key Functions")}
          className={`relative font-medium tracking-wide uppercase text-xl  ${activeTab === "Key Functions" &&
            "after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-1 after:bg-info active:text-info"
            }`}
        >
          Key Functions
        </button>
        <button
          onClick={() => setActiveTab("Specifications")}
          className={`relative font-medium tracking-wide uppercase text-xl ${activeTab === "Specifications" &&
            "after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-1 after:bg-info active:text-info"
            }`}
        >
          Specifications
        </button>
      </div>
      {activeTab === "Key Functions" && (
        <ul className="w-full h-full space-y-3">
          {keys.map((list, idx) => (
            <li className="text-base font-medium md:text-lg" key={idx}>
              <span className="mr-1 text-base font-semibold tracking-wide md:text-lg text-info">
                {`${list.label} :`}
              </span>
              {list.value}
            </li>
          ))}
        </ul>
      )}
      {activeTab === "Specifications" && (
        <>
          {page === "lab" || path === "Vacuum_Hot_Press" ? (
            <>
              <Tablet headers={headers} data={specs} />
              {headers2 && specs2 && (
                <Tablet headers={headers2} data={specs2} />
              )}
            </>
          ) : (
            <div className="overflow-x-auto thumbnail">
              <table className="w-full border border-collapse border-gray-300">
                <thead className="text-primary bg-info">
                  <tr>
                    {specs.map((spec, idx) => (
                      <th
                        key={idx}
                        className="px-4 py-2 text-sm font-semibold text-center border border-primary"
                      >
                        {spec.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {specs.map((spec, idx) => (
                      <td
                        key={idx}
                        className="px-4 py-2 text-sm text-center bg-white border border-primary text-primary"
                      >
                        {spec.value}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default ProductDetails;
