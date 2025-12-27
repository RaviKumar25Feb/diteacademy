"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const showNavFooter = [
    "/",
    "/courses",
    "/tutorials",
    "/online-tests",
    "/academic-subjects",
    "/digital-marketing",
    "/about",
    "/contact",
    "/legal/privacy-policy",
    "/legal/refund-policy",
    "/legal/terms-of-use",
  ].includes(pathname);

  return (
    <>
      {showNavFooter && <Navbar />}
      {children}
      {showNavFooter && <Footer />}
    </>
  );
}
