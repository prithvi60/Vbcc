"use client";
import BreadCrumb from "@/components/categories/BreadCrumb.jsx";
import { Modal1 } from "@/components/landing page/Modal";
import Image from "next/image";
import dynamic from "next/dynamic";

const PdfViewerComponent = dynamic(() => import("./PDFViewer.jsx"), {
    ssr: false, // Disable server-side rendering for this component
});

const CategoryHero = ({
    heroBg,
    title,
    desc1,
    desc2,
    categoryImg,
    pdfFile,
}) => {
    return (
        <section className="relative z-auto w-full h-full font-Montserrat">
            {/* <div className="relative w-full h-[75dvh] lg:h-[75vh] bg-primary z-auto"></div> */}
            <div className="block w-full h-full bg-primary">
                <div className="relative z-0 w-full pt-24 pb-14">
                    <div className="relative w-full h-[40vh] md:h-[55vh] overflow-hidden">
                        <Image
                            fill
                            src={heroBg}
                            priority
                            alt="hero bg"
                            className="object-cover object-center"
                        />
                        <div className="absolute top-0 left-0 z-0 w-full h-[90vh] bg-gradient-to-b from-[#00000033] via-[#F06F3845] to-[#00000033]"></div>
                        <BreadCrumb />
                    </div>
                    <h4 className="absolute z-40 px-4 py-3 text-xl font-semibold rounded-sm left-5 md:left-14 bottom-7 lg:text-2xl xl:text-3xl 2xl:text-4xl bg-info ">
                        {title}
                    </h4>
                </div>
            </div>
            <div className="flex flex-col items-center w-full h-full padding bg-primary md:flex-row md:items-start">
                <div className="block w-full space-y-4 md:space-y-6 md:w-3/5">
                    <p className="text-base md:text-lg font-medium !leading-[32px] text-secondary">
                        {desc1}
                    </p>
                    <p className="text-base md:text-lg font-medium !leading-[32px] text-secondary">
                        {desc2}
                    </p>
                    <div
                        className={` ${title === "Categories" ? "hidden" : "flex"} flex-col items-center justify-center gap-4 md:flex-row md:justify-start md:gap-8`}
                    >
                        <Modal1
                            styles={"bg-info text-white"}
                            title={"Download Catalog"}
                            type={"download"}
                            pageType={"main"}
                            page={title}
                        />
                        <PdfViewerComponent pdfFile={pdfFile} />
                    </div>
                </div>
                <div className="relative z-0 mx-auto w-52 h-52 md:w-60 md:h-60 xl:h-80 xl:w-80 group">
                    <Image
                        alt="image"
                        fill
                        src={categoryImg}
                        className="z-20 object-contain object-center transition ease-linear transform group-hover:scale-125 duration-400"
                    />
                    <div className="absolute top-2 md:top-8 group-hover:bg-info group-hover:scale-80 transition-colors duration-400 ease-in-out z-10 left-2 flex justify-between items-center rounded-full bg-gradient-to-b from-[#13294F56] to-[#6B778C56] shadow-lg blur-sm size-44 md:size-56 xl:size-72 group-hover:bg-gradient-to-b group-hover:from-info group-hover:to-info"></div>
                </div>
                {/* <Spline /> */}
                {/* <div className="mx-auto">
                    <iframe
                        src='https://my.spline.design/example-76f14259e2cfd73277c819591975e703/'
                        // frameBorder="0"
                        title="Categories Product"
                        loading="lazy"
                        width="100%"
                        height="100%"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="h-[430px] w-[450px]"
                    ></iframe>
                </div> */}
            </div>
        </section>
    );
};

export default CategoryHero;
