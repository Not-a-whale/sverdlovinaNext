import TopSlider from "@/components/TopSlider";
import Navigation from "@/components/Navigation";
import Main from "@/components/partials/Main";
import Services from "@/components/partials/Services";
import Clients from "@/components/partials/Clients";
import Ribbon from "@/components/partials/Ribbon";
import Reviews from "@/components/partials/Reviews";
import MainMap from "@/components/partials/MainMap";
import Footer from "@/components/Footer";
import Top from "@/components/partials/Top";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");

  const heading = t("основний_заголовок");
  const description = t("додатковий_заголовок");

  return (
    <main>
      <Navigation />
      <Top heading={heading} description={description}>
        <TopSlider />
      </Top>
      <Main />
      <Services />
      <Clients />
      <Ribbon />
      <Reviews />
      <MainMap />
      <Footer />
    </main>
  );
}
