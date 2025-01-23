import { SeikiProductsList } from "@/libs/productsData";
import { decode } from "html-entities";

export async function generateMetadata({ params }) {
  const { id } = params;
  const decodedId = id.replace(/_/g, " ")

  // Fetch the product based on the slug
  const product = SeikiProductsList.find((item) => item.productName === decodedId);

  if (product) {
    return {
      title: decode(product.metaTitle),
      description: decode(product.metaDesc),
      openGraph: {
        title: decode(product.metaTitle),
        description: decode(product.metaDesc),
      },
    };
  }

  // Default metadata if product not found
  return {
    title: decode("VBCC's India-first high-end dental furnace for restorative treatments"),
    description: "Elevate your restorative and prosthetic treatments with our state-of-the-art dental furnaces focused on providing high-precision dental crowns, bridges, inlays, and onlays.",
    openGraph: {
      title: decode("VBCC's India-first high-end dental furnace for restorative treatments"),
      description: "Elevate your restorative and prosthetic treatments with our state-of-the-art dental furnaces focused on providing high-precision dental crowns, bridges, inlays, and onlays.",
    },
  };
}


export default function RootLayout({ children }) {
  return <main>{children}</main>;
}
