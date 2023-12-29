"use client"
import { Checkbox } from "@nextui-org/react"
import { useState } from "react";


export const TagsComponent = ({handleFilter,key,type}) => {
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
