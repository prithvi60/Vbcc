import { AnalyticalInstrumentsList } from "@/libs/productsData";
import { decode } from "html-entities";

export async function generateMetadata({ params }) {
  const { id } = params;
  const decodedId = id.replace(/_/g, " ")

  // Fetch the product based on the slug
  const product = AnalyticalInstrumentsList.find((item) => item.productName === decodedId);

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

  return {
    title: decode("Laboratory Analytical Instruments"),
    description: "VBCC offers precision instruments for thermal expansion, conductivity, and resistivity studies. Ideal for advanced research, our tools guarantee accuracy and ease of use.",
    openGraph: {
      title: decode("Laboratory Analytical Instruments"),
      description: "VBCC offers precision instruments for thermal expansion, conductivity, and resistivity studies. Ideal for advanced research, our tools guarantee accuracy and ease of use.",
      images: [{
        url: 'http://cdn.shopifyapp.shop/vbcc/Products/Analytical%20Instruments/Reverse%20Thermal%20Expansion%20System/left.png',
        width: 800,
        height: 600,
        alt: 'Laboratory Analytical Instruments',
      }],
    },
  };
}


export default function RootLayout({ children }) {
  return <main>{children}</main>;
}
