import MainForm from "@/components/partials/Top/Form";

type TopProps = {
  children?: React.ReactNode;
  heading: string;
  description: string;
};

const Top = ({ children, heading, description }: TopProps) => {
  const handleFormSubmit = (data: {
    name: string;
    phone: string;
    email: string;
  }) => {
    console.log(data);
  };

  return (
    <div>
      <div
        className="absolute flex
        justify-between w-[90%] left-[5%] right-[5%]
        z-20 top-1/2 transform -translate-y-1/2"
      >
        <div className="max-w-[45%]">
          <h1
            className="font-['Futura']
           md:text-[1rem] lg:text-[2rem] xl:text-[4rem] leading-[4rem] font-bold text-white"
          >
            {heading}
          </h1>
          <p className="my-8 text-white md:text-md lg:text-lg xl:text-xl">
            {description}
          </p>
          {/*
          <Button
            className="text-white border-2 border-white px-8 py-2 rounded-full"
            label="Більше"
            rounded
          />*/}
        </div>
        <div className="flex w-[45%]">
          <MainForm />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Top;
