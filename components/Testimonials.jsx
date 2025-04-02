"use client";
import Image from "next/image";
import { IoMdClose, IoMdQuote } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { heroTestimonial, ourTestimonials } from "@/libs/otherPage";
import {
  FaPauseCircle,
  FaPlayCircle,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import { useRef, useState } from "react";
// import FileViewer from "react-file-viewer";
import { IoMdArrowDropdown } from "react-icons/io";
import dynamic from 'next/dynamic';
const FileViewer = dynamic(
  () => import('react-file-viewer'),
  { ssr: false }
);

const Testimonials = () => {
  const path = usePathname();
  const [playing, setPlaying] = useState({});
  const videoRef = useRef(null);
  const [products, setProducts] = useState("");
  const [category, setCategory] = useState("");
  const [data, setData] = useState(ourTestimonials);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [pdf, setPdf] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = (val) => {
    setIsLoading(true);
    setPdf(val);
    setIsViewerOpen(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const uniqueProducts = [
    ...new Set(ourTestimonials.map((item) => item.product)),
  ];

  const uniqueCategories = [
    ...new Set(ourTestimonials.map((item) => item.category)),
  ];

  const filterData = (cat, prod) => {
    let filteredData = ourTestimonials;

    if (cat && prod) {
      // Filter by both category and product
      filteredData = ourTestimonials.filter(
        (item) => item.category === cat && item.product === prod
      );
    } else if (cat) {
      // Filter by category only
      filteredData = ourTestimonials.filter((item) => item.category === cat);
    } else if (prod) {
      // Filter by product only
      filteredData = ourTestimonials.filter((item) => item.product === prod);
    }

    setData(filteredData);
  };

  const handleCategory = (value) => {
    if (category === value) {
      setCategory("");
      filterData("", products);
    } else {
      setCategory(value);
      filterData(value, products);
    }
  };

  const handleProducts = (value) => {
    if (products === value) {
      setProducts("");
      filterData(category, "");
    } else {
      setProducts(value);
      filterData(category, value);
    }
  };

  return (
    <section className="relative w-full h-full bg-white text-primary font-Montserrat">
      <div className="relative block w-full padding">
        <div
          className={`block space-y-12 md:space-y-16 ${path === "/testimonials" ? "pb-10 md:pb-20" : "py-10 md:py-20"}`}
        >
          <div className="block w-full space-y-4 md:space-y-6">
            <h4 className="text-2xl font-semibold tracking-wide md:text-4xl xl:text-5xl text-info">
              Our Testimonials
            </h4>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-max flex justify-center items-center bg-[#E5EFFF] p-6 md:p-12 ">
                <div className="relative overflow-hidden w-64 h-20 md:w-60 md:h-20 lg:h-28 lg:w-[350px]">
                  <Image
                    alt="VBCC Logo"
                    title="VBCC Logo"
                    src="https://ik.imagekit.io/webibee/VBCC/homepage/VBCC%20logo.svg?updatedAt=1733742968628"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="grid w-full grid-cols-2 md:grid-cols-4">
                {/* {othersData.clientLogos2.map((item, idx) => ( */}
                <div
                  className={`w-full h-full place-content-center bg-[#E5EFFF] md:bg-primary`}
                >
                  <div
                    className={`relative overflow-hidden size-28 lg:size-32 xl:size-40 mx-auto`}
                  >
                    <Image
                      alt={`Anna University Logo`}
                      title={`Anna University Logo`}
                      src={
                        "https://ik.imagekit.io/webibee/VBCC/client-logo/AU.svg?updatedAt=1731397607533"
                      }
                      fill
                      className="object-cover object-center p-5"
                    />
                  </div>
                </div>
                <div
                  className={`w-full h-full place-content-center bg-primary md:bg-[#E5EFFF]`}
                >
                  <div
                    className={`relative overflow-hidden size-28 lg:size-32 xl:size-40 mx-auto`}
                  >
                    <Image
                      alt={`BHEL Logo`}
                      title={`BHEL Logo`}
                      src={
                        "https://ik.imagekit.io/webibee/VBCC/client-logo/bhel.svg?updatedAt=1731397608150"
                      }
                      fill
                      className="object-cover object-center p-5"
                    />
                  </div>
                </div>
                <div
                  className={`w-full h-full place-content-center bg-primary`}
                >
                  <div
                    className={`relative overflow-hidden size-28 lg:size-32 xl:size-40 mx-auto`}
                  >
                    <Image
                      alt={`IIT Madras Logo`}
                      title={`IIT Madras Logo`}
                      src={
                        "https://ik.imagekit.io/webibee/VBCC/client-logo/IIT-Madras.svg?updatedAt=1731397607544"
                      }
                      fill
                      className="object-cover object-center p-5"
                    />
                  </div>
                </div>
                <div
                  className={`w-full h-full place-content-center bg-[#E5EFFF]`}
                >
                  <div
                    className={`relative overflow-hidden size-28 lg:size-32 xl:size-40 mx-auto`}
                  >
                    <Image
                      alt={`IIT Hyderabad Logo`}
                      title={`IIT Hyderabad Logo`}
                      src={
                        "https://ik.imagekit.io/webibee/VBCC/client-logo/IITM%20Hyd%202.svg?updatedAt=1731397608270"
                      }
                      fill
                      className="object-cover object-center p-5"
                    />
                  </div>
                </div>
                <div
                  className={`w-full h-full place-content-center bg-[#E5EFFF]`}
                >
                  <div
                    className={`relative overflow-hidden size-28 lg:size-32 xl:size-40 mx-auto`}
                  >
                    <Image
                      alt={`ISRO Logo`}
                      title={`ISRO Logo`}
                      src={
                        "https://ik.imagekit.io/webibee/VBCC/client-logo/ISRO.svg?updatedAt=1731397607695"
                      }
                      fill
                      className="object-cover object-center p-5"
                    />
                  </div>
                </div>
                <div
                  className={`w-full h-full place-content-center bg-primary`}
                >
                  <div
                    className={`relative overflow-hidden size-28 lg:size-32 xl:size-40 mx-auto`}
                  >
                    <Image
                      alt={`VIT Logo`}
                      title={`VIT Logo`}
                      src={
                        "https://ik.imagekit.io/webibee/VBCC/client-logo/vit.svg?updatedAt=1731397607736"
                      }
                      fill
                      className="object-cover object-center p-5"
                    />
                  </div>
                </div>
                <div
                  className={`w-full h-full block md:hidden place-content-center bg-primary`}
                >
                  <div
                    className={`relative overflow-hidden size-28 lg:size-32 xl:size-40 mx-auto`}
                  >
                    <Image
                      alt={`CSIR Logo`}
                      title={`CSIR Logo`}
                      src={
                        "https://ik.imagekit.io/webibee/VBCC/client-logo/csir.svg?updatedAt=1731397607575"
                      }
                      fill
                      className="object-cover object-center p-5"
                    />
                  </div>
                </div>
                <div
                  className={`w-full h-full hidden md:block place-content-center bg-primary md:bg-[#E5EFFF]`}
                >
                  <div
                    className={`relative overflow-hidden size-28 lg:size-32 xl:size-40 mx-auto`}
                  >
                    <Image
                      alt={`DRDO Logo`}
                      title={`DRDO Logo`}
                      src={
                        "https://ik.imagekit.io/webibee/VBCC/client-logo/DRDO.svg?updatedAt=1731397607831"
                      }
                      fill
                      className="object-cover object-center p-5"
                    />
                  </div>
                </div>
                <div
                  className={`w-full h-full hidden md:block place-content-center bg-[#E5EFFF] md:bg-primary`}
                >
                  <div
                    className={`relative overflow-hidden size-28 lg:size-32 xl:size-40 mx-auto`}
                  >
                    <Image
                      alt={`CSIR Logo`}
                      title={`CSIR Logo`}
                      src={
                        "https://ik.imagekit.io/webibee/VBCC/client-logo/csir.svg?updatedAt=1731397607575"
                      }
                      fill
                      className="object-cover object-center p-5"
                    />
                  </div>
                </div>
                <div
                  className={`w-full h-full block md:hidden place-content-center bg-[#E5EFFF]`}
                >
                  <div
                    className={`relative overflow-hidden size-28 lg:size-32 xl:size-40 mx-auto`}
                  >
                    <Image
                      alt={`DRDO Logo`}
                      title={`DRDO Logo`}
                      src={
                        "https://ik.imagekit.io/webibee/VBCC/client-logo/DRDO.svg?updatedAt=1731397607831"
                      }
                      fill
                      className="object-cover object-center p-5"
                    />
                  </div>
                </div>
                {/* ))} */}
              </div>
            </div>
          </div>
          <div className="flex gap-3 md:hidden">
            <div className="flex overflow-hidden flex-col max-w-xs pb-5 mx-auto space-y-6 text-center rounded-[2rem] bg-primary w-1/2">
              <h4 className="flex items-center justify-center w-full gap-2 px-3 py-4 mx-auto text-sm font-semibold tracking-wide text-center text-white capitalize duration-700 delay-75 rounded-full shadow-md sm:text-base text-bold font-Montserrat md:px-6 bg-info">
                categories
                <span>
                  <IoMdArrowDropdown className="text-sm text-white" />
                </span>
              </h4>
              <div className="overflow-y-scroll max-h-[200px] thumbnail2">
                {uniqueCategories.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleCategory(item)}
                    type="submit"
                    className={`block p-2 text-center duration-700 text-sm sm:text-base font-urbanist font-semibold delay-75 mx-auto md:mx-0 capitalize w-full ${category === item ? "bg-secondary text-black shadow-lg" : "bg-primary text-white"}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex overflow-hidden flex-col max-w-xs pb-5 mx-auto space-y-6 text-center rounded-[2rem] h-fit bg-primary w-1/2">
              <h4 className="flex items-center justify-center w-full gap-2 px-3 py-4 mx-auto text-sm font-semibold tracking-wide text-center text-white capitalize duration-700 delay-75 rounded-full shadow-md sm:text-base text-bold font-Montserrat md:px-6 bg-info">
                products
                <span>
                  <IoMdArrowDropdown className="text-sm text-white" />
                </span>
              </h4>
              <div className="overflow-y-scroll max-h-[200px] thumbnail2">
                {uniqueProducts.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleProducts(item)}
                    type="submit"
                    className={`block p-2 text-center duration-700 text-sm sm:text-base font-urbanist font-semibold delay-75 mx-auto md:mx-0 capitalize w-full ${products === item ? "bg-secondary text-black shadow-lg" : "bg-primary text-white"}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="!relative flex flex-col w-full h-full gap-8 md:flex-row items-start">
            <div className="hidden md:block w-full mx-auto space-y-6 md:w-[30%] xl:w-1/5 min-h-screen relative">
              <div className="w-full h-full md:!sticky md:top-16">
                <div className="space-y-8 text-center">
                  <h4 className="text-lg tracking-wide capitalize md:text-3xl text-info text-bold font-Montserrat">
                    categories
                  </h4>
                  <div className="p-2 space-y-3">
                    {uniqueCategories.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleCategory(item)}
                        type="submit"
                        className={`block px-3 md:px-6 py-4 group text-center duration-700 text-base font-urbanist font-semibold delay-75 mx-auto md:mx-0 shadow-md capitalize w-full rounded-full ${category === item ? "bg-secondary text-black" : "bg-primary hover:bg-info text-white"}`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-8 text-center">
                  <h4 className="text-lg tracking-wide capitalize md:text-3xl text-info text-bold font-Montserrat">
                    products
                  </h4>
                  <div className="p-2 space-y-3 overflow-y-scroll max-h-[410px] thumbnail">
                    {uniqueProducts.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleProducts(item)}
                        type="submit"
                        className={`block px-3 md:px-6 py-4 group text-center text-base duration-700 shadow-md font-urbanist font-semibold delay-75 mx-auto md:mx-0 capitalize w-full rounded-full ${products === item ? "bg-secondary text-black" : "bg-primary hover:bg-info text-white"}`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {data.length === 0 ? (
              <p className="flex items-center justify-center w-full h-screen text-base font-medium tracking-wide md:text-xl xl:text-3xl text-opacity-85 text- font-urbanist text-primary md:w-[70%] xl:w-4/5">
                No testimonials are available at this time.
              </p>
            ) : (
              <div className="w-full h-full gap-5 mx-auto space-y-8 md:w-[70%] xl:w-4/5 columns-1 md:columns-2 xl:columns-3 group">
                {data.map((list, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col w-full h-full overflow-hidden transition-all duration-500 ease-in-out transform shadow-xl select-none rounded-[3rem] shadow-black/50 [&:nth-child(3n+3)]:flex-col-reverse   xl:[&:nth-child(2n+3)]:flex-col-reverse  break-inside-avoid bg-primary"
                  >
                    <div className="relative w-full h-48">
                      {list.clientVideo === "" ? (
                        <div className="relative w-full h-full bg-white rounded-[2rem]">
                          <FaPlayCircle className="absolute text-3xl text-gray-300 cursor-pointer bottom-5 right-5" />
                        </div>
                      ) : (
                        <>
                          <video
                            ref={videoRef}
                            src={list.clientVideo}
                            className="object-cover object-center w-full h-full rounded-[2rem]"
                            onPlay={() =>
                              setPlaying((prev) => ({ ...prev, [idx]: true }))
                            }
                            onPause={() =>
                              setPlaying((prev) => ({ ...prev, [idx]: false }))
                            }
                          ></video>
                          {!playing[idx] ? (
                            <FaPlayCircle
                              className="absolute text-3xl cursor-pointer bottom-5 text-info right-5"
                              onClick={() => {
                                const video =
                                  document.getElementsByTagName("video")[idx];
                                video.play();
                              }}
                            />
                          ) : (
                            <FaPauseCircle
                              className="absolute text-3xl cursor-pointer bottom-5 text-info right-5"
                              onClick={() => {
                                const video =
                                  document.getElementsByTagName("video")[idx];
                                video.pause();
                              }}
                            />
                          )}
                        </>
                      )}
                    </div>
                    <div className="p-6 space-y-5 md:px-10 md:py-6 bg-primary">
                      <div className="relative mx-auto overflow-hidden border-4 rounded-full size-32 border-info">
                        <Image
                          fill
                          src={list.clientLogo}
                          alt="image"
                          title="image"
                          className="object-contain object-center"
                        />
                      </div>
                      {list.pdf !== "" && (
                        <button
                          role="button"
                          title="read more"
                          className="w-full text-base font-medium tracking-wider underline cursor-pointer text-info underline-offset-4 decoration-info text-end"
                          onClick={() => handleButtonClick(list.pdf)}
                        >
                          Read more
                        </button>
                      )}

                      <p className="relative text-sm text-secondary">
                        <FaQuoteLeft className="absolute -top-3.5 -left-4 md:-top-2 md:-left-6" />
                        {list.review}
                        <FaQuoteRight className="absolute -bottom-4 md:-bottom-2 -right-3 md:-right-4" />
                      </p>
                      <h4
                        className="font-bold capitalize text-secondary text-[13px] md:text-[15px]"
                        dangerouslySetInnerHTML={{
                          __html: list.aboutClient,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {isViewerOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={() => setIsViewerOpen(false)}
          >
            <div
              className="relative w-full max-w-xl p-5 bg-white rounded-lg shadow-lg md:max-w-4xl 2xl:max-w-6xl h-4/5 !thumbnail"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute z-10 p-2 text-sm text-white bg-red-500 rounded-full cursor-pointer -top-11 md:-top-10 xl:top-0 right-2 xl:-right-14 hover:bg-red-600 animate-pulse"
                onClick={() => setIsViewerOpen(false)}
              >
                <IoMdClose className="text-lg md:text-2xl" />
              </button>
              <div className="flex items-center justify-center w-full h-full overflow-hidden">
                <div className="w-full h-full">
                  {isLoading ? (
                    <div className="flex items-center justify-center w-full h-full">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
                        <p className="font-semibold tracking-widest text-gray-600 animate-pulse font-urbanist">
                          Loading PDF...
                        </p>
                      </div>
                    </div>
                  ) : (
                    <FileViewer
                      fileType="pdf"
                      filePath={pdf}
                      onError={(e) => {
                        console.error("Error displaying file:", e);
                        setIsLoading(false);
                      }}
                      onLoad={() => setIsLoading(false)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {path !== "/testimonials" && (
        <div className="absolute left-0 w-48 h-20 -top-6 md:h-28 md:w-72">
          <Image
            src={"/vector2.svg"}
            fill
            alt="icon"
            title="icon"
            className="object-contain object-center"
          />
        </div>
      )}

      <div className="absolute right-0 w-48 h-28 -bottom-6 md:h-28 md:w-72">
        <Image
          src={"/vector1.svg"}
          fill
          alt="icon"
          title="icon"
          className="object-contain object-center"
        />
      </div>
    </section>
  );
};

export default Testimonials;
