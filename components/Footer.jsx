"use client";
import othersData from "@/libs/others.json";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { useState } from "react";
import { FaInstagram, FaPhone, FaRegEnvelope } from "react-icons/fa";
import {
  FaLinkedin,
  FaLocationDot,
  FaXTwitter,
} from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Loader from "./Loader";
import { FooterBox, FooterBoxModal } from "@/svg_components/LandingHeroBox";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { getAccessToken } from "@/libs/Functions";

const initialFormData = {
  firstName: "",
  position: "",
  phoneNo: "",
  userEmail: "",
  page: "",
  message: "",
};


const Footer = () => {
  const [Copied, setCopied] = useState(false);
  const [Copied2, setCopied2] = useState(false);
  const [Copied3, setCopied3] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState(false);
  const path = usePathname()
  const code = ""

  // const getData = getAccessToken()


  const URI = path.split("/").filter(x => x)
  const filteredURI = URI[URI.length - 1] || "Home"


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
      userEmail: formData.userEmail,
      phone: formData.phoneNo,
      page: filteredURI,
      message: formData.message,
    };

    // console.log(emailFormData);

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
        window.location.href = "/thankyou";
        setFormData(initialFormData);
        e.target.reset();
      }
    } catch (error) {
      console.error("Error sending emails:", error);
      setStatus(false);
    }
  };

  const handlequote = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setInterval(() => {
      setCopied(false);
    }, 3000);
  };
  const handleinquire = (text) => {
    navigator.clipboard.writeText(text);
    setCopied2(true);
    setInterval(() => {
      setCopied2(false);
    }, 3000);
  };
  const handleinquire2 = (text) => {
    navigator.clipboard.writeText(text);
    setCopied3(true);
    setInterval(() => {
      setCopied3(false);
    }, 3000);
  };
  return (

    <footer className="relative z-auto flex flex-col w-full h-full text-white md:flex-row border-t-3 border-info font-Montserrat">
      <div className="relative block w-full h-full p-5 space-y-12 md:p-8 md:w-2/5 xl:w-1/5">
        <div className="block">
          <div className="relative w-64 h-20 mx-auto my-14 md:my-4">
            <Image
              alt="VBCC Logo"
              src="/VBCC - Logo.svg"
              fill
              className="object-cover object-center"
            />
            <div className="absolute -top-44 -left-10 md:-left-5 md:-top-24 lg:-top-44 lg:-left-9">
              <FooterBoxModal className={"w-[320px] h-[420px] md:w-[280px] md:h-[380px] lg:w-[310px] lg:h-[410px] fill-none"} />
            </div>
          </div>
          <p className="w-4/5 mx-auto text-xs font-medium text-primary">
            Stay connected for the latest updates in cutting edge technology,
            launches of products, and valuable content revisions.
          </p>
          <div className="absolute top-0 left-0 w-full h-2">
            <Image
              alt="svg"
              src={"/svg 1.svg"}
              fill
              className="object-contain object-center"
            />
          </div>
        </div>
        <div className="block w-full space-y-4 md:w-auto lg:space-y-7 xl:space-y-3 text-primary">
          <h4 className="text-xl font-medium tracking-wider text-center">FOLLOW US</h4>
          <ul className="flex items-center justify-center gap-3 ">
            <li>
              <Link href={"https://www.linkedin.com/company/vbcc-hti/"} className="hover:animate-pulse " target="_blank">
                <FaLinkedin className="text-lg md:text-2xl" />
              </Link>
            </li>
            <li>
              <Link href={"https://www.facebook.com/vbcc.hti/"} className="hover:animate-pulse " target="_blank">
                <FaFacebookF className="text-lg md:text-2xl" />
              </Link>
            </li>
            <li>
              <Link href={"https://x.com/vbcc_hti"} className="hover:animate-pulse " target="_blank">
                <FaXTwitter className="text-lg md:text-2xl" />
              </Link>
            </li>
            <li>
              <Link href={"https://www.instagram.com/vbcc_hti/"} className="hover:animate-pulse " target="_blank">
                <FaInstagram className="text-lg md:text-2xl" />
              </Link>
            </li>
            <li>
              <Link href={"www.youtube.com/@vbcc_hti"} className="hover:animate-pulse " target="_blank">
                <FaYoutube className="text-lg md:text-2xl" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="block w-full space-y-3 text-center text-primary md:space-y-5">
          <h4 className="flex items-center justify-center gap-3 text-base font-medium tracking-wider uppercase md:text-xl">
            <span className="">
              <FaLocationDot className="text-lg" />
            </span>
            Our Location
          </h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248852.35523221854!2d80.20816985922144!3d12.951488698204182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525de4f794ee29%3A0x8fd9b1da364d7215!2sVBCC%20High%20Temperature%20Instruments%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1730722548513!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-64"
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full grid-cols-1 px-5 pt-10 pb-5 md:justify-start md:items-start lg:grid md:pb-3 bg-primary md:px-10 lg:w-3/5 xl:w-4/5 xl:px-16 lg:grid-cols-2 xl:grid-cols-3 gap-7 xl:gap-4">
        <div className="relative flex flex-col h-auto items-center w-full space-y-5 after:w-56 after:h-0.5 after:bg-white after:-bottom-3.5 after:left-1/2 after:absolute after:-translate-x-1/2 md:after:hidden md:justify-between md:flex-row md:w-max md:block lg:space-y-7">
          <h4 className="text-xl font-medium tracking-wider text-center lg:text-left">
            QUICK LINKS
          </h4>
          <div className="flex items-start text-sm gap-7 xl:gap-16 ">
            <div className="flex flex-col items-start gap-3">
              {othersData.footerLinks1.map((list, id) => (
                <Link
                  passHref
                  key={id}
                  href={list.href}
                  className="rounded-lg text-secondary after:h-0.5 after:w-0 after:bg-info after:block after:transition-all hover:after:h-0.5 hover:after:w-full hover:after:bg-info hover:after:block hover:after:ease-linear hover:after:duration-[3000]"
                >
                  {list.title}
                </Link>
              ))}
            </div>
            <div className="flex flex-col items-start gap-3">
              {othersData.footerLinks2.map((list, id) => (
                <Link
                  key={id}
                  passHref
                  href={list.href}
                  className="rounded-lg text-secondary after:h-0.5 after:w-0 after:bg-info after:block after:transition-all hover:after:h-0.5 hover:after:w-full hover:after:bg-info hover:after:block hover:after:ease-linear hover:after:duration-[3000]"
                >
                  {list.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="relative block after:w-56 after:h-0.5 after:bg-white after:-bottom-3.5 after:left-1/2 after:absolute after:-translate-x-1/2 md:after:hidden w-full space-y-3 md:space-y-5 xl:w-max">
          <h4 className="w-full font-medium tracking-wider text-center md:text-xl lg:text-center xl:w-max">CONTACT INFO</h4>
          <div className="flex items-center justify-center lg:items-start lg:justify-start gap-2.5 lg:gap-5 w-full xl:w-max">
            <BiPhoneCall className="text-lg text-white md:text-3xl" />
            <div className="hidden md:block">
              <ConnectComponent
                text={"+91 73388 94199"}
                copied={Copied2}
                handleClick={handleinquire}
              />
            </div>
            <a href="tel:+917338894199" className="flex items-center md:hidden">
              <ConnectComponent
                text={"+91 73388 94199"}
                copied={Copied2}
                handleClick={handleinquire}
              />
            </a>
          </div>
          <div className="flex items-center justify-center lg:items-start lg:justify-start gap-2.5 lg:gap-5 w-full xl:w-max">
            <MdOutlineBusinessCenter className="text-lg text-white md:text-3xl" />
            <div className="hidden md:block">
              <ConnectComponent
                text={"+91 9600478315"}
                copied={Copied3}
                handleClick={handleinquire2}
              />
            </div>
            <a href="tel:+919600478315" className="flex items-center md:hidden">
              <ConnectComponent
                text={"+91 9600478315"}
                copied={Copied3}
                handleClick={handleinquire2}
              />
            </a>
          </div>
          <div className="flex items-center justify-center lg:items-start lg:justify-start gap-2.5 lg:gap-5 w-full xl:w-max">
            <FaRegEnvelope className="text-lg text-white md:text-2xl" />
            {/* <ConnectComponent
              text={"sales@vbccinstruments.com"}
              copied={Copied}
              handleClick={handlequote}
            /> */}
            <a href="mailto:sales@vbccinstruments.com" className="flex items-center">
              <ConnectComponent
                text={"sales@vbccinstruments.com"}
                copied={Copied}
                handleClick={handlequote}
              />
            </a>
          </div>
          <div className="flex items-center justify-center md:items-start lg:justify-start gap-2.5 lg:gap-5 w-full xl:w-3/5">
            <FaLocationDot className="text-lg text-white md:text-2xl" />
            <p className="text-sm !leading-6 w-[70%">
              VBCC HIGH TEMPERATURE INSTRUMENTS PRIVATE LTD
              <br />
              207, 3rd Link Road, Nehru Nagar Industrial Estate,
              <br />
              Kottivakkam,Chennai,
              Tamil Nadu 600041
            </p>
          </div>
        </div>
        <div className="relative z-auto block w-full space-y-3 lg:col-span-2 md:space-y-5 xl:space-y-8 xl:col-auto md:w-[320px]">
          <h4 className="text-xl font-medium tracking-wider text-center uppercase lg:text-start">
            LET’S WORK TOGETHER
          </h4>
          <form
            className="relative z-10 block pt-5 space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="block w-full space-y-1.5">
              <input
                required
                name="firstName"
                autoComplete="on"
                value={formData.firstName || ""}
                onChange={handleChange}
                type="text"
                id="firstName"
                placeholder="Name"
                className="w-full px-4 py-3 mt-1 font-medium font-Montserrat focus:ring-2 focus:ring-info focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:text-blue-700 placeholder:font-Montserrat text-primary"
              />
            </div>
            <div className="block w-full space-y-1.5">
              <input
                autoComplete="on"
                type="text"
                name="position"
                value={formData.position || ""}
                onChange={handleChange}
                id="position"
                placeholder="Job title"
                className="w-full px-4 py-3 mt-1 font-medium font-Montserrat focus:ring-2 focus:ring-info focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:text-blue-700 placeholder:font-Montserrat text-primary"
              />
            </div>
            <div className="block w-full space-y-1.5">
              <input
                required
                name="userEmail"
                value={formData.userEmail || ""}
                onChange={handleChange}
                autoComplete="on"
                type="email"
                id="userEmail"
                placeholder="Email"
                className="w-full px-4 py-3 mt-1 font-medium font-Montserrat focus:ring-2 focus:ring-info focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:text-blue-700 placeholder:font-Montserrat text-primary"
              />
            </div>
            <div className="block w-full space-y-1.5">
              <input
                required
                name="phoneNo"
                type="text"
                value={formData.phoneNo || ""}
                onChange={handleChange}
                id="phoneNo"
                placeholder="Phone Number"
                className="w-full px-4 py-3 mt-1 font-medium font-Montserrat focus:ring-2 focus:ring-info focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:text-blue-700 placeholder:font-Montserrat text-primary"
              />
            </div>
            <div className="block w-full col-auto space-y-1.5 md:col-span-2">
              <textarea
                name="message"
                autoComplete="on"
                value={formData.message || ""}
                onChange={handleChange}
                type="text"
                id="message"
                rows={"4"}
                placeholder="Message"
                className="w-full px-4 py-3 mt-1 font-medium font-Montserrat focus:ring-2 focus:ring-info focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:text-blue-700 placeholder:font-Montserrat text-primary"
              />
            </div>
            <button
              type="submit"
              className={`block rounded-full px-4 py-2 border border-warning bg-white hover:bg-info text-center text-base duration-700 delay-75 font-Montserrat capitalize w-full xl:w-[350px] group`}
            >
              <div className={`h-6 w-full overflow-hidden font-semibold`}>
                <h4
                  className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-primary`}
                >
                  {status ? (<Loader styles={"bg-primary"} type={"main"} />) : "Request for Quote"}
                </h4>
                <h4
                  className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-white`}
                >
                  {status ? (<Loader styles={"bg-primary"} type={"main"} />) : "Request for Quote"}
                </h4>
              </div>
            </button>
          </form>
          <div className="absolute z-0 hidden md:block md:-top-36 md:-left-8 ">
            <FooterBoxModal className={"md:w-[380px] md:h-[480px] fill-none"} />
          </div>
        </div>
        <div className="w-full space-y-3 text-sm md:col-span-3 text-secondary bg-primary font-Montserrat place-content-center">
          <div className="flex items-center justify-center gap-2 md:justify-between">
            <p>©VBCC HTI. All Rights Reserved.</p>
            <p className="hidden text-center w-max xl:block">
              Made By
              <Link
                href={"https://webibee.com/"}
                target="_blank"
                className="ml-1 hover:animate-pulse decoration-white"
              >
                Webibee
              </Link>
            </p>
            <div className="items-center hidden gap-3 md:flex">
              <Link
                passHref
                href={"/privacypolicy"}
                className=" hover:text-secondary hover:text-opacity-70"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          <p className="block w-full text-center xl:hidden">
            Made By
            <Link
              href={"https://webibee.com/"}
              target="_blank"
              className="ml-1 hover:animate-pulse decoration-white"
            >
              Webibee
            </Link>
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;


export const ConnectComponent = ({ text, copied, handleClick }) => {
  return (
    <div>
      <button
        className="text-sm tracking-wide cursor-pointer text-info"
        onClick={() => handleClick(text)}
      >
        {text}
      </button>
      {copied && <span>✔️Copied</span>}
    </div>
  );
};
