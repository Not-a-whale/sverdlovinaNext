import Image from "next/image";
import Phone from "@/assets/images/phone.svg";
import PhoneWhite from "@/assets/images/phone-white.svg";

type PhoneLinkProps = {
  isWhite?: boolean;
};

export const PhoneLink = ({ isWhite }: PhoneLinkProps) => {
  return (
    <>
      <Image src={isWhite ? PhoneWhite : Phone} alt="Phone" />
      <a className="font-bold" href="tel:+380673623523">
        +380673623523
      </a>
    </>
  );
};
