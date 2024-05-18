"use client";

import { ReactNode } from "react";

type ModalTriggerLinkProps = {
  chunks: ReactNode;
};

export const ModalTriggerLink = ({ chunks }: ModalTriggerLinkProps) => {
  return (
    <a
      className="font-bold text-background text-[1.3rem] lg:text-[1.5rem] cursor-pointer"
      id="modal-open-link"
      onClick={() => {
        // @ts-ignore
        return document.getElementById("main_modal").showModal();
      }}
    >
      {chunks}
    </a>
  );
};
