import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Shankar Dyal Sharma",
    designation: "Businessman & Trader Since 2007",
    content:
      "Capital Insights has been instrumental in growing my capital in the Financial market. Their strategies delivered impressive return in a short period. Highly recommend their service for anyone looking to maximize their investment. Their team is highly knowledgeable and dedicated, offering personalized financial strategies.",
    image: "/images/testimonials/shankar-dyal-sharma.png",
    star: 5,
  },
  {
    id: 2,
    name: "Pooja Rawat",
    designation: "Businesswoman",
    content:
      "Working with capital insights has been an excellent experience. I appreciate their attention to detail and the clear guidance they provide throughout the investment process. Their expertise in this stock market has help me grow my capital significantly delivery impressive return in a short period.",
    image: "/images/testimonials/pooja-rawat.png",
    star: 5,
  },
  {
    id: 3,
    name: "Deepak Singh",
    designation: "Manager in Letstrack",
    content:
      "Capital Insights has been a game changer for me. Their expert strategies have helped me grow my capital in the Investment market delivering impressive return in a short time. I highly recommend their service for anyone looking to make smart profitable investment that have helped me increase my capital in the investment market significantly.",
    image: "/images/testimonials/deepak-singh.png",
    star: 5,
  },
  {
    id: 4,
    name: "Sheetal Vashishtha",
    designation: "Adv & Legal Advisor",
    content:
      "I have been working with capital insights for a while now. The team provides clear actionable strategies to my financial goals. The team consistently delivers valuable insights, enabling me to make informed decisions with confidence. I am extremely satisfied with the result and their professional approach.",
    image: "/images/testimonials/Sheetal-Vashishtha.png",
    star: 5,
  },
  {
    id: 5,
    name: "Pranjal Gupta",
    designation: "Happy Client",
    content:
      "What sets Capital Insights apart is not just your deep knowledge of the investment market but also the personalized approach you bring to each client. The team took the time to thoroughly understand my financial goals, risk tolerance, and longterm aspirations. This level of attention to detail instilled a great sense of trust and confidence.",
    image: "/images/testimonials/pranjal-gupta.png",
    star: 5,
  },
  {
    id: 6,
    name: "Itika Chawla",
    designation: "College Student",
    content:
      "Thank you for your dedication for consistently going above and beyond to deliver outstanding results. I am grateful for the positive impact Capital Insights has had on my financial journey, I would wholeheart recommend your services to anyone seeking reliable, effective, and client-focused financial expertise.",
    image: "/images/testimonials/itika-chawla.png",
    star: 5,
  },
  {
    id: 7,
    name: "Ranjeet Singh",
    designation: "Software Engineer in Ixambee",
    content:
      "I want to take a moment to express my deepest appreciation for the outstanding service provided by Capital Insights. The expertise and dedication demonstrated in helping me grow my capital in the investment market. It was clear that your organization is committed to delivering exceptional financial solutions tailored to individual needs.",
    image: "/images/testimonials/ranjeet-singh.png",
    star: 5,
  },
  {
    id: 8,
    name: "Girish Sharma",
    designation: "Deputy Manager in HDFC Bank",
    content:
      "The team consistently delivers valuable insights, enabling me to make informed decisions with confidence. I highly recommend Capital Insights to anyone looking to grow their portfolio and achieve their financial goals. Thank you for your excellent work!",
    image: "/images/testimonials/girish-sharma.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Reviews by Happy Clients"
          paragraph="Real voices, real results – see what our clients are saying about the transformative impact of our solutions."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-5 z-[-1]">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-5 left-0 z-[-1]">
        <svg
          width="279"
          height="106"
          viewBox="0 0 279 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
              stroke="url(#paint0_linear_72:302)"
            />
            <path
              d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
              stroke="url(#paint1_linear_72:302)"
            />
            <path
              d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
              stroke="url(#paint2_linear_72:302)"
            />
            <path
              d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
              stroke="url(#paint3_linear_72:302)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_72:302"
              x1="256.267"
              y1="53.6717"
              x2="-40.8688"
              y2="8.15715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="256.267"
              y1="42.6717"
              x2="-40.8688"
              y2="-2.84285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_72:302"
              x1="256.267"
              y1="64.6717"
              x2="-40.8688"
              y2="19.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_72:302"
              x1="256.267"
              y1="76.6717"
              x2="-40.8688"
              y2="31.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
