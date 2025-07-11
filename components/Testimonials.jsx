"use client";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import { ourTestimonials } from "@/libs/otherPage";
import { FaPlayCircle, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { SpringModal2 } from "./landing page/Modal";
import AccordionTestimonial from "./testimonial/Accordion";
const FileViewer = dynamic(() => import("react-file-viewer"), { ssr: false });

const Testimonials = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState(null);
  const [data, setData] = useState(ourTestimonials);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [pdf, setPdf] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState({
    idx: 0,
    video: "",
  });
  const [isMobile, setIsMobile] = useState(false);
  const [cardContainerHeight, setCardContainerHeight] = useState(0);
  const cardContainerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth >= 768);
    };

    const updateHeight = () => {
      if (cardContainerRef.current) {
        setCardContainerHeight(cardContainerRef.current.offsetHeight);
      }
    };

    // Initial setup
    checkMobile();
    updateHeight();

    // Event listeners
    window.addEventListener("resize", () => {
      checkMobile();
      updateHeight();
    });

    return () => {
      window.removeEventListener("resize", () => {
        checkMobile();
        updateHeight();
      });
    };
  }, [data]);

  const handleButtonClick = (val) => {
    setIsLoading(true);
    setPdf(val);
    setIsViewerOpen(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const filteredProducts = ourTestimonials.reduce((acc, testimonial) => {
    if (!acc[testimonial.category]) {
      acc[testimonial.category] = [];
    }
    acc[testimonial.category].push(testimonial);
    return acc;
  }, {});

  const filteredTestimonials = Object.entries(filteredProducts).map(
    ([category, products]) => ({
      category,
      products: [...new Set(products.map((product) => product.product))],
    })
  );

  // Filter function
  const filterData = (cat = null, prod = null) => {
    let result = ourTestimonials;

    if (cat && prod) {
      // Filter by both category and product
      result = ourTestimonials.filter(
        (item) => item.category === cat && item.product === prod
      );
    } else if (cat) {
      // Filter by category only
      result = ourTestimonials.filter((item) => item.category === cat);
    } else if (prod) {
      // Filter by product only
      result = ourTestimonials.filter((item) => item.product === prod);
    }

    setData(result);
  };

  const handleCategory = (value) => {
    if (category === value) {
      setCategory(null);
      setProducts(null);
      filterData();
    } else {
      setCategory(value);
      setProducts(null);
      filterData(value);
    }
  };

  const handleProducts = (value1, value2) => {
    if (products === value2) {
      setCategory(category);
      setProducts(null);
      filterData();
    } else {
      setCategory(value1);
      setProducts(value2);
      filterData(value1, value2);
    }
  };

  return (
    <section className="relative w-full h-full mt-20 bg-white text-primary font-Montserrat padding">
      <div className="relative block w-full">
        <div
          className={`block space-y-12 md:space-y-16 ${path === "/testimonials" ? "pb-10 md:pb-20" : "py-10 md:py-20"}`}
        >
          <div className="block w-full space-y-4 md:space-y-6">
            <h4 className="text-2xl font-semibold tracking-wide md:text-4xl xl:text-5xl text-info">
              Our Testimonials
            </h4>
          </div>
          <div className="!relative flex flex-col w-full h-full gap-8 md:flex-row items-start">
            <div
              className={`block w-full mx-auto space-y-6 md:w-[30%] xl:w-1/5 relative`}
            // style={{
            //   height:
            //     isMobile && cardContainerHeight
            //       ? `${cardContainerHeight}px`
            //       : "auto",
            // }}
            >
              <div className="w-full md:!sticky md:top-8 pb-12 space-y-3 text-center md:space-y-8 md:pb-0">
                <h4 className="text-lg font-bold tracking-wide capitalize md:text-3xl text-info font-Montserrat">
                  categories
                </h4>
                <AccordionTestimonial
                  data={filteredTestimonials}
                  categoryList={category}
                  productList={products}
                  handleCategory={handleCategory}
                  handleProducts={handleProducts}
                />
              </div>
            </div>
            {data.length === 0 ? (
              <p className="flex items-center justify-center w-full h-screen text-base font-medium tracking-wide md:text-xl xl:text-3xl text-opacity-85 text- font-urbanist text-primary md:w-[70%] xl:w-4/5">
                No testimonials are available at this time.
              </p>
            ) : (
              <div
                ref={cardContainerRef}
                className="w-full h-full gap-5 mx-auto space-y-8 md:w-[70%] xl:w-4/5 columns-1 md:columns-2 xl:columns-3 group"
              >
                {data.map((list, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col w-full h-full overflow-hidden transition-all duration-500 ease-in-out transform shadow-xl select-none rounded-[3rem] shadow-black/50 [&:nth-child(3n+3)]:flex-col-reverse   xl:[&:nth-child(2n+3)]:flex-col-reverse  break-inside-avoid bg-primary"
                  >
                    {list.clientVideo !== "" && (
                      <div className="relative w-full h-48">
                        <div className="relative w-full h-full bg-white rounded-[2rem]">
                          <button type="submit">
                            <FaPlayCircle
                              className="absolute text-3xl cursor-pointer bottom-5 text-info right-5"
                              onClick={() => {
                                setIsVideoOpen({
                                  idx,
                                  video: list.clientVideo,
                                });
                                setIsOpen(true);
                              }}
                            />
                          </button>
                        </div>
                      </div>
                    )}
                    <div className="p-6 space-y-5 md:px-10 md:py-6 bg-primary">
                      <div className="relative mx-auto overflow-hidden border-4 rounded-full size-32 border-info">
                        <Image
                          fill
                          src={list.clientLogo}
                          alt="image"
                          title="image"
                          className="object-contain object-center"
                          sizes="120px"
                          loading="lazy"
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
        {isOpen && (
          <SpringModal2
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            video={isVideoOpen.video}
          />
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
