"use client";
import { products } from "@/libs/data";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Tabs,
  Tab,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Btn, Btn2 } from "./Btn";
const Products = () => {
  const [selected, setSelected] = useState("photos");
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
                <div className="flex flex-wrap justify-center items-center gap-4 overflow-hidden h-[100vh] md:h-[73vh]">
                  {item.sub.map((card, id) => (
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
                          className={`rounded-full px-4 py-3 border border-warning bg-white hover:bg-info text-center text-base duration-700 delay-75 font-urbanist capitalize w-full`}
                        >
                          <div className={`h-6 w-full overflow-hidden`}>
                            <h4
                              className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-warning`}
                            >
                              Request a Quote
                            </h4>
                            <h4
                              className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-white`}
                            >
                              Request a Quote
                            </h4>
                          </div>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
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
          href={"/product"}
        />
        {/* <Link
          href="/products"
          className="text-warning px-6 py-5 border border-warning rounded-full "
        >
          View All Products
        </Link> */}
      </div>
    </section>
  );
};

export default Products;
