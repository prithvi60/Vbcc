import DefaultLayout from "@/components/DefaultLayout";
import Explore from "@/components/Explore";
import Testimonials from "@/components/Testimonials";
import WCU from "@/components/WCU";
import { OurPresenceContact } from "@/components/presence/OurPresenceContact";
import { PresenceSpecificPage } from "@/components/presence/PresenceSpecificPage";

export default function Home() {
  return (
    <main>
      <DefaultLayout>
        <PresenceSpecificPage />
        <Explore />
        <WCU />
        <Testimonials />
        <OurPresenceContact
          title={"Get to know More"}
          mobTitle={"Get to know More"}
          para={
            "Discover our industrial furnaces. Call or inquire now to discuss specifications and place your order. Tailored solutions await with our in-house manufacturing expertise."
          }
        />
      </DefaultLayout>
    </main>
  );
}
