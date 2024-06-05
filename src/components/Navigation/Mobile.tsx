import { useTranslations } from "next-intl";
import { Menu } from "@mui/icons-material";
import Image from "next/image";
import Phone from "@/assets/images/phone.svg";
import FlagSelect from "@/components/Navigation/FlagSelect";
import { Link } from "@/navigation";

type MobileProps = {
  isScrolled?: boolean;
};

export const Mobile = ({ isScrolled }: MobileProps) => {
  const t = useTranslations("Index");
  return (
    <div className="flex items-center lg:hidden">
      <div className="drawer drawer-end pr-4  md:pr-4 lg:pr-10 xl:pr-12">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-4" className="drawer-button btn">
            <Menu />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <div
              className="flex items-center justify-between gap-2 my-10
          mx-auto px-1"
            >
              <Image src={Phone} alt="Phone" />
              <a className="font-bold" href="tel:+380673623523">
                +380673623523
              </a>
            </div>
            <ul className="flex flex-col">
              <li className="md:px-3 lg:px-7 xl:px-8 2xl:px-10 py-4 flex items-center">
                <Link
                  href="/about_us"
                  className="w-full flex justify-center font-bold"
                >
                  {t("Про_компанію")}
                </Link>
              </li>
              <li className="md:px-3 lg:px-7 xl:px-8 2xl:px-10 py-4 flex items-center">
                <Link
                  href="/services"
                  className="w-full flex justify-center font-bold"
                >
                  {t("Послуги")}
                </Link>
              </li>
              <li className="md:px-3 lg:px-7 xl:px-8 2xl:px-10 py-4 flex items-center">
                <Link
                  href="/gallery"
                  className="w-full flex justify-center font-bold"
                >
                  {t("Фотогалерея")}
                </Link>
              </li>
              <li className="md:px-3 lg:px-7 xl:px-8 2xl:px-10 py-4 flex items-center">
                <Link
                  href="/contacts"
                  className="w-full flex justify-center font-bold"
                >
                  {t("Контакти")}
                </Link>
              </li>
            </ul>
            <div className="my-10">
              <FlagSelect isMobile={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
