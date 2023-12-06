import { Button } from "@nextui-org/react"

export const Btn = ({bgColor,HBgColor,title}) => {
  return (
    <Button as={Link}
    href="#" radius="full" className={`px-4 py-3 h-10 w-auto border border-stone-800 hover:border text-gray-500 hover:text-white rounded-3xl duration-500 group overflow-hidden ${bgColor} ${HBgColor}`}>
        <div className="group-hover:animate-spin_word">
          <p>{title}</p>
          <p>{title}</p>
        </div>
    </Button>
  )
}

import React from 'react'

export const Btn2 = ({bgColor,HBgColor,title}) => {
  return (
    <Button as={Link}
    href="#" radius="full" className={`px-6 py-5 h-10 w-auto border border-stone-800 hover:border text-gray-500 hover:text-white rounded-3xl duration-500 group overflow-hidden ${bgColor} ${HBgColor}`}>
        <div className="group-hover:animate-spin_word">
          <p>{title}</p>
          <p>{title}</p>
        </div>
    </Button>
  )
}

