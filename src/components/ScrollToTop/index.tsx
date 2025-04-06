import Image from "next/image";
import Link from "next/link";

export default function ScrollToTop() {
  return (
    <div
      onClick={() =>
        window.open("https://api.whatsapp.com/send?phone=9870317807&text=Hi", "_blank")
      }
      className="fixed md:bottom-10 bottom-2 right-2 h-20 w-20 rounded-full md:right-10 z-[99]"
    >
      <Image
        src="/images/whatsapp.svg"
        alt="whatsapp"
        fill
        className="object-contain drop-shadow-lg"
      />
    </div>
  );
}
