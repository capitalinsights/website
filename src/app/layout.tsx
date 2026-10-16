"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "../styles/index.css";
import { Toaster } from "react-hot-toast";
import AOSProvider from "@/lib/aos";
import { StickyNavbarProvider } from "@/hooks/use-sticky-nav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC]`}>
        <StickyNavbarProvider>
          <ScrollToTop />
          <Toaster />
          <Header />
          <AOSProvider>{children}</AOSProvider>
          <Footer />
        </StickyNavbarProvider>
      </body>
    </html>
  );
}
