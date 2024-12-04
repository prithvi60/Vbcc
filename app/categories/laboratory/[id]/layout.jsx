import { LabProductsList } from "@/libs/productsData";


export async function generateMetadata({ params }) {
  const { id } = params;
  const decodedId = decodeURIComponent(id)

  // Fetch the product based on the slug
  const product = LabProductsList.find((item) => item.productName === decodedId);

  if (product) {
    return {
      title: product.metaTitle,
      description: product.metaDesc,
    };
  }

  // Default metadata if product not found
  return {
    title: "Discover VBCC’s high-quality laboratory furnaces",
    description: "Explore our extensive range of furnaces with temperatures up to 1800°C designed for applications ranging from research labs to industrial-scale operations for metallurgy, ceramics, and refractory.",
  };
}


export default function RootLayout({ children }) {
  return <main>{children}</main>;
}
