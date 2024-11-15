"use client";
import othersData from "@/libs/others.json";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import { useState } from "react";
import { FaInstagram, FaPhone, FaRegEnvelope } from "react-icons/fa";
import {
  FaLinkedin,
  FaLocationDot,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const [Copied, setCopied] = useState(false);
  const [Copied2, setCopied2] = useState(false);
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
  return (

    <footer className="flex flex-col w-full h-full text-white md:flex-row border-t-3 border-info font-Montserrat">
      <div className="relative block w-full h-full p-5 space-y-12 md:p-8 md:w-2/5 xl:w-1/5">
        <div className="block">
          <div className="relative h-20 mx-auto my-4 overflow-hidden w-60">
            <Image
              alt="VBCC Logo"
              src="/VBCC - Logo.svg"
              fill
              className="object-cover object-center"
            />
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
              <Link href={""} className="hover:animate-pulse ">
                <FaLinkedin className="text-lg md:text-2xl" />
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:animate-pulse ">
                <FaWhatsapp className="text-lg md:text-2xl" />
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:animate-pulse ">
                <FaXTwitter className="text-lg md:text-2xl" />
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:animate-pulse ">
                <FaInstagram className="text-lg md:text-2xl" />
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:animate-pulse ">
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
      {/* md:after:w-0.5 md:after:h-48 after:w-56 after:h-0.5 after:bg-white after:-bottom-3.5 after:left-1/2 md:after:left-64 lg:after:left-56 xl:after:left-80 after:absolute md:after:top-8 after:-translate-x-1/2 md:after:-translate-x-0 */}
      {/*  */}
      <div className="grid w-full grid-cols-1 px-5 pt-10 pb-5 md:pb-3 bg-primary md:px-10 md:w-3/5 xl:w-4/5 xl:px-16 md:grid-cols-2 xl:grid-cols-3 gap-7 xl:gap-4">
        <div className="relative flex flex-col h-auto items-center w-full space-y-5 after:w-56 after:h-0.5 after:bg-white after:-bottom-3.5 after:left-1/2 after:absolute after:-translate-x-1/2 md:after:hidden md:justify-between md:flex-row md:w-max md:block lg:space-y-7">
          <h4 className="text-xl font-medium tracking-wider">
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
          <h4 className="w-full text-xl font-medium tracking-wider text-center xl:w-max">CONTACT INFO</h4>
          <div className="flex items-center justify-center md:items-start md:justify-start gap-2.5 md:gap-5 w-full xl:w-max">
            <FaPhone className="text-lg text-white md:text-2xl" />
            <ConnectComponent
              text={"+91 73388 94199"}
              copied={Copied2}
              handleClick={handleinquire}
            />
          </div>
          <div className="flex items-center justify-center md:items-start md:justify-start gap-2.5 md:gap-5 w-full xl:w-max">
            <FaRegEnvelope className="text-lg text-white md:text-2xl" />
            <ConnectComponent
              text={"info@vbccinstruments.com"}
              copied={Copied}
              handleClick={handlequote}
            />
          </div>
          <div className="flex items-center justify-center md:items-start md:justify-start gap-2.5 md:gap-5 w-full xl:w-3/5">
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
        <div className="block w-full space-y-3 md:col-span-2 md:space-y-5 xl:space-y-8 xl:col-auto">
          <h4 className="text-xl font-medium tracking-wider text-center uppercase md:text-start">
            LET’S WORK TOGETHER
          </h4>
          <form
            action="https://public.herotofu.com/v1/5317bdd0-ae22-11ee-870a-ff8e0d81300a"
            method="post"
            acceptCharset="UTF-8"
            className="block space-y-4"
          >
            <div className="block w-full space-y-1.5">
              {/* <label htmlFor="company" className="text-xl md:text-2xl font-Lora">
                  Name/Company<span className="text-red-600">*</span>
                </label> */}
              <input
                required
                name="Company"
                autoComplete="on"
                type="text"
                id="company"
                placeholder="Name"
                className="w-full px-4 py-3 mt-1 font-urbanist focus:ring-2 focus:ring-info focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:text-blue-700 placeholder:font-urbanist"
              />
            </div>
            <div className="block w-full space-y-1.5">
              {/* <label htmlFor="position" className="text-xl md:text-2xl font-Lora">
                  Position
                </label> */}
              <input
                autoComplete="on"
                type="text"
                name="Position"
                id="position"
                placeholder="Enter your Position at the Company"
                className="w-full px-4 py-3 mt-1 font-urbanist focus:ring-2 focus:ring-info focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:text-blue-700 placeholder:font-urbanist"
              />
            </div>
            <div className="block w-full space-y-1.5">
              {/* <label htmlFor="email" className="text-xl md:text-2xl font-Lora">
                  Email<span className="text-red-600">*</span>
                </label> */}
              <input
                required
                name="Email"
                autoComplete="on"
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 mt-1 font-urbanist focus:ring-2 focus:ring-info focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:text-blue-700 placeholder:font-urbanist"
              />
            </div>
            <div className="block w-full space-y-1.5">
              {/* <label htmlFor="phone" className="text-xl md:text-2xl font-Lora">
                  Phone Number<span className="text-red-600">*</span>
                </label> */}
              <input
                required
                name="Phone"
                type="text"
                id="phone"
                placeholder="Enter your Phone Number"
                className="w-full px-4 py-3 mt-1 font-urbanist focus:ring-2 focus:ring-info focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:text-blue-700 placeholder:font-urbanist"
              />
            </div>
            <div className="block w-full col-auto space-y-1.5 md:col-span-2">
              {/* <label htmlFor="message" className="text-xl md:text-2xl font-Lora">
                  Message
                </label> */}
              <textarea
                name="Message"
                autoComplete="on"
                type="text"
                id="message"
                rows={"4"}
                placeholder="Type in your Message"
                className="w-full px-4 py-3 mt-1 font-urbanist focus:ring-2 focus:ring-info focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:text-blue-700 placeholder:font-urbanist"
              />
            </div>
            <button
              type="submit"
              className={`block rounded-full px-4 py-2 border border-warning bg-white hover:bg-info text-center text-base duration-700 delay-75 font-urbanist capitalize w-full xl:w-[350px] group`}
            >
              <div className={`h-6 w-full overflow-hidden`}>
                <h4
                  className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-primary`}
                >
                  Book Appointment
                </h4>
                <h4
                  className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-white`}
                >
                  Book Appointment
                </h4>
              </div>
            </button>
          </form>
        </div>
        <div className="w-full space-y-3 text-sm md:col-span-3 text-secondary bg-primary font-urbanist place-content-center">
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
              <Link
                passHref
                href={"/termsofservice"}
                className=" hover:text-secondary hover:text-opacity-70"
              >
                Terms of Service
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

{/* <footer className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 font-urbanist">
        <div className="flex flex-col justify-start gap-16 md:justify-between items-start font-urbanist bg-primary py-10 px-5 md:py-16 md:px-10 xl:p-16 h-full md:h-[388px] border-r-1 border-y-1 border-[#2D4152]">
          <div className="relative h-[40px] w-[70px]">
            <Image
              fill
              src={"https://ik.imagekit.io/webibee/VBCC/vbcc%20logo%202.svg"}
              alt="Logo"
            />
          </div>
          <div className="space-y-5 text-sm">
            <h4 className="uppercase">Kottivakkam,Chennai.</h4>
            <p className="w-full 2xl:w-[90%]">
              VBCC excels in crafting top-tier industrial and research
              equipment, known for innovation, quality, and tailored solutions.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-16 md:justify-between items-start font-urbanist bg-primary py-10 px-5 md:py-16 md:px-10 xl:p-16 h-full md:h-[388px] border-r-1 border-y-1 border-[#2D4152]">
          <div className="flex items-start gap-16 text-sm">
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
          <div className="flex items-center gap-3 justify-evenly">
            <Link
              passHref
              aria-label="youtube page"
              href={"https://www.youtube.com/@drviswabaskaranvbceramics4394"}
              className="p-4 border rounded-full border-info hover:bg-info"
              target="_blank"
            >
              <FaYoutube className="text-white h-7 w-7" />
            </Link>
            <Link
              passHref
              aria-label="linkedin page"
              href={"https://in.linkedin.com/company/vb-ceramic-consultants"}
              className="p-4 border rounded-full border-info hover:bg-info"
              target="_blank"
            >
              <FaLinkedin className="text-white h-7 w-7" />
            </Link>
            <Link
              passHref
              aria-label="Whatsapp page"
              href={"https://wa.me/7338894199"}
              className="p-4 border rounded-full border-info hover:bg-info"
              target="_blank"
            >
              <FaWhatsapp className="text-white h-7 w-7" />
            </Link>
          </div>
        </div>
        <div className="flex  flex-col justify-start gap-16 md:justify-between items-start font-urbanist bg-primary py-10 px-5 md:py-16 md:px-10 xl:p-16 h-full md:h-[388px] border-r-1 border-y-1 border-[#2D4152] col-span-2 xl:col-auto text-sm">
          <div className="flex flex-wrap items-start justify-start w-full gap-16 sm:flex-nowrap md:justify-between font-urbanist">
            <div className="space-y-5">
              <div>
                <h3 className="text-[rgba(245, 245, 245, 0.70)]">Mail us at</h3>
                <ConnectComponent
                  text={"info@vbccinstruments.com"}
                  copied={Copied}
                  handleClick={handlequote}
                />
              </div>
              <div>
                <h3 className="text-[rgba(245, 245, 245, 0.70)]">
                  Connect for inquiries
                </h3>
                <ConnectComponent
                  text={"+91 73388 94199"}
                  copied={Copied2}
                  handleClick={handleinquire}
                />
              </div>
            </div>
            <Btn2
              Hbgcolor={"bg-info"}
              textColor={"text-info"}
              HtextColor={"text-white"}
              bColor={"border-info"}
              title={"Location ?"}
              href={"https://maps.app.goo.gl/U8LEV8Fyq6sDujZz5"}
            />
          </div>
          <div className="flex flex-wrap items-center justify-start w-full gap-16 pt-10 sm:flex-nowrap md:justify-between font-urbanist">
            <div className="space-y-3">
              <h4>Our Groups</h4>
              <div className="flex items-center gap-4 ml-6">
                <Link
                  passHref
                  href={"https://vbccinstruments.com/"}
                  className="relative h-[40px] w-[70px]"
                  target="_blank"
                >
                  <Image
                    fill
                    sizes="75px"
                    src={
                      "https://ik.imagekit.io/webibee/VBCC/vbcc-research.svg"
                    }
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
                    alt="Logo"
                    className="-ml-6"
                  />
                </Link>
                <Link
                  passHref
                  href={"https://www.hitechceramics.in/"}
                  className="relative h-[40px] w-[70px]"
                  target="_blank"
                >
                  <Image
                    fill
                    sizes="75px"
                    src={"https://ik.imagekit.io/webibee/VBCC/vbcc-hitech.svg"}
                    alt="Logo"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
                    className="-ml-6"
                  />
                </Link>
              </div>
            </div>
            <Mylink
              aria-label="back to navbar"
              to="nav"
              href="#nav"
              name="gotonav"
              id="gotonav"
              spy={true}
              smooth={true}
              duration={1000}
              className={`block rounded-full px-[18px] py-5 bg-transparent border border-secondary hover:bg-white text-center text-base duration-700 delay-75 font-urbanist capitalize w-max group cursor-pointer`}
            >
              <div className={`h-6 w-full overflow-hidden`}>
                <h4
                  className={`transition translate-y-0 group-hover:-translate-y-20 duration-700`}
                >
                  <HiOutlineArrowNarrowUp className="h-7 w-7 text-secondary " />
                </h4>
                <h4
                  className={`translate-y-20 transition group-hover:-translate-y-[30px] duration-700`}
                >
                  <HiOutlineArrowNarrowUp className="h-7 w-7 text-warning" />
                </h4>
              </div>
            </Mylink>
          </div>
        </div>
        <div className="text-sm p-5 md:px-16 md:py-5 text-secondary border-y-1 border-[#2D4152] bg-primary col-span-3 font-urbanist">
          <div className="flex items-center justify-between gap-2">
            <p>©VBCC HTI. All Rights Reserved.</p>
            <p>
              Made By{" "}
              <Link
                href={"https://webibee.com/"}
                target="_blank"
                className="underline hover:animate-pulse decoration-white"
              >
                Webibee
              </Link>
            </p>
            <div className="items-center hidden gap-3 md:flex">
              <Link
                passHref
                href={"/privacypolicy"}
                className="underline underline-offset-1 hover:text-secondary hover:text-opacity-70"
              >
                Privacy Policy
              </Link>
              <Link
                passHref
                href={"/termsofservice"}
                className="underline underline-offset-1 hover:text-secondary hover:text-opacity-70"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer> */}