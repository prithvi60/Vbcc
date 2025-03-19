import { LabEquiptProductsList } from "@/libs/productsData";
import { decode } from "html-entities";

export async function generateMetadata({ params }) {
  const { id } = params;
  const decodedId = id.replace(/_/g, " ")

  // Fetch the product based on the slug
  const product = LabEquiptProductsList.find((item) => item.productName === decodedId);

  if (product) {
    return {
      title: decode(product.metaTitle),
      description: decode(product.metaDesc),
      openGraph: {
        title: decode(product.metaTitle),
        description: decode(product.metaDesc),
        images: [
          {
            url: product.mainImg,
            width: 800,
            height: 600,
            alt: decode(product.productName),
          },
        ],
      },
    };
  }

  // Default metadata if product not found
  return {
    title:
      "Laboratory Equipment - VBCC",
    description:
      "Jikken, a VBCC sub-brand, offers high-performance lab equipment for research and industrial applications, specializing in precision instruments for material synthesis and coating processes",
    openGraph: {
      title:
        "Laboratory Equipment - VBCC",
      description:
        "Jikken, a VBCC sub-brand, offers high-performance lab equipment for research and industrial applications, specializing in precision instruments for material synthesis and coating processes",
    },
  };
}


export default function RootLayout({ children }) {
  return <main>{children}</main>;
}
