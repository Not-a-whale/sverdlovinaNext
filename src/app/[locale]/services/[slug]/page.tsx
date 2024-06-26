import { useTranslations } from "next-intl";
import Navigation from "@/components/Navigation";
import Top from "@/components/partials/Top";
import SectionHeading from "@/components/SectionHeading";
import { richTextConfig } from "@/shared/consts/rich-text-config";
import Footer from "@/components/Footer";
import { ReactNode } from "react";
import { ModalTriggerLink } from "@/components/shared/modal-trigger-link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const ServicesSlugPage = ({ params }: { params: { slug: string } }) => {
  const t = useTranslations("Index");

  const heading = t(`service-${params.slug}`);
  const serviceHeading = t(`service-heading-${params.slug}`);
  const servicePriceHeading = t(`service-price-heading-${params.slug}`);
  const description = t.rich(
    `service-${params.slug}-description`,
    richTextConfig,
  );
  const serviceTextTopLeft = t.rich(
    `service-text-top-left-${params.slug}`,
    richTextConfig,
  );
  const serviceTextTopRight = t.rich(
    `service-text-top-right-${params.slug}`,
    richTextConfig,
  );
  const servicePriceTextBottomLeft = t.rich(
    `service-price-text-bottom-left-${params.slug}`,
    richTextConfig,
  );
  const servicePriceTextBottomRight = t.rich(
    `service-price-text-bottom-right-${params.slug}`,
    {
      ...richTextConfig,
      requestLink: (chunks: ReactNode) => <ModalTriggerLink chunks={chunks} />,
    },
  );

  return (
    <main>
      <Navigation />
      <Top
        heading={heading}
        description={description}
        backgroundImg={params.slug}
      ></Top>
      <Breadcrumbs
        fragments={[
          { title: t("Головна"), href: "/" },
          { title: t("Послуги"), href: "/services" },
          { title: heading, href: "/services/" + params.slug },
        ]}
      />
      <section className="flex flex-col gap-2 mb-10 md:mb-20 lg:mb-36">
        <SectionHeading title={serviceHeading} isService={true} />
        <article className="flex flex-col lg:flex-row gap-4 lg:gap-20 justify-between w-[90%] mx-auto">
          <div className="flex flex-1 items-start">
            <p className="flex-1 lg:text-2xl text-lg text-center lg:text-left">
              {serviceTextTopLeft}
            </p>
          </div>
          <div className="flex flex-1 items-start">
            <p className="flex flex-col flex-1 lg:text-2xl text-lg text-center lg:text-left lg:pt-[2.5rem]">
              {serviceTextTopRight}
            </p>
          </div>
        </article>
        <SectionHeading title={servicePriceHeading} isService={true} />
        <article className="flex flex-col lg:flex-row gap-4 lg:gap-20 justify-between w-[90%] mx-auto">
          <div className="flex flex-1 items-start">
            <p className="text-lg lg:text-2xl text-center lg:text-left">
              {servicePriceTextBottomLeft}
            </p>
          </div>
          <div className="flex flex-1 items-start">
            <p className="text-lg lg:text-2xl text-center lg:text-left">
              {servicePriceTextBottomRight}
            </p>
          </div>
        </article>
      </section>
      <Footer />
    </main>
  );
};

export default ServicesSlugPage;
