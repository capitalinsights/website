import Blog from "@/components/Blog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { FeaturesSection } from "@/components/Services";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Capital Insights",
  description: "Services We Offer At Capital Insights",
};

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services We Offer"
        description="Embark on a visual journey through our gallery, where innovation meets creativity, showcasing a tapestry of successful projects and unparalleled expertise that  defines Thynk Unlimited's commitment to excellence."
      />
      <FeaturesSection />
      <Blog />
    </>
  );
};

export default ServicesPage;
