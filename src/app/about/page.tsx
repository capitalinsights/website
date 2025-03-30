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
        pageName="Your Money, Handled by Expert"
        description="Embark on a visual journey through our gallery, where innovation meets creativity, showcasing a tapestry of successful projects and unparalleled expertise that  defines Thynk Unlimited's commitment to excellence."
      />
      <AboutSectionOne />
      <Testimonials />
    </>
  );
};

export default AboutPage;
