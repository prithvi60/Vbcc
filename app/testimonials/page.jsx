import DefaultLayout from "@/components/DefaultLayout";
import { TestimonialSection } from "@/components/testimonial/TestimonialSection";

export default function Home() {
  return (
    <main>
      <DefaultLayout>
        <TestimonialSection />
      </DefaultLayout>
    </main>
  );
}
