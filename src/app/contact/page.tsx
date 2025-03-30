import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Capital Insights",
  description: "Contact Page for Capital Insights",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Get in touch with us for any inquiries or support. We're here to help and look forward to connecting with you!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
