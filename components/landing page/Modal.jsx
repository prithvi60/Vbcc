"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";

export const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="grid px-4 py-64 bg-slate-900 place-content-center">
            <button
                onClick={() => setIsOpen(true)}
                className="px-4 py-2 font-medium text-white transition-opacity rounded bg-gradient-to-r from-violet-600 to-indigo-600 hover:opacity-90"
            >
                Open Modal
            </button>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

const SpringModal = ({ isOpen, setIsOpen }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 z-50 grid p-8 overflow-y-scroll cursor-pointer bg-slate-900/20 backdrop-blur place-items-center font-Montserrat"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-xl overflow-scroll text-white md:bg-white rounded-lg shadow-xl cursor-default md:p-8 md:max-w-5xl max-h-[520px] md:max-h-fit no-scrollbar"
                    >
                        <div className="relative z-10 flex flex-col items-center justify-center p-6 md:flex-row bg-primary">
                            <div className="w-full md:w-3/5">
                                <h3 className="mb-2 text-2xl font-bold md:text-3xl">
                                    Your Brochure Awaits: Just a Quick Form Away!
                                </h3>
                                <ul className="space-y-3 list-disc list-inside max-h-[120px] md:max-h-fit overflow-scroll no-scrollbar">
                                    <li>
                                        Access comprehensive specifications for each furnace model.
                                    </li>
                                    <li>
                                        Easily compare features to find the perfect fit for your
                                        needs.
                                    </li>
                                    <li>
                                        Discover key performance metrics for optimized operations.
                                    </li>
                                    <li>
                                        Explore available customization options for each product.
                                    </li>
                                    <li>Enjoy an easy-to-navigate design for quick reference.</li>
                                </ul>
                            </div>
                            <div className="relative w-full space-y-2 md:w-2/5">
                                {/* <svg
                                    className="absolute top-0 left-0 w-[80vw] h-[20vh] md:w-[40vw] md:h-[25vh] lg:w-[30vw] lg:h-[20vh]"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 200"
                                >
                                    <path
                                        d="M10.3867 60.4545V1H307V116.636"
                                        stroke="#F06F38"
                                        stroke-width="2"
                                    />
                                    <path
                                        d="M1 72.4545V13H297.614V128.636"
                                        stroke="#F06F38"
                                        stroke-width="2"
                                    />
                                </svg> */}
                                <form action="" method="post" className="space-y-2 md:space-y-4 p-7">
                                    <input
                                        type="text"
                                        name="FirstName"
                                        placeholder="First User Name"
                                        className="w-full p-2 md:px-4 md:py-3 text-primary bg-white border outline-none border-stroke placeholder:text-[#275CB6] placeholder:font-medium placeholder:text-sm focus:border-secondary focus-visible:shadow-none"
                                    />
                                    <input
                                        type="text"
                                        name="LastName"
                                        placeholder="Last User Name"
                                        className="w-full p-2 md:px-4 md:py-3 text-primary bg-white border outline-none border-stroke placeholder:text-[#275CB6] placeholder:font-medium placeholder:text-sm focus:border-secondary focus-visible:shadow-none"
                                    />
                                    <input
                                        type="email"
                                        name="Email"
                                        required
                                        placeholder="Email Id"
                                        className="w-full p-2 md:px-4 md:py-3 text-primary bg-white border outline-none border-stroke placeholder:text-[#275CB6] placeholder:font-medium placeholder:text-sm focus:border-secondary focus-visible:shadow-none"
                                    />
                                    <input
                                        type="text"
                                        name="Phone"
                                        required
                                        placeholder="Phone Number"
                                        className="w-full p-2 md:px-4 md:py-3 text-primary bg-white border outline-none border-stroke placeholder:text-[#275CB6] placeholder:font-medium placeholder:text-sm focus:border-secondary focus-visible:shadow-none"
                                    />
                                    <textarea
                                        type="text"
                                        name="Message"
                                        required
                                        placeholder="Message"
                                        className="w-full p-2 md:px-4 md:py-3 text-primary bg-white border outline-none border-stroke placeholder:text-[#275CB6] placeholder:font-medium placeholder:text-sm focus:border-secondary focus-visible:shadow-none"
                                    />
                                    <button
                                        type="submit"
                                        onClick={() => setIsOpen(false)}
                                        className="w-full py-2 font-semibold text-white transition-opacity bg-info hover:opacity-90"
                                    >
                                        Download
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

{
    /* <svg className="w-full h-[120px]" viewBox="0 0 308 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.3867 60.4545V1H307V116.636" stroke="#F06F38" stroke-width="2" />
                                    <path d="M1 72.4545V13H297.614V128.636" stroke="#F06F38" stroke-width="2" />
                                </svg> */
}
