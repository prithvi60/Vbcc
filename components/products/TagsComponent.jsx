"use client"
import * as React from "react";
import { Checkbox } from "@nextui-org/checkbox"
import { useState } from "react";


export const TagsComponent = ({key,type}) => {
    const [isSelected, setIsSelected] = useState(false);
  return (
    <li
                key={key}
                className={`flex items-center gap-2 w-max cursor-pointer`}
              >
                <Checkbox
                  value={type}
                  isSelected={isSelected}
                  onValueChange={setIsSelected}
                //   onChange={(e) => handleFilter(e)}
                  size="md"
                  color="success"
                >
                  <h4 className="text-warning text-opacity-50 font-urbanist text-base hover:text-warning">
                    {type}
                  </h4>
                </Checkbox>
              </li>
  )
}
