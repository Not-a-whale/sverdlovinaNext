import { useTranslations } from "next-intl";
import Navigation from "@/components/Navigation";
import Top from "@/components/partials/Top";

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
    </main>
  );
};

export default ServicesSlugPage;
