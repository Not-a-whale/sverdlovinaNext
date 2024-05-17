import { ReactNode } from "react";
import { Link } from "@/navigation";

export const richTextConfig = {
  important: (chunks: ReactNode) => <b>{chunks}</b>,
  blue: (chunks: ReactNode) => (
    <span className="text-background text-[3.5rem] leading-normal">
      {chunks}
    </span>
  ),
  requestLink: (chunks: ReactNode) => <Link href="/">{chunks}</Link>,
  unorderedlist: (chunks: ReactNode) => <ul>{chunks}</ul>,
  unorderedlistitem: (chunks: ReactNode) => <li>{chunks}</li>,
  phoneLink: (chunks: ReactNode) => (
    <a className="font-bold" href="tel:+380673623523">
      {chunks}
    </a>
  ),
};
