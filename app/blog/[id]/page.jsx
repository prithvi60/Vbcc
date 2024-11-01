import { BlogSpecificPage } from "@/components/blog/BlogSpecificPage";
import { ExploreCards } from "@/components/blog/ExploreCards";
import DefaultLayout from "@/components/DefaultLayout";


export default function Home() {
  return (
    <main>
      <DefaultLayout>
        <BlogSpecificPage />
        <ExploreCards />
      </DefaultLayout>
    </main>
  );
}
