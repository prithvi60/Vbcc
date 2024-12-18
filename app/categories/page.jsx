import CategoryPage from "@/components/categories/CategoryPage";
import CategoryTypes from "@/components/categories/CategoryTypes";
import DefaultLayout from "@/components/DefaultLayout";

export default function Home() {

  return (
    <DefaultLayout>
      <CategoryPage />
      <CategoryTypes />
    </DefaultLayout>
  );
}