import DefaultLayout from "@/components/DefaultLayout";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";

export default function Home() {
  return (
    <main>
      <DefaultLayout>
        <PrivacyPolicy />
      </DefaultLayout>
    </main>
  );
}
