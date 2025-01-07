import CategoryPage from "@/components/categories/CategoryPage";
import CategoryTypes from "@/components/categories/CategoryTypes";
import DefaultLayout from "@/components/DefaultLayout";
import { data } from "@/libs/otherPage";

export default function Home() {

  return (
    <DefaultLayout>
      <CategoryPage />
      <CategoryTypes lists={data} />
    </DefaultLayout>
  );
}