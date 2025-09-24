"use client"
import { useEffect, useState } from "react";
import Loader from "../Loader";
import Image from "next/image";

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
      const zohoResponse = await fetch("/api/zoho/contacts", {
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
      // console.log(zohoDataResult);

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
    <section className="mt-20 space-y-10 text-warning font-Montserrat ">
      <div className="w-full h-full space-y-6 px-5 md:px-10 pt-10 md:pt-[60px] lg:px-[60px] lg:pt-20">
        <h1 className="text-5xl font-bold text-info tracking-wider md:text-[64px] xl:text-[80px] w-max">Contact Us</h1>
      </div>
      <div
        className="relative w-full flex flex-col pb-10 md:pb-[60px] lg:pb-20 lg:flex-row justify-between text-white rounded-lg h-full lg:h-[85vh]"
      >
        <div className="relative flex items-center w-full h-full lg:w-2/5 lg:block">
          <div className="w-3/5 md:w-3/5 h-60 md:h-96 lg:w-full lg:h-[85vh] relative">
            <Image fill alt="banner image" src={"/Banner.jpg"} className="object-cover object-center" />
          </div>
          <h2 className="absolute block mb-2 text-xl font-extrabold -translate-y-1/2 right-5 md:right-32 top-1/2 lg:hidden w-max text-primary md:text-3xl">
            Let us get back to you
          </h2>
        </div>
        <div className="z-0 flex flex-col items-center justify-center w-full gap-5 lg:gap-10 lg:justify-end lg:w-4/5 lg:-translate-y-1/2 lg:absolute lg:right-5 lg:flex-row lg:top-1/2">
          <div className="w-full p-2 mt-5 space-y-5 lg:w-2/5 backdrop-blur-sm">
            <h2 className="hidden mb-2 text-2xl font-extrabold lg:block w-max text-info md:text-3xl">
              Let us get back to you
            </h2>
            <ul className="block mx-auto space-y-3 text-sm font-bold text-center lg:text-start md:text-base text-primary">
              <li>
                Our dedicated sales team will get in touch with you to
                discuss how VBCC can elevate your business practice. Get
                ready to experience unmatched quality and support
              </li>
            </ul>
          </div>
          <div className="relative w-full max-w-lg px-5 space-y-2 md:px-0">
            <form
              onSubmit={handleSubmit}
              className="relative z-10 w-full space-y-2 rounded-[3rem] text-primary md:space-y-4 px-6 lg:px-12 py-7 bg-primary"
            >
              <div className="flex items-center gap-4">
                <label htmlFor="firstName" className="w-[30%] hidden lg:block text-sm font-semibold md:w-1/4 md:text-base font-Montserrat text-info shrink-0">First Name :</label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName || ""}
                  onChange={handleChange}
                  required
                  placeholder="First Name :"
                  className="w-full p-2 text-sm bg-white border rounded-full outline-none md:px-4 md:py-3 text-primary border-stroke placeholder:opacity-100 lg:placeholder:opacity-0 placeholder:text-info placeholder:font-medium placeholder:text-sm focus:border-secondary focus-visible:shadow-none md:text-base"
                />
              </div>
              <div className="flex items-center gap-4">
                <label htmlFor="lastName" className="w-[30%] hidden lg:block text-sm font-semibold md:w-1/4 md:text-base font-Montserrat text-info shrink-0">Last Name :</label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName || ""}
                  onChange={handleChange}
                  required
                  placeholder="Last Name :"
                  className="w-full p-2 text-sm bg-white border rounded-full outline-none md:px-4 md:py-3 text-primary border-stroke placeholder:opacity-100 lg:placeholder:opacity-0 placeholder:text-info placeholder:font-medium placeholder:text-sm focus:border-secondary focus-visible:shadow-none md:text-base"
                />
              </div>
              {/* <div className="flex items-center gap-4">
                <label htmlFor="job" className="text-sm font-semibold md:text-base font-Montserrat text-info shrink-0">Job :</label>
              <input
              id="job"
                type="text"
                name="job"
                value={formData.job || ""}
                onChange={handleChange}
                required
                placeholder="Job Title"
                className="w-full p-2 text-sm bg-white border outline-none md:px-4 md:py-3 text-primary border-stroke placeholder:opacity-100 lg:placeholder:opacity-0 placeholder:text-info placeholder:font-medium placeholder:text-sm focus:border-secondary focus-visible:shadow-none md:text-base"
              />
              </div> */}
              <div className="flex items-center gap-4">
                <label htmlFor="userEmail" className="w-[30%] hidden lg:block text-sm font-semibold md:w-1/4 md:text-base font-Montserrat text-info shrink-0">Email ID :</label>
                <input
                  id="userEmail"
                  type="email"
                  name="userEmail"
                  value={formData.userEmail || ""}
                  onChange={handleChange}
                  required
                  placeholder="Email Id :"
                  className="w-full p-2 text-sm bg-white border rounded-full outline-none md:px-4 md:py-3 text-primary border-stroke placeholder:opacity-100 lg:placeholder:opacity-0 placeholder:text-info placeholder:font-medium placeholder:text-sm focus:border-secondary focus-visible:shadow-none md:text-base"
                />
              </div>
              <div className="flex items-center gap-4">
                <label htmlFor="phoneNo" className="w-[30%] hidden lg:block text-sm font-semibold md:w-1/4 md:text-base font-Montserrat text-info shrink-0">Phone No :</label>
                <input
                  id="phoneNo"
                  type="text"
                  name="phoneNo"
                  value={formData.phoneNo || ""}
                  onChange={handleChange}
                  required
                  placeholder="Phone Number :"
                  className="w-full p-2 text-sm bg-white border rounded-full outline-none md:px-4 md:py-3 text-primary border-stroke placeholder:opacity-100 lg:placeholder:opacity-0 placeholder:text-info placeholder:font-medium placeholder:text-sm focus:border-secondary focus-visible:shadow-none md:text-base"
                />
              </div>
              <div className="flex items-center gap-4">
                <label htmlFor="message" className="w-[30%] hidden lg:block text-sm font-semibold md:w-1/4 md:text-base font-Montserrat text-info shrink-0">Message :</label>
                <textarea
                  id="message"
                  type="text"
                  name="message"
                  value={formData.message || ""}
                  onChange={handleChange}
                  required
                  rows={2}
                  placeholder="Message :"
                  className="w-full p-2 text-sm bg-white border rounded-full outline-none md:px-4 md:py-3 text-primary border-stroke placeholder:opacity-100 lg:placeholder:opacity-0 placeholder:text-info placeholder:font-medium placeholder:text-sm focus:border-secondary focus-visible:shadow-none md:text-base"
                />
              </div>
              <input
                type="text"
                name="_gotcha"
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
              />
              <div className="w-full text-center">
                <button
                  role="button"
                  type="submit"
                  className={`w-max px-8 rounded-full py-2 text-base font-semibold text-white transition-opacity md:text-xl bg-info hover:opacity-90 disabled:cursor-not-allowed disabled:bg-opacity-80 `}
                >
                  {status ? <Loader /> : "Contact"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
