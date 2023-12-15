import { category } from "@/libs/data";

const obj = {
  title: "All Products",
  desc: "Discover VBCC&apos;s range of Industrial and Research equipment. Our innovative, high-quality products are customizable to meet your specific needs, enhancing manufacturing and research capabilities.",
  ImgSrc: "/product-bg.png",
};

export const ProductHero = () => {
  return (
    <section className="h-full w-full flex flex-wrap-reverse md:flex-nowrap bg-success">
      <div className="w-full md:w-1/2 px-5 py-10 md:px-10 md:py-[60px] lg:p-[60px]">
        <div className="w-full h-full md:max-w-[550px] lg:max-w-[440px] md:flex md:flex-col md:justify-between md:items-center md:gap-10 block space-y-6">
          <h2 className="font-Lora text-2xl md:text-4xl xl:text-6xl w-full">
            {obj.title}
          </h2>
          <p className="font-urbanist text-sm lg:text-base">{obj.desc}</p>
          <div className="flex flex-wrap gap-3">
          {category.map((item,idx)=>(
          <div
            className={`h-full md:hidden rounded-full px-4 py-3 border border-white bg-transparent hover:bg-white group text-center text-base duration-700 delay-75 font-urbanist font-normal capitalize w-max cursor-pointer`}
            // onClick={() => setIsOpen(!isOpen)}
          key={idx}>
            <div className={`block h-6 w-full overflow-hidden`}>
              <h4
                className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-white`}
              >
                {`${item} (150)`}
              </h4>
              <h4
                className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-warning`}
              >
                {`${item} (150)`}
              </h4>
            </div>
          </div>
          ))}
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${obj.ImgSrc})` }}
        className="h-[400px] md:h-[50vh] w-full md:w-1/2  bg-cover bg-center bg-no-repeat"
      ></div>
    </section>
  );
};
