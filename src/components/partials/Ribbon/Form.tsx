import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(4).max(50),
  message: z.string().min(7).max(13),
  email: z.string().email(),
});

type IFormInput = z.infer<typeof FormSchema>;

const RibbonForm = () => {
  const { formState, control, handleSubmit } = useForm<IFormInput>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      message: "",
      email: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(formState.errors);
  };

  return (
    <>
      {" "}
      <h2 className="font-['Futura'] align-middle text-center leading-[25px] my-4 text-2xl text-primary">
        Написати нам
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
              className="input input-bordered input-info bg-white w-full max-w-xs xl:max-w-[90%]"
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="Email"
              className="input input-bordered input-info bg-white w-full max-w-xs xl:max-w-[90%]"
            />
          )}
        />
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <textarea
              {...field}
              placeholder="Ваше повідомлення"
              className="input input-bordered input-info bg-white w-full max-w-xs xl:max-w-[90%] py-2 min-h-32"
            />
          )}
        />
        {formState.errors.message && (
          <p className="text-red-600">This field is required</p>
        )}
        <button className="btn btn-info text-white w-full max-w-xs xl:max-w-[90%] text-lg">
          Відправити
        </button>
      </form>
    </>
  );
};

export default RibbonForm;
