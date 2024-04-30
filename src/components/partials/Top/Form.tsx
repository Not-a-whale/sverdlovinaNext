"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(4).max(50),
  phone: z.string().min(7).max(13),
  email: z.string().email(),
});

type IFormInput = z.infer<typeof FormSchema>;

const MainForm = () => {
  const { formState, control, handleSubmit } = useForm<IFormInput>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(formState.errors);
  };

  return (
    <div className="w-full lg:w-[75%] 2xl:w-1/2 ml-auto flex flex-col items-center bg-white/20 backdrop-blur-[120px] rounded-[13px]">
      <h2 className="font-['Futura'] align-middle text-center leading-[25px] my-4 text-2xl text-white">
        Замовити <br /> консультацію
      </h2>
      <form
        className="flex flex-col items-center space-y-4 p-2 w-full pb-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="Ваше ім'я"
              className="input input-bordered input-info bg-white/80 w-full max-w-[90%]"
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="Номер телефону"
              className="input input-bordered input-info bg-white/80 w-full max-w-[90%]"
            />
          )}
        />
        {formState.errors.phone && (
          <p className="text-red-600">This field is required</p>
        )}
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="Email"
              className="input input-bordered input-info bg-white/80 w-full max-w-[90%]"
            />
          )}
        />
        <button className="btn btn-info text-white w-full max-w-[90%] text-lg">
          Надіслати заявку
        </button>
      </form>
    </div>
  );
};

export default MainForm;
