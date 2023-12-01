"use client";
import { blog } from "@/libs/data";
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
import { useState } from "react";
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
            // variant={""}
            color="primary"
            radius="full"
            size="lg"
            className="text-secondary bg-primary"
          >
            {blog.map((item) => (
              <Tab
                key={item.title}
                title={item.title}
                className="rounded-full text-base capitalize"
              >
                <div className="flex flex-wrap justify-center items-center gap-4 overflow-hidden h-[100vh] md:h-[65vh] lg:h-[74vh]">
                  {item.sub.map((card, id) => (
                    <Card
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
                        <Button
                          color="warning"
                          radius="full"
                          size="lg"
                          className="py-3 px-4 text-secondary w-full"
                        >
                          Read More
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </Tab>
            ))}
          </Tabs>
        </div>
          <Button
            color="secondary"
            variant="bordered"
            className="text-secondary px-6 py-5 border-secondary"
            size="lg"
            radius="full"
          >
            View All
          </Button>
      </div>
    </section>
  )
}

export default Blog