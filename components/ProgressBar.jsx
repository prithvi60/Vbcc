import { data } from '@/libs/data';
import React from 'react'


export const ProgressBar = ({slide}) => {
    const interval = 100 / data.length
    const counter = slide * interval
  return (
    <section className="flex flex-row items-center lg:flex-col lg:items-center gap-3 h-full font-Lora">
            <h5>0{slide}</h5>
            <div className="w-full h-3 lg:h-96 lg:w-3 bg-secondary rounded-md overflow-hidden ">
            <div style={{height : `${counter}%`}} className={`bg-[#FE5C4D] w-full transition duration-1000 ease-linear`}></div> 
            </div>
            <h5>0{data.length}</h5>
    </section>
  )
}
