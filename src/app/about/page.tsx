import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Testimonials from "@/components/Testimonials";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Capital Insights",
  description: "About Page For Capital Insights",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Your Wealth, Handled by Experts"
        description="Meet the team behind the strategies and hear from clients who’ve experienced real results. Explore our story, our values, and the impact we strive to make every day."
      />
      <AboutSectionOne />
      <Testimonials />
    </>
  );
};

export default AboutPage;
