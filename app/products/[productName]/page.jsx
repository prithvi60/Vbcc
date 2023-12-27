import { IndexSpecificPage } from "@/components/products/specific page";

export default function Home({params}) {
  const{productName} = params
  return (
    <main>
      <IndexSpecificPage productValue={productName}/>
    </main>
  );
}
