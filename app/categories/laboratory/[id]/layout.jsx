import { LabProductsList } from "@/libs/productsData";
import { decode } from "html-entities";


export async function generateMetadata({ params }) {
  const { id } = params;
  const decodedId = id.replace(/_/g, " ")
  // console.log(decodedId);

  // Fetch the product based on the slug
  const product = LabProductsList.find((item) => item.productName === decodedId);

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
    title: decode("Discover VBCC's high-quality laboratory furnaces"),
    description: "Explore our extensive range of furnaces with temperatures up to 1800°C designed for applications ranging from research labs to industrial-scale operations for metallurgy, ceramics, and refractory.",
    openGraph: {
      title: decode("Discover VBCC's high-quality laboratory furnaces"),
      description: "Explore our extensive range of furnaces with temperatures up to 1800°C designed for applications ranging from research labs to industrial-scale operations for metallurgy, ceramics, and refractory.",
      images: [{
        url: 'https://cdn.shopifyapp.shop/vbcc/homepage/category-2.png',
        width: 800,
        height: 600,
        alt: 'Laboratory Furnaces',
      }],
    },
  };
}


export default function RootLayout({ children }) {
  return <main>{children}</main>;
}
