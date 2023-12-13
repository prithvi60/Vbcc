import { cards } from "@/libs/data";
import { Dumbbell } from "@/svg_components/Dumbbell";
import { Glass } from "@/svg_components/Glass";
import { Card, CardBody, CardFooter, Link } from "@nextui-org/react";
import Image from "next/image";

export const ProductCard = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full overflow-hidden bg-secondary">
      {cards.map((card, idx) => (
        <div className="block group space-y-4" key={idx}>
          <Card
            className="min-w-full md:min-w-[50%] pb-4 md:last:min-w-full md:last:col-span-2 z-10"
          >
            <CardBody className="h-[335px] w-full">
              <div className="block space-y-1.5">
                <div className="p-3.5 border border-info w-max rounded-full">
                  <Dumbbell className={"fill-info h-6 w-6 "} />
                </div>
                <div className="p-3.5 border border-info w-max rounded-full">
                  <Glass className={"h-6 w-6"} />
                </div>
              </div>
              <Link href={"/products/1"}
                className="group-hover:absolute group-hover:top-3.5 group-hover:right-4 group-hover:px-3.5
                        group-hover:py-4 group-hover:border group-hover:border-info group-hover:text-info text-base group-hover:font-urbanist group-hover:rounded-full group-hover:w-max hidden group-hover:block"
              >
                View
              </Link>
              <div className="relative h-full w-full">
                <Image
                  fill
                  src={"/product-img.png"}
                  alt="product"
                  className="absolute object-cover object-bottom last:object-contain"
                />
              </div>
            </CardBody>
            <CardFooter className="hidden group-hover:flex justify-between items-center -translate-y-96 group-hover:translate-y-0 group-hover:transition-all group-hover:duration-700">
              <div className="-translate-x-96 group-hover:transition-transform group-hover:translate-x-0 group-hover:duration-700">
                <h4 className="text-[#0D0D0D] font-urbanist">
                  {card.productName}
                </h4>
                <h4 className="text-[#6C6C6C] font-urbanist text-sm">
                  {card.type}
                </h4>
              </div>
              <Link
                href="/contact"
                className="border border-warning px-4 py-2.5 rounded-full font-urbanist text-warning"
              >
                Contact
              </Link>
            </CardFooter>
          </Card>
          <div className="group-hover:hidden flex justify-between items-center -z-10 group-hover:transition-all group-hover:duration-700">
            <div>
              <h4 className="text-[#0D0D0D] font-urbanist">
                {card.productName}
              </h4>
              <h4 className="text-[#6C6C6C] font-urbanist text-sm">
                {card.type}
              </h4>
            </div>
            <Link
              href="/contact"
              className="border border-warning px-4 py-2.5 rounded-full font-urbanist text-warning"
            >
              Contact
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};
