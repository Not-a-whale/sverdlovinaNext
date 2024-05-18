import { ReactNode } from "react";
import { ModalTriggerLink } from "@/components/shared/modal-trigger-link";
import Link from "next/link";

export const richTextConfig = {
  important: (chunks: ReactNode) => <b>{chunks}</b>,
  blue: (chunks: ReactNode) => (
    <span className="text-background text-[3.5rem] leading-normal">
      {chunks}
    </span>
  ),
  requestLink: (chunks: ReactNode) => <ModalTriggerLink chunks={chunks} />,
  unorderedlist: (chunks: ReactNode) => <ul>{chunks}</ul>,
  unorderedlistitem: (chunks: ReactNode) => <li>{chunks}</li>,
  phoneLink: (chunks: ReactNode) => (
    <a
      className="font-bold text-background text-[1.3rem] lg:text-[1.5rem]"
      href="tel:+380673623523"
    >
      {chunks}
    </a>
  ),
  linktoaboutus: (chunks: ReactNode) => <Link href="/about_us">{chunks}</Link>,
  break: (chunks: ReactNode) => <br />,
  contactslink: (chunks: ReactNode) => (
    <Link className="text-background" href="/contacts">
      {chunks}
    </Link>
  ),
  serviceslink: (chunks: ReactNode) => (
    <Link className="text-background" href="/services">
      {chunks}
    </Link>
  ),
};
