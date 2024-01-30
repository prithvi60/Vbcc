import Image from "next/image";
import React from "react";

const Overview = ({ specification,specificId }) => {
  const specificImg = specification[specificId].overViewImg;
  const specificDesc = specification[specificId].overViewDescription;
  const specificList = specification[specificId].overViewList;
  const specificPara = specification[specificId].overViewLastPara;

  return (
    <section className="px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 xl:px-20 font-urbanist text-white bg-primary space-y-5">
      <h4 className="font-Lora text-[40px]">Overview</h4>
      <div className="bg-secondary rounded-lg text-base p-5 xl:p-10 flex flex-col md:flex-row items-start gap-5">
        <div className="relative w-full md:w-[300px] xl:w-80 h-[180px]">
          <Image
            fill
            src={specificImg}
            alt="..."
            className="absolute object-cover object-center rounded-md"
          />
        </div>
        <ul className="font-urbanist text-base md:text-xl text-warning w-full md:w-[60%] xl:w-[80%] space-y-6">
          {specificDesc.map((list, idx) => (
            <li key={idx} className="leading-normal">
              {list}
            </li>
          ))}
          {specificList.map((list, idx) => (
          <li key={idx}>
            <h5>{list.title}</h5>
            <p className="ps-5">{list.para}</p>
          </li>
          ))}
          <li>{specificPara}</li>
        </ul>
      </div>
    </section>
  );
};
export default Overview;
