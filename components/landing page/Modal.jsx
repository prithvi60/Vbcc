"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MdKeyboardDoubleArrowRight, MdOutlineFileDownload, MdRemoveRedEye } from "react-icons/md";

export const Modal = ({ title, styles, type }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="grid px-4 py-6">
            <button
                onClick={() => setIsOpen(true)}
                className={` font-semibold w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-lg flex items-center text-sm md:text-base gap-3 capitalize ${styles} ${title === "DOWNLOAD BROCHURE" ? "p-0" : "px-6 py-2"}`}
            >

                {title === "DOWNLOAD BROCHURE" ? (<h4 className="px-2 py-2 md:px-6">{title}</h4>) : (<h4>{title}</h4>)}
                {title === "DOWNLOAD BROCHURE" ? (<span className="p-2 border rounded-full border-info">
                    <MdOutlineFileDownload className="text-lg md:text-xl" />
                </span>) : (
                    <>
                        {type === "download" ? (
                            <span>
                                <MdOutlineFileDownload className="text-xl" />
                            </span>
                        ) : type === "view" ? (
                            <span>
                                <MdRemoveRedEye className="text-xl" />
                            </span>
                        ) : (
                            <span>
                                <MdKeyboardDoubleArrowRight className="text-xl" />
                            </span>
                        )}
                    </>)}


            </button>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

const SpringModal = ({ isOpen, setIsOpen }) => {
    const initialFormData = {
        firstName: "",
        lastName: "",
        phoneNo: "",
        userEmail: "",
        clientEmail: "",
        subject: "",
        message: "",
    };

    const [formData, setFormData] = useState(initialFormData);
    const [status, setStatus] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(true);
        // console.log(formData);

        const emailFormData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            userEmail: formData.userEmail,
            phone: formData.phoneNo,
            clientEmail: "Prithvi@webibee.com",
            subject: `New Form Submission`,
            message: formData.message,
        };

        try {
            const response = await fetch("/api/sendMail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(emailFormData),
            });

            if (!response.ok) {
                const errorData = await response.text();
                throw new Error(`Error: ${response.status} ${errorData}`);
            }

            const data = await response.json();

            if (data.success) {
                setStatus(false);
                // toast.success(
                //     "Thank you for submitting your application. We will revert back shortly.",
                //     {
                //         position: "top-right",
                //         duration: 3000,
                //         style: {
                //             border: "1px solid #65a34e",
                //             padding: "16px",
                //             color: "#65a34e",
                //         },
                //         iconTheme: {
                //             primary: "#65a34e",
                //             secondary: "#FFFAEE",
                //         },
                //     }
                // );
                setFormData(initialFormData);
                e.target.reset();
                // alert("successful")
            }
        } catch (error) {
            console.error("Error sending emails:", error);
            setStatus(false);
            // toast.error("We are unable to receive your info. Please try again.", {
            //     position: "top-right",
            //     duration: 3000,
            //     style: {
            //         border: "1px solid #EB1C23",
            //         padding: "16px",
            //         color: "#EB1C23",
            //     },
            //     iconTheme: {
            //         primary: "#EB1C23",
            //         secondary: "#FFFAEE",
            //     },
            // });
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 z-[999] grid p-8 overflow-y-scroll cursor-pointer bg-blue-900/50 backdrop-blur place-items-center font-Montserrat"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-xl overflow-scroll text-white md:bg-white rounded-lg shadow-xl cursor-default md:p-8 md:max-w-5xl max-h-[520px] md:max-h-fit no-scrollbar"
                    >
                        <div className="relative z-10 flex flex-col items-center justify-center p-6 md:flex-row md:items-start bg-primary">
                            <div className="w-full mt-5 space-y-14 md:w-3/5">
                                <h3 className="mb-2 text-2xl font-bold text-info md:text-3xl">
                                    Your Brochure Awaits: Just a Quick Form Away!
                                </h3>
                                <ul className="space-y-3 text-sm md:text-base list-disc list-inside max-h-[120px] md:max-h-fit overflow-scroll no-scrollbar">
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
                                <form
                                    onSubmit={handleSubmit}
                                    method="post"
                                    className="space-y-2 text-primary md:space-y-4 py-7 md:p-7"
                                >
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName || ""}
                                        onChange={handleChange}
                                        required
                                        placeholder="First User Name"
                                        className="w-full p-2 md:px-4 md:py-3 text-primary bg-white border outline-none border-stroke placeholder:text-[#275CB6] placeholder:font-medium placeholder:text-sm focus:border-secondary focus-visible:shadow-none text-sm md:text-base"
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName || ""}
                                        onChange={handleChange}
                                        required
                                        placeholder="Last User Name"
                                        className="w-full p-2 md:px-4 md:py-3 text-primary bg-white border outline-none border-stroke placeholder:text-[#275CB6] placeholder:font-medium placeholder:text-sm focus:border-secondary focus-visible:shadow-none text-sm md:text-base"
                                    />
                                    <input
                                        type="email"
                                        name="userEmail"
                                        value={formData.userEmail || ""}
                                        onChange={handleChange}
                                        required
                                        placeholder="Email Id"
                                        className="w-full p-2 md:px-4 md:py-3 text-primary bg-white border outline-none border-stroke placeholder:text-[#275CB6] placeholder:font-medium placeholder:text-sm focus:border-secondary focus-visible:shadow-none text-sm md:text-base"
                                    />
                                    <input
                                        type="text"
                                        name="phoneNo"
                                        value={formData.phoneNo || ""}
                                        onChange={handleChange}
                                        required
                                        placeholder="Phone Number"
                                        className="w-full p-2 md:px-4 md:py-3 text-primary bg-white border outline-none border-stroke placeholder:text-[#275CB6] placeholder:font-medium placeholder:text-sm focus:border-secondary focus-visible:shadow-none text-sm md:text-base"
                                    />
                                    <textarea
                                        type="text"
                                        name="message"
                                        value={formData.message || ""}
                                        onChange={handleChange}
                                        required
                                        placeholder="Message"
                                        className="w-full p-2 md:px-4 md:py-3 text-primary bg-white border outline-none border-stroke placeholder:text-[#275CB6] placeholder:font-medium placeholder:text-sm focus:border-secondary focus-visible:shadow-none text-sm md:text-base"
                                    />
                                    <button
                                        type="submit"
                                        disabled={status ? true : false}
                                        onClick={() => status && setIsOpen(false)}
                                        className={`w-full py-2 text-sm font-semibold text-white transition-opacity md:text-base bg-info hover:opacity-90 disabled:cursor-not-allowed disabled:bg-opacity-80 ${status && "animate-pulse"
                                            }`}
                                    >
                                        {status ? "Downloading..." : "Download"}
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