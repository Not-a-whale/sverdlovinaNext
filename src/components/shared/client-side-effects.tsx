"use client";

import RibbonForm from "@/components/partials/Ribbon/Form";

export const ClientSideEffects = () => {
  return (
    <>
      <dialog id="main_modal" className="modal">
        <div className="modal-box">
          <RibbonForm />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};
