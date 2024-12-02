"use client";
import { IoMdClose } from "react-icons/io";
import React, { useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import FileViewer from "react-file-viewer";

const PdfViewer = ({ pdfFile }) => {
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [pdf] = useState(pdfFile);

    const handleButtonClick = () => {
        setIsViewerOpen(true);
    };
    return (
        <>
            <button
                type="submit"
                onClick={handleButtonClick}
                className={`block px-3 md:px-6 py-3 group bg-white hover:bg-info text-center text-base duration-700 delay-75 font-urbanist mx-auto md:mx-0 capitalize w-max`}
            >
                <div className={`h-6 w-full overflow-hidden`}>
                    <h3
                        className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-primary flex items-center gap-2`}
                    >
                        view online
                        <span>
                            <MdRemoveRedEye className="text-xl text-primary" />
                        </span>
                    </h3>
                    <h3
                        className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 flex items-center gap-2 text-white`}
                    >
                        view online
                        <span>
                            <MdRemoveRedEye className="text-xl text-white" />
                        </span>
                    </h3>
                </div>
            </button>
            {isViewerOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setIsViewerOpen(false)}
                >
                    <div
                        className="relative w-full max-w-xl p-5 bg-white rounded-lg shadow-lg md:max-w-4xl 2xl:max-w-6xl h-4/5 !thumbnail"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute z-10 p-2 text-sm text-white bg-red-500 rounded-full cursor-pointer -top-11 md:-top-14 xl:top-0 right-6 xl:-right-20 hover:bg-red-600 animate-pulse"
                            onClick={() => setIsViewerOpen(false)}
                        >
                            <IoMdClose className="text-lg md:text-2xl" />
                        </button>
                        <div className="flex items-center justify-center w-full h-full overflow-hidden">
                            <div className="w-full h-full">
                                <FileViewer
                                    fileType="pdf"
                                    filePath={pdf}
                                    onError={(e) => console.error("Error displaying file:", e)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PdfViewer;
