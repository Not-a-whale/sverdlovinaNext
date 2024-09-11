import Navigation from "@/components/Navigation";
import Top from "@/components/partials/Top";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { IServiceText } from "@/shared/interfaces/service-text.interface";
import { getTranslations } from "next-intl/server";

const getData = async (
  slug: string,
  locale: string,
): Promise<IServiceText | undefined> => {
  console.log(slug);
  console.log(locale);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/services?slug=${slug}&locale=${locale}`,
      {
        cache: "no-store",
      },
    );
    return (await res.json()) as IServiceText;
  } catch (e) {
    console.log(e);
  }
};

const ServicesSlugPage = async ({
  params,
}: {
  params: { slug: string; locale: string };
}) => {
  const t = await getTranslations("Index");
  const data = await getData(params.slug, params.locale);

  if (!data || Object.keys(data).length === 0) {
    return null;
  }

  return (
    <main>
      <Navigation />
      <Top
        heading={data.serviceHeading}
        description={data.serviceDescription}
        backgroundImg={params.slug}
      ></Top>
      <Breadcrumbs
        fragments={[
          { title: t("Головна"), href: "/" },
          { title: t("Послуги"), href: "/services" },
          {
            title: t(data.serviceHeading),
            href: "/services/" + params.slug,
          },
        ]}
      />
      <section className="flex flex-col gap-2 mb-10 md:mb-20 lg:mb-36">
        <SectionHeading title={data.serviceTextHeading} isService={true} />
        <article className="flex flex-col lg:flex-row gap-4 lg:gap-20 justify-between w-[90%] mx-auto">
          <div className="flex flex-1 items-start">
            <p
              className="flex-1 lg:text-2xl text-lg text-center lg:text-left"
              dangerouslySetInnerHTML={{
                __html: data.serviceTextTopLeft,
              }}
            ></p>
          </div>
          <div className="flex flex-1 items-start">
            <p
              className="flex flex-col flex-1 lg:text-2xl text-lg text-center lg:text-left lg:pt-[2.5rem]"
              dangerouslySetInnerHTML={{
                __html: data.serviceTextTopRight,
              }}
            ></p>
          </div>
        </article>
        <SectionHeading title={data.servicePriceHeading} isService={true} />
        <article className="flex flex-col lg:flex-row gap-4 lg:gap-20 justify-between w-[90%] mx-auto">
          <div className="flex flex-1 items-start">
            <p
              className="text-lg lg:text-2xl text-center lg:text-left"
              dangerouslySetInnerHTML={{ __html: data.serviceTextBottomLeft }}
            ></p>
          </div>
          <div className="flex flex-1 items-start">
            <p
              className="text-lg lg:text-2xl text-center lg:text-left"
              dangerouslySetInnerHTML={{ __html: data.serviceTextBottomRight }}
            ></p>
          </div>
        </article>
      </section>
      <Footer />
    </main>
  );
};

export default ServicesSlugPage;
