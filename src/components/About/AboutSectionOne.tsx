import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  return (
    <section id="about" className="sm:pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] sm:pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div data-aos="fade-right" className="w-full px-4 lg:w-7/12">
              <div className={"w-full max-md:text-center mb-4"}>
                <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                  Mayankesh Kaushik
                </h2>
                <h6 className="mb-4 text-xl font-extrabold !leading-tight text-black dark:text-white sm:text-3xl">
                  (Co-Founder)
                </h6>
                <p className="text-base !leading-relaxed text-body-color md:text-lg">
                  Founder of Capital Insights, is a leading financial and investment expert in
                  India, certified by National Institute of Securities Markets (NISM) and National
                  Stock Exchange (NSE). He has excelled in his field, leveraging extensive stock
                  market experience to manage high-value portfolios worth crores, including his own.
                  Renowned for his expertise in technical and fundamental analysis, personal
                  finance, and market research, he consistently delivers exceptional annual returns
                  of 30-40%.
                </p>
              </div>
            </div>

            <div data-aos="fade-left" className="w-full px-4 lg:w-5/12">
              <div className="relative mx-auto h-[70vh] rounded-xl overflow-clip w-auto lg:mr-0">
                <Image
                  src="/images/about/founder.jpg"
                  alt="about-image"
                  fill
                  objectFit="cover"
                  className="mx-auto max-w-full rounded-xl drop-shadow-three lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
