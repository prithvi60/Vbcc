import DefaultLayout from "@/components/DefaultLayout";
import { TermsOfService } from "@/components/TermsOfService";

export default function Home() {
  return (
    <main>
      <DefaultLayout>
        <TermsOfService />
      </DefaultLayout>
    </main>
  );
}
