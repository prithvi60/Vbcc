"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdOutlineFileDownload,
  MdRemoveRedEye,
} from "react-icons/md";
import Loader from "../Loader";
import { FooterBoxModal } from "@/svg_components/LandingHeroBox";
import { FaPlayCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export const Modal1 = ({ title, styles, type, pageType, page, query }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid">
      <button
        onClick={() => setIsOpen(true)}
        className={`font-semibold w-fit transition-all ${pageType === "main" || title === "Download Catalog"
          ? "shadow-xl hover:scale-110"
          : "shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-lg"
          } flex items-center text-sm md:text-base gap-3 capitalize ${styles} ${title === "DOWNLOAD BROCHURE" ? "p-0" : "px-3 md:px-6 py-3"
          }`}
      >
        {title === "DOWNLOAD BROCHURE" ? (
          <h4 className="px-2 py-2 md:px-6">{title}</h4>
        ) : (
          <h4>{title}</h4>
        )}
        {title === "DOWNLOAD BROCHURE" ? (
          <span className="p-2 border rounded-full border-info">
            <MdOutlineFileDownload className="text-lg md:text-xl" />
          </span>
        ) : (
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
          </>
        )}
      </button>
      <SpringModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        type={type}
        page={page}
        pageType={pageType}
        query={query}
      />
    </div>
  );
};

export const Modal2 = ({ pageType, page, query }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid">
      <button
        onClick={() => setIsOpen(true)}
        type="submit"
        className={`block px-3 md:px-6 py-3 group bg-info hover:bg-primary text-center text-base duration-700 delay-75 font-urbanist mx-auto md:mx-0 capitalize w-max`}
      >
        <div className={`h-6 w-full overflow-hidden`}>
          <h3
            className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-white flex items-center gap-2`}
          >
            Enquire Now
            <span>
              <MdKeyboardDoubleArrowRight className="text-xl text-white" />
            </span>
          </h3>
          <h3
            className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 flex items-center gap-2 text-white`}
          >
            Enquire Now
            <span>
              <MdKeyboardDoubleArrowRight className="text-xl text-white" />
            </span>
          </h3>
        </div>
      </button>
      <SpringModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        type={"enquire"}
        pageType={pageType}
        page={page}
        query={query}
      />
    </div>
  );
};

