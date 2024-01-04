"use client";
import { useEffect, useState } from "react";
import { CustomFilter } from "./CustomSelect";

const Filter = ({ setIsFilter, filteredCategory, setFilteredCategory }) => {
  
  const [filters, setFilters] = useState(filteredCategory);

  const handleApplyFilter = () => {
    setFilteredCategory(filters);
    setIsFilter((prev) => !prev);
  };
console.log("state",filters)
  return (
    <section className="h-screen w-full fixed top-0 left-0 bg-white px-5 py-10 z-50 overflow-auto">
      <div className="w-full block space-y-8">
        <div className="block space-y-10 h-[77vh]">
          <div className="flex justify-between items-center text-warning">
            <h4 className="font-lora text-base">Filter</h4>
            <p
              className="font-urbanist text-base text-warning cursor-pointer"
              onClick={() => setIsFilter((prev) => !prev)}
            >
              Close
            </p>
          </div>
          <CustomFilter
            Filters={filters}
            setFilters={setFilters}
          />
        </div>
        <div className="flex justify-between items-center gap-4 font-urbanist">
          <button
            // disabled={filters.length > 0 ? false : true}
            className={`w-full px-4 py-3 bg-warning text-secondary rounded-full cursor-pointer text-center disabled:bg-opacity-40 disabled:cursor-not-allowed`}
            onClick={handleApplyFilter}
          >
            Apply Filters
          </button>
          <h4
            className="w-max px-4 py-3 text-warning border border-warning rounded-full cursor-pointer"
            onClick={() => {
              setFilters([]);
              setFilteredCategory([]);
              setIsFilter((prev) => !prev);
            }}
          >
            Clear
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Filter;
