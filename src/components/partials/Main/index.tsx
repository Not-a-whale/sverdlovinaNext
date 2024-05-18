import SectionHeading from "@/components/SectionHeading";

import SideSlider from "@/components/SideSlider";
import { richTextConfig } from "@/shared/consts/rich-text-config";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import { Link } from "@/navigation";

const Main = () => {
  const t = useTranslations("Index");
  const mainHeading = t.rich(`MAIN_HEADING`, {
    ...richTextConfig,
    linktoaboutus: (chunks: ReactNode) => (
      <Link className="text-background" href="/about_us">
        {chunks}
      </Link>
    ),
  });

  const mainDescription = t.rich(`MAIN_DESCRIPTION`, {
    ...richTextConfig,
    contactslink: (chunks: ReactNode) => (
      <Link className="text-background" href={"/contacts"}>
        {chunks}
      </Link>
    ),
    serviceslink: (chunks: ReactNode) => (
      <Link className="text-background" href={"/services"}>
        {chunks}
      </Link>
    ),
  });

  return (
    <div className="text-[32px] px-[5%] lg:mb-[25rem]">
      <SectionHeading title={t("Про компанію")} />
      <div className="flex justify-between gap-20 flex-col-reverse lg:flex-row">
        <SideSlider />
        <div className="w-full lg:w-[45%] 2xl:w-[60%]">
          <h2 className="uppercase font-bold mb-4 text-center lg:text-left text-xl lg:text-3xl">
            {mainHeading}
          </h2>
          <p className="text-center lg:text-left text-xl lg:text-2xl">
            {mainDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
