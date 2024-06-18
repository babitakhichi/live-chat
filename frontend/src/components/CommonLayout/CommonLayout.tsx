"use client";
import React, { ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

const CommonLayout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const hideHeaderFooter = [
    "/auth",
    "/reset-password",
    "/forget-password",
    "/dashboard",
  ].includes(pathname);
  console.log("pathname", pathname);
  return (
    <>
      {!hideHeaderFooter && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default CommonLayout;
