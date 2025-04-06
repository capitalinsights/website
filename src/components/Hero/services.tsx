import Image from "next/image";
import React from "react";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

export function Services() {
  return (
    <section className="pt-16 pb-10">
      <div className="container">
        <SectionTitle
          title="Our Services"
          paragraph="Explore tailored portfolio management solutions designed to grow your wealth, manage risk, and align with your long-term financial goals."
          center
          mb="10px"
        />
        <div className="p-4 pb-10">
          <div className="flex flex-wrap items-start justify-center gap-10 max-w-screen-2xl mx-auto">
            {services.map((feature, idx) => (
              <div
                data-aos="fade-up"
                key={idx}
                className="w-72 h-[50vh] rounded-lg bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] px-5 py-2 space-y-1 relative overflow-hidden"
              >
                <div className="w-24 h-24 bg-primary rounded-full absolute top-0 -translate-y-[40%] right-0 translate-x-[40%]">
                  <p className="absolute -translate-y-1/2 bottom-0 left-1/3 -translate-x-1/2 text-white text-2xl">
                    {idx + 1}
                  </p>
                </div>
                <div className="fill-primary h-[25vh] relative">
                  <Image src={feature.svg} alt={feature.title} fill className="object-contain" />
                </div>
                <h1 className="font-bold text-xl">{feature.title}</h1>
                <p className="text-sm text-zinc-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="/services"
            className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Broking In All Exchanges",
    description:
      "Access trading services across all major financial exchanges through our comprehensive broking platform.",
    svg: "/images/services/broking.svg",
  },
  {
    title: "Financial Planning & Advisory",
    description:
      "Get expert guidance on financial planning and personalized advisory services to meet your financial goals.",
    svg: "/images/services/financial-planning.svg",
  },
  {
    title: "Insurance - Life & Health",
    description:
      "Protect yourself and your loved ones with comprehensive life and health insurance solutions tailored to your needs.",
    svg: "/images/services/insurance.svg",
  },
  {
    title: "Wealth Management - PMS / NPS / SIP",
    description:
      "Grow and manage your wealth through Portfolio Management Services, National Pension System, and Systematic Investment Plans.",
    svg: "/images/services/wealth.svg",
  },
];
