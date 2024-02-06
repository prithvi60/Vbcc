"use client";
import othersData from "@/libs/others.json";
import Image from "next/image";
import Link from "next/link";
import { Link as Mylink } from "react-scroll";
import { FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";
import { Btn2 } from "./Btn";
import { useState } from "react";

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
    <footer className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 font-urbanist">
      <div className="flex flex-col justify-start gap-16 md:justify-between items-start font-urbanist bg-primary py-10 px-5 md:py-16 md:px-10 xl:p-16 h-full md:h-[388px] border-r-1 border-y-1 border-[#2D4152]">
        <div className="relative h-[40px] w-[70px]">
          <Image fill src={"/vbcc logo 2.svg"} alt="Logo"/>
        </div>
        <div className="text-sm space-y-5">
          <h4 className="uppercase">Kottivakkam,Chennai.</h4>
          <p className="w-full 2xl:w-[90%]">
            VBCC excels in crafting top-tier industrial and research equipment,
            known for innovation, quality, and tailored solutions.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start gap-16 md:justify-between items-start font-urbanist bg-primary py-10 px-5 md:py-16 md:px-10 xl:p-16 h-full md:h-[388px] border-r-1 border-y-1 border-[#2D4152]">
        <div className="text-sm flex items-start gap-16">
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
        <div className="flex justify-evenly items-center gap-3">
          <Link
            passHref
            aria-label="youtube page"
            href={"https://www.youtube.com/@drviswabaskaranvbceramics4394"}
            className="p-4 rounded-full border border-info hover:bg-info"
            target="_blank"
          >
            <FaYoutube className="h-7 w-7 text-white" />
          </Link>
          <Link
            passHref
            aria-label="linkedin page"
            href={"https://in.linkedin.com/company/vb-ceramic-consultants"}
            className="p-4 rounded-full border border-info hover:bg-info"
            target="_blank"
          >
            <FaLinkedin className="h-7 w-7 text-white" />
          </Link>
          <Link
            passHref
            aria-label="Whatsapp page"
            href={"https://wa.me/7338894199"}
            className="p-4 rounded-full border border-info hover:bg-info"
            target="_blank"
          >
            <FaWhatsapp className="h-7 w-7 text-white" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-start gap-16 md:justify-between items-start font-urbanist bg-primary py-10 px-5 md:py-16 md:px-10 xl:p-16 h-full md:h-[388px] border-r-1 border-y-1 border-[#2D4152] col-span-2 xl:col-auto text-sm">
        <div className="w-full flex justify-start gap-16 md:justify-between items-start font-urbanist">
          <div className="space-y-5">
            <div>
              <h3 className="text-[rgba(245, 245, 245, 0.70)]">
              Mail us at
              </h3>
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
        <div className="w-full flex justify-start gap-16 md:justify-between items-center font-urbanist pt-10">
          <div className="space-y-3">
            <h4>Our Groups</h4>
            <div className="flex items-center gap-4 ml-6">
              <Link
                passHref
                href={"https://www.drvbceramicresearch.com/"}
                className="relative h-[40px] w-[70px]"
                target="_blank"
              >
                <Image
                  fill
                  sizes="75px"
                  src={"/vbcc-research.svg"}
                  // placeholder="blur"
                  // blurDataURL="https://ik.imagekit.io/webibee/VBCC/VBCC_Logo.png?tr=bl-100"
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
                  src={"/vbcc-hitech.svg"}
                  alt="Logo"
                  // placeholder="blur"
                  // blurDataURL="https://ik.imagekit.io/webibee/VBCC/hi-temp.png?tr=bl-100"
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
        <div className="flex justify-center md:justify-between items-center">
          <p>©VB Ceramic Consultants. All Rights Reserved.</p>
          <div className="hidden md:flex items-center gap-3">
            <Link
              passHref
              href={"/"}
              className="underline underline-offset-1 hover:text-secondary hover:text-opacity-70"
            >
              Privacy Policy
            </Link>
            <Link
              passHref
              href={"/"}
              className="underline underline-offset-1 hover:text-secondary hover:text-opacity-70"
            >
              Terms of Service
            </Link>
          </div>
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
        className="text-info cursor-pointer"
        onClick={() => handleClick(text)}
      >
        {text}
      </button>
      {copied && <span>✔️Copied</span>}
    </div>
  );
};
