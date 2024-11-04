import ExploreProduction from "@/components/landing page/ExploreProduction";
import FooterLanding from "@/components/landing page/FooterLanding";
import LandingHero from "@/components/landing page/LandingHero";
import TechnicalSupport from "@/components/landing page/TechnicalSupport";
import TestimonialLanding from "@/components/landing page/TestimonialLanding";
import React from "react";
import { Modal } from "@/components/landing page/Modal";
import CompanyStats from "@/components/landing page/CompanyStats";

const Page = () => {
  return (
    <section>
      <LandingHero />
      <ExploreProduction />
      <TechnicalSupport />
      <TestimonialLanding />
      <FooterLanding />
    </section>
  );
};

export default Page;
