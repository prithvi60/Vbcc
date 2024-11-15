import CategoryHero from "@/components/categories/categoryHero";
import DefaultLayout from "@/components/DefaultLayout";

export default function Home() {
  return (
    <main>
      <DefaultLayout>
        <CategoryHero />
      </DefaultLayout>
    </main>
  );
}
