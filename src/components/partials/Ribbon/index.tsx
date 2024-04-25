"use client";

import RibbonForm from "@/components/partials/Ribbon/Form";
import Logo from "@/components/shared/Logo";

const Ribbon = () => {
  return (
    <div
      className="
                  mt-72
                  w-full
                  h-[12.5rem]
                  bg-gradient-to-tr
                  from-[#138BF5]
                  to-[#78C0FF]
                  flex
                  items-center
                  justify-between
                  px-[5%]
  "
    >
      <Logo isLogoBg={false} isScrolled={true} isEnlarged={true} />
      <div className="w-1/2 flex items-center justify-between">
        <div className="flex flex-col w-fit">
          <h2 className="text-white uppercase text-2xl font-bold mb-4">
            Виникли запитання?
          </h2>
          <p className="text-white text-xl">
            Замов консультацію у нашого <br /> спеціаліста.
          </p>
        </div>
        <button
          onClick={() => {
            // @ts-ignore
            return document.getElementById("my_modal_4").showModal();
          }}
          className="btn bg-white text-background w-max max-w-xs xl:max-w-[90%] text-lg px-52"
        >
          Надіслати заявку
        </button>
      </div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <RibbonForm />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Ribbon;
