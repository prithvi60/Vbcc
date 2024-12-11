"use client"
import { useState } from "react";
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
        {/* <h2 className="w-full text-2xl md:text-4xl xl:text-6xl">
          Contact Us
        </h2> */}
        <h2 className="text-5xl font-bold text-info tracking-wider md:text-[64px] xl:text-[80px] w-max">Contact Us</h2>
        {/* <p className="text-base font-medium lg:text-lg text-primary">
          Please fill out the form below, and we will get back to you as soon as
          possible.
          <br />
          * is mandatory form field.
        </p> */}
      </div>
      {/* <form
        action="https://public.herotofu.com/v1/5317bdd0-ae22-11ee-870a-ff8e0d81300a"
        method="post"
        acceptCharset="UTF-8"
        className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-0 md:gap-x-8 md:gap-y-10"
      >
        <div className="block w-full space-y-3 text-primary">
          <label htmlFor="First_Name" className="text-xl md:text-2xl ">
            First Name<span className="text-red-600">*</span>
          </label>
          <input
            required
            name="firstName"
            autoComplete="on"
            value={formData.firstName || ""}
            onChange={handleChange}
            type="text"
            id="firstName"
            placeholder="First Name"
            className="w-full px-4 py-3 mt-1 border rounded-md border-primary focus:border-none focus:ring-0 focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:text-blue-700"
          />
        </div>
        <div className="block w-full space-y-3">
          <label htmlFor="position" className="text-xl md:text-2xl ">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName || ""}
            onChange={handleChange}
            required
            placeholder="Last Name"
            className="w-full px-4 py-3 mt-1 border rounded-md border-primary focus:border-none focus:ring-0 focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:text-blue-700"
          />
        </div>
        <div className="block w-full space-y-3">
          <label htmlFor="email" className="text-xl md:text-2xl ">
            Email<span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="userEmail"
            value={formData.userEmail || ""}
            onChange={handleChange}
            required
            placeholder="Email Id"
            className="w-full px-4 py-3 mt-1 border rounded-md border-primary focus:border-none focus:ring-0 focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:text-blue-700"
          />
        </div>
        <div className="block w-full space-y-3">
          <label htmlFor="phone" className="text-xl md:text-2xl ">
            Phone Number<span className="text-red-600">*</span>
          </label>
          <input
            required
            name="Phone"
            type="text"
            id="phone"
            placeholder="Enter your Phone Number"
            className="w-full px-4 py-3 mt-1 border rounded-md border-primary focus:border-none focus:ring-0 focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:text-blue-700"
          />
        </div>
        <div className="block w-full col-auto space-y-3 md:col-span-2">
          <label htmlFor="message" className="text-xl md:text-2xl ">
            Message
          </label>
          <textarea
            name="Message"
            autoComplete="on"
            type="text"
            id="message"
            rows={"10"}
            placeholder="Type in your Message"
            className="w-full px-4 py-3 mt-1 border rounded-md border-primary focus:border-none focus:ring-0 focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:text-blue-700"
          />
        </div>
        <button
          type="submit"
          className={`block rounded-full px-4 py-2 border border-primary bg-primary hover:bg-info text-center text-base duration-700 delay-75  capitalize w-full md:w-[350px] group`}
        >
          <div className={`h-6 w-full overflow-hidden`}>
            <h4
              className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-white`}
            >
              Contact
            </h4>
            <h4
              className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-white`}
            >
              Contact
            </h4>
          </div>
        </button>
      </form> */}
      <div
        className="relative w-full text-white rounded-lg shadow-xl max-w-7xl md:bg-primary md:p-8"
      >
        <div className="relative z-10 flex flex-col items-center justify-center p-6 md:flex-row md:items-start bg-primary">
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
