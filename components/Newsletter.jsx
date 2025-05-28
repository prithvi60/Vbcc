"use client"
import Image from "next/image";
import { useState } from "react";
import Loader from "./Loader";

const Newsletter = () => {
  const initialFormData = {
    lastName: "",
    userEmail: "",
    companyName: "Dummy Org _Newsletter"
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

    const zohoData = {
      data: [
        {
          Last_Name: formData.lastName,
          Email: formData.userEmail,
          Company: formData.companyName,
          Customer_Type: "New",
          Lead_Status: "New Lead",
          Lead_Source: "Newsletter"
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

      const zohoDataResult = await zohoResponse.json();

      // Check for success in both responses
      if (zohoDataResult) {
        setStatus(false);
        setFormData(initialFormData);
        e.target.reset();
      } else {
        throw new Error("operation failed.");
      }
    } catch (error) {
      console.error("Error sending response:", error);
      setStatus(false);
    }
  };
  return (
    <section className="relative z-auto text-white padding font-Montserrat">
      <div className="relative border-2 before:absolute before:h-2 before:bg-info before:w-full before:-top-2.5 before:left-0 md:rounded-none border-info flex flex-col md:flex-row">
        <div className="relative w-full h-[480px]">
          <Image
            alt="background image"
            title="background image"
            src="https://cdn.webibee.com/vbcc/homepage/newsletter-bg.png"
            fill
            className="z-0 object-cover object-center"
          />
          <div className="absolute w-full h-full bg-[#31394ae5] z-0"></div>
        </div>
        {/* bg-gradient-to-tr from-[#374154B2] via-[#0D2143B2] to-[#0D2143B2] */}
        <div className="absolute top-0 left-0 z-0 px-5 py-10 md:p-10 2xl:p-12 w-full lg:w-[65%]">
          <div className="text-center space-y-9 lg:text-left">
            <h2 className="text-2xl md:text-[32px] xl:text-[40px] 2xl:text-5xl font-semibold relative mx-auto lg:m-0 w-max">
              Get the Latest <span className="text-info">Updates</span>
              <div className="absolute -bottom-2 left-0 h-0.5 mt-3 w-72 bg-info"></div>
            </h2>
            <p className="w-full text-sm md:text-xl 2xl:text-2xl">
              Stay connected for the latest updates in cutting edge technology,
              launches of products, and valuable content revisions.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full mt-6 sm:text-center lg:text-left"
          >
            <h5 className="mb-3 text-sm font-semibold md:text-base xl:text-lg 2xl:text-xl">
              Subscribe to our <span className="text-info">Newsletter!</span>
            </h5>
            <div className="relative flex flex-col justify-center py-2 mb-4 space-y-4 lg:justify-start">
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName || ""}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="bg-[#D9D9D933] rounded-full py-3 px-3  placeholder:text-secondary !border-none !outline-none w-full md:max-w-96 text-white text-base md:text-lg"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="userEmail"
                  value={formData.userEmail || ""}
                  onChange={handleChange}
                  required
                  placeholder="Email Id"
                  className="bg-[#D9D9D933] rounded-full py-3 px-3  placeholder:text-secondary !border-none !outline-none w-full md:max-w-96 text-white text-base md:text-lg"

                />
              </div>
              <button
                type="submit"
                className={`mx-auto lg:m-0 block rounded-full px-4 py-3 group bg-info hover:bg-primary text-base duration-700 delay-75 capitalize w-full md:w-max`}
              >
                <div className={`h-6 w-full overflow-hidden`}>
                  <h3
                    className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-white`}
                  >
                    {status ? <Loader /> : "Subscribe"}
                  </h3>
                  <h3
                    className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-white`}
                  >
                    {status ? <Loader /> : "Subscribe"}
                  </h3>
                </div>
              </button>
            </div>
          </form>
        </div>
        <div className="absolute z-auto hidden w-full lg:block h-52 lg:max-w-96 top-16 right-8 xl:right-20 lg:h-80">
          <Image
            alt="background image"
            title="background image"
            src="https://cdn.webibee.com/vbcc/homepage/newsletter-1.png"
            fill
            className="z-0 object-cover object-center"
          />
          <div className="absolute left-0 z-auto w-full h-3 -top-[68px] xl:-top-[64px]">
            <Image
              alt="svg"
              title="svg"
              src={"/svg 1.svg"}
              fill
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
