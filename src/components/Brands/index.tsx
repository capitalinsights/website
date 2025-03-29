import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import SectionTitle from "../Common/SectionTitle";

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <SectionTitle
          title="Our Channel Partners"
          paragraph="We deals in all types of financial products like that maintain
personal finance create future corpus and prevent health
and life via insurance"
          center
          mb="10px"
        />
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 my-12">
            <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <div className="relative h-20 w-full transition">
        <Image src={image} alt={name} fill className="object-contain" />
      </div>
    </div>
  );
};
