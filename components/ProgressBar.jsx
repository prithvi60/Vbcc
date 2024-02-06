import othersData from "@/libs/others.json"
import React from 'react'

export const ProgressBar = ({slide}) => {
    const interval = 100 / othersData.howWeDoIt.length
    const counter = slide * interval
  return (
    <section className="flex flex-row items-center lg:flex-col lg:items-center gap-3 h-full font-Lora">
            <h3>0{slide}</h3>
            <div className="w-full h-3 lg:h-96 lg:w-3 bg-secondary rounded-md overflow-hidden ">
            <div style={{height : `${counter}%`}} className={`hidden lg:block bg-[#FE5C4D] w-full transition duration-1000 ease-linear`}></div> 
            <div style={{width : `${counter}%`}} className={`block lg:hidden bg-[#FE5C4D] h-full transition duration-1000 ease-linear`}></div> 
            </div>
            <h3>0{othersData.howWeDoIt.length}</h3>
    </section>
  )
}
