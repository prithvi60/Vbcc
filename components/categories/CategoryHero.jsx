"use client"
import BreadCrumb from "@/app/categories/BreadCrumb";
import { Modal1 } from "@/components/landing page/Modal";
import Image from "next/image";
import dynamic from 'next/dynamic';

const PdfViewerComponent = dynamic(() => import('./PDFViewer.jsx'), {
    ssr: false // Disable server-side rendering for this component
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
            <div className="relative w-full h-[75vh] lg:h-[65dvh] hero-mask bg-primary z-auto"></div>
            <div className="absolute left-0 z-0 block w-full top-36">
                <div className="relative w-full">
                    <div className="relative w-full h-[50vh] overflow-hidden">
                        <Image
                            fill
                            src={heroBg}
                            alt="hero bg"
                            className="object-cover object-center"
                        />
                        <div className="absolute top-0 left-0 z-0 w-full h-[90vh] bg-gradient-to-b from-[#00000033] via-[#F06F3845] to-[#00000033]"></div>
                        <BreadCrumb />
                    </div>
                    <h4 className="absolute z-40 px-10 py-3 text-xl left-20 -bottom-7 lg:text-2xl bg-info">
                        {title}
                    </h4>
                </div>
            </div>
            <div className="flex flex-col items-center w-full h-full bg-primary re md:flex-row padding md:items-start">
                <div className="block w-full py-10 space-y-4 md:py-12 md:space-y-6 md:w-3/5">
                    <p className="text-base md:text-lg font-medium !leading-[32px] text-secondary">
                        {desc1}
                    </p>
                    <p className="text-base md:text-lg font-medium !leading-[32px] text-secondary">
                        {desc2}
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start md:gap-8">
                        <Modal1
                            styles={"bg-info text-white"}
                            title={"Download Catalog"}
                            type={"download"}
                            pageType={"main"}
                        />
                        <PdfViewerComponent pdfFile={pdfFile} />
                    </div>
                </div>
                <div className="relative mx-auto w-52 h-52 md:w-60 md:h-60 xl:h-80 xl:w-80 group">
                    <Image
                        alt="image"
                        fill
                        src={categoryImg}
                        className="z-20 object-contain object-center transition ease-linear transform group-hover:scale-125 duration-400"
                    />
                    <div className="absolute top-2 md:top-8 group-hover:bg-info group-hover:scale-80 transition-colors duration-400 ease-in-out z-10 left-2 flex justify-between items-center rounded-full bg-gradient-to-b from-[#13294F56] to-[#6B778C56] shadow-lg blur-sm size-44 md:size-56 xl:size-72 group-hover:bg-gradient-to-b group-hover:from-info group-hover:to-info"></div>
                </div>
            </div>
        </section>
    );
};

export default CategoryHero;
