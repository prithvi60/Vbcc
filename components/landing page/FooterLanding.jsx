import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaRegEnvelope, FaYoutube } from "react-icons/fa";
import {
    FaLinkedin,
    FaLocationDot,
    FaSquareWhatsapp,
    FaXTwitter,
} from "react-icons/fa6";

const FooterLanding = () => {
    return (
        <footer className="flex flex-col w-full h-full mt-8 text-white md:flex-row border-t-3 border-info font-Montserrat">
            <div className="relative hidden w-full h-full px-8 py-4 md:block md:w-1/5">
                <div className="relative w-32 h-32 mx-auto overflow-hidden lg:w-40 xl:w-56">
                    <Image
                        alt="VBCC Logo"
                        src="/VBCC - Logo.svg"
                        fill
                        className="object-cover object-center"
                    />
                </div>
                <div className="absolute top-0 left-0 w-full h-2">
                    <Image
                        alt="svg"
                        src={"/svg 1.svg"}
                        fill
                        className="object-contain object-center"
                    />
                </div>
            </div>
            <div className="w-full py-5 px-8 md:w-4/5 bg-primary flex flex-col md:flex-row justify-between items-start flex-wrap gap-3.5 md:gap-7 xl:gap-4">
                <div className="flex items-center justify-between w-full md:w-auto md:block lg:space-y-7 xl:space-y-10">
                    <h4 className="text-xl font-medium tracking-wider text-center">
                        FOLLOW US
                    </h4>
                    <ul className="flex items-center justify-center gap-3">
                    <li>
                  <Link href={"https://www.linkedin.com/company/vbcc-hti/"} className="hover:animate-pulse " target="blank">
                    <FaLinkedinIn className="text-lg text-white md:text-2xl" />
                  </Link>
                </li>
                <li>
                  <Link href={"https://www.facebook.com/vbcc.hti/"} className="hover:animate-pulse "target="blank">
                    <FaFacebookF className="text-lg text-white md:text-2xl" />
                  </Link>
                </li>
                <li>
                  <Link href={"https://www.instagram.com/vbcc_hti/"} className="hover:animate-pulse "target="blank">
                    <FaInstagram className="text-lg text-white md:text-2xl" />
                  </Link>
                </li>
                <li>
                  <Link href={"https://www.youtube.com/@vbcc_hti"} className="hover:animate-pulse "target="blank">
                    <FaYoutube className="text-lg text-white md:text-2xl" />
                  </Link>
                </li>
                <li>
                  <Link href={"https://x.com/vbcc_hti"} className="hover:animate-pulse "target="blank">
                    <FaXTwitter className="text-lg text-white md:text-2xl" />
                  </Link>
                </li>
                    </ul>
                </div>
                <div className="block w-full space-y-3 md:space-y-5 xl:space-y-8 md:w-2/5">
                    <h4 className="text-xl font-medium tracking-wider">CONTACT INFO</h4>
                    <div className="flex gap-2.5 md:gap-5 w-full md:w-max">
                        <FaPhone className="text-lg text-white md:text-2xl" />
                        <p className="text-sm tracking-wide">9600478315</p>
                    </div>
                    <div className="flex gap-2.5 md:gap-5 w-full md:w-max">
                        <FaRegEnvelope className="text-lg text-white md:text-2xl" />
                        <p className="text-sm tracking-wide">info@vbccinstruments.com</p>
                    </div>
                    <div className="flex  gap-2.5 md:gap-5 w-full xl:w-max">
                        <FaLocationDot className="text-lg text-white md:text-2xl" />
                        <p className="w-full text-sm !leading-6 xl:w-3/5">
                            VBCC HIGH TEMPERATURE INSTRUMENTS PRIVATE LTD
                            <br />
                            207, 3rd Link Road, Nehru Nagar Industrial Estate, Kottivakkam,
                            Chennai, Tamil Nadu 600041
                        </p>
                    </div>
                </div>
                <div className="block w-full space-y-3 md:space-y-5 xl:space-y-8 md:w-2/5">
                    <h4 className="text-xl font-medium tracking-wider uppercase">Our Location</h4>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248852.35523221854!2d80.20816985922144!3d12.951488698204182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525de4f794ee29%3A0x8fd9b1da364d7215!2sVBCC%20High%20Temperature%20Instruments%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1730722548513!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-64 md:w-64"
                    ></iframe>
                </div>
            </div>
        </footer>
    );
};

export default FooterLanding;
