import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export const HeroComponent = () => {

  return (
    <ul className="flex flex-col items-center justify-center gap-3 -mt-10 md:-mt-0">
      <li>
        <Link
          href={"https://www.linkedin.com/company/vbcc-hti/"}
          target="_blank"
          aria-label="linkedIn profile"
        >
          <FaLinkedinIn className="text-xl text-white md:text-2xl" />
        </Link>
      </li>
      <li>
        <Link
          href={"https://www.facebook.com/vbcc.hti/"}
          target="_blank"
          aria-label="Facebook profile"
        >
          <FaFacebookF className="text-xl text-white md:text-2xl" />
        </Link>
      </li>
      <li>
        <Link
          href={"https://www.instagram.com/vbcc_hti/"}
          target="_blank"
          aria-label="Instagram profile"
        >
          <FaInstagram className="text-xl text-white md:text-2xl" />
        </Link>
      </li>
      <li>
        <Link
          href={"www.youtube.com/@vbcc_hti"}
          target="_blank"
          aria-label="Youtube Videos"
        >
          <FaYoutube className="text-xl text-white md:text-2xl" />
        </Link>
      </li>
      <li>
        <Link
          href={"https://x.com/vbcc_hti"}
          target="_blank"
          aria-label="X profile"
        >
          <FaXTwitter className="text-xl text-white md:text-2xl" />
        </Link>
      </li>
    </ul>
  )

}


