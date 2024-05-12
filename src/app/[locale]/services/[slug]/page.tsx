import { useTranslations } from "next-intl";
import Navigation from "@/components/Navigation";
import Top from "@/components/partials/Top";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const ServicesSlugPage = ({ params }: { params: { slug: string } }) => {
  const t = useTranslations("Index");
  const heading = t(`service-${params.slug}`);
  const description = t.rich(`service-${params.slug}-description`, {
    important: (chunks) => <b>{chunks}</b>,
  });

  return (
    <main>
      <Navigation />
      <Top
        heading={heading}
        description={description}
        backgroundImg={params.slug}
      ></Top>
      <div className="text-sm breadcrumbs *:text-lg ml-[3.75%] my-10 hidden lg:flex">
        <ul>
          <li>
            <Link href={"/"}>{t("Головна")}</Link>
          </li>
          <li>
            <Link href={"/services"}>{t(`service-${params.slug}`)}</Link>
          </li>
        </ul>
      </div>
      <SectionHeading title={"Види послуг"} />;
    </main>
  );
};

export default ServicesSlugPage;
