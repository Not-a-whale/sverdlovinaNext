"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { useState } from "react";
import { useTranslations } from "next-intl";

const FormSchema = z.object({
  name: z.string().min(4).max(50),
  message: z.string().min(7).max(2000),
  email: z.string().email(),
});

type IFormInput = z.infer<typeof FormSchema>;

const RibbonForm = () => {
  const t = useTranslations("Index");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { formState, control, register, clearErrors, reset, handleSubmit } =
    useForm<IFormInput>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        name: "",
        message: "",
        email: "",
      },
    });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsLoading(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/send`, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => {
        res.json();
        toast.success(t("Заявку відправлено"));
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error(t("Помилка відправлення"));
      })
      .finally(() => {
        setIsLoading(false);
        clearErrors();
        reset();
      });
  };

  return (
    <>
      {" "}
      <h2 className="font-['Futura'] align-middle text-center leading-[25px] my-4 text-2xl text-primary">
        {t("Написати нам")}
      </h2>
      <form
        className="flex flex-col items-center space-y-4 p-2 w-full pb-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("name")}
          type="text"
          placeholder="Ваше ім'я"
          className="input input-bordered input-info bg-white w-full max-w-xs xl:max-w-[90%]"
        />
        {formState.errors.name && (
          <p className="text-red-600 text-[1rem] !p-1 !m-1">
            {t("name_required")}
          </p>
        )}
        <input
          {...register("email")}
          type="text"
          placeholder="Email"
          className="input input-bordered input-info bg-white w-full max-w-xs xl:max-w-[90%]"
        />
        {formState.errors.email && (
          <p className="text-red-600 text-[1rem] !p-1 !m-1">
            {t("email_required")}
          </p>
        )}
        <textarea
          {...register("message")}
          placeholder="Ваше повідомлення"
          className="input input-bordered input-info bg-white w-full max-w-xs xl:max-w-[90%] py-2 min-h-32"
        />
        {formState.errors.message && (
          <p className="text-red-600 text-[1rem] !p-1 !m-1">
            {t("message_required")}
          </p>
        )}
        <button
          className={`btn ${isLoading ? "btn-disabled" : "btn-info"} text-white w-full max-w-[90%] text-lg`}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? t("Відправка") : t("Відправити")}
        </button>
      </form>
    </>
  );
};

export default RibbonForm;
