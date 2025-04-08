import { ContactForm } from "@/components/contact/ContactForm";
import { Work } from "@/components/contact/Work";
import DefaultLayout from "@/components/DefaultLayout";

export default function Home() {
  return (
    <main>
      <DefaultLayout>
        <ContactForm />
        {/* <Work /> */}
      </DefaultLayout>
    </main>
  );
}
