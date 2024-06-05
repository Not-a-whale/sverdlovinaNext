import { useTranslations } from "next-intl";
import Navigation from "@/components/Navigation";
import Top from "@/components/partials/Top";
import TopSlider from "@/components/TopSlider";
import Footer from "@/components/Footer";

export default function About_us() {
  const t = useTranslations("Index");

  const heading = t("основний_заголовок");
  const description = t("додатковий_заголовок");

  return (
    <main>
      <Navigation />
      <Top heading={heading} description={description}>
        <TopSlider />
      </Top>
      <Footer />
    </main>
  );
}
