import Image from "next/image";

export default function ScrollToTop() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=9870317807&text=Hi"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
      className="fixed md:bottom-10 bottom-2 right-2 h-20 w-20 rounded-full md:right-10 z-[99] block cursor-pointer transition-transform hover:scale-105 active:scale-95"
    >
      <Image
        src="/images/whatsapp.svg"
        alt="whatsapp"
        fill
        className="object-contain drop-shadow-lg"
      />
    </a>
  );
}
