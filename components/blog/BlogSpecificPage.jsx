import { GiFurnace } from "react-icons/gi";
import { TbListDetails } from "react-icons/tb";


export const BlogSpecificPage = () => {
  return (
    <section className="px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 text-warning font-Montserrat">
      <div className="block w-full xl:w-4/5 mx-auto space-y-[34px]">
        <div>
          <h2 className="flex items-center w-full gap-5 mb-10 text-3xl font-semibold tracking-wider font-Montserrat xl:text-4xl">
            <TbListDetails className="text-3xl xl:text-4xl text-primary" />
            Blog Details
          </h2>
        </div>
        <div className="space-y-10 lg:space-y-[60px]">
          <div className="space-y-3">
            <h4 className="flex items-center gap-5 text-2xl tracking-wide font-Montserrat"><span><GiFurnace className="text-xl text-info" /></span> Dilatometer Principle and Working</h4>
            <p className="ml-10 text-base leading-loose font-Montserrat lg:text-xl">Discover VBCC&apos;s range of Industrial and Research equipment. Our innovative, high-quality products are customizable to meet your specific needs, enhancing manufacturing and research capabilities.</p>
          </div>
          <div className="space-y-3">
            <h4 className="flex items-center gap-5 text-2xl tracking-wide font-Montserrat"><span><GiFurnace className="text-xl text-info" /></span> Dilatometer Principle and Working</h4>
            <p className="ml-10 text-base leading-loose font-Montserrat lg:text-xl">Discover VBCC&apos;s range of Industrial and Research equipment. Our innovative, high-quality products are customizable to meet your specific needs, enhancing manufacturing and research capabilities.</p>
          </div>
          <div className="space-y-3">
            <h4 className="flex items-center gap-5 text-2xl tracking-wide font-Montserrat"><span><GiFurnace className="text-xl text-info" /></span> Dilatometer Principle and Working</h4>
            <p className="ml-10 text-base leading-loose font-Montserrat lg:text-xl">Discover VBCC&apos;s range of Industrial and Research equipment. Our innovative, high-quality products are customizable to meet your specific needs, enhancing manufacturing and research capabilities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
