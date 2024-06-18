import Hero from "@/components/Hero/Hero";
import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations("Index");
  return (
    <>
      {/* <SeoHead title='LaslesVPN Landing Page' /> */}
      <h1 style={{ backgroundColor: "black" }}>{t("title")}</h1>
      <Hero />
      {/* <Feature />
      <Pricing /> */}
    </>
  );
}
