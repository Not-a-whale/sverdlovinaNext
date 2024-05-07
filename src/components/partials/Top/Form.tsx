"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { useState } from "react";

const FormSchema = z.object({
  name: z.string().min(4).max(50),
  phone: z.string().min(7).max(20),
  email: z.string().email(),
});

type IFormInput = z.infer<typeof FormSchema>;

const MainForm = () => {
  const t = useTranslations("Index");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    formState,
    register,
    resetField,
    control,
    reset,
    handleSubmit,
    clearErrors,
  } = useForm<IFormInput>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      phone: "",
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
        //toast.success(t("Заявку відправлено"));
      })
      .catch((error) => {
        console.error("Error:", error);
        //toast.error(t("Помилка відправлення"));
      })
      .finally(() => {
        setIsLoading(false);
        clearErrors();
        reset();
      });
  };

  return (
    <div className="w-full lg:w-[75%] 2xl:w-1/2 ml-auto flex flex-col items-center bg-white/20 backdrop-blur-[120px] rounded-[13px]">
      <h2 className="font-['Futura'] align-middle text-center leading-[25px] my-4 text-2xl text-white">
        Замовити <br /> консультацію
      </h2>
      <form
        className={`flex flex-col items-center p-2 w-full pb-8`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative bg-transparent  w-full max-w-[90%] rounded-lg pb-8">
          <input
            {...register("name")}
            type="text"
            placeholder="Ваше ім'я"
            className={`input input-bordered ${formState.errors.name ? "input-error" : "input-info"} w-full bg-white/80`}
          />
          {formState.errors.name && (
            <p className="absolute text-red-600 text-[1rem] !p-0 !m-1">
              {t("name_required")}
            </p>
          )}
        </div>
        <div className="relative bg-transparent w-full max-w-[90%] rounded-lg pb-8">
          <input
            type="text"
            {...register("phone")}
            placeholder="Номер телефону"
            className={`input input-bordered ${formState.errors.name ? "input-error" : "input-info"} w-full bg-white/80`}
          />
          {formState.errors.phone && (
            <p className="absolute text-red-600 text-[1rem] !p-0 !m-1">
              {t("phone_required_invalid")}
            </p>
          )}
        </div>
        <div className="relative bg-transparent w-full max-w-[90%] rounded-lg pb-8">
          <input
            type="text"
            id="email"
            placeholder="Email"
            className={`input input-bordered ${formState.errors.name ? "input-error" : "input-info"} w-full bg-white/80`}
            {...register("email")}
          />
          {formState.errors.email && (
            <p className="absolute text-red-600 text-[1rem] !p-0 !m-1">
              {t("email_required_invalid")}
            </p>
          )}
        </div>
        <button
          className={`btn ${isLoading ? "btn-disabled" : "btn-info"} text-white w-full max-w-[90%] text-lg`}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? t("Відправка") : t("Відправити заявку")}
        </button>
      </form>
    </div>
  );
};

export default MainForm;
