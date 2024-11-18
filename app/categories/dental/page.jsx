
import DentalProducts from "@/components/categories/dental/DentalProducts";
import DefaultLayout from "@/components/DefaultLayout";
import BreadCrumb from "../BreadCrumb";

export default function Home() {
  return (
    <main>
      <DefaultLayout>
        <DentalProducts />
      </DefaultLayout>
    </main>
  );
}
