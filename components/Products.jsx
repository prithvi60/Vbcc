"use client";
import { products } from "@/libs/data";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Tabs,
  Tab,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Btn2 } from "./Btn";
import Slider from "react-slick";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute -bottom-12 right-0 border border-primary py-3 px-5 cursor-pointer rounded-full bg-secondary"
      onClick={onClick}
    >
      <div className="relative h-5 w-5">
        <Image
          fill
          src="https://ik.imagekit.io/webibee/VBCC/arrow-right.svg"
          alt="Logo"
          className="absolute object-contain object-center"
        />
      </div>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute -bottom-12 left-0 border border-primary py-3 px-5 cursor-pointer rounded-full bg-secondary z-20"
      onClick={onClick}
    >
      <div className="relative h-5 w-5">
        <Image
          fill
          src="https://ik.imagekit.io/webibee/VBCC/arrow-left.svg"
          alt="Logo"
          className="absolute object-contain object-center"
        />
      </div>
    </div>
  );
}

const Products = () => {
  const [selected, setSelected] = useState("photos");
  const [width, setWidth] = useState(0)
  const [count,setCount] = useState(8);
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

useEffect(() =>{
  setWidth(window.innerWidth)
},[])

useEffect(() =>{
  width >= 1440
  ? setCount(8)
  : width >= 1024
  ? setCount(6)
  : width >= 810
  ? setCount(4)
  : setCount(6)
},[width])



  // const [windowSize, setWindowSize] = useState(window.innerWidth)

  // const windowSize = window.innerWidth
  // console.log(windowSize);
  // useEffect(()=>{
  //   const tabWidth = () => {
  //     if(windowSize > 1440){
  //       setWindowSize(window.innerWidth)
  //       setCount(8)
  //       // console.log("desk");
  //     }
  //     else if(windowSize > 1024){
  //       setWindowSize(window.innerWidth)
  //       setCount(6)
  //       // console.log("lag");
  //     } else if (windowSize > 810){
  //       setWindowSize(window.innerWidth)
  //       setCount(4)
  //       // console.log("tab");
  //     } else if(windowSize > 390){
  //       setWindowSize(window.innerWidth)
  //       setCount(6)
  //       // console.log("mob");
  //     } else{
  //       setWindowSize(window.innerWidth)
  //       setCount(8)
  //       // console.log("tag");
  //     }
  //   }
  //   window.addEventListener("resize",tabWidth)

  //   return () =>{
  //     window.removeEventListener("resize",tabWidth)
  //   }
  // },[windowSize,count])

  // const deskWidth = () =>setCount(8)
  // const tabWidth2 = () =>setCount(4)
  // const mobileWidth = () =>setCount(6)
  // useEffect(()=>{

  //   const deskHandler = window.matchMedia("(max-widht: 1440px)")
  //   const tabHandler = window.matchMedia("(max-widht: 1024px)")
  //   const tab2Handler = window.matchMedia("(max-widht: 810px)")
  //   const mobileHandler = window.matchMedia("(max-widht: 390px)")

  //   window.innerWidth()

  //   deskHandler.addEventListener("change",deskWidth)
  //   tabHandler.addEventListener("change",tabWidth)
  //   tab2Handler.addEventListener("change",tabWidth2)
  //   mobileHandler.addEventListener("change",mobileWidth)

  //   return ()=>{
  //     deskHandler.removeEventListener("change",deskWidth)
  //     tabHandler.removeEventListener("change",tabWidth)
  //     tab2Handler.removeEventListener("change",tabWidth2)
  //     mobileHandler.removeEventListener("change",mobileWidth)
  //   }

  // },[count])

  // console.log("after",count);

  return (
    <section className="py-16 px-6 md:px-10 xl:p-16 bg-secondary font-urbanist">
      <div className="flex flex-col justify-center items-center gap-8">
        <h3 className="font-Lora text-3xl md:text-5xl text-warning">
          Our Products
        </h3>
        <div className="flex flex-col justify-center items-center w-full">
          <Tabs
            aria-label="Options"
            selectedKey={selected}
            onSelectionChange={setSelected}
            classNames={{
              tabList:
                "gap-4 w-full relative rounded-none p-0 h-auto justify-center flex-wrap bg-secondary pb-5",
              cursor: "w-full bg-primary rounded-full px-4 py-4",
              tab: "w-max text-base tracking-tight border border-warning p-5 rounded-full font-Lora",
              tabContent: "group-data-[selected=true]:text-white",
            }}
          >
            {products.map((item) => (
              <Tab
                key={item.title}
                title={
                  <span className="text-warning group-data-[selected=true]:text-white capitalize">
                    {item.title}
                  </span>
                }
              >
                <div className="hidden md:flex flex-wrap justify-center items-center gap-4 overflow-hidden h-full">
                  {item.sub.slice(0, count).map((card, id) => (
                    <Card
                      as={Link}
                      href={"/products/1"}
                      className="w-[340px] md:w-[300px] bg-primary hover:bg-blue-950 rounded-none font-urbanist p-5 space-y-2 group"
                      key={id}
                    >
                      <CardHeader className="flex justify-between items-center">
                        <p className="text-md">in-stock</p>
                        <p className="text-small">$718</p>
                      </CardHeader>
                      <CardBody className="space-y-4 relative">
                        <div className="relative h-[225px] w-full">
                          <Image
                            fill
                            src={card.img}
                            alt="product"
                            className="absolute object-contain object-center"
                          />
                        </div>
                        {/* <div> */}
                        <p
                          className="group-hover:absolute group-hover:top-2 group-hover:right-2.5 group-hover:px-3.5
                        group-hover:py-4 group-hover:border group-hover:border-info group-hover:text-info text-base group-hover:font-urbanist group-hover:rounded-full group-hover:w-max hidden group-hover:block"
                        >
                          View
                        </p>
                        {/* </div> */}
                        <div>
                          <h4 className="text-sm uppercase">{card.title}</h4>
                          <p className="font-Lora text-xl">{card.desc}</p>
                        </div>
                      </CardBody>
                      <CardFooter className="p-0">
                        <Link
                          href={"/product"}
                          className={`rounded-full px-4 py-3 border border-warning bg-white group-hover:bg-info text-center text-base duration-700 delay-75 font-urbanist capitalize w-full`}
                        >
                          <div className={`h-6 w-full overflow-hidden`}>
                            <h4
                              className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-warning`}
                            >
                              Request a Quote
                            </h4>
                            <h4
                              className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 group-hover:text-white`}
                            >
                              Request a Quote
                            </h4>
                          </div>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="block w-[320px] h-auto md:hidden bg-transparent">
                <Slider {...settings}>
                {item.sub.slice(0, count).map((card, id) => (
                    <Card
                      as={Link}
                      href={"/products/1"}
                      className="w-[280px] bg-primary hover:bg-blue-950 rounded-none font-urbanist p-5 space-x-2 group"
                      key={id}
                    >
                      <CardHeader className="flex justify-between items-center">
                        <p className="text-md">in-stock</p>
                        <p className="text-small">$718</p>
                      </CardHeader>
                      <CardBody className="space-y-4 relative">
                        <div className="relative h-[225px] w-full">
                          <Image
                            fill
                            src={card.img}
                            alt="product"
                            className="absolute object-contain object-center"
                          />
                        </div>
                        <p
                          className="group-hover:absolute group-hover:top-2 group-hover:right-2.5 group-hover:px-3.5
                        group-hover:py-4 group-hover:border group-hover:border-info group-hover:text-info text-base group-hover:font-urbanist group-hover:rounded-full group-hover:w-max hidden group-hover:block"
                        >
                          View
                        </p>
                        <div>
                          <h4 className="text-sm uppercase">{card.title}</h4>
                          <p className="font-Lora text-xl">{card.desc}</p>
                        </div>
                      </CardBody>
                      <CardFooter className="p-0">
                        <Link
                          href={"/product"}
                          className={`rounded-full px-4 py-3 border border-warning bg-white group-hover:bg-info text-center text-base duration-700 delay-75 font-urbanist capitalize w-full`}
                        >
                          <div className={`h-6 w-full overflow-hidden`}>
                            <h4
                              className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-warning`}
                            >
                              Request a Quote
                            </h4>
                            <h4
                              className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 group-hover:text-white`}
                            >
                              Request a Quote
                            </h4>
                          </div>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </Slider>
                </div>
              </Tab>
            ))}
          </Tabs>
        </div>
        <Btn2
          Hbgcolor={"bg-primary"}
          textColor={"text-warning"}
          HtextColor={"text-white"}
          bColor={"border-warning"}
          title={"View All Products"}
          href={"/products"}
        />
      </div>
    </section>
  );
};

export default Products;
