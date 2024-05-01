"use client";

import RibbonForm from "@/components/partials/Ribbon/Form";
import Logo from "@/components/shared/Logo";

const Ribbon = () => {
  return (
    <div
      className="
                  mt-36 md:mt-48 lg:mt-56 xl:mt-64 2xl:mt-72
                  w-full
                  lg:h-[12.5rem]
                  h-max
                  bg-gradient-to-tr
                  from-[#138BF5]
                  to-[#78C0FF]
                  flex
                  items-center
                  justify-between
                  px-[5%]
                  py-4
  "
    >
      <div className="hidden lg:block">
        <Logo isLogoBg={false} isScrolled={true} isEnlarged={true} />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-2 items-center justify-between">
        <div className="flex flex-col w-fit">
          <h2
            className="text-white uppercase text-2xl font-bold mb-4
            lg:text-left
            text-center"
          >
            Виникли запитання?
          </h2>
          <p
            className="text-white text-xl
            lg:text-left
            text-center"
          >
            Замов консультацію у нашого <br /> спеціаліста.
          </p>
        </div>
        <button
          onClick={() => {
            // @ts-ignore
            return document.getElementById("my_modal_4").showModal();
          }}
          className="btn bg-white text-background mt-4 lg:m-0 w-full md:w-1/2 max-w-xs xl:max-w-[90%] text-lg"
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