export const SpringModal = ({
  isOpen,
  setIsOpen,
  type = "",
  page = "",
  pageType = "",
  query,
}) => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    phoneNo: "",
    userEmail: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const downloadKey = "pdfDownloaded";
    localStorage.removeItem(downloadKey);
  }, []);

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

    const emailFormData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      userEmail: formData.userEmail,
      phone: formData.phoneNo,
      message: formData.message,
      page: page,
    };

    const zohoData = {
      data: [
        {
          First_Name: formData.firstName,
          Last_Name: formData.lastName,
          Mobile: formData.phoneNo,
          Email: formData.userEmail,
          Description: formData.message,
          Customer_Type: "New",
          Lead_Status: "New Lead",
          Lead_Source: "Website",
        },
      ],
    };

    try {
      const zohoResponse = await fetch("/api/zoho/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(zohoData),
      });

      if (!zohoResponse.ok) {
        const errorData = await zohoResponse.text();
        throw new Error(`Zoho API Error: ${zohoResponse.status} ${errorData}`);
      }

      const emailResponse = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailFormData),
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.text();
        throw new Error(
          `Email API Error: ${emailResponse.status} ${errorData}`
        );
      }

      const zohoDataResult = await zohoResponse.json();
      const emailDataResult = await emailResponse.json();

      // Check for success in both responses
      if (zohoDataResult && emailDataResult.success) {
        setStatus(false);
        setFormData(initialFormData);
        e.target.reset();

        if (pageType === "main") {
          window.location.href = `/thankyou?category=${query}`;
        } else {
          window.location.href =
            "/denkirodental/dentalfurnace/productline/thankyou";
        }
      } else {
        throw new Error("One or more operations failed.");
      }
    } catch (error) {
      console.error("Error sending emails:", error);
      setStatus(false);
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
          className="fixed inset-0 !z-[9999] grid w-full h-full p-8 overflow-y-scroll cursor-pointer bg-blue-900/50 backdrop-blur place-items-center font-Montserrat"
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
                  {type === "enquire"
                    ? "Let us get back to you"
                    : "Your Brochure Awaits: Just a Quick Form Away!"}
                </h3>
                {type !== "enquire" ? (
                  <ul className="hidden md:block space-y-3 text-sm md:text-base max-h-[120px] md:max-h-fit overflow-scroll no-scrollbar">
                    <li>
                      Our dedicated sales team will get in touch with you to
                      discuss how VBCC can elevate your business practice. Get
                      ready to experience unmatched quality and support
                    </li>
                  </ul>
                ) : (
                  <>
                    {query !== "dental" ? (
                      <p className="hidden text-sm md:text-base md:block">
                        Our dedicated sales team will reach out to you to
                        discuss how VBCC can elevate your business. Get ready to
                        experience unparalleled quality and support!
                      </p>
                    ) : (
                      <p className="hidden text-sm md:text-base md:block">
                        Our dedicated sales team will get in touch with you to
                        discuss how VBCC can elevate your dental practice. Get
                        ready to experience unmatched quality and support!
                      </p>
                    )}
                  </>
                )}
              </div>
              <div className="relative w-full space-y-2 md:w-2/5 ">
                <form
                  onSubmit={handleSubmit}
                  // action="https://public.herotofu.com/v1/8e9daf90-9b5c-11ef-a13f-b56169d4ce0e"
                  // method="post"
                  // accept-charset="UTF-8"
                  className="relative z-10 space-y-2 text-primary md:space-y-4 py-7 md:p-7"
                // onSubmit={() => {
                //   // console.log("submitted");
                //   type !== "enquire" && handleDownload();
                //   type === "enquire"
                //     ? trackConversion(18131396)
                //     : trackConversion(18131380);

                // }}
                >
                  {/* <input
                    type="text"
                    name="Form"
                    defaultValue={type.toUpperCase() || ""}
                    placeholder="Form Type"
                    className="hidden"
                  /> */}
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName || ""}
                    onChange={handleChange}
                    required
                    placeholder="First Name"
                    className="w-full p-2 md:px-4 md:py-3 text-primary bg-white border outline-none border-stroke placeholder:text-[#275CB6] placeholder:font-medium placeholder:text-sm focus:border-secondary focus-visible:shadow-none text-sm md:text-base"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName || ""}
                    onChange={handleChange}
                    required
                    placeholder="Last Name"
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
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex="-1"
                    autoComplete="off"
                    className="hidden"
                  />
                  {type === "enquire" ? (
                    <button
                      type="submit"
                      className={`w-full py-2 text-sm font-semibold text-white transition-opacity md:text-base bg-info hover:opacity-90 disabled:cursor-not-allowed disabled:bg-opacity-80 `}
                    >
                      {status ? <Loader /> : "Enquire"}
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="w-full py-2 text-sm font-semibold text-white transition-opacity md:text-base bg-info hover:opacity-90 disabled:cursor-not-allowed disabled:bg-opacity-80"
                    >
                      {status ? <Loader /> : "Download"}
                    </button>
                  )}
                </form>
                <div className="absolute z-0 hidden lg:block lg:-top-40 lg:-left-0">
                  <FooterBoxModal
                    className={" lg:w-[380px] lg:h-[480px] fill-none"}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const SpringModal2 = ({ isOpen, setIsOpen, video }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 !z-[9999] grid w-full h-full p-8 cursor-pointer bg-blue-900/50 backdrop-blur place-items-center font-Montserrat"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl text-white md:bg-white rounded-lg shadow-xl cursor-default md:max-w-5xl max-h-[520px] md:max-h-fit "
          >
            <div className="relative z-10 flex flex-col items-center justify-center p-6 md:flex-row md:items-start bg-primary">
              <video
                id="video"
                src={video}
                autoPlay
                controls
                controlsList="nodownload"
                className="object-cover object-center w-full h-full rounded-[2rem]"
              ></video>
              <button
                className="absolute z-10 p-2 text-sm text-white bg-red-500 rounded-full cursor-pointer -top-11 md:-top-10 xl:top-0 right-2 xl:-right-14 hover:bg-red-600 animate-pulse"
                onClick={() => setIsOpen(false)}
              >
                <IoMdClose className="text-lg md:text-2xl" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
