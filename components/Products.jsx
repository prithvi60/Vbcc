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
import { useState } from "react";
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
            variant={"light"}
            color="primary"
            radius="full"
            size="lg"
          >
            {products.map((item) => (
              <Tab
                key={item.title}
                title={item.title}
                className="rounded-full text-base capitalize"
              >
                <div className="flex flex-wrap justify-center items-center gap-4 overflow-hidden h-[100vh] md:h-[73vh]">
                  {item.sub.map((card, id) => (
                    <Card
                      className="w-[340px] md:w-[300px] bg-primary rounded-none font-urbanist p-5 space-y-2"
                      key={id}
                    >
                      <CardHeader className="flex justify-between items-center">
                        <p className="text-md">in-stock</p>
                        <p className="text-small">$718</p>
                      </CardHeader>
                      <CardBody className="space-y-4">
                        <div className="relative h-[225px] w-full">
                          <Image
                            fill
                            src={card.img}
                            alt="product"
                            className="absolute object-contain object-center"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm uppercase">{card.title}</h4>
                          <p className="font-Lora text-xl">{card.desc}</p>
                        </div>
                      </CardBody>
                      <CardFooter className="p-0">
                        <Button
                          color="secondary"
                          radius="full"
                          className="py-3 px-4 text-black w-full"
                        >
                          Request a Quote
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
            className="text-warning px-6 py-5 border-warning"
            size="lg"
            radius="full"
          >
            View All Products
          </Button>
      </div>
    </section>
  );
};

export default Products;
