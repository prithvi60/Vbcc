"use client";
import {
  FooterBox,
  FooterBoxMap,
  FooterBoxModal,
} from "@/svg_components/LandingHeroBox";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaRegEnvelope,
  FaYoutube,
} from "react-icons/fa";
import {
  FaLocationDot,
  FaXTwitter,
} from "react-icons/fa6";

const FooterLanding = () => {
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
    <footer className="flex flex-col w-full h-full mt-8 text-white md:flex-row border-t-3 border-info font-Montserrat">
      <div className="relative block w-full h-full mb-5 md:w-1/2 xl:w-1/5">
        <div className="relative w-40 h-12 mx-auto my-24 md:h-20 md:w-64 md:my-14">
          <Image
            alt="VBCC Logo"
            title="VBCC Logo"
            src="https://ik.imagekit.io/webibee/VBCC/homepage/VBCC%20logo.svg?updatedAt=1733742968628"
            fill
            className="object-cover object-center"
          />
          <div className="absolute -top-36 -left-10 md:-left-5 md:-top-28 lg:-top-32 lg:-left-9">
            <FooterBox
              className={
                "w-[250px] h-[340px] md:w-[280px] md:h-[380px] lg:w-[310px] lg:h-[410px] fill-none"
              }
            />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-2">
          <Image
            alt="svg"
            title="svg"
            src={"/svg 1.svg"}
            fill
            className="object-contain object-center"
          />
        </div>
      </div>
      <div className="w-full py-5 px-8 md:w-4/5 bg-primary flex flex-col lg:flex-row lg:justify-between items-center justify-center lg:items-start flex-wrap gap-3.5 md:gap-7 xl:gap-4">
        <div className="flex items-center justify-between w-full md:w-auto md:block md:space-y-7 xl:space-y-10">
          <h4 className="text-xl font-medium tracking-wider text-center">
            FOLLOW US
          </h4>
          <ul className="flex items-center justify-center gap-3">
            <li>
              <Link title="linkedin link"
                aria-label="linkedIn profile"
                href={"https://www.linkedin.com/company/vbcc-hti/"}
                target="blank"
              >
                <FaLinkedinIn className="text-lg text-white md:text-2xl" />
              </Link>
            </li>
            <li>
              <Link title="facebook link"
                aria-label="Facebook profile"
                href={"https://www.facebook.com/vbcc.hti/"}
                target="blank"
              >
                <FaFacebookF className="text-lg text-white md:text-2xl" />
              </Link>
            </li>
            <li> 
              <Link title="instagram link"
                aria-label="Instagram profile"
                href={"https://www.instagram.com/vbcc_hti/"}
                target="blank"
              >
                <FaInstagram className="text-lg text-white md:text-2xl" />
              </Link>
            </li>
            <li>
              <Link title="youtube link"
                aria-label="Youtube Videos"
                href={"https://www.youtube.com/@vbcc_hti"}
                target="blank"
              >
                <FaYoutube className="text-lg text-white md:text-2xl" />
              </Link>
            </li>
            <li>
              <Link title="x link"
                aria-label="X profile"
                href={"https://x.com/vbcc_hti"}
                target="blank"
              >
                <FaXTwitter className="text-lg text-white md:text-2xl" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="block w-full space-y-3 md:space-y-5 xl:space-y-8 lg:w-2/5">
          <h4 className="text-xl font-medium tracking-wider text-center lg:text-left">
            CONTACT INFO
          </h4>
          <div className="flex gap-2.5 md:gap-5 justify-center items-center lg:justify-start w-full lg:w-max">
            <FaPhone className="text-lg text-white md:text-2xl" />
            <ConnectComponent
              text={"+91 9600478315"}
              copied={Copied2}
              handleClick={handleinquire}
            />
          </div>
          <div className="flex gap-2.5 justify-center items-center lg:justify-start md:gap-5 w-full lg:w-max">
            <FaRegEnvelope className="text-lg text-white md:text-2xl" />
            <ConnectComponent
              text={"info@vbccinstruments.com"}
              copied={Copied}
              handleClick={handlequote}
            />
          </div>
          <div className="flex gap-2.5 justify-center items-center lg:justify-start md:gap-5 w-full xl:w-max">
            <FaLocationDot className="text-lg text-white md:text-2xl" />
            <p className="w-full text-sm !leading-6 xl:w-3/5">
              VBCC HIGH TEMPERATURE INSTRUMENTS PRIVATE LTD
              <br />
              207, 3rd Link Road, Nehru Nagar Industrial Estate, Kottivakkam,
              Chennai, Tamil Nadu 600041
            </p>
          </div>
        </div>
        <div className="block relative z-0 w-full space-y-3 md:space-y-5 xl:space-y-8 xl:w-[320px]">
          <h4 className="text-xl font-medium tracking-wider text-center uppercase lg:text-left">
            Our Location
          </h4>
          {/* <div className="relative"> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248852.35523221854!2d80.20816985922144!3d12.951488698204182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525de4f794ee29%3A0x8fd9b1da364d7215!2sVBCC%20High%20Temperature%20Instruments%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1730722548513!5m2!1sen!2sin"
            title="our office location"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-64 md:w-full"
          ></iframe>
          <div className="absolute hidden -z-10 xl:block xl:-top-28 xl:-left-8">
            <FooterBoxModal
              className={" xl:w-[380px] xl:h-[380px] fill-none"}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLanding;

export const ConnectComponent = ({ text, copied, handleClick }) => {
  return (
    <div>
      <button
        className="text-sm tracking-wide cursor-pointer md:text-base text-info"
        onClick={() => handleClick(text)}
      >
        {text}
      </button>
      {copied && <span>✔️Copied</span>}
    </div>
  );
};
