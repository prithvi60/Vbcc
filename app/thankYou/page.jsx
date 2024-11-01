import DefaultLayout from "@/components/DefaultLayout";
import { ThankYouComponent } from "@/components/ThankYouComponent";

export default function Home() {
  return (
    <main>
      <DefaultLayout>
        <ThankYouComponent />
      </DefaultLayout>
    </main>
  );
}
