"use client";
import { blog } from "@/libs/data";
import {
  Card,
  CardBody,
  CardFooter,
  Tabs,
  Tab,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Btn2 } from "./Btn";
const Blog = () => {
  const [selected, setSelected] = useState("photos");
  return (
    <section className="py-16 px-6 md:px-10 xl:p-16 bg-primary font-urbanist">
      <div className="flex flex-col justify-center items-center gap-8">
        <h3 className="font-Lora text-3xl md:text-5xl text-secondary">
          News/Journal
        </h3>
        <div className="flex flex-col justify-center items-center w-full">
          <Tabs
            aria-label="Options"
            selectedKey={selected}
            onSelectionChange={setSelected}
            classNames={{
              tabList:
                "gap-4 w-full relative rounded-none p-0 h-auto justify-center flex-wrap bg-primary pb-5",
              cursor: "w-full bg-secondary rounded-full px-4 py-4",
              tab: "w-max text-base tracking-tight border border-white p-5 rounded-full font-Lora",
              tabContent: "group-data-[selected=true]:text-warning",
            }}
          >
            {blog.map((item) => (
              <Tab
                key={item.title}
                title={
                  <span className="text-white group-data-[selected=true]:text-warning capitalize">
                    {item.title}
                  </span>
                }
              >
                <div className="flex flex-wrap justify-center items-center gap-4 overflow-hidden h-[100vh] md:h-[65vh] lg:h-[74vh]">
                  {item.sub.map((card, id) => (
                    <Card
                      as={Link}
                      href={"/blog/1"}
                      className="w-[340px] md:w-[300px] bg-secondary text-warning rounded-none font-urbanist p-5 space-y-2"
                      key={id}
                    >
                      <CardBody className="space-y-4 p-0">
                        <div className="relative h-[225px] w-full">
                          <Image
                            fill
                            src={card.img}
                            alt="product"
                            className="absolute object-contain object-center"
                          />
                        </div>
                        <div className="space-y-5">
                          <h4 className="text-xl uppercase">{card.title}</h4>
                          <p className="font-Lora text-sm">{card.desc}</p>
                        </div>
                      </CardBody>
                      <CardFooter className="p-0">
                        {/* <Button
                          color="warning"
                          radius="full"
                          size="lg"
                          className="py-3 px-4 text-secondary w-full"
                        >
                          Read More
                        </Button> */}
                        <Link
                          href={"/product"}
                          className={`rounded-full px-4 py-3 group border border-warning bg-primary hover:bg-info text-center text-base duration-700 delay-75 font-urbanist capitalize w-full`}
                        >
                          <div className={`h-6 w-full overflow-hidden`}>
                            <h4
                              className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-white`}
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
        {/* <Link
          href="/blog"
          className="text-secondary px-6 py-5 border border-secondary font-urbanist rounded-full"
        >
          View All
        </Link> */}
        <Btn2
          Hbgcolor={"bg-white"}
          textColor={"text-white"}
          HtextColor={"text-warning"}
          bColor={"border-white"}
          title={"View All"}
          href={"/blog"}
        />
      </div>
    </section>
  );
};

export default Blog;
