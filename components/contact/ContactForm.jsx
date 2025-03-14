"use client"
import { useEffect, useState } from "react";
import Loader from "../Loader";

export const ContactForm = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    job: "",
    phoneNo: "",
    userEmail: "",
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

  useEffect(() => {
    const downloadKey = "pdfDownloaded";
    localStorage.removeItem(downloadKey);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(true);
    // console.log(formData);

    const emailFormData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      jobTitle: formData.job,
      userEmail: formData.userEmail,
      phone: formData.phoneNo,
      message: formData.message,
      page: "",
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
          Lead_Source: "Website"
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
      console.log(zohoDataResult);

      // Check for success in both responses
      if (zohoDataResult && emailDataResult.success) {
        setStatus(false);
        setFormData(initialFormData);
        e.target.reset();
        window.location.href = "/thankyou";
      } else {
        throw new Error("One or more operations failed.");
      }
    } catch (error) {
      console.error("Error sending emails:", error);
      setStatus(false);
    }
  };
  return (
    <section className="px-5 md:px-10 mt-20 py-10 md:py-[60px] lg:px-[60px] lg:py-20 text-warning space-y-10 font-Montserrat">
      <div className="w-full h-full space-y-6">
        <h2 className="text-5xl font-bold text-info tracking-wider md:text-[64px] xl:text-[80px] w-max">Contact Us</h2>
      </div>
      <div
        className="relative w-full mx-auto text-white rounded-lg shadow-xl max-w-7xl md:bg-primary md:p-8"
      >
        <div className="relative z-0 flex flex-col items-center justify-center p-6 md:flex-row md:items-start bg-primary">
          <div className="w-full mt-5 space-y-14 md:w-3/5">
            <h3 className="mb-2 text-2xl font-bold text-info md:text-3xl">
              Let us get back to you
            </h3>
            <ul className="hidden space-y-3 text-sm md:block md:text-base ">
              <li>
                Our dedicated sales team will get in touch with you to
                discuss how VBCC can elevate your business practice. Get
                ready to experience unmatched quality and support
              </li>
            </ul>
          </div>
          <div className="relative w-full space-y-2 md:w-2/5 ">
            <form
              onSubmit={handleSubmit}
              className="relative z-10 space-y-2 text-primary md:space-y-4 py-7 md:p-7"
            >
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
                type="text"
                name="job"
                value={formData.job || ""}
                onChange={handleChange}
                required
                placeholder="Job Title"
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
              <button
                type="submit"
                className={`w-full py-2 text-sm font-semibold text-white transition-opacity md:text-base bg-info hover:opacity-90 disabled:cursor-not-allowed disabled:bg-opacity-80 `}
              >
                {status ? <Loader /> : "Contact"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
