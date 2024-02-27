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
          <Image fill src={"https://ik.imagekit.io/webibee/VBCC/vbcc%20logo%202.svg"} alt="Logo"/>
        </div>
        <div className="space-y-5 text-sm">
          <h4 className="uppercase">Kottivakkam,Chennai.</h4>
          <p className="w-full 2xl:w-[90%]">
            VBCC excels in crafting top-tier industrial and research equipment,
            known for innovation, quality, and tailored solutions.
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
                  src={"https://ik.imagekit.io/webibee/VBCC/vbcc-research.svg"}
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
          <p>Made By <Link href={"https://webibee.com/"} target="_blank" className="underline hover:animate-pulse decoration-white">Webibee</Link></p>
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
    </footer>
  );
};

export default Footer;

export const ConnectComponent = ({ text, copied, handleClick }) => {
  return (
    <div>
      <button
        className="cursor-pointer text-info"
        onClick={() => handleClick(text)}
      >
        {text}
      </button>
      {copied && <span>✔️Copied</span>}
    </div>
  );
};
