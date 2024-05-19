"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useTranslations } from "next-intl";
import toast from "react-hot-toast";

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
    .refine((files) => files?.length == 1, "Image is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`,
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted.",
    ),
});

type IFormInput = z.infer<typeof FormSchema>;

const ReviewForm = () => {
  const t = useTranslations("Index");
  const [previewImage, setPreviewImage] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { formState, reset, clearErrors, handleSubmit, register } =
    useForm<IFormInput>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        name: "",
        review: "",
        email: "",
        city: "",
        imageUrl: "",
      },
    });

  const handleFileChange = (e: any) => {
    setPreviewImage(e.target.files[0]);
    console.log(e);
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    setIsLoading(true);
    // turn into FormData
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("review", data.review);
    formData.append("email", data.email);
    formData.append("city", data.city);
    formData.append("imageUrl", previewImage);

    // post to /api
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api`, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        res.json();
        toast.success(t("Заявку відправлено"));
        setTimeout(() => {
          window.location.reload();
        }, 1000);
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
    <div className="absolute z-20 mx-auto lg:m-0 right-[2.5%] lg:right-[7.5%] left-[2.5%] lg:left-auto bottom-[30%] md:bottom-[15%] bg-background w-[85%] md:w-[50%] lg:w-[36rem] rounded-xl">
      {" "}
      <h2 className="font-['Futura'] align-middle text-center leading-[25px] my-4 text-2xl text-white font-bold">
        {t("Залишити відгук")}
      </h2>
      <form
        className="flex flex-col items-center space-y-4 p-2 w-full pb-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-between gap-4 w-[98%] lg:w-[90%] flex-col md:flex-row">
          <div className="relative bg-transparent  w-full max-w-[100%] rounded-lg pb-3">
            <input
              {...register("name")}
              type="text"
              placeholder={t("Ваше ім'я")}
              className={`input input-bordered ${formState.errors.name ? "input-error" : "input-info"} bg-white w-full max-w-[100%]`}
            />
            {formState.errors.name && (
              <p className="absolute text-red-600 text-[1rem] !p-1 !pt-0 !m-1 !mt-0">
                {t("name_required_invalid")}
              </p>
            )}
          </div>
          <div className="relative bg-transparent  w-full max-w-[100%] rounded-lg pb-3">
            <input
              {...register("city")}
              type="text"
              placeholder={t("Ваше місто")}
              className={`input input-bordered ${formState.errors.name ? "input-error" : "input-info"} bg-white w-full max-w-[100%]`}
            />
            {formState.errors.city && (
              <p className="absolute text-red-600 text-[1rem] !p-1 !pt-0 !m-1 !mt-0">
                {t("city_required_invalid")}
              </p>
            )}
          </div>
        </div>

        <div className="relative bg-transparent  w-[98%] lg:w-[90%] rounded-lg pb-3">
          <input
            {...register("email")}
            type="text"
            placeholder={t("Email")}
            className={`input input-bordered ${formState.errors.name ? "input-error" : "input-info"} bg-white w-full`}
          />
          {formState.errors.email && (
            <p className="absolute text-red-600 text-[1rem] !p-1 !pt-0 !m-1 !mt-0">
              {t("email_required_invalid")}
            </p>
          )}
        </div>
        <div className="relative bg-transparent mx-auto w-[98%] lg:w-[90%] rounded-lg pb-3">
          <div className="flex items-center justify-between w-full gap-4 mx-auto">
            <label htmlFor="chooseFile" className="btn">
              {t("Виберіть фото")}
            </label>
            <input
              {...register("imageUrl")}
              type="file"
              id="chooseFile"
              accept=".jpg, .jpeg, .png, .webp"
              onChange={handleFileChange}
              className={`file-input file-input-bordered ${formState.errors.name ? "input-error" : "input-info"} [&::file-selector-button]:hidden w-full p-[10px]`}
            />
          </div>
          {formState.errors.imageUrl && (
            <p className="absolute text-red-600 text-[1rem] !p-1 !pt-0 !m-1 !mt-0">
              {t("imageUrl_required_invalid")}
            </p>
          )}
        </div>
        <div className="relative bg-transparent  w-[98%] lg:w-[90%] rounded-lg pb-3">
          <textarea
            {...register("review")}
            placeholder={t("Відгук про компанію")}
            className={`input input-bordered ${formState.errors.name ? "input-error" : "input-info"} bg-white w-full py-2 my-0 lg:min-h-32 min-h-28 mx-auto`}
          />
          {formState.errors.review && (
            <p className="absolute text-red-600 text-[1rem] !p-1 !pt-0 !m-1 !mt-0 transform -translate-y-2">
              {t("review_required_invalid")}
            </p>
          )}
        </div>
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
