"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useTranslations } from "next-intl";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const FormSchema = z.object({
  name: z.string().min(4).max(50),
  review: z.string().min(7).max(500),
  email: z.string().email(),
  city: z.string().min(4).max(50),
  imageUrl: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported.",
    ),
});

type IFormInput = z.infer<typeof FormSchema>;

const ReviewForm = () => {
  const t = useTranslations("Index");
  const [previewImage, setPreviewImage] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { formState, control, handleSubmit, register, getValues } =
    useForm<IFormInput>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        name: "",
        review: "",
        email: "",
        city: "",
        imageUrl: null,
      },
    });

  const handleFileChange = (e: any) => {
    setPreviewImage(e.target.files[0]);
    console.log(previewImage);
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    // turn into FormData
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("review", data.review);
    formData.append("email", data.email);
    formData.append("city", data.city);
    formData.append("imageUrl", previewImage);
    console.log(previewImage);

    // post to /api
    const res = await fetch("https://sverdlovina-next.vercel.app/api", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <div className="absolute z-20 mx-auto lg:m-0 right-[2.5%] lg:right-[7.5%] left-[2.5%] lg:left-auto bottom-[30%] md:bottom-[15%] bg-background w-[85%] md:w-[50%] lg:w-[36rem] rounded-xl">
      {" "}
      <h2 className="font-['Futura'] align-middle text-center leading-[25px] my-4 text-2xl text-white font-bold">
        Залишити відгук
      </h2>
      <form
        className="flex flex-col items-center space-y-4 p-2 w-full pb-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-between gap-4 w-[98%] lg:w-[90%] flex-col md:flex-row">
          <input
            {...register("name")}
            type="text"
            placeholder={t("Ваше ім'я")}
            className="input input-bordered input-info bg-white w-full max-w-[100%] xl:max-w-[49%]"
          />
          <input
            {...register("city")}
            type="text"
            placeholder={t("Ваше місто")}
            className="input input-bordered input-info bg-white w-full max-w-[100%] xl:max-w-[49%]"
          />
        </div>
        <input
          {...register("email")}
          type="text"
          placeholder={t("Email")}
          className="input input-bordered input-info bg-white w-[98%] lg:w-[90%]"
        />
        <div className="flex items-center justify-between w-[98%] lg:w-[90%] gap-4">
          <label htmlFor="chooseFile" className="btn">
            {t("Виберіть фото")}
          </label>
          <input
            {...register("imageUrl")}
            type="file"
            id="chooseFile"
            accept=".jpg, .jpeg, .png, .webp"
            onChange={handleFileChange}
            className="file-input file-input-bordered [&::file-selector-button]:hidden w-full p-[10px]"
          />
        </div>
        <textarea
          {...register("review")}
          placeholder={t("Відгук про компанію")}
          className="input input-bordered input-info bg-white w-[98%] lg:w-[90%] py-2 lg:min-h-32 min-h-28"
        />
        <button
          className={`btn bg-white text-background w-[98%] lg:w-[90%] text-lg ${isLoading ? "btn-disabled" : ""}`}
          disabled={isLoading}
        >
          {isLoading ? t("Відправка...") : t("Відправити")}
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
