
import LabProducts from "@/components/categories/lab/LabProducts";
import DefaultLayout from "@/components/DefaultLayout";

export default function Home() {
  return (
    <main>
      <DefaultLayout>
        <LabProducts />
      </DefaultLayout>
    </main>
  );
}