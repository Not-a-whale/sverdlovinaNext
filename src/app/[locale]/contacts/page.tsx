import { useTranslations } from "next-intl";
import Navigation from "@/components/Navigation";
import Top from "@/components/partials/Top";
import TopSlider from "@/components/TopSlider";
import Footer from "@/components/Footer";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Map from "@/components/Map";
import RibbonForm from "@/components/partials/Ribbon/Form";

export default function Contacts() {
  const t = useTranslations("Index");

  const heading = t("основний_заголовок");
  const description = t("додатковий_заголовок");

  return (
    <main>
      <Navigation />
      <Top heading={heading} description={description}>
        <TopSlider />
      </Top>
      <div className="text-sm breadcrumbs *:text-lg ml-[3.75%] mt-10 hidden lg:flex ">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} href={"/"}>
              {t("Головна")}
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} href={"/services"}>
              {t("Контакти")}
            </Link>
          </li>
        </ul>
      </div>
      <section>
        <SectionHeading title={t("Звязатися  з нами")} isService={true} />
        <article className="flex gap-12 w-[85%] mx-auto">
          <div className="w-[60%] aspect-video">
            <Map />
          </div>
          <div className="w-[40%]">
            <RibbonForm />
          </div>
        </article>
      </section>
      <Footer />
    </main>
  );
}
