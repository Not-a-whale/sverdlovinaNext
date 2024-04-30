import Image from "next/image";
import MainLogo from "@/assets/images/MainLogo.svg";
import { useTranslations } from "next-intl";
import Link from "next/link";

type LogoProps = {
  isScrolled?: boolean;
  isLogoBg?: boolean;
  isEnlarged?: boolean;
};

const Logo = ({
  isScrolled,
  isLogoBg = true,
  isEnlarged = false,
}: LogoProps) => {
  const t = useTranslations("Index");

  return (
    <Link
      className={`flex gap-1 pl-4 md:pl-4 lg:pl-10 xl:pl-12 py-4 transform ${isEnlarged ? "scale-150" : ""}`}
      href="/"
    >
      <Image src={MainLogo} alt="Logo" />
      <div className="flex flex-col">
        <p
          className={`uppercase font-bold text-xl ${isLogoBg ? "text-background" : "text-white"}`}
        >
          sverdlovyna
        </p>
        <p className={`text-md ${isScrolled ? "text-primary" : "text-white"}`}>
          {t("буріння_свердловин")}
        </p>
      </div>
    </Link>
  );
};

export default Logo;
