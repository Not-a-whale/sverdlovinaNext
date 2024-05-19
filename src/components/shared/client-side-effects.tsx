"use client";

import RibbonForm from "@/components/partials/Ribbon/Form";
import { useRef } from "react";

export const ClientSideEffects = () => {
  const modalRef = useRef(null);

  const onCloseModal = () =>
    //@ts-ignore
    document.getElementById("main_modal").close();

  return (
    <>
      <dialog id="main_modal" className="modal" ref={modalRef}>
        <div className="modal-box">
          <RibbonForm onClose={onCloseModal} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};
