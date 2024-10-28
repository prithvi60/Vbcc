import CompanyStats from "@/components/landing page/CompanyStats";
import ExploreProduction from "@/components/landing page/ExploreProduction";
import FooterLanding from "@/components/landing page/FooterLanding";
import LandingHero from "@/components/landing page/LandingHero";
import TechnicalSupport from "@/components/landing page/TechnicalSupport";
import TestimonialLanding from "@/components/landing page/TestimonialLanding";
import React from "react";
import LandingLayout from "./layout";
import { Modal } from "@/components/landing page/Modal";

const Page = () => {
  return (
    <LandingLayout>
      <section>
        <LandingHero />
        <CompanyStats />
        <ExploreProduction />
        <TechnicalSupport />
        <TestimonialLanding />
        <FooterLanding />
        <Modal />
      </section>
    </LandingLayout>
  );
};

export default Page;
