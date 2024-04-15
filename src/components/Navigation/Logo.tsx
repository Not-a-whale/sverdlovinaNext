import Image from "next/image";
import MainLogo from "@/assets/images/MainLogo.svg";

type LogoProps = {
  isScrolled?: boolean;
};

const Logo = (props: LogoProps) => {
  return (
    <div className="flex gap-1 md:pl-4 lg:pl-10 xl:pl-12 py-4">
      <Image src={MainLogo} alt="Logo" />
      <div className="flex flex-col">
        <p className="uppercase font-bold text-xl text-background">
          sverdlovyna
        </p>
        <p
          className={`text-sm ${props.isScrolled ? "text-primary" : "text-white"}`}
        >
          буріння свердловин
        </p>
      </div>
    </div>
  );
};

export default Logo;
