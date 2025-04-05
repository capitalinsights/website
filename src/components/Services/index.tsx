import Image from "next/image";
import React from "react";

export function FeaturesSection() {
  return (
    <div className="p-4 pb-20">
      <div className="flex flex-wrap items-start justify-center gap-10 max-w-screen-2xl mx-auto">
        {services.map((feature, idx) => (
          <div className="w-72 h-[50vh] rounded-lg bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] px-5 py-2 space-y-1 relative overflow-hidden">
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
    title: "Online Mutual Fund, NFO, Bonds, IPO, PRE IPO",
    description:
      "Invest in a variety of financial instruments including mutual funds, new fund offers, bonds, IPOs, and pre-IPO opportunities.",
    svg: "/images/services/mutual-funds.svg",
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
  {
    title: "All Financial Solutions",
    description:
      "Access a complete suite of financial services designed to address all your financial requirements in one place.",
    svg: "/images/services/financial-planning-2.svg",
  },
  {
    title: "Retail & HNI Financing in ETFs, OFS, IPOs & Bonds",
    description:
      "Tailored financing for Retail and HNIs across ETFs, OFS, IPOs, bonds, and buy-backs.",
    svg: "/images/services/buy-back.svg",
  },
];
