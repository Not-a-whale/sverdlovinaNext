import { PhoneLink } from "@/components/shared/phone-link";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

const Footer = () => {
  const t = useTranslations("Index");
  return (
    <footer className="w-full px-[7.5%] bg-background flex justify-between items-center min-h-[7.5vh] *:text-white">
      <div className="text-sm breadcrumbs *:text-lg hidden lg:block">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} href={"/about_us"}>
              {t("Про_компанію")}
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} href={"/services"}>
              {t("Послуги")}
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} href={"/gallery"}>
              {t("Фотогалерея")}
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} href={"/contacts"}>
              {t("Контакти")}
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-2 mx-auto lg:mx-0">
        <PhoneLink isWhite={true} />
      </div>
    </footer>
  );
};

export default Footer;
