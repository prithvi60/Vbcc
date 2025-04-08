import DefaultLayout from "@/components/DefaultLayout";
import TestimonialHero from "@/components/testimonial/TestimonialHero";
import TestimonialSections from "@/components/testimonial/TestimonialSections";

export default function Home() {
  return (
    <main>
      <DefaultLayout>
        {/* <TestimonialHero /> */}
        <TestimonialSections />
      </DefaultLayout>
    </main>
  );
}
