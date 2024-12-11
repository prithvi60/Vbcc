"use client";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const ModalForSearch = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="grid">
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 bg-white rounded-lg text-primary"
            >
                <IoSearch className="text-xl md:text-2xl" />
            </button>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default ModalForSearch;

const SpringModal = ({ isOpen, setIsOpen }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 !z-[9999] grid w-full h-full p-8 overflow-y-scroll cursor-pointer bg-blue-900/50 backdrop-blur place-items-center font-Montserrat"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative z-[999] w-full max-w-xl text-white rounded-lg shadow-xl cursor-default md:bg-primary md:p-8 md:max-w-3xl"
                    >
                        <div className="flex items-center gap-2">
                            <div className="block w-full text-primary">
                                <input
                                    required
                                    name="search"
                                    // value={formData.firstName || ""}
                                    // onChange={handleChange}
                                    type="text"
                                    placeholder="Search Product Name"
                                    className="w-full px-4 py-3 mt-1 border rounded-md border-primary focus:border-none focus:ring-0 focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:text-blue-700"
                                />
                            </div>
                            <button className="p-2.5 md:px-8 md:py-3.5 text-base font-semibold tracking-wider bg-info rounded-md text-white">
                                Search
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
